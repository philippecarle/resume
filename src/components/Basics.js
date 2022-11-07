import {Col, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import getTextClass from "../helpers/textAlignClass";
import React from "react";

const Basics = ({
                    languages,
                    basics: {
                        name,
                        label,
                        phone,
                        email,
                        website,
                        summary,
                        location: {address, postalCode, city, countryCode, region}
                    }
                }) => {
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
    );
    return (
        <>
            <Row id={'main-title'} className={'pt-5'}>
                <Col md={8}>
                    <h1>{name}</h1>
                    <h3>{label}</h3>
                </Col>
                <Col md={2} className={'text-lg-end text-start'}>
                    <ul className={'list-unstyled d-grid gap-2 pt-4'}>
                        <li>{address}</li>
                        <li>{city} {region} {postalCode}</li>
                        <li>{regionNames.of(countryCode)}</li>
                    </ul>
                </Col>
                <Col md={2} className={'text-lg-end text-start'}>
                    <ul className={'list-unstyled d-grid gap-2 pt-4'}>
                        <li><a href={`tel: ${phone}`}>{phone}</a></li>
                        <li><a href={`mailto: ${email}`}>{email}</a></li>
                        <li><a href={website}>{website}</a></li>
                    </ul>
                </Col>
            </Row>
            <hr/>

            {(languages.length > 0) && <>
                <Row id='languages'>
                    {languages.map(({language, fluency}, index, array) => (
                        <Col
                            md={Math.ceil(12 / languages.length)}
                            key={language}
                            className={getTextClass(index, array)}
                        >
                            <span>{language} - <i>{fluency}</i></span>
                        </Col>
                    ))}
                </Row>
                <hr/>
            </>}

            <Row id='summary'>
                <Col md={12}>
                    <p className={'mb-0 text-justify'}><ReactMarkdown components={{p: React.Fragment}}>{summary}</ReactMarkdown></p>
                </Col>
            </Row>
        </>
    )
};

export default Basics;
