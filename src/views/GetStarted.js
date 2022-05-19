import React from 'react'

const GetStarted = () => {
  return (
    <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: 250}}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">Ready to get started</h3>
                        <small className="text-white">Upload a csv file of data containing users info</small>
                        
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height: 250}} src={process.env.PUBLIC_URL+"styles/img/newsletter.png"}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default GetStarted