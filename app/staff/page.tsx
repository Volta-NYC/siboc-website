import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { SITE, STAFF_BOARD, STAFF_TEAM } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Staff / Team | SIBOC",
  description: "Meet SIBOC staff and view the Staten Island Business Outreach Center Board of Directors.",
};

export default function StaffPage() {
  return (
    <main id="main-content">
      <section className="section page-intro container">
        <p className="eyebrow">SIBOC</p>
        <h1>Staff / Team</h1>
        <p>Meet the SIBOC staff and view the Staten Island Business Outreach Center Board of Directors.</p>
        <Link href="/about" className="text-link">Read about SIBOC</Link>
      </section>

      <section className="section container">
        <div className="staff-grid">
          {STAFF_TEAM.map((member) => (
            <article className="staff-card" key={`${member.name}-${member.role}`}>
              <SiteImage src={member.image} alt={`${member.name}, ${member.role}`} />
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-band">
        <div className="container content-grid">
          <div>
            <SiteImage className="rounded-image" src={SITE.images.board} alt="SIBOC Board of Directors group photo" sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow">Board of Directors</p>
            <div className="directory-grid compact">
              {STAFF_BOARD.map((member) => (
                <article className="directory-card" key={member.name}>
                  <h3>{member.name}</h3>
                  {member.role ? <p>{member.role}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
