import React from 'react';
import './app-header.css';
import styled from'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        &:hover {
            color: red;
        }
    }
    h2 {
        font-size: 22px;
        color: grey;
    }
`;

const AppHeader = ({postsNum, postsLiked}) => {
    return (
        <Header>
            <h1>Michael Bersh</h1>
            <h2>{postsNum} записей, из них понравилось {postsLiked}</h2>
        </Header>
    );
};

export default AppHeader;