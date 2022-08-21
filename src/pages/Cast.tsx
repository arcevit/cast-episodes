import React, { FunctionComponent, useEffect } from 'react';
import { useStore } from '../store/store';
import shallow from 'zustand/shallow';
import { TCast, TPage } from '../util/types';
const CAST_URL = 'https://api.tvmaze.com/shows/143?embed=cast';

const Cast: FunctionComponent = () => {
    const cast = useStore((state) => state.cast, shallow);
    const loading = useStore((state) => state.loading);
    const error = useStore((state) => state.error);
    const fetchData = useStore((state) => state.fetchData);
    const dataType: TPage = 'cast';
    const data = cast?._embedded?.cast as TCast[] | undefined;

    useEffect(() => {
        fetchData(CAST_URL, dataType);
    }, [fetchData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    if (!data) return <div>No data</div>;

    return <div>{JSON.stringify(data)}</div>;
};

export default Cast;
