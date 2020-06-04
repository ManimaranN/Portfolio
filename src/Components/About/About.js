import React from "react";
import "./About.css";

import AboutContent from "./AboutContent";

import { Typography, Avatar } from "antd";
const { Title, Text } = Typography;

const About = () => {
  return (
    <div className="background-main-container">
      <div>
        <div className="background-header">
          <Title level={4}>WHO AM I ?</Title>
        </div>
        <AboutContent />
      </div>
    </div>
  );
};
export default About;
