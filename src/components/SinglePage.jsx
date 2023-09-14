import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SinglePage = (product) => {
  return (
    <>
    <div className="col-md-10 mb-2 ">
      <div
        className="card h-100 text-center p-3"
        key={product.id}
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250vh"
          width="2vh"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">
            {product.title.substring(0, 12)}...
          </h5>
          <p className="card-text lad fw-bold">
            ${product.price}
          </p>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => console.log("added to cart")}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SinglePage;
