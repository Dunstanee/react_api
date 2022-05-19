import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i>Nairobi, Kenya</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+254 115 652 190</p>
                        <p><i className="fa fa-envelope me-3"></i>dunstansafu@gmail.com</p>
                        
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <h5 className="text-white mb-4">Project Gallery</h5>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={process.env.PUBLIC_URL+"styles/img/portfolio-1.jpg"} alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={process.env.PUBLIC_URL+"styles/img/portfolio-2.jpg"} alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>
                            The best time to practice harder is when you feel like to give up on something. Sometimes you don't have to fight to be a man
                        </p>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Smart-Grouping</a>, All Right Reserved. 
							
							Developed By <a className="border-bottom" href="">@dunstan</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer