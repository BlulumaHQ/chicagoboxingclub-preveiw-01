import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import boxingTraining from "@/assets/boxing-training.jpg";

const Coupons = () => (
  <Layout>
    <PageHero
      title="Free Boxing Class Coupons"
      subtitle="Get started with a free class at Chicago's top fight training gyms."
      image={boxingTraining}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Special Offer</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Try a Free Boxing Class
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Chicago Boxing Club has partnered with Chicago's best fight gyms to offer free introductory classes. Whether you're interested in boxing, muay thai, wrestling or jiu-jitsu, take the first step and experience world-class training.
        </p>
        <div className="bg-card border border-border rounded-lg p-10 mb-8 inline-block">
          <p className="text-3xl font-extrabold text-gradient mb-2">FREE CLASS</p>
          <p className="text-muted-foreground text-sm">Contact us to redeem your free introductory class</p>
        </div>
        <div className="mt-8">
          <Link
            to="/contactus.html"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
          >
            Claim Your Free Class
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Coupons;
