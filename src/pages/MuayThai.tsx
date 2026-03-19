import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import muayThai from "@/assets/muay-thai.jpg";

const MuayThai = () => (
  <Layout>
    <PageHero
      title="Muay Thai Classes"
      subtitle="Authentic Muay Thai training for striking, self-defense and competition."
      image={muayThai}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Muay Thai</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Muay Thai Training in Chicago
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Muay Thai, also known as Thai boxing, is one of the most popular combat sports worldwide. Chicago Boxing Club offered authentic Muay Thai classes and lessons for fighters of all levels, from beginners learning the basics of strikes and clinch work to experienced competitors refining their technique.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          There are several combat sports including boxing and thai boxing that are popular worldwide. Our Muay Thai program provided a comprehensive training experience covering kicks, elbows, knees and the clinch.
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

export default MuayThai;
