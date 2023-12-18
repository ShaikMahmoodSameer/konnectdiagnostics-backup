import { styled } from "styled-components";
import DynamicImage from "../../components/requiredPages/DynamicImage";
import { BiChevronsRight } from "react-icons/bi";
import { CiHospital1 } from "react-icons/ci";

const About = () => {
  return (
    <Wrapper className="about">
      <div className="banner-bg d-flex">
        <div className="banner-cnt container flex ">
          <h2>About</h2>
          <h6>
            <span>Home</span>
            <BiChevronsRight />
            about
          </h6>
        </div>
      </div>
      <div className="sec-1 container flex flex-r">
        <div className="sec-left ">
          <h3 className="paraH3 hdng2">We Care About Your Health</h3>
          <div className="para-section flex">
            <p className="para">
              Konnect Diagnostics started in October 2019 with one center in
              Kompally and has since grown rapidly in the diagnostics industry.
              Our notable achievement was acquiring the Jagityal center,
              resulting in a significant revenue growth within a year. This
              success showcased the company's strong management and commitment
              to success. Building on this accomplishment, Konnect Diagnostics
              has a visionary plan to establish a comprehensive network of
              diagnostic centers spanning both urban and rural areas.
            </p>
            <p className="para">
              We established centers in BN Reddy Nagar and Boduppal in urban
              regions, as well as Suryapet and Sircilla in rural areas. The
              company aims to bridge the gap between urban and rural populations
              by providing accessible and high-quality healthcare services.
            </p>
          </div>
        </div>
        <div className="img-box ">
          <DynamicImage
            className="secThree-imgLeft"
            imageName={"about-1.jpg"}
          />
        </div>
      </div>

      <div className="container p-0 d-flex align-items-center">
        <div className="asafj p-5">
          <div className="img-box w-50"></div>
          <h3>
            Konnect Diagnostics remains dedicated to delivering accurate and
            reliable diagnostic solutions{" "}
          </h3>
          <p className="sw-50">
            While expanding their presence in diverse locations. We prioritize
            innovation, customer satisfaction, and community well-being, aiming
            to have a positive impact on healthcare accessibility and the
            overall well-being of individuals and communities.
          </p>
        </div>
      </div>

      {/* -----------------------------Section Two------------------------------ */}
      <div className="sec sec-2 container flex flex-r">
        <div className="img-box ">
          <DynamicImage imageName={"about-2.jpg"} />
        </div>
        <div className="sec-left ">
          <h3 className="paraH3 mb-3">Why Konnect Diagnostics</h3>
          <div className="flex para-section">
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              At Konnect Diagnostics, we have assembled a team of certified and
              qualified professionals, including radiologists, pathologists,
              doctors, and technicians. Their expertise in various
              specializations allows us to deliver accurate and reliable
              diagnostic solutions.  
            </p>
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              We strive to stay at the forefront of the industry by embracing
              the latest technologies and advancements. Our commitment to
              excellence extends to our team of skilled technicians and
              professionals who are equipped to handle the most complex
              diagnostic procedures.   
            </p>
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              Patient satisfaction is our top priority, and we aim to deliver
              high-quality services tailored to your convenience. We prioritize
              efficiency, offering quick turnaround times without compromising
              on transparency and accuracy.     
            </p>
          </div>
        </div>
      </div>
      {/* -----------------------------Section three------------------------------ */}
      <div className="sec-m s3">
        <div className="container s3-info">
          <h2>Accreditations & Approvals</h2>
          <div className="s3-boxes flex flex-r">
            <div className="s3-box s3-box1 flex flex-r">
              <DynamicImage imageName={"nabl-logo.jpg"} />
              <div className="s3-box-1-info">
                <h4>NABL Certification</h4>
                <p className="para">
                  Konnect Diagnostics takes great pride in being a NABL
                  certified laboratory. This prestigious certification
                  underscores our dedication to meeting the highest standards of
                  quality in diagnostic care.
                </p>
              </div>
            </div>
            <div className="s3-box s3-box2 flex flex-r">
              <DynamicImage imageName={"icmr-logo.jpg"} />
              <div className="s3-box-2-info">
                <h4>ICMR Approval</h4>
                <p className="para">
                  Konnect Diagnostics is recognized and approved by the Indian
                  Council of Medical Research (ICMR). This recognition further
                  solidifies our commitment to providing comprehensive health
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Section three------------------------------ */}
      <div className="sec-m s4 container flex flex-r">
        <div className=" s4-info">
          <span className="">Founder -----</span>
          <h3 className="hdng2">Dr. Mahesh Rao</h3>
          <p className="para">
            At Konnect Diagnostics, our team is led by the visionary founder,
            Dr. Mahesh Rao. With 15 years of experience as an orthopedic surgeon
            and expertise in the diagnostic business, Dr. Rao has played a
            pivotal role in shaping our organization. Driven by a passion for
            providing quality-focused and affordable diagnostic services, Dr.
            Rao envisioned a diagnostic chain that not only catered to the
            lucrative markets but also reached the underserved semi-urban and
            rural areas of India. His goal was to make high-quality diagnostics
            accessible to everyone, regardless of their geographical location.
          </p>
        </div>
        <div className=" s4-img">
          <DynamicImage imageName={"mahesh-rao.png"} />
        </div>
      </div>
      <div className="sec-m s5 container flex flex-r">
        <div className=" s5-box s5-box1 ">
          <div className=" s5-img">
            {/* <DynamicImage imageName={"/icons/box.svg"} /> */}
            <CiHospital1 className="icon-svg" />
          </div>
          <div className=" s5-txt">
            <p className="para">
              Konnect Diagnostics started with one center in Kompally and
              expanded to multiple locations, forming a partnership with
              PathLabs to enhance diagnostic capabilities
            </p>
          </div>
        </div>
        <div className=" s5-box s5-box2 ">
          <div className=" s5-img">
            <CiHospital1 className="icon-svg" />
          </div>
          <div className=" s5-txt">
            <p className="para">
              Driven by our passion for innovation, we introduced a
              groundbreaking addition to our diagnostic chain – the
              first-of-its-kind Fetal Medicine center.
            </p>
          </div>
        </div>
        <div className=" s5-box s5-box3 ">
          <div className=" s5-img">
            <CiHospital1 className="icon-svg" />
          </div>
          <div className=" s5-txt">
            <p className="para">
              Our journey is a testament to our dedication to delivering
              exceptional patient care, pushing the boundaries of innovation,
              and expanding our reach to touch more lives
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  h3.hdng2 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .asafj {
    background: url("https://demo.voidcoders.com/htmldemo/medhelpV2/medhelp-center/assets/images/hero-bg1.jpg");
    background-position: center top;
    height: 500px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      width: 50%;
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 20px;
    }
    p {
      width: 50%;
      font-weight: normal;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: 0;
      margin-bottom: 0;
      color: #000;
      line-height: 30px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }
  }
  .para-section {
    gap: 10px;
  }
  .sec-m {
    margin-bottom: 5rem;
  }
  .container {
    color: #fff;
    padding: 50px 0;
  }
  .flex {
    display: flex;
    flex-direction: column;
  }
  .banner-cnt {
    h2 {
      color: #005bab;
      font-size: 2rem;
    }
    h6 {
      font-size: 15px;
      span {
        color: #00aeef;
        font-family: inherit;
      }
    }
  }
  .banner-bg {
    height: 15em;
    align-items: center;
    background: linear-gradient(
        0deg,
        rgba(0, 32, 60, 0),
        rgba(0, 174, 239, 0.3)
      ),
      url("/images/about-banner.jpg");
    background-size: cover;
  }
  .flex-r {
    flex-direction: row;
  }
  .img-box img {
    width: 30rem;
    border-radius: 1rem;
    margin-bottom: 10rem;
  }
  .img-box {
    padding: 0 50px;
    background: url("/images/sec1-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .sec {
    gap: 50px;
    overflow: hidden;
    margin: 25px auto;
  }
  .para-box {
    gap: 1.5rem;
  }
  .para img {
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 100%;
    padding: 1rem;
    gap: 20px;
    width: 65px;
  }

  /* -----------------------------Section three------------------------------ */
  .s3 {
    // background-color: #00aeef;
    background-image: linear-gradient(to bottom, #00aeef 50%, white 50%);
    margin-top: 2rem;
    // height: 250px;
    h2 {
      text-align: center;
    }
  }
  .s3-boxes {
    gap: 3rem;
    justify-content: center;
    padding: 20px;
  }
  .s3-box {
    background-color: #fff;
    padding: 30px;
    margin: 25px 0 0 0;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 50%;
    gap: 20px;
  }
  .s3-box img {
    width: 120px;
  }
  .s3-box h4 {
    font-size: 1.2rem;
    font-weight: 900;
  }

  /* -----------------------------Section Four------------------------------ */

  .s4 {
    margin-top: 0px;
    height: 300px;
    justify-content: center;
    align-items: center;
    /* margin-top: 15rem; */
  }
  .s4-info {
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 2;
    padding: 100px 50px;
  }
  .s4 img {
    margin: 5rem 2rem 0;
    margin-top: -100px;
  }
  .s4-img {
    background-color: #00aeef;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* height: 100%; */
    border-radius: 0 15px 15px 0;
  }

  /* -----------------------------Section Five------------------------------ */

  .s5 {
    justify-content: center;
    margin: 25px auto;
    .icon-svg {
      width: 50px;
      height: 50px;
      fill: #00aeef;
    }
  }
  .s5-box {
    display: block;
    position: relative;
    // max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
  }
  .s5-box:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -26px;
    right: -26px;
    background: #00aeef;
    height: 52px;
    width: 52px;
    border-radius: 32px;
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }
  .s5-box1 {
    padding: 2rem;
  }
  .s5-box3 {
    padding: 1rem;
  }
  .s5-box2 {
    padding: 2rem;
  }
  .s5-box p {
    padding-top: 1rem;
    color: #606060;
  }

  // ---------
  p.para {
    font-weight: normal;
    font-size: 1rem;
    /* line-height: 32px; */
    letter-spacing: 0;
    margin-bottom: 0;
    color: #000;
    line-height: 30px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;

// .card1 {
//   display: block;
//   position: relative;
//   max-width: 262px;
//   background-color: #f2f8f9;
//   border-radius: 4px;
//   padding: 32px 24px;
//   margin: 12px;
//   text-decoration: none;
//   z-index: 0;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     top: -16px;
//     right: -16px;
//     background: #00838d;
//     height: 32px;
//     width: 32px;
//     border-radius: 32px;
//     transform: scale(1);
//     transform-origin: 50% 50%;
//     transition: transform 0.25s ease-out;
//   }

//   &:hover:before {
//     transform: scale(21);
//   }
// }
