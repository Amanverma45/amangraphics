import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('फ्लेक्स बैनर');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Namaste Aman Graphics!\n- Naam: ${name || 'Grahak'}\n- Phone: ${phone || 'N/A'}\n- Service: ${service}\n- Detail: ${message || 'Inquiry'}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="clean-contact-box">
          {/* Left Details */}
          <div className="contact-left">
            <span className="clean-tag">सीधा संपर्क</span>
            <h2 className="clean-title">दुकान का पता व संपर्क</h2>
            <p className="contact-addr">
              📍 <strong>अमन ग्राफिक्स & फ्लेक्स प्रिंट</strong><br />
              मेन मार्केट रोड, पंचायत भवन के सामने, बस स्टैंड के पास
            </p>
            <p className="contact-timing">⏰ समय: सुबह 8:30 से रात 9:00 बजे तक (प्रतिदिन खुला)</p>

            <div className="contact-quick-links">
              <a href="tel:+919876543210" className="btn btn-outline">
                📞 +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210?text=Namaste%20Aman%20Graphics!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                🟢 WhatsApp चैट करें
              </a>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <form onSubmit={handleSubmit} className="contact-right-form">
            <h3>त्वरित पूछताछ (Quick Inquiry)</h3>
            <div className="input-row">
              <input
                type="text"
                placeholder="आपका नाम (Name)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="मोबाइल नंबर (WhatsApp No.)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="फ्लेक्स बैनर">फ्लेक्स बैनर (Flex)</option>
              <option value="विज़िटिंग कार्ड">विज़िटिंग कार्ड (Cards)</option>
              <option value="फोटो फ्रेम">फोटो फ्रेम (Frames)</option>
              <option value="बिल बुक">बिल बुक (Bill Books)</option>
              <option value="शादी कार्ड">शादी कार्ड (Wedding Cards)</option>
              <option value="अन्य प्रिंटिंग">अन्य प्रिंटिंग (Other)</option>
            </select>
            <textarea
              rows="2"
              placeholder="साइज या अपनी जरूरत लिखें..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-whatsapp full-btn">
              WhatsApp पर भेजें →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
