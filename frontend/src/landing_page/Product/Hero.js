import React from 'react';

function Hero() {
    return ( 
       
        <div className='containder border-bottom mb-5'>
        <div className='text-center mt-5 p-5 pb-5'>
         <h2 className="text-muted ">Zerodha Products</h2>
         <h4 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h4>
         <p className="text-muted pt-3 mb-5">Check out our <a href="" style={{ textDecoration: "none" }}> 
          investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
         </a></p>
        </div>
        </div>
     );
}

export default Hero;