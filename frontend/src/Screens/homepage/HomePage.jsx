import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from ".././../action/ProductAction";

import { Card, Loading, ProductSidebar, ProductGrid } from "../../components";
import "./HomePage.scss";
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading === true) {
    return <Loading />;
  } else {
    return (
      <>
        <div>
          <section className="section-intro padding-y-sm">
            <div className="container">
              <div className="intro-banner-wrap">
                <img
                  src="images/banners/1.jpg"
                  className="img-fluid rounded"
                  alt="banner"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ProductSidebar />
          </div>
          <div className="col-md-9">
            <ProductGrid />
          </div>
        </div>

        <div className="container">
          <nav class="mt-4" aria-label="Page navigation sample">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </>
    );
  }
};

export default HomePage;
