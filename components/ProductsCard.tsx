"use client";

import React from "react";
import { Product } from "@/types/types";
import { useCart } from "../contexts/cartContext";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({
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
    <div className="col">
      <div className="card h-100 shadow border-0" style={{ backgroundColor: "#2d3748" }}>
        <Link href={`/products/${id}`}>
          <div className="overflow-hidden position-relative">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="card-img-top p-4 product-image"
              style={{
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />

            {category && (
              <span className="position-absolute top-0 start-0 m-3 badge" style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}>
                {category}
              </span>
            )}
          </div>
        </Link>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold mb-2" style={{ color: "#ffffff" }}>{title}</h5>

          <p className="card-text small mb-2" style={{ color: "#a0aec0" }}>
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>

          {rating && (
            <div className="mb-2">
              <span className="badge" style={{ backgroundColor: "#f6e05e", color: "#1a1a1a" }}>
                <i className="bi bi-star-fill me-1"></i>
                {rating.rate} ({rating.count})
              </span>
            </div>
          )}

          <div className="mt-auto">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="fs-4 fw-bold" style={{ color: "#bb86fc" }}>${price}</span>
            </div>

            <button
              className="btn w-100 d-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}
              onClick={() => {
                console.log("add to cart button clicked");
                addToCart(product);
              }}
            >
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.3) !important;
        }
        .card:hover .product-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;