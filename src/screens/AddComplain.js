import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class AddComplain extends Component {
    render() {
        return (
            <>
            <div className="p-0 position-absolute w-100 h-100 bg-dark d-flex align-items-center">
            <div className="container">
             <div style={{borderRadius:20}} className="col-md-6 py-4 px-3 mx-auto bg-white text-center p-0">
                     <h4 className="mb-4">Add Complain</h4>
                     <div className="row">
                         <div className="col-md-8 mx-auto">
                              <form>
                                      <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Title"/>
                                      </div>
                                      <div className="form-group">
                                        <textarea className="form-control complain" placeholder="Write your complain"></textarea>
                                      </div>
                                      <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">İstifadəçi <Link to="/create" data-toggle="modal" data-target="#exampleModalLong">qaydaları</Link> ilə razıyam</label>
                                      </div>
                                      <button type="submit" className="btn btn-success mt-4">Submit</button>
                                    </form>
                                
                          </div>
                     </div>
                   

                   
                  
          </div>
      </div>
          </div>
          <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">İstifadəçi qaydaları</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ul>
                            <li className="my-1">Paylaşılan şikayətlərə görə sayt rəhbərliyi heç bir məsuliyyət daşımır</li>
                            <li className="my-1">Şikayətçinin heç bir məlumatı saytda öz saytda əksini tapmır.</li>
                            <li className="my-1">Bütün şikayətlər anonim olaraq sayt istifadəçilərinə görünəcək</li>
                        </ul>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success">Təsdiq edirəm</button>
                      </div>
                    </div>
                  </div>
                </div>
                </>
        )
    }
}
