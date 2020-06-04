import React from "react";

import "./Header.css";
import HeaderImage from "../../Assets/images/header-image.png";

import { Typography, Avatar } from "antd";
const { Title, Text } = Typography;

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-main-container">
        <div className="header-content">
          <Text type="secondary">
            Hello ! <span className="wave">👋</span>{" "}
          </Text>
          <br />
          <div className="intro-line1">
            <Text type="secondary">
              I'm <a className="bold"> Manimaran Nadarajan </a> a design-minded
              front-end software engineer focused on building beautiful
              interfaces & experiences
            </Text>
            <br />
            <div className="contact">
              <text>
                Get in touch 👉{" "}
                <a href="mailto: manimaran.n36@gmail.com">
                  manimaran.n36@gmail.com
                </a>
              </text>
            </div>
          </div>
        </div>
        <div className="header-image-container">
          <img src={HeaderImage} className="header-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
