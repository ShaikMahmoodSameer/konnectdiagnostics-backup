import { styled } from "styled-components";
import { Link } from "react-router-dom";
import RsCard from "../../components/services/RsCard";

// const rediologyServicesData = {
//   twoD_echo: {
//     id: "rdo_serv1",
//     name: "2D ECHO (two-dimensional echocardiography)",
//     machImg: "./images/srvcs/radiology/raiology_machines/2D_ECHO.jpg",
//     shortDesc: `2-Dimentional Echocardiography or ECHO is used to visualize the actual motion of the heart. On the monitor, a cone-shaped 2D ECHO view shows the real-time motion of the heart's structures.`,
//     content:
//       "2-Dimentional Echocardiography or ECHO is used to visualize the actual motion of the heart. On the monitor, a cone-shaped 2D ECHO view shows the real-time motion of the heart's structures.",
//   },
//   CBCT: {
//     id: "rdo_serv2",
//     name: "CBCT (Cone-Beamed Computed Tomography)",
//     machImg: "./images/srvcs/radiology/raiology_machines/CBCT.jpg",
//     shortDesc: `Cone-beamed computed tomography or CBCT is a form of medical imaging technology that creates precise 3D images of maxillofacial bones and soft tissues.`,
//     content:
//       "Cone-beamed computed tomography or CBCT is a form of medical imaging technology that creates precise 3D images of maxillofacial bones and soft tissues.",
//   },
//   CT: {
//     id: "rdo_serv3",
//     name: "CT (Computed Tomography)",
//     machImg: "./images/srvcs/radiology/raiology_machines/CT.jpg",
//     shortDesc: `Computed Tomography or CT is a medical imaging procedure that produces detailed images of the body by combining a number of X-ray images taken `,
//     content:
//       "Computed Tomography or CT is a medical imaging procedure that produces detailed images of the body by combining a number of X-ray images taken ",
//   },
//   ECG: {
//     id: "rdo_serv4",
//     name: "ECG (Electrocardiogram)",
//     machImg: "./images/srvcs/radiology/raiology_machines/ECG.jpg",
//     shortDesc: `Electrocardiogram or ECG (also called EKG) is a simple, non-invasive test that is used to document the electrical activity of the heart. `,
//     content:
//       "Electrocardiogram or ECG (also called EKG) is a simple, non-invasive test that is used to document the electrical activity of the heart. ",
//   },
//   EEG: {
//     id: "rdo_serv5",
//     name: "EEG (Electroencephalogram)",
//     machImg: "./images/srvcs/radiology/raiology_machines/EEG.jpg",
//     shortDesc: `Electroencephalogram or EEG also known as a brain wave test measures the electrical activity of the brain. It helps the healthcare provider to diagnose. `,
//     content:
//       "Electroencephalogram or EEG also known as a brain wave test measures the electrical activity of the brain. It helps the healthcare provider to diagnose. ",
//   },
//   Mammography: {
//     id: "rdo_serv6",
//     name: "Mammography",
//     machImg: "./images/srvcs/radiology/raiology_machines/Mammography.jpg",
//     shortDesc: `Mammography is a specialized medical imaging technique that uses a low dose of X-ray to help a healthcare provider to detect, diagnose, and evaluate breast diseases. `,
//     content:
//       "Mammography is a specialized medical imaging technique that uses a low dose of X-ray to help a healthcare provider to detect, diagnose, and evaluate breast diseases. ",
//   },
//   MRI: {
//     id: "rdo_serv7",
//     name: "MRI (Magnetic Resonance Imaging)",
//     machImg: "./images/srvcs/radiology/raiology_machines/MRI.jpg",
//     shortDesc: `Magnetic Resonance Imaging or MRI scan is a type of medical imaging procedure that uses radio waves and a magnetic field to create pictures. `,
//     content:
//       "Magnetic Resonance Imaging or MRI scan is a type of medical imaging procedure that uses radio waves and a magnetic field to create pictures. ",
//   },
//   NCS: {
//     id: "rdo_serv8",
//     name: "NCS (Nerve Conduction Studies)",
//     machImg: "./images/srvcs/radiology/raiology_machines/NCS.jpg",
//     shortDesc: `Nerve Conduction Studies or NCS (also called Nerve Conduction Velocity or NCV) measures nerve response to an electrical stimulus. `,
//     content:
//       "Nerve Conduction Studies or NCS (also called Nerve Conduction Velocity or NCV) measures nerve response to an electrical stimulus. ",
//   },
//   OPG: {
//     id: "rdo_serv9",
//     name: "OPG (Orthopantomagram)",
//     machImg: "./images/srvcs/radiology/raiology_machines/OPG.jpg",
//     shortDesc: `Orthopantomagram or OPG is a panoramic scan that involves an examination of both the upper and lower jaws of an individual.  `,
//     content:
//       "Orthopantomagram or OPG is a panoramic scan that involves an examination of both the upper and lower jaws of an individual.  ",
//   },
//   PFT: {
//     id: "rdo_serv10",
//     name: "PFT (Pulmonary Function Test)",
//     machImg: "./images/srvcs/radiology/raiology_machines/PFT.jpg",
//     shortDesc: `Pulmonary Function Test or PFT involves different tests that help determine an individual's lung capacity. A healthcare provider recommends.  `,
//     content:
//       "Pulmonary Function Test or PFT involves different tests that help determine an individual's lung capacity. A healthcare provider recommends.  ",
//   },
//   TMT: {
//     id: "rdo_serv11",
//     name: "TMT (Treadmill test)",
//     machImg: "./images/srvcs/radiology/raiology_machines/TMT.jpg",
//     shortDesc: `Treadmill test or TMT demonstrates how the heart beats during exercise. It is also known as a stress exercise test. The heart beats harder and faster during exercise.  `,
//     content:
//       "Treadmill test or TMT demonstrates how the heart beats during exercise. It is also known as a stress exercise test. The heart beats harder and faster during exercise.  ",
//   },
//   Ultrasound: {
//     id: "rdo_serv12",
//     name: "Ultrasound",
//     machImg: "./images/srvcs/radiology/raiology_machines/Ultrasound.jpg",
//     shortDesc: `Ultrasound, also known as sonography or diagnostic medical sonography, is an imaging technique that makes use of sound waves to create images.  `,
//     content:
//       "Ultrasound, also known as sonography or diagnostic medical sonography, is an imaging technique that makes use of sound waves to create images.  ",
//   },
//   Xray: {
//     id: "rdo_serv13",
//     name: "X-ray",
//     machImg: "./images/srvcs/radiology/raiology_machines/xray.jpg",
//     shortDesc: `X-ray is a type of imaging technology that employs low ionizing radiation to capture the image of the body's bones and soft tissues.   `,
//     content:
//       "X-ray is a type of imaging technology that employs low ionizing radiation to capture the image of the body's bones and soft tissues.   ",
//   },
// };

