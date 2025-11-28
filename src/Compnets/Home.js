import { input, Container, Button, Carousel, Card } from 'react-bootstrap';
import Menu from './Menu';
// import Footer from './Footer';
import { FaChalkboardTeacher, FaHandsHelping, FaChevronRight, FaFacebookF, FaRegCalendarAlt, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Comp.css';
import Footer from './Footer';
import WOW from 'wowjs';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
      
        new WOW.WOW({
            live: false
        }).init();
      
    }, [])
    

    return (
        
        <>
            {/* Heading */}
            <div className='back_img_fixed p-2'>
                <Menu />
                <div className='cricals_img_1'>
                            <img src={require('./img/asset 1.png')}></img>
                </div>
                <div className='cricals_img_2'>
                            <img src={require('./img/asset 3.png')}></img>
                </div>
                <div className='container'>
                    {/* <div className='crical_img'>

                    <img decoding="async" width="179" height="178" src={require('./img/asset 1.png')} class="attachment-full size-full" alt="" sizes="(max-width: 179px) 100vw, 179px" />
                </div> */}
                    <div className='row wow fadeInUp'>
                        <div className="col titale_1 p-300">
                            <h2 className='fw-bolder '>There's Always</h2>
                            <h2 className='new'>something <span>New</span> to learn!</h2>
                        </div>
                    </div>
                </div>



                <div className='container pp-300 wow fadeInUp'>
                    <div className='d-flex justify-content-around'>
                        <div className='serch_imgbar'>
                            <img src={require('./img/asset 2.jpeg')}></img>
                        </div>
                        <div className='sreach_bar ' >
                            <input placeholder='Explore some new skills' type="search" className='p-4' title='search'></input>
                        </div>
                        <div className='serch_imgbar img_srech'>
                            <img src={require('./img/asset 4.jpeg')}></img>
                        </div>
                    </div>
                </div>
                {/* Con - 1  start*/}

                <div className='p-300 '>
                    <Container>
                        <div className='row m-5 wow fadeInUp'>
                            <div className='col-lg-4 col-12 text_conts'>
                                <i className='icons_tech'><FaChalkboardTeacher /></i>
                                <div >
                                    <h4>Experienced Faculties</h4>
                                    <p className=''>We have highly qualified and experienced faculties with industry experience.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-12 12 text_conts'>
                                <i className='icons_tech'><FaHandsHelping /></i>
                                <div>
                                    <h4>Personal Attention</h4>
                                    <p>Personal attention is what the students need in classes/institutions.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-12 text_conts'>
                                <i className='icons_tech'><FaChalkboardTeacher /></i>
                                <div>
                                    <h4>Placement Assistant</h4>
                                    <p>SITH provides job-oriented courses and provides assistance in getting jobs.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

            </div>

            {/* Con - 1  end */}
            {/* Course Categories start */}

            <div className='bg_course_cate wow fadeInUp'>


                <Container>
                    <div className='coure_font text-center p-5'>
                        <h2 className='fw-bolder '>Course Categories</h2>
                    </div>

                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><path d="m497 31h-482c-8.401 0-15 6.599-15 15v420c0 8.401 6.599 15 15 15h482c8.401 0 15-6.599 15-15v-420c0-8.401-6.599-15-15-15z" fill="#edf5ff"></path><path d="m512 46v420c0 8.401-6.599 15-15 15h-241v-450h241c8.401 0 15 6.599 15 15z" fill="#d5e8fe"></path><path d="m436 151h-180-180c-8.401 0-15 6.599-15 15v240c0 8.401 6.599 15 15 15h180 180c8.401 0 15-6.599 15-15v-240c0-8.401-6.599-15-15-15z" fill="#6aa9ff"></path><path d="m451 166v240c0 8.401-6.599 15-15 15h-180v-270h180c8.401 0 15 6.599 15 15z" fill="#4895ff"></path><circle cx="436" cy="106" fill="#e63950" r="15"></circle><circle cx="376" cy="106" fill="#4895ff" r="15"></circle><circle cx="316" cy="106" fill="#4895ff" r="15"></circle><path d="m318.52 324.32c-4.6-6.899-2.739-16.201 4.16-20.801l26.279-17.519-26.279-17.52c-6.899-4.6-8.76-13.901-4.16-20.801 4.585-6.899 13.843-8.76 20.801-4.16l45 30c4.175 2.783 6.68 7.471 6.68 12.48s-2.505 9.697-6.68 12.48l-45 30c-7.02 4.654-16.281 2.633-20.801-4.159z" fill="#d5e8fe"></path><path d="m172.68 328.48-45-30c-4.175-2.783-6.68-7.471-6.68-12.48s2.505-9.697 6.68-12.48l45-30c6.899-4.6 16.201-2.739 20.801 4.16s2.739 16.201-4.16 20.801l-26.28 17.519 26.279 17.52c6.899 4.6 8.76 13.901 4.16 20.801-4.521 6.793-13.785 8.81-20.8 4.159z" fill="#edf5ff"></path><path d="m256 91h-180c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#5f55af"></path><path d="m271 106c0-8.291-6.709-15-15-15v30c8.291 0 15-6.709 15-15z" fill="#453d83"></path><path d="m292.709 212.582c-7.412-3.706-16.392-.688-20.127 6.709l-16.582 33.164-43.418 86.836c-3.706 7.412-.703 16.421 6.709 20.127 7.48 3.715 16.436.652 20.127-6.709l16.582-33.164 43.418-86.836c3.706-7.412.703-16.421-6.709-20.127z" fill="#edf5ff"></path><path d="m292.709 212.582c-7.412-3.706-16.392-.688-20.127 6.709l-16.582 33.164v67.09l43.418-86.836c3.706-7.412.703-16.421-6.709-20.127z" fill="#d5e8fe"></path></g></svg>
                                </div>
                                <div className='pro_h5'>
                                    <h5>Programming<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><path d="m490.848 162.982c-11.265-18.223-33.212-52.734-71.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338s-10.62 2.446-13.228 7.339c-38.965 72.979-59.854 107.314-71.074 125.435-8.626 13.923-20.698 31.618-20.698 62.226 0 57.891 47.109 105 105 105s106-47.109 106-105c0-30.802-11.84-47.93-21.152-63.018z" fill="#ff7b4a"></path><path d="m512 226c0-30.802-11.84-47.93-21.152-63.018-11.265-18.223-33.212-52.734-71.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338v300c57.891 0 106-47.109 106-105z" fill="#e63950"></path><path d="m339.848 162.982c-11.265-18.223-32.212-52.734-70.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338s-10.62 2.446-13.228 7.339c-38.965 72.979-59.854 107.314-71.074 125.435-8.626 13.923-20.698 31.618-20.698 62.226 0 57.891 47.109 105 105 105s105-47.109 105-105c0-30.802-11.84-47.93-21.152-63.018z" fill="#7ed8f6"></path><path d="m361 226c0-30.802-11.84-47.93-21.152-63.018-11.265-18.223-32.212-52.734-70.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338v300c57.891 0 105-47.109 105-105z" fill="#6aa9ff"></path><path d="m189.848 162.982c-11.265-18.223-32.212-52.734-70.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338s-10.62 2.446-13.228 7.339c-38.965 72.979-60.854 107.314-72.074 125.435-8.626 13.923-20.698 31.618-20.698 62.226 0 57.891 48.109 105 106 105s105-47.109 105-105c0-30.802-11.84-47.93-21.152-63.018z" fill="#fed843"></path><path d="m211 226c0-30.802-11.84-47.93-21.152-63.018-11.265-18.223-32.212-52.734-70.62-124.644-2.608-4.892-7.918-7.338-13.228-7.338v300c57.891 0 105-47.109 105-105z" fill="#ff9f00"></path><path d="m497 421h-241-241c-8.284 0-15 6.716-15 15s6.716 15 15 15h241 241c8.284 0 15-6.716 15-15s-6.716-15-15-15z" fill="#5f55af"></path><path d="m512 436c0-8.284-6.716-15-15-15h-241v30h241c8.284 0 15-6.716 15-15z" fill="#453d83"></path><path d="m296.605 395.395-30-30c-2.93-2.93-6.768-4.395-10.605-4.395s-7.676 1.465-10.605 4.395l-30 30c-2.813 2.812-4.395 6.621-4.395 10.605v60c0 8.291 6.709 15 15 15h30 30c8.291 0 15-6.709 15-15v-60c0-3.984-1.582-7.793-4.395-10.605z" fill="#d5e8fe"></path><path d="m301 466v-60c0-3.984-1.582-7.793-4.395-10.605l-30-30c-2.93-2.93-6.768-4.395-10.605-4.395v120h30c8.291 0 15-6.709 15-15z" fill="#a8d3d8"></path></svg>
                                </div>

                                <div className='pro_h5'>
                                    <h5>Designing<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><g><path d="m360 136v60c0 8.28-6.72 15-15 15s-15-6.72-15-15v-60c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#fabe2c"></path></g><g><path d="m420 106v90c0 8.28-6.72 15-15 15s-15-6.72-15-15v-90c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#6aa9ff"></path></g><g><path d="m480 76v120c0 8.28-6.72 15-15 15s-15-6.72-15-15v-120c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#ff435b"></path></g><path d="m270 46v195l-127-8-96.2-62.48c34.44-84.05 116.27-139.52 208.2-139.52 8.28 0 15 6.72 15 15z" fill="#fed843"></path><path d="m480 256c0 119.33-92.66 216.8-210 224.5-4.96.33-9.96.5-15 .5-37.49 0-74.13-9.27-106.82-26.93l29.9-122.07 91.92-91h195c8.28 0 15 6.72 15 15z" fill="#ff7b4a"></path><path d="m480 256c0 119.33-92.66 216.8-210 224.5v-239.5h195c8.28 0 15 6.72 15 15z" fill="#ff435b"></path><path d="m270 241c-10.156 17.764-123.875 216.661-129.5 226.5-4.4 7.04-13.67 9.15-20.68 4.76-72.8-45.6-119.82-126.15-119.82-216.26 0-27.58 4.38-54.72 13.02-80.66 2.62-7.85 11.12-12.11 18.98-9.49.161.051 235.875 74.479 238 75.15z" fill="#7ed8f6"></path><g><path d="m512 196c0 8.28-6.72 15-15 15h-182c-8.28 0-15-6.72-15-15s6.72-15 15-15h182c8.28 0 15 6.72 15 15z" fill="#61729b"></path></g></g></svg>
                                </div>

                                <div className='pro_h5'>
                                    <h5>Designing<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg src={require('./img/asset 68.svg')} height="512" viewBox="0 0 512 512" width="512"><g><g><path d="m360 136v60c0 8.28-6.72 15-15 15s-15-6.72-15-15v-60c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#fabe2c"></path></g><g><path d="m420 106v90c0 8.28-6.72 15-15 15s-15-6.72-15-15v-90c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#6aa9ff"></path></g><g><path d="m480 76v120c0 8.28-6.72 15-15 15s-15-6.72-15-15v-120c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#ff435b"></path></g><path d="m270 46v195l-127-8-96.2-62.48c34.44-84.05 116.27-139.52 208.2-139.52 8.28 0 15 6.72 15 15z" fill="#fed843"></path><path d="m480 256c0 119.33-92.66 216.8-210 224.5-4.96.33-9.96.5-15 .5-37.49 0-74.13-9.27-106.82-26.93l29.9-122.07 91.92-91h195c8.28 0 15 6.72 15 15z" fill="#ff7b4a"></path><path d="m480 256c0 119.33-92.66 216.8-210 224.5v-239.5h195c8.28 0 15 6.72 15 15z" fill="#ff435b"></path><path d="m270 241c-10.156 17.764-123.875 216.661-129.5 226.5-4.4 7.04-13.67 9.15-20.68 4.76-72.8-45.6-119.82-126.15-119.82-216.26 0-27.58 4.38-54.72 13.02-80.66 2.62-7.85 11.12-12.11 18.98-9.49.161.051 235.875 74.479 238 75.15z" fill="#7ed8f6"></path><g><path d="m512 196c0 8.28-6.72 15-15 15h-182c-8.28 0-15-6.72-15-15s6.72-15 15-15h182c8.28 0 15 6.72 15 15z" fill="#61729b"></path></g></g></svg>
                                </div>

                                <div className='pro_h5'>
                                    <h5>Accounting & Finance<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><path d="m346 15v467h-135l-30 30h-150c-8.401 0-15-6.599-15-15v-482c0-8.401 6.599-15 15-15h300c8.401 0 15 6.599 15 15z" fill="#edf5ff"></path><g fill="#d5e8fe"><path d="m346 15v467h-135l-30 30v-512h150c8.401 0 15 6.599 15 15z"></path><path d="m286 106c0 8.401-6.599 15-15 15h-180c-8.401 0-15-6.599-15-15s6.599-15 15-15h180c8.401 0 15 6.599 15 15z"></path><path d="m226 166c0 8.401-6.599 15-15 15h-120c-8.401 0-15-6.599-15-15s6.599-15 15-15h120c8.401 0 15 6.599 15 15z"></path><path d="m196 226c0 8.401-6.599 15-15 15h-90c-8.401 0-15-6.599-15-15s6.599-15 15-15h90c8.401 0 15 6.599 15 15z"></path></g><g><path d="m331 211c-41.353 0-75 33.647-75 75 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75z" fill="#47568c"></path><path d="m376 286c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75v30c24.814 0 45 20.186 45 45z" fill="#29376d"></path><path d="m467.251 376h-136.251-135l-30 30v91c0 8.291 6.709 15 15 15h150 150c8.291 0 15-6.709 15-15v-91z" fill="#61729b"></path><path d="m496 497v-91l-28.749-30h-136.251v136h150c8.291 0 15-6.709 15-15z" fill="#47568c"></path><path d="m481 271h-150-150c-8.291 0-15 6.709-15 15v120h165 165v-120c0-8.291-6.709-15-15-15z" fill="#6aa9ff"></path><path d="m496 286c0-8.291-6.709-15-15-15h-150v135h165z" fill="#4895ff"></path><path d="m361 361h-30-30c-8.291 0-15 6.709-15 15v30c0 24.814 20.186 45 45 45s45-20.186 45-45v-30c0-8.291-6.709-15-15-15z" fill="#edf5ff"></path><path d="m376 406v-30c0-8.291-6.709-15-15-15h-30v90c24.814 0 45-20.186 45-45z" fill="#d5e8fe"></path></g><path d="m196 226c0 8.401-6.599 15-15 15v-30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m226 166c0 8.401-6.599 15-15 15h-30v-30h30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m286 106c0 8.401-6.599 15-15 15h-90v-30h90c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path></g></svg>								</div>


                                <div className='pro_h5'>
                                    <h5>Accounting & Finance<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><path d="m346 15v467h-135l-30 30h-150c-8.401 0-15-6.599-15-15v-482c0-8.401 6.599-15 15-15h300c8.401 0 15 6.599 15 15z" fill="#edf5ff"></path><g fill="#d5e8fe"><path d="m346 15v467h-135l-30 30v-512h150c8.401 0 15 6.599 15 15z"></path><path d="m286 106c0 8.401-6.599 15-15 15h-180c-8.401 0-15-6.599-15-15s6.599-15 15-15h180c8.401 0 15 6.599 15 15z"></path><path d="m226 166c0 8.401-6.599 15-15 15h-120c-8.401 0-15-6.599-15-15s6.599-15 15-15h120c8.401 0 15 6.599 15 15z"></path><path d="m196 226c0 8.401-6.599 15-15 15h-90c-8.401 0-15-6.599-15-15s6.599-15 15-15h90c8.401 0 15 6.599 15 15z"></path></g><g><path d="m331 211c-41.353 0-75 33.647-75 75 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75z" fill="#47568c"></path><path d="m376 286c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75v30c24.814 0 45 20.186 45 45z" fill="#29376d"></path><path d="m467.251 376h-136.251-135l-30 30v91c0 8.291 6.709 15 15 15h150 150c8.291 0 15-6.709 15-15v-91z" fill="#61729b"></path><path d="m496 497v-91l-28.749-30h-136.251v136h150c8.291 0 15-6.709 15-15z" fill="#47568c"></path><path d="m481 271h-150-150c-8.291 0-15 6.709-15 15v120h165 165v-120c0-8.291-6.709-15-15-15z" fill="#6aa9ff"></path><path d="m496 286c0-8.291-6.709-15-15-15h-150v135h165z" fill="#4895ff"></path><path d="m361 361h-30-30c-8.291 0-15 6.709-15 15v30c0 24.814 20.186 45 45 45s45-20.186 45-45v-30c0-8.291-6.709-15-15-15z" fill="#edf5ff"></path><path d="m376 406v-30c0-8.291-6.709-15-15-15h-30v90c24.814 0 45-20.186 45-45z" fill="#d5e8fe"></path></g><path d="m196 226c0 8.401-6.599 15-15 15v-30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m226 166c0 8.401-6.599 15-15 15h-30v-30h30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m286 106c0 8.401-6.599 15-15 15h-90v-30h90c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path></g></svg>								</div>


                                <div className='pro_h5'>
                                    <h5>Accounting & Finance<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><path d="m346 15v467h-135l-30 30h-150c-8.401 0-15-6.599-15-15v-482c0-8.401 6.599-15 15-15h300c8.401 0 15 6.599 15 15z" fill="#edf5ff"></path><g fill="#d5e8fe"><path d="m346 15v467h-135l-30 30v-512h150c8.401 0 15 6.599 15 15z"></path><path d="m286 106c0 8.401-6.599 15-15 15h-180c-8.401 0-15-6.599-15-15s6.599-15 15-15h180c8.401 0 15 6.599 15 15z"></path><path d="m226 166c0 8.401-6.599 15-15 15h-120c-8.401 0-15-6.599-15-15s6.599-15 15-15h120c8.401 0 15 6.599 15 15z"></path><path d="m196 226c0 8.401-6.599 15-15 15h-90c-8.401 0-15-6.599-15-15s6.599-15 15-15h90c8.401 0 15 6.599 15 15z"></path></g><g><path d="m331 211c-41.353 0-75 33.647-75 75 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75z" fill="#47568c"></path><path d="m376 286c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75v30c24.814 0 45 20.186 45 45z" fill="#29376d"></path><path d="m467.251 376h-136.251-135l-30 30v91c0 8.291 6.709 15 15 15h150 150c8.291 0 15-6.709 15-15v-91z" fill="#61729b"></path><path d="m496 497v-91l-28.749-30h-136.251v136h150c8.291 0 15-6.709 15-15z" fill="#47568c"></path><path d="m481 271h-150-150c-8.291 0-15 6.709-15 15v120h165 165v-120c0-8.291-6.709-15-15-15z" fill="#6aa9ff"></path><path d="m496 286c0-8.291-6.709-15-15-15h-150v135h165z" fill="#4895ff"></path><path d="m361 361h-30-30c-8.291 0-15 6.709-15 15v30c0 24.814 20.186 45 45 45s45-20.186 45-45v-30c0-8.291-6.709-15-15-15z" fill="#edf5ff"></path><path d="m376 406v-30c0-8.291-6.709-15-15-15h-30v90c24.814 0 45-20.186 45-45z" fill="#d5e8fe"></path></g><path d="m196 226c0 8.401-6.599 15-15 15v-30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m226 166c0 8.401-6.599 15-15 15h-30v-30h30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m286 106c0 8.401-6.599 15-15 15h-90v-30h90c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path></g></svg>								</div>


                                <div className='pro_h5'>
                                    <h5>Accounting & Finance<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-12 mt-3'>
                            <div className='prog  course_categories d-flex align-items-center'>
                                <div class="category-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><g><path d="m346 15v467h-135l-30 30h-150c-8.401 0-15-6.599-15-15v-482c0-8.401 6.599-15 15-15h300c8.401 0 15 6.599 15 15z" fill="#edf5ff"></path><g fill="#d5e8fe"><path d="m346 15v467h-135l-30 30v-512h150c8.401 0 15 6.599 15 15z"></path><path d="m286 106c0 8.401-6.599 15-15 15h-180c-8.401 0-15-6.599-15-15s6.599-15 15-15h180c8.401 0 15 6.599 15 15z"></path><path d="m226 166c0 8.401-6.599 15-15 15h-120c-8.401 0-15-6.599-15-15s6.599-15 15-15h120c8.401 0 15 6.599 15 15z"></path><path d="m196 226c0 8.401-6.599 15-15 15h-90c-8.401 0-15-6.599-15-15s6.599-15 15-15h90c8.401 0 15 6.599 15 15z"></path></g><g><path d="m331 211c-41.353 0-75 33.647-75 75 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75z" fill="#47568c"></path><path d="m376 286c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75v30c24.814 0 45 20.186 45 45z" fill="#29376d"></path><path d="m467.251 376h-136.251-135l-30 30v91c0 8.291 6.709 15 15 15h150 150c8.291 0 15-6.709 15-15v-91z" fill="#61729b"></path><path d="m496 497v-91l-28.749-30h-136.251v136h150c8.291 0 15-6.709 15-15z" fill="#47568c"></path><path d="m481 271h-150-150c-8.291 0-15 6.709-15 15v120h165 165v-120c0-8.291-6.709-15-15-15z" fill="#6aa9ff"></path><path d="m496 286c0-8.291-6.709-15-15-15h-150v135h165z" fill="#4895ff"></path><path d="m361 361h-30-30c-8.291 0-15 6.709-15 15v30c0 24.814 20.186 45 45 45s45-20.186 45-45v-30c0-8.291-6.709-15-15-15z" fill="#edf5ff"></path><path d="m376 406v-30c0-8.291-6.709-15-15-15h-30v90c24.814 0 45-20.186 45-45z" fill="#d5e8fe"></path></g><path d="m196 226c0 8.401-6.599 15-15 15v-30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m226 166c0 8.401-6.599 15-15 15h-30v-30h30c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path><path d="m286 106c0 8.401-6.599 15-15 15h-90v-30h90c8.401 0 15 6.599 15 15z" fill="#b5dbff"></path></g></svg>								</div>


                                <div className='pro_h5'>
                                    <h5>Accounting & Finance<i className='right_arew'><FaChevronRight /></i></h5>
                                </div>
                            </div>
                        </div>




                    </div>

                </Container>
            </div>

            {/* Course Categories End */}

            {/* Most Popular Courses start */}

            <div className='mt-5 wow fadeInUp'>
                <div className='p-5 text-center'>
                    <h4 className='fw-bolder'>Most Popular Courses</h4>
                </div>
                <Container>
                    <div className='row d-flex justify-content-around'>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <div className='video_gif_img gif_hover'>
                                <img src={require('./img/asset 5.gif')} ></img>
                            </div>
                            <div className='bg_main mt-2' >
                                <p><span >All Levels</span></p>
                            </div>
                            <div className='all_hover'>
                                <p>Advanced Python</p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <div className='video_gif_img gif_hover'>
                                <img src={require('./img/asset 6.gif')} ></img>
                            </div>
                            <div >
                                <p>All Levels</p>
                            </div>
                            <div className='all_hover'>
                                <p>C Programming</p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <div className='video_gif_img gif_hover'>
                                <img src={require('./img/asset 7.gif')} ></img>
                            </div>
                            <div className='bg_main mt-2'>
                                <p><span>All Levels</span></p>
                            </div>
                            <div className='all_hover'>
                                <p>Digital Marketing</p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <div className='video_gif_img gif_hover'>
                                <img src={require('./img/asset 8.gif')} ></img>
                            </div>
                            <div className='bg_main mt-2'>
                                <p><span>All Levels</span></p>
                            </div>
                            <div className='all_hover'>
                                <p>Full Stack Development</p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-4 col-sm-6 '>
                            <div className='video_gif_img gif_hover'>
                                <img src={require('./img/asset 9.gif')} ></img>
                            </div>
                            <div className='bg_main mt-2'>
                                <p><span>All Levels</span></p>
                            </div>
                            <div className='all_hover'>
                                <p>Graphic Designing</p>
                            </div>
                        </div>


                    </div>
                </Container>
            </div>

            {/* Most Popular Courses start */}


            <div className='d-flex justify-content-center m-5'>
                <div>
                    <Container>
                        <div className='expo d-flex justify-content-around align-items-center'>
                            <div className='font_editing'>
                                <h5>Let Us Help</h5>
                                <h3 className='fw-bolder'>Finding Your Right Course</h3>
                            </div>
                            <div>
                                <Button variant="primary">Explore</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>




            <div className='skills_with_bg'>
                <Container>
                    <div className='d-flex align-items-center skills_d-flex '>
                        <div className='fw-bold text-center m-5 skills_d-flex' >
                            <h5>Acquire new skills with SITH</h5>
                        </div>
                        <div className='row text-center p-5 mt-5'>
                            <div className='col-lg-3 font_skills_lemp uni_back p-2'>
                                <img src={require('./img/asset 10.png')}></img>
                                <h5 className='text-justify'>Decide the skills you wish to learn</h5>
                            </div>

                            <div className='col-lg-3 col-12 font_skills_lemp uni_back p-2'>
                                <img src={require('./img/asset 10.png')}></img>
                                <h5>Set achievable goals</h5>
                            </div>
                            <div className='col-lg-3 col-12 font_skills_lemp uni_back p-2'>
                                <img src={require('./img/asset 10.png')}></img>
                                <h5>Search for potential course</h5>
                            </div>
                            <div className='col-lg-3 col-12 font_skills_lemp uni_back p-2'>
                                <img src={require('./img/asset 11.png')}></img>
                                <h5>Decide the skills you wish to learn</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


            {/* Carousel Part Start */}

            <div>
                <Container>
                    <div className='row card_silders d-flex justify-content-between align-items-center'>
                        <div className='col-4 p-5'>
                            <h4 className='fw-bolder'>What our learners say</h4>
                            <p>Our students who have enrolled for online and offline courses sharing their experience as learners.</p>
                        </div>

                        <div className='col-8 mt-5'>
                           <div className='' >
                           <Carousel id='silders_1'>
                                <Carousel.Item className='wow flipInX'>
                                    <Card className='bg_card_main'>
                                        <Card.Body>
                                            <Card.Title>Awesome Institute</Card.Title>

                                            <Card.Text>Awesome institution with friendly faculty members. Been here for the last one month and had an awesome experience. Even the way of teaching by faculty in the institution  is very nice.
                                            </Card.Text>
                                            <div class="list-group w-auto">
                                                <a href="#" class="list-group-item list-group-item-action d-flex  gap-3 py-3" aria-current="true">
                                                    <img src={require('./img/asset 15.jpeg')} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"></img>
                                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                                        <div>
                                                            <h6 class="mb-0">Devendra Prajapati </h6>
                                                            <p class="mb-0 opacity-75">Business Accounting & Taxation Program.</p>
                                                        </div>
                                                        {/* <small class="opacity-50 text-nowrap">now</small> */}
                                                    </div>
                                                </a>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card className='bg_card_main'>
                                        <Card.Body>
                                            <Card.Title>Awesome Institute</Card.Title>

                                            <Card.Text>Awesome institution with friendly faculty members. Been here for the last one month and had an awesome experience. Even the way of teaching by faculty in the institution  is very nice.
                                            </Card.Text>
                                            <div class="list-group w-auto bg-body-tertiary">
                                                <a href="#" class="list-group-item list-group-item-action d-flex  gap-3 py-3" aria-current="true">
                                                    <img src={require('./img/asset 15.jpeg')} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"></img>
                                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                                        <div>
                                                            <h6 class="mb-0">Devendra Prajapati </h6>
                                                            <p class="mb-0 opacity-75">Business Accounting & Taxation Program.</p>
                                                        </div>
                                                        {/* <small class="opacity-50 text-nowrap">now</small> */}
                                                    </div>
                                                </a>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card className='bg_card_main'>
                                        <Card.Body>
                                            <Card.Title>Awesome Institute</Card.Title>

                                            <Card.Text>Awesome institution with friendly faculty members. Been here for the last one month and had an awesome experience. Even the way of teaching by faculty in the institution  is very nice.
                                            </Card.Text>
                                            <div class="list-group w-auto bg-body-tertiary">
                                                <a href="#" class="list-group-item list-group-item-action d-flex  gap-3 py-3" aria-current="true">
                                                    <img src={require('./img/asset 15.jpeg')} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"></img>
                                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                                        <div>
                                                            <h6 class="mb-0">Devendra Prajapati </h6>
                                                            <p class="mb-0 opacity-75">Business Accounting & Taxation Program.</p>
                                                        </div>
                                                        {/* <small class="opacity-50 text-nowrap">now</small> */}
                                                    </div>
                                                </a>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            </Carousel>
                           </div>
                        </div>
                    </div>
                </Container>
            </div>


            {/* Carousel Part End */}




            {/* Skills conten */}

            <div className='bg_main_skills p-5 mt-5'>
                <Container>
                    <div className='uni_font '>
                        <h3 className='fw-bolder'>Our University Association</h3>
                    </div>
                    <div className='row mt-4'>
                        <div className='col uni_back'>
                            <div className='uni_logo'>
                                <img src={require('./img/asset 17.png')}></img>
                                <h5>Indian Institute of Technology Bombay</h5>
                            </div>
                        </div>
                        <div className='col uni_back'>
                            <div className='uni_logo'>
                                <img src={require('./img/asset 18.png')}></img>
                                <h5>Indian Institute of Technology Bombay</h5>
                            </div>
                        </div>
                        <div className='col uni_back'>
                            <div className='uni_logo'>
                                <img src={require('./img/asset 19.png')}></img>
                                <h5>Indian Institute of Technology Bombay</h5>
                            </div>
                        </div>
                        <div className='col uni_back'>
                            <div className='uni_logo'>
                                <img src={require('./img/asset 20.png')}></img>
                                <h5>Indian Institute of Technology Bombay</h5>
                            </div>
                        </div>
                        <div className='col uni_back'>
                            <div className='uni_logo'>
                                <img src={require('./img/asset 17.png')}></img>
                                <h5>Indian Institute of Technology Bombay</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


            {/* learners work Start */}
{/* 
            <div>
                <div>
                    <h4 className='fw-bolder'>Where our learners work?</h4>
                </div>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-10" src={require('./img/asset 22.png')} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-10" src={require('./img/asset 23.png')} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-10" src={require('./img/asset 24.png')} alt="First slide"/>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div> */}

            {/* learners work End */}


            <Footer />

        </>
    )
}
export default Home;