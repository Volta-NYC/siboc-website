import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { CONTACT, SITE } from "@/lib/siteData";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <SiteImage src={SITE.logo} width={144} height={44} alt="Staten Island Business Outreach Center" sizes="144px" />
          <p>{SITE.description}</p>
          <div className="social-links" aria-label="Social links">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <nav aria-label="Footer about links">
          <h2>Explore</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/staff">Staff / Team</Link></li>
            <li><Link href="/client-testimonials">Client Testimonials</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/donate">Donate</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer service links">
          <h2>Services</h2>
          <ul>
            <li><Link href="/services">Services Overview</Link></li>
            <li><Link href="/m-wbe-certification">M/WBE Certification</Link></li>
            <li><Link href="/entrepreneurial-assistance-center">Entrepreneur Assistance Center</Link></li>
            <li><Link href="/womens-business-center">Women&apos;s Business Center</Link></li>
            <li><Link href="/services#commercial-revitalization">Commercial Revitalization</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer project and contact links">
          <h2>Contact</h2>
          <ul>
            <li>{CONTACT.address}</li>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={CONTACT.emailHref}>{CONTACT.email}</a></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact SIBOC</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <p>&copy; {year} Staten Island Business Outreach Center. All rights reserved.</p>
          <p>
            <a href="/contact">Accessibility feedback</a>
            <span aria-hidden="true"> · </span>
            <a className="footer-credit-link" href="https://www.novusnyc.org" target="_blank" rel="noopener noreferrer">Made by Novus</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
