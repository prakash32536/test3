import React from 'react'
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Holidays = () => {

    

    return (
        <>
            <Box sx={{ width: '100%', height: '20%', display: 'flex',justifyContent: 'space-between',backgroundColor:  '#d8f1f0', padding: '10px',alignItems: 'center', mt :1 }}>
                <Typography sx={{ paddingLeft: '20px', borderLeft: '3px solid black' }}>Holidays</Typography>
                <BorderColorIcon sx={{paddingRight: '20px',cursor: 'pointer' }} />
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Summer Holidays</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Yes</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Golden Weeks</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Yes</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Other Holidays</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Yes</Typography> 
            </Box>
           
        </>
    )
}

export default Holidays
