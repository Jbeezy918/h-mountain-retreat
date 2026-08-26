"use client";

export default function InteractiveMap() {
  const locations = [
    { name: "Lake Eufaula", distance: "15 miles", x: 50, y: 35, activities: ["Boating", "Swimming", "Fishing"] },
    { name: "Robbers Cave State Park", distance: "25 miles", x: 30, y: 60, activities: ["Hiking", "History", "Rock Climbing"] },
    { name: "Diamond Park", distance: "30 miles", x: 70, y: 55, activities: ["Scenic", "Quiet", "Nature"] },
  ];

  return (
    <div className="w-full bg-purple-50 rounded-2xl p-8 border border-purple-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#4B0082] mb-2">Explore Nearby Healing Destinations</h3>
        <p className="text-gray-600">Expand your wellness journey beyond H Mountain</p>
      </div>

      {/* Map Container */}
      <div className="relative w-full bg-white rounded-xl border border-purple-300 overflow-hidden" style={{ paddingBottom: "66.67%" }}>
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="400" height="300" fill="#f0e6ff" />

          {/* H Mountain (center point) */}
          <circle cx="200" cy="150" r="12" fill="#4B0082" />
          <text x="200" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4B0082">
            H Mountain
          </text>

          {/* Location Lines from H Mountain */}
          {locations.map((loc, idx) => (
            <g key={`line-${idx}`}>
              {/* Line to location */}
              <line
                x1="200"
                y1="150"
                x2={loc.x * 4}
                y2={loc.y * 2.7}
                stroke="#9370DB"
                strokeWidth="2"
                strokeDasharray="4,4"
                opacity="0.5"
              />
            </g>
          ))}

          {/* Location Markers (Stars) */}
          {locations.map((loc, idx) => (
            <g key={`marker-${idx}`}>
              {/* Star marker */}
              <circle cx={loc.x * 4} cy={loc.y * 2.7} r="8" fill="#FFD700" stroke="#FFA500" strokeWidth="2" />
              <text x={loc.x * 4} y={loc.y * 2.7 + 3} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">
                ★
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Locations Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-bold text-[#4B0082] text-lg">{loc.name}</h4>
              <span className="text-2xl">★</span>
            </div>
            <p className="text-purple-600 font-semibold text-lg mb-3">{loc.distance}</p>
            <div className="space-y-1">
              {loc.activities.map((activity, i) => (
                <p key={i} className="text-gray-600 text-sm">• {activity}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Text */}
      <p className="mt-6 text-center text-gray-600 text-sm">
        Explore these nearby destinations to deepen your healing journey during your stay at H Mountain.
      </p>
    </div>
  );
}
