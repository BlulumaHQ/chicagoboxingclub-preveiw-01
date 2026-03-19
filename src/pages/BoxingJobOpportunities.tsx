import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import boxingCoach from "@/assets/boxing-coach.jpg";

const BoxingJobOpportunities = () => (
  <Layout>
    <PageHero
      title="Boxing and Martial Arts Job Opportunities"
      subtitle="Career opportunities in boxing, martial arts and combat sports in Chicago."
      image={boxingCoach}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Careers</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Work in Combat Sports
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club has been a hub for boxing and martial arts talent in the Chicago area. If you're passionate about combat sports and interested in coaching, training, event production or gym operations, the Chicago fight community has opportunities for dedicated professionals.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          For current opportunities at Chicago's top fight gyms, including Sam Colonna Boxing Gym and Bodyshot Boxing Club, reach out to us directly.
        </p>
        <Link
          to="/contactus.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Contact Us About Opportunities
        </Link>
      </div>
    </section>
  </Layout>
);

export default BoxingJobOpportunities;
