import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent"></div>
      <img src={require('../../assets/Home/footer.svg').default} alt="no internet connection"/>
    </div>
  );
}
