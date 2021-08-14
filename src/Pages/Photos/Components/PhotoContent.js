import React,{useEffect, useState} from 'react'
import { Grid,Button,Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
// import PhotoHotelViews from './PhotoHotelViews'
import PhotoHotel from './PhotoHotel'
import PhotoSuites from './PhotoSuites'
import PhotoFeatures from './PhotoFeatures'
import PhotoDining from './PhotoDining'
import PhotoFitness from './PhotoFitness'
import PhotoEvents from './PhotoEvents'
// import ToggleButton from '@material-ui/lab/ToggleButton';




const useStyles = makeStyles((theme) => 
({
    
    photoContmain:
    {
        maxWidth: "73.75rem",
        margin: "0 auto",
        padding: "1.875rem 0 0",
        backgroundColor:"#f4f4f4"
    },
   
    photoContSubGrid3:
    {
        maxWidth: "73.75rem",
        position: "relative",
        margin: "0 auto",
        padding: "0 1.25rem"
    },
    photoButtonGrid:
    {
        display: "inline-block",
        padding: "0",
        margin: "0 0 0.625rem 0.9375rem",
        marginLeft: "-1rem",
       
    },
    photoButtongrp:{
       borderRadius:"0.125rem",
    //    padding: "0.625rem 1rem",
       letterSpacing: "normal",
       border: ".0625rem solid transparent",
       borderColor:"#d2d2d2",
       backgroundColor:"white",
       margin: "0 0 0.625rem 0.9375rem", 
       fontSize: "1rem",
       fontFamily: "Swiss-721,Helvetica,Arial,sans-serif",
       cursor: "pointer",
       '&:hover':
       {
           backgroundColor:"white",
           borderColor:"#2f4256"
       },
       '&:select':
       {
           backgroundColor:"#2f4256",
           color:"#fff"
       },
       '&:focus':
       {
           backgroundColor:"#2f4256",
           color:"#fff"
       }
    }
    
   
        
    
}))



function PhotoContent() {
    const classes = useStyles();
    
    const [color, setColor] = useState(false)
    const [hotel,setHotel]=useState('');
    const HotelView=(<PhotoHotel />)
    const hotelView=()=>
    {
        setHotel(HotelView)
        setColor(true)
    }
    
    const [suits,setSuits]=useState('');
    const Suites=(<PhotoSuites />)
    const suitesImg=()=>
    {
        setSuits(Suites)
    }
    
    const [features,setFeatures]=useState('');
    const Features=(<PhotoFeatures />)
    const featureImage=()=>
    {
        setFeatures(Features)
    }
    

    const [dining,setDining]=useState('');
    const Dining=(<PhotoDining />)
    const diningImage=()=>
    {
        setDining(Dining)
    }

    const [fitness,setFitness]=useState('');
    const Fitness=(<PhotoFitness />)
    const fitnessImage=()=>
    {
       setFitness(Fitness)
    }

    const [events,setEvents]=useState('');
    const Events=(<PhotoEvents />)
    const eventsImage=()=>
    {
       setEvents(Events)
    }

    const showAll=()=>
    {
        setHotel(HotelView)
        setSuits(Suites)
        setFeatures(Features)
        setDining(Dining)
        setFitness(Fitness)
        setEvents(Events)
    }

// useEffect(() => {
//     showAll()
// }, [])

    return (
        <div className={classes.photoContRoot}>
            <Container className={classes.photoContmain}>
                <Grid className={classes.photoContSubGrid3}>
                    <Grid className={classes.photoButtonGrid}>
                   
                        <Button className={classes.photoButtongrp} onClick={showAll}>Show All</Button>
                        <Button className={classes.photoButtongrp} onClick={hotelView}>Hotel Views</Button>
                        <Button className={classes.photoButtongrp} onClick={suitesImg}>Suites</Button>
                        <Button className={classes.photoButtongrp} onClick={featureImage}>Features</Button>
                        <Button className={classes.photoButtongrp} onClick={diningImage}>Dining </Button>
                        <Button className={classes.photoButtongrp} onClick={fitnessImage}>Recreation & Fitness </Button>
                        <Button className={classes.photoButtongrp} onClick={eventsImage}>Events & Meetings </Button>
                        
                   
                    </Grid>
                </Grid>
            </Container>
            
            {hotel}
            {suits}
            {features}
            {dining}
            {fitness}
            {events}    
                
        </div>
    )
}

export default PhotoContent
