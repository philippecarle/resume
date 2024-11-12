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
import { DarkModeProvider } from "./components/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";

const Resume = () => (
  <div>
    <Container id="dark-mode-container" className={"pt-5"} fluid>
      <Row className="justify-content-end">
        <Col md={4}>
          <DarkModeProvider>
            <DarkModeToggle />
          </DarkModeProvider>
        </Col>
      </Row>
    </Container>
    <Container className={"px-xs-5"}>
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
            <Separator className={"d-md-none"} />
            <Skills skills={resume.skills} />
            <Separator />
            <CertificateList list={resume.certificates} />
          </Col>
          <Separator />
        </Row>
        <Row>
          <Col md={8}>
            <InterestList list={resume.interests} />
          </Col>
          <Col md={4} className={"text-start"}>
            <Separator className={"d-md-none"} />
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
  </div>
);

export default Resume;
