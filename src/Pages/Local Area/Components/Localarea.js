import React from 'react'
import { useState } from 'react'
import './Localarea.css'

export default function Localarea() {
    const [start, setStart] = useState(false)
    return (
        <div>
            <div className="localsection1">
                <h1>LOCAL AREA</h1>
                <img src="https://cache.marriott.com/marriottassets/marriott/SH/sh-local-area-0001-hor-feat.jpg?downsize=1440px:*" alt="" />
            </div>
            <div className="localsection2">
                <h2>DRIVING DIRECTIONS</h2>
                <div className="localsection21">
                    <div className="localsection21left">
                        <p className="localsection21leftp1">SpringHill Suites Prescott</p>
                        <p className="localsection21leftp2">200 East Sheldon Street <br /> Prescott, Arizona 86301 USA</p>
                        
                        {start? <div style={{display:"flex"}}> <span onClick={()=>setStart(!start)} className="checkdot2"></span><p className="checkdotp">Start here</p><span style={{marginLeft:"22px"}} className="checkdot1"></span> <p className="checkdotp">End here</p></div> : <div style={{display:"flex"}}><span className="checkdot1"></span><p className="checkdotp">Start here</p><span onClick={()=>setStart(!start)}  style={{marginLeft:"22px"}} className="checkdot2"></span> <p className="checkdotp">End here</p></div>}
                    </div>
                    <div className="localsection21right">
                    <form>
                        <label className="label1" style={{fontSize:"12px"}}>
                            Location
                        </label> <br />
                        <input className="direction" type="text" name="name" />
                        <br />
                        <input className="directionbtn" type="submit" value="GET DIRECTIONS" />
                    </form>
                    </div>
                </div> 
            </div>
            <div className="localsection3">
                <h2>EXPERIENCE YEAR-ROUND ATTRACTIONS AND EVENTS</h2>
                <div className="localsection31">
                    <p className="localsection31p1">Prescott's 50 mile Circle Trail for hiking and biking</p>
                    <p className="localsection31p2" >Historic Whiskey Row shops and saloons</p>
                    <p className="localsection31p3">Grand Canyon National Park only two hours away</p>
                </div>
                <div className="localsection32">
                    <img src="http://cdnp1.yieldoptimizer.com/img/i/d872f9d637ba6d0c83d45e1be07cf445/" alt="" />
                </div>
            </div>
        </div>
    )
}
