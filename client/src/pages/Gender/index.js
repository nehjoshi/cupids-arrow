import React from 'react';
import axios from 'axios';
import { Box, Wrapper, Header } from './components';

export default function Gender(){
    return (
        <Wrapper>
            <Box>
                <Header>What gender do you most closely identify with?</Header>
            </Box>
        </Wrapper>
    )
}