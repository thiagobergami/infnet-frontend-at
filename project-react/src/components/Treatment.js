import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Treatment = ({
    id,
    name,
    createdAt,
    treatmentType,
    description,
    handleDelete
}) => {
    const history = useHistory();

    return (
        <Card className="mb-3 mt-5">
            <Card.Body>
                <Card.Title className='treatment-name'>{name}</Card.Title>
                <div>
                    <div>Id: {id}</div>
                    <div>Tipo: {treatmentType}</div>
                    <div>Descrição: {description} </div>
                    <div>Data cadastro: {createdAt}</div>
                </div>
                <div className="mt-3">
                    <Button variant="primary" onClick={() => history.push(`/editar/${id}`)}>
                        Editar
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(id)}>
                        Excluir
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Treatment;