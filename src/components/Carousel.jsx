import React from "react";

export const Carousel = () => {
  return (
    <main id="main">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src="logo.png" class="d-block w-100" alt="..." />
                  {/* <Image src="logo.png" rounded /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>Visión</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
