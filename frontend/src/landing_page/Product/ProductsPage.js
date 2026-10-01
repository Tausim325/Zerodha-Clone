import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection
            imageURL="media/images/kite.png"
            productName="Kite"
            productDesription="Our ultra-fast flagship trading platform with streaming market data, 
            advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            link1="Try demo"
            link2="Learn more "
            errow1={<i className="fa fa-long-arrow-right"></i>}
            errow2={<i className="fa fa-long-arrow-right"></i>}
            googlePlay=""
            appStore=""
            />  
            <RightSection 
            imageURL="media/images/console.png"
            productName="Console"
            productDesription="The central dashboard for your Zerodha account. 
            Gain insights into your trades and investments with in-depth reports and visualisations."
             link="learnMore"
            />
            <LeftSection
            imageURL="media/images/coin.png"
            productName="Coin"
            productDesription="Buy direct mutual funds online, commission-free, 
            delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            link="Coin"
             errow1={<i className="fa fa-long-arrow-right"></i>}
            link2="Coin"
           
            googlePlay=""
            appStore=""
            /> 
            <RightSection 
            imageURL="media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
            If you are a startup, build your investment app and showcase it to our clientbase." 
            link="Kite Connect "
            errow1={<i className="fa fa-long-arrow-right"></i>}
           />
            <LeftSection
            imageURL="media/images/varsity.png"
            productName="Varsity Mobile"
            productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.
             Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
            />  
           <div className="container text-center mt-5 mb-5">
          <p className="text-muted fs-5 ">
          Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer">Zerodha.tech</a> blog.
         </p>
        </div>
            <Universe />
        </>
    );
}

export default ProductsPage;