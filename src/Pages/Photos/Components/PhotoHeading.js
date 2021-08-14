import React from 'react'
import {Grid,Typography,makeStyles, Container} from "@material-ui/core"
import PhotoContent from './PhotoContent';
const useStyles = makeStyles((theme) => ({
    photoRoot:
    {
        padding:"0",
        margin:"0",
        width:"100%",
        backgroundColor: "white"
    },
    photoMainGrid:
    {
        backgroundColor: "#fff",
        paddingBottom: "1.875rem",
        paddingTop: "1.875rem",
        marginBottom: 0,
        display: "block"
    },
    photoSubGrid:
    {
        maxWidth: "73.75rem",
        position: "relative",
        margin: "0 auto",
        padding: "0 1.25rem"
    },
    photoSubGrid2:
    {
        float: "right",
        marginRight: "0"
    },
    photoSubGrid3:
    {
        paddingBottom: "0",
        padding:"2.5rem 0 1.875rem" 
    },
    photoHeading:
    {
        fontSize:"2.75rem",
        fontFamily: "Tipperary eText Semibold,Helevtica,Arial,sans-serif",
        fontWeight: "400",
        textTransform: "uppercase",
        textAlign: "center",
        margin: "0",
        lineHeight: "3rem",
        padding: "0",
        letterSpacing:"0"
    },
    photoDesGrid:
    {
        paddingBottom: "0",
        marginBottom: "0",
        top: "-1.25rem",
        width: "100%",
        textAlign:"center",
        // position:"absolute" 
    },
    photoSubHeading:
    {
        textTransform: "lowercase",
        margin: 0,
        fontFamily: "proxima-nova,Helvetica,Arial,sans-serif",
        fontWeight: "600",
        fontSize: "1.25rem",
        lineHeight:" 1.5rem",
        padding: "20px",
        textAlign:"center",
        paddingBottom:"1.875rem" 
    },
}))

function PhotoHeading() {
    const classes = useStyles();
  return (
        <div className={classes.photoRoot}>
            <Container className={classes.photoMainGrid}>
                <Grid classname={classes.photoSubGrid}>
                    <Grid classname={classes.photoSubGrid2}>
                        <Grid classname={classes.photoSubGrid3}>
                          <h2 className={classes.photoHeading}>PHOTOS AND VIDEOS</h2>
                        </Grid>
                        <Grid className={classes.photoDesGrid}>
                           <h3 className={classes.photoSubHeading}>32 photos for this hotel</h3>
                        </Grid>
                    </Grid>
                </Grid> 
            </Container>
            <PhotoContent />
        </div>
    )
}

export default PhotoHeading
