import React,{useState} from 'react'
import {Container,makeStyles,Typography,Grid,Card,CardMedia,CardActionArea,CardActions} from '@material-ui/core'
import { Button,Modal } from '@material-ui/core'
import HambergMenuIcon from './HambergMenuIcon.png'
import { FeatureArray } from './PhotoImages'
import './PhotoPageStyle.css'
import CloseIcon from '@material-ui/icons/Close';

const useStyles=makeStyles((theme)=>({
  
    PhotoModal:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "7rem 8rem"
        
    },
    ModalMain: {
        padding: "3.75rem",
        maxWidth: "73.75rem",
        background: "#fff",
        margin: "0 auto ",      
        position: "relative",
        zIndex: "1045",
        borderRadius: ".25rem",
        verticalAlign: "middle",
        textAlign: "left"
      },
   
    ModalContentMain:
    {
        padding:"0",
        maxWidth: "58.75rem",
        position: "relative",
        margin: "0 auto"
    },
    ModalContentHeading:
    {
        marginRight: "1.5rem",
        fontFamily: "Tipperary eText Semibold,Helevtica,Arial,sans-serif",
        fontWeight: "400",
        textTransform: "uppercase",
        margin: "0",
        fontSize: "2rem",
        lineHeight:"2.25rem" 
    },
    ModalContentPara:
    {
        marginTop: "3.75rem",
        marginBottom: "0",
        fontWeight: "600",
        fontSize: "1.25rem",
        lineHeight: "1.25",
        fontFamily: "proxima-nova,Helvetica,Arial,sans-serif"
    },
    IconButton:
    {
        top: "3.25rem",
        right: "3.25rem",
        position: "absolute",
       
    },
    CloseIcon:
    {
        height: "2.75rem",
        width: "2.75rem",
        // color:"black",
        stroke:"black",
        strokeWidth:"1",
        cursor:"pointer"
      
    }
    
     
  }))

function PhotoFeatures() {
    const classes=useStyles();
 
  const [open, setOpen] = React.useState(false);
  const [imageId,setImageId] = useState(0)
    const handleOpen=( id )=> {
      setImageId(id)
        setOpen(true);
       
    };
    const handleClose=()=> {
        setOpen(false);
        
      };
  

    return (
        <div className="photoCardsRoot">
            <Typography className="photoCardsHeading" >
                FEATURES
            </Typography>

            <Container className="photoContainerGrid">
               <Grid container spacing={4}>

                   {
                       FeatureArray.map((fimage,key)=>{
                         return(
                                <Grid item  xs={12} sm={6} md={4}>
                                   <CardActionArea>
                                       <Card square className="photoImageCard">
                                         <CardMedia 
                                          className="photocardMedia"
                                          image={fimage.img_src}
                                          title="Image title"
                                          /> 
                                       </Card>
                                   </CardActionArea>
                                   <CardActions className="photoIconButton">
                                        <Button onClick={()=> handleOpen(fimage.img_id)}>
                                           <img src={HambergMenuIcon}  width="45.1rem" alt=""/>
                                        </Button>
                                        <Typography className="photoIconTitle">{fimage.img_name}</Typography>
                                   </CardActions>
                                </Grid>)
                            })
                   }
                    <Modal className={classes.PhotoModal}
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="simple-modal-title"
                       aria-describedby="simple-modal-description">
                        <Grid className={classes.ModalMain}>
                            <Grid>
                                <Grid className={classes.ModalContentMain}>
                                    <h2 className={classes.ModalContentHeading}>{FeatureArray[imageId].modal_title}</h2>
                                    <p className={classes.ModalContentPara}>{FeatureArray[imageId].modal_content}</p>
                                </Grid>
                                <Grid className={classes.IconButton}>
                                    <CloseIcon className={classes.CloseIcon} onClick={handleClose}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>
                 
                   



                    
                    

               </Grid>
            </Container>

        </div>
    )
}

export default PhotoFeatures


