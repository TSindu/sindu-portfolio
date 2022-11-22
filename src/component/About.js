import React from 'react'

const profile_image = "https://th.bing.com/th/id/OIP.Ce7aFR9zEJPC0gaDJKP41gHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"

function About() {
  return (
    <section id="about" className="d-flex align-items-start">
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">About Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim commodi voluptates pariatur sapiente, porro totam ducimus distinctio nesciunt voluptate id dolores inventore omnis, eligendi ex beatae mollitia officiis exercitationem quo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={profile_image} alt="no image" className='card-img-top'/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body bg-white">
                            <h5 className="text-center text-teal card-title">
                                Personal Details
                            </h5>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non doloremque tenetur velit ipsum.</p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">DOB</strong>
                            <span className="text-teal float-end">07 Aug 2001</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Email</strong>
                            <span className="text-teal float-end">tsindu78@gmail.com</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Mobile</strong>
                            <span className="text-teal float-end">6301717611</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">City</strong>
                            <span className="text-teal float-end">Banglore , Karnataka</span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">Qualification</strong>
                            <span className="text-teal float-end">Bachelor's Degree</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Father's Name</strong>
                            <span className="text-teal float-end">T.Narayanaswamy</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Mother's Name</strong>
                            <span className="text-teal float-end">T.Vijayalakshmi</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Merital Status</strong>
                            <span className="text-teal float-end">Unmarried</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">Skills</h3>
                </div>
            </div>
             

             <div className='row'>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>HTML</strong>
                                <strong className='text-teal float-end'>98%</strong>
                            </p>
                            <div className='progress-bar bg-success' style={{ width: '98%'}}>98%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>CSS</strong>
                                <strong className='text-teal float-end'>70%</strong>
                            </p>
                            <div className='progress-bar bg-warning' style={{ width: '70%'}}>70%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>JQUERY</strong>
                                <strong className='text-teal float-end'>50%</strong>
                            </p>
                            <div className='progress-bar bg-info' style={{ width: '50%'}}>50%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>BOOTSTRAP</strong>
                                <strong className='text-teal float-end'>70%</strong>
                            </p>
                            <div className='progress-bar bg-primary' style={{ width: '70%'}}>70%</div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>JAVASCRIPT</strong>
                                <strong className='text-teal float-end'>50%</strong>
                            </p>
                            <div className='progress-bar bg-secondary' style={{ width: '50%'}}>50%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>REACT</strong>
                                <strong className='text-teal float-end'>40%</strong>
                            </p>
                            <div className='progress-bar bg-info' style={{ width: '40%'}}>40%</div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</div>
    </section>
  )
}

export default About