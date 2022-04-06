import React, { useState } from 'react';
import { Box, Wrapper, Header, GenderWrapper, GenderBox, MaleIcon, FemaleIcon, SubmitButton, SubmitButtonDisabled } from './components';
import axios from "axios";


export default function Gender() {
    const [gender, setGender] = useState("");
    const handleSubmit = () => {
        axios.post('http://localhost:5000/set_gender', {
            gender,
            email: sessionStorage.getItem("email")
        })
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <Wrapper>
            <Box>
                <Header>What gender do you most closely identify with?</Header>
                <GenderWrapper>
                    <GenderBox>
                        <MaleIcon onClick = {() => setGender("male")} style={{color: gender==="male" ? "#ffc107": null}}/>
                    </GenderBox>
                    <GenderBox>
                        <FemaleIcon onClick = {() => setGender("female")} style={{color: gender==="female" ? "#ffc107": null}}/>
                    </GenderBox>
                </GenderWrapper>
                {gender!=="" && <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton> }
                {gender==="" && <SubmitButtonDisabled>Submit</SubmitButtonDisabled>}

            </Box>
        </Wrapper>
    )
}