"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { contactEmail } from "./site-config";

type SkyState = "sunrise" | "day" | "sunset" | "night";

function getSkyState(): SkyState {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return "sunrise";
  if (hour >= 8 && hour < 17) return "day";
  if (hour >= 17 && hour < 20) return "sunset";
  return "night";
}

function Brand({ sky }: { sky: SkyState }) {
  return (
    <Link href="/" className="brand" aria-label="H Mountain Retreat home">
      <Image
        src="/assets/logo-purple.png"
        alt="H Mountain Retreat logo"
        className="brand-mark"
        width={58}
        height={58}
        priority
      />
      <span>
        <strong>H Mountain</strong>
        <small>RETREAT</small>
      </span>
    </Link>
  );
}

function LocalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) return <div className="local-clock" aria-hidden="true" />;

  return (
    <div className="local-clock" aria-label="Your local date and time">
      <strong>{now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</strong>
      <span>{now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</span>
      <small>Your local time</small>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [sky, setSky] = useState<SkyState>("day");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setSky(getSkyState());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("motion-ready");
    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className={`site-shell sky-${sky}`} data-sky={sky}>
      <header className="site-header">
        <Brand sky={sky} />
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
          <b>Menu</b>
        </button>
        <LocalClock />
        <nav id="site-nav" className={open ? "open" : ""} aria-label="Main navigation">
          <Link href="/story">Our Story</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/map">Property Map</Link>
          <Link href="/map" className="nav-cta">Book your stay</Link>
        </nav>
      </header>
      {children}
      <footer>
        <div className="footer-brand">
          <Brand sky={sky} />
          <p>A quieter place to come back to what matters.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <Link href="/map">Campsites</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/story">Our story</Link>
        </div>
        <div>
          <p className="eyebrow">Plan</p>
          {contactEmail ? (
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          ) : (
            <span>Contact details coming soon</span>
          )}
          <span>Near Robbers Cave · Oklahoma</span>
          <span className="soon">Opening details coming soon</span>
        </div>
        <p className="copyright">© {new Date().getFullYear()} H Mountain Retreat</p>
      </footer>
    </div>
  );
}

const amenityPins = [
  { label: "Copper pyramid rest" },
  { label: "Triangle light meditation" },
  { label: "Sound healing space" },
  { label: "Red-light therapy" },
  { label: "Campsites & firepits" },
];

const experiences = [
  {
    image: "/assets/copper-pyramid-sleep.jpg",
    title: "Rest under copper",
    text: "Unwind inside the copper pyramid, a quiet space made for deep rest and renewal.",
    href: "/amenities",
    label: "Explore healing spaces",
  },
  {
    image: "/assets/yoga-triangle-v2.webp",
    title: "Return to yourself",
    text: "Breathe, stretch, and settle beside the triangle light-meditation space.",
    href: "/amenities",
    label: "Find your quiet",
  },
  {
    image: "/assets/campfire-stars-v2.webp",
    title: "Sleep under the stars",
    text: "End the day around the fire, then let the night sky do the rest.",
    href: "/map",
    label: "Choose a campsite",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow light">A woodland sanctuary in Oklahoma</p>
            <h1>Rest. Reconnect.<br /><em>Find the you you never knew.</em></h1>
            <p>
              Camp in the woods, let the quiet find you, and wake to a mountain
              view in a place made for health, healing, and a little hope.
            </p>
            <div className="button-row">
              <Link href="/map" className="button primary">Check availability <span>↗</span></Link>
              <Link href="/amenities" className="button ghost">Explore the retreat</Link>
            </div>
          </div>
          <div className="hero-note">
            <span className="live-dot" />
            <div>
              <small>Your quiet starts here</small>
              <strong>Woods · mountains · open sky</strong>
            </div>
          </div>
          <a href="#welcome" className="scroll-cue" aria-label="Scroll to welcome section">↓</a>
        </section>

        <section className="promise-strip" aria-label="H Mountain highlights">
          <span><strong>Peaceful & private</strong>Wooded places to slow down</span>
          <span><strong>Family friendly</strong>Space for every generation</span>
          <span><strong>Adventure nearby</strong>Trails, lakes & caves</span>
          <span><strong>Made with heart</strong>A retreat that feels personal</span>
        </section>

        <section id="welcome" className="welcome">
          <div>
            <p className="eyebrow">Welcome home</p>
            <h2>Come for the campsite.<br /><em>Stay for the feeling.</em></h2>
          </div>
          <p>
            H Mountain is a peaceful retreat for campers, families, friends, and
            groups ready to step away from the noise. Book a quiet weekend,
            breathe mountain air, or simply sit by the fire long enough to
            remember what unhurried feels like.
          </p>
        </section>

        <section className="experience-grid photo-cards" aria-label="Ways to experience H Mountain">
          {experiences.map((item, index) => (
            <article key={item.title}>
              <div className="experience-photo" style={{ backgroundImage: `url("${item.image}")` }}>
                <span className="card-number">0{index + 1}</span>
              </div>
              <div className="experience-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href} className="text-link">{item.label} <span>→</span></Link>
              </div>
            </article>
          ))}
        </section>

        <section className="trail-story">
          <div className="trail-story-image" role="img" aria-label="A calm lake framed by wooded Oklahoma hills near H Mountain">
            <span className="image-tag">Our story</span>
          </div>
          <div className="trail-story-copy">
            <p className="eyebrow light">How H Mountain began</p>
            <h2>This ground was always <em>meant for healing.</em></h2>
            <p>
              I went to look at a plot of land in the place I wanted to call
              home. The moment I walked across it, I knew this ground was not
              meant to be a house — it was meant to be a place for healing. So
              we are building H Mountain Retreat one step at a time.
            </p>
            <div className="trail-points">
              <span>Built one step at a time</span>
              <span>Rooted in health, healing & hope</span>
              <span>A no-hunting promise to the land</span>
            </div>
            <Link href="/story" className="text-link light">Read our full story <span>→</span></Link>
          </div>
        </section>

        <section className="renewal">
          <div className="renewal-heading">
            <p className="eyebrow">Stay curious. Leave restored.</p>
            <h2>Rustic shelter.<br /><em>Intentional light.</em></h2>
          </div>
          <div className="renewal-grid">
            <article className="renewal-card hut-card">
              <div className="renewal-image hut-image" role="img" aria-label="Concept rendering of a small round stucco retreat hut in the woods" />
              <div>
                <p className="eyebrow">Coming to the mountain</p>
                <h3>The round stucco hut</h3>
                <p>A small, hand-built shelter imagined as a quiet place to rest, reflect, and reconnect with the land.</p>
                <small>Concept image — final hut details may vary.</small>
              </div>
            </article>
            <article className="renewal-card light-card">
              <div
                className="renewal-image meditation-image"
                role="img"
                aria-label="A calm timber meditation room with soft triangular light and a woodland view"
              />
              <div>
                <p className="eyebrow light">Quiet experiences</p>
                <h3>Triangle light meditation</h3>
                <p>Settle into warm light, soft sound, breathwork, and personal reflection in a space designed to help the day fall away.</p>
                <small>A relaxation and wellness experience, not medical treatment.</small>
              </div>
            </article>
          </div>
        </section>

        <section className="wildlife-note">
          <div
            className="purple-tree"
            role="img"
            aria-label="A peaceful campsite with a tent, camper, campfire, and purple-marked boundary trees"
          >
            <span />
          </div>
          <div className="wildlife-copy">
            <p className="eyebrow">A gentler place for every guest</p>
            <h2>Even the wildlife<br /><em>can relax here.</em></h2>
            <p>
              Purple paint on a few trees marks the H Mountain boundary—a quiet,
              no-hunting retreat where guests can enjoy nature and wildlife can
              move undisturbed. It is not a statement against hunting; it is our
              promise to keep this campground peaceful for every living guest.
            </p>
            <Link href="/story" className="text-link">Our land promise <span>→</span></Link>
          </div>
        </section>

        <section className="area-showcase">
          <div className="area-heading">
            <div>
              <p className="eyebrow">Beyond the property</p>
              <h2>One peaceful stay.<br /><em>A whole region to explore.</em></h2>
            </div>
            <p>
              H Mountain puts quiet woods at your doorstep and some of
              southeastern Oklahoma&apos;s best outdoor days within reach.
            </p>
          </div>
          <a
            className="area-feature"
            href="https://www.robberscavestatepark.com/?detailed_information=activities"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/robbers-cave-creek.webp"
              alt="Fourche Maline Creek near Robbers Cave State Park"
              width={1600}
              height={1000}
              sizes="(max-width: 850px) 100vw, 86vw"
            />
            <div>
              <p className="eyebrow light">Robbers Cave country</p>
              <h3>Cliffs, caves, wooded trails, and lake days.</h3>
              <span>Explore park activities ↗</span>
            </div>
          </a>
          <div className="area-cards">
            <a href="https://www.robberscavestatepark.com/?detailed_information=activities" target="_blank" rel="noreferrer">
              <Image
                src="/assets/robbers-cave-trailhead.webp"
                alt="Wooded trailhead at Robbers Cave State Park"
                width={900}
                height={600}
                sizes="(max-width: 850px) 100vw, 29vw"
              />
              <div><strong>Robbers Cave trails</strong><span>Hike · climb · explore</span></div>
            </a>
            <a href="https://www.swt.usace.army.mil/Locations/Tulsa-District-Lakes/Oklahoma/Eufaula-Lake/" target="_blank" rel="noreferrer">
              {/* External federal source; kept unoptimized so deployment does not proxy it. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.swt.usace.army.mil/portals/41/siteimages/lakes/eufaula/DSC00027.jpg" alt="Sunset across Eufaula Lake in Oklahoma" />
              <div><strong>Lake Eufaula</strong><span>Fish · boat · swim</span></div>
            </a>
            <Link href="/map">
              <Image
                src="/assets/campsite-twilight.webp"
                alt="A quiet campsite at twilight with a glowing campfire"
                width={900}
                height={600}
                sizes="(max-width: 850px) 100vw, 29vw"
              />
              <div><strong>Back at camp</strong><span>Fire · stars · stillness</span></div>
            </Link>
          </div>
          <p className="photo-credit">
            Robbers Cave photos: Jack Gray and Thomas &amp; Dianne Jones,
            licensed <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>.
            Lake Eufaula photo: U.S. Army Corps of Engineers.
          </p>
        </section>

        <section className="map-feature">
          <div className="map-preview" role="img" aria-label="Property map of H Mountain with numbered amenity locations">
            <div className="map-glow" />
            {amenityPins.map((pin, i) => (
              <span key={pin.label} className={`mini-pin p${i + 1}`} title={pin.label} aria-hidden="true">
                {i + 1}
              </span>
            ))}
          </div>
          <div className="map-copy">
            <p className="eyebrow light">Amenities map</p>
            <h2>Every healing space, <em>all on one mountain.</em></h2>
            <p>
              See where each experience lives on the property, then pick the
              campsite that puts you closest to the ones you love.
            </p>
            <ol className="amenity-legend">
              {amenityPins.map((pin, i) => (
                <li key={pin.label}><b aria-hidden="true">{i + 1}</b>{pin.label}</li>
              ))}
            </ol>
            <div className="map-actions">
              <Link href="/map" className="button primary">Open map & calendar <span>↗</span></Link>
              <Link href="/amenities" className="button ghost">Explore amenities</Link>
            </div>
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">Your retreat is waiting</p>
          <h2>Come as you are.<br /><em>Leave a little lighter.</em></h2>
          <Link href="/map" className="button primary">Find your campsite <span>↗</span></Link>
        </section>
      </main>
    </SiteShell>
  );
}
