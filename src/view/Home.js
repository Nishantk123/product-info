import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
//import Banner from "../images/product.jpg"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div class="carousel-item active">
              <img
                src={
                  "https://m.media-amazon.com/images/I/51lo3-yD8uL._SX3000_.jpg"
                }
                className="d-block w-100"
                alt="First slide"
                style={{ height: "auto" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={
                  "https://m.media-amazon.com/images/I/61diM23XlcL._SX3000_.jpg"
                }
                className="d-block w-100"
                alt="Second slide"
                style={{ height: "auto" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={
                  "https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
                }
                className="d-block w-100"
                alt="Third slide"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">Know about us</h3>
            </div>
          </div>
          <div className="row">
            <p className="mt-4 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="" id="Products">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">
                Favourite Products
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img
                  src={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title text-secondary">Men's Clothing</h4>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img
                  src={
                    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                  }
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title text-secondary">Braclet</h4>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img
                  src={
                    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                  }
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title text-secondary">
                    Electronic Items
                  </h4>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion" id="accordionExample">
        <div className="container">
          <div className="col-sm-12 col-md-12 mb-4">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center text-secondary mt-4">
                Items and Description
              </h3>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Stores Outlet
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </strong>{" "}
                  It is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Online Shopping
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Lorem ipsum dolor sit amet.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Best Price and Products
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Lorem ipsum dolor sit amet.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center mt-4 text-secondary">About Company</h3>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={
                      "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    }
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 className="font-weight-bold blue-text my-3">Co-Founder</h6>
                <p className="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={
                      "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    }
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  John Doe
                </h4>
                <h6 className="font-weight-bold blue-text my-3">CEO</h6>
                <p className="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={
                      "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    }
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Maria Kate
                </h4>
                <h6 className="font-weight-bold blue-text my-3">CTO</h6>
                <p className="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
