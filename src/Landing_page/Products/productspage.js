import React from 'react';
import Hero from './Hero';
import Leftsection from './leftsection';
import Rightsection from './Rightsection';
import Footer from '../Footer';
import Universe from './Universe';
function Productspage() {
    return ( 
       <>
       <Hero/>
       <Leftsection 
       Imageurl='media/Kite.png'
       Productname="Kite" 
       Productdescription="Our ultra-fast flagship trading platform with streaming market data advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
       Trydemo="" 
       Learnmore="" 
       Googleplay="" 
       Appstore="">
       </Leftsection>
        
        <Rightsection 
        Productname="Console" 
        Productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Kiteconnect="" 
        Imageurl="media/console.png"
        Differenturl="Learn more ">
        </Rightsection>


        <Leftsection 
       Imageurl='media/coin.png'
       Productname="Coin" 
       Productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
       Trydemo="" 
       Googleplay="" 
       Appstore="">
       </Leftsection>
        
        <Rightsection 
        Productname="Kite Connect API" 
        Productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Kiteconnect="" 
        Imageurl="media/kiteconnect.png"
        Differenturl="Kite Connect">
        </Rightsection>

        <Leftsection 
       Imageurl='media/varsity.png'
       Productname="Varsity mobile" 
       Productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
       Trydemo="" 
       Learnmore="" 
       Googleplay="" 
       Appstore="">
       </Leftsection>
       <Universe/>
       
       </>
     );
}

export default Productspage;