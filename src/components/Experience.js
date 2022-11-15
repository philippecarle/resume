import ReactMarkdown from "react-markdown";
import { Col, Row } from "react-bootstrap";
import Period from "./Period";
import React from "react";

const Experience = ({
  experience: { company, position, summary, startDate, endDate, highlights },
}) => (
  <div className={"experience"}>
    <Row>
      <Col xs={8}>
        <h4 className={"pb-2"}>
          {position} <small>- {company}</small>
        </h4>
      </Col>
      <Col xs={4} className={"text-end"}>
        <p className={"pt-1"}>
          <Period
            startDate={startDate}
            endDate={endDate}
            format={"MMMM YYYY"}
          />
        </p>
      </Col>
    </Row>

    <ReactMarkdown className={"text-justify"}>{summary}</ReactMarkdown>

    <div className="highlights">
      <h5 className="mt-3">Highlights:</h5>

      <ul className="list-condensed">
        {highlights.map((highlight) => (
          <li key={highlight}>
            <ReactMarkdown components={{ p: React.Fragment }}>
              {highlight}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Experience;
