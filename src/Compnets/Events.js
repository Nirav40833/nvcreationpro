import { Breadcrumb, Button, Container, ListGroup } from "react-bootstrap";
import Footer from "./Footer";
import Menu from "./Menu";
const Events = () => {
  return (
    <>
      <Menu />

      <div className="events_bg">
        <div className="breadcrimb">
          <Breadcrumb>
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Events</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="events_bg_cont">
          <h1 className="fw-bolder">Events</h1>
        </div>
      </div>

      <Container>
        <div className="input_cont_bg">
          <div className="row d-flex justify-content-center input_from">
            <div className="col-lg-3 col-md-6 mt-4 col-12">
              <input type='text' placeholder="Event from"></input>              
              </div>
            <div className="col-lg-3 col-md-6 mt-4 col-12">
              <input type='text' placeholder="Location"></input>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 col-12">
              <input type='text' placeholder="Keyword.."></input>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 col-12">
              <Button variant="primary">Find Event</Button>
            </div>

          </div>
        </div>
      </Container>


    
    <Container>
       <div className="mt-4 d-flex  justify-content-between">
       <div className="p-5">
          <p>We found <span className="fw-bolder">0 </span> events available for you</p>
        </div>

        <div class="dropdown p-4">
          <a class="btn btn-secondary dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Event Type : <span className="fw-bolder">All</span>
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"></a></li>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
       </div>
      </Container>


      <div className="">
          <Container>
                  <div className="last_event p-4">
                            <h5 className="fw-bolder" >Stay Tuned!</h5>
                            <p>we have got something exciting to announce!</p>
                  </div>

          </Container>
      </div>
  

      <div className="pp-300">
          <Footer />  
      </div>



    </>
  )
}
export default Events;