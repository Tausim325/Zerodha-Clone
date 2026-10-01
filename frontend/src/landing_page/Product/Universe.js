import React from 'react';

function Universe() {
    return (
<div className="container mt-5"> 
  <div className="row text-center mb-5">
    <div className="col-12">
      <h3 className='text-muted pb-3'>The Zerodha Universe</h3>
      <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
    </div>
  </div>

  <div className="row text-center">
    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
      </p>
    </div>

    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
      </p>
    </div>

    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/partners/tijori.svg" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
      </p>
    </div>
  </div>
  
  <div className="row text-center">
    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/products/streak-logo.png" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Systematic trading platform that allows you to create and backtest strategies without coding.
      </p>
    </div>

    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/products/smallcase-logo.png" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
      </p>
    </div>

    <div className="col-4 p-4">
      <img src="https://zerodha.com/static/images/products/ditto-logo.png" style={{ maxWidth: "180px" }} />
      <p className="text-muted small mt-3">
        Personalized advice on life and health insurance. No spam and no mis-selling.
      </p>
    </div>
                 <button  className='p-2 btn btn-primary fs-5 mb-5'  style={{width : "20%", margin : "0 auto"}}>SignUp For Free</button>
  </div>
</div>
      );
}

export default Universe;