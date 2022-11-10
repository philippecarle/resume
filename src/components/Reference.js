import { Figure } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";

const Reference = ({ reference: { name, reference } }) => (
  <Figure>
    <blockquote className="blockquote">
      <ReactMarkdown components={{ p: React.Fragment }}>
        {reference}
      </ReactMarkdown>
    </blockquote>
    <Figure.Caption className="blockquote-footer">{name}</Figure.Caption>
  </Figure>
);

export default Reference;
