import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <img
          src="https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/120097897_172397281086637_5031602793879746188_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_ohc=R2I0d1tmftEAX9vPS78&tp=1&oh=a5e52584210bc365f397faf28e074ad3&oe=60036D36"
          alt="profile_pic"
          style={{
            borderRadius: "50%",
            objectFit: "contain",
            margin: "10% 20% 10% 20%",
          }}
        />
      </div>
      <div className="col-sm-8 pt-3">
        <div className="row">
          <div className="col-sm-4 d-flex align-items-center">
            <p className="userID">
              virat.kohli{" "}
              <sup>
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: "18px", color: "#0095F6" }}
                ></i>
              </sup>
            </p>
          </div>
          <div
            className="col-sm-8 d-flex align-items-start mt-2"
            id="followInfo"
          >
            <button className="followBtn rounded w-25">Follow</button>
            <i className="fas fa-ellipsis-h mt-1"></i>
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col-4">
            {" "}
            <span style={{ fontWeight: "bolder" }}>1.106</span> Posts
          </div>
          <div className="col-4">
            <span style={{ fontWeight: "bolder" }}>83.8m </span>followers
          </div>
          <div className="col-4">
            <span style={{ fontWeight: "bolder" }}>198</span> following
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Virat Kohli</h6>
            <p>
              Carpedium! <br />{" "}
              <p style={{ color: "#0078BA", fontWeight: "bolder" }}>
                www.myntra.com/wrogn
              </p>
            </p>
          </div>
          <div className="col-10"></div>
        </div>
        <div className="row">
          <p style={{ fontSize: "13px", color: "grey" }}>
            Followed By{" "}
            <span
              style={{ fontWeight: "bolder", fontSize: "13px", color: "#111" }}
            >
              washisundar555, abhinaya_official, _.winning._.looser._{" "}
            </span>{" "}
            +184 more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
