"use client";

import React from "react";
import { useCart } from "../contexts/cartContext";
import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";

const ProductDetailCard: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) => {
  const { addToCart } = useCart();
  const product = { id, title, price, description, image, category, rating };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow" style={{ backgroundColor: "#2d3748" }}>
            <div className="card-body p-0">
              <div className="row g-0">
                {/* Product Image */}
                <div className="col-md-6" style={{ backgroundColor: "#1a1a1a" }}>
                  <div className="p-4 h-100 d-flex align-items-center justify-content-center">
                    <div
                      className="position-relative"
                      style={{ width: "100%", height: "400px" }}
                    >
                      <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="p-3"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                  <div className="p-4 p-lg-5">
                    <div className="mb-4">
                      <span className="badge mb-2" style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}>
                        {category}
                      </span>
                      <h1 className="h2 fw-bold mb-3" style={{ color: "#ffffff" }}>{title}</h1>
                      <p className="mb-4" style={{ color: "#a0aec0" }}>{description}</p>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <div className="d-flex align-items-center gap-2">
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={`bi ${
                                index < Math.floor(rating.rate)
                                  ? "bi-star-fill text-warning"
                                  : "bi-star"
                              }`}
                              style={{ color: index < Math.floor(rating.rate) ? "#f6e05e" : "#a0aec0" }}
                            ></i>
                          ))}
                        </div>
                        <span style={{ color: "#a0aec0" }}>
                          ({rating.count} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <h2 className="h1 fw-bold mb-0" style={{ color: "#bb86fc" }}>
                        ${price.toFixed(2)}
                      </h2>
                    </div>

                    {/* Buttons */}
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-lg"
                        style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}
                        onClick={() => addToCart(product)}
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Add to Cart
                      </button>
                      <Link
                        href="/products"
                        className="btn btn-outline-secondary"
                        style={{ color: "#a0aec0", borderColor: "#a0aec0" }}
                      >
                        <i className="bi bi-arrow-left me-2"></i>
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;