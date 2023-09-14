import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../Styles/products.css";
import SinglePage from "./SinglePage";

function Products() {
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [filters, setfilters] = useState(false);

  useEffect(() => {
    handleGetData();
  }, [setData]);

  const handleGetData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(jsonData);
        setData(data);
      });
      // return data;
  };

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3.3,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleFilter = (name) => {
    setfilters(data);
    let newData = data.filter((e) => {
      if (e.category === name) {
        console.log(e.categories);
        return e;
      }
      if (!name) {
        return e;
      }
      return;
    });
    setfilterData(newData);
    // console.log(newData);
  };
  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
          <p onClick={() => handleFilter()}>All</p>
          <p onClick={() => handleFilter("electronics")} name="electronics">Electronics</p>
          <p onClick={() => handleFilter("jewelery")} name="jewelery">
            Jewelery
          </p>

          <p onClick={() => handleFilter("men's clothing")} name="men's clothing">
            Men's Clothing
          </p>

          <p onClick={() => handleFilter("women's clothing")} name="women's clothing">
            Women's Clothing
          </p>
        </div>
        <div className="apidata">
          <div>
            <Slider {...settings}>
              {!filters
                ? data.map((product) => {
                  return (
                    <>
                      <div className="col-md-10 mb-2 far fa-sliders-v">
                        <div
                          className="card h-80 text-center p-5 b-50 "
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
                  )
                })
                : filterData && filterData.map((e) => <SinglePage {...e} />)}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
