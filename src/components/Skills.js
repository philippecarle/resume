import Skill from "./Skill";
import Separator from "./Separator";
import React from 'react';

const Skills = function ({skills}) {
    return (
        <div id={'skills-list'}>
            {skills.map((skill, index, array) => (
                <div className={'skill'} key={skill.name}>
                    <Skill skill={skill}/>
                    <Separator index={index} array={array} span={6} offset={6}/>
                    <div className={'clearfix'}/>
                </div>
            ))}
        </div>
    )
};

export default Skills;
