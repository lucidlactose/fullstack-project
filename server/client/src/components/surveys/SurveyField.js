import React from 'react';
// import { Field } from 'redux-form';

export default ({ label, input, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" styled={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};
