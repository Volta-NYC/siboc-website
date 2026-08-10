"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SiteImage from "@/components/SiteImage";
import { NAV, SITE } from "@/lib/siteData";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return pathname === href.split("#")[0];
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="SIBOC home" onClick={() => setOpen(false)}>
          <SiteImage src={SITE.logo} width={150} height={46} alt="Staten Island Business Outreach Center" priority sizes="150px" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV.map((item) => {
            const active = isActive(item.href) || ("children" in item && item.children?.some((child) => isActive(child.href)));
            const linkClass = `nav-link${active ? " active" : ""}${"cta" in item && item.cta ? " nav-cta" : ""}`;

            if ("children" in item && item.children) {
              return (
                <div key={item.href} className="nav-group">
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                  <div className="submenu" aria-label={`${item.label} submenu`}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="submenu-link">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile navigation">
        <div className="container mobile-nav-inner">
          {NAV.map((item) => (
            <div key={item.href} className="mobile-nav-group">
              <Link
                href={item.href}
                className={`mobile-nav-link${"cta" in item && item.cta ? " mobile-cta" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
