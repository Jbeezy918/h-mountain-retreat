import Link from "next/link";
import { SiteShell } from "../page";

const onSite = [
  ["Tea hut", "A cozy place for warm tea, slow conversation, and quiet mornings surrounded by the woods.", "Open with retreat"],
  ["Light & sound meditation", "Settle beneath soft violet-toned light with calming music in a space created for stillness and personal reflection.", "Guided experience"],
  ["Sound healing sessions", "Guided sessions with singing bowls and gongs, using resonant sound to help you slow down, breathe, and reset.", "By appointment"],
  ["Copper pyramid therapy", "Rest beneath a copper pyramid frame designed to support deep relaxation, better sleep, and a quiet mind.", "By appointment"],
  ["Red-light therapy", "Targeted red and near-infrared light sessions to support recovery, circulation, and overall wellness.", "By appointment"],
  ["Woodland campsites", "Private places for tents and campers, with the night sky, tree line, and campfire close at hand.", "Reserve a site"],
  ["Walking paths", "Unhurried paths for fresh air, gentle movement, and a little time away from everything.", "Explore freely"],
  ["Gathering spaces", "Natural settings for picnics, reunions, celebrations, workshops, and meaningful group time.", "Groups welcome"],
  ["Huts & camp store", "Hand-built round retreat huts and an on-site store with essentials and H Mountain goods are planned additions.", "Coming soon"],
];

const nearby = [
  ["Hiking & Nature Walks", "Choose from easy nature walks, lakeside loops, rugged mountain trails, and the historic Robbers Cave hike."],
  ["Lakes & Paddling", "Lake Eufaula, Lake Carlton, and other pristine waters offer peaceful boating and seasonal rentals."],
  ["Swimming & Fishing", "Designated swimming areas and fishing for bass, crappie, sunfish, catfish, and seasonal trout."],
  ["Birding", "Woodpeckers, hawks, warblers, and other species make the park especially rewarding during migration seasons."],
  ["Forest Bathing", "Ancient practice of immersing yourself in nature. Walk slowly through the woods and reconnect with the earth’s healing energy."],
  ["Meditation Trails", "Marked pathways through forest and meadow, designed for contemplative walking and mindful nature connection."],
];

const nearbyLocations = [
  { name: "Lake Eufaula", distance: "15 miles away", type: "Water • Peaceful • Scenic" },
  { name: "Robbers Cave State Park", distance: "25 miles away", type: "Hiking • History • Adventure" },
  { name: "Diamond Park", distance: "30 miles away", type: "Scenic • Quiet • Nature" },
];

