import React, { FunctionComponent, useState } from 'react';
import { ReactComponent as Filter } from '../icons/Filter.svg';
import { ReactComponent as Female } from '../icons/Female.svg';
import { ReactComponent as Male } from '../icons/Male.svg';
import Checkbox from './Checkbox';
import Button from './Button';

const ActionMenu: FunctionComponent = () => {
    const [visible, setVisible] = useState(false);
    const [opacity, set0pacity] = useState(false);
    return (
        <div
            className='action-menu-container'
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div className={'btn-filter' + (visible ? ' open' : '')}>
                <Filter />
                <span>Filtering</span>
            </div>
            <span></span>
            <div className='action-menu-body'>
                <div className='action-menu-section'>
                    <div className='action-menu-title'>Country</div>
                    <Checkbox label='Canada' />
                    <Checkbox label='XYZ' />
                    <Checkbox label='Canada' />
                    <Checkbox label='XYZ' />
                </div>
                <div className='action-menu-section'>
                    <div className='action-menu-title'>Gender</div>
                    <div className='inline-container'>
                        <div
                            onClick={() => set0pacity((prev: boolean) => !prev)}
                        >
                            <Female opacity={opacity ? 0.2 : 1} />
                            <div className='text-sm'>Female</div>
                        </div>
                        <div
                            onClick={() => set0pacity((prev: boolean) => !prev)}
                        >
                            <Male opacity={opacity ? 1 : 0.2} />
                            <div className='text-sm'>Male</div>
                        </div>
                    </div>
                </div>
                <div className='action-menu-section'>
                    <div className='action-menu-title'>Alive</div>
                    <div className='inline-container'>
                        <Checkbox label='Yes' />
                        <Checkbox label='No' />
                    </div>
                </div>
                <div className='action-menu-section'>
                    <div>
                        <div className='action-menu-title'>Birthday</div>
                        <span className='text-sm'> (born before year)</span>
                    </div>
                    <input className='input-sm' placeholder='1981' />
                </div>
                <div className='btn-update-container'>
                    <Button title='update' color='primary' />
                </div>
            </div>
        </div>
    );
};

export default ActionMenu;
