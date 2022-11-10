import Skill from "./Skill";
import { Col, Row } from "react-bootstrap";
import Separator from "./Separator";
import React from "react";

const Skills = function ({ skills }) {
  const half = Math.floor(skills.length / 2);

  const skillRenderer = (skill, index, array) => (
    <div key={skill.name}>
      <Skill skill={skill} />
      <Separator
        index={index}
        array={array}
        span={6}
        offset={6}
        className={"d-none .d-md-block"}
      />
    </div>
  );

  return (
    <Row className={"text-md-end text-start"}>
      <h2 className={"section-title pb-3"}>Skills</h2>
      <Col md={{ span: 6, order: "last" }}>
        {skills.slice(0, half).map(skillRenderer)}
      </Col>
      <Col md={{ span: 6 }} lg={{ order: "last" }}>
        {skills.slice(half).map(skillRenderer)}
      </Col>
    </Row>
  );
};

export default Skills;
