export const enTranslations = {
  header: {
    title: 'Data Analysis Portfolio',
    subtitle: 'Jan Štrosser'
  },
  hero: {
    title: 'Data & Analysis',
    subtitle: 'Exploring datasets through basic analysis tools and visualization techniques.'
  },
  projects: {
    marketBasket: {
      title: 'Coffe Sales Analysis',
      description: 'Analyzing customer purchasing patterns using association rule mining techniques.',
      fullDescription: 'Coffee Sales Data Analysis to Identify Key Trends and Improve Business Strategies. This project utilizes analytical tools in Excel, including Pivot Tables, advanced functions such as XLOOKUP and INDEX, to conduct an in-depth examination of customer behavior and product preferences. The outcome includes the identification of sales trends and recommendations for optimizing inventory and promotional campaigns.',
      methodology: [
        'Data Cleaning and Preparation: Removal of duplicates and adding desired values using XLOOKUP Formulas',
        'Using INDEX formula for dynamicly render values from different sheet',
        'Created pivot tables for answer key question with slicers and timelines',
        'Interactive visualization dashboard to controll all graphs'
      ]
    },
    timeSeries: {
      title: 'Flight Delay Analysis',
      description: 'An analysis of flight delay datasets to improve operational strategies in air transport.',
      fullDescription: 'This project focuses on the visualization and analysis of delayed flights using Power BI. The goal of the project is to identify the main causes of delays and analyze their impact on overall operations. Leveraging advanced analytical functions in Power BI, including DAX calculations and interactive filters, the dashboard provides insights into trends and patterns within the data, facilitating operational optimization and strategic planning.',
      methodology: [
        'Data cleaning and preparation: Adjusting the dataset, removing missing values, and setting data types.',
        'Using DAX functions to calculate average delay time, number of delayed flights, and categorize delays by cause.',
        'Creating interactive visualizations, including geographic maps, bar charts, and time series for better trend understanding.',
        'Implementing filters and slicers for interactive analysis, enabling users to examine delays by airport, airline, time, and other categories.'
      ]
    }    
  },
  common: {
    liveDemo: 'Live Demo',
    viewCode: 'View Code',
    keyInsights: 'Key Insights',
    methodology: 'Methodology'
  }
};