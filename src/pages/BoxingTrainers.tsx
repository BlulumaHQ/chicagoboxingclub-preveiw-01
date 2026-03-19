import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import boxingCoach from "@/assets/boxing-coach.jpg";

const BoxingTrainers = () => (
  <Layout>
    <PageHero
      title="Boxing Coaches"
      subtitle="Experienced coaches dedicated to developing fighters at every level."
      image={boxingCoach}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Our Coaches</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Chicago Boxing Club Coaches
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club's coaching staff brought decades of combined experience in boxing, muay thai, wrestling and mixed martial arts. Our coaches trained everyone from first-time beginners to professional fighters and Olympic Trials competitors.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Two new boxing gyms have grown out of Chicago Boxing Club — Sam Colonna now runs Sam Colonna Boxing Gym and Rick Ramos runs Bodyshot Boxing Club.
        </p>
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-extrabold text-foreground mb-4">Coaching Highlights</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Trained Olympic Trials competitor Kristin Gearhart</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Four consecutive Chicago Gold Glove Tournament Team Championships (2009–2012)</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Expert instruction across boxing, muay thai, wrestling and jiu-jitsu</li>
          </ul>
        </div>
        <Link
          to="/contactus.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default BoxingTrainers;
