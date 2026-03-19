import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

const PageHero = ({ title, subtitle, image, ctaText, ctaLink, overlay = true }: PageHeroProps) => (
  <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    {overlay && <div className="absolute inset-0 hero-overlay" />}
    <div className="relative z-10 container-tight text-center py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4 animate-fade-in-up">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      )}
      {ctaText && ctaLink && (
        <Link
          to={ctaLink}
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          {ctaText}
        </Link>
      )}
    </div>
  </section>
);

export default PageHero;
