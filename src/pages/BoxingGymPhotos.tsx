import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-boxing-gym.jpg";
import boxingTraining from "@/assets/boxing-training.jpg";
import youthBoxing from "@/assets/youth-boxing.jpg";
import womenBoxing from "@/assets/women-boxing.jpg";
import muayThai from "@/assets/muay-thai.jpg";
import wrestling from "@/assets/wrestling.jpg";
import jiujitsu from "@/assets/jiujitsu.jpg";
import boxingEvent from "@/assets/boxing-event.jpg";
import boxingCoach from "@/assets/boxing-coach.jpg";

const photos = [
  { src: heroImage, alt: "Chicago Boxing Club gym interior" },
  { src: boxingTraining, alt: "Boxing training session" },
  { src: boxingEvent, alt: "Boxing event night" },
  { src: youthBoxing, alt: "Youth boxing class" },
  { src: womenBoxing, alt: "Women's boxing class" },
  { src: muayThai, alt: "Muay Thai training" },
  { src: wrestling, alt: "Wrestling training" },
  { src: jiujitsu, alt: "Jiu-Jitsu training" },
  { src: boxingCoach, alt: "Boxing coach training fighter" },
];

const BoxingGymPhotos = () => (
  <Layout>
    <PageHero
      title="Boxing Gym Photos"
      subtitle="Inside Chicago Boxing Club — the training, the events, the fighters."
      image={heroImage}
    />
    <section className="section-padding">
      <div className="container-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-card">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BoxingGymPhotos;
