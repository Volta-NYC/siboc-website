export const SITE = {
  name: "SIBOC",
  fullName: "Staten Island Business Outreach Center",
  mission: "Our mission is to empower small business on Staten Island.",
  description:
    "SIBOC provides free small business counseling, training, certification assistance, and commercial revitalization support for Staten Island.",
  origin: "https://siboc-website.vercel.app",
  logo: "/images/siboc-logo.png",
  images: {
    hero: "/images/hero-community.jpg",
    page: "/images/page-community.jpg",
    about: "/images/about-team.jpg",
    board: "/images/board.jpg",
    mwbe: "/images/mwbe.jpg",
    eac: "/images/eac.jpg",
    wbc: "/images/wbc.jpg",
    projects: "/images/projects.jpg",
    forestWest: "/images/forest-west.jpg",
    forestWestLogo: "/images/forest-west-logo.png",
    forestBidLogo: "/images/forest-bid-logo.jpg",
    events: "/images/events-breakfast.jpg",
    contact: "/images/contact.jpg",
    donate: "/images/donate.jpg",
    donateQr: "/images/donate-qr.png",
  },
  socials: {
    instagram: "https://www.instagram.com/siboc_nyc/",
    facebook: "https://www.facebook.com/sibocnyc",
  },
  external: {
    nycMwbe: "https://www.nyc.gov/site/sbs/businesses/certify-with-the-city.page",
    eac: "https://esd.ny.gov/eac-directory?page=2",
    bocWbc: "https://bocwbc.org/",
    forestBid: "https://forestavenuebid.com/",
    westBrightonSurvey: "https://arcg.is/yqmef",
    paypal: "https://www.paypal.com/donate/?hosted_button_id=E6MPEH8WXFJFL",
    breakfastTickets: "https://givebutter.com/sibocempowerment2025",
  },
} as const;

