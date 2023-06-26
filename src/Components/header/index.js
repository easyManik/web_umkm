import Image from "../../Assets/ulos.jpg";
import { NavLink } from "react-router-dom";

function NavbarComponent({ search, submitSearch, id }) {
  return (
    <div className=" bg-white">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-2 px-3 d-flex align-content-center flex-wrap justify-content-start ms-5 mb-3">
          <img
            src={Image}
            alt="logo"
            style={{
              width: "100px",
              marginRight: "30px",
              borderRadius: "50px",
            }}
          />
          <NavLink
            to="/"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <h3>
              <b>UMKM BATAK</b>
            </h3>
          </NavLink>
        </div>
        <div className="col-lg-4 d-flex align-content-center flex-wrap">
          <form onSubmit={submitSearch}>
            <div className="field has-addons d-flex">
              <div className="control is-expanded px-3">
                <input
                  type="search"
                  className="input"
                  id={id}
                  onChange={search}
                  placeholder="Where you want to go?"
                  aria-label="Search"
                  name="search"
                  required
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-info"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src="https://e7.pngegg.com/pngimages/608/913/png-clipart-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-thumbnail.png"
                    alt="asas"
                    style={{
                      backgroundColor: "white",
                      width: "20px",
                    }}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NavbarComponent;
