import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-boxing-gym.jpg";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Chicago Boxing Club for information about training, events and more."
        image={heroImage}
      />
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Get in Touch</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for information about Chicago's best fight gyms, interested in our boxing events, or have questions about training programs, don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <a href="tel:312-450-7850" className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">312-450-7850</p>
                  </div>
                </a>
                <a href="mailto:info@chicagoboxingclub.com" className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@chicagoboxingclub.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-extrabold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-secondary transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
