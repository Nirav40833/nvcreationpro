import { Container } from "react-bootstrap";
import Footer from "./Footer"
import Menu from "./Menu";
import WOW from 'wowjs';
import { useEffect } from "react";
const Courses = () => {

    useEffect(() => {
      
        new WOW.WOW({
            live: false
        }).init();
      
    }, [])


    return (
        <>
            <Menu />

            <div className="cour_back d-flex justify-content-center align-items-center">
                <h2 className="fw-bolder">Courses</h2>
            </div>

            <div>
                <Container>
                    <div className="p-2">
                        <p>We found <span className="fw-bolder">19</span> courses available for you</p>
                    </div>
                    
                        <div className='row d-flex justify-content-around wow fadeInUp mt-5'>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 1.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2' >
                                    <p><span >All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Ethical Hacking</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 2.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Graphic Designing</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 3.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Excel VBA Macros</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 4.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">C++ Programming</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6 '>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 5.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Cyber Security</p>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-around  wow fadeInUp mt-5'>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 6.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2' >
                                    <p><span >All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Scratch Programming</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 7.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Advanced Python</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 8.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Basic Python</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 9.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Digital Marketing</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6 '>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 10.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">11th / 12th Commerce IT</p>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-around  wow fadeInUp mt-5'>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 11.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2' >
                                    <p><span >All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Android App Developement</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 10.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">11th / 12th Science (Computer Science)</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 12.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Full Stack Development</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 13.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Computer Typing & Data Entry</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6 '>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 14.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Advance Excel</p>
                                </div>
                            </div>
                        </div>

                    6
                        <div className='row d-flex justify-content-evenly wow fadeInUp mt-5'>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 4.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2' >
                                    <p><span >All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Android App Developement</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 15.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">MS-CIT</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 16.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Corporate Excel</p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-sm-6'>
                                <div className='video_gif_img gif_hover'>
                                    <img src={require('./img/img2/asset 17.gif')} ></img>
                                </div>
                                <div className='bg_main mt-2'>
                                    <p><span>All Levels</span></p>
                                </div>
                                <div className='all_hover'>
                                    <p className="fw-bolder">Basic Tally GST</p>
                                </div>
                            </div>

                          
                        </div>

                
                </Container>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}
export default Courses;