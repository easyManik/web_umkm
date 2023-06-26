import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./footer.css";
import Ulos from "../../Assets/ulos.jpg";
import Fb from "../../Assets/img/fb.png";
import Twit from "../../Assets/img/twit.png";
import Ig from "../../Assets/img/ig.png";
import Yt from "../../Assets/img/yt.png";

class Footer extends Component {
  render() {
    return (
      <div className="bg-light">
        <Row>
          <Col>
            <div style={{ marginLeft: "1rem" }}>
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className=" container m-5 text-start">
                    <img src={Ulos} alt="" width={70} />
                    <Button
                      className="text text-dark"
                      style={{
                        fontWeight: "bold",
                        width: "5rem",
                      }}
                      variant="outline-light"
                    >
                      UMKM BATAK
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-8">
                  <h6
                    className="text-center"
                    style={{ color: "#707070", marginLeft: "2rem" }}
                  >
                    Ini adalah web yang menampilkan UMKM daerah Batak Sumatera
                    Utara
                  </h6>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-8 offset-lg-1 mb-4"
                  style={{ marginTop: "2rem", marginLeft: "1rem" }}
                >
                  <h6 style={{ color: "#707070" }} className="text-product">
                    © UMKMBATAK. All Rights Reserved.
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container-fluid">
              <div className="row mt-5">
                <div className="container m-5 ">
                  <Button
                    className="text text-dark "
                    style={{ fontWeight: "bold", width: "6rem" }}
                    variant="outline-light"
                  >
                    Folllow Us
                  </Button>
                </div>
                <div style={{ marginLeft: "3rem" }}>
                  <img src={Fb} alt="" className="sosmed" />
                  <img src={Twit} alt="" className="sosmed" />
                  <img src={Ig} alt="" className="sosmed" />
                  <img src={Yt} alt="" className="sosmed" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
