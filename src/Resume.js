import resume from "./resume.json";
import { Col, Container, Row } from "react-bootstrap";
import Basics from "./components/Basics";
import CertificateList from "./components/CertificateList";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import InterestList from "./components/InterestList";
import ReferenceList from "./components/ReferenceList";
import Separator from "./components/Separator";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";

const Resume = () => (
  <Container className={"dark"}>
    <header>
      <Basics basics={resume.basics} languages={resume.languages} />
    </header>
    <Separator />
    <main>
      <Row>
        <Col md={8}>
          <ExperienceList list={resume.work} />
        </Col>
        <Col md={4} className={"text-md-end text-start"}>
          <CertificateList list={resume.certificates} />
          <Skills skills={resume.skills} />
        </Col>
        <Separator />
      </Row>
      <Row>
        <Col md={8}>
          <InterestList list={resume.interests} />
          <Volunteering volunteering={resume.volunteer} />
        </Col>
        <Col md={4} className={"text-md-end text-start"}>
          <EducationList list={resume.education} />
        </Col>
        <Separator />
      </Row>
      <Row>
        <Col>
          <ReferenceList list={resume.references} />
        </Col>
      </Row>
    </main>
  </Container>
);

export default Resume;
