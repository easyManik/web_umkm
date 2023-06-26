import React from "react";
import alame from "../Assets/img/alame.jpeg";
import arsik from "../Assets/img/arsik3.jpeg";
import k5 from "../Assets/img/sortali.jpg";
import k7 from "../Assets/img/ulos2.png";
import k8 from "../Assets/img/Jenis_ulos.jpg";
import k9 from "../Assets/img/tas.jpg";
import i1 from "../Assets/img/i1.png";
import i3 from "../Assets/img/i3.png";
import Footer from "../Components/footer";
import NavbarComponent from "../Components/header";

export default function Landing() {
  return (
    <div className="p-5">
      <NavbarComponent />
      <div className="row mt-5 d-flex justify-content-between">
        <div className="col-6 ">
          <div className="p-5">
            <h1>
              Bahan dasar adat batak{" "}
              <a style={{ textDecoration: "none" }} className="text-primary">
                ULOS
              </a>
            </h1>
            <p>
              Ulos adalah salah satu jenis kain khas masyarakat Batak, Sumatra
              Utara. Dari bahasa asalnya, "ulos" berarti kain. Cara membuat ulos
              serupa dengan cara membuat songket khas Palembang, yaitu
              menggunakan alat tenun bukan mesin. Warna dominan pada ulos adalah
              merah, hitam, dan putih yang dihiasi oleh ragam tenunan dari
              benang emas atau perak. Mulanya ulos dikenakan di dalam bentuk
              selendang atau sarung saja, kerap digunakan pada perhelatan resmi
              atau upacara adat Batak, tetapi kini banyak dijumpai di dalam
              bentuk produk suvenir, sarung bantal, ikat pinggang, tas, pakaian,
              alas meja, dasi, dompet, dan gorden.
            </p>
          </div>
          <img src={k8} alt="" className="img-fluid" />
        </div>
        <div className="col-6 d-flex flex-column ">
          <div className="d-flex justify-content-end">
            <img src={k7} alt="" className="img-fluid " />
          </div>
          <div className="d-flex justify-content-end">
            <img src={i3} alt="" className="p-lg-5 p-3 img-fluid" />
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="text-primary mt-5">TRENDING</h5>
        <div className="d-flex justify-content-between mb-5">
          <h3>Trending UMKM</h3>
          <h5 className="text-primary">View All</h5>
        </div>
        {/* card */}
        <div className="row mb-5 justify-content-between ">
          <div
            style={{ width: "216px", height: "" }}
            className="col-lg-2 col-6 mb-5"
          >
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img
                src={k5}
                className="card-img-top img-fluid"
                alt=""
                style={{ width: "354px", height: "174px" }}
              />
              <div className="card-body ">
                <h5>Sortali,</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    dikenakan pada boru ni raja atau perempuan batak yang akan
                    mengadakan Ulaon Unjuk (Pesta Adat)
                  </p>
                  <button className="btn rounded-pill">
                    <img src={i1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 col-6 mb-5"
            style={{ width: "216px", height: "275px" }}
          >
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img
                src={k9}
                className="img-fluid card-img-top"
                alt=""
                style={{ width: "354px", height: "174px" }}
              />
              <div className="card-body ">
                <h5>Gorga,</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    ukiran atau pahatan tradisional yang biasanya terdapat di
                    dinding rumah
                  </p>
                  <button className="btn rounded-pill">
                    <img src={i1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 col-6 mb-5"
            style={{ width: "216px", height: "275px" }}
          >
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img
                src={alame}
                className="img-fluid card-img-top"
                alt=""
                style={{ width: "354px", height: "174px" }}
              />
              <div className="card-body ">
                <h5>Alame,</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    {" "}
                    Alame merupakan dodol hitam khas Mandailing yang bercita
                    rasa manis dan teksturnya yang begitu legit.
                  </p>
                  <button className="btn rounded-pill">
                    <img src={i1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ width: "216px", height: "275px" }}
            className="col-lg-2 col-6 mb-5"
          >
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img
                src={k9}
                className="img-fluid card-img-top"
                alt=""
                style={{ width: "354px", height: "174px" }}
              />
              <div className="card-body ">
                <h5>Tas Daru Ulos,</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    Tas motif ulos cocok dibawa ke pesta, cocok dijadikan
                    cenderamata.
                  </p>
                  <button className="btn rounded-pill">
                    <img src={i1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ width: "216px", height: "275px" }}
            className="col-lg-2 col-6 mb-5"
          >
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img
                src={arsik}
                className="img-fluid card-img-top"
                alt=""
                style={{ width: "354px", height: "174px" }}
              />
              <div className="card-body ">
                <h5>Arsik,</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    masakan khas masyarakat Batak atau yang disebut juga dekke
                    na niarsik yang memiliki arti ikan yang dimasak hingga
                    kering.
                  </p>
                  <button className="btn rounded-pill">
                    <img src={i1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
