import CancerScreeningFemale from "../../components/healthpackages/CancerScreeningFemale";
import CancerScreeningMale from "../../components/healthpackages/CancerScreeningMale";
import CardiacProfile from "../../components/healthpackages/CardiacProfile";
import DiabeticPackage from "../../components/healthpackages/DiabeticPackage";
import ExecutiveCardiacProfile from "../../components/healthpackages/ExecutiveCardiacProfile";
import ExecutiveHealthCheckup from "../../components/healthpackages/ExecutiveHealthCheckup";
import HealthScreen from "../../components/healthpackages/HealthScreen";
import KonnectMasterHealthCheckup from "../../components/healthpackages/KonnectMasterHealthCheckup";
import NutritionPackage from "../../components/healthpackages/NutritionPackage";
import WellWomenPackage from "../../components/healthpackages/WellWomenPackage";
import WholeBodyPackage from "../../components/healthpackages/WholeBodyPackage";

export const packagesData = [
  {
    id: "hp001",
    code: "001",
    name: "Health Screen",
    price: 1499,
    ftrImg: "/images/health-packages/health-screening.jpg",
    excerpt:
      "Basic Health Check-up Package can help in diagnosing conditions at an early stage and preventing",
    content: <HealthScreen />,
  },
  {
    id: "hp002",
    code: "002",
    name: "Diabetic Package",
    price: 2499,
    ftrImg: "/images/health-packages/hp-FeatureImages/diabetes_package.jpg",
    excerpt:
      "Basic Health Check-up Package can help in diagnosing conditions at an early stage and preventing",
    content: <DiabeticPackage />,
  },
  {
    id: "hp003",
    code: "003",
    name: "Konnect Master Health Checkup",
    price: 2999,
    ftrImg:
      "/images/health-packages/hp-FeatureImages/master_health_checkup.jpg",
    excerpt:
      "A master health check-up includes number of clinical tests utilized to assess the overall health of a person. The master health checkup includes a physical examination ultrasound and laboratory investigations that help evaluate the health of your vital organs and metabolism to identify any early symptoms of diseases to manage individual health better.",
    content: <KonnectMasterHealthCheckup />,
  },
  {
    id: "hp004",
    code: "004",
    name: "Executive Health Checkup",
    price: 5799,
    ftrImg:
      "/images/health-packages/hp-FeatureImages/executive_health_checkup.jpg",
    excerpt:
      "The aim of Executive Health Checkup is to extend the healthy life expectancy of population, to avoid untimely death and to improve the quality of life for people with a disease or disability by periodically checking all symptoms in the body.",
    content: <ExecutiveHealthCheckup />,
  },
  {
    id: "hp005",
    code: "005",
    name: "Cardiac Profile",
    price: 2999,
    ftrImg: "/images/health-packages/hp-FeatureImages/cardiac_profile.jpg",
    excerpt:
      "The cardiac profile is a comprehensive panel of tests that is used to check the overall functioning of the heart. By looking at the concentration of fats, certain enzymes, and the composition of urine and blood, it becomes easier for clinicians to evaluate the health of your heart.",
    content: <CardiacProfile />,
  },
  {
    id: "hp006",
    code: "006",
    name: "Executive Cardiac Profile",
    price: 4999,
    ftrImg:
      "/images/health-packages/hp-FeatureImages/executive_cardiac_profile.jpg",
    excerpt:
      "This package includes all important tests along with cardiac markers to give an overall idea of present cardiac health status. ",
    content: <ExecutiveCardiacProfile />,
  },
  {
    id: "hp007",
    code: "007",
    name: "Well Women Package",
    price: 6999,
    ftrImg: "/images/health-packages/hp-FeatureImages/well_women_package.jpg",
    excerpt:
      "This comprehensive package checks the possible causes of major ailments in women including some basic cancer screening tests to give an overall idea about their present health status.",
    content: <WellWomenPackage />,
  },
  {
    id: "hp008",
    code: "008",
    name: "Nutrition package",
    price: 1999,
    ftrImg: "/images/health-packages/hp-FeatureImages/nutrition_package.jpg",
    excerpt:
      "Deficiency of either Vitamins or Micronutrients in our body can result in long term adverse effects on multiple systems which can be prevented by proper nutrition and supplements. Konnect Nutrition Package covers essential tests to check the status of these Vitamins and Micronutrients in your body.",
    content: <NutritionPackage />,
  },
  {
    id: "hp009",
    code: "009",
    name: "Whole Body Package",
    price: 9999,
    ftrImg: "/images/health-packages/hp-FeatureImages/whole_body.jpg",
    excerpt:
      "A full body check-up generally includes assessments of a person's blood pressure, heart rate, breathing rate, temperature, weight, and height. It may also include tests to check cholesterol levels, blood sugar levels, and the presence of any infections.",
    content: <WholeBodyPackage />,
  },
  {
    id: "hp010",
    code: "010",
    name: "Cancer Screening – Male",
    price: 17999,
    ftrImg:
      "/images/health-packages/hp-FeatureImages/cancer_screening_male.jpg",
    excerpt:
      "All men should be screened for prostate cancer, colon cancer, and testicular cancer periodically, especially if there is a family history of these or any other cancer type. Screening tests look for cancer before a person has any signs or symptoms.",
    content: <CancerScreeningMale />,
  },
  {
    id: "hp011",
    code: "011",
    name: "Cancer Screening – Female",
    price: 19999,
    ftrImg:
      "/images/health-packages/hp-FeatureImages/cancer_screening_female.jpg",
    excerpt:
      "Clinical Breast Examination: Ideally done by a gynaecologist, it needs to be repeated every 2-3 years for women who are in their 30s and annually for women 40 & above. Mammogram: This is low dose x-ray test done to detect small and early stage breast cancers.",
    content: <CancerScreeningFemale />,
  },
];

