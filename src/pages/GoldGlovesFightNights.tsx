import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import boxingEvent from "@/assets/boxing-event.jpg";

const GoldGlovesFightNights = () => (
  <Layout>
    <PageHero
      title="Boxing Event Production"
      subtitle="Chicago's leading producer of Boxing Fight Night events featuring amateur boxers in exciting live competition."
      image={boxingEvent}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Fight Night Events</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Chicago's Premier Boxing Events
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Chicago Boxing Club also produces exciting live amateur boxing events in the Chicago area. From 1920s-style events to suburban outdoor fight nights, our events showcase the best of Chicago's amateur boxing talent.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Proud to be producing 1920s style events with competing Chicago amateur boxers at center stage. Beautiful nights outdoors on south Chicago suburbs watching amateur boxing — great nights for fans and fighters alike.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Get live updates from our amateur boxing events by following the action on Twitter{" "}
          <a href="https://twitter.com/boxing_joe" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
            @boxing_joe
          </a>
        </p>
        <Link
          to="/contactus.html"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
        >
          Contact Us for More Info
        </Link>
      </div>
    </section>
  </Layout>
);

export default GoldGlovesFightNights;
