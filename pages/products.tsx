import React, { useState } from "react";
import { Product } from "@/types/types";
import { fetch_products } from "@/services/productsServices";
import ProductCard from "@/components/ProductsCard";

export async function getServerSideProps() {
  const products = await fetch_products();
  return { props: { products } };
}

interface HomeProps {
  products: Product[];
}

const Products: React.FC<HomeProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState("default");

  const getSortedProducts = () => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  };

  return (
    <div className="bg-dark min-vh-100">
      {/* Header Section */}
      <div className="bg-dark shadow-sm">
        <div className="container py-4 text-center">
          <h2 className="display-6 fw-bold mb-3" style={{ color: "#ffffff" }}>
            <i className="bi bi-grid me-2" style={{ color: "#bb86fc" }}></i>
            All Thrift Products
          </h2>
          <div className="w-50 mx-auto border-bottom border-primary border-2 mb-3"></div>
          <p className="text-muted" style={{ color: "#a0aec0" }}>
            Explore our collection of unique, pre-loved treasures
          </p>
        </div>
      </div>

      {/* Product Listing Section */}
      <section className="py-5">
        <div className="container">
          {/* Sorting Options */}
          <div className="row mb-4">
            <div className="col-md-6 offset-md-6">
              <div className="d-flex justify-content-end align-items-center">
                <label className="me-2" style={{ color: "#a0aec0" }}>
                  <i className="bi bi-sort-down me-1" style={{ color: "#bb86fc" }}></i>
                  Sort by:
                </label>
                <select
                  className="form-select w-auto"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ backgroundColor: "#2d3748", color: "#ffffff", borderColor: "#4a5568" }}
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {getSortedProducts().map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      <button
        className="btn position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ backgroundColor: "#bb86fc", color: "#1a1a1a", width: "45px", height: "45px" }}
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .breadcrumb-item + .breadcrumb-item::before {
          color: rgba(255, 255, 255, 0.7);
        }

        .badge {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default Products;