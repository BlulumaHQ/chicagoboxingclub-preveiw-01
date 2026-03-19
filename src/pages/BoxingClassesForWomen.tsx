import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import womenBoxing from "@/assets/women-boxing.jpg";

const BoxingClassesForWomen = () => (
  <Layout>
    <PageHero
      title="Boxing Classes for Women"
      subtitle="Boxing 101, kickboxing and cardio boxing classes designed for women of all fitness levels."
      image={womenBoxing}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Women's Programs</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Boxing Training for Women in Chicago
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club offered dedicated boxing classes for women, including Boxing 101, kickboxing and cardio boxing. These classes were designed to empower women through fitness, self-defense skills and the confidence that comes from learning a combat sport.
        </p>
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-extrabold text-foreground mb-4">Women's Class Options</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Boxing 101 class for women</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Kickboxing class for women</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Cardio boxing class for women</li>
          </ul>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-8 italic">
          Now a pro, Kristin Gearhart trained for the Olympic Trials at Chicago Boxing Club.
        </p>
        <Link
          to="/chicagoboxingclubcoupons.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Get Free Class Coupons
        </Link>
      </div>
    </section>
  </Layout>
);

export default BoxingClassesForWomen;
