import React, { FunctionComponent, useEffect } from 'react';
import { useStore } from '../store/store';
import shallow from 'zustand/shallow';
import { TCast, TPage } from '../util/types';
import Card from '../components/Card';
import { filterCast } from '../handler';
export const CAST_URL = 'https://api.tvmaze.com/shows/143?embed=cast';

const Cast: FunctionComponent = () => {
    const cast = useStore((state) => state.cast, shallow);
    const loading = useStore((state) => state.loading);
    const error = useStore((state) => state.error);
    const filter = useStore((state) => state.filter);
    const fetchData = useStore((state) => state.fetchData);
    const dataType: TPage = 'cast';
    const data = cast?._embedded?.cast as TCast[] | undefined;

    useEffect(() => {
        fetchData(CAST_URL, dataType);
    }, [fetchData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    if (!data) return <div>No data</div>;

    return (
        <div className='card-grid'>
            {filterCast(data, filter).map((item: TCast) => (
                <Card item={item} key={item.person.id} />
            ))}
        </div>
    );
};

export default Cast;
