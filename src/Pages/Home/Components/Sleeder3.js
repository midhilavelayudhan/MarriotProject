import React from 'react'
import './sleeder.css'
import Cards from "./Cards"
import Cards2 from './Cards2'
function Sleeder3() {
    var head=['Studio','Studio','1 Bedroom Suite']
    var dis=['2 Queen, Sofa bed','1 King, Sofa bed','1 King, Sofa bed, Fireplace']
    var image=['https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-queen-suite-4787-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*','https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-king-suite-4791-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*','https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-king-bedroom-4801-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*']
    var head1=['Do it all with our app','Our Lowest Price. Instant Benefits. Only on Marriott.com','Senior Discounts']
    var dis1=['Receive alerts when your room is ready, chat with your hotel, redeem points and more.','Enjoy instant benefits like our Best Rate Guarantee, Mobile Check-In, Free Wi-Fi and earn free nights only when you book directly on Marriott.com.','If you’re 62 years or older, you can save at least 10% on your room rate at Marriott hotels.']
    var image1=["https://cache.marriott.com/marriottassets/marriott/legacy/Mobile_app_banner.jpg?downsize=*:152px&interpolation=progressive-bilinear","https://cache.marriott.com/marriottassets/marriott/legacy/Banner_Mobile_Marriott_1520x608[3].jpg?downsize=*:152px&interpolation=progressive-bilinear"]
    var Cardbtn=["DOWNLOAD TODAY","SEE DETAILS","SAVE WITH SENIOR DISCOUNTS"]
    return (
        <div className="Overviewfinal">
            <h1 className="highlights">HIGHLIGHTS</h1>
            <div className="highlights11">
                <div className="highlights1">
                    <p>Walking distance to the Courthouse Plaza, Whiskey Row and local restaurants and shopping</p>
                </div>
                <div className="highlights1">
                    <p>Dual port electric vehicle charging station and Tesla adapter free for overnight guests</p>
                </div>
                <div className="highlights1">
                    <p>Indoor heated salt pool with adjacent outdoor patio with fire-pit and BBQ grill</p>
                </div>
            </div>
            <div className="highlightsline" >
            </div>
            <div className="Overviewfinal1">
                <p>Awards & Accolades</p>
                <div>
                    <img src="https://www.marriott.com/marriottassets/marriott/partner-logos/2021-Trip-Advisor-Travelers-Choice-logo.png?downsize=80px:*" alt="" />
                    <img style={{marginLeft:"19px"}} src="https://www.marriott.com/marriottassets/marriott/partner-logos/2017_Trip_Advisor_Green_Partner.png?downsize=80px:*" alt="" />
                </div>
            </div>
            <div className="guestrooms">
                <h2 className="guestroomshead" >GUEST ROOMS</h2>
                <p className="guestroomsp" >A spacious mini-suite awaits you</p>
                <div className="guestCards">
                    <Cards image={image[0]} head={head[0]} dis={dis[0]}/>
                    <Cards image={image[1]} head={head[1]} dis={dis[1]}/>
                    <Cards image={image[2]} head={head[2]} dis={dis[2]}/>
                    </div>
                    <div style={{textAlign:"center",marginTop:"40px"}}>
                        <button className="guestroomsbottombtn">VIEW ALL GUEST ROOMS</button>
                    </div>

            </div>
            <div className="promotions">
                <h2 className="promotionshead" >PROMOTIONS FOR YOU</h2>
                <div className="promotionscards">
                <Cards2  image1={image1[0]} head1={head1[0]} dis1={dis1[0]} Cardbtn={Cardbtn[0]} />
                <Cards2  image1={image1[1]} head1={head1[1]} dis1={dis1[1]} Cardbtn={Cardbtn[1]} />
                <Cards2   head1={head1[2]} dis1={dis1[2]} imag1={null} Cardbtn={Cardbtn[2]}/>
                </div>
                <div>
                    <img className="overviewfinalimg1" style={{marginTop:"10px",marginLeft:"280px"}} src="https://cache.marriott.com/marriottassets/marriott/legacy/promotions/DIG20004_HWS_JOIN_mar2020_970x250.jpg" alt="" />
                    <img className="overviewfinalimg" src="https://cache.marriott.com/marriottassets/marriott/legacy/promotions/HWS-MB-Join_300x250_EN.jpg" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Sleeder3;
