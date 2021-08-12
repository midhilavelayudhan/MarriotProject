import React,{ useState } from 'react'
import './Localarea.css'

function Localdetails() {
    function Para(props) {
        return(
            <div>
                {props.para? <p className="localattractions3c1">{props.para}</p>:null}
                {props.links? <p className="localattractions3c2">{props.links}</p>:null }
                {props.location? <p className="localattractions3c3" >{props.location}</p>:null }

            </div>

        )
    }
    var para=["Historic Downtown and Courthouse Plaza","Prescott Gateway Mall","Harkins Movie Theater"]
    var link=["Watson Lake","Thumb Butte Recreation Area","Phippen Museum","Goldwater Lake","Lynx Lake","Sharlot Hall Museum"," Smoki Museum","Yavapai County Courthouse","Heritage Park Zoological Sanctuary","Freedom Station Family Fun Center","Grand Canyon National Park","Out of Africa Wildlife Park"]
    var location=["Downtown","4701 U.S. 89 N","Gateway Blvd."," 415 West Gurley St.","147 N. Arizona St."," 120 S Cortez St","1403 Heritage Park Rd","2992 N Park Ave A","S Entrance Rd","3505 W State Route 260"]

    var activity1=["Biking trail (3 miles)","Hiking (4 miles)","Kayaking (3 miles)","Sauna (5 miles)","Hunting (5 miles)","Bike Rentals (3 miles)"]
    var activity2=["Bowling (7 miles)","Horseback riding (5 miles)","Mountain biking, trail (2 miles)","Snow skiing (120 miles)","Nature preserve, trail (5 miles)"]
    var activity3=["Fly-fishing (4 miles)","Jogging/fitness trail (5 miles)","Miniature golf (15 miles)","Tennis (1 mile)","Rock climbing (5 miles)"]

    return (      
        
        
        
        <div>

            <div className="localattractions">
                <h2>LOCAL ATTRACTIONS</h2>
             <div className="localattractionsmain">
                <div className="localattractions1">
                   <Para para={para[0]}/>
                   <Para location={location[0]}/>
                   <Para links={link[0]}/>
                   <Para links={link[1]}/>
                   <Para links={link[2]}/>
                   <Para location={location[1]}/>
                   <Para links={link[3]}/>
                   <Para links={link[4]}/>
                </div>
                <div className="localattractions2">
                   <Para para={para[1]}/>
                   <Para location={location[2]}/>
                   <Para para={para[2]}/>
                   <Para links={link[5]}/>
                   <Para location={location[3]}/>
                   <Para links={link[6]}/>
                   <Para location={location[4]}/>
                   <Para links={link[7]}/>
                   <Para location={location[5]}/>

                </div>

                <div className="localattractions3">
                    <Para links={link[8]}/>
                   <Para location={location[6]}/>
                   <Para links={link[9]}/>
                   <Para location={location[7]}/>
                   <Para links={link[10]}/>
                   <Para location={location[8]}/>
                   <Para links={link[11]}/>
                   <Para location={location[9]}/>
                </div>
             </div>
             <div style={{background:"#f4f4f4",width:"100%",height:"20px"}}></div>
            </div >
            <div className="fitness">
            <h2>FITNESS NEARBY</h2>
            <div className="fitness1">
                <p style={{fontFamily:"proxima-nova,Helvetica,Arial,sans-serif",fontSize:"8.9px"}}>1 MILE</p>
                <h3 style={{marginTop:"-4px",color:"#007576",fontSize:"19px"}}>YMCA</h3>
                <p className="fitnessp1">Hours: Mon,Tue,Wed,Thu,Fri: 05:00 AM - 11:00 PM, Sat: 06:00 AM - 08:00 PM, Sun: 09:00 AM - 06:00 PM</p>
                <p className="fitnessp2">Cardiovascular Equipment</p>
                <p className="fitnessp2">Free weights</p>
                <p className="fitnessp2">Additional equipment: Full weight room, cardio room, spinning, gymnasium, pool</p>
                <p className="fitnessp2">Fitness classes: Fee</p>
                <p className="fitnessp2">Fitness services: Personal Training, Full Aquatic Center,</p>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px"}}></div>
            </div>
            <div className="spa">
                <h2>SPA NEARBY</h2>
                <div className="spa1">
                    <div className="spa1left">
                    <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>A Massage Envy Spa</h3>
                    <p className="spa1leftp1">Need to find the perfect place for customized, affordable and convenient Prescott facials and massages? It's right in your own backyard at Prescott Massage Envy Spa.</p>
                    <p className="spa1leftp2">Hours: Sun: 10:00 AM - 06:00 PM, Mon,Tue,Wed,Thu,Fri: 09:00 AM - 09:00 PM, Sat: 08:00 AM - 09:00 PM</p>
                    <p className="spa1leftp2">Phone:+1 928-778-3689</p>
                    <p className="spa1leftp3">Services, Treatments and Amenities</p>
                    <ul>
                        <li className="spa1leftp4">
                        Couple's Massage
                        </li>
                        <li className="spa1leftp4">Facials</li>
                        <li className="spa1leftp4">Massages</li>
                    </ul>
                    </div>
                    <div className="spa1right">
                    <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Mind Body & Soul</h3>
                    <p className="spa1leftp1">Hours: Mon,Tue,Wed,Thu,Fri: 09:00 AM - 06:00 PM, Sun: 11:00 AM - 05:00 PM, Sat: 10:00 AM - 06:00 PM</p>
                    <p className="spa1leftp2">Appointment is Required</p>   
                    <p className="spa1leftp2">Phone:+1 928-776-6474</p> 
                    <p className="spa1leftp3">Services, Treatments and Amenities</p>
                    <ul>
                    <li className="spa1leftp4"> Body scrub</li>
                    <li className="spa1leftp4">Body wrap</li>
                    <li className="spa1leftp4">Facials</li>
                    <li className="spa1leftp4">Massages</li>
                    <li className="spa1leftp4">Paraffin hand treatments</li>
                    <li className="spa1leftp4">Steam room</li>
                    <li className="spa1leftp4">Therapy baths</li>
                  
                    </ul>
                    </div>
                </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px"}}></div>
            <div className="golf">
                <h2>GOLF NEARBY</h2>
                <div className="golf1">
                    <div className="golf11">
                    <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Antelope Hills</h3>
                    <p className="golfp1">Phone: +1 928-776-7888</p>
                    <p className="golfp1">Rentals and Lessons</p>
                    <p className="golfp1">Driving range and Putting green</p>
                    <p className="golfp1"><span style={{fontWeight:"600"}}>Antelope Hills <br /></span>36 holes, 6000 yards, Par for course: 71 Designed by Lawrence Hughes</p>
                    </div>
                    <div className="golf12">
                    <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Stoneridge</h3>
                    <p className="golfp1">Hours: Sun up to Sun down</p>
                    <p className="golfp1">Phone: +1 928-772-6500</p>
                    <p className="golfp1">Rentals and Lessons</p>
                    <p className="golfp1">Driving range and Putting green</p>
                    <p className="golfp1"><span style={{fontWeight:"600"}}>Stoneridge <br /></span>18 holes, 7052 yards, Par for course: 72 Designed by Randy Heckenkemper</p>
                    </div>
                    <div className="golf13">
                    <h3 style={{marginTop:"5px",color:"black",fontSize:"19px"}}>Quail Wood</h3>
                    <p className="golfp1">Hours: 6:30am to Dark</p>
                    <p className="golfp1">Phone: +1 928-772-0130</p>
                    <p className="golfp1">Rentals and Lessons</p>
                    <p className="golfp1">Driving range and Putting green</p>
                    <p className="golfp1"><span style={{fontWeight:"600"}}>Quail Wood<br /></span>18 holes,5258 yards, Par for course: 67</p>
                    </div>
                </div>
                <div className="golf14">
                    <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Prescott Golf & Country Club</h3>
                    <p className="golfp1">Phone: +1 800-717-7274</p>
                    <p className="golfp1">Rentals and Lessons</p>
                    <p className="golfp1">Driving range and Putting green</p>
                    <p className="golfp1"><span style={{fontWeight:"600"}}>Prescott Golf & Country Club<br /></span>18 holes, 6655 yards, Par for course: 72 Designed by Milt Coggins</p>
                </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"38px"}}></div>
            <div className="area">
            <h2>AREA SIGHTSEEING</h2>
            <div className="area1">
                <div className="area11">
                <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Arizona ATV Adventures</h3>
                <p className="golfp1">Sedona, Prescott, Camp Verde</p>    
                <p className="golfp1">Arizona ATV Adventures</p>
                <p className="golfp1">Phone: +0 800 242; ext= 6335</p>
                </div>
                <div className="area12">
                <h3 style={{marginTop:"5px",color:"#007576",fontSize:"19px"}}>Rubicon Outdoors</h3>
                <p className="golfp1">Prescott, Verde Valley, Grand Canyon</p>    
                <p className="golfp1">Rubicon Outdoors</p>
                <p className="golfp1">Phone: +1 800-903-6987</p>
                </div>
                
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"38px"}}></div>
            </div>
            <div className="localpartners">
            <h2>LOCAL PARTNERS</h2>
            <div className="localpartners1">
                <div className="localpartners11">
                <p className="golfp1">Prescott Chamber of Commerce</p>
                <p className="golfp1">Prescott Backcountry Tours</p>
                </div>
                <div className="localpartners12">
                <p className="golfp1">Rubicon Outdoors</p>
                </div>
            </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"28px"}}></div>
            <div className="activity">
                <h2>MORE ACTIVITIES</h2>
                <div className="activity1">
                    <div className="activity11">
                    {
                        activity1.map((obj,key)=>{
                            return(
                                <p className="golfp1">{obj}</p>
                            )
                        })
                    }
                    </div>
                    <div className="activity12">
                    {
                        activity2.map((obj,key)=>{
                            return(
                                <p className="golfp1">{obj}</p>
                            )
                        })
                    }  
                    </div>
                    <div className="activity13">
                    {
                        activity3.map((obj,key)=>{
                            return(
                                <p className="golfp1">{obj}</p>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"18px"}}></div>
            <div className="family">
                <h2>FAMILY AND CHILDREN'S ACTIVITIES</h2>
                <div className="family1">
                    <div className="family11">
                    <p className="familyp1">Historic Dowtown & Courthouse Plaza</p>
                    <p className="familyp2">Year 'round activities include arts & crafts shows, concerts & family events</p>
                    </div>
                    <div className="family12">
                    <p className="familyp1">Historic Court House</p>
                    </div>
                    <div className="family13">
                    <p style={{fontFamily:"proxima-nova,Helvetica,Arial,sans-serif",fontSize:"9.6px",position:"relative",top:"9px"}}>1 MILE</p>
                    <p className="familyp1">Sharlot Hall Museum</p>
                    <p className="familyp2">Learn about Prescott's history at the largest museum in Arizona's central territory</p>
                    </div>
                    
                </div>

            </div>
            <div style={{background:"#f4f4f4",width:"100%",height:"20px",marginTop:"0px"}}></div>
      
        </div>
    )
}

export default Localdetails
