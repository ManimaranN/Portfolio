import React from "react";
import "./Skills.css";

import { Typography, Avatar } from "antd";
import Skills from "./Skills";
const { Title, Text } = Typography;

const SkillsContent = (props) => {
  const { skillSet } = props;
  return (
    <div className="each-skills">
      <div className="skills-header">
        <Text>{skillSet.heading}</Text>
      </div>
      <div className="skills-list">
        <ul>
          {skillSet.skills.map((data) => {
            return (
              <li>
                <Text>{data}</Text>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SkillsContent;
