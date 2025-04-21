import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="container my-5 ">
      {/* Header Section */}
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#black" }}>About ThriftGenius</h1>
          <p className="lead mb-4" style={{ color: "#a0aec0" }}>
            Redefining sustainable fashion since 2020
          </p>
          <hr className="w-25 mx-auto" style={{ borderColor: "#bb86fc" }} />
        </div>
      </div>

      {/* Mission and Vision Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-3 hover-card" style={{ backgroundColor: "#2d3748" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-bullseye fs-2 me-3" style={{ color: "#bb86fc" }}></i>
                <h3 className="card-title h4 fw-bold mb-0" style={{ color: "#black" }}>Our Mission</h3>
              </div>
              <p className="card-text mb-4" style={{ color: "#a0aec0" }}>
                At ThriftGenius, we&apos;re dedicated to revolutionizing fashion by offering unique, pre-loved treasures. We believe in:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Sustainable shopping experiences</span>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Affordable pricing for everyone</span>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Promoting eco-friendly practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-3 hover-card" style={{ backgroundColor: "#2d3748" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-eye fs-2 me-3" style={{ color: "#bb86fc" }}></i>
                <h3 className="card-title h4 fw-bold mb-0" style={{ color: "#black" }}>Our Vision</h3>
              </div>
              <p className="card-text mb-4" style={{ color: "#a0aec0" }}>
                We envision a world where fashion is sustainable, affordable, and accessible to all. Our commitment includes:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Creating a circular fashion economy</span>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Building a community of conscious shoppers</span>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle me-2" style={{ color: "#bb86fc" }}></i>
                  <span style={{ color: "#a0aec0" }}>Innovating in thrift fashion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="p-4 rounded-3" style={{ backgroundColor: "#2d3748" }}>
            <h3 className="text-center mb-4" style={{ color: "#black" }}>Our Core Values</h3>
            <div className="row g-4">
              {[
                {
                  icon: "heart",
                  title: "Sustainability",
                  text: "Promoting eco-friendly practices",
                },
                {
                  icon: "globe",
                  title: "Community",
                  text: "Building a conscious shopping community",
                },
                {
                  icon: "people",
                  title: "Affordability",
                  text: "Making fashion accessible to all",
                },
                {
                  icon: "star",
                  title: "Quality",
                  text: "Curating high-quality thrift finds",
                },
              ].map((value, index) => (
                <div key={index} className="col-md-3 col-sm-6">
                  <div className="text-center">
                    <i
                      className={`bi bi-${value.icon} fs-1 mb-3`}
                      style={{ color: "#bb86fc" }}
                    ></i>
                    <h5 className="fw-bold" style={{ color: "#black" }}>{value.title}</h5>
                    <p className="small" style={{ color: "#a0aec0" }}>{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4" style={{ color: "#black" }}>Ready to Join Our Journey?</h3>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/products" className="btn" style={{ backgroundColor: "#bb86fc", color: "#1a1a1a" }}>
              Shop Now
            </Link>
            <Link href="/contact" className="btn btn-outline-secondary" style={{ color: "#a0aec0", borderColor: "#a0aec0" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default About;