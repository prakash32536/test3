import React from 'react'
import { Box,Typography } from '@mui/material';

const AllowancesDetails = (props) => {
    // const allData = {props.data}
    const newArray = [];
    newArray.push(props.data);
    console.log("hello",newArray)
    if (newArray.length === 1) {
        return (
          <>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Salary System Based On Meritocracy</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q1}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>120 Or More Annual Holidays</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q2}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Generous Welfare Benifits</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q3}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Enhanced Education And Training</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q4}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Support System For Acquriring Qualification</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q5}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Reduced Working Hours System</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q6}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Maternity Care Leave System</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q7}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '70%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Company Housing / Rent Subsidy</Typography> 
              <Typography sx={{width: '30%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Q8}</Typography> 
            </Box>
            
          </>
        );
      } else {
        return null; // Render nothing if the length is not greater than one
      }
  
}

export default AllowancesDetails
