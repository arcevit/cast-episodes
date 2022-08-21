import React, { FunctionComponent } from 'react';

type Prop = {
    label?: string;
};

const Checkbox: FunctionComponent<Prop> = ({ label }) => {
    return (
        <div>
            <input type='checkbox' id={label} name={label} />
            <label className='text-sm' htmlFor={label}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