// const RadiologySrvcCard = (props) => {
//   return (
//     <div className="r_imgbox_wrapper">
//       <div
//         className="r_imgbox_img"
//         style={{
//           backgroundImage: `url('${props.servInfo.machImg}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       ></div>
//       <RsCard />
//       <div className="r_imgbox_content p-3">
//         <h2 className="r_heading_title_secondary r_imgbox_title mb-2">
//           {props.servInfo.name}
//         </h2>
//         <p className="r_imgbox_desc">
//           {props.servInfo.shortDesc.substring(0, 65)}...
//         </p>
//         <button type="button" className="btn btn-primary btn-sm">
//           Know More
//         </button>
//       </div>
//     </div>
//   );
// };

const RadiologyServices = () => {
  return (
    <Wrapper>
      <div className="rs banner-bg ">
        <div className="container banner">
          <h6>
            <span>
              <Link to="/">Home</Link>/<Link to="/services">Services</Link>
            </span>
            /Radiology Services
          </h6>
          <h2>Radiology Services</h2>

          <p className="para">
            Konnect Diagnostics offers top-tier radiology services with
            cutting-edge technology, expert radiologists, and swift turnaround
            times for accurate diagnoses. Your health, our priority.
          </p>
        </div>
      </div>

      <section className="r_section" id="s_rs_s2">
        <div>
          <RsCard />
          {/* <div className="d-flex flex-wrap justify-content-center p-5">

            <RadiologySrvcCard servInfo={rediologyServicesData.twoD_echo} />
            <RadiologySrvcCard servInfo={rediologyServicesData.CBCT} />
            <RadiologySrvcCard servInfo={rediologyServicesData.CT} />
            <RadiologySrvcCard servInfo={rediologyServicesData.ECG} />
            <RadiologySrvcCard servInfo={rediologyServicesData.EEG} />
            <RadiologySrvcCard servInfo={rediologyServicesData.Mammography} />
            <RadiologySrvcCard servInfo={rediologyServicesData.MRI} />
            <RadiologySrvcCard servInfo={rediologyServicesData.NCS} />
            <RadiologySrvcCard servInfo={rediologyServicesData.OPG} />
            <RadiologySrvcCard servInfo={rediologyServicesData.PFT} />
            <RadiologySrvcCard servInfo={rediologyServicesData.TMT} />
            <RadiologySrvcCard servInfo={rediologyServicesData.Ultrasound} />
            <RadiologySrvcCard servInfo={rediologyServicesData.Xray} />
          </div> */}
        </div>
      </section>
    </Wrapper>
  );
};

export default RadiologyServices;

const Wrapper = styled.section`
  .r_imgbox_wrapper {
    margin: 10px;
    width: 330px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    overflow: hidden;
  }
  .r_imgbox_img {
    width: 100%;
    height: 200px;
    // background-size: cover;
    // backgrond-position: center center;
    img {
      background: #34495e;
      // border: 1px solid #34495e;
      // width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: right top;
    }
  }
  .r_imgbox_title,
  .r_imgbox_desc {
    font-size: 16px;
  }
  #s_rs_s2 {
    background: #fafafa;
  }

  // ---------------------------------------
  .tst-group {
    flex-wrap: wrap;
    gap: 1rem;
    margin: 50px auto;
  }
  .banner-bg {
    display: flex;
    align-items: center;
    /* text-align: center; */
    height: 20em;
    background: url("/images/radiology-services-banner.jpg");
    background-size: cover;
    .banner {
      /* width: 50%; */
      color: #fff;
      h2 {
        color: #00203c;
        font-weight: 800;
      }
      h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: #00203c;
        span {
          color: #00aeef;
          a {
            color: #00aeef;
            text-decoration: none;
          }
        }
      }
      p {
        color: #606060;
        width: 30%;
      }
    }
  }
  .rs-body {
    margin: 50px auto;
  }
`;
