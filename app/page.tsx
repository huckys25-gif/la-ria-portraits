export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>La Ria Portraits</h1>
      <p>Web funguje ✅</p>

      <div style={{ marginTop: "20px" }}>
        <img
          src="/logo.png"
          alt="La Ria Portraits logo"
          style={{ height: "60px", width: "auto", marginBottom: "20px" }}
        />
      </div>

      <div>
        <img
          src="/hero.jpg"
          alt="Hero fotografie"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "16px",
            display: "block"
          }}
        />
      </div>
    </main>
  );
}
