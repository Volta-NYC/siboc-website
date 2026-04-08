export const SITE = {
  name: "SIBOC",
  fullName: "Staten Island Business Outreach Center",
  mission: "Our mission is to empower small business on Staten Island.",
  socials: {
    instagram: "https://www.instagram.com/siboc_nyc/",
    facebook: "https://www.facebook.com/sibocnyc",
  },
  external: {
    donate: "https://siboc.org/donate/",
    official: "https://siboc.org/",
  },
  logo: "https://siboc.org/wp-content/uploads/2023/11/cropped-tmp_1355_2-17-2021_112718_-removebg-preview.png",
  heroImage:
    "https://siboc.org/wp-content/uploads/2024/07/DSC09134-2048x1367.jpg",
  pageHeaderImage:
    "https://siboc.org/wp-content/uploads/2023/08/DSC_0054-2048x1362.jpg",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "M/WBE Certification", href: "/m-wbe-certification" },
  { label: "Entrepreneur Assistance Center", href: "/entrepreneurial-assistance-center" },
  { label: "Women's Business Center", href: "/womens-business-center" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Forest Ave West", href: "/forest-avenue-west" },
      { label: "Forest Ave BID", href: "/forest-avenue-bid" },
      { label: "Forest Ave BID Website", href: "https://forestavenuebid.com/", external: true },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
] as const;

export const SERVICE_SUMMARY =
  "We empower Staten Island's small business community through a combination of business and workforce assistance such as one-on-one counseling, business plan development, financial literacy, seminars, webinars, entrepreneurship training classes, and assistance with M/WBE certification, contracting, and related help.";

export const SERVICE_LINKS = [
  {
    label: "M/WBE Certification",
    href: "/m-wbe-certification",
    image: "https://siboc.org/wp-content/uploads/2023/08/tiny-treasurers-grand-opening.jpg",
    description:
      "The City of New York Minority and Women-Owned Business Enterprises (M/WBE) Program expands opportunities for minority and women entrepreneurs to access government contracts and grow their businesses.",
  },
  {
    label: "Entrepreneur Assistance Center",
    href: "/entrepreneurial-assistance-center",
    image: "https://siboc.org/wp-content/uploads/2023/08/EAC-Center-Fall-2022-class.jpg",
    description:
      "Entrepreneurship Assistance Centers (EAC) is a program that provide support services to individuals who are interested in starting or recently started their own business, or entrepreneurs seeking to expand or strengthen their early-stage business.",
  },
  {
    label: "Women's Business Center",
    href: "/womens-business-center",
    image: "https://siboc.org/wp-content/uploads/2023/08/honorees.jpg",
    description:
      "Women's Business Centers (WBCs) are a part a national network of entrepreneurship centers throughout the United States and its territories, which are designed to assist women in starting and growing small businesses.",
  },
] as const;

export const PROJECT_LINKS = [
  {
    label: "Forest Avenue West",
    href: "/forest-avenue-west",
    image: "https://siboc.org/wp-content/uploads/2023/08/Forest-West-Steering-Committe-1.jpg",
    description:
      "The Staten Island Business Outreach Center has recently started business improvement district (BID) exploration efforts in the Forest Avenue West area of Staten Island, from Manor Road-Willowbrook Road.",
  },
  {
    label: "Forest Avenue BID",
    href: "/forest-avenue-bid",
    image: "https://siboc.org/wp-content/uploads/2024/02/FABID-New-Logo.jpg",
    description:
      "SIBOC actively manages the Forest Avenue Business Improvement District (BID).",
  },
] as const;

export const ABOUT_PARAGRAPHS = [
  "The Staten Island Business Outreach Center (SIBOC) is a not for profit organization that has been serving the community of Staten Island since 1980 providing small business development programs & technical assistance.",
  "At SIBOC, our mission is clear: to empower, educate, and elevate the Staten Island community, fostering a sustainable and inclusive economic future for everyone.",
  "SIBOC is dedicated to fostering inclusive economic growth on Staten Island by providing tailored technical assistance, one-on-one counseling, and FREE programs to all small business owners and entrepreneurs.",
  "As a Women's Business Center (WBC) and a proud partner of the U.S. Small Business Administration, we are committed to empowering entrepreneurs from diverse backgrounds, with a focus on fostering economic opportunities for underserved communities.",
  "SIBOC actively collaborates with small businesses, administers the Forest Avenue BID, and addresses quality of life issues, ensuring a holistic approach to community well-being.",
] as const;

export const STAFF_TEAM = [
  {
    name: "Nina Flores",
    role: "Executive Director",
    image: "https://siboc.org/wp-content/uploads/2024/02/Nina-Headshot-1024x1024.jpg",
  },
  {
    name: "Linda Rodriguez",
    role: "EAC Program Manager",
    image: "https://siboc.org/wp-content/uploads/2024/02/Linda-Headshot-1024x1024.jpg",
  },
  {
    name: "Gabriela Velazquez",
    role: "Program Assistant",
    image: "https://siboc.org/wp-content/uploads/2024/12/Gabriela1-1024x1024.jpeg",
  },
  {
    name: "Rosanna Gottlieb",
    role: "Program Coordinator",
    image: "https://siboc.org/wp-content/uploads/2025/05/Rosanna-797x1024.jpg",
  },
] as const;

export const STAFF_BOARD = [
  "Teresa Cirelli — President",
  "Roy Rucci — Vice President",
  "Mike Bloomfield — Treasurer",
  "Nancy Nix — Corporate Secretary",
  "Enrico Bawar",
  "Karalyn P. Buono, Esq",
  "Timothy Castanza",
  "Eric Campione",
  "Doreen Cugno",
  "Joseph Cuozzo",
  "Maureen Fairlie",
  "Robert Myers",
  "Narmada Tissera",
] as const;

export const TESTIMONIALS = [
  "The term 'It takes a village' has been said so often that it could lose some of its luster, except for one fact, that it's true.",
  "Through your guidance, encouragement, and patience [She Media attracted] the largest airport advertising and sponsorship contract in the U.S.",
  "It's wonderful to be working with people who truly care about our small businesses.",
] as const;

export const CONTACT = {
  address: "686 Forest Ave, SI, NY 10310",
  phone: "(718) 816-4775",
  email: "info@siboc.org",
} as const;

export const EVENTS_TEXT =
  "SIBOC Empowerment Breakfast 2025: Join us on Wednesday, November 12th at LiGreci's Staaten as we celebrate business owners and community leaders making a difference on Staten Island.";

export const ABOUT_GALLERY = [
  "https://siboc.org/wp-content/uploads/2024/02/Staff-Photo-1024x858.jpg",
  "https://siboc.org/wp-content/uploads/2025/01/SIBOC-Board-1-1024x768.jpg",
  "https://siboc.org/wp-content/uploads/2023/08/jade-1024x768.jpg",
] as const;

export const BOARD_PHOTO = "https://siboc.org/wp-content/uploads/2025/01/SIBOC-Board-1-1024x768.jpg";
