import React from 'react';
import TreatmentForm from './TreatmentForm';

const AddTreatment = ({ history, treatments, setTreaments }) => {
    const handleOnSubmit = (treatment) => {
        setTreaments([treatment, ...treatments]);
        history.push('/');
    };
    return (
        <React.Fragment>
            <TreatmentForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddTreatment;