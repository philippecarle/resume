import { Col, Row } from "react-bootstrap";
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
    return (
      <>
        <Row id={"main-title"} className={"pt-5"}>
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
                  {profiles.map(({ network, username, url }, index, array) => (
                    <li md={Math.ceil(12 / array)} key={network}>
                      <span>
                        <a href={url}>{network}</a>
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
                  md={Math.ceil(12 / array)}
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
          <Col md={12} className={"mb-0 text-justify"}>
            <ReactMarkdown>{summary}</ReactMarkdown>
          </Col>
        </Row>
      </>
    );
  }
}

export default Basics;
