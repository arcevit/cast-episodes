import React, {FunctionComponent, useRef } from 'react';
import { ReactComponent as MagGlass } from '../icons/MagGlass.svg';
interface Prop {
    placeholder: string;
}

const SearchField: FunctionComponent<Prop> = ({ placeholder }) => {
    const inputRef = useRef<HTMLInputElement|  null>(null);

    return (
        <div className='search-container'>
            <span className='magGlass-wrapper'>
                <MagGlass />
            </span>
            <input
                className='search-input'
                placeholder={placeholder}
                onChange={(evt) => {}}
                ref={inputRef}
                type='text'
                value={'hello'}
            />
        </div>
    );
};

export default SearchField;
