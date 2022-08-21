import React, { FunctionComponent, useRef } from 'react';
import { ReactComponent as MagGlass } from '../icons/MagGlass.svg';
import { useStore } from '../store/store';
interface Prop {
    placeholder: string;
}

const SearchField: FunctionComponent<Prop> = ({ placeholder }) => {
    const filter = useStore((state) => state.filter);
    const setFilter = useStore((state) => state.setFilter);

    return (
        <div className='search-container'>
            <span className='magGlass-wrapper'>
                <MagGlass />
            </span>
            <input
                className='search-input'
                placeholder={placeholder}
                onChange={(evt) => setFilter(evt.target.value)}
                type='text'
                value={filter}
            />
        </div>
    );
};

export default SearchField;
