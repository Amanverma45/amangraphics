export default function About() {
  const points = [
    {
      title: 'जापानी व जर्मन HD प्रिंटिंग',
      desc: 'ओरिजिनल इंक और जापानी मशीनों से प्रिंटिंग, जिससे रंग सालों-साल चमकदार रहते हैं।',
      icon: '🖨️',
    },
    {
      title: 'फ्री ग्राफिक डिज़ाइनिंग',
      desc: 'WhatsApp पर मैटर भेजिए, हमारे आर्टिस्ट 30 मिनट में आपको सुंदर डिज़ाइन बनाकर दिखाएंगे।',
      icon: '🎨',
    },
    {
      title: '2 घंटे में सुपरफास्ट डिलीवरी',
      desc: 'शादी, बर्थडे या अंतिम समय में प्रचार की ज़रूरत हो, तुरंत हाथो-हाथ प्रिंट तैयार।',
      icon: '⚡',
    },
    {
      title: 'सीधे फैक्ट्री व होलसेल रेट',
      desc: 'गाँव व बाजार के सभी भाइयों के लिए सबसे किफायती रेट, बिना किसी छुपे चार्ज के।',
      icon: '💰',
    },
  ];

  return (
    <section id="why-us" className="about-section section-padding">
      <div className="container">
        <div className="section-head-clean">
          <span className="clean-tag">खासियत</span>
          <h2 className="clean-title">लोग अमन ग्राफिक्स को क्यों चुनते हैं?</h2>
        </div>

        <div className="clean-features-grid">
          {points.map((p, i) => (
            <div key={i} className="clean-feat-card">
              <span className="feat-icon-clean">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
