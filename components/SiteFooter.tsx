import { SITE } from "@/lib/siteData";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-rich">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand footer-logo-badge">
            <img src={SITE.logo} width={130} height={40} alt="SIBOC" />
          </p>
          <p className="footer-blurb">
            Empowering small business owners and entrepreneurs across Staten Island through free services, programs,
            and community partnerships.
          </p>
          <div className="footer-social">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
              </svg>
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z"
                />
              </svg>
            </a>
            <a href={SITE.external.official} target="_blank" rel="noopener noreferrer" aria-label="Official Site">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.08a15.4 15.4 0 00-1.04-5.03A8.04 8.04 0 0118.9 11zM12 4.05c.83 1.2 1.74 3.54 1.89 6.95h-3.78C10.26 7.59 11.17 5.25 12 4.05zM9.22 5.97A15.4 15.4 0 008.18 11H5.1a8.04 8.04 0 014.12-5.03zM4.6 13h3.58c.14 2.43.72 4.62 1.59 6.03A8.04 8.04 0 014.6 13zm5.51 0h3.78c-.15 3.41-1.06 5.75-1.89 6.95-.83-1.2-1.74-3.54-1.89-6.95zm4.67 6.03c.87-1.41 1.45-3.6 1.59-6.03h3.58a8.04 8.04 0 01-5.17 6.03z" />
              </svg>
            </a>
          </div>
        </div>

        <nav>
          <h3>Explore</h3>
          <ul className="footer-list">
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </nav>

        <nav>
          <h3>Programs</h3>
          <ul className="footer-list">
            <li><a href="/m-wbe-certification">M/WBE Certification</a></li>
            <li><a href="/entrepreneurial-assistance-center">Entrepreneur Assistance Center</a></li>
            <li><a href="/womens-business-center">Women&apos;s Business Center</a></li>
            <li><a href="/services#testimonials">Client Testimonials</a></li>
          </ul>
        </nav>

        <nav>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>686 Forest Ave, Staten Island, NY 10310</li>
            <li><a href="tel:17188164775">(718) 816-4775</a></li>
            <li><a href="mailto:info@siboc.org">info@siboc.org</a></li>
            <li><a href="/contact">Contact Page</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <p>&copy; {year} Staten Island Business Outreach Center. All rights reserved.</p>
          <p>Staten Island, New York</p>
        </div>
      </div>
    </footer>
  );
}
