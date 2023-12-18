import React from 'react';
import { styled } from "styled-components";
import { BiChevronsRight } from 'react-icons/bi';
// import Faqs from './Faqs';
import ContactForm from '../components/contactForm';

function ContactUs() {
    return (
        <Wrapper className="">
            <div className="pagebanner d-flex">
                <div className="container text-center flex">
                    <h1 className='page_title text-white'>Contact Us</h1>
                    <p>
                        <span className='text-white'> Home </span>
                        <BiChevronsRight />
                        <span> Contact Us </span>
                    </p>
                </div>
            </div>

            <div className="container row container px-sm-5 px-0 mx-auto d-flex justify-content-center align-items-center">
                <div className='col-md-6 p-3'>
                    <div>
                        <h6 className='fw-bolder'>Registered Office</h6>
                    </div>

                    <div>
                        <h2> Konnect Diagnostics </h2>
                        <p> <strong> Address: </strong> Ground Floor, FPAI Building, Punjagutta Officers Colony, Near Topaz Building, Hyderabad, Telangana 500082</p>
                        <p> <strong> Email: </strong> info@konnectdiagnostics.com </p>
                        <p> <strong> Customer Care No: </strong> 040 - 2100 0000 </p>
                    </div>
                </div>

                <div className='col-md-6 p-2 p-md-5 bg-light'>
                    <h6 className='fw-bolder'> Contact Us </h6>
                    <ContactForm />
                </div>
            </div>

            {/* <div className='w-50 mx-auto p-3'>
                <Faqs />
            </div> */}

            <div className='p-0 m-0'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.523434507499!2d78.45764861435773!3d17.426632888084933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98673c27a2bb%3A0xe7e6a045c1095c04!2sPunjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1639045574805!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

        </Wrapper>
    )
}

export default ContactUs;

const Wrapper = styled.div`
    .w-80{
        width: 80%;
    }
    h2 {color: ${({ theme }) => theme.colors.primary};}
    p {
        strong{
            color: ${({ theme }) => theme.colors.secondary}
        }
        margin-top: 5px;
    }
`;
