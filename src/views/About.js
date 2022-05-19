import React from 'react'

const About = () => {
  return (
    <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">About Us</h6>
                            <h2 className="mt-2">Fast Grouping Algorithm within seconds</h2>
                        </div>
                        <p className="mb-4">The algorithm tries to group people depending on their gender and redistribute them randomly assigning them groups</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Group Achievement</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Gender Quality</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Availabilty 24/7</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Grouping</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={process.env.PUBLIC_URL+"styles/img/about.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About