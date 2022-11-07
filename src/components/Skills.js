import Skill from "./Skill";
import {Col} from "react-bootstrap";
import Separator from "./Separator";
import React from 'react';

const Skills = function ({skills}) {
    const half = Math.floor(skills.length / 2);

    const skillRenderer = (skill, index, array) => (
        <div key={skill.name}>
            <Skill skill={skill}/>
            <Separator index={index} array={array} span={6} offset={6} className={'d-none .d-md-block'}/>
        </div>
    );

    return (
        <>
            <Col className={'text-lg-end text-start'} lg={2} md={6} xs={{ order: 'last' }}>
                <h2 className={'section-title pb-3 d-none d-md-block'}>&nbsp;</h2>
                {skills.slice(0, half).map(skillRenderer)}
            </Col>
            <Col className={'text-lg-end text-start'} lg={{ order: 'last', span: 2 }} md={{ span: 6 }}>
                <h2 className={'section-title pb-3'}>Skills</h2>
                {skills.slice(half).map(skillRenderer)}
            </Col>
        </>
    )
};

export default Skills;
