import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './sleeder.css'

function Cards(props) {
    return (
        <div>
<Card className="guestroomcard11">
        <CardMedia>
            <img style={{height:"13.3125rem",width:"100%"}} src={props.image}/>
        </CardMedia>
        <CardContent>
            <h3 className="Cardhead">{props.head}</h3>
            <p className="Cardpara">{props.dis}</p>
            <button className="Cardbtn">CHECK RATES</button>
        
        </CardContent>
    </Card>
    
        </div>
    )
}

export default Cards
