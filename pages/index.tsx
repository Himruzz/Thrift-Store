import React from "react";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";
import { fetch_products } from "@/services/productsServices";
import { Product } from "@/types/types";

// Server-side data fetching
export async function getServerSideProps() {
  const products = await fetch_products();
  return { props: { products } };
}

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const featuredProducts = products.slice(1, 4);

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <section className="hero py-5 position-relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern opacity-10"></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn" style={{ color: "#ffffff" }}>
                Discover Unique Thrift Finds
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s" style={{ color: "#a0aec0" }}>
                ThriftGenius brings you pre-loved treasures that are sustainable, stylish, and affordable.
              </p>
              <div className="animate__animated animate__fadeIn animate__delay-2s">
                <Link
                  href="/products"
                  className="btn btn-lg px-5 py-3 shadow-sm"
                  style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}
                >
                  <i className="bi bi-bag-heart me-2"></i>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-3" style={{ color: "#bb86fc" }}>
                <i className="bi bi-stars text-warning me-2"></i>
                Featured Thrift Products
              </h2>
              <div className="w-50 mx-auto border-bottom border-primary border-2 mb-3"></div>
              <p className="text-muted" style={{ color: "#a0aec0" }}>
                Explore our curated selection of pre-loved items
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <FeaturedProducts products={featuredProducts} />
          </div>

          <div className="text-center mt-5">
            <Link
              href="/products"
              className="btn btn-lg"
              style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}
            >
              <i className="bi bi-grid me-2"></i>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

        .bg-pattern {
          background-image: linear-gradient(
              30deg,
              #ffffff 12%,
              transparent 12.5%,
              transparent 87%,
              #ffffff 87.5%,
              #ffffff
            ),
            linear-gradient(
              150deg,
              #ffffff 12%,
              transparent 12.5%,
              transparent 87%,
              #ffffff 87.5%,
              #ffffff
            ),
            linear-gradient(
              30deg,
              #ffffff 12%,
              transparent 12.5%,
              transparent 87%,
              #ffffff 87.5%,
              #ffffff
            ),
            linear-gradient(
              150deg,
              #ffffff 12%,
              transparent 12.5%,
              transparent 87%,
              #ffffff 87.5%,
              #ffffff
            ),
            linear-gradient(
              60deg,
              #ffffff77 25%,
              transparent 25.5%,
              transparent 75%,
              #ffffff77 75%,
              #ffffff77
            ),
            linear-gradient(
              60deg,
              #ffffff77 25%,
              transparent 25.5%,
              transparent 75%,
              #ffffff77 75%,
              #ffffff77
            );
          background-size: 80px 140px;
          background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
        }

        .hero {
          min-height: 350px;
          display: flex;
          align-items: center;
        }

        .opacity-10 {
          opacity: 0.1;
        }
      `}</style>
    </div>
  );
};

export default Home;