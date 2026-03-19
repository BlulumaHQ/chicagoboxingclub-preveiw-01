import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import wrestling from "@/assets/wrestling.jpg";

const WrestlingClasses = () => (
  <Layout>
    <PageHero
      title="Wrestling Classes"
      subtitle="Wrestling classes focused on takedowns, control and competitive grappling."
      image={wrestling}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Wrestling</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Wrestling Training in Chicago
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club offered wrestling classes and lessons for every skill level. Our wrestling program complemented the striking arts by developing takedown ability, mat control and the grappling fundamentals essential to any well-rounded fighter.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Whether you're a competitive wrestler or looking to add wrestling to your MMA game, our classes provided structured training in an outstanding facility.
        </p>
        <Link
          to="/contactus.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Contact Us to Get Started
        </Link>
      </div>
    </section>
  </Layout>
);

export default WrestlingClasses;
