"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/siteData";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="SIBOC home">
          <img src={SITE.logo} width={142} height={43} alt="SIBOC" className="brand-logo" />
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) || pathname.startsWith("/forest-avenue");

            if ("children" in item && item.children) {
              return (
                <div key={item.href} className={`nav-dropdown ${active ? "active" : ""}`}>
                  <Link href={item.href} className={active ? "nav-link active" : "nav-link"}>
                    {item.label}
                  </Link>
                  <div className="dropdown-menu" role="menu" aria-label={`${item.label} submenu`}>
                    {item.children.map((child) =>
                      "external" in child && child.external ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dropdown-link"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link key={child.href} href={child.href} className="dropdown-link">
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={active ? "nav-link active" : "nav-link"}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
