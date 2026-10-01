import React from 'react';

function Team() {
    return (  
 <div className='container'>
  <div className='row  mb-5 '>
    <h1 className='text-center mt-2 fs-2 text-muted mr-2'>People</h1>
  </div>

  <div className='row pb-5 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
    <div className='col-6 p-2 text-center'>
      <img
        src="/media/images/md.jpg"
        style={{ borderRadius: "100%", width: "50%" }}
        alt="Nithin Kamath"
      />
      <h4 className='mt-5'>Md Tausim</h4>
      
    </div>

    <div className='col-6 p-2'>
      <p>
        Full Stack Developer focused on building clean, responsive, and real-world web applications with the MERN stack. I enjoy turning ideas into functional products, solving problems through code, and continuously learning modern technologies to become a better developer.

      </p>
      <p>
        He is a passionate Full Stack Developer who continuously explores modern technologies and builds real-world web applications.
.
      </p>
      <p>Playing Tennis  is his zen.</p>
      <p>
        Connect on <a href='#' className='text-decoration-none'>Homepage</a> / <a href='#' className='text-decoration-none'>TradingQnA</a> / <a href='#' className='text-decoration-none'>Twitter</a>
      </p>
    </div>
  </div>
</div>
         
    );
}

export default Team;