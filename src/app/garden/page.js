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
    { name: "Stellar's Jay", status: "stable", statusColor: "#2d8a4e", statusLabel: "Stable 🟢", fact: "Thrives in mountain pine forests" },
    { name: "Varied Thrush", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Old growth forest loss hurting numbers" },
    { name: "Oregon Spotted Frog", status: "threatened", statusColor: "#c0392b", statusLabel: "Threatened 🔴", fact: "Wetland loss is devastating populations" },
    { name: "Yellow Warbler", status: "declining", statusColor: "#e6a817", statusLabel: "Declining 🟡", fact: "Needs riparian willows and alders" },
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
      {/* Photo */}
      <div style={{ width: "100%", height: "160px", backgroundColor: "#f0f0f0", overflow: "hidden" }}>
        {photo ? (
          <img src={photo} alt={bird.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>🐦</div>
        )}
      </div>

      {/* Info */}
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
    <main style={{ fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "8px" }}>🌿 Bird Rescue Garden Builder</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "32px" }}>
        Design a garden that saves your local birds
      </p>

      {/* Step 1 — Location */}
      {step === 1 && (
        <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "24px" }}>Step 1 — Your location</h2>

          <input
            type="text"
            placeholder="Enter your zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            maxLength={5}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              marginBottom: "12px",
              boxSizing: "border-box",
            }}
          />

          <select
            value={yardSize}
            onChange={(e) => setYardSize(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              marginBottom: "20px",
              boxSizing: "border-box",
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
              backgroundColor: "#2d8a4e",
              color: "white",
              border: "none",
              padding: "14px 32px",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: zipCode && yardSize ? "pointer" : "not-allowed",
              opacity: zipCode && yardSize ? 1 : 0.5,
              width: "100%",
            }}
          >
            Find My Local Birds →
          </button>
        </div>
      )}

      {/* Step 2 — Bird grid */}
      {step === 2 && (
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Step 2 — Choose your bird</h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: "24px" }}>
            Local birds in the <strong>{selectedRegion}</strong> — pick one to rescue
          </p>

          {loadingPhotos ? (
            <p style={{ textAlign: "center", color: "#888" }}>Loading local birds... 🐦</p>
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

      {/* Step 3 — Blueprint */}
      {step === 3 && (
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>
            🌿 Your Garden Blueprint for the {selectedBird?.name}
          </h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: "24px" }}>
            {selectedBird?.yardSize} yard · {selectedRegion} region
          </p>

          {loadingBlueprint ? (
            <div style={{ textAlign: "center", padding: "60px" }}>
              <p style={{ fontSize: "18px" }}>🌱 Building your garden blueprint...</p>
              <p style={{ color: "#888" }}>This takes about 10 seconds</p>
            </div>
          ) : (
            <div style={{
              backgroundColor: "#f8fdf8",
              border: "1.5px solid #2d8a4e",
              borderRadius: "16px",
              padding: "32px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              fontSize: "15px",
            }}>
              {blueprint}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "24px", display: "flex", gap: "12px", justifyContent: "center" }}>
            <button
              onClick={() => { setStep(2); setBlueprint(""); setSelectedBird(null); }}
              style={{ background: "none", border: "1.5px solid #ccc", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "14px" }}
            >
              ← Choose different bird
            </button>
            <button
              onClick={() => window.print()}
              style={{ backgroundColor: "#2d8a4e", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "14px" }}
            >
              🖨️ Print Blueprint
            </button>
          </div>
        </div>
      )}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
  <a href="/garden" style={{
    backgroundColor: "#2d8a4e",
    color: "white",
    padding: "14px 28px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "16px",
  }}>
    🌿 Build Your Bird Rescue Garden →
  </a>
</div>
    </main>
  );
}
