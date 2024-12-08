import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section newsletter">
          <h3 className="footer-title">BE THE FIRST TO KNOW</h3>
          <p className="footer-description">Sign up and save 10% OFF your first order</p>
          <form className="newsletter-form" style={{ display: "flex",marginTop: "10px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>

      
        <div className="footer-section quick-links">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><Link href="/shipping">Orders & Shipping</Link></li>
            <li><Link href="/returns">Return & Refunds</Link></li>
            <li><Link href="/payments">Payment & Pricing</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

       
        <div className="footer-section contact">
          <h3 className="footer-title">CONTACT US</h3>
          <p className="contact-info">+1 234 567 890</p>
          <p className="contact-info">support@example.com</p>
          <div className="currency-selector">
            <h3 className="footer-title">CURRENCY</h3>
            <select className="currency-dropdown" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <p className="currency-note">
              Transactions will be completed in USD and your bank may charge a conversion fee.
            </p>
          </div>
        </div>

      
        <div className="footer-section social">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-links">
            <Link href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          </div>
          <div className="payment-section">
            <h3 className="footer-title">ACCEPTS</h3>
            <div className="payment-methods">
              <img src="/visa.svg" alt="Visa" />
              <img src="/mastercard.svg" alt="Mastercard" />
              <img src="/amex.svg" alt="American Express" />
              <img src="/paypal.svg" alt="PayPal" />
              <img src="/shop-pay.svg" alt="Shop Pay" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
