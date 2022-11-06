import {Figure} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'

const Reference = ({reference: {name, reference}}) => (
    <Figure>
        <blockquote className="blockquote overflow-scroll">
            <ReactMarkdown>{reference}</ReactMarkdown>
        </blockquote>
        <Figure.Caption className="blockquote-footer">
            {name}
        </Figure.Caption>
    </Figure>
);

export default Reference;