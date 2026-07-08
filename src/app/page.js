"use client";
import { useState } from "react";

const regionBirds = {
  Northeast: [
    { name: "Black-capped Chickadee", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves dense shrubs and sunflower seeds" },
    { name: "American Robin", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Needs open lawns for foraging worms" },
    { name: "Tufted Titmouse", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Nests in tree cavities, loves peanuts" },
    { name: "Wood Thrush", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Needs large forest patches to breed" },
    { name: "Chimney Swift", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Lost 50% of population since 1970" },
    { name: "Eastern Meadowlark", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Grassland loss has devastated numbers" },
  ],
  Southeast: [
    { name: "Northern Cardinal", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves dense shrubs for nesting" },
    { name: "Carolina Chickadee", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Needs native oaks for insect food" },
    { name: "Ruby-throated Hummingbird", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Needs tubular native flowers for nectar" },
    { name: "Painted Bunting", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Trapped illegally for its colorful feathers" },
    { name: "Bachman's Sparrow", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Depends on open pine forests" },
    { name: "Red-cockaded Woodpecker", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Needs old-growth longleaf pine" },
  ],
  Midwest: [
    { name: "American Goldfinch", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves nyjer seed and coneflowers" },
    { name: "Blue Jay", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Plants oak trees by burying acorns" },
    { name: "Northern Cardinal", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves dense shrubs for nesting" },
    { name: "Bobolink", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Grassland loss on migration routes" },
    { name: "Eastern Meadowlark", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Farmland changes have hurt populations" },
    { name: "Henslow's Sparrow", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "One of North America's most declining birds" },
  ],
  Southwest: [
    { name: "House Finch", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Thrives in suburban gardens" },
    { name: "Anna's Hummingbird", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Needs year-round nectar flowers" },
    { name: "Curve-billed Thrasher", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves cactus gardens for nesting" },
    { name: "Lucifer Hummingbird", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Agave loss threatens its food supply" },
    { name: "Southwestern Willow Flycatcher", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Riparian habitat destruction is critical" },
    { name: "Cactus Ferruginous Pygmy-Owl", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Urban sprawl shrinking its habitat fast" },
  ],
  West: [
    { name: "Chestnut-backed Chickadee", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Loves conifer forests and suet feeders" },
    { name: "Dark-eyed Junco", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Ground feeder, loves white millet" },
    { name: "Steller's Jay", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Thrives in mountain pine forests" },
    { name: "Varied Thrush", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Old growth forest loss hurting numbers" },
    { name: "Yellow Warbler", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Needs riparian willows and alders" },
    { name: "Tricolored Blackbird", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Colony nesting sites disappearing fast" },
  ],
};

function BirdCard({ bird, photo, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(bird)}
      style={{
        border: selected ? "3px solid #2d8a4e" : "2px solid #e0e0e0",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: selected ? "0 4px 16px rgba(45,138,78,0.3)" : "0 2px 8px rgba(0,0,0,0.08)",
        backgroundColor: "white",
        transform: selected ? "scale(1.03)" : "scale(1)",
      }}
    >
      <div style={{ width: "100%", height: "160px", backgroundColor: "#f0f0f0", overflow: "hidden" }}>
        {photo ? (
          <img src={photo} alt={bird.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>🐦</div>
        )}
      </div>
      <div style={{ padding: "12px" }}>
        <div style={{
          display: "inline-block",
          backgroundColor: bird.statusColor + "22",
          color: bird.statusColor,
          fontSize: "11px",
          fontWeight: "600",
          padding: "3px 8px",
          borderRadius: "20px",
          marginBottom: "6px",
        }}>
          {bird.statusLabel}
        </div>
        <h3 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: "600" }}>{bird.name}</h3>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{bird.fact}</p>
      </div>
    </div>
  );
}

export default function GardenBuilder() {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState("");
  const [yardSize, setYardSize] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBird, setSelectedBird] = useState(null);
  const [photos, setPhotos] = useState({});
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [blueprint, setBlueprint] = useState("");
  const [loadingBlueprint, setLoadingBlueprint] = useState(false);

  const zipToRegion = (zip) => {
    const num = parseInt(zip);
    if (num >= 10000 && num <= 19999) return "Northeast";
    if (num >= 20000 && num <= 29999) return "Southeast";
    if (num >= 30000 && num <= 39999) return "Southeast";
    if (num >= 40000 && num <= 49999) return "Midwest";
    if (num >= 50000 && num <= 59999) return "Midwest";
    if (num >= 60000 && num <= 69999) return "Midwest";
    if (num >= 70000 && num <= 79999) return "Southwest";
    if (num >= 80000 && num <= 84999) return "Southwest";
    if (num >= 85000 && num <= 89999) return "Southwest";
    if (num >= 90000 && num <= 99999) return "West";
    return "Northeast";
  };

  const fetchPhotos = async (birds) => {
    setLoadingPhotos(true);
    const photoMap = {};
    for (const bird of birds) {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(bird.name)}`
        );
        const data = await res.json();
        if (data.thumbnail?.source) {
          photoMap[bird.name] = data.thumbnail.source;
        }
      } catch (e) {
        console.log("No photo for", bird.name);
      }
    }
    setPhotos(photoMap);
    setLoadingPhotos(false);
  };

  const handleLocationSubmit = async () => {
    if (!zipCode || !yardSize) return;
    const region = zipToRegion(zipCode);
    setSelectedRegion(region);
    await fetchPhotos(regionBirds[region]);
    setStep(2);
  };

  const handleBirdSelect = async (bird) => {
    setSelectedBird(bird);
    setStep(3);
    setLoadingBlueprint(true);
    const response = await fetch("/api/garden", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bird: bird.name,
        region: selectedRegion,
        yardSize: yardSize,
      }),
    });
    const data = await response.json();
    setBlueprint(data.blueprint);
    setLoadingBlueprint(false);
  };

  return (
    <main style={{ fontFamily: "sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a5c2e, #2d8a4e)", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "56px", marginBottom: "12px" }}>🌿</div>
        <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "8px", fontFamily: "Playfair Display, serif" }}>
          Bird Sanctuary Builder
        </h1>
        <p style={{ fontSize: "16px", color: "#a7f3d0", maxWidth: "500px", margin: "0 auto" }}>
          Get a personalized garden plan that attracts and protects local birds
        </p>
      </div>

      {/* Background image wrapper */}
      <div style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.93), rgba(255,255,255,0.93)), url('https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>

          {/* Step indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{
                width: "36px", height: "36px", borderRadius: "50%",
                backgroundColor: step >= s ? "#2d8a4e" : "#e0e0e0",
                color: step >= s ? "white" : "#999",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "600", fontSize: "14px", transition: "all 0.3s ease",
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px", color: "#1a3a2a" }}>
                Where is your garden?
              </h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>We'll find the birds local to your area</p>
              <input
                type="text"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                maxLength={5}
                style={{
                  width: "100%", padding: "14px 16px", borderRadius: "12px",
                  border: "2px solid #d1fae5", fontSize: "16px", marginBottom: "12px",
                  boxSizing: "border-box", outline: "none",
                }}
              />
              <select
                value={yardSize}
                onChange={(e) => setYardSize(e.target.value)}
                style={{
                  width: "100%", padding: "14px 16px", borderRadius: "12px",
                  border: "2px solid #d1fae5", fontSize: "16px", marginBottom: "20px",
                  boxSizing: "border-box", outline: "none", backgroundColor: "white",
                }}
              >
                <option value="">-- Select yard size --</option>
                <option value="small (under 500 sq ft)">Small (under 500 sq ft)</option>
                <option value="medium (500-2000 sq ft)">Medium (500–2000 sq ft)</option>
                <option value="large (over 2000 sq ft)">Large (over 2000 sq ft)</option>
              </select>
              <button
                onClick={handleLocationSubmit}
                disabled={!zipCode || !yardSize}
                style={{
                  width: "100%", padding: "14px", borderRadius: "12px",
                  backgroundColor: zipCode && yardSize ? "#2d8a4e" : "#ccc",
                  color: "white", border: "none", fontSize: "16px", fontWeight: "600",
                  cursor: zipCode && yardSize ? "pointer" : "not-allowed",
                  transition: "all 0.2s ease",
                }}
              >
                Find My Local Birds 🐦
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1a3a2a", marginBottom: "6px" }}>
                  Choose a bird to rescue
                </h2>
                <p style={{ color: "#666" }}>Local birds in the <strong>{selectedRegion}</strong> — pick one to build a garden for</p>
              </div>
              {loadingPhotos ? (
                <p style={{ textAlign: "center", color: "#888", fontSize: "16px" }}>Loading local birds... 🐦</p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
                  {regionBirds[selectedRegion].map((bird) => (
                    <BirdCard
                      key={bird.name}
                      bird={bird}
                      photo={photos[bird.name]}
                      onSelect={handleBirdSelect}
                      selected={selectedBird?.name === bird.name}
                    />
                  ))}
                </div>
              )}
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <button onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "14px" }}>
                  ← Change location
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1a3a2a", marginBottom: "6px" }}>
                  🌿 Your Garden Blueprint
                </h2>
                <p style={{ color: "#666" }}>Personalized for the <strong>{selectedBird?.name}</strong> in your {yardSize} yard</p>
              </div>
              {loadingBlueprint ? (
                <div style={{ textAlign: "center", padding: "60px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌱</div>
                  <p style={{ fontSize: "18px", fontWeight: "500", color: "#1a3a2a" }}>Building your garden blueprint...</p>
                  <p style={{ color: "#888", marginTop: "8px" }}>Analyzing local plants and wildlife</p>
                  <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "8px" }}>
                    {["🌿", "🐛", "🌸", "🦋", "🌳"].map((emoji, i) => (
                      <span key={i} style={{ fontSize: "24px", display: "inline-block", animation: `bounce 0.6s ${i * 0.1}s infinite alternate` }}>{emoji}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <style>{`
                    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    .blueprint-card { animation: fadeIn 0.5s ease forwards; opacity: 0; }
                  `}</style>
                  {blueprint.split("\n\n").filter(Boolean).map((section, i) => {
                    const lines = section.trim().split("\n").filter(Boolean);
                    const title = lines[0];
                    const content = lines.slice(1);
                    const sectionStyles = {
                      "🌱": { bg: "#f0faf0", border: "#2d8a4e", color: "#1a5c2e" },
                      "🐛": { bg: "#fff8f0", border: "#e67e22", color: "#7a3e0a" },
                      "📅": { bg: "#f0f4ff", border: "#3498db", color: "#0a2e7a" },
                      "⚠️": { bg: "#fff5f5", border: "#e74c3c", color: "#7a0a0a" },
                      "💚": { bg: "#f5fff5", border: "#27ae60", color: "#0a5c2e" },
                    };
                    const matchedKey = Object.keys(sectionStyles).find(k => title?.includes(k));
                    const style = sectionStyles[matchedKey] || { bg: "#f9f9f9", border: "#ccc", color: "#333" };
                    return (
                      <div
                        key={i}
                        className="blueprint-card"
                        style={{
                          backgroundColor: style.bg,
                          border: `2px solid ${style.border}`,
                          borderRadius: "16px",
                          padding: "20px 24px",
                          marginBottom: "16px",
                          animationDelay: `${i * 0.15}s`,
                        }}
                      >
                        <h3 style={{ margin: "0 0 12px", fontSize: "16px", fontWeight: "700", color: style.color }}>
                          {title}
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: "20px" }}>
                          {content.map((line, j) => (
                            <li key={j} style={{ marginBottom: "8px", lineHeight: "1.7", fontSize: "14px", color: "#444" }}>
                              {line.replace(/^[-•*]\s*/, "")}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
              <div style={{ textAlign: "center", marginTop: "32px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => { setStep(2); setBlueprint(""); setSelectedBird(null); }}
                  style={{ background: "none", border: "2px solid #ccc", padding: "12px 24px", borderRadius: "12px", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}
                >
                  ← Choose different bird
                </button>
                <button
                  onClick={() => window.print()}
                  style={{ backgroundColor: "#2d8a4e", color: "white", border: "none", padding: "12px 24px", borderRadius: "12px", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}
                >
                  🖨️ Print Blueprint
                </button>
                <a
                  href="/"
                  style={{ backgroundColor: "#1a3a2a", color: "white", padding: "12px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}
                >
                  🏠 Back to Home
                </a>
              </div>
            </div>
          )}

        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "32px", color: "#999", fontSize: "13px", borderTop: "1px solid #eee", marginTop: "40px" }}>
        🪺 Bird Sanctuary Builder — helping birds one garden at a time
      </footer>
    </main>
  );
}
