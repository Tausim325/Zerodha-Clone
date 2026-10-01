import React from 'react';

function RightSection({
  imageURL, 
  productName, 
  productDesription,
   learnMore="",
   link=""
}) {
    return (  
 <div className="container mt-5">
  <div className="row align-items-center">
    {/* context section */}
    <div className="col-4 pb-5">
      <h2 className="text-muted mb-3">{productName}</h2>
      <p className="text-muted fs-6 mb-3">{productDesription}</p>
      <a href={learnMore} className="text-decoration-none">
        {link} &rarr;
      </a>
    </div>

    <div className="col-1"></div>

    {/* image section */}
    <div className="col-7 mb-5">
      <img src={imageURL} className="img-fluid" alt={productName} />
    </div>
  </div>
</div>
    );
}

export default RightSection;