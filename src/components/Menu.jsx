import React, { useContext } from 'react'
import { Categorycontext } from '../context/Categorycontext'
import { Link } from 'react-router-dom';

function Menu() {
    const {categorylist} = useContext(Categorycontext);

    return (
        <nav>
            <ul>
                {categorylist.map((el,index)=>(
                    <li key={index}>
                        <Link to={`/products/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
