import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const OurWorkSection = styled.section`
  background: #1E1E1E;
  padding: 180px 0;
  
  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 95px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 100px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  margin-left: 140px;
  
  @media (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 60px;
    margin-left: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 100px;
  max-width: 1010px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
    gap: 15px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const ProjectBox = styled(motion.a)`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
  background: #E01212;
  display: block;
  text-decoration: none;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 1;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    max-width: 100%;
  }
`;

const VideoWrapper = styled(motion.div)`
  display: block;
  width: 100%;
  position: relative;
  
  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const OurWork: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: require('../../images/steakhouse.png'),
      link: 'https://www.behance.net/gallery/164224219/Seat-Steakhouse'
    },
    {
      id: 2,
      image: require('../../images/beerfest.png'),
      link: 'https://www.behance.net/gallery/181761985/Beer-Fest-Rebranding'
    },
    {
      id: 3,
      image: require('../../images/creativeindustries.png'),
      link: 'https://www.behance.net/gallery/204671965/CIK-Brand-Identity'
    },
    {
      id: 4,
      image: require('../../images/quin.png'),
      link: 'https://www.behance.net/gallery/194665163/QUIN-Catalogue'
    },
    {
      id: 5,
      image: require('../../images/retouch1.png'),
      link: 'https://www.behance.net/gallery/175337393/Professional-Beauty-Retouch'
    },
    {
      id: 6,
      image: require('../../images/retouch2.png'),
      link: 'https://www.behance.net/gallery/175335049/High-End-Portrait-Retouch'
    }
  ];

  return (
    <OurWorkSection id="ourwork">
      <Container>
        <Title>OUR WORK</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectBox
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={`Project ${project.id}`} />
            </ProjectBox>
          ))}
        </ProjectsGrid>
        {/* <VideoContainer id="video">
          <VideoWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <video
              src={require('../../videos/burrnesha.mp4')}
              controls
              loop
              playsInline
            />
          </VideoWrapper>
        </VideoContainer> */}
      </Container>
    </OurWorkSection>
  );
};

export default OurWork;

