import React from "react";
import "./Skills.css";

import SkillsContent from "./SkillsContent";
import { skillsData } from "../../Data/SkillsData";

import { Typography, Avata, Row, Col } from "antd";
const { Title, Text } = Typography;

const Skills = () => {
  return (
    <div className="skills-main-container">
      <div>
        <div className="skills-header">
          <Title level={4}>WHAT I KNOW ?</Title>
        </div>
        <div className="skills-content-container">
          <div class="grid-row">
            {skillsData.map((data) => {
              return <SkillsContent skillSet={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
