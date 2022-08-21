import React from 'react';
import { ReactComponent as Logo } from '../icons/Logo.svg';
import Button from './Button';
import { TPage } from '../util/types';

interface Prop {
    page: TPage;
    setPage: (a: TPage) => void;
}

const NavBar: React.FunctionComponent<Prop> = ({ page, setPage }) => {
    return (
        <div className='nav-bar-container'>
            <div className='logo'>
                <Logo />
            </div>
            <Button
                title='cast'
                onClick={() => setPage('cast')}
                color={page === 'cast' ? 'primary' : 'secondary'}
            />
            <Button
                title='episodes'
                onClick={() => setPage('episodes')}
                color={page === 'episodes' ? 'primary' : 'secondary'}
            />
        </div>
    );
};

export default NavBar;
