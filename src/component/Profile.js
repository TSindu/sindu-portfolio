import React from 'react'

export default function Profile(props) {
  return (
   <section id="profile" className="mt-5 profile">
    <section className='section-title'>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="display-3 text-teal text-center">T.Sindu</h3>
                <p className='text-justify text-secondary'>MERN Fullstack developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines.This quality and results-based approach drove me to collaborate with the teams to create a responsive highly scalable web applications.Eager to obtain a challenging position at a prestigious company like a dream  version that will expand my learning and build upon my developer skills.</p>
            </div>
        </div>
    </div>
   </section>

   <section id="education">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3 className="profile-title">Education</h3>
                    <div className="profile-item pb-0">
                        <h4>Bachelor's Degree</h4>
                        <h5>year: 2021</h5>
                        <p>Sri Vivekananda degree collage</p>
                        <p>Dharmavaram</p>
                    </div>
                    <div className="profile-item pb-0">
                        <h4>Intermediate</h4>
                        <h5>year: 2018</h5>
                        <p> Sri saikrupa junior collage</p>
                        <p>Dharmavaram</p>
                    </div>
                    <div className="profile-item pb-0">
                        <h4>SSC</h4>
                        <h5>year: 2016</h5>
                        <p>Municipal girls high school</p>
                        <p>Dharmavaram</p>
                    </div>
            </div>
        <div className='col-md-6'>
            <h3 className='profile-title'>Training</h3>
            <div className='profile-item'>
                <h4>MERN Fullstack Development</h4>
                <h5>year: 2022</h5>
                <p>Be-Practical Tech Solutions</p>
                <p>Bengaluru</p>
            </div>
        </div>
    </div>
    </div>
   </section>
   </section>
  )
}

