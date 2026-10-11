export default function Foter() {
  return (
    <footer className="clean-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="footer-brand">AMAN <strong>GRAPHICS</strong></span>
          <p>गाँव व बाजार की सबसे भरोसेमंद फ्लेक्स व डिजिटल प्रिंटिंग प्रेस।</p>
        </div>
        <div className="footer-right">
          <a href="tel:+919876543210">📞 98765 43210</a>
          <a
            href="https://wa.me/919876543210?text=Namaste%20Aman%20Graphics!"
            target="_blank"
            rel="noopener noreferrer"
          >
            🟢 WhatsApp Order
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aman Graphics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
