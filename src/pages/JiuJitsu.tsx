import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import jiujitsu from "@/assets/jiujitsu.jpg";

const JiuJitsu = () => (
  <Layout>
    <PageHero
      title="Jiu-Jitsu and MMA Classes"
      subtitle="Jiu-Jitsu and mixed martial arts training for all experience levels."
      image={jiujitsu}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Jiu-Jitsu & MMA</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Jiu-Jitsu & MMA Training in Chicago
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club offered jiu-jitsu and MMA classes and lessons for every skill level. Our program covered ground fighting techniques, submissions, positional control and the complete mixed martial arts skill set needed for competition or self-defense.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Combined with our boxing, muay thai and wrestling programs, our jiu-jitsu training rounded out a complete martial arts education in Chicago.
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

export default JiuJitsu;
