import React, { useRef } from 'react';
import styled from 'styled-components';
import projectImageHeader from '../assets/Project1.webp'; // Add your header image here

const Project1 = () => {
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
        <HeaderImage src={projectImageHeader} alt="Project 1" />
        <HeaderText>Cardiovascular Disease Prediction</HeaderText>
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
              Cardiovascular diseases (CVD) are one of the leading causes of death globally, posing a significant challenge for healthcare providers in identifying at-risk individuals early. Traditional methods of diagnosing CVD often come too late to implement preventative measures. The complexity of factors—ranging from lifestyle habits to health metrics—makes it difficult for medical professionals to assess individual risks efficiently at scale.
            </p>
            <p>
              This project aims to address this by developing a machine learning model capable of predicting CVD risk using a comprehensive dataset of patient health metrics. By identifying at-risk individuals early, healthcare providers can intervene with personalized treatment plans, potentially reducing CVD-related mortality rates.
            </p>
          </Section>

          {/* Pain Points Section */}
          <Section>
            <PainPointsBox>
              <h3>Pain Points</h3>
              <ul>
                <li>📌 <strong>Inconsistent Monitoring of Health Metrics:</strong> Many individuals do not regularly check or track key health metrics, leading to a lack of awareness of their cardiovascular risk factors.</li>
                <li>📌 <strong>Complexity of Identifying Risk Patterns:</strong> Healthcare providers face challenges in analyzing large datasets with various health parameters, making it time-consuming to identify at-risk individuals.</li>
                <li>📌 <strong>Delayed Preventative Action:</strong> Late detection of cardiovascular risk often leads to missed opportunities for early intervention and prevention.</li>
              </ul>
            </PainPointsBox>
          </Section>

          {/* Solution Section */}
          <Section ref={solutionRef}>
            <h2>Solution</h2>
            <p>
              To address the challenges in identifying cardiovascular disease (CVD) risk early, we developed a machine learning model that analyzes patient health data to predict CVD risk. The model takes into account various health metrics such as age, cholesterol levels, blood pressure, and lifestyle habits to assess individual risk factors.
            </p>
            <p>
              By using this predictive model, healthcare providers can:
              <ul>
                <li>Identify at-risk individuals earlier.</li>
                <li>Implement personalized treatment plans.</li>
                <li>Optimize resource allocation for preventative care.</li>
              </ul>
            </p>
          </Section>

          {/* Methodology Section */}
          <Section ref={methodologyRef}>
            <h2>Methodology</h2>
            <p>
              The following methodology was followed in this project:
            </p>
            <ul>
              <li><strong>Data Preprocessing:</strong> Handled missing values and balanced the dataset to prevent bias.</li>
              <li><strong>Exploratory Data Analysis (EDA):</strong> Conducted feature analysis and created visualizations to better understand the dataset.</li>
              <li><strong>Choosing the Model and Training:</strong> Trained and evaluated multiple machine learning models including Naive Bayes, Support Vector Classifier, Random Forest, Logistic Regression, Decision Tree, and XGBoost. Performance was measured using metrics like accuracy, precision, recall, and F1 score.</li>
              <li><strong>Model Evaluation:</strong> Models were evaluated based on their ability to classify individuals with cardiovascular risk, focusing on metrics like accuracy, precision, and recall.</li>
            </ul>
          </Section>

          <Section ref={implementationRef}>
            <h2>Implementation</h2>
            <p>
              The implementation of the machine learning model involved several key steps, including data preprocessing, exploratory data analysis, and addressing class imbalance. Here's a breakdown of the major steps:
            </p>
            <h5>A. Exploratory Data Analysis (EDA)</h5>
            <p>
              After data cleaning and preparation, exploratory data analysis was performed to understand the feature distributions. Various visualizations were generated to identify key relationships and insights.
            </p>
            {/* Insert rest of the Implementation content here */}
          </Section>

          {/* Feedback Section */}
          <Section ref={feedbackRef}>
            <h2>Feedback</h2>
            <p>
              After the development of the model, extensive feedback was gathered from healthcare professionals and data scientists who interacted with the tool. The general response was overwhelmingly positive due to the following reasons:
            </p>
            <ul>
              <li><strong>Ease of Use:</strong> Healthcare providers found the interface user-friendly, allowing them to input patient data and receive real-time predictions quickly without requiring advanced technical knowledge.</li>
              <li><strong>Predictive Accuracy:</strong> The application of the machine learning model, especially after addressing class imbalance, showed a significant improvement in the ability to predict cardiovascular disease risk.</li>
            </ul>
          </Section>

          {/* Conclusion Section */}
          <Section ref={conclusionRef}>
            <h2>Conclusion</h2>
            <p>
              The machine learning model developed for predicting cardiovascular disease (CVD) risk provides a powerful tool for healthcare providers to identify at-risk individuals early.
            </p>
            {/* Add more conclusion content here */}
          </Section>
        </Content>
      </ContentContainer>
    </ProjectPage>
  );
};

// Styled Components remain the same

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

export default Project1;
