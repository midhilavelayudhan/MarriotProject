import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './sleeder.css'
import CardActions from '@material-ui/core/CardActions';

function Cards2(props) {
    return (
        <div>
<Card className="secondcard">
        <CardMedia>

            {props.image1? <img style={{height:"9.1rem",width:"100%"}} src={props.image1}/> : null}
        </CardMedia>
        <CardContent>
            <div><h3 className="Cardhead">{props.head1}</h3></div>
            <p className="Card2para">{props.dis1}</p>
        </CardContent>   
    </Card>
    <div style={{marginLeft:"33px",position:"relative",bottom:"56px",marginTop:"20px"}}>
    <p style={{fontSize:".7rem",color:"#007576",fontWeight:"100"}}>{props.Cardbtn} <ArrowForwardIosIcon style={{fontSize:'14px',bottom:"-4px",position:"relative",marginLeft:'5px',color:"#007576"}}/></p>
    </div>
        </div>
    )
}

export default Cards2
