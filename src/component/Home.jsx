import { useState } from 'react';

export default function Home() {
  const [calcProduct, setCalcProduct] = useState('flex');
  const [flexWidth, setFlexWidth] = useState(8);
  const [flexHeight, setFlexHeight] = useState(4);
  const [flexQuality, setFlexQuality] = useState('star');

  const [cardQuantity, setCardQuantity] = useState(500);
  const [cardType, setCardType] = useState('matt');

  const [frameSize, setFrameSize] = useState('12x18');

  const [billBookQty, setBillBookQty] = useState(5);
  const [billBookType, setBillBookType] = useState('duplicate');

  const calculatePrice = () => {
    if (calcProduct === 'flex') {
      const sqft = flexWidth * flexHeight;
      const rate = flexQuality === 'star' ? 7 : 4.5;
      return {
        amount: Math.max(50, Math.round(sqft * rate)),
        detail: `${sqft} Sq.Ft (${flexWidth}x${flexHeight} ft) ${flexQuality === 'star' ? 'Star HD' : 'Normal'} Flex`,
      };
    }
    if (calcProduct === 'visiting') {
      let price = cardQuantity === 100 ? 150 : cardQuantity === 500 ? 450 : 800;
      if (cardType === 'uv') price = Math.round(price * 1.5);
      return {
        amount: price,
        detail: `${cardQuantity} Cards (${cardType.toUpperCase()} Finish)`,
      };
    }
    if (calcProduct === 'frame') {
      const p = { '8x12': 199, '12x18': 399, '16x24': 699, '20x30': 1199 };
      return {
        amount: p[frameSize] || 399,
        detail: `${frameSize} Inch Premium Photo Frame`,
      };
    }
    if (calcProduct === 'billbook') {
      const r = billBookType === 'duplicate' ? 80 : 50;
      return {
        amount: billBookQty * r,
        detail: `${billBookQty} Books (${billBookType === 'duplicate' ? '2-Ply Carbonless' : '1-Ply'})`,
      };
    }
    return { amount: 0, detail: '' };
  };

  const calculated = calculatePrice();

  const handleOrder = () => {
    const msg = `Namaste Aman Graphics! Mujhe order dena hai:\n- Item: ${calcProduct.toUpperCase()}\n- Detail: ${calculated.detail}\n- Approx Rate: ₹${calculated.amount}\n\nKripya design preview bhejein.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        {/* Full-Width 2-Column Desktop Grid (No empty side space) */}
        <div className="hero-split-grid">
          {/* Left Column: Heading, Info, Action */}
          <div className="hero-left-content">
            <span className="hero-mini-pill">
              ⚡ Same-Day Delivery • Free Graphic Design
            </span>

            <h1 className="hero-headline">
              फ्लेक्स, कार्ड्स और फोटो फ्रेम — <br />
              <span className="brand-blue">सीधे होलसेल रेट पर।</span>
            </h1>

            <p className="hero-subtext">
              शादी, चुनाव, दुकान व व्यापारिक प्रचार की हाई-क्वालिटी प्रिंटिंग। 
              बिना किसी झंझट के WhatsApp पर सीधे ऑर्डर दें।
            </p>

            <div className="hero-buttons">
              <a
                href="https://wa.me/919876543210?text=Namaste%20Aman%20Graphics!%20Mujhe%20printing%20order%20dena%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp hero-btn-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.182-.077.357.101.174.45 0.744.966 1.204.664.592 1.224.776 1.397.863.173.087.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>WhatsApp पर ऑर्डर दें</span>
              </a>

              <a href="#services" className="btn btn-outline hero-btn-lg">
                <span>सभी सेवाएं देखें</span>
              </a>

              <a href="tel:+919876543210" className="btn btn-outline hero-btn-lg">
                <span>📞 कॉल करें</span>
              </a>
            </div>

            {/* Clean Trust Row */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-check">✓</span> 2 घंटे में अर्जेंट प्रिंट
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span> फ्री ग्राफिक डिज़ाईनिंग
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span> सबसे कम थोक रेट
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span> गाँव व दुकान तक डिलीवरी
              </div>
            </div>
          </div>

          {/* Right Column: Clean Instant Rate Calculator */}
          <div id="calculator" className="hero-right-calc">
            <div className="calc-card">
              <div className="calc-card-head">
                <div>
                  <h3>⚡ इंस्टेंट रेट कैलकुलेटर</h3>
                  <p>सामान चुनें और अंदाज़न रेट देखें</p>
                </div>
                <span className="calc-badge">Direct Factory Price</span>
              </div>

              {/* Clean Tabs */}
              <div className="calc-nav-tabs">
                <button
                  className={`calc-nav-btn ${calcProduct === 'flex' ? 'active' : ''}`}
                  onClick={() => setCalcProduct('flex')}
                >
                  फ्लेक्स बैनर
                </button>
                <button
                  className={`calc-nav-btn ${calcProduct === 'visiting' ? 'active' : ''}`}
                  onClick={() => setCalcProduct('visiting')}
                >
                  विज़िटिंग कार्ड
                </button>
                <button
                  className={`calc-nav-btn ${calcProduct === 'frame' ? 'active' : ''}`}
                  onClick={() => setCalcProduct('frame')}
                >
                  फोटो फ्रेम
                </button>
                <button
                  className={`calc-nav-btn ${calcProduct === 'billbook' ? 'active' : ''}`}
                  onClick={() => setCalcProduct('billbook')}
                >
                  बिल बुक
                </button>
              </div>

              {/* Dynamic Controls */}
              <div className="calc-content-body">
                {calcProduct === 'flex' && (
                  <div className="calc-grid-row">
                    <div className="calc-input-box">
                      <label>चौड़ाई (Width Feet)</label>
                      <div className="stepper-row">
                        <button onClick={() => setFlexWidth(Math.max(2, flexWidth - 1))}>-</button>
                        <span>{flexWidth} ft</span>
                        <button onClick={() => setFlexWidth(flexWidth + 1)}>+</button>
                      </div>
                    </div>
                    <div className="calc-input-box">
                      <label>ऊंचाई (Height Feet)</label>
                      <div className="stepper-row">
                        <button onClick={() => setFlexHeight(Math.max(2, flexHeight - 1))}>-</button>
                        <span>{flexHeight} ft</span>
                        <button onClick={() => setFlexHeight(flexHeight + 1)}>+</button>
                      </div>
                    </div>
                    <div className="calc-input-box full">
                      <label>फ्लेक्स क्वालिटी</label>
                      <div className="clean-toggle-row">
                        <button
                          className={`toggle-option ${flexQuality === 'star' ? 'active' : ''}`}
                          onClick={() => setFlexQuality('star')}
                        >
                          स्टार फ्लेक्स HD (₹7/sqft)
                        </button>
                        <button
                          className={`toggle-option ${flexQuality === 'normal' ? 'active' : ''}`}
                          onClick={() => setFlexQuality('normal')}
                        >
                          नॉर्मल फ्लेक्स (₹4.5/sqft)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {calcProduct === 'visiting' && (
                  <div className="calc-grid-row">
                    <div className="calc-input-box">
                      <label>संख्या (Cards Qty)</label>
                      <select
                        className="clean-select"
                        value={cardQuantity}
                        onChange={(e) => setCardQuantity(Number(e.target.value))}
                      >
                        <option value={100}>100 कार्ड्स (₹150)</option>
                        <option value={500}>500 कार्ड्स (₹450)</option>
                        <option value={1000}>1000 कार्ड्स (₹800)</option>
                      </select>
                    </div>
                    <div className="calc-input-box">
                      <label>क्वालिटी फिनिश</label>
                      <select
                        className="clean-select"
                        value={cardType}
                        onChange={(e) => setCardType(e.target.value)}
                      >
                        <option value="matt">रॉयल मैट लैमिनेशन (350 GSM)</option>
                        <option value="uv">स्पॉट UV + मखमली वेल्वेट</option>
                      </select>
                    </div>
                  </div>
                )}

                {calcProduct === 'frame' && (
                  <div className="calc-grid-row">
                    <div className="calc-input-box full">
                      <label>फ्रेम साइज चुनें</label>
                      <div className="clean-toggle-row four-col">
                        {[
                          { size: '8x12', label: '8x12 Inch (₹199)' },
                          { size: '12x18', label: '12x18 Inch (₹399)' },
                          { size: '16x24', label: '16x24 Inch (₹699)' },
                          { size: '20x30', label: '20x30 Inch (₹1199)' },
                        ].map((item) => (
                          <button
                            key={item.size}
                            className={`toggle-option ${frameSize === item.size ? 'active' : ''}`}
                            onClick={() => setFrameSize(item.size)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {calcProduct === 'billbook' && (
                  <div className="calc-grid-row">
                    <div className="calc-input-box">
                      <label>बुक्स की संख्या</label>
                      <select
                        className="clean-select"
                        value={billBookQty}
                        onChange={(e) => setBillBookQty(Number(e.target.value))}
                      >
                        <option value={2}>2 बुक्स</option>
                        <option value={5}>5 बुक्स</option>
                        <option value={10}>10 बुक्स</option>
                      </select>
                    </div>
                    <div className="calc-input-box">
                      <label>कागज का प्रकार</label>
                      <select
                        className="clean-select"
                        value={billBookType}
                        onChange={(e) => setBillBookType(e.target.value)}
                      >
                        <option value="duplicate">2-Ply कार्बनलेस</option>
                        <option value="single">1-Ply सिंगल कॉपी</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Output & Order CTA */}
              <div className="calc-card-foot">
                <div className="calc-price-summary">
                  <span className="price-tag-label">अनुमानित खर्च:</span>
                  <span key={calculated.amount} className="price-big-num pop-anim">₹{calculated.amount}</span>
                  <span className="price-detail-text">{calculated.detail}</span>
                </div>
                <button onClick={handleOrder} className="btn btn-whatsapp calc-act-btn">
                  <span>ऑर्डर करें →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
