import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {Link} from "react-router-dom"
import Complain from "../components/Complain"
import NavBar from "../components/navbar/NavBar"
import SideBar from "../components/sidebar/SideBar"

export default class Home extends Component {
    state={
        sideBar:false
    }
    menuClick= () => {
        this.setState(prevState=>{
            return {sideBar:!prevState.sideBar}
        })
    }
    render() {
        return (
                <>
                 <NavBar click={this.menuClick} show={this.state.sideBar}/>
                 <SideBar show={this.state.sideBar}/>
            
            <div className="d-block d-sm-block d-md-none my-5"></div>
            
            
            <section>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
            
                        <Link role="button" to="/create" className="btn btn-success mt-5">Add Complain</Link>
                        <Complain title="online üniversite" desc="yaklaşık bir yıl önce hayalini kurduğum araba a5.sonra dayanamayıp gidip palio aldım.mtv'si düşük, az yakıyor, park yeri sorunuda yok.detaya girmem gerekirse, ön camlar otomatik.dikkat ettiyseniz detayda bile boğmuyor.çokzel."/>
                        <Complain title="oğlum süpersiniz lan" desc="yaklaşık bir yıl önce hayalini kurduğum araba a5.sonra dayanamayıp gidip palio aldım.mtv'si düşük, az yakıyor, park yeri sorunuda yok.detaya girmem gerekirse, ön camlar otomatik.dikkat ettiyseniz detayda bile boğmuyor.çokzel."/>
                        <Complain title="online üniversite" desc="yaklaşık bir yıl önce hayalini kurduğum araba a5.sonra dayanamayıp gidip palio aldım.mtv'si düşük, az yakıyor, park yeri sorunuda yok.detaya girmem gerekirse, ön camlar otomatik.dikkat ettiyseniz detayda bile boğmuyor.çokzel.yaklaşık bir yıl önce hayalini kurduğum araba a5.sonra dayanamayıp gidip palio aldım.mtv'si düşük, az yakıyor, park yeri sorunuda yok.detaya girmem gerekirse, ön camlar otomatik.dikkat ettiyseniz detayda bile boğmuyor.çokzel.yaklaşık bir yıl önce hayalini kurduğum araba a5.sonra dayanamayıp gidip palio aldım.mtv'si düşük, az yakıyor, park yeri sorunuda yok.detaya girmem gerekirse, ön camlar otomatik.dikkat ettiyseniz detayda bile boğmuyor.çokzel."/>
                    
                    </div>
                    <div className="col-md-3 mt-5">
                    <Iframe url="https://www.facebook.com/v3.0/plugins/page.php?adapt_container_width=true&amp;app_id=151735074873255&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df309d3e8201841c%26domain%3Deksisozluk.com%26origin%3Dhttps%253A%252F%252Feksisozluk.com%252Ff1e0ac623761be8%26relation%3Dparent.parent&amp;container_width=300&amp;hide_cover=false&amp;to=https%3A%2F%2Fwww.facebook.com%2Feksiseyler%2F&amp;locale=tr_TR&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;width=250"
                    width="250px"
                    height="130px"
                    display="initial"
                    position="relative"/>
                        {/* <iframe name="f11d0fcb84d30d8" style={{width:"250px",height:"1000px"}} width="250px" height="1000px" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.0/plugins/page.php?adapt_container_width=true&amp;app_id=151735074873255&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df309d3e8201841c%26domain%3Deksisozluk.com%26origin%3Dhttps%253A%252F%252Feksisozluk.com%252Ff1e0ac623761be8%26relation%3Dparent.parent&amp;container_width=300&amp;hide_cover=false&amp;to=https%3A%2F%2Fwww.facebook.com%2Feksiseyler%2F&amp;locale=tr_TR&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;width=250" style="border: none; visibility: visible; width: 250px; height: 130px;" className=""></iframe> */}
                    </div>
                </div>
                </div>
            </section>
            </>
        )
    }
}
