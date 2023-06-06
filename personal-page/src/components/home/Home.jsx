import React from "react"
//css
import './Home.css'
//Material ui
import { Avatar, Grid } from '@mui/material';
//images
import cheems from '../../assets/cheems.png'
import { LinkedIn } from "@mui/icons-material";
const Home = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/eric-senen-mora-lopez-esml/', '_blank');
  }
  return (
    <Grid justifyContent="space-evenly"
      container
      alignItems="center" >
      <Grid container spacing={1} className="container">
        <Grid item xs={12}>
          <Avatar alt="Eric Mora" src={cheems} sx={{ width: 1, height: 1 }} />
        </Grid>
        <Grid item xs={12}>
          <label className="name">Eric Senén Mora López</label>
        </Grid>
        <Grid item xs={12}>
          <label className="job">Frontend Developer</label>
        </Grid>
        <Grid item xs={12}>
          <label className="subJobs">Web and mobile</label>
        </Grid>
        <Grid item xs={12} >
          <LinkedIn onClick={openLinkedin} sx={{ mt: '20px', fontSize: 30 }} />
        </Grid>
      </Grid>
    </Grid >
  )
}
export default Home