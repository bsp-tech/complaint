import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Complain extends Component {
   
    state={
        more:false,

    }
    render() {
        const onSeeMore=e=>{
            this.setState({more:!this.state.more})
        }
        return (
            <div className="post mt-5">
            <Link className="text-dark" to="/"><h4 className="font-weight-bold">{this.props.title}</h4></Link>
            {this.props.desc.length>250
            ?this.state.more?<p className="text-muted mt-3 content">{this.props.desc} <span className="text-primary seemore" onClick={onSeeMore}>see less</span> </p>:<p className="text-muted mt-3 content">{this.props.desc.substring(0,250)} <span className="text-primary seemore" onClick={onSeeMore}>see more</span> </p>
            :<p className="text-muted mt-3 content">{this.props.desc}</p>}
           
           <div className="d-block d-sm-flex justify-content-between align-items-center">
               <div className="d-flex mb-2">
                   <div className="d-flex mr-5">
                       <Link to="/" className="mr-3"><i className="fab fa-facebook-f text-muted fa-sm"></i></Link>
                       <Link to="/"><i className="fab fa-twitter text-muted fa-sm"></i></Link>
                   </div>
                   <div className="d-flex">
                         <div className="d-flex">
                             <Link to="/" className="mr-3"><i className="fas fa-chevron-down text-muted fa-sm"></i></Link>
                             <Link to="/"><i className="fas fa-chevron-up text-muted fa-sm"></i></Link>
                            
                         </div>
                     </div>
               </div>
               <div className="d-flex">
                   <Link to="/" style={{fontSize:"12px"}} className="text-muted mr-2"><span>13.09.2019 11:55</span></Link>
                   <Link to="/" className="text-success mr-2" style={{fontSize:"12px"}}>reklam</Link>
                   <Link to="/" className="text-success mr-2" style={{fontSize:"12px"}}><i className="fas fa-ellipsis-h"></i></Link>
                 </div>
           </div>
         </div>
        )
    }
}
