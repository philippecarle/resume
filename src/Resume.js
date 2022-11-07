import resume from './resume.json';
import {Col, Container, Row} from 'react-bootstrap';
import Basics from './components/Basics'
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Separator from "./components/Separator";
import Certificate from "./components/Certificate";
import Interest from "./components/Interest";
import Reference from "./components/Reference";
import React from "react";

const Resume = () => (
    <Container className={'dark'}>
        <header>
            <Basics basics={resume.basics} languages={resume.languages}/>
        </header>
        <hr/>
        <main>
            <Row>
                <Col lg={8}>
                    <h2 className={'section-title pb-3'}>Experience</h2>
                    {resume.work.length > 0 && <div id={'experience'}>
                        {resume.work.map((experience, index, array) =>
                            <div key={experience.company}>
                                <Experience experience={experience}/>
                                <Separator index={index} array={array}/>
                            </div>
                        )}
                    </div>}
                </Col>
                <Skills skills={resume.skills}/>
            </Row>
            <Row>
                <Col md={8}>
                    {resume.interests.length > 0 && <div id={'interests'}>
                        <h2 className={'section-title pb-3'}>Interests</h2>
                        <Row>
                            {resume.interests.map((interest, index, array) =>
                                <Col md={12/Math.ceil(array.length)} key={interest.name}>
                                    <Interest interest={interest}/>
                                </Col>
                            )}
                        </Row>
                        <Separator/>
                    </div>}

                    {resume.volunteer.length > 0 && <div id={'volunteer'}>
                        <h2 className={'section-title pb-3'}>Volunteering</h2>
                        <Row>
                            {resume.volunteer.map((volunteer, index, array) =>
                                <div key={volunteer.organization}>
                                    <Experience experience={{company: volunteer.organization, ...volunteer}}/>
                                    <Separator index={index} array={array}/>
                                </div>
                            )}
                        </Row>
                    </div>}

                    {resume.references.length > 0 && <div id={'references'}>
                        <h2 className={'section-title pb-3'}>References</h2>
                        {resume.references.map((reference) =>
                            <div key={reference.name} className={'py-2'}>
                                <Reference reference={reference}/>
                            </div>
                        )}
                    </div>}
                </Col>
                <Col md={4} className={'text-end'}>
                    {resume.certificates.length > 0 && <div id={'certificates'}>
                        <h2 className={'section-title pb-3'}>Certifications</h2>
                        {resume.certificates.map((certificate, index, array) =>
                            <div key={certificate.name}>
                                <Certificate certificate={certificate}/>
                                <Separator index={index} array={array} offset={6}/>
                            </div>
                        )}
                        <Separator/>
                    </div>}

                    {resume.education.length > 0 && <div id={'education'}>
                        <h2 className={'section-title pb-3'}>Education</h2>
                        {resume.education.map((education, index, array) =>
                            <div key={education.studyType} className={'py-2'}>
                                <Education education={education}/>
                                <Separator index={index} array={array} span={6} offset={6}/>
                            </div>
                        )}
                    </div>}
                </Col>
                <Separator/>
            </Row>
        </main>
    </Container>
);

export default Resume;
