import React, {useEffect, useState} from 'react';
import SideBarItem from './sidebar-item';

function SideBar ({menu }) {
    const [active, setActive] = useState(1);

    const __navigate = (id) => {
        setActive(id);
    }

    return(
        <nav className='text-xl font-bold pb-4'>
            <div className='text-xl font-bold pb-4'>
                <div className='text-xl font-bold pb-4'>
                    <div className='text-xl font-bold pb-4'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;