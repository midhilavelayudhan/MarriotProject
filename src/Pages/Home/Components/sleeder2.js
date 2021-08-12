import React,{useState} from 'react'
import './sleeder.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import keyimage from './keyimage.png'
import keyimagemobile from './keyimagemobile.jpg'

export default function Sleeder2() {
    const [showmore, setShowmore] = useState(false);
    return (
        <div>
            <div className="Overviewbody1">
                <div className="Overview1">
                    <h1 className="overviewhead">
                    DOWNTOWN PRESCOTT HOTEL OFFERS CONFERENCE SPACE, INDOOR POOL
                    </h1>
                    <div className="Rewards">
                    <p style={{color:"#575757",fontWeight:"600",fontSize:"14px"}}>Rewards Category 4 <span style={{marginLeft:"9px",color:"#007576",fontWeight:"100"}}>Points needed per night</span> </p>
                    </div>
                    <p className="Overviewp1">The SpringHill Suites by Marriott in downtown Prescott is perfectly located in the heart of the city. Our friendly associates will greet you with a welcoming smile that makes you feel at home. Our comfortable fireplace lobby is the central gathering place for friends and family or just curling up with a book. Our indoor heated pool and spa is open all year long and large glass doors open out to the adjacent patio that offers a fire-pit to enjoy and a BBQ grill for guests to use. Each mini-suite is spacious and includes all the comforts of home. Microwave,
                    </p>
                    {showmore? <p style={{marginTop:"-15px",width: "788px"}}>mini-fridge, sink, pantry space, coffeemaker, hair dryer, iron and board and flat screen 37 inch TV. Need some extra space? Our one bedroom suite includes a living area with fireplace, separate bedroom and Jacuzzi tub. If you are in Prescott on business, our business library offer two PC workstations and printers free for guests. A special feature for electric vehicle drivers - we now have a dual port electric vehicle charging station</p> : null}
                     <span className="Showmorebtn" onClick={()=>setShowmore(!showmore)}>Show More</span>
                </div>
                <div className="Overview2">
                    <img src="http://cdnp1.yieldoptimizer.com/img/i/73987d932dd0a768fcb8f278e2989865/" alt="" />
                </div>
            </div>
            <div className="reviewsection">
                    <p className="reviewsectionhead">GUEST REVEIWS</p>
                    <div className="reviewsection1">
                        <div className="reviewsectionmain" style={{display:"flex"}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <div class="wrapper"><div class="one"></div><div class="two"></div></div>
                        <div><h3 className="rate">4.6 out of 5.0</h3></div>
                        </div>
                        <div className="reviewright">
                            <p className="reviewhear">Hear from our guests about their stay from <span style={{color:"#0f807f",textDecoration:"underline",fontWeight:"bold",fontSize:".8rem"}}>800 confirmed guest reviews</span></p>
                        </div>
                    </div>
                    <div className="reveiwsection2">
                        <div>
                        <p style={{color:"#1c1c1c",fontWeight:"100"}}>Cleanliness</p>
                        <div style={{display:"flex",marginLeft:"-4px"}}>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <div>
                        <div class="wrapper2"><div class="one2"></div><div class="two2"></div></div></div>
                        <p className="rate2">4.7</p>
                        </div>

                        </div>

                        <div className="reveiwsection22">
                        <p style={{color:"#1c1c1c",fontWeight:"100"}}>Service</p>
                        <div style={{display:"flex",marginLeft:"-4px"}}>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <span className="dot2"></span>
                        <div>
                        <div class="wrapper2"><div class="one2"></div><div class="two2"></div></div></div>
                        <p className="rate2">4.7</p>
                        </div>

                        </div>

                    </div>

                </div>
                <div className="marriot">
                    <div className="marriot1">
                        <img src="https://cache.marriott.com/marriottassets/Loyalty/credit-card/Bonvoy-chase/credit-card-education-5x2.png?&interpolation=progressive-bilinear&downsize=600px:*" alt="" />
                    </div>
                    <div  className="marriot2">
                        <h3>Marriott Bonvoy™ Credit Cards</h3>
                        <p>Earn More Points & Enjoy Special Benefits</p>
                    </div>
                    <div  className="marriot3"> 
                    <button className="marriotbtn">
                        LEARN MORE
                    </button>
                    </div>
                </div>
                <div className="marriot4"></div>
                <div className="key">
                    <h1 className="key1">KEY AMENITIES</h1>
                    <div className="key11">
                        <img style={{width:"720px",height:"100px",marginLeft:"350px"}} src={keyimage} alt="" />
                        <div style={{display:"flex",marginLeft:"369px",marginTop:"-10px"}}>
                        <p style={{fontWeight:"100",fontSize:"14px"}}>Kitchenette</p>
                        <p style={{fontWeight:"100",fontSize:"14px",marginLeft:"90px"}}>Free high-speed internet</p>
                        <p style={{fontWeight:"100",fontSize:"14px",marginLeft:"85px"}}>Free breakfast</p>
                        <p style={{fontWeight:"100",fontSize:"14px",marginLeft:"115px"}}>Pet friendly</p>
                        </div>
                        <button className="keybtn1">ALL HOTEL DETAILS</button>
                        <button className="keybtn2">ACCESSIBILITY</button>
                        <div style={{background:"grey",height:".5px",width:"1215px",marginLeft:"160px"}}></div>
                    </div>
                    <div className="key11mobile">
                        <div>
                        <img style={{width:"56px",height:"260px",marginLeft:"29px",marginTop:"10px"}} src={keyimagemobile} alt="" />
                        </div>
                        <div style={{marginLeft:"0px",marginTop:"10px"}}>
                        <p style={{fontWeight:"100",fontSize:"15px",marginLeft:"15px"}}>Kitchenette</p>
                        <p style={{fontWeight:"100",fontSize:"15px",marginTop:"60px",marginLeft:"15px",width:'200px'}}>Free high-speed internet</p>
                        <p style={{fontWeight:"100",fontSize:"15px",marginLeft:"15px",marginTop:"40px"}}>Free breakfast</p>
                        <p style={{fontWeight:"100",fontSize:"15px",marginLeft:"15px",marginTop:"40px"}}>Pet friendly</p>
                        </div>
                    </div>
                    <div className="key11mobile11">
                    <button className="keybtnmobile1">ALL HOTEL DETAILS</button> <br />
                    <button className="keybtnmobile2">ACCESSIBILITY</button>
                    <div style={{background:"#0f807f",height:"1.2px",width:"323px",marginLeft:"16px",marginTop:"35px"}}></div>
                    </div>
                    
                </div>
                <div className="marriotlast">
                    <img src="http://cdnp1.yieldoptimizer.com/img/i/d872f9d637ba6d0c83d45e1be07cf445/" alt="" />
                </div>
        </div>
    )
}
