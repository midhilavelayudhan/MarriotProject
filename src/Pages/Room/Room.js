import React from 'react'
import {Typography,makeStyles, Container, Grid,Paper} from '@material-ui/core';
import './Room.css';
import {roomDetails,roomList} from './data';
import Roomcard from './Roomcard';

const useStyles=makeStyles({
    roomheading:{
        fontWeight:400,
        textAlign:'center',
        marginTop:"100px",
    },
    roomheading2:{
        textAlign:'center',
        fontWeight:300,
    },
    roomgrid:{
        backgroundColor:"#f4f4f4",
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:'50px',
        
    
        
        },
        roomlist:{
            fontSize: '.875rem',
            margin:'10px'
            
           
        },
        roompaper:{
            height:'300px',
            width:'100%',
            paddingTop:'50px',
            paddingBottom:'50px',
            display:'table'
            
        }

})
export default function Room() {
    const classes=useStyles();
    
    return <>
            <Typography variant="h4" className={classes.roomheading}>ROOMS </Typography>
            <Typography variant="h5" className={classes.roomheading2} gutterBottom>FEEL FREE TO EXPLORE IN PRESCOTT</Typography>
            <Grid container spacing={3} className={classes.roomgrid} >
                
                 <Roomcard roomDetails={roomDetails} modalImages={roomDetails.modal_images}/>
                <Paper elevation={0} className={classes.roompaper}>
                <Typography variant="h5" className={classes.roomheading2} gutterBottom>A SPACIOUS MINI-SUITE AWAITS YOU</Typography>
                <div className="miniSuites">
                <div className="suitecontent">
                <ul>
          
          <li>Every room includes microwave, refrigerator and wet bar with sink</li>
          <li>All Suites have LG 37 inch Flat Screen televisions</li>
          <li>This hotel has a smoke-free policy</li>
          
          </ul>
          </div>
          <div className="suitecontent">
          <ul>
              <li>Work desk and sofa bed gives you extra space to work</li>
              <li>All suites offer complimentary High Definition Programming</li>
              <li>Book 10 or more rooms at this hotel</li>
              
          </ul> 
          </div>
          <div className="suitecontent">
          <ul>
              <li>Hair dryer, iron and board, coffee and tea</li>
              <li>Complimentary wireless Internet in all guestrooms and public areas</li>
              
              
          </ul> 
          </div>
          </div>
                </Paper> 
                <Paper>
                    <Typography >Check Room Rates & Availability</Typography>
                </Paper>

            </Grid>
             
            
        </>
    
}