export const organImages = [
  {
    src: "/images/organs/Heart.png",
    organ: "/",
    alt: "Heart",
  },
  {
    src: "/images/organs/Diabetes.png",
    alt: "Diabetes",
  },
  {
    src: "/images/organs/Allergy.png",
    alt: "Allergy",
  },
  {
    src: "/images/organs/Kidneys.png",
    alt: "Kidneys",
  },
  {
    src: "/images/organs/Pregnancy.png",
    alt: "Pregnancy",
  },
  {
    src: "/images/organs/Lungs.png",
    alt: "Lungs",
  },
  {
    src: "/images/organs/Fever.png",
    alt: "Fever",
  },
  {
    src: "/images/organs/Prostate.png",
    alt: "Prostate",
  },
  {
    src: "/images/organs/Thyroid.png",
    alt: "Thyroid",
  },
];

export const initialTests = [
  {
      "id": "INV100",
      "name": "Allergen Panel-Veg + Inhalant",
      "price": 4000,
      "sample_type": "Pleural fluid, csf",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Prostate"
  },
  {
      "id": "INV101",
      "name": "Allergen Panel-Veg + Non-Veg",
      "price": 8000,
      "sample_type": "10 mL Peritoneal Fluid",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Thyroid"
  },
  {
      "id": "INV102",
      "name": "Allergen Panel-Veg+Non Veg.+Inhalant",
      "price": 10000,
      "sample_type": "Urine",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Heart"
  },
  {
      "id": "INV103",
      "name": "Allergen Panel-Veg+Non Veg.+Inhalant+Drugs",
      "price": 15000,
      "sample_type": "Blood",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Diabetes"
  },
  {
      "id": "INV104",
      "name": "Allergen Panel-Vegetarian",
      "price": 6000,
      "sample_type": "Pleural fluid, csf",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Allergy"
  },
  {
      "id": "INV105",
      "name": "ALLERGY PANEL (FOOD AND DRUGS)",
      "price": 12000,
      "sample_type": "11 mL Peritoneal Fluid",
      "pre_test_preparation": "No special prepration required",
      "test_report_delivery": "Same day Report",
      "frequency": "As prescribed by your Doctor",
      "home_sample_collection": "Location",
      "category": "Kidneys"
  }
]

