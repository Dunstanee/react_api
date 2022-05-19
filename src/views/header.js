import React from 'react'


const Header = () => {
  return (
      <div>
    <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-fire me-2"></i>Smart<span className="fs-5">Grouping</span></h1>
                    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="" className="nav-item nav-link active">Home</a>
                    </div>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated zoomIn">You need Help to make a teamor groups?</h1>
                            <p className="text-white pb-3 animated zoomIn">We got you covered. We provide solutions in making groups or team with the help of a strategic method to distribute Male and Female equally without bias.</p>
                            <a href="" className="btn btn-success py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"><i className="fa fa-thumbs-up me-2"></i> Donate</a>
                            <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"><i className="fa fa-phone me-2"></i> Contact Us</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid" src="img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  )
}

export default Header