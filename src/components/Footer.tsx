import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Boxing Classes", to: "/boxingclasses.html" },
  { label: "Youth Boxing", to: "/youthboxing.html" },
  { label: "Women's Boxing", to: "/boxingclassesforwomen.html" },
  { label: "Muay Thai", to: "/muaythai.html" },
  { label: "Wrestling", to: "/wrestlingclasses.html" },
  { label: "Jiu-Jitsu & MMA", to: "/jiujitsu.html" },
];

const secondaryLinks = [
  { label: "Event Production", to: "/goldglovesfightnights.html" },
  { label: "Memberships", to: "/boxingstudents.html" },
  { label: "Coaches", to: "/boxingtrainers.html" },
  { label: "Photos", to: "/boxinggymphotos.html" },
  { label: "Videos & News", to: "/chicagoboxingclubvideosandnews.html" },
  { label: "Careers", to: "/boxingjobopportunities.html" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold tracking-tight text-foreground mb-4">
              Chicago Boxing Club
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chicago's information source for serious fight training gyms — boxing, muay thai, jiu-jitsu, wrestling and MMA.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Classes
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Secondary */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {secondaryLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:312-450-7850"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  312-450-7850
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@chicagoboxingclub.com"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  info@chicagoboxingclub.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://twitter.com/boxing_joe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                @boxing_joe on X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border">
        <div className="container-tight py-5 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Chicago Boxing Club. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
