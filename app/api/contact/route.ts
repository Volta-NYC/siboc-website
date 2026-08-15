import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SHEET_NAME = "Sheet1";
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  message: 3000,
} as const;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company_website?: unknown;
};

type FieldErrors = Partial<Record<keyof Pick<ContactPayload, "name" | "email" | "phone" | "message">, string>>;

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const fieldErrors: FieldErrors = {};
  const values = {
    name: cleanValue(payload.name).slice(0, MAX_LENGTHS.name + 1),
    email: cleanValue(payload.email).slice(0, MAX_LENGTHS.email + 1),
    phone: cleanValue(payload.phone).slice(0, MAX_LENGTHS.phone + 1),
    message: cleanValue(payload.message).slice(0, MAX_LENGTHS.message + 1),
  };

  if (!values.name) {
    fieldErrors.name = "Please enter your name.";
  } else if (values.name.length > MAX_LENGTHS.name) {
    fieldErrors.name = `Name must be ${MAX_LENGTHS.name} characters or fewer.`;
  }

  if (!values.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  } else if (values.email.length > MAX_LENGTHS.email) {
    fieldErrors.email = `Email must be ${MAX_LENGTHS.email} characters or fewer.`;
  }

  if (values.phone.length > MAX_LENGTHS.phone) {
    fieldErrors.phone = `Phone must be ${MAX_LENGTHS.phone} characters or fewer.`;
  }

  if (!values.message) {
    fieldErrors.message = "Please enter a message.";
  } else if (values.message.length > MAX_LENGTHS.message) {
    fieldErrors.message = `Message must be ${MAX_LENGTHS.message} characters or fewer.`;
  }

  return {
    fieldErrors,
    isValid: Object.keys(fieldErrors).length === 0,
    values,
  };
}

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error("Google Sheets environment variables are not configured.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        error: "Please submit the form again.",
      },
      { status: 400 },
    );
  }

  if (cleanValue(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const { fieldErrors, isValid, values } = validatePayload(payload);

  if (!isValid) {
    return NextResponse.json(
      {
        error: "Please correct the highlighted fields.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const { sheets, spreadsheetId } = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[new Date().toISOString(), values.name, values.email, values.phone, values.message]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to append contact submission to Google Sheets.", error);

    return NextResponse.json(
      {
        error: "We could not send your message right now. Please try again or call SIBOC.",
      },
      { status: 500 },
    );
  }
}
