import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/cbc-logo.png";

const classesDropdown = [
  { label: "Boxing Classes", to: "/boxingclasses.html" },
  { label: "Youth Boxing", to: "/youthboxing.html" },
  { label: "Women's Boxing", to: "/boxingclassesforwomen.html" },
  { label: "Muay Thai", to: "/muaythai.html" },
  { label: "Wrestling", to: "/wrestlingclasses.html" },
  { label: "Jiu-Jitsu & MMA", to: "/jiujitsu.html" },
];

const moreDropdown = [
  { label: "Coupons", to: "/chicagoboxingclubcoupons.html" },
  { label: "Photos", to: "/boxinggymphotos.html" },
  { label: "Videos & News", to: "/chicagoboxingclubvideosandnews.html" },
  { label: "Careers", to: "/boxingjobopportunities.html" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setClassesOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Chicago Boxing Club" className="h-[75px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/goldglovesfightnights.html">Events</NavLink>

          <Dropdown
            label="Classes"
            items={classesDropdown}
            open={classesOpen}
            setOpen={setClassesOpen}
          />

          <NavLink to="/boxingstudents.html">Memberships</NavLink>
          <NavLink to="/boxingtrainers.html">Coaches</NavLink>

          <Dropdown
            label="More"
            items={moreDropdown}
            open={moreOpen}
            setOpen={setMoreOpen}
          />

          <NavLink to="/contactus.html">Contact</NavLink>
        </nav>

        <a
          href="tel:312-450-7850"
          className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          <Phone className="w-4 h-4" />
          312-450-7850
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="container-tight py-6 flex flex-col gap-1">
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/goldglovesfightnights.html">Boxing Event Production</MobileLink>
            <div className="py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Classes</div>
            {classesDropdown.map((item) => (
              <MobileLink key={item.to} to={item.to}>{item.label}</MobileLink>
            ))}
            <div className="py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">Info</div>
            <MobileLink to="/boxingstudents.html">Memberships</MobileLink>
            <MobileLink to="/boxingtrainers.html">Coaches</MobileLink>
            {moreDropdown.map((item) => (
              <MobileLink key={item.to} to={item.to}>{item.label}</MobileLink>
            ))}
            <MobileLink to="/contactus.html">Contact Us</MobileLink>
            <a
              href="tel:312-450-7850"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              312-450-7850
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === "/" && location.pathname === "/");
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors rounded ${
        isActive ? "text-secondary" : "text-foreground/80 hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

const MobileLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded transition-colors"
  >
    {children}
  </Link>
);

const Dropdown = ({
  label,
  items,
  open,
  setOpen,
}: {
  label: string;
  items: { label: string; to: string }[];
  open: boolean;
  setOpen: (v: boolean) => void;
}) => (
  <div
    className="relative"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-colors rounded">
      {label}
      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && (
      <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-md shadow-xl py-2 z-50">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Header;
