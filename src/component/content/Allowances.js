import React from 'react'
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const  Allowances= () => {
    const navigate = useNavigate()

    const handleClick = async()=>{
        try {
            const response = await axios.delete(`https://test3data.onrender.com/allowances/1`);
            console.log('Data deleted successfully:', response.data);
            navigate('/allowances')
          } catch (error) {
            navigate('/allowances')
            console.error('Failed to delete data:', error);
          }
        // navigate('/allowances')
    }
    

    return (
        <>
            <Box sx={{ width: '100%', height: '20%', display: 'flex',justifyContent: 'space-between',backgroundColor:  '#d8f1f0', padding: '10px',alignItems: 'center', mt :1 }}>
                <Typography sx={{ paddingLeft: '20px', borderLeft: '3px solid black' }}>Allowances</Typography>
                <BorderColorIcon sx={{paddingRight: '20px',cursor: 'pointer'  }} onClick={handleClick} />
            </Box>
        </>
    )
}

export default Allowances