export const CONTACT = {
  address: "686 Forest Ave, Staten Island, NY 10310",
  shortAddress: "686 Forest Ave, SI, NY 10310",
  phone: "(718) 816-4775",
  phoneHref: "tel:17188164775",
  email: "info@siboc.org",
  emailHref: "mailto:info@siboc.org",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About SIBOC", href: "/about" },
      { label: "Staff / Team", href: "/staff" },
      { label: "Client Testimonials", href: "/client-testimonials" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services Overview", href: "/services" },
      { label: "M/WBE Certification", href: "/m-wbe-certification" },
      { label: "Entrepreneur Assistance Center", href: "/entrepreneurial-assistance-center" },
      { label: "Women's Business Center", href: "/womens-business-center" },
      { label: "Commercial Revitalization", href: "/services#commercial-revitalization" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "West Brighton CDNA", href: "/projects#west-brighton-cdna" },
      { label: "Forest Avenue West", href: "/forest-avenue-west" },
      { label: "Forest Avenue BID", href: "/forest-avenue-bid" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate", cta: true },
] as const;

export const ABOUT_PARAGRAPHS = [
  "The Staten Island Business Outreach Center (SIBOC) is a not for profit organization that has been serving the community of Staten Island since 1980 providing small business development programs and technical assistance.",
  "At SIBOC, our mission is to empower, educate, and elevate the Staten Island community, fostering a sustainable and inclusive economic future for everyone.",
  "SIBOC is dedicated to fostering inclusive economic growth on Staten Island by providing tailored technical assistance, one-on-one counseling, and FREE programs to all small business owners and entrepreneurs.",
  "As a Women's Business Center (WBC) and a proud partner of the U.S. Small Business Administration, SIBOC is committed to empowering entrepreneurs from diverse backgrounds, with a focus on fostering economic opportunities for underserved communities.",
  "Through comprehensive business training, financial literacy education, and support with M/WBE certification, SIBOC equips entrepreneurs with practical business support. This work strengthens individual businesses and contributes to the broader economic, cultural, and social vitality of Staten Island communities.",
  "SIBOC actively collaborates with small businesses, administers the Forest Avenue BID, and addresses quality-of-life issues through community-centered neighborhood work.",
] as const;

export const TRUST_POINTS = [
  "Serving Staten Island Since 1980",
  "All Services Are Free",
  "Women's Business Center",
  "Partner of the U.S. Small Business Administration",
] as const;

export const SERVICE_SUMMARY =
  "SIBOC provides one-on-one counseling, business plan development, financial literacy, seminars, webinars, entrepreneurship training classes, M/WBE certification assistance, contracting assistance, and related business and workforce support. All services are FREE.";

export const SERVICES = [
  {
    label: "M/WBE Certification",
    href: "/m-wbe-certification",
    image: SITE.images.mwbe,
    description:
      "Free help understanding City certification, procurement pathways, and the benefits of selling to government.",
  },
  {
    label: "Entrepreneur Assistance Center",
    href: "/entrepreneurial-assistance-center",
    image: SITE.images.eac,
    description:
      "Training and technical assistance for people starting a business, recently launched, or strengthening an early-stage business.",
  },
  {
    label: "Women's Business Center",
    href: "/womens-business-center",
    image: SITE.images.wbc,
    description:
      "Business counseling for Staten Island entrepreneurs covering startup, expansion, planning, licensing, funding resources, and marketing.",
  },
  {
    label: "Commercial Revitalization",
    href: "/services#commercial-revitalization",
    image: SITE.images.projects,
    description:
      "Commercial district work including the Forest Avenue BID, Forest Avenue West BID exploration, and neighborhood corridor support.",
  },
] as const;

export const MWBE_BENEFITS = [
  "Better bid access on city-funded contracts",
  "Access to networking events",
  "Customized courses",
  "Targeted consultation",
] as const;

export const EAC_FEATURES = [
  "Evaluating the feasibility of starting a new business",
  "Business registration assistance",
  "60-hour business plan training course",
  "Financial and business management skill building",
  "Developing and executing marketing strategies",
  "Website development and ecommerce platform design",
  "Identifying and accessing capital and credit services",
  "Assistance with state procurement programs",
  "M/WBE Certification Assistance",
] as const;

export const WBC_FEATURES = [
  "Business Start Up or Expansion",
  "Business Plan Development",
  "Licensing and Permit Information",
  "Identifying Financial Resource Opportunities",
  "Marketing Research and Advertising",
  "Import/Export Information",
] as const;

export const PROJECTS = [
  {
    label: "West Brighton Commercial District Needs Assessment",
    href: "/projects#west-brighton-cdna",
    image: SITE.images.hero,
    imageFit: "cover",
    imagePosition: "center 38%",
    description:
      "A current CDNA with NYC Small Business Services studying Castleton Avenue and Forest Avenue business corridors in West Brighton.",
  },
  {
    label: "Forest Avenue West",
    href: "/forest-avenue-west",
    image: SITE.images.forestWest,
    imageFit: "cover",
    imagePosition: "center 42%",
    description:
      "BID exploration in the Forest Avenue West area of Staten Island, from Manor Road-Willowbrook Road.",
  },
  {
    label: "Forest Avenue BID",
    href: "/forest-avenue-bid",
    image: SITE.images.forestBidLogo,
    imageFit: "contain",
    imagePosition: "center",
    description: "SIBOC actively manages the Forest Avenue Business Improvement District.",
  },
] as const;

export const STAFF_TEAM = [
  { name: "Nina Flores", role: "Executive Director", image: "/images/staff-nina-flores.jpg" },
  { name: "Nina Flores", role: "Executive Director, SIBOC BID", image: "/images/staff-nina-flores-bid.jpg" },
  { name: "Linda Rodriguez", role: "EAC Program Manager", image: "/images/staff-linda-rodriguez.jpg" },
  { name: "Rosanna Gottlieb", role: "Program Coordinator", image: "/images/staff-rosanna-gottlieb.jpg" },
  {
    name: "Julianne Bunora",
    role: "Program Administrative Assistant",
    image: "/images/staff-julianne-bunora.jpg",
  },
  {
    name: "Christine Callan",
    role: "Commercial Revitalization Program Manager, N360",
    image: "/images/staff-christine-callan.jpg",
  },
  { name: "Al Bonadonna", role: "Business Development Specialist", image: "/images/staff-al-bonadonna.jpg" },
  {
    name: "Jessica Gonzales",
    role: "Neighborhood Development Specialist",
    image: "/images/staff-jessica-gonzales.jpg",
  },
] as const;

export const STAFF_BOARD = [
  { name: "Teresa Cirelli", role: "President" },
  { name: "Roy Rucci", role: "Vice President" },
  { name: "Mike Bloomfield", role: "Treasurer" },
  { name: "Nancy Nix", role: "Corporate Secretary" },
  { name: "Enrico Bawar", role: "" },
  { name: "Karalyn P. Buono, Esq", role: "" },
  { name: "Timothy Castanza", role: "" },
  { name: "Eric Campione", role: "" },
  { name: "Doreen Cugno", role: "" },
  { name: "Joseph Cuozzo", role: "" },
  { name: "Maureen Fairlie", role: "" },
  { name: "Robert Myers", role: "" },
  { name: "Narmada Tissera", role: "" },
] as const;

export const TESTIMONIALS = [
  {
    person: "Teresa Rampulla",
    title: "Marketing/Media",
    business: "She Media NY, LLC",
    website: "https://bitli.pro/1cAAE_faf21c19",
    quote:
      "Nina, the term \"It takes a village\" has been said so often that it could lose some of its luster, except for one fact, that it's true. As you may recall when I began incorporating She Media NY, LLC, I had my business plan, my marketing plan, my corporate structure, all things I am well versed in, yet no idea on how to get my city and state certifications. You made that happen: your knowledge of what certifications to apply for, how to apply for them, and let's face it, the hours sat in your office as you patiently went over the forms, applications, and requirements with me. As I was already taxed with the day-to-day business demands, you answered my questions at the ready, and when you didn't have an answer you had one back to me within the hour. As one application was approved, you shared with me others that would benefit our business and its model. At the end of the day, getting multiple City and State certifications. Through your guidance, encouragement, and patience She Media had the certifications to attract a Goliath-like Clear Channel to partner with and we won as its ACDBE/DBE/WBE local sales subcontractor in CCA's airport bid to the Port Authority of New York & New Jersey (PANYNJ): the largest airport advertising and sponsorship contract in the U.S., a 12-year contract no less. The Staten Island Business Outreach Center chose well when they appointed you the Director of BOC. I don't know of another person with the level of dedication, passion, and heart to be the driving force supporting businesses, women, and minorities within our community. So, it certainly does take a village, one filled with supportive friends, ones that can answer the hard questions, offer insight and advice, and be the court in which to bounce your ideas. Thank you again for being part of my village.",
  },
  {
    person: "Michelle Peralta",
    title: "Event Planner & Designer",
    business: "Josie Michelle Events",
    website: "http://www.josiemichelleevents.com/",
    quote:
      "I received help applying for MWBE, receiving education and information about funding. The WBC team has been incredibly responsive, proactive, informative, supportive and friendly. It's wonderful to be working with people who truly care about our small businesses. Thank you!",
  },
  {
    person: "Nancy Vargas",
    title: "Chief Executive Officer",
    business: "DH2 Limo",
    website: "https://www.dh2limo.com/",
    quote:
      "I met Nina Flores at an MWBE Procurement Event. I received help with filling out my MWBE Application for NYC, Fast Track to NYS and Port Authority. Nina always emails me with any opportunities she finds fitting. Nina and her team are absolutely a pleasure to work with. They truly have a great passion to assist the MWBE community with questions and provide resources. I've introduced many businesses to Nina that have an interest in the MWBE program and they have found great success working with her.",
  },
] as const;

export const FOREST_WEST_COMMITTEE = [
  { name: "Stacey Koutras", affiliation: "Elan Hair and Nail Salon" },
  { name: "Robert Fitzsimmons", affiliation: "Property Owner" },
  { name: "Maria Carrozza", affiliation: "The Cookie Jar" },
  { name: "Vincent Innocente", affiliation: "Northfield Bank" },
  { name: "Kim Ungaro", affiliation: "Ungaro's Pizzeria" },
  { name: "Leslie Velasquez", affiliation: "SBS" },
  { name: "Michael Melmed", affiliation: "SBS" },
  { name: "Craig Campbell", affiliation: "Doc Hennigan's" },
  { name: "Kim Avilez", affiliation: "Chase Bank" },
] as const;

export const BREAKFAST_2025 = {
  name: "SIBOC Empowerment Breakfast 2025",
  date: "Wednesday, November 12, 2025",
  venue: "LiGreci's Staaten",
  honorees: [
    "Robert Fitzsimmons, Jr. & Laura Volsario — Gateway Arms Realty Corp",
    "Shawn Stradford — Stradford Funeral Home",
    "Hala Maroc — Build a Dream Incubator",
    "Stephen Molloy — Molloy Electric",
  ],
  sponsors: [
    "Valley Bank — Lead Sponsor",
    "Rucci Oil — Networking Sponsor",
    "Seamen's Society — Community Sponsor",
    "Bridge Prep Charter School — Community Sponsor",
    "Forest Avenue BID — Community Sponsor",
    "Tekie Geek — Community Sponsor",
    "Gateway Arms Realty — Community Sponsor",
    "Stop & Stor — Community Sponsor",
    "Snappy Solutions — Friend Sponsor",
    "Wicked Stitches — Friend Sponsor",
    "Craft Chic Boutique — Event Decor Sponsor",
  ],
} as const;

export const GOOGLE_CALENDAR_EMBED =
  "https://calendar.google.com/calendar/embed?src=c_fd6a3b93c36c826d4dfa11b0099b40fa3545c9181a79fa10d48126d32eafe49e%40group.calendar.google.com&ctz=America%2FNew_York";

// TODO(content): SIBOC must verify the donation mailing address before production launch.
// The main contact address is 686 Forest Ave, while the legacy donate page lists 868 Forest Ave for mailed checks.
export const DONATION = {
  payableTo: "West Brighton Community Local Development",
  mailAddress: "868 Forest Ave, Staten Island, NY 10310",
  taxText:
    "*Your entire donation is 100% tax deductible. We are an I.R.S. registered 501(c)(3) tax-exempt organization.",
} as const;
