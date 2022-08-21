import React, { FunctionComponent, useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '../store/store';
import { TPage } from '../util/types';
const EPISODES_URL = 'https://api.tvmaze.com/shows/143/episodes?specials=1';

const Episodes: FunctionComponent = () => {
    const episodes = useStore((state) => state.episodes, shallow);
    const loading = useStore((state) => state.loading);
    const error = useStore((state) => state.error);
    const fetchData = useStore((state) => state.fetchData);
    const dataType: TPage = 'episodes';

    useEffect(() => {
        fetchData(EPISODES_URL, dataType);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    if (!episodes) return <div>No data</div>;
    return <div>{JSON.stringify(episodes)}</div>;
};

export default Episodes;
