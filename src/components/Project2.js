import React, { useRef } from 'react';
import styled from 'styled-components';
import projectImageHeader from '../assets/project2.png'; // Add your header image here

const Project2 = () => {
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
        <HeaderImage src={projectImageHeader} alt="Project 2" />
        <HeaderText>Transfer Learning for Image Classification</HeaderText>
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
              In image classification, training models from scratch often requires large amounts of data, which may not always be available. This project addresses the problem of classifying visually similar objects—smartphones and remote controls—with a small dataset. The challenge lies in differentiating between the two classes, which are often confused due to their physical similarities.
            </p>
          </Section>

          {/* Solution Section */}
          <Section ref={solutionRef}>
            <h2>Solution</h2>
            <p>
              To solve the classification challenge, we leveraged transfer learning techniques using pre-trained models like VGG-16, ResNet-50, MobileNet, and EfficientNet. These models were fine-tuned on a custom dataset of smartphones and remote controls. By reusing pre-trained knowledge, we minimized the need for a large dataset, while maintaining high accuracy.
            </p>
            <ul>
              <li>Use of pre-trained models to save time and resources</li>
              <li>Fine-tuning the models on the target dataset</li>
              <li>Comparison between different models to determine the best performance</li>
            </ul>
          </Section>

          {/* Methodology Section */}
          <Section ref={methodologyRef}>
            <h2>Methodology</h2>
            <p>
              The methodology involved several key steps:
            </p>
            <ul>
              <li><strong>Data Preparation:</strong> The dataset was preprocessed by resizing images and augmenting them to artificially increase the size of the dataset.</li>
              <li><strong>Model Selection:</strong> We used transfer learning models such as VGG-16, ResNet-50, MobileNet, and EfficientNet for classification.</li>
              <li><strong>Training:</strong> The models were trained using a small dataset, and hyperparameters were fine-tuned to optimize performance.</li>
              <li><strong>Evaluation:</strong> Performance metrics such as accuracy, precision, recall, and F1 score were used to evaluate each model's performance.</li>
            </ul>
          </Section>

          {/* Implementation Section */}
          <Section ref={implementationRef}>
            <h2>Implementation</h2>
            <p>
              The models were implemented in Python using TensorFlow and Keras libraries. Key steps in the implementation process include:
            </p>
            <ul>
              <li><strong>Data Augmentation:</strong> Techniques like flipping, rotation, and zooming were used to artificially expand the dataset.</li>
              <li><strong>Model Training:</strong> Transfer learning models were trained on the dataset. MobileNet and VGG-16 showed the best performance during training.</li>
              <li><strong>Evaluation:</strong> Model performance was measured using accuracy, precision, recall, and F1 score. MobileNet achieved the highest accuracy of 92%, while VGG-16 reached 90% accuracy.</li>
            </ul>
            <p>
              Figures showing heatmaps, accuracy curves, and confusion matrices were used to validate the performance of the models.
            </p>
          </Section>

          {/* Feedback Section */}
          <Section ref={feedbackRef}>
            <h2>Feedback</h2>
            <p>
              Feedback from users and stakeholders emphasized the efficiency of using transfer learning for image classification, particularly with limited data. MobileNet and VGG-16 were praised for their performance and low computational requirements, making them suitable for deployment in real-world applications.
            </p>
            <ul>
              <li><strong>Scalability:</strong> The models can easily be extended to other classification tasks with similar challenges.</li>
              <li><strong>Efficiency:</strong> Transfer learning reduced the training time significantly while maintaining high accuracy.</li>
              <li><strong>User Satisfaction:</strong> The model met stakeholders' requirements for accuracy and usability, especially in scenarios where gathering a large dataset is difficult.</li>
            </ul>
          </Section>

          {/* Conclusion Section */}
          <Section ref={conclusionRef}>
            <h2>Conclusion</h2>
            <p>
              This project demonstrated the effectiveness of transfer learning in image classification, particularly in scenarios where data is limited. MobileNet and VGG-16 were the most successful models, reaching high accuracy with fewer training samples. This approach significantly reduces the resource requirements for training models from scratch, making it a viable solution for various real-world applications.
            </p>
            <p>
              Transfer learning not only saves time and computational resources but also opens the door for scalable image classification models across different industries. Future work will focus on expanding the dataset and exploring other pre-trained models for further improvements.
            </p>
          </Section>
        </Content>
      </ContentContainer>
    </ProjectPage>
  );
};

// Styled Components remain the same as in Project1.js

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

export default Project2;
