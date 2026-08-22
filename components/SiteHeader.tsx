"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SiteImage from "@/components/SiteImage";
import { NAV, SITE } from "@/lib/siteData";

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const currentPathname = pathname.replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  function isActive(href: string) {
    const cleanHref = href.includes("#") ? href.split("#")[0] : href;
    if (cleanHref === "/") return currentPathname === "/";
    return currentPathname === cleanHref || currentPathname.startsWith(`${cleanHref}/`);
  }

  useEffect(() => {
    setOpen(false);
  }, [currentPathname]);

  useEffect(() => {
    if (!open) return;

    const menu = mobileMenuRef.current;
    const mobileButton = mobileButtonRef.current;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    background.forEach((element) => {
      element.inert = true;
    });

    const timer = window.setTimeout(() => {
      menu?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) return;

      const menuItems = Array.from(
        menu.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')
      );
      const focusable = mobileButton ? [mobileButton, ...menuItems] : menuItems;
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      background.forEach((element) => {
        element.inert = false;
      });
      mobileButton?.focus();
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <Link href="/" className="brand" aria-label="SIBOC home" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <SiteImage
                src={SITE.logo}
                width={170}
                height={52}
                alt=""
                priority
                sizes="170px"
              />
            </span>
            <span className="brand-name">
              SIBOC <span>Staten Island Business Outreach Center</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {NAV.map((item) => {
              const hasChildren = "children" in item && item.children;
              const exactActive = isActive(item.href);
              const active = exactActive || Boolean(hasChildren && item.children?.some((child) => isActive(child.href)));
              const linkClass = `nav-link${active ? " active" : ""}${"cta" in item && item.cta ? " nav-cta" : ""}`;

              if (hasChildren) {
                return (
                  <div key={item.href} className="nav-group">
                    <Link href={item.href} className={linkClass} aria-current={exactActive ? "page" : undefined}>
                      {item.label}
                      <span className="nav-chevron" aria-hidden="true" />
                    </Link>
                    <div className="submenu" aria-label={`${item.label} submenu`}>
                      {item.children.map((child) => {
                        const childActive = isActive(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`submenu-link${childActive ? " active" : ""}`}
                            aria-current={childActive ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mobile-nav-actions">
            <Link href="/donate" className="mobile-donate" onClick={() => setOpen(false)}>
              Donate
            </Link>
            <button
              ref={mobileButtonRef}
              className="menu-toggle"
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <nav
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
      >
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
    </>
  );
}
