import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TreatmentForm = (props) => {
    const now = new Date()
    const [treatment, setTreament] = useState({
        id: props.treatment ? props.treatment.id : uuidv4(),
        name: props.treatment ? props.treatment.name : '',
        treatmentType: props.treatment ? props.treatment.treatmentType : '',
        description: props.treatment ? props.treatment.description : '',
        createdAt: now.toISOString()
    });

    const [mensagemErro, setMensagemErro] = useState('');

    const { id, name, treatmentType, description, createdAt } = treatment;

    const handleOnSubmit = (event) => {
        let errorMsg = ''
        event.preventDefault();
        const values = [name, treatmentType, description];
        console.log("🚀 ~ file: TreatmentForm.js ~ line 23 ~ handleOnSubmit ~ values", values)
        
        const fieldsNotNull = values.every((campo) => {
            const valor = `${campo}`.trim();
            return valor !== '' && valor !== '0';
        });

        if (fieldsNotNull) {
            const treatment = {
                id, name, treatmentType, description, createdAt
            };
            props.handleOnSubmit(treatment)
        }
        else {
            errorMsg = 'Preencha todos os campos!';
        }

        setMensagemErro(errorMsg);

    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setTreament((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container className="m-5">
            {props.treatment && <h2 className="mb-5 mt-5">Editar Tratamento</h2>}
            {!props.treatment && <h2 className="mb-5 mt-5">Adicionar Tratamento</h2>}
            {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Nome do Tratamento"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>                
                <Form.Group controlId="treatmentType">
                    <Form.Label>Tipo de Tratamento</Form.Label>
                    <Form.Control as="select"
                        className="input-control"
                        name="treatmentType"
                        value={treatmentType}
                        onChange={handleInputChange}>
                        <option>Selecione um tipo</option>
                        <option value="Cauterização">Cauterização</option>
                        <option value="Umectação">Umectação</option>
                        <option value="Creme">Creme</option>
                        <option value="Máscara">Máscara</option>
                        <option value="Queratinização">Queratinização</option>
                        <option value="Alinhamento">Alinhamento</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Descrição"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn pull-right">
                    {props.treatment ? 'Atualizar' : 'Cadastrar'}
                </Button>
            </Form>
        </Container>
    );
};


export default TreatmentForm;