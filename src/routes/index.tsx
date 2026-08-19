import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Flag,
  Zap,
  GraduationCap,
  Briefcase,
  Wrench,
  Cog,
  CircuitBoard,
  Gauge,
  Ruler,
  Megaphone,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Trophy,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

import heroKart from "@/assets/kart-hero.jpg.asset.json";
import logoAsset from "@/assets/motorheads-logo.png.asset.json";
import teamGroup from "@/assets/WhatsApp_Image_2026-06-20_at_15.32.31.jpg";
import divChassis from "@/assets/div-chassis.jpg";
import divPowertrain from "@/assets/Gemini_Generated_Image_c6ekuvc6ekuvc6ek.jpg";
import divElectrical from "@/assets/div-electrical.jpg";
import {
  missionPillars,
  divisions,
  sponsorReasons,
  impactStats,
  tiers,
  timeline,
} from "@/lib/motorheads-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOTORHEADS BMSIT&M — Built to Race. Engineered to Win." },
      {
        name: "description",
        content:
          "MOTORHEADS is the official student motorsport and engineering team of BMSIT&M, Bengaluru — 25 engineers building combustion and electric go-karts for national competition.",
      },
      { property: "og:title", content: "MOTORHEADS — BMSIT&M Student Motorsport Team" },
      {
        property: "og:description",
        content:
          "Design, analyse, fabricate, race. Partner with the student motorsport team of BMS Institute of Technology and Management, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const missionIcons = [Flag, Zap, GraduationCap, Briefcase];
const divisionIcons = [Wrench, Cog, CircuitBoard, Gauge, Ruler, Megaphone];
const reasonIcons = [Target, Users, Zap, TrendingUp];

/* --- SPARK BACKGROUND COMPONENT --- */
function SparkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary animate-pulse"
            style={{
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              top: `${((i * 19) % 90) + 5}%`,
              left: `${((i * 29) % 90) + 5}%`,
              opacity: ((i % 4) + 1) * 0.1,
              animationDuration: `${(i % 3) + 2}s`,
              boxShadow: "0 0 6px var(--primary)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* --- COUNT-UP ANIMATION COMPONENT --- */
function CounterNumber({ target = 25, duration = 1500, suffix = "+" }: { target?: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(1);
  const [hasRun, setHasRun] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          let start = 1;
          const stepTime = Math.abs(Math.floor(duration / target));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasRun, target, duration]);

  return (
    <span ref={elementRef} className="skew-title text-3xl text-primary sm:text-4xl">
      {count}
      {count >= target ? suffix : ""}
    </span>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-10">
      {kicker && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-3 w-1.5 -skew-x-12 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-4xl leading-[0.95] text-foreground sm:text-6xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Motorheads logo" className="h-7 w-7 object-contain" />
            <span className="skew-title -skew-x-6 text-xl tracking-tight">MOTORHEADS</span>
          </a>
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground lg:flex">
            {[
              ["About", "#about"],
              ["Mission", "#mission"],
              ["Divisions", "#divisions"],
              ["Racing", "#racing"],
              ["Journey", "#journey"],
              ["Sponsor", "#sponsor"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex -skew-x-12 items-center gap-1 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent"
          >
            <span className="skew-x-12">Partner With Us</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroKart.url}
          alt="Motorheads go-kart racing on track at dusk"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="speed-lines absolute inset-x-0 bottom-0 h-40 opacity-40" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32">
          <div className="mb-5 inline-flex -skew-x-12 items-center gap-2 border border-primary/60 bg-primary/10 px-3 py-1">
            <span className="skew-x-12 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              BMSIT&M · Bengaluru
            </span>
          </div>
          <h1 className="max-w-4xl text-5xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Built to Race.
            <br />
            <span className="text-primary">Engineered to Win.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            The official student motorsport and engineering team of BMS Institute of Technology and
            Management — designing, fabricating and racing our own combustion and electric go-karts.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#sponsor"
              className="group inline-flex -skew-x-12 items-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent hover:shadow-[var(--shadow-red)]"
            >
              <span className="skew-x-12">Partner With Us</span>
              <ChevronRight className="h-4 w-4 skew-x-12 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex -skew-x-12 items-center gap-2 border border-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span className="skew-x-12">Meet the Team</span>
            </a>
            <a
              href="mailto:teammotorheads@bmsit.in"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> teammotorheads@bmsit.in
            </a>
          </div>
        </div>
        <div className="checker-strip absolute inset-x-0 bottom-0 h-4 opacity-90" aria-hidden />
      </section>
{/* ABOUT */}
      <section id="about" className="relative border-b border-border bg-background py-24 overflow-hidden">
        <SparkBackground />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle kicker="Embrace Technology" title="DESIGNED TO DISRUPT. BUILT TO RACE." />
            <p className="text-base leading-relaxed text-muted-foreground">
              Team Motorheads is BMSIT&M's official student motorsport and engineering
              team — 25+ undergraduates who design, analyse, fabricate and race their own
              combustion (CV) and electric (EV) go-karts at the Indian Karting Race and
              other national events.
            </p>
            <blockquote className="red-bar mt-8 text-xl italic leading-snug text-foreground sm:text-2xl">
              "We are not a club that meets on weekends... Every deadline is a race."
            </blockquote>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["25+", "Engineers"],
                ["2", "Powertrains"],
                ["6", "Divisions"],
              ].map(([v, l]) => (
                <div key={l} className="border border-border bg-card px-4 py-5">
                  <div className="skew-title text-3xl text-primary">
                    {v === "25+" ? <CounterNumber target={25} suffix="+" /> : v}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -skew-y-2 border border-primary/30" aria-hidden />
            <img
              src={teamGroup}
              alt="Team Motorheads members with their go-kart"
              loading="lazy"
              width={1600}
              height={1000}
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="relative overflow-hidden bg-card py-24">
        <SparkBackground />
        <div className="speed-lines absolute inset-0 opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionTitle kicker="Our Mission" title="Four Pillars, One Grid Slot" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map((p, i) => {
              const Icon = missionIcons[i % missionIcons.length]!;
              return (
                <article
                  key={p.title}
                  className="group border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary"
                >
                  <Icon className="h-8 w-8 text-primary" strokeWidth={2.2} />
                  <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                  <div className="mt-2 h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-20" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" className="relative overflow-hidden border-y border-border py-24">
        <SparkBackground />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionTitle kicker="Our Divisions" title="Six Crews. One Kart." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d, i) => {
              const Icon = divisionIcons[i % divisionIcons.length]!;
              const img = i === 0 ? divChassis : i === 1 ? divPowertrain : i === 2 ? divElectrical : null;
              return (
                <article
                  key={d.name}
                  className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[var(--shadow-red)]"
                >
                  {img && (
                    <img
                      src={img}
                      alt={`${d.name} division work`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-40 w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
                      <h3 className="text-2xl text-foreground">{d.name}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                  <div className="h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RACING */}
      <section id="racing" className="relative overflow-hidden bg-card py-24">
        <SparkBackground />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionTitle kicker="Our Journey" title="Competition & Achievements" />
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                code: "GKDC 2026",
                where: "Kari Motor Speedway, Coimbatore",
                when: "February 2026",
                note: "National Go-Kart Design Challenge — full combustion campaign from design report to race day.",
                badge: "Competed",
              },
              {
                code: "EKVC 2026",
                where: "Hindustan College of Engineering & Kari Motor Speedway",
                when: "March 2026",
                note: "Electric Kart Vehicle Challenge — our EV programme's first national outing.",
                badge: "Best Cost Award",
              },
            ].map((c) => (
              <article
                key={c.code}
                className="relative overflow-hidden border border-border bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute right-0 top-0 h-full w-1 bg-primary" aria-hidden />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-4xl text-foreground">{c.code}</h3>
                  <span className="-skew-x-12 bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {c.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  {c.when}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{c.where}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section id="sponsor" className="relative overflow-hidden border-y border-border py-24">
        <SparkBackground />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionTitle kicker="Why Sponsor Us" title="A Bet On Engineers Who Win" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorReasons.map((r, i) => {
              const Icon = reasonIcons[i % reasonIcons.length]!;
              return (
                <article
                  key={r.title}
                  className="group border-l-4 border-primary bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-secondary"
                >
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
                  <h3 className="mt-5 text-xl text-foreground">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </article>
              );
            })}
          </div>

          {/* Impact strip with Animated Counter */}
          <div className="mt-12 grid divide-y divide-border border border-border bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {impactStats.map((s) => (
              <div key={s.label} className="px-6 py-8">
                {s.value === "25+" ? (
                  <CounterNumber target={25} suffix="+" />
                ) : (
                  <div className="skew-title text-3xl text-primary sm:text-4xl">{s.value}</div>
                )}
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS (WITH CENTERED BOTTOM CARDS) */}
      <section id="tiers" className="relative overflow-hidden bg-card py-24">
        <SparkBackground />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionTitle kicker="Sponsorship Tiers" title="Pick Your Grid Position" />
          <div className="flex flex-wrap justify-center gap-5">
            {tiers.map((t, i) => (
              <article
                key={t.name}
                className={`group flex w-full flex-col border bg-background p-7 transition-all duration-300 hover:-translate-y-2 md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${
                  i === 0
                    ? "border-primary shadow-[var(--shadow-red)]"
                    : "border-border hover:border-primary"
                }`}
              >
                <span className="w-fit -skew-x-12 border border-primary/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {t.tag}
                </span>
                <h3 className="mt-4 text-2xl leading-tight text-foreground">{t.name}</h3>
                <div className="mt-4 h-px w-full bg-border" />
                <ul className="mt-5 flex-1 space-y-3">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex w-fit -skew-x-12 items-center gap-1 border border-foreground/25 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="skew-x-12">Enquire</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="journey" className="relative overflow-hidden border-y border-border py-24">
        <SparkBackground />
        <div className="relative mx-auto max-w-4xl px-5">
          <SectionTitle kicker="Footprints of Excellence" title="The Road So Far" />
          <ol className="relative border-l-2 border-dashed border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year + t.event} className="group relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center border-2 border-primary bg-background transition-colors group-hover:bg-primary">
                  <Trophy className="h-2.5 w-2.5 text-primary transition-colors group-hover:text-primary-foreground" />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="skew-title text-2xl text-primary">{t.year}</span>
                  <h3 className="text-2xl text-foreground">{t.event}</h3>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.place}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-card py-24">
        <SparkBackground />
        <div className="speed-lines absolute inset-0 opacity-25" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle kicker="Partner With Us" title="This Isn't A Donation" />
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              It's a bet on engineers who are already winning. Back Motorheads and put your brand on
              a machine that runs at India's national circuits.
            </p>
            <a
              href="mailto:teammotorheads@bmsit.in"
              className="mt-8 inline-flex -skew-x-12 items-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent hover:shadow-[var(--shadow-red)]"
            >
              <span className="skew-x-12">Start the Conversation</span>
            </a>
          </div>
          <div className="space-y-5">
            <div className="border border-border bg-background p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Sponsorship Coordinator
              </p>
              <h3 className="mt-2 text-2xl text-foreground">Vivek D B</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <a
                  href="mailto:vivekdb720@gmail.com"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> vivekdb720@gmail.com
                </a>
                <a href="tel:+919108920420" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +91 91089 20420
                </a>
              </div>
            </div>
            <div className="border border-border bg-background p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Official Channels
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <a
                  href="mailto:teammotorheads@bmsit.in"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> teammotorheads@bmsit.in
                </a>
                <a
                  href="https://instagram.com/motor.heads_bmsit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Instagram className="h-4 w-4 text-primary" /> @motor.heads_bmsit
                </a>
                <a
                  href="https://www.linkedin.com/company/motor-heads-bmsitm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Linkedin className="h-4 w-4 text-primary" /> Motor Heads - BMSIT&M
                </a>
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  BMS Institute of Technology and Management, Doddaballapur Main Road, Avalahalli,
                  Yelahanka, Bengaluru - 560119
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background">
        <div className="checker-strip h-4 opacity-90" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Motorheads logo" className="h-7 w-7 object-contain" />
              <span className="skew-title -skew-x-6 text-xl">MOTORHEADS</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Official student motorsport & engineering team, BMS Institute of Technology and
              Management, Bengaluru.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Divisions", "#divisions"],
                ["Sponsorship Tiers", "#tiers"],
                ["Our Journey", "#journey"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest text-foreground">Follow</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/motor.heads_bmsit"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/motor-heads-bmsitm"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:teammotorheads@bmsit.in"
                aria-label="Email"
                className="border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Team Motorheads · BMSIT&M
        </div>
      </footer>
    </div>
  );
}
