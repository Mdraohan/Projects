import React from "react";
import image from "./image.avif";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src={image} className="card-img" alt="Background" height="420px" />
          <div
            className="card-img-overlay d-flex flex-column
                justify-content-end"
          >
            <div className="container">
              <h5 className="card-title display-3 fw-bolder md-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        <Products/>
      </div>
    </>
  );
}

export default Home;
