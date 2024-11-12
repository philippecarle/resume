import Skill from "./Skill";
import { Col, Row } from "react-bootstrap";
import Separator from "./Separator";
import React from "react";

const Skills = function ({ skills }) {
  const sortedSkills = [...skills].sort(
    (a, b) => b.keywords.length - a.keywords.length,
  );

  const columns = [[], []];
  const columnKeywordsCount = [0, 0];

  sortedSkills.forEach((skill) => {
    const columnIndex =
      columnKeywordsCount[0] <= columnKeywordsCount[1] ? 0 : 1;
    columns[columnIndex].push(skill);
    columnKeywordsCount[columnIndex] += skill.keywords.length;
  });

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
    <div id="skills">
      <Row>
        <Col>
          <h2 className={"section-title pb-3"}>Skills</h2>
        </Col>
      </Row>
      <Row className={"text-start"}>
        <Col
          xs={{
            span: 6,
            order: columns[0].length < columns[1].length ? "last" : "",
          }}
        >
          {columns[0].map(skillRenderer)}
        </Col>
        <Col xs={{ span: 6 }}>{columns[1].map(skillRenderer)}</Col>
      </Row>
    </div>
  );
};

export default Skills;
