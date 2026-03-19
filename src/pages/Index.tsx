import { Link } from "react-router-dom";
import { Trophy, Users, Dumbbell, Star } from "lucide-react";
import heroImage from "@/assets/hero-boxing-gym.jpg";
import boxingTraining from "@/assets/boxing-training.jpg";
import youthBoxing from "@/assets/youth-boxing.jpg";
import womenBoxing from "@/assets/women-boxing.jpg";
import muayThai from "@/assets/muay-thai.jpg";
import wrestling from "@/assets/wrestling.jpg";
import jiujitsu from "@/assets/jiujitsu.jpg";
import boxingEvent from "@/assets/boxing-event.jpg";
import ServiceCard from "@/components/ServiceCard";
import logo from "@/assets/cbc-logo.png";

const services = [
  { title: "Boxing Classes", description: "Boxing classes and lessons for every skill level — from beginners to professional fighters.", image: boxingTraining, link: "/boxingclasses.html" },
  { title: "Youth Boxing", description: "Develop discipline, confidence and fitness through youth boxing training programs.", image: youthBoxing, link: "/youthboxing.html" },
  { title: "Women's Boxing", description: "Boxing 101, kickboxing and cardio boxing classes designed for women of all fitness levels.", image: womenBoxing, link: "/boxingclassesforwomen.html" },
  { title: "Muay Thai", description: "Authentic Muay Thai classes and lessons for striking and self-defense.", image: muayThai, link: "/muaythai.html" },
  { title: "Wrestling", description: "Wrestling classes focused on takedowns, control and competitive grappling.", image: wrestling, link: "/wrestlingclasses.html" },
  { title: "Jiu-Jitsu & MMA", description: "Jiu-Jitsu and mixed martial arts training for all experience levels.", image: jiujitsu, link: "/jiujitsu.html" },
];

const trustSignals = [
  { icon: Trophy, title: "4x Gold Glove Champions", description: "Winner of 2009–2012 Chicago Gold Glove Tournament Team Championships" },
  { icon: Star, title: "Olympic-Level Training", description: "Trained Olympic Trials competitor Kristin Gearhart" },
  { icon: Users, title: "Chicago's Leading Producer", description: "Chicago's leading producer of Boxing Fight Night events" },
  { icon: Dumbbell, title: "All Skill Levels", description: "From boxing beginners to professional fighters and amateur boxers" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container-tight text-center">
        <img src={logo} alt="Chicago Boxing Club" className="w-28 h-28 mx-auto mb-8 drop-shadow-2xl" />
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-secondary mb-4">
          Est. Chicago, IL
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
          Chicago Boxing Club
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Chicago's information source for serious fight training gyms — boxing, muay thai, jiu-jitsu, wrestling and MMA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/boxingclasses.html"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
          >
            Find a Fight Gym
          </Link>
          <Link
            to="/goldglovesfightnights.html"
            className="inline-block border-2 border-foreground/20 text-foreground px-8 py-4 rounded font-bold text-sm tracking-wide hover:border-secondary hover:text-secondary transition-colors"
          >
            Boxing Fight Nights
          </Link>
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="bg-section-alt section-padding">
      <div className="container-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
              Four Consecutive Gold Glove Team Championships
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chicago Boxing Club captured four consecutive Chicago Gold Glove Tournament Team Championships winning the team trophy in 2009, 2010, 2011 and 2012. Chicago Boxing Club and chicagoboxingclub.com continue to serve as an information source for true fighters, boxers and boxing fans who are interested in finding Chicago's serious training gyms for boxing and self defense as well as muay thai, jiu-jitsu and other martial arts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Two new boxing gyms have grown out of Chicago Boxing Club. Sam Colonna now runs Sam Colonna Boxing Gym and Rick Ramos runs Bodyshot Boxing Club.
            </p>
            <Link
              to="/boxingclasses.html"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
            >
              Find a Serious Chicago Fight Gym
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src={boxingEvent} alt="Chicago Boxing Club event" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="bg-section-alt section-padding">
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Training Programs</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Classes for Every Fighter
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
          Ready to Start Training?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Whether you're a seasoned fighter or stepping into the gym for the first time, find the right training program in Chicago.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/chicagoboxingclubcoupons.html"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
          >
            Free Boxing Class Coupons
          </Link>
          <Link
            to="/contactus.html"
            className="inline-block border-2 border-foreground/20 text-foreground px-8 py-4 rounded font-bold text-sm tracking-wide hover:border-secondary hover:text-secondary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
