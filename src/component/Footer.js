import React from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'
function Footer() {
    return (
        <FooterWrap className="font-root-content">
            Coppyright belong to @LinhThai
        </FooterWrap>
    )
}

export default Footer;
const FooterWrap = styled.div`
    background:var(--mainBlue);
    color:var(--mainWhite);
    font-size:100%;
    text-align:center;
    padding:1.5rem
`
