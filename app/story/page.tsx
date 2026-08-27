"use client";

import { useEffect, useState } from "react";
import { SiteShell } from "../page";

const frames = [
  {
    image: "/assets/432hz-healing.jpg",
    eyebrow: "Healing Frequencies",
    lead: "Discover the power of",
    emphasis: "Natural Healing Energy.",
    meaning: "Restore. Align. Transform.",
    copy: "432 Hz and beyond—experience the most powerful healing frequencies tuned to nature's rhythm and your body's resonance.",
  },
  {
    image: "/assets/meditation-woman-triangle.jpg",
    eyebrow: "Healing Sanctuary",
    lead: "Find your space for",
    emphasis: "Meditation & Restoration.",
    meaning: "Stillness. Clarity. Balance.",
    copy: "Copper pyramids, crystal therapy, and guided meditation create a sanctuary where your body, mind, and spirit realign.",
  },
  {
    image: "/assets/healing-dna.jpg",
    eyebrow: "Restore & Reconnect",
    lead: "Find your center",
    emphasis: "In nature's sanctuary.",
    meaning: "Peace. Clarity. Purpose.",
    copy: "Surrounded by forest views and mountain serenity, reconnect with yourself through guided healing experiences.",
  },
  {
    image: "/assets/triangle-meditation.webp",
    eyebrow: "Our Story",
    lead: "I was looking for a place",
    emphasis: "to Build.",
    meaning: "For Healing. For Purpose.",
    copy: "I went to look at a plot of land for sale in the area I wanted to live in. When the real estate agent took me on a tour, my mind just kept screaming, 'I need this place. The land natural healing. The land is a great place. It needs to be a place for natural healing.' So here we are, getting ready to break ground to build our H Mountains Retreat. Until we got it built. This is where we're at till we get it built.",
  },
];

export default function Story() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % frames.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const frame = frames[active];

  return (
    <SiteShell>
      <main className="inner-shell">
        <section className="story-stage">
          {frames.map((item, index) => (
            <div
              key={item.image}
              className={`story-frame ${index === active ? "active" : ""}`}
              style={{ backgroundImage: `url("${item.image}")` }}
              aria-hidden={index !== active}
            />
          ))}
          <div className="story-stage-copy" key={active}>
            <p className="eyebrow light">{frame.eyebrow}</p>
            <h1>
              <span className="story-line-top">{frame.lead}</span>{" "}
              <em className="story-line-bottom">{frame.emphasis}</em>
            </h1>
            <p className="story-meaning">{frame.meaning}</p>
            <p className="story-meaning">{frame.copy}</p>
          </div>
          <div className="story-dots" aria-label="Choose an H Mountain story">
            {frames.map((item, index) => (
              <button
                key={item.image}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show story ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
