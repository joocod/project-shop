import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Menu from './Menu'


function Nav() {

    return (
        <Headercontainer>
            <h1><Link to='/'>shop</Link></h1>
            <Menu/>
        </Headercontainer>
    )
}

export default Nav

const Headercontainer = styled.header`
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 24px;
    border-bottom: solid 1px rgba(0,0,0,0.1);
    .userwrap{
        display: flex;
        margin-left: auto;
        align-items: center;
        gap: 12px;
        button{
            padding: 6px 12px;
            border-radius: 6px;
            &.loginBtn{
                background: pink;
            }
            &.logoutBtn{
                background: gray;
            }
        }
    }
`