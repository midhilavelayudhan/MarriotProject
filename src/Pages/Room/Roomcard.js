import { Accordion, AccordionSummary,
     Button, Card, CardActionArea, CardContent, CardMedia, 
     Grid, IconButton, makeStyles, Modal, Typography,AccordionDetails } from "@material-ui/core";
import React, { useState } from 'react';
import './Room.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles=makeStyles((theme) => ({
    cardGrid:{
      marginTop:'20px',
      marginBottom:'70px',
      paddingLeft:'20px'
      
    },
    roomCard:{
        width:380
           },
    roomImage:{
        height:253,
        
    
    },
     texton:{
    left:"left",
       
     },
    text:{
        fontSize: '.875rem',
    },
    headertitle:{
        marginTop:'40px',
       
    fontWeight:'bolder',
    textTransform:'uppercase',
    fontSize:'25px',
    },headertitle2:{

        
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:'20px',
    },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        marginLeft:'600px',
      },

    
}));

export default function Roomcard({roomDetails}){
    const classes=useStyles();
    const [open,setOpen]=useState(false);
    const [current,setCurrent]=useState(0);
    const [slides,setSlides]=useState([]);
    const[activeslide,setActiveslide]=useState(0);
    const [textpopup,setTextPopup]=useState(false)
    const [mainRoom,setMainroom]=useState(1);
  
    const [expanded, setExpanded] = useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    function handleroomModalopen(event){
        setOpen(true);
        roomDetails.map((item)=>{
            if(event===item.room_id){
            setCurrent(event);
            
            setSlides(roomDetails[event-1].modal_images);
            
    
            }
        })
        
        
    }
   
    function handleroomModalclose(){
        setOpen(false);
    }
    const maxSlides=slides.length-1;
    
    
    const prevSlide=()=>{
        setActiveslide(activeslide===0 ? maxSlides : activeslide-1)
    }

    const nextSlide=()=>{
        setActiveslide(activeslide===maxSlides ? 0 : activeslide+1)
    }
    
    const textPopupon=()=>{
        setTextPopup(true);
        
    }
    const textoff=()=>{
        setTextPopup(false)
        
    }
    const totalRoom=3;
    const toprightarrowClick=()=>{
        
    //    
    setMainroom(current) 
    console.log("first"+mainRoom)
        
        setMainroom(mainRoom===3 ? 1 :mainRoom+1)
        console.log("secondtime"+mainRoom)  
        handleroomModalopen(mainRoom)
}
    const topleftarrowClick=()=>{
        setMainroom(mainRoom===1 ? totalRoom :mainRoom-1)
        console.log("bakward"+mainRoom)
    }
    return<>
        {
            roomDetails.map((rooms)=>{
                return <Grid item className={classes.cardGrid}>
                <Card className={classes.roomCard}>
                    <CardActionArea  >
                        <CardMedia onClick={()=>handleroomModalopen(rooms.room_id)} className={classes.roomImage} image={rooms.room_image} ></CardMedia>
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h5" style={{fontWeight:'bolder'}}>{rooms.room_title}</Typography>
                        <Typography>{rooms.room_details}</Typography>
                    </CardContent>
                    <CardActionArea>
                        <Button variant="contained" color="primary" >CHECK RATES</Button>
                    </CardActionArea>
        
                 </Card> 
                 <Modal open={open}
                 onClose={handleroomModalclose}
                 className="mainmodal"><>
                <div className="modalContent">
                {roomDetails.map((item,index)=>{
                            return <>
                            {current===index+1 &&
                            <div className="headersection">
                            <Typography className={classes.headertitle} gutterBottom>{item.room_title}</Typography>
                            <Typography className={classes.headertitle2} gutterBottom>{item.room_details}</Typography>
                            
                            </div>}
                            
                            
                            </>
                        })}
                        <div className="headercounter">
                            Room {current} of 3
                        </div>
                        <KeyboardArrowRightIcon fontSize="large" className="toprightArrow"  onClick={toprightarrowClick}/>
                        <KeyboardArrowLeftIcon fontSize="large" className="topleftArrow" onClick={topleftarrowClick} />
                        <CloseIcon fontSize="large" className="topclose" onClick={handleroomModalclose} />
                            
                    <div className="sliderContent">
                        <KeyboardArrowLeftIcon fontSize="large" className="leftArrow" onClick={prevSlide}/>
                        <KeyboardArrowRightIcon fontSize="large" className="rightArrow" onClick={nextSlide}/>
                        
                        {slides.map((item,index)=>{
                            return <div className="imageContainer">
                               
                            {activeslide===index &&
                            <>
                            <img className="images" src={item.image}/>
                               
                                 {textpopup ? 
                                    <div className="textPopup">
                                        <RemoveIcon style={{color:'white',backgroundColor:'black',marginRight:'10px'}} 
                                            fontSize="large" onClick={textoff}/>
                                        <Typography className={classes.text}>{item.text}</Typography>
                                    </div>:
                                    <div className="popup">
                                        <IconButton onClick={textPopupon}>  
                                            <AddIcon disabled={true} style={{color:'white'}} 
                                                fontSize="large" color="action" className={classes.texton} />
                                        </IconButton>
                                    </div>}
                                    <div className="outersection">
                                    <Typography className="roomOuterText">{item.outer_text}</Typography>
                            
                            <Typography>Images may not fully represent the room features you booked.</Typography>
                            </div>
                            <span className="roomSpan">Room {index+1} of {slides.length}</span>
                            </>}
                            
                            </div>
                            
                            
                        })}
                    </div>
                    
                    {/* {slides.map((item,index)=>{
                            return <div className="outersection">
                            
                            {activeslide===index &&
                            <>
                            <Typography className="roomOuterText">{item.outer_text}</Typography>
                            <span className="roomSpan">Room {index+1} of {maxSlides}</span>
                            <Typography>Images may not fully represent the room features you booked.</Typography>
                            </>}
                    </div>})}
                     */}
                     
                    
                
                <div className="accordiondetails">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Room Overview</Typography>
          <Typography className={classes.secondaryHeading}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
          
          <li>Room Features</li>
          <li>550sqft/50sqm</li>
          <li>Air-conditioned</li>
          <li>This room is non-smoking</li>
          <li>Connecting rooms are not available</li>
          <li>Living/sitting area</li>
          <li>Living room is separated</li>
          <li>Windows may be opened</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      
      </div>
      </div> 
      </>  
                     
                 </Modal> 
                 </Grid>       
            })} 
            
        <div className="notebox">
        <Typography>Please note: all room sizes are approximate.</Typography>
        </div>
    </>
    

}