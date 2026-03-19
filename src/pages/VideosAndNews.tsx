import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import boxingEvent from "@/assets/boxing-event.jpg";

const VideosAndNews = () => (
  <Layout>
    <PageHero
      title="Boxing / MMA Videos and Articles"
      subtitle="News, videos and articles from the world of boxing and mixed martial arts."
      image={boxingEvent}
    />
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Media</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
          Latest from Chicago Boxing Club
        </h2>
        <div className="space-y-8">
          <article className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-extrabold text-foreground mb-3">Gold Glove Championships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chicago Boxing Club captured four consecutive Chicago Gold Glove Tournament Team Championships winning the team trophy in 2009, 2010, 2011 and 2012.
            </p>
          </article>
          <article className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-extrabold text-foreground mb-3">Kristin Gearhart — From Chicago Boxing Club to the Pros</h3>
            <p className="text-muted-foreground leading-relaxed">
              Now a pro, Kristin Gearhart trained for the Olympic Trials at Chicago Boxing Club, showcasing the caliber of training available at our facility.
            </p>
          </article>
          <article className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-extrabold text-foreground mb-3">Fight Night Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beautiful nights outdoors on south Chicago suburbs watching amateur boxing. Great nights for fans and fighters alike. Follow live updates on Twitter{" "}
              <a href="https://twitter.com/boxing_joe" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">@boxing_joe</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  </Layout>
);

export default VideosAndNews;
