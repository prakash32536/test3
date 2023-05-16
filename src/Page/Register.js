import { React, useState } from 'react';
import SideBar from '../component/SideBar';
import { Grid, TextField,Button } from '@mui/material';
import { StyledTextField } from './Styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
        await axios.post(`https://test3data.onrender.com/corporate`, formData).then((res)=> {
          if(res){
            navigate('/')
          }
        }).catch( error =>{
          console.log("error",error)
        })
     
      }

    return (
        <div>
            <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={9}>

                    {/* input content  */}
                    {/* part 1 */}
                    <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                        <Grid item xs={12} sm={12} md={12} lg={5}>
                            <StyledTextField
                                sx={{ width: '100%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Business Description "
                                onChange={handleChange}
                                name='BusinessDescription'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5}>
                            <StyledTextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-required"
                                label="Corporate Philosophy "
                                onChange={handleChange}
                                name='CorporatePhilosophy'
                            />
                        </Grid>
                        {/* part 2 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Company Name "
                                    onChange={handleChange}
                                    name='CompanyName'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Industry "
                                    onChange={handleChange}
                                    name='Industry'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Mail ID "
                                    onChange={handleChange}
                                    name='MailID'
                                />
                            </Grid>
                        </Grid>
                        {/* part 3 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Phone Number "
                                    onChange={handleChange}
                                    name='PhoneNumber'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Location "
                                    onChange={handleChange}
                                    name='Location'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Website "
                                    onChange={handleChange}
                                    name='Website'
                                />
                            </Grid>
                        </Grid>
                        {/* part4 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Working Hours "
                                    onChange={handleChange}
                                    name='WorkingHours'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Establishment Date"
                                    onChange={handleChange}
                                    name='EstablishmentDate'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Initial Capital "
                                    onChange={handleChange}
                                    name='InitialCapital'
                                />
                            </Grid>
                        </Grid>
                        {/* part 5 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Representative "
                                    onChange={handleChange}
                                    name='Representative'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Branch "
                                    onChange={handleChange}
                                    name='Branch'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    required
                                    label="Number Of Employees "
                                    onChange={handleChange}
                                    name='NumberOfEmployees'
                                />
                            </Grid>
                        </Grid>
                        {/* part 6 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Sales Revenue "
                                    onChange={handleChange}
                                    name='SalesRevenue'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    required
                                    id="outlined-required"
                                    label="Operation Profit "
                                    onChange={handleChange}
                                    name='OperationProfit'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Avrage Age Of Employees "
                                    onChange={handleChange}
                                    name='AvrageAgeOfEmployees'
                                />
                            </Grid>
                        </Grid>
                        {/* part 7 */}
                        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }} container>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Stock"
                                    onChange={handleChange}
                                    name='Stock'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Linkedin Link "
                                    onChange={handleChange}
                                    name='LinkedinLink'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    id="outlined-required"
                                    label="Twitter Link "
                                    onChange={handleChange}
                                    name='WebTwitterLinksite'
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" onClick={handleSubmit}>Save</Button>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default Register
