import Skill from "./Skill";
import {Col, Row} from "react-bootstrap";
import React from 'react';

const Skills = function ({skills}) {
    const half = Math.ceil(skills.length / 2);

    const skillRenderer = (skill) => (
        <Col md={6} className={'mb-3'} key={skill.name}>
            <Skill skill={skill}/>
        </Col>
    );

    return (
        <Row>
            {skills.slice(0, half).map(skillRenderer)}
            {skills.slice(half).map(skillRenderer)}
        </Row>
    )
};

export default Skills;
