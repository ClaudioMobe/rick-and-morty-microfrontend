import styled from 'styled-components';

export const Layout = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #0f172a;
    color: #f8fafc;
    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
`;

export const Logo = styled.img`
    margin: 20px;
    height: 120px;
`;

export const Main = styled.main`
    padding: 16px;
`;

export const Footer = styled.footer`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-top: 1px solid #eee;
`;