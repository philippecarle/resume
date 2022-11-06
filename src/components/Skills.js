import Skill from "./Skill";
import {Col, Row} from "react-bootstrap";
import Separator from "./Separator";
import React from 'react';

const Skills = function ({skills}) {
    const half = Math.ceil(skills.length / 2);

    const skillRenderer = (skill, index, array) => (
        <div key={skill.name}>
            <Skill skill={skill}/>
            <Separator index={index} array={array} span={6} offset={6}/>
        </div>
    );

    return (
        <Row>
            <Col md={6}>{skills.slice(0, half).map(skillRenderer)}</Col>
            <Col md={6}>{skills.slice(half).map(skillRenderer)}</Col>
        </Row>
    )
};

export default Skills;
