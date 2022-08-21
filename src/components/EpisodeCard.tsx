import React, { FunctionComponent } from 'react';
import { TEpisode } from '../util/types';

interface Prop {
    episode: TEpisode;
}

const EpisodeCard: FunctionComponent<Prop> = ({ episode }) => {
    const {
        name,
        image: { medium },
        season,
        airtime,
        summary,
    } = episode;
    const re = /(<([^>]+)>)/gi;

    return (
        <div className='episode-card'>
            <div className='card-header'>
                <img src={medium} alt='Logo' />
                <div className='card-img-text'>{name}</div>
            </div>
            <div className='card-body'>
                <div className='card-body-item'>
                    Season: {season}
                    {airtime ? `, Airtime: ${airtime}` : null}
                </div>
                <div className='card-body-item'> {summary.replace(re, '')}</div>
            </div>
        </div>
    );
};

export default EpisodeCard;
