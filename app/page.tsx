import InteractiveMap from './components/InteractiveMap';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-gray-900">
      {/* Hero Section: Twilight Purple-to-Blue Gradient */}
      <section className="bg-gradient-to-b from-[#4B0082] to-[#2E1A47] text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">H Mountains Retreat</h1>
        <p className="text-xl md:text-2xl mb-10 text-purple-200 font-light">Harmony. Healing. Haven.</p>
        <button className="bg-[#007BFF] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300">
          Browse Sites & Book Now
        </button>
      </section>

      {/* Booking & Map */}
      <section className="container mx-auto max-w-6xl mt-16 p-4 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-7/12"><InteractiveMap /></div>
        <div className="w-full md:w-5/12 bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-[#4B0082] mb-8">Book Your Stay</h2>
          <div className="space-y-6">
            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer" style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}>
              <option value="">Select Site Type</option>
              <option value="tent">Standard Tent Site</option>
              <option value="rv">Premium RV Site</option>
              <option value="cabin">Luxury Cabin</option>
            </select>
            <button className="w-full bg-[#4B0082] text-white font-bold py-4 rounded-lg hover:bg-[#3a0066]">Check Availability</button>
          </div>
        </div>
      </section>

      {/* New Retreat Sections */}
      <section className="container mx-auto max-w-6xl mt-20 p-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Healing Sanctuary */}
          <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Healing Sanctuary</h3>
            <p className="text-gray-600">Rejuvenate in our dedicated meditation spaces, crystal therapy rooms, and immersive sound-frequency chambers.</p>
          </div>
          
          {/* Artisan Hub */}
          <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Artisan Hub</h3>
            <p className="text-gray-600">Unleash your creativity in our craft workshops. From pottery to painting, find your flow in the mountains.</p>
          </div>

          {/* Provision Store */}
          <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200 opacity-75">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Provision Store</h3>
            <p className="text-gray-500 italic">Coming Soon: Your daily essentials, organic toiletries, and curated local goods.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
