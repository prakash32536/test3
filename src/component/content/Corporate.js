import React from 'react'
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {useNavigate} from "react-router-dom"
import axios from 'axios';



const Corporate = () => {
    const navigate = useNavigate()

    const handleClick = async()=>{
       

        
        try {
            const response = await axios.delete(`https://test3data.onrender.com/corporate/1`);
            console.log('Data deleted successfully:', response.data);
            navigate('/register')
          } catch (error) {
            navigate('/register')
            console.error('Failed to delete data:', error);
          }
        
    }

    return (
        <>
            <Box sx={{ width: '100%', height: '7%', display: 'flex',justifyContent: 'space-between',backgroundColor:  '#d8f1f0', padding: '10px',alignItems: 'center' }}>
                <Typography sx={{ paddingLeft: '20px', borderLeft: '3px solid black' }}>Corporate Information</Typography>
                <BorderColorIcon sx={{paddingRight: '20px',cursor: 'pointer' }} onClick= {handleClick}/>
            </Box>
        </>
    )
}

export default Corporate
