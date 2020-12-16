import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram_Logo"
        />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__icons">
        <i class="fas fa-home"></i>
        <i class="fas fa-paper-plane"></i>
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <img
          src="https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/120097897_172397281086637_5031602793879746188_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_ohc=R2I0d1tmftEAX9vPS78&tp=1&oh=a5e52584210bc365f397faf28e074ad3&oe=60036D36"
          alt="profile_pic"
          style={{
            borderRadius: "50%",
            objectFit: "contain",
            width: "25px",
            height: "25px",
            marginTop: "-12px",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
