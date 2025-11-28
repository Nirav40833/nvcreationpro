import { Breadcrumb, Container } from "react-bootstrap";
import Menu from "./Menu";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Menu />
            <div className="events_bg">
                <div className="breadcrimb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="events_bg_cont">
                    <h1 className="fw-bolder">Contact Us</h1>
                </div>
            </div>
         <Footer />

        </>
    )
}
export default Contact;