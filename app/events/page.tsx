import Image from "next/image";
import { SiteShell } from "../page";
import { contactEmail } from "../site-config";

const events: [string, string, string, string, string][] = [
  ["Weddings", "A natural setting for a ceremony that feels intimate, grounded, and unmistakably yours.",
   "/assets/woodland-wedding-v2.webp", "An outdoor ceremony set among the trees at H Mountain",
   "Ceremonies under the tree line, with the quiet of the woods doing most of the work."],
  ["Family reunions", "Room for generations to gather, share meals, tell stories, and start new traditions.",
   "/assets/family-reunion-v2.webp", "Several generations of a family gathered together outdoors",
   "Space for everyone to spread out, share a meal, and stay a while."],
  ["Work retreats", "Bring your team away from the noise for clear thinking, deeper connection, and renewed energy.",
   "/assets/light-canopy-rest.webp", "A quiet shaded rest area under the tree canopy",
   "Shade, still air, and somewhere to actually think — the point of leaving the office."],
];

export default function Events() {
  return (
    <SiteShell>
      <main className="inner-shell">
        <section className="events-hero">
          <div>
            <p className="eyebrow light">Gather here</p>
            <h1>Bring your people. <em>We’ll hold the space.</em></h1>
            <p>Weddings, reunions, work retreats, and special gatherings shaped around what matters to you.</p>
          </div>
        </section>
        <section className="content-section editorial-grid event-grid">
          {events.map(([title, text, src, alt, caption], index) => (
            <article key={title}>
              <figure className="event-figure">
                <Image src={src} alt={alt} width={640} height={420} className="event-image" />
                <figcaption>{caption}</figcaption>
              </figure>
              <span className="card-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
        <section className="closing">
          <p className="eyebrow">Start the conversation</p>
          <h2>Let’s shape a gathering that <em>feels personal.</em></h2>
          {contactEmail ? (
            <a href={`mailto:${contactEmail}`} className="button dark">Plan your event <span>↗</span></a>
          ) : (
            <span className="button dark" aria-disabled="true">Event inquiries opening soon</span>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
