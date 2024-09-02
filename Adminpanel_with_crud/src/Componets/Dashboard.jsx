import React from "react";

export const Dashboard = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          {/* Projects Section */}
          {/* <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  Server Migration <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Sales Tracking <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Customer Database <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Payout Details <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Account Setup <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Illustrations Section */}
          <div className="col-lg-12 ms-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "14rem" }}
                  src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/undraw_like_post_dn6g_(1)_vgik.svg"
                  alt="..."
                />
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </p>
                <a
                  href="https://undraw.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse Illustrations on unDraw →
                </a>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row shadow">
          <div className="col-lg-12 mb-4 ms-4 ">
            <div className="card bg-primary text-white shadow">
              <div className="card-body">
                Primary
                <div className="text-white-50 small">#4e73df</div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4 ms-4">
            <div className="card bg-success text-white shadow">
              <div className="card-body">
                Success
                <div className="text-white-50 small">#1cc88a</div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4 ms-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body">
                Info
                <div className="text-white-50 small">#36b9cc</div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4 ms-4">
            <div className="card bg-warning text-white shadow">
              <div className="card-body">
                Warning
                <div className="text-white-50 small">#f6c23e</div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4 ms-4">
            <div className="card bg-danger text-white shadow">
              <div className="card-body">
                Danger
                <div className="text-white-50 small">#e74a3b</div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4 ms-4">
            <div className="card bg-secondary text-white shadow">
              <div className="card-body">
                Secondary
                <div className="text-white-50 small">#858796</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
