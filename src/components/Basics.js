import { FaGithub, FaLinkedin, FaStackOverflow, FaGlobe } from "react-icons/fa";
import { Col, Image, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import Separator from "./Separator";

class Basics extends React.Component {
  getTextClass = (index, array) => {
    if (index === array.length - 1) {
      return "text-md-end text-start";
    }
    if (index === 0) {
      return "text-start";
    }

    return "text-md-center text-start";
  };

  render() {
    let {
      languages,
      basics: {
        name,
        picture,
        label,
        phone,
        email,
        website,
        summary,
        location: { address, postalCode, city, countryCode, region },
        profiles,
      },
    } = this.props;

    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

    const iconMap = {
      Github: <FaGithub />,
      LinkedIn: <FaLinkedin />,
      "Stack Overflow": <FaStackOverflow />,
    };

    return (
      <div id="basics">
        <Row className={"pt-2"}>
          <Col md={6} sm={12}>
            <h1>{name}</h1>
            <h3>{label}</h3>
          </Col>
          <Col md={2} sm={12} className={"text-md-end text-start"}>
            <ul className={"list-unstyled d-grid gap-2 pt-4"}>
              <li>{address}</li>
              <li>
                {city} {region} {postalCode}
              </li>
              <li>{regionNames.of(countryCode)}</li>
            </ul>
          </Col>
          <Col md={2} sm={12} className={"text-start"}>
            <ul className={"list-unstyled d-grid gap-2 pt-4"}>
              <li>
                <a href={`tel: ${phone}`}>{phone}</a>
              </li>
              <li>
                <a href={`mailto: ${email}`}>{email}</a>
              </li>
              <li>
                <a href={website}>{website}</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className={"text-md-end text-start"}>
            <ul className={"list-unstyled d-grid gap-2 pt-4"}>
              {profiles.length > 0 && (
                <>
                  {profiles.map(({ network, url }) => (
                    <li key={network}>
                      <span>
                        {/* Use icon from iconMap or FaGlobe as a fallback */}
                        {iconMap[network] || <FaGlobe />}{" "}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {network}
                        </a>
                      </span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </Col>
        </Row>
        <Separator />

        {languages.length > 0 && (
          <>
            <Row id="languages">
              {languages.map(({ language, fluency }, index, array) => (
                <Col
                  md={Math.ceil(12 / array.length)}
                  key={language}
                  className={this.getTextClass(index, array)}
                >
                  <span>
                    {language} - <i>{fluency}</i>
                  </span>
                </Col>
              ))}
            </Row>
            <hr />
          </>
        )}

        <Row id="summary">
          <Col md={8} lg={8} xl={10} className={"mb-0 text-justify"}>
            <ReactMarkdown>{summary}</ReactMarkdown>
          </Col>
          <Col
            md={4}
            lg={3}
            xl={2}
            className="order-first order-md-last offset-lg-1 offset-xl-0"
          >
            <Row className="justify-content-center">
              <Col md={12} xs={8}>
                <Image src={picture} alt="Philippe Carle, Tech Lead" fluid roundedCircle thumbnail />
              </Col>
            </Row>
            <Separator className="d-md-none" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Basics;