export default function Amenities() {
  return (
    <SiteShell>
      <main className="inner-shell amenities-page">
        <section className="amenities-hero">
          <div className="amenities-hero-copy">
            <p className="eyebrow light">Stay · Explore · Restore</p>
            <h1>A full retreat experience, <em>from first light to campfire.</em></h1>
            <p>
              Share tea, ride the trails, settle into meditation, and end the day
              beneath an Oklahoma sky. H Mountain gives families, friends, and
              retreat groups room to reconnect at their own pace.
            </p>
            <div className="button-row">
              <Link href="/map" className="button primary">Reserve a campsite <span>↗</span></Link>
              <a href="#nearby" className="button ghost">Explore nearby</a>
            </div>
          </div>
          <div className="campfire-caption">
            <span>Evening at H Mountain</span>
            <strong>Camp together. Stay awhile.</strong>
          </div>
        </section>

        <section className="wildlife-banner">
          <div className="marked-tree" aria-hidden="true"><span /></div>
          <div>
            <p className="eyebrow">Our land promise</p>
            <h2>Wildlife is welcome here, too.</h2>
            <p>
              Purple-marked trees identify the H Mountain boundary and create a
              quiet, no-hunting space inside the retreat. It is not a judgment
              on hunting elsewhere—it is how we protect the campground, respect
              the animals already here, and keep the land peaceful for guests.
            </p>
          </div>
        </section>

        <section className="content-section amenity-intro">
          <p className="eyebrow">At H Mountain</p>
          <div>
            <h2>Simple comforts.<br /><em>Meaningful experiences.</em></h2>
            <p>These are the experiences planned for the property and the heart of an H Mountain stay.</p>
          </div>
        </section>

        <section className="amenity-cards">
          {onSite.map(([title, text, note], index) => (
            <article key={title}>
              <span className="card-number">0{index + 1}</span>
              <p className="amenity-note">{note}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="renewal healing-showcase">
          <div className="renewal-heading">
            <p className="eyebrow">Healing experiences</p>
            <h2>Sound, light,<br /><em>and deep rest.</em></h2>
          </div>
          <div className="renewal-grid">
            <article className="renewal-card">
              <div
                className="renewal-image"
                role="img"
                aria-label="A practitioner sounding a large gong beside crystal singing bowls in a calm sunlit room"
                style={{ background: "url('/assets/sound-healing-gong.webp') center/cover" }}
              />
              <div>
                <p className="eyebrow">Sound healing</p>
                <h3>Singing bowls & gong sessions</h3>
                <p>Resonant sound washes that help you slow down, breathe, and reset from the inside out.</p>
                <small>Concept imagery — sessions offered by appointment.</small>
              </div>
            </article>
            <article className="renewal-card light-card">
              <div
                className="renewal-image"
                role="img"
                aria-label="A guest resting on a spa bed beneath warm red-light therapy panels"
                style={{ background: "url('/assets/red-light-therapy.webp') center/cover" }}
              />
              <div>
                <p className="eyebrow light">Red-light therapy</p>
                <h3>Warm light, quiet recovery</h3>
                <p>Red and near-infrared light sessions to support recovery, circulation, and overall wellness.</p>
                <small>A relaxation and wellness experience, not medical treatment.</small>
              </div>
            </article>
          </div>
        </section>

        <section className="meditation-feature">
          <div
            className="meditation-visual"
            role="img"
            aria-label="A peaceful timber meditation room with warm and soft lavender triangular lighting"
          />
          <div>
            <p className="eyebrow light">Quiet the noise</p>
            <h2>Soft light. Gentle music. <em>Time to find yourself.</em></h2>
            <p>
              Step into a softly illuminated meditation space shaped around
              breathwork, stillness, and restorative sound. No agenda—just room
              to slow down and listen inward.
            </p>
            <small>Offered as a relaxation and wellness experience, not medical treatment.</small>
          </div>
        </section>

        <section id="nearby" className="nearby-section">
          <div className="nearby-heading">
            <div>
              <p className="eyebrow">Nearby Healing Destinations</p>
              <h2>Expand your wellness journey beyond H Mountain.</h2>
            </div>
            <p>
              While H Mountain is your healing sanctuary on-site, these nearby natural destinations
              extend your wellness journey. Explore them at your own pace during your stay or combine
              them with your retreat experience for a deeper connection with nature's restorative power.
            </p>
          </div>

          {/* Nearby Locations Map Section - Distance View */}
          <div className="nearby-locations-grid">
            {nearbyLocations.map((location, index) => (
              <div key={location.name} className="location-card">
                <div className="location-distance-badge">{location.distance}</div>
                <h3>{location.name}</h3>
                <p className="location-type">{location.type}</p>
                <small className="location-note">Beyond H Mountain</small>
              </div>
            ))}
          </div>

          <div className="nearby-grid">
            {nearby.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>

          <div className="nearby-source">
            <p>Always check current conditions, rentals, hours, and activity availability before your visit.</p>
            <a href="https://www.robberscavestatepark.com/?detailed_information=activities" target="_blank" rel="noreferrer" className="text-link">
              View Robbers Cave activities <span>↗</span>
            </a>
          </div>
        </section>

        <section className="amenities-cta">
          <p className="eyebrow light">Your mountain stay</p>
          <h2>Pick your campsite.<br /><em>Build your experience.</em></h2>
          <Link href="/map" className="button primary">Check dates & reserve <span>↗</span></Link>
        </section>
      </main>
    </SiteShell>
  );
}
