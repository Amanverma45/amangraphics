import { useState } from 'react';

export default function Services() {
  const [filter, setFilter] = useState('all');

  const services = [
    {
      id: 'flex',
      category: 'flex',
      icon: '🚩',
      title: 'फ्लेक्स बोर्ड व बैनर',
      subtitle: 'Flex Banner & Hoardings',
      price: '₹4.5 / sq.ft',
      highlight: '2 घंटे में तैयार',
      specs: ['स्टार फ्लेक्स HD — पक्का रंग', 'चुनाव, दुकान बोर्ड व शादी बैनर'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Flex Banner print karwana hai.'
    },
    {
      id: 'cards',
      category: 'cards',
      icon: '📇',
      title: 'विज़िटिंग कार्ड्स',
      subtitle: 'Business & Visiting Cards',
      price: '₹149 / 100 Cards',
      highlight: '350 GSM Art Board',
      specs: ['मैट लैमिनेशन व स्पॉट UV', 'फ्री डिज़ाइन व राउंड कट'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Visiting Card print karwana hai.'
    },
    {
      id: 'frames',
      category: 'frames',
      icon: '🖼️',
      title: 'कस्टम फोटो फ्रेम',
      subtitle: '3D Wooden Photo Frames',
      price: '₹199 से शुरू',
      highlight: 'अटूट एक्रिलिक ग्लास',
      specs: ['दीमक-मुक्त लकड़ी बॉर्डर', 'गिफ्ट, शादी व फैमली फोटो हेतु'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Photo Frame banwana hai.'
    },
    {
      id: 'billbooks',
      category: 'official',
      icon: '📑',
      title: 'बिल बुक व रसीद कट्टा',
      subtitle: 'GST Bill Books & Challan',
      price: '₹65 / Book से शुरू',
      highlight: 'कार्बनलेस ऑटो कॉपी',
      specs: ['2-Ply व 3-Ply कार्बनलेस', 'क्रमवार नंबरिंग व कड़ा बाइंडिंग'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Bill Book banwani hai.'
    },
    {
      id: 'wedding',
      category: 'cards',
      icon: '💌',
      title: 'शादी व निमंत्रण कार्ड',
      subtitle: 'Royal Wedding Cards',
      price: '₹5 / Card से शुरू',
      highlight: 'रॉयल लेज़र कटिंग',
      specs: ['गोल्डन फॉयल व मखमली लिफाफा', 'कुआं पूजन, मुंडन व शादी कार्ड'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Shadi Cards print karwane hain.'
    },
    {
      id: 'stickers',
      category: 'stickers',
      icon: '🏷️',
      title: 'विनाइल व वाहन स्टिकर्स',
      subtitle: 'Waterproof Vinyl & Radium',
      price: '₹20 से शुरू',
      highlight: 'वाटरप्रूफ गमिंग',
      specs: ['धूप व पानी से कभी खराब नहीं', 'गाड़ी, ट्रैक्टर व दुकान ग्लास स्टिकर'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Stickers print karwane hain.'
    },
    {
      id: 'stamps',
      category: 'official',
      icon: '🔏',
      title: 'मुहर व ऑफिशियल स्टाम्प',
      subtitle: 'Self-Inking Trodat Stamps',
      price: '₹120 से शुरू',
      highlight: '15 मिनट में तैयार',
      specs: ['ऑटो-इंक (10,000+ छापे)', 'डॉक्टर, प्रधान, स्कूल व दुकान मुहर'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe Stamp banwani hai.'
    },
    {
      id: 'tshirt-mugs',
      category: 'stickers',
      icon: '☕',
      title: 'टी-शर्ट व मग प्रिंट',
      subtitle: 'Custom T-Shirts & Photo Mugs',
      price: '₹149 से शुरू',
      highlight: 'परमानेंट सब्लिमेशन',
      specs: ['धोने पर रंग कभी नहीं छूटेगा', 'गिफ्ट पैकिंग व स्पोर्ट्स जर्सी'],
      whatsappMsg: 'Namaste Aman Graphics! Mujhe T-shirt ya Mug print karwana hai.'
    }
  ];

  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Crisp Header */}
        <div className="section-head-clean">
          <span className="clean-tag">प्रिंटिंग सेवाएं</span>
          <h2 className="clean-title">आपकी जरूरत, हमारी प्रिंटिंग</h2>
          <p className="clean-desc">पसंद का सामान चुनें और सीधे WhatsApp पर आर्डर दें।</p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="clean-tabs-bar">
          {[
            { id: 'all', label: 'सभी (All)' },
            { id: 'flex', label: 'फ्लेक्स व बैनर' },
            { id: 'cards', label: 'कार्ड्स व शादी' },
            { id: 'frames', label: 'फोटो फ्रेम' },
            { id: 'official', label: 'बिल बुक व मुहर' },
            { id: 'stickers', label: 'स्टिकर्स व गिफ्ट्स' },
          ].map(tab => (
            <button
              key={tab.id}
              className={`clean-tab-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Clean, Visible Service Cards */}
        <div key={filter} className="clean-services-grid animated-fade">
          {filtered.map(item => (
            <div key={item.id} className="clean-card">
              <div className="card-top">
                <span className="card-icon-badge">{item.icon}</span>
                <span className="card-tag">{item.highlight}</span>
              </div>

              <h3 className="card-heading">{item.title}</h3>
              <p className="card-sub">{item.subtitle}</p>

              <div className="card-price-box">
                <span className="price-text">{item.price}</span>
              </div>

              <ul className="card-simple-specs">
                {item.specs.map((sp, i) => (
                  <li key={i}>
                    <span className="check">✓</span> {sp}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(item.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp card-order-btn"
              >
                <span>WhatsApp पर ऑर्डर दें →</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
