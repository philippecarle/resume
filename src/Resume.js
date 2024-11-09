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
        <Col md={4} className={"text-start"}>
          <Skills skills={resume.skills} />
          <CertificateList list={resume.certificates} />
        </Col>
        <Separator />
      </Row>
      <Row>
        <Col md={8}>
          <InterestList list={resume.interests} />
        </Col>
        <Col md={4} className={"text-start"}>
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
