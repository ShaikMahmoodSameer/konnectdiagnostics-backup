import ECHO from "../../components/services/rsArticles/2dECHO";
import CBCT from "../../components/services/rsArticles/CBCT";
import CT from "../../components/services/rsArticles/CT";
import ECG from "../../components/services/rsArticles/ECG";
import EEG from "../../components/services/rsArticles/EEG";
import MRI from "../../components/services/rsArticles/MRI";
import Mammography from "../../components/services/rsArticles/Mammography";
import NCS from "../../components/services/rsArticles/NCS";
import OPG from "../../components/services/rsArticles/OPG";
import PFT from "../../components/services/rsArticles/PFT";
import TMT from "../../components/services/rsArticles/TMT";
import Ultrasound from "../../components/services/rsArticles/Ultrasound";
import Xray from "../../components/services/rsArticles/Xray";

export const RsContentData = [
  {
    id: 1,
    slug: "two-dimensional-echocardiography",
    title: "2D ECHO (two-dimensional echocardiography)",
    category: "ECHO",
    excerpt:
      "2-Dimentional Echocardiography or ECHO is used to visualize the actual motion of the heart",
    productImage: "/images/srvcs/radiology/raiology_machines/2D_ECHO.jpg",
    component: <ECHO />,
  },
  {
    id: 2,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/CBCT.jpg",
    component: <CBCT />,
  },
  {
    id: 3,
    slug: "computed-tomography",
    title: "CT (Computed Tomography)",
    category: "CT",
    excerpt:
      "Computed Tomography or CT is a medical imaging procedure that produces detailed images ",
    productImage: "/images/srvcs/radiology/raiology_machines/CT.jpg",
    component: <CT />,
  },
  {
    id: 4,
    slug: "electrocardiogram",
    title: "ECG (Electrocardiogram)",
    excerpt:
      "Electrocardiogram or ECG (also called EKG) is a simple, non-invasive test that is used",
    productImage: "/images/srvcs/radiology/raiology_machines/ECG.jpg",
    component: <ECG />,
  },
  {
    id: 5,
    slug: "electroencephalogram",
    title: "EEG (Electroencephalogram)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/EEG.jpg",
    component: <EEG />,
  },
  {
    id: 6,
    slug: "mammography",
    title: "Mammography",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/Mammography.jpg",
    component: <Mammography />,
  },
  {
    id: 7,
    slug: "magnetic-resonance-imaging",
    title: "MRI (Magnetic Resonance Imaging)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/MRI.jpg",
    component: <MRI />,
  },
  {
    id: 8,
    slug: "nerve-conduction-studies",
    title: "NCS (Nerve Conduction Studies)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/NCS.jpg",
    component: <NCS />,
  },
  {
    id: 9,
    slug: "orthopantomagram",
    title: "OPG (Orthopantomagram)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/OPG.jpg",
    component: <OPG />,
  },
  {
    id: 10,
    slug: "pulmonary-function-test",
    title: "PFT (Pulmonary Function Test)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/PFT.jpg",
    component: <PFT />,
  },
  {
    id: 11,
    slug: "treadmill-test",
    title: "TMT (Treadmill test)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/TMT.jpg",
    component: <TMT />,
  },
  {
    id: 12,
    slug: "ultrasound",
    title: "Ultrasound",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/Ultrasound.jpg",
    component: <Ultrasound />,
  },
  {
    id: 13,
    slug: "x-ray",
    title: "X-ray",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/images/srvcs/radiology/raiology_machines/xray.jpg",
    component: <Xray />,
  },
];
