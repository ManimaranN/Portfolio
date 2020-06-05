import React from "react";

import "./Footer.css";

import { Typography, Avatar } from "antd";
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <Text>
          Crafted with
          <span class="heart animate-beat">❤️</span> by manimarannadarajan ©
          2020
        </Text>
      </div>
    </div>
  );
};

export default Footer;
