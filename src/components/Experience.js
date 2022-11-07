import ReactMarkdown from "react-markdown";
import {Col, Row} from "react-bootstrap";
import Period from "./Period";

const Experience = ({experience: {company, position, summary, startDate, endDate, highlights}}) => (
    <>
        <Row>
            <Col xs={8}>
                <h4 className={'pb-2'}>{position}<br/>
                    <small>{company}</small>
                </h4>
            </Col>
            <Col xs={4} className={'text-end'}>
                <p className={'pt-1'}><Period startDate={startDate} endDate={endDate} format={'MMMM YYYY'}/></p>
            </Col>
        </Row>

        <ReactMarkdown className={'text-justify'}>{summary}</ReactMarkdown>
        <ul className={'list-condensed highlights'}>
            {highlights.map((highlight) =>
                <li key={highlight}>{highlight}</li>
            )}
        </ul>
    </>
);

export default Experience;
