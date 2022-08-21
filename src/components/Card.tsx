import React, { FunctionComponent } from 'react';
import { TCast } from '../util/types';
import { ReactComponent as Female } from '../icons/Female.svg';
import { ReactComponent as Male } from '../icons/Male.svg';
import { getAge } from '../handler';

interface Prop {
    item: TCast;
}

const Card: FunctionComponent<Prop> = ({ item }) => {
    const {
        person: {
            name,
            birthday,
            country,
            gender,
            image: { medium },
            deathday,
        },
        character,
    } = item as TCast;
    const age = getAge(birthday, deathday);

    return (
        <div className='card'>
            <div className='card-header'>
                <img src={medium} alt='Logo' />
                <div className='card-img-text'>
                    {name}, {age}
                </div>
                <div className='card-badge'>
                    {gender === 'Female' ? <Female /> : <Male />}
                </div>
            </div>
            <div className='card-body'>
                <div className='card-body-item'>Country: {country.name}</div>
                <div className='card-body-item'>Birthday: {birthday}</div>
                <div className='card-body-item'>
                    Character: {character.name}
                </div>
            </div>
        </div>
    );
};

export default Card;
