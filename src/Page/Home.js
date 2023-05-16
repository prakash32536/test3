import React, { useEffect, useState } from 'react';
import SideBar from '../component/SideBar'
import { Grid, Box } from '@mui/material';
import Corporate from '../component/content/Corporate';
import axios from 'axios';
import CorporateDetails from '../component/CorporateDetails';
import Allowances from '../component/content/Allowances';
import Others from '../component/content/Others';
import Holidays from '../component/content/Holidays';
import AllowancesDetails from '../component/AllowancesDetails';

const Home = () => {
    const [details, setDetails] = useState([]);
    console.log('data=======>', details);
    const [A_details, setA_Details] = useState([]);
    console.log('data=======>', details);
    console.log('data2=======>', A_details);

    // It is for api handling
    const ViewDetails = async () => {
        await axios.get(`https://test3data.onrender.com/corporate`).then((res) => {
            if (res) {
                setDetails(res.data);
            }
        })
        await axios.get(`https://test3data.onrender.com/allowances`).then((res) => {
            if (res) {
                setA_Details(res.data);
            }
        })
    }

    useEffect(() => {
        ViewDetails();
    }, [])


    return (
        <div>
            <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={3}>
                    <SideBar />
                </Grid>
                {/* corporate  */}
                <Grid item xs={8} sm={8} md={8} lg={9}>
                    <Corporate sx={{ width: '100%' }} />
                    {details?.length > 0 &&
                        details?.map((data, index) => {
                            return (
                                <Box key={index}>
                                    <CorporateDetails data={data} />
                                </Box>
                            )
                        })
                    }


                    {/* other tabs  */}

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs={10} sm={10} md={10} lg={6} sx={{ mt: 1 }}>
                            <Allowances />
                            {A_details?.length > 0 &&
                                A_details?.map((data, index) => {
                                    return (
                                        <Box key={index}>
                                            <AllowancesDetails data={data} />
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={5} sx={{ mt: 1 }}>
                            <Others />
                        </Grid>

                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Grid item xs={10} sm={10} md={10} lg={5} sx={{ mt: 2 }}>
                            <Holidays />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}

export default Home
