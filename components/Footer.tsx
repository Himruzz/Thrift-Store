import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3" style={{ color: "#bb86fc" }}>
              ThriftGenius
            </h5>
            <p className="text-muted mb-3" style={{ color: "#a0aec0" }}>
              Discover unique t-shirts that tell your story. Quality
              craftsmanship meets creative design.
            </p>
            <div className="d-flex gap-3">
              <Link
                href="https://www.facebook.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-facebook fs-5" style={{ color: "#bb86fc" }}></i>
              </Link>
              <Link
                href="https://www.instagram.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-instagram fs-5" style={{ color: "#bb86fc" }}></i>
              </Link>
              <Link
                href="https://x.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-twitter fs-5" style={{ color: "#bb86fc" }}></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#bb86fc" }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/products"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/faq"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#bb86fc" }}>Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/shipping"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Shipping Info
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/returns"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/size-guide"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Size Guide
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/privacy"
                  className="text-decoration-none"
                  style={{ color: "#a0aec0" }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#bb86fc" }}>Stay Updated</h6>
            <p className="fw-bold mb-3" style={{ color: "#bb86fc" }}>
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email address"
                style={{ backgroundColor: "#2d3748", border: "none", color: "#ffffff" }}
              />
              <button
                className="btn"
                type="button"
                style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-5">
          <div className="col-12">
            <hr className="mb-4" style={{ borderColor: "#2d3748" }} />
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <p className="text-muted mb-0" style={{ color: "#a0aec0" }}>
                &copy; {new Date().getFullYear()} TeeLore. All rights reserved.
              </p>
              <div className="d-flex gap-3">
                <Link
                  href="/terms"
                  className="text-decoration-none small"
                  style={{ color: "#a0aec0" }}
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-decoration-none small"
                  style={{ color: "#a0aec0" }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}