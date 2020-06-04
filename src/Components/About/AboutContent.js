import React from "react";
import "./About.css";

import { Typography, Avatar } from "antd";
const { Title, Text } = Typography;

const AboutContent = () => {
  return (
    <div className="background-content-container">
      <div>
        <div className="background-content-content">
          <Text>
            {" "}
            👨‍💻 -- I'm currently working as a Software Engineer at{" "}
            <a href="https://www.dexlock.com">Dexlock Technologies </a> building
            things for the web with some awesome people out there.
          </Text>
        </div>
        <div className="background-content-content">
          <Text>
            {" "}
            🎓 -- I recently graduated from{" "}
            <a href="https://www.dexlock.com">
              College of Engineering Chengannur{" "}
            </a>
            in Bachelor of Technology in Computer Science
          </Text>
        </div>
        <div className="background-content-content">
          <Text>
            {" "}
            ⚙️ + ✏️ -- I enjoy bridging the gap between engineering and design
            &mdash; combining my technical knowledge with my keen eye for design
            to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
          </Text>
        </div>
        <div className="background-content-content">
          <Text>
            {" "}
            🏸-- <strong>When I'm not in front of a computer screen</strong>,
            I'm probably Cycling, playing Batminton with my friends, out for
            bike ride, or crossing off another item on my bucket list.
          </Text>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
