import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import youthBoxing from "@/assets/youth-boxing.jpg";

const YouthBoxing = () => (
  <Layout>
    <PageHero
      title="Youth Boxing Classes"
      subtitle="Build discipline, confidence and physical fitness through structured youth boxing programs."
      image={youthBoxing}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Youth Programs</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Youth Boxing in Chicago
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club's youth boxing programs are designed to develop discipline, physical fitness, and self-confidence in young athletes. Our structured training environment provides a safe and supportive space for youth to learn the fundamentals of boxing.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Whether your child is looking to compete or simply wants to learn self-defense and stay active, our youth boxing classes provide expert instruction and a positive training atmosphere.
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

export default YouthBoxing;
