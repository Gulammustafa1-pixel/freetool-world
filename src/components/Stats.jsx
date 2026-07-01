import "../styles/Stats.css";

function Stats() {
  const stats = [
    { number: "50+", title: "AI Tools" },
    { number: "100K+", title: "Images Generated" },
    { number: "25K+", title: "Happy Users" },
    { number: "99.9%", title: "Uptime" },
  ];

  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <h2>{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;