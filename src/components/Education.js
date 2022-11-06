import ReactMarkdown from 'react-markdown'
import Period from "./Period";
import React from "react";

const Education = ({education: {institution, area, studyType, startDate, endDate, gpa, courses}}) => (
    <>
        <h4 className={'pb-2'}>{studyType}<br/>
            <small>{institution} - {area} / <Period startDate={startDate} endDate={endDate} format={'MMM YYYY'}/></small>
        </h4>
        <ul className={'list-condensed list-unstyled'}>
            {courses.map((course) =>
                <li key={course}>
                    <ReactMarkdown components={{p: React.Fragment}}>{course}</ReactMarkdown>
                </li>
            )}
        </ul>
    </>
);

export default Education;
