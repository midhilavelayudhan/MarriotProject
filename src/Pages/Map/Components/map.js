import React,{useState} from 'react'
import './map.css'

export default function Maps() {
    const [start, setStart] = useState(false)

    return (
        <div className="Mapsection">
            <h1>MAPS AND TRANSPORTATION</h1>
        <div className="Map1">
        <iframe className="iframe1" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13145.288905747982!2d-112.467124!3d34.545396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b8f3a3c9adf9459!2sSharlot%20Hall%20Museum!5e0!3m2!1sen!2sus!4v1627281441559!5m2!1sen!2sus" width="1060" height="420" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <iframe className="iframe2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13145.288905747982!2d-112.467124!3d34.545396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b8f3a3c9adf9459!2sSharlot%20Hall%20Museum!5e0!3m2!1sen!2sus!4v1627281441559!5m2!1sen!2sus" width="300" height="190" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
           <div className="drivindirection1">
                <h2>DRIVING DIRECTIONS</h2>
                <div className="drivindirection11">
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
            <div style={{marginTop:"35px"}} className="localsection32">
                    <img src="http://cdnp1.yieldoptimizer.com/img/i/d872f9d637ba6d0c83d45e1be07cf445/" alt="" />
            </div>
            <div className="airport">
                <h2>AIRPORT INFORMATION</h2>
                <div className="airport1">
                    <div className="airportleft">
                    <p className="airportp1">Prescott Municipal Airport (PRC)</p>
                    <p  className="airportp2">Airport Phone: +1 928-777-1114</p>
                    <p  className="airportp2">Hotel direction: 9.8 miles S</p>
                    <p  className="airportp3">This hotel does not provide shuttle service.</p>
                    <ul>
                        <li  className="airpotleftp4">
                            Alternate transportation: Shuttle U; fee: 34 USD (one way) ;reservation required
                        </li>
                        <li className="airpotleftp4" >
                        Estimated taxi fare: 20 USD (one way)
                        </li>
                    </ul>
                    <p style={{color:"#007576"}} className="airportp2">Visit PRC airport website</p>
                    <p className="airportp2" style={{fontWeight:"600",marginTop:"2px"}} >Driving directions</p>
                    <p className="airportp5">Right onto Highway 89. Merge onto Sheldon Street. 200 E. Sheldon, SpringHill Suites will be on your Right.</p>
                    </div>

                    <div className="airportright">
                    <p className="airportp1">Phoenix Sky Harbor International Airport (PHX)</p>
                    <p  className="airportp2">Airport Phone: +1 602-273-3300</p>
                    <p  className="airportp2">Hotel direction: 108 miles N</p>
                    <p  className="airportp3">This hotel does not provide shuttle service.</p>
                    <ul>
                        <li  className="airpotleftp4">
                           Alternate transportation: Shuttle U; fee: 34 USD (one way)
                        </li>
                    </ul>
                    <p style={{color:"#007576"}} className="airportp2">Visit PHC airport website</p>
                    <p className="airportp2" style={{fontWeight:"600",marginTop:"2px"}} >Driving directions</p>
                    <p className="airportp5"> I-17 north to Highway 69. Highway 69 to Prescott. Highway 69 to Sheldon. Right onto Sheldon. SpringHill Suites will be on your RIGHT.</p>
                    </div>
                </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"40px"}}></div>   
            <div className="parking">
                <h2>PARKING</h2>
                <div className="parking1">
                    <div className="parking11">
                        <p className="parkingp1">Electric car charging stations: 3, For a fee</p>
                    </div>
                    <div className="parking12">
                        <p className="parkingp1">On-site parking, fee: 5 USD daily</p>
                    </div>
                </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"40px"}}></div>   
            <div className="other">
                <h2>OTHER TRANSPORTATION</h2>
                <div className="other1">
                    <div className="other11">
                        <p className="airportp1">Car Rentals</p>
                        <p className="otherp2">Nearby <br />Hertz <br />6500 Maccurdy Drive <br />Prescott, AZ 86301 <br />Phone: +1 928-776-1399</p>
                        <p className="otherp3">Enterprise Rent-A-Car <br />1299 E Gurley St<br />Prescott, AZ 86301 <br /> Phone: +1 928-778-6506</p>
                        <p className="otherp4">Avis <br />3400 Gateway Boulevard<br />Prescott, AZ 86301<br /> Phone: +1 928-771-9870</p>

                    </div>
                    <div className="other12">
                        <p className="airportp1">Bus Station</p>
                        <p className="otherp2">Prescott Transit Authority</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
