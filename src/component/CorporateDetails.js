import React from 'react'
import { Box,Typography } from '@mui/material';

const CorporateDetails = (props) => {
    // const allData = {props.data}
    const newArray = [];
    newArray.push(props.data);
    console.log("hello",newArray)
    if (newArray.length === 1) {
        return (
          <>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Business Description</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.BusinessDescription}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Corporate Philosophy</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.CorporatePhilosophy}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Company Name</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.CompanyName}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Industry</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Industry}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Mail ID</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.MailID}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Phone Number</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.PhoneNumber}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Location</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Location}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Establishment Date</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.EstablishmentDate}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Working Hours</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.WorkingHours}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Initial Capital</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.InitialCapital}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Representative</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Representative}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Branch</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.Branch}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Number Of Employees</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.NumberOfEmployees}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Sales Revenue</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.SalesRevenue}</Typography> 
            </Box>
            <Box sx={{display: 'flex', width: '100%',borderBottom: '1px solid gray', height: '7vh'}}>
              <Typography sx={{width: '40%', fontWeight:'bold', backgroundColor:'#dddddd',display: 'flex', justifyContent:'center', alignItems: 'center'}}>Operation Profit</Typography> 
              <Typography sx={{width: '60%', display: 'flex', alignItems: 'center',paddingLeft: '10px'}}>{props.data.OperationProfit}</Typography> 
            </Box>
          </>
        );
      } else {
        return null; // Render nothing if the length is not greater than one
      }
  
}

export default CorporateDetails
