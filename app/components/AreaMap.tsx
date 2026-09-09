/**
 * A simple map of what is NEAR the retreat, not on it.
 *
 * The property map at /map plots the ten campsites you can book. This is the opposite
 * question — "where am I, and what is around me?" — and guests kept assuming the lake and
 * the caves were on the land. The star is H Mountain; everything else is a drive.
 *
 * Drawn as inline SVG rather than an embedded map: no API key, no third-party tracker on
 * a page that already loads fast, and nothing to break when a provider changes its terms.
 * Positions are indicative, not survey-accurate, which the caption says out loud.
 *
 * The SVG is decorative to a screen reader (aria-hidden) because the same information is
 * in the location cards underneath it as real text. A screen reader user gets the distances
 * and the "beyond H Mountain" note without having to interpret a picture.
 */

type Place = {
  name: string;
  distance: string;
  bearing: string;
  x: number;
  y: number;
};

const places: Place[] = [
  { name: "Robbers Cave State Park", distance: "25 miles", bearing: "north-east", x: 74, y: 24 },
  { name: "Lake Eufaula", distance: "15 miles", bearing: "north-west", x: 24, y: 30 },
  { name: "Diamond Park", distance: "30 miles", bearing: "south-east", x: 81, y: 82 },
];

export default function AreaMap() {
  return (
    <figure className="area-map">
      <svg viewBox="0 0 100 100" className="area-map-svg" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="areaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5c76a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f5c76a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* the land around the retreat, suggested rather than drawn to scale */}
        <rect x="0" y="0" width="100" height="100" rx="4" className="area-map-bg" />
        <path d="M0 62 Q 22 54 40 60 T 78 56 T 100 62 L100 100 L0 100 Z" className="area-map-hills" />
        <path d="M8 26 Q 20 20 30 27 T 46 24" className="area-map-water" />

        {/* each place, with a line back to the retreat so the distance reads as a journey */}
        {places.map((p) => (
          <g key={p.name}>
            <line x1="50" y1="50" x2={p.x} y2={p.y} className="area-map-link" />
            <circle cx={p.x} cy={p.y} r="2.6" className="area-map-dot" />
            <text x={p.x} y={p.y - 5} className="area-map-label" textAnchor="middle">
              {p.name.replace(" State Park", "")}
            </text>
            <text x={p.x} y={p.y + 8} className="area-map-distance" textAnchor="middle">
              {p.distance}
            </text>
          </g>
        ))}

        <circle cx="50" cy="50" r="16" fill="url(#areaGlow)" />
        <path
          className="area-map-star"
          d="M50 41.5 L52.6 47.2 L58.8 47.9 L54.2 52.1 L55.5 58.2 L50 55.1 L44.5 58.2 L45.8 52.1 L41.2 47.9 L47.4 47.2 Z"
        />
        <text x="50" y="66" className="area-map-home" textAnchor="middle">
          H Mountain Retreat
        </text>
      </svg>
      <figcaption>
        The star is H Mountain. Everything else is a drive — distances are approximate and
        shown to give a sense of direction, not exact routing.
      </figcaption>
    </figure>
  );
}
