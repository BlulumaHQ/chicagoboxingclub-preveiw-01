import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import boxingTraining from "@/assets/boxing-training.jpg";

const BoxingStudents = () => (
  <Layout>
    <PageHero
      title="Boxing Gym Memberships"
      subtitle="Membership information for Chicago's serious fight training gyms."
      image={boxingTraining}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Memberships</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Train at Chicago's Best Fight Gyms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club offered boxing classes, wrestling classes and Muay Thai classes for every skill level. Professional fighters and amateur boxers as well as boxing beginners were trained in an outstanding facility.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Classes were available seven days a week with full class schedules in evening and daytime hours. Professional and competing amateur training was available during daytime, with Saturday morning sparring sessions.
        </p>
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-extrabold text-foreground mb-4">What Was Included</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Boxing, Muay Thai, Wrestling, and Jiu-Jitsu classes</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Cardio boxing classes</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Seven-day-a-week class schedule</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Daytime and evening class options</li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" />Saturday morning sparring</li>
          </ul>
        </div>
        <Link
          to="/contactus.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Contact Us for Current Options
        </Link>
      </div>
    </section>
  </Layout>
);

export default BoxingStudents;
