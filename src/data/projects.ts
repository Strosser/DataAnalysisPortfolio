import excelImg from '../img/excel.png';
import powerBI from '../img/powerbi.png';


export const projects = [
  {
    id: 'marketBasket',
    title: "Coffe Sales Analysis",
    description: "Analyzing customer purchasing patterns using association rule mining techniques.",
    fullDescription: "An in-depth analysis of retail transaction data to uncover hidden patterns in customer purchasing behavior. This project utilized advanced association rule mining techniques to identify product relationships and optimize store layout and promotional strategies.",
    tags: ["Excel", "XLOOKUP", "INDEX", "Pivot tables"],
    image: excelImg,
    insights: [
      "Discovered 15 significant product associations with confidence > 80%",
      "Identified optimal product placement strategies",
      "Generated 23% increase in cross-selling opportunities",
      "Developed interactive dashboard for real-time analysis"
    ],
    methodology: [
      "Data Cleaning and Preparation: Removal of duplicates and adding desired values using XLOOKUP Formulas",
      "Using INDEX formula for dynamicly render values from different sheet",
      "Created pivot tables for answer key question with slixers and timelines",
      "Interactive visualization dashboard to controll all graphs"
    ],
    github: "https://github.com/Strosser/ExcelCoffeSales"
  },
  {
    id: 'timeSeries',
    title: "Delayed Flights Analysis",
    description: "Predicting future sales trends using advanced time series analysis methods.",
    fullDescription: "Implementation of sophisticated time series forecasting models to predict future sales trends. This project combines traditional statistical methods with modern machine learning approaches to achieve highly accurate predictions.",
    tags: ["PowerBI", "Excel", "Dashboard"],
    image: powerBI,
    insights: [
    ],
    methodology: [
    ],
    github: "https://drive.google.com/drive/folders/1TApnQ2z5ndxWXGVaA6uG-FHeuptgNzAx?usp=sharing"
  }
];