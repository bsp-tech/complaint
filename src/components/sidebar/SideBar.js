import React, { Component } from 'react'
import "./SideBar.css"

export default class SideBar extends Component {
    render() {
        let drawerClasses="sidebar"

        if(this.props.show) {
            drawerClasses="sidebar open"
        }

        

        
        return (
            <nav className={drawerClasses}>
              <form class="form-inline sidebar-form">
                           <input class="form-control form-control-sm sidebar-input" type="text" placeholder="Search"
                            aria-label="Search" />
                            <div style={{height:"30px"}} class="d-flex justify-content-center align-items-center text-light px-2">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                            </div>
              </form>
              <ul className="sidebar-menu mt-4 list-inline d-flex flex-column align-items-center">
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li class="nav-item my-2">
                    <a class="text-white link-nav font-weight-normal" href="#">gündem</a>
              </li>
              <li className="nav-item my-2">
              <a class="text-white link-nav font-weight-normal" href="#"><i class="fas fa-ellipsis-h"></i></a>
              </li>
              <li class="nav-item d-flex my-2">
                    <a href="" class="text-white link-nav mr-2">
                        <img style={{height:"25px",width:"25px"}} src="https://yt3.ggpht.com/a/AGF-l7_M7CTSzl_MuC4TecMUGD0pnqFT5LD8xS1oaA=s288-c-k-c0xffffffff-no-rj-mo" alt=""/> pena
                    </a>
                     <a href="" class="text-white link-nav">
                        <img style={{height:"25px",width:"25px"}} src="https://yt3.ggpht.com/a/AGF-l7_M7CTSzl_MuC4TecMUGD0pnqFT5LD8xS1oaA=s288-c-k-c0xffffffff-no-rj-mo" alt=""/> pena
                    </a>
              </li>
                
              </ul>
            </nav>
        )
    }
}
