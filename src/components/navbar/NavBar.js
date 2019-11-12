import React, { Component } from 'react'
import HamburgerMenu from "react-hamburger-menu"

export default class NavBar extends Component {
    render() {
        return (
            <header class="position-relative">
            <div class="menus">
                <div  style={{height:"70px"}} class="pre-header d-flex align-items-center">
                        <div class="container">
                            <div class="row d-flex align-items-center justify-content-center justify-content-sm-start">
                                <div class="col-lg-2 col-md-3 col-1 logo">
                               
                                 <a href="">
                                    
                                     <img src="https://ekstat.com/img/new-design/eksisozluk_logo.svg" class="d-none d-md-block" alt="" />
                                 </a>
                                </div>
                               
                                <div class="offset-lg-1 col-lg-4 col-md-8 col-10">
                                    {/* <!-- Search form --> */}
                         <form class="form-inline md-form form-sm mt-0">
                           <input class="form-control form-control-sm  ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" />
                            <div style={{height:"30px"}} class="bg-success d-flex justify-content-center align-items-center text-light px-2">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                            </div>
                         </form>
                      
                                </div> 
                      
                            </div>
                        </div>
                    </div>
                
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
           
    
           
                <ul class="navbar-nav d-flex align-items-center">
                <li class="nav-item px-4">
                    <a class="nav-link link-nav font-weight-normal" href="#">gündem</a>
                </li>
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#">canlibahis</a>
                    </li>
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#">debe</a>
                </li>
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#">sorunsallar</a>
                </li>
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#">#spor</a>
                </li>
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#">#ilişkiler</a>
                </li>
               
                <li class="nav-item px-4">
                        <a class="nav-link link-nav font-weight-normal" href="#"><i class="fas fa-ellipsis-h"></i></a>
                </li>
                <li class="nav-item d-flex">
                    <a href="" class="nav-link link-nav mr-2">
                        <img style={{height:"25px",width:"25px"}} src="https://yt3.ggpht.com/a/AGF-l7_M7CTSzl_MuC4TecMUGD0pnqFT5LD8xS1oaA=s288-c-k-c0xffffffff-no-rj-mo" alt=""/> pena
                    </a>
                     <a href="" class="nav-link link-nav">
                        <img style={{height:"25px",width:"25px"}} src="https://yt3.ggpht.com/a/AGF-l7_M7CTSzl_MuC4TecMUGD0pnqFT5LD8xS1oaA=s288-c-k-c0xffffffff-no-rj-mo" alt=""/> pena
                    </a>
                </li>
                
                </ul>
              
            
            </nav>
            </div>
        </div>
        <div class="container fixed-top">
        <div class="d-flex justify-content-between py-3">
                <img class="d-md-none" style={{height:"20px",width:"20px"}} src="https://ekstat.com/img/ilogo_smallv2.png" alt="" />
                <div className="d-block d-lg-none">
                <HamburgerMenu
                menuClicked={this.props.click}
                width={18}
                height={15}
                strokeWidth={2}
                rotate={0}
                color={this.props.show?"white":"black"}
                borderRadius={0}
                animationDuration={0.3}
                 />
                </div>
            </div>
        </div>
           
        </header>
        )
    }
}
