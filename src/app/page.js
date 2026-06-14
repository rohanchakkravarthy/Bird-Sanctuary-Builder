"use client";
import { useState } from "react";
import feederData from "./birdData/birdfeederdata.json";

const regions = [
  {
    id: "Northeast",
    label: "Northeast",
    emoji: "🌲",
    color: "from-blue-100 to-cyan-100",
    border: "border-blue-300",
    active: "from-blue-200 to-cyan-200 border-blue-500",
    text: "text-blue-900",
    states: ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"],
  },
  {
    id: "Southeast",
    label: "Southeast",
    emoji: "🌴",
    color: "from-green-100 to-emerald-100",
    border: "border-green-300",
    active: "from-green-200 to-emerald-200 border-green-500",
    text: "text-green-900",
    states: ["Alabama", "Arkansas", "Florida", "Georgia", "Kentucky", "Louisiana", "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Virginia", "West Virginia"],
  },
  {
    id: "Midwest",
    label: "Midwest",
    emoji: "🌾",
    color: "from-yellow-100 to-amber-100",
    border: "border-yellow-300",
    active: "from-yellow-200 to-amber-200 border-yellow-500",
    text: "text-yellow-900",
    states: ["Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"],
  },
  {
    id: "Southwest",
    label: "Southwest",
    emoji: "🌵",
    color: "from-orange-100 to-red-100",
    border: "border-orange-300",
    active: "from-orange-200 to-red-200 border-orange-500",
    text: "text-orange-900",
    states: ["Arizona", "Colorado", "Nevada", "New Mexico", "Oklahoma", "Texas", "Utah"],
  },
  {
    id: "West",
    label: "West",
    emoji: "🏔️",
    color: "from-purple-100 to-violet-100",
    border: "border-purple-300",
    active: "from-purple-200 to-violet-200 border-purple-500",
    text: "text-purple-900",
    states: ["Alaska", "California", "Hawaii", "Idaho", "Montana", "Oregon", "Washington", "Wyoming"],
  },
];

export default function Home() {
  const [chosenRegion, setChosenRegion] = useState("");
  const [chosenState, setChosenState] = useState("");

  const region = regions.find((r) => r.id === chosenRegion);
  const stateData = chosenState ? feederData[chosenState] : null;

  return (
    <main className="min-h-screen">

      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl float">🌿</div>
          <div className="absolute top-20 right-20 text-6xl float" style={{animationDelay: "1s"}}>🐦</div>
          <div className="absolute bottom-10 left-1/4 text-7xl float" style={{animationDelay: "0.5s"}}>🌸</div>
          <div className="absolute bottom-20 right-1/3 text-5xl float" style={{animationDelay: "1.5s"}}>🍃</div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-7xl mb-6 float">🪺</div>
          <h1 className="text-5xl font-bold mb-4" style={{fontFamily: "Playfair Display, serif"}}>
            The Backyard Biome
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect bird feeders and foods to attract and protect
            the beautiful birds in your region
          </p>
          <div className="mt-8 flex justify-center gap-4 text-green-200 text-sm">
            <span>🌱 Native focused</span>
            <span>•</span>
            <span>🐦 Conservation driven</span>
            <span>•</span>
            <span>🏡 Backyard friendly</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Region selector */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-green-900 mb-2" style={{fontFamily: "Playfair Display, serif"}}>
            Choose Your Region
          </h2>
          <p className="text-gray-500">Select the region of the US you live in</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => { setChosenRegion(r.id); setChosenState(""); }}
              className={`card-hover flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border-2 bg-gradient-to-br font-medium transition-all
                ${chosenRegion === r.id ? r.active + " shadow-lg scale-105" : r.color + " " + r.border}
                ${r.text}`}
            >
              <span className="text-3xl">{r.emoji}</span>
              <span className="text-sm font-semibold">{r.label}</span>
            </button>
          ))}
        </div>

        {/* State dropdown */}
        {region && (
          <div className="fade-in-up text-center mb-12">
            <div className={`inline-block bg-gradient-to-br ${region.color} border-2 ${region.border} rounded-2xl px-8 py-6 shadow-md`}>
              <label className={`block text-sm font-semibold ${region.text} mb-3`}>
                Now select your state
              </label>
              <select
                value={chosenState}
                onChange={(e) => setChosenState(e.target.value)}
                className={`bg-white border-2 ${region.border} ${region.text} rounded-xl px-4 py-3 text-sm font-medium cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                <option value="">-- Pick a state --</option>
                {region.states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Results */}
        {stateData && (
          <div className="fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-green-900" style={{fontFamily: "Playfair Display, serif"}}>
                🗺️ {chosenState}
              </h2>
              <p className="text-gray-500 mt-1">Here's what works best for birds in your area</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              {/* Birds card */}
              <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-green-100">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">🐦 Common Birds</h3>
                  <p className="text-green-100 text-xs mt-1">Species you'll likely see</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {stateData.birds.map((bird) => (
                      <li key={bird} className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">•</span>
                        <span className="text-gray-700 text-sm font-medium">{bird}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Feeders card */}
              <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">🪣 Best Feeders</h3>
                  <p className="text-amber-100 text-xs mt-1">Feeders that attract the most birds</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {stateData.feeders.map((feeder) => (
                      <li key={feeder} className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">•</span>
                        <span className="text-gray-700 text-sm font-medium">{feeder}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Foods card */}
              <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">🌻 Best Foods</h3>
                  <p className="text-blue-100 text-xs mt-1">Foods birds love most</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {stateData.foods.map((food) => (
                      <li key={food} className="flex items-center gap-3">
                        <span className="text-blue-500 text-lg">•</span>
                        <span className="text-gray-700 text-sm font-medium">{food}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Garden builder CTA */}
            <div className="text-center bg-gradient-to-br from-green-800 to-emerald-700 rounded-3xl p-10 text-white shadow-xl">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-2" style={{fontFamily: "Playfair Display, serif"}}>
                Want to go deeper?
              </h3>
              <p className="text-green-100 mb-6 max-w-md mx-auto">
                Use our AI-powered Bird Rescue Garden Builder to get a personalized
                garden plan that saves local birds
              </p>
              <a
                href="/garden"
                className="inline-block bg-white text-green-800 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                🌱 Build My Bird Garden →
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>🪺 The Backyard Biome — helping birds one garden at a time</p>
      </footer>
    </main>
  );
}
