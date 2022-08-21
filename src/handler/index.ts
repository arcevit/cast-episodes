import { TCast } from '../util/types';

export const getAge = (dob: string, dop: string | null) => {
    const birthday = new Date(dob);
    const diff_ms = dop ? Date.parse(dop) : Date.now() - birthday.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const filterCast = (cast: TCast[], filter: string) =>
    cast.filter(({ person: { name }, character }) => {
        const filtered = (filterBy: string) =>
            filterBy.toLowerCase().includes(filter.toLowerCase());
        return filtered(name) || filtered(character.name);
    });
