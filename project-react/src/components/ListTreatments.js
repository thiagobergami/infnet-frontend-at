import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap'

import Treatment from './Treatment';

const ListTreatments = ({ treatments, setTreaments }) => {
    const handleDelete = (id) => {
        setTreaments(treatments.filter((treatment) => treatment.id !== id))
    };

    return (
        <Container>
            <h2 className="mt-5"> Lista</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {!_.isEmpty(treatments) ? (
                    treatments.map((treatment) => (
                        <Col>
                            <Treatment key={treatment.id} {...treatment} handleDelete={handleDelete} />
                        </Col>
                    ))
                ) : (
                    <p className="message">Nenhum Tratamento cadastrado</p>
                )
                }
            </Row>
        </Container>
    )
}

export default ListTreatments;