export const testsData = [
  {
    id: 1,
    category: "Blood",
    organ: "/images/organs/Heart.png",
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 2,
    category: "Heart",
    organ: "/images/organs/Heart.png",
    title: "IHC ER/PR/HER2nu(BREAST PANEL)",
    price: 4000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 3,
    category: "Cells",
    organ: "/images/organs/Thyroid.png",
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 4,
    category: "Breast",
    organ: "/images/organs/Heart.png",
    title: "IHC ER/PR/HER2nu(Breast panel) + Ki-67",
    price: 5000,
    inv: "INV2408",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 5,
    category: "Scan",
    organ: "/images/organs/Heart.png",
    title: "10X300 SWAB C/S",
    price: 3000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 6,
    category: "lung",
    organ: "/images/organs/Heart.png",
    title: "17-Ketosteroids",
    price: 1700,
    inv: "INV3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 6,
    category: "Heart",
    organ: "/images/organs/Heart.png",
    title: "17-Ketosteroids",
    price: 1700,
    inv: "INV3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    id: 7,
    category: "Heart",
    organ: "/images/organs/Heart.png",
    title: "17-Ketosteroids",
    price: 1700,
    inv: "INV3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
];

export const ytPatExpVids = [
  {
    id: 1,
    vidCode: "O5OmR3qcXVI",
  },
  {
    id: 2,
    vidCode: "hBE14y9zUKI",
  },
  {
    id: 3,
    vidCode: "NdGRpPOwPZk",
  },
  {
    id: 4,
    vidCode: "6Hk_FrWZa9E",
  },
  {
    id: 5,
    vidCode: "UaLYILf7Hs8",
  },
];

export const patientStoryData = [
  {
    id: 1,
    photo: "/images/patients/patient1.jpg",
    video: "/images/videos/pe_vid1.mp4",
    name: "Mounya Dutta",
    info: "unde Description unde omnis one",
    bg: "/images/patients/patient1Bg.jpg",
    description:
      "I've been consistently impressed with the impeccable service and accurate results provided by Konnect Diagnostic Center. Their skilled team and state-of-the-art equipment ensure a seamless experience every time. I trust them with my health without hesitation.",
  },
  {
    id: 2,
    photo: "/images/patients/patient2.jpg",
    video: "https://www.youtube.com/watch?v=ZSM3w1v-A_Y",
    name: "Arun Banurelli",
    info: "The unde Description unde omnis two ",
    bg: "/images/patients/patient2Bg.jpg",
    description:
      "Konnect Diagnostic Center has truly redefined healthcare for me. Their commitment to precision and patient care is evident in every interaction. From quick appointments to comprehensive reports, they make the diagnostic process smooth and reliable.",
  },
  {
    id: 3,
    photo: "/images/patients/patient3.jpg",
    name: "Neha",
    info: "The unde Description unde omnis three ",
    bg: "/images/patients/patient3Bg.jpg",
    description:
      "As a healthcare professional, I demand accuracy and efficiency in diagnostics. Konnect Diagnostic Center has become my go-to choice. The proficiency of their staff and the range of tests available make them an invaluable asset in ensuring my patients receive the best possible care.",
  },
  {
    id: 4,
    photo: "/images/patients/patient4.jpg",
    name: "Ashwin Nayak",
    info: "The unde Description unde omnis four ",
    bg: "/images/patients/patient4Bg.jpg",

    description:
      "I can't thank Konnect Diagnostic Center enough for their prompt and friendly service. Nervous about my tests, their compassionate staff immediately put me at ease. The results were delivered with clarity, and I am grateful for their role in keeping my health in check.",
  },
  {
    id: 5,
    photo: "/images/patients/patient5.jpg",
    name: "Hrithika singh",
    info: "The unde Description unde omnis five ",
    bg: "/images/patients/patient5Bg.jpg",
    description:
      "Konnect Diagnostic Center stands out in its commitment to quality and reliability. My family and I have been using their services for years, and they continue to impress us with their attention to detail and the personalized care they provide. Truly a center that cares.",
  },

  {
    id: 6,
    photo: "/images/patients/patient6.jpg",
    name: "Kalpana Nadumuri",
    info: "The unde Description unde omnis six ",
    bg: "/images/patients/patient6Bg.jpg",
    description:
      "Choosing Konnect Diagnostic Center was a game-changer for me. Their cutting-edge technology and skilled professionals ensure that I receive accurate results, allowing me to make informed decisions about my health. Their dedication to excellence is commendable.",
  },
];
