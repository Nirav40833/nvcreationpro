import { Carousel, Container, Card } from 'react-bootstrap';
import { FaFacebookF, FaBook, FaInstagram, FaTwitter, FaLinkedinIn, FaDatabase, FaBookReader, FaInfoCircle, FaRegCalendarMinus, FaRegCalendarAlt, FaRegCalendar, FaLongArrowAltRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Comp.css';
const Footer = () => {
    return (
        <>
            <div className='footer_back p-2'>
                        
                <Container>
                    <div className='row  mt-5'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3'>
                            <div>
                                <img src={require('./img/asset 53.png')}></img>
                            </div>
                            <div className='mt-5'>
                                <p className='m-0'>Call</p>
                                <p className='fw-bold text-primary'>+91demo</p>
                            </div>
                            <div>
                                Email
                                <p className='fw-bold text-primary'>info@___________</p>
                            </div>
                            <div className='socil_icons'>
                                <i><FaFacebookF /></i>
                                <a> <i className='insta'><FaInstagram /></i></a>
                                <a><i className='text-info'> <FaTwitter /></i></a>
                                <a><i> <FaLinkedinIn /></i></a>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3 fw-semibold '>
                            <h5 className='fw-bold'>Featured Links</h5>
                            <div className='links_hovers mt-4'>
                                <p><i><FaInfoCircle /></i><a>About Us</a></p>
                                <p><i><FaDatabase /></i><a>Course</a></p>
                                <p><i><FaBook /></i><a>Blogs</a></p>
                                <p><i><FaRegCalendarAlt /></i><a>Events</a></p>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3 padding_1'>

                            <h5 className='fw-bolder'>Recent Post</h5>
                            <div className='text_color p-1 mt-4'>
                                <div className='bg-white p-2'>
                                    <p className='fw-bold'> <i><FaRegCalendar /> </i>15/11/2001</p>
                                    <p className='icons_right fw-bolder'><i><FaLongArrowAltRight /></i>Types of Programming languages</p>
                                </div>
                                <div className='bg-white p-2 mt-4'>
                                    <p className='fw-bold'> <i><FaRegCalendar /> </i>15/11/2001</p>
                                    <p className='icons_right fw-bolder'><i><FaLongArrowAltRight /></i>Types of Programming languages</p>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3 '>
                            <h5 className='fw-bolder'>Popular Courses</h5>
                           <div className='silders_2'>
                           <Carousel  id='footer_2' className='mt-4'>
                                <Carousel.Item >
                                <Card.Body className='card_editing' >
                                        <Card.Title><a href='#'>C++ Programming</a></Card.Title>
                                        <p className='p-2'>24 Hours <BsDot />All Levels</p>
                                        <p>
                                        INTRODUCTION TO CYBERSECURITY This course serves as an introduction to …
                                        </p>
                                        
                                    </Card.Body>
                                </Carousel.Item>
                                <Carousel.Item>
                                <Card.Body className='card_editing' >
                                        <Card.Title><a href='#'>Cyber Security</a></Card.Title>
                                        <p className='p-2'>30 Hours <BsDot />Beginner</p>
                                        <p>
                                        INTRODUCTION TO CYBERSECURITY This course serves as an introduction to …
                                        </p>
                                        
                                    </Card.Body>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Card.Body className='card_editing' >
                                        <Card.Title><a href='#'>Scratch Programming</a></Card.Title>
                                        <p className='p-2'>20 Hours <BsDot />Beginner</p>
                                        <p>
                                        INTRODUCTION TO SCRATCH PROGRAMMING What are Visual Editors? Introduction to …
                                        </p>
                                        
                                    </Card.Body>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Card.Body className='card_editing' >
                                        <Card.Title><a href='#'>Scratch Programming</a></Card.Title>
                                        <p className='p-2'>20 Hours <BsDot />Beginner</p>
                                        <p>
                                        INTRODUCTION TO SCRATCH PROGRAMMING What are Visual Editors? Introduction to …
                                        </p>
                                        
                                    </Card.Body>
                                </Carousel.Item>


                            </Carousel>
                           </div>

                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}
export default Footer;