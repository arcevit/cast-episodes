import create from 'zustand';
import axios from 'axios'
import { TEpisode, TPage } from '../util/types';

interface Store {
    filter: string;
	loading:boolean;
    error:boolean;
    cast: any;
    episodes: TEpisode[];
    setFilter:(a:string)=> any;
    fetchData: (a:string,b:TPage)=>void;
    
}

export const useStore = create<Store>((set) => ({
    filter: '',
	loading:false,
    error:false,
    cast: [],
    episodes: [],
    setFilter: (filter) => set((state) => ({ ...state, filter })),
    fetchData: async (url:string, data: TPage ) => {
        set(() => ({ loading: true }));
        try {
          const res = await axios.get(url);
          set((state) => ({...state, [data]: res.data, loading: false }));
        } catch (err) {
          set(() => ({ error: true, loading: false }));
        }
      },
    
}));
