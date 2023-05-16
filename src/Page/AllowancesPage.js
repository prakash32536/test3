import { React, useState } from 'react';
import SideBar from '../component/SideBar';
import { Grid, InputLabel, FormControl,MenuItem,Select,FormHelperText,Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AllowancesPage = () => {
    const navigate = useNavigate();
    const [formData, setFromData] = useState({})
    console.log("formData", formData)

    // this function handels my input data 
    const handleChange = (event) => {
        const { name, value } = event.target;

        // it will update my state 
        setFromData((preData) => ({
            ...preData,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {


        //integration of api 
        await axios.post(`https://test3data.onrender.com/allowances`, formData).then((res) => {
            if (res) {
                navigate('/')
            }
        }).catch(error => {
            console.log("error", error)
        })

    }

    return (
        <div>
            <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={9} sx={{p:2,display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                    {/* Q1  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Salary System Based On Meritocracy</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q1'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q2  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">120 Or More Annual Holidays</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q2'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q3  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Generous Welfare Benifits</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q3'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q4  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Enhanced Education And Training</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q4'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q5  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Support System For Acquriring Qualification</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q5'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q6  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Reduced Working Hours System</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q6'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q7  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Maternity Care Leave System</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q7'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    {/* Q8  */}
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Company Housing / Rent Subsidy</InputLabel>
                        <Select
                             labelId="demo-simple-select-standard-label"
                             id="demo-simple-select-standard"
                             onChange={handleChange}
                             name='Q8'

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default AllowancesPage

