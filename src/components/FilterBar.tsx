import React,{ FunctionComponent} from 'react';
import ActionMenu from './ActionMenu';
import SearchField from './SearchField';

interface Prop {
    page:string;
}

const FilterBar:FunctionComponent<Prop> = ({ page }) => {
    return (
        <div className='filter-bar-container'>
            <SearchField placeholder= {`Search for ${page} member`} />
            <ActionMenu/>
        </div>
    );
};

export default FilterBar;
