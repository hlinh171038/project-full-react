import React from 'react'
import styled from 'styled-components'

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
    padding:0.5rem;
    position:absolute;
    bottom:0;
    width: 100%;
    position: fixed;
`
