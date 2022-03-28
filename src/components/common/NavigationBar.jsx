import React from 'react';
import styled from 'styled-components';


const Bar = styled.div`
    background-color: black;
    width:100%;
    height: 100px;

`

const NavigationBar = () => {
    return (
        <>
            <Bar />
            <h1>Hello World!</h1>
        </>
    );
};

export default NavigationBar;