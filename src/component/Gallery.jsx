export default function Gallery() {
  const samples = [
    {
      title: 'शुभ विवाह मुख्य द्वार स्वागत बैनर',
      category: 'फ्लेक्स बैनर',
      size: '12 x 8 Feet • Star HD',
      icon: '🎉',
    },
    {
      title: 'रॉयल वेल्वेट मैट विज़िटिंग कार्ड',
      category: 'विज़िटिंग कार्ड',
      size: '350 GSM • Spot UV',
      icon: '📇',
    },
    {
      title: '3D गोल्डन वुडन फैमिली फोटो फ्रेम',
      category: 'फोटो फ्रेम',
      size: '16 x 24 Inch • Acrylic Glass',
      icon: '🖼️',
    },
    {
      title: '2-Ply कार्बनलेस GST बिल बुक',
      category: 'बिल बुक',
      size: 'Numbered • 100 Sheets',
      icon: '📑',
    },
    {
      title: 'रॉयल लेज़र-कट शादी निमंत्रण कार्ड',
      category: 'शादी कार्ड',
      size: 'Red Velvet • Gold Leaf',
      icon: '💌',
    },
    {
      title: 'ट्रोडाट ऑटोमैटिक गोल मुहर',
      category: 'स्टाम्प',
      size: 'Round 40mm • 15 Mins',
      icon: '🔏',
    },
  ];

  const handleOrder = (s) => {
    const text = `Namaste Aman Graphics! Mujhe website par dikhaya gaya sample pasand aaya: ${s.title} (${s.category}). Kripya rate aur design bhejein.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="section-head-clean">
          <span className="clean-tag">हाल के काम</span>
          <h2 className="clean-title">असली काम के सैंपल्स</h2>
          <p className="clean-desc">पसंद आने पर वैसा ही डिज़ाइन 1-क्लिक में ऑर्डर करें।</p>
        </div>

        <div className="clean-gallery-grid">
          {samples.map((s, idx) => (
            <div key={idx} className="sample-card">
              <div className="sample-icon-box">
                <span className="s-icon">{s.icon}</span>
                <span className="s-cat">{s.category}</span>
              </div>
              <div className="sample-info">
                <h4>{s.title}</h4>
                <p>{s.size}</p>
              </div>
              <button onClick={() => handleOrder(s)} className="sample-btn">
                <span>ऐसा ही बनवाना है →</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
