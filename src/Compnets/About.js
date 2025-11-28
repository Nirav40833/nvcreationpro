import { BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher, FaInstagram, FaLaptop, FaLinkedin, FaUsers } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Menu from "./Menu";
import Footer from "./Footer";
import './Comp.css'
import { Container } from "react-bootstrap";
const About = () => {
    return (
        <>
            <div className='p-2'>
                <Menu />
            </div>

            <div className='about_p d-flex justify-content-center align-items-center'>
                <h1 className="fs-1">About Us</h1>
            </div>

            <div className='text-center mt-5'>
                <h1 className='fw-bold p-4' >Get to know us better</h1>
                <p className="mt-2">Start a new way of acquiring skills with SITH Computers</p>
            </div>
            

            <div className="main_better">
                <Container>

                    <div className="row d-flex">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center cock_hover mt-3">
                            <div className="icon_cock">
                                <i><BiTimeFive /></i>
                                <h3>10</h3>
                            </div>
                            <div className="fw-bolder">
                                <p>Years of Institute Experience</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center cock_hover mt-3">
                            <div className="icon_cock">
                                <i><FaUsers /></i>
                                <h3>14,228</h3>
                            </div>
                            <div className="fw-bolder">
                                <p>Students Enrolled in SITH Courses</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center cock_hover mt-3">

                            <div className="icon_cock">
                                <i><FaChalkboardTeacher /></i>
                                <h3>45</h3>
                            </div>
                            <div className="fw-bolder">
                                <p>Qualified Instructors and Experts</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center cock_hover mt-3">

                            <div className="icon_cock">
                                <i><HiOutlineBuildingOffice2 /></i>
                                <h3>300+</h3>
                            </div>
                            <div className="fw-bolder">
                                <p>Years of Institute Experience</p>
                            </div>

                        </div>


                    </div>

                </Container>
            </div>


            <div className="main_special">
                <Container>
                    <div className="text-center">
                        <h2 className="fw-bolder">What Make Us Special?</h2>
                        <p>Let us take you through journey of SITH like a great magic trick</p>
                    </div>
                    <div className="row d-flex justify-content-between mt-5">
                        <div className="col-lg-4 col-12 mt-2 text-center">
                            <div className="spcial_img">
                                <div className="hover_img_spcial" >
                                    <img src={require('./img/about1-1.jpg')}></img>
                                </div>
                            </div>
                            <div className="text-center m-4">
                                <p>
                                    SITH Computers came into existence on April 15th, 2010 by His Divine Holiness Hariprasad Swamiji. Started an institution with a philosophy of imparting quality education to IT & Commerce field students. 		</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-2 text-center">

                            <div className="spcial_img">
                                <div className="hover_img_spcial" >
                                    <img src={require('./img/about2-1.jpg')}></img>
                                </div>
                            </div>

                            <div className="text-center m-4">
                                <p>
                                    SITH Computers came into existence on April 15th, 2010 by His Divine Holiness Hariprasad Swamiji. Started an institution with a philosophy of imparting quality education to IT & Commerce field students. 		</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-2 text-center">

                            <div className="spcial_img">
                                <div className="hover_img_spcial" >
                                    <img src={require('./img/about3-1.jpg')}></img>
                                </div>
                            </div>

                            <div className="mar_media text-center m-4">
                                <p>
                                    SITH Computers came into existence on April 15th, 2010 by His Divine Holiness Hariprasad Swamiji. Started an institution with a philosophy of imparting quality education to IT & Commerce field students. 		</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="m-5">

                <div className="">
                    <h1>Our Premium Offers</h1>
                </div>

                <Container>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 main_better_bg1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icons_pre_1 p-3">
                                        <i><FaLaptop /></i>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h5>Live Project Practice</h5>
                                    <p>
                                        Get a access to practice & work on live projects
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icons_pre_1 p-3">
                                        <i><FaLaptop /></i>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h5>Career Guidance Workshop</h5>
                                    <p>
                                        Get a access to practice & work on live projects
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icons_pre_1 p-3">
                                        <i><FaLaptop /></i>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h5>Live Project Practice</h5>
                                    <p>
                                        Get a access to practice & work on live projects
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icons_pre_1 p-3">
                                        <i><FaLaptop /></i>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h5>1:1 Mock Interview</h5>
                                    <p>
                                        Get a access to practice & work on live projects
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icons_pre_1 p-3">
                                        <i><FaLaptop /></i>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h5>Best Career Opportunity</h5>
                                    <p>
                                        Get a access to practice & work on live projects
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 bg_workshop">
                            <div>
                                <img src={require('./img/preoffer.jpg')}></img>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <div className="meet_our">
                        <h5 className="fw-bolder">Meet Our Team</h5>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 5.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 6.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 7.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 8.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 9.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 10.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 11.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 12.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 13.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 14.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 16.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 17.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 17.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 17.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <div className="mens_photo">
                                <img src={require('./img/assets/asset 17.png')}></img>
                            </div>
                            <div>
                                <h5>Mahendra Dora</h5>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="p-4">
                <Footer />
            </div>

        </>
    )
}
export default About;