'use client'

import React from "react";
import { Button, TextField, Box } from '@mui/material';

const generate = () => {


    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        alert(`Input Value: ${inputValue}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // This centers the form vertically
                boxSizing: 'border-box',
                padding: 2
            }}
        >
            <TextField
                label="Enter Text"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                sx={{ marginBottom: 2 }} // Adds some space below the input field
            />
            <Button variant="contained" onClick={handleButtonClick}>
                Generate
            </Button>
        </Box>
    );

};

export default generate;