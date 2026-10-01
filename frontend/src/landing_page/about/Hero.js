import React from 'react';

function Hero() {
    return (
        <div className='container'>
        <div className='row p-5 mb-5 mt-5'>
         <h1 className='fs-4 text-center text-muted'>I build modern full stack applications, combining creativity<br></br>problem solving,and technology to create meaningful digital</h1>
        </div>

          <div className='row p-5  border-top mt-3'>
          <div className='col-6'>
            <p className='text-muted'> I started my journey in web development with the goal of turning ideas into practical and user-friendly digital experiences. With a strong interest in Full Stack Development, I work with modern technologies like MongoDB, Express.js, React.js, and Node.js to build complete web applications.</p>
            <p className='text-muted'>Through my projects and continuous learning, I have developed experience in creating responsive interfaces, REST APIs, authentication systems, database-driven applications, and full stack solutions.</p>
             <p className='text-muted'>I enjoy solving problems through code, exploring new technologies, and continuously improving my development skills. My goal is to grow as a Full Stack Developer and build meaningful, scalable, and real world applications.</p>
          </div>
          <div className='col-6'>
           <p className='text-muted'>In addition to building full-stack web applications, I continuously explore new technologies, tools, and development practices to expand my skills..</p>
           <p className='text-muted'><a href='#' className='text-primary text-decoration-none'>Rainmatter</a>,  I work on personal and practical projects that help me strengthen my understanding of frontend development, backend development, databases, APIs, authentication, and modern web technologies.</p>
           <p className='text-muted'>
            on the latest updates on our <a href='#' className='text-primary text-decoration-none'>blog</a> or see what the media is <a href='#' className='text-primary text-decoration-none'>saying about us</a> or learn more about our business and product <a href='#' className='text-primary text-decoration-none'>philosophies</a>.</p>
          </div>
        </div>
        </div>
      );
}

export default Hero;