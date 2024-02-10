import { useEffect, useState } from "react";
import dataFooterNav from "../../data/DataFooterNav";
import FooterRoute from "./FooterRoute";
import FooterForm from "./FooterForm";
import FooterSocLinks from "./FooterSocLinks";

const Footer = () => {

    const [year, setYear] = useState(null);
    const [navLinks, setNavLinks] = useState([]);
    useEffect(() => {
        setYear(new Date().getFullYear())
        setNavLinks(dataFooterNav)
    }, [])

    return (
        <div className="footer_wrapper">
            <div className="container">
                <footer className="py-5 footer">
                    <div className="row">
                    <div className="col-6 col-md-2 mb-3 px-4 footer_nav">
                        <h5>Navigation</h5>
                        <ul className="nav flex-column">
                            { navLinks.map((navLink) => <FooterRoute 
                                key = { navLink.id } 
                                title = { navLink.title } 
                                routeTo = { navLink.routeTo } 
                            />)}
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3 px-4">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Home</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Features</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3 px-4">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Home</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Features</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                            <li className="nav-item mb-2"><a href="#abc" className="nav-link p-0">About</a></li>
                        </ul>
                    </div>

                    <FooterForm />
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p><span className="text-info">©</span> { year } Company, Inc. All rights reserved.</p>
                        <FooterSocLinks />
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default Footer;