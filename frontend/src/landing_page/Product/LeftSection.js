import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDesription,
    link1, 
    link2, 
    errow1,
    errow2,
    googlePlay, 
    appStore}
    ){
    return (  
  <div className="container">
  <div className="row">
  {/* image section */}
  <div className="col-5 pe-5">
  <img src={imageURL} />
    </div>
    <div className='col-2'></div>
    {/* context section */}
    <div className="col-5 p-5 ">
      <h2 className="text-muted">{productName}</h2>
      <p>{productDesription}</p>
     
      <div>
       <a href={link1} className="text-decoration-none">{link1} {errow1}</a>
       <a href={link2} className="text-decoration-none ms-5">{link2} {errow2}</a>
     </div>
      <div className='mt-3'> 
      <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
      <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"40px"}}/></a>
      </div>
    </div>  
  </div>
</div>
    );
}

export default LeftSection;