import React from 'react'
import { Box, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Others= () => {

    

    return (
        <>
            <Box sx={{ width: '100%', height: '20%', display: 'flex',justifyContent: 'space-between',backgroundColor:  '#d8f1f0', padding: '10px',alignItems: 'center', mt :1 }}>
                <Typography sx={{ paddingLeft: '20px', borderLeft: '3px solid black' }}>Others</Typography>
                <BorderColorIcon sx={{paddingRight: '20px',cursor: 'pointer' }} />
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Retention Rate Of New Graduate Hires ( Overseas Bases )</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Over 50%</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Work Style ( Overseas Bases )</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Yes</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Working Environment</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>Not Working</Typography> 
            </Box>
           
        </>
    )
}

export default Others
