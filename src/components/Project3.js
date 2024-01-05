import React, { useRef } from 'react';
import styled from 'styled-components';
import projectImageHeader from '../assets/project3.jpg'; // Add your header image here

const Project3 = () => {
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const methodologyRef = useRef(null);
  const implementationRef = useRef(null);
  const feedbackRef = useRef(null);
  const conclusionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ProjectPage>
      {/* Full-width header image */}
      <HeaderImageContainer>
        <HeaderImage src={projectImageHeader} alt="Project 3" />
        <HeaderText>Financial Risk Modelling</HeaderText>
      </HeaderImageContainer>

      <ContentContainer>
        <Sidebar>
          <ul>
            <li>Overview</li> {/* Overview is just a heading, not clickable */}
            <li onClick={() => scrollToSection(problemRef)}>Problem</li>
            <li onClick={() => scrollToSection(solutionRef)}>Solution</li>
            <hr />
            <li onClick={() => scrollToSection(methodologyRef)}>Methodology</li>
            <li onClick={() => scrollToSection(implementationRef)}>Implementation</li>
            <li onClick={() => scrollToSection(feedbackRef)}>Feedback</li>
            <li onClick={() => scrollToSection(conclusionRef)}>Conclusion</li>
          </ul>
        </Sidebar>

        <Content>
          {/* Problem Section */}
          <Section ref={problemRef}>
            <h2>Problem</h2>
            <p>
              Financial institutions often struggle to accurately assess the risk of their investments and loans, leading to potential financial losses. The complexity of financial data, coupled with the dynamic nature of markets, makes it difficult for risk analysts to make informed decisions. This project aimed to address these challenges by developing a machine learning model capable of predicting financial risk for both loans and investments.
            </p>
          </Section>

          {/* Solution Section */}
          <Section ref={solutionRef}>
            <h2>Solution</h2>
            <p>
              The solution involved building a predictive model using historical financial data to assess the risk level of new loans and investments. The model uses various financial indicators, such as credit scores, income levels, market trends, and macroeconomic factors, to determine the probability of default or loss. By incorporating machine learning algorithms, the model can detect patterns and trends in the data that are difficult to identify manually.
            </p>
            <ul>
              <li>Use of historical data to assess risk</li>
              <li>Model trained on various financial indicators</li>
              <li>Prediction of risk levels for loans and investments</li>
            </ul>
          </Section>

          {/* Methodology Section */}
          <Section ref={methodologyRef}>
            <h2>Methodology</h2>
            <p>
              The methodology used in this project involved several steps:
            </p>
            <ul>
              <li><strong>Data Collection:</strong> Historical financial data was collected from various sources, including loan applications, investment portfolios, and market trends.</li>
              <li><strong>Data Preprocessing:</strong> Missing values were handled, and the data was normalized to ensure that all features were on the same scale. Outliers were also removed to prevent skewed results.</li>
              <li><strong>Feature Selection:</strong> The most important financial indicators were selected using techniques like correlation analysis and feature importance rankings.</li>
              <li><strong>Model Selection:</strong> Various machine learning models were tested, including Random Forest, XGBoost, and Logistic Regression, to determine the best performing model.</li>
              <li><strong>Model Evaluation:</strong> The models were evaluated using metrics like accuracy, precision, recall, and F1 score. Cross-validation was also performed to ensure the model's robustness.</li>
            </ul>
          </Section>

          {/* Implementation Section */}
          <Section ref={implementationRef}>
            <h2>Implementation</h2>
            <p>
              The models were implemented in Python using the scikit-learn and XGBoost libraries. Key steps in the implementation process include:
            </p>
            <ul>
              <li><strong>Data Preprocessing:</strong> The data was split into training and testing sets. Financial indicators such as credit scores, income levels, and market trends were used as input features.</li>
              <li><strong>Model Training:</strong> The Random Forest and XGBoost models were trained on the dataset. Hyperparameter tuning was performed to optimize the models.</li>
              <li><strong>Model Evaluation:</strong> The models were evaluated based on their ability to predict financial risk accurately. XGBoost achieved the best performance with an accuracy of 88%, while Random Forest achieved 85% accuracy.</li>
            </ul>
            <p>
              Visualizations such as ROC curves, confusion matrices, and feature importance charts were used to validate the models' performance.
            </p>
          </Section>

          {/* Feedback Section */}
          <Section ref={feedbackRef}>
            <h2>Feedback</h2>
            <p>
              Feedback from financial analysts indicated that the model provided valuable insights into the risk levels of various financial products. The predictive accuracy of the model was praised, especially for high-risk loans and investments. The model's ability to handle large datasets and process complex relationships between financial variables was also well-received.
            </p>
            <ul>
              <li><strong>Predictive Accuracy:</strong> The model consistently provided accurate risk predictions, helping analysts make better-informed decisions.</li>
              <li><strong>Scalability:</strong> The model was scalable and could be applied to different types of financial products with minimal adjustments.</li>
              <li><strong>User Feedback:</strong> Financial analysts appreciated the ability to easily interpret the model’s results, particularly through the use of visualizations like feature importance charts.</li>
            </ul>
          </Section>

          {/* Conclusion Section */}
          <Section ref={conclusionRef}>
            <h2>Conclusion</h2>
            <p>
              The financial risk modeling project demonstrated the effectiveness of machine learning in assessing financial risk. XGBoost proved to be the most effective model, providing accurate predictions of loan defaults and investment risks. By using historical data and financial indicators, the model helped financial institutions better understand the risks associated with their portfolios and make informed decisions.
            </p>
            <p>
              This project shows the potential of machine learning in the financial sector, where accurate risk prediction is crucial for minimizing losses and maximizing returns. Future work will focus on expanding the model to include more financial products and improving the model's interpretability for non-technical stakeholders.
            </p>
          </Section>
        </Content>
      </ContentContainer>
    </ProjectPage>
  );
};

// Styled Components remain the same as in Project1.js
// Styled Components

const ProjectPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

const HeaderText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      cursor: pointer;
      margin: 10px 0;
      font-size: 16px;
      color: #6A0DAD;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #ccc;
  }
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const PainPointsBox = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }
`;

export default Project3;
