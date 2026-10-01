import React from 'react';

function Hero() {
    return ( 
    <div style={{ backgroundColor: "#f5f5f5" }} className="border-bottom pb-4">
      <div className="container pt-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <h1 className="fw-bold">Support Portal</h1>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">My tickets</button>
          </div>
        </div>

        <div className="row mt-3">
        <div className="input-group"><span className="input-group-text bg-white border-end-0"> 
        <i className="fa fa-search text-muted"></i></span>
              
        <input
                type="text"
                className="form-control border-start-0"
                placeholder="Eg: How do I open my account, How do i activate F&O..."
              />
            </div>
          </div>
        
      </div>
    </div>
     );
}

export default Hero;