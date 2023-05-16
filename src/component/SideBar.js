import React from 'react'
import Typography from '@mui/material/Typography';
import AppsIcon from '@mui/icons-material/Apps';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledBox } from './Styled';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()

  const handleClick = ()=>{
      navigate('/')
  }

  return (
    <div>
      <StyledBox>
        <Typography sx={{display: 'flex', alignItems: 'center',cursor: 'pointer'}} onClick= {handleClick}> <AppsIcon/>  Dashboard</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <BusinessCenterIcon/>  Manage Subscription</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <BusinessCenterIcon/>  Young Brain</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <BusinessCenterIcon/>  Mid Career</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <BusinessCenterIcon/>  Vendor</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <BusinessCenterIcon/>  Consultant</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <AppsIcon/>  Reports</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center',mt:4,cursor: 'pointer'}}> <LogoutIcon/>  Sign out</Typography>
      </StyledBox>
    </div>
  )
}

export default SideBar
