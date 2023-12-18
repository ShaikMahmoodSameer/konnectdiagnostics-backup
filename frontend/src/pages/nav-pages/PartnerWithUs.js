import React from "react";
import { styled } from "styled-components";
// import AssetImage from "../../imageImporter";

const PartnerWithUs = () => {
  return (
    <Wrapper className="partnerwithus">
      <section className="container" id="pwu_s1">
        <img src="/images/dotGrids1.png" alt="" className="dots" />
        <div className="r_container row d-flex align-items-stretch">
          <div
            className="col-6 d-flex flex-column justify-content-center"
            id="pwu_s11"
          >
            <div>
              <span className="r_subtitle">We take immense pride in</span>
            </div>
            <div>
              <h1 className="r_heading_title">
                Our Commitment to Exceptional Diagnostic Services
              </h1>
              {/* <img src="/images/reaction_svg.svg" alt="" /> */}
            </div>
            <div className="r_container">
              <p className="r_para">
                We invite you to join us in our mission to deliver high-quality
                healthcare solutions to patients.
              </p>
            </div>
          </div>

          <div className="col-6 d-flex align-items-stretch" id="pwu_s12">
            <div className="w-50" id="pwu_s121"></div>
            <div className="w-50 ">
              <div className="w-100 ">
                {/* <AssetImage imageName={"/partner-with-us/pwu_s42i1.jpg"} /> */}
                <img
                  src="/images/scientist-working-laboratory-with-test-tubes-laboratory-equipment.jpg"
                  alt="Img"
                />
              </div>
              <div className="w-100 ">
                <img
                  src="/images/female-medical-scientific-researcher-looking-test-tube-laboratory.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="r_section d-flex flex-column" id="pwu_s2">
        <div className="container flex-column w-50" id="pwu_s21">
          <div>
            <h2 className=" text-center">Why Konnect Diagnostics?</h2>
          </div>
          <div className="d-flex justify-content-center">
            <span className="r_subtitle text-center">
              Bridging the Gap between Accuracy and Accessibility
            </span>
          </div>

          <div className="r_container text-center">
            <p className="r_para">
              We bridge the gap between accuracy and accessibility. With
              cutting-edge technology and a commitment to innovation, we make
              diagnostics efficient, reliable, and readily available to all.
            </p>
          </div>
        </div>

        <div className="container row mx-auto mt-3" id="pwu_s22">
          <div className="row d-flex align-items-stretch">
            <div className="col-4 px-4">
              <div className="text-center">
                <div className="card_img_container">
                  <img
                    src="/images/stethescope.svg"
                    alt=""
                    className="img_steth"
                  />
                  <img
                    src="/images/doctor.svg"
                    alt=""
                    className="w_icon w_icon1"
                  />
                </div>
                <div>
                  <h2 className="r_heading_title_secondary">Expert Team</h2>
                  <p>
                    We have assembled a team of certified and qualified
                    professionals comprising radiologists, pathologists,
                    doctors, and technicians.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 gx-5 px-4">
              <div className="text-center">
                <div className="card_img_container liner_bg">
                  <img
                    src="/images/stethescope.svg"
                    alt=""
                    className="img_steth"
                  />
                  <img
                    src="/images/microscope.svg"
                    alt=""
                    className="w_icon w_icon2"
                  />
                </div>
                <div>
                  <h2 className="r_heading_title_secondary">
                    State-of-the-Art Facilities
                  </h2>
                  <p>
                    We strive to be at the forefront of medical advancements by
                    equipping our branches with the latest technologies and
                    cutting-edge equipment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 px-4">
              <div className="text-center">
                <div className="card_img_container">
                  <img
                    src="/images/stethescope.svg"
                    alt=""
                    className="img_steth"
                  />
                  <img
                    src="/images/high-quality.svg"
                    alt=""
                    className="w_icon w_icon3"
                  />
                </div>
                <div>
                  <h2 className="r_heading_title_secondary">
                    Convenient and Fast Service
                  </h2>
                  <p>
                    We understand the importance of timely diagnoses and strive
                    to provide quick services to our patients. We ensure that
                    reports are delivered within 24 hours or even faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="r_section d-flex flex-column" id="pwu_s3">
        <div className="r_container flex-column w-50" id="pwu_s31">
          <div>
            <h2 className=" text-center">Partner Benefits:</h2>
          </div>
          <div className="d-flex justify-content-center">
            <span className="r_subtitle text-center">
              At Konnect mutual success takes center stage
            </span>
          </div>

          <div className="r_container text-center">
            <p className="r_para">
              We're dedicated to unlocking partnerships and elevating
              diagnostics. Join us on a journey where mutual success takes
              center stage. Let's collaborate and revolutionize the world of
              diagnostics together.
            </p>
          </div>
        </div>
        <div className="r_container w-75" id="pwu_s32">
          <div className="d-flex">
            <div className="w-50 img_wrapper">
              <img src="/images/benf1.jpg" alt="" className="w-100" />
            </div>
            <div className="w-50 ps-5 d-flex flex-column justify-content-center content_wrapper">
              <h2 className="r_heading_title_secondary">Enhanced Reputation</h2>
              <p>
                By partnering with Konnect Diagnostics, you align yourself with
                a reputable and trusted brand in the healthcare industry. Our
                commitment to excellence and adherence to strict quality
                standards will enhance your reputation and instill confidence in
                your patients.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50 pe-5 d-flex flex-column justify-content-center content_wrapper">
              <h2 className="r_heading_title_secondary">
                Comprehensive Services
              </h2>
              <p>
                As a partner, you gain access to our comprehensive range of
                diagnostic services. This includes radiology, pathology, and a
                range of specialized tests, allowing you to offer a wide
                spectrum of healthcare solutions to your patients.
              </p>
            </div>
            <div className="w-50 img_wrapper">
              <img src="/images/benf2.jpg" alt="" className="w-100" />
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50 img_wrapper">
              <img src="/images/benf3.jpg" alt="" className="w-100" />
            </div>
            <div className="w-50 ps-5 d-flex flex-column justify-content-center content_wrapper">
              <h3 className="r_heading_title_secondary">
                Collaborative Approach
              </h3>
              <p>
                We believe in fostering strong partnerships based on
                collaboration and mutual growth. We work closely with our
                partners to understand their specific needs and develop tailored
                solutions that meet the unique requirements of their patient
                base.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50 pe-5 d-flex flex-column justify-content-center content_wrapper">
              <h2 className="r_heading_title_secondary">Continuous Support</h2>
              <p>
                Our dedicated team is committed to providing ongoing support to
                our partners. From training and education to technical
                assistance and marketing support, we are here to ensure your
                success as our valued partner.
              </p>
            </div>
            <div className="w-50 img_wrapper">
              <img src="/images/benf4.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="r_section container" id="pwu_s4">
        <img src="/images/dotGrids1.png" alt="" className="dots" />
        <div className="container row d-flex align-items-stretch">
          <div
            className="col-6 pe-5 d-flex flex-column justify-content-center"
            id="pwu_s41"
          >
            <div>
              <h2 className="r_heading_title">
                Join us in our Pursuit of excellence in diagnostic care and
                together
              </h2>
            </div>
            <div className="r_container">
              <p className="r_para">
                Let's make a positive impact on the health and well-being of our
                communities.
              </p>
            </div>
            <div className="">
              <span className="r_subtitle">
                Partner with Konnect Diagnostics today and experience the
                Konnect difference!
              </span>
            </div>
          </div>

          <div className="col-6 d-flex align-items-stretch" id="pwu_s42">
            <div className="w-50" id="pwu_s421">
              {/* <img src="/images/scientist-analyzing-blood-sample-vacutainer-with-researching-team-looking-through-microscope.jpg" alt=""/> */}
            </div>
            <div className="w-50 ">
              <div className="w-100 ">
                <img src="/images/partner-with-us/pwu_s42i2.jpg" alt="" />
              </div>
              <div className="w-100 ">
                <img src="/images/partner-with-us/pwu_s42i3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default PartnerWithUs;

const Wrapper = styled.section`
  .r_heading_title {
    text-transform: capitalize;
    font-size: 38px;
    position: relative;
    margin: 20px 0;
  }

  .r_heading_title_secondary {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 0;
  }
  .r_para {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    color: #6e6e6e;
  }
  .r_subtitle {
    /* font-size: 18px; */
    font-weight: 700;
    line-height: 30px;
    color: #00aeef;
    position: relative;
  }
  .w-33 {
    width: 33%;
  }

  .r_section {
    display: flex;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
  .r_section > div {
    width: 1320px;
    margin: 0 auto;
  }
  .r_container {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .r_container > div {
    margin: 10px 0;
  }
  #pwu_s1 {
    background: url("/images/bannerBG.png");
    background-position: right top;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    padding: 50px 0;
    #pwu_s11 {
      padding-right: 75px;
      .r_subtitle {
        position: relative;
        color: ${({ theme }) => theme.colors.primary};
      }
      .r_subtitle:after {
        content: "";
        position: absolute;
        left: 110%;
        top: 15px;
        width: 150px;
        height: 3px;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.primary};
      }

      h1.r_heading_title:after {
        content: url("/images/reaction_svg.svg");
        z-index: -1;
        margin-left: 30px;
      }
    }
    #pwu_s12 {
      position: relative;
      z-index: 0;
      #pwu_s121 {
        background: url("/images/scientist-analyzing-blood-sample-vacutainer-with-researching-team-looking-through-microscope.jpg");
        background-position: right top;
        background-size: cover;
        background-repeat: no-repeat;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
      }
      div {
        margin: 0 5px;
        div {
          margin: 5px 0;
        }
      }
    }
    #pwu_s12 img {
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      width: 100%;
    }
    img.dots {
      position: absolute;
      left: -100px;
      top: 50px;
    }
    #pwu_s12:before {
      content: "";
      position: absolute;
      bottom: -30px;
      left: -30px;
      width: 150px;
      height: 150px;
      background: url("/images/dotGrids1.png");
      z-index: -1;
    }
  }

  #pwu_s2 {
    background: #f8f8f9;
    padding: 50px 0;
    .r_subtitle:after {
      content: "";
      position: absolute;
      right: 102%;
      top: 10px;
      width: 150px;
      height: 3px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
    }
    .r_subtitle:before {
      content: "";
      position: absolute;
      left: 102%;
      top: 10px;
      width: 150px;
      height: 3px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
    }
    #pwu_s22 .row {
      .card_img_container {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 auto;
        border: 2px solid #e6e6e6;
        background: ${({ theme }) => theme.colors.white};

        border-radius: 50%;
        /* z-index: 3; */
      }

      .img_steth {
        position: absolute;
        top: -15px;
        left: -15px;
      }
      .w_icon {
      }
    }
  }
  #pwu_s3 {
    background: url("/images/bannerBG.png");
    background-position: right top;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    padding: 50px 0;
    .r_subtitle:after {
      content: "";
      position: absolute;
      right: 105%;
      top: 10px;
      width: 150px;
      height: 3px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
    }
    .r_subtitle:before {
      content: "";
      position: absolute;
      left: 105%;
      top: 10px;
      width: 150px;
      height: 3px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
    }
    #pwu_s32 {
      > div {
        width: 800px;
        margin: 25px auto;
        .content_wrapper {
          /* padding: 0 35px; */
        }
        .img_wrapper {
          position: relative;
        }
        .img_wrapper:before {
          content: "";
          position: absolute;
          top: -30px;
          left: -30px;
          width: 100px;
          height: 100px;
          background: url("/images/dotGrids1.png");
          z-index: -1;
        }
      }
      img {
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
      }
    }
  }
  #pwu_s4 {
    position: relative;
    padding: 50px 0;
    background: #f8f8f9;
    img.dots {
      position: absolute;
      left: -100px;
      top: 50px;
    }
    span.r_subtitle {
      position: relative;
    }
    span.r_subtitle:before {
      content: "";
      position: absolute;
      left: -25px;
      top: 0;
      width: 5px;
      border-radius: 8px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    #pwu_s42 {
      position: relative;
      z-index: 0;
      #pwu_s421 {
        background: url("/images/partner-with-us/pwu_s42i1.jpg");
        background-position: right top;
        background-size: cover;
        background-repeat: no-repeat;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
      }
      div {
        margin: 0 5px;
        div {
          margin: 5px 0;
        }
      }
    }
    #pwu_s42 img {
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      width: 100%;
    }
    img.dots {
      position: absolute;
      left: -100px;
      top: 50px;
    }
    #pwu_s42:before {
      content: "";
      position: absolute;
      bottom: -30px;
      left: -30px;
      width: 150px;
      height: 150px;
      background: url("/images/dotGrids1.png");
      z-index: -1;
    }
  }
  .r_subtitle {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
  }
  .r_para {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    color: #6e6e6e;
  }
`;
