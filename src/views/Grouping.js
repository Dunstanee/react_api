import React from 'react'

const Grouping = () => {
  return (
    <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Smart Algorithm</h6>
                    <h2 className="mt-2">What Solutions We Provide</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item  rounded">
                            <div className='d-flex flex-column justify-content-center text-center'>
                                <div className="service-icon flex-shrink-0">
                                    <h4>Import Data Form</h4>
                                    <hr style={{color:"blue"}}/>
                                </div> 
                            </div>
                            
                            <form method='POST'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div class="row">
                                            <label for="" className='col-lg-3'>Choose File</label>
                                            <div className='form-group col-lg-5'>
                                                <input className=' form-control' type="file" name="csvFile"/>
                                            </div>
                                            <div className='form-group col-lg-4'>
                                                <button className='btn btn-primary' type="button"><i className="fa fa-upload me-2"></i> Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item  rounded">
                            <div className='d-flex flex-column justify-content-center text-center'>
                                <div className="service-icon flex-shrink-0">
                                    <h4>Draft Groups</h4>
                                    <hr style={{color:"blue"}}/>
                                </div>
                            </div>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead className='theader'>
                                        <th>Sno</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Group Name</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                        <tr>
                                            <td>#</td>
                                            <td>Dunstan Safu</td>
                                            <td>Male</td>
                                            <td>Group1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Grouping