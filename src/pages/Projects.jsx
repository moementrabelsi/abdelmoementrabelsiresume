import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

// Import project media
import project1Image1 from '../assets/projects/project1-image1.jpg';
import project1Image2 from '../assets/projects/project1-image2.jpg';
import project2Image1 from '../assets/projects/project2-image1.jpg';
import project2Image2 from '../assets/projects/project2-image2.jpg';
import aideProjetMain from '../assets/projects/1.png';
import aideProjetNotifications from '../assets/projects/notifications.png';
import aideProjetSignin from '../assets/projects/signin.png';
import aideProjetCart from '../assets/projects/cart.png'
import aideProjetCart1 from '../assets/projects/cart1.png'
import aideprojetStreaming from '../assets/projects/streaming.png'
import reconnaissanceVideo from '../assets/projects/reconnaissance-final.mp4'
import Hologart1 from '../assets/projects/Hologart1.png'
import Hologart from '../assets/projects/Hologart.png'
import BudarentHome from '../assets/projects/BudarentHome.png'
import SigninBuda from '../assets/projects/SigninBuda.png'
import SignupBuda from '../assets/projects/SignupBuda.png'
import jenkins from '../assets/projects/jenkins.png'
import grafana1 from '../assets/projects/grafana1.png'
import Gaming from '../assets/projects/gaming1.png'

const Projects = () => {
  const { t } = useTranslation();

  // Project data
  const projects = [
    {
      id: 5,
      title: 'Hologart Website',
      description: 'Developed a responsive portfolio and creative agency website using React.js and Tailwind CSS, focused on modern design and smooth animations.',
      detailedDescription: 'Hologart is a sleek and responsive web application tailored for freelancers and creative agencies to showcase their portfolios. It emphasizes clean UI, smooth scroll animations, and a mobile-first approach. Designed to be both aesthetically pleasing and highly functional, the site includes sections for featured work, services, and contact information, making it ideal for presenting creative work in a professional format.',
      features: [
        'Responsive layout for mobile and desktop viewing',
        'Animated transitions using Framer Motion',
        'Component-based structure with reusable UI elements',
        'Optimized for performance and SEO best practices',
        'Interactive contact form and social media links',
        'Dark mode support for enhanced user experience'
      ],
      challenges: 'Balancing visual appeal with performance was a key challenge. Achieving fluid animations while maintaining responsiveness and fast load times required fine-tuning of CSS and React component optimizations.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      year: '2025',
      link: 'https://moementrabelsi.github.io/creative-studio/',
      media: [
        { type: 'image', src: Hologart1 },
        { type: 'image', src: Hologart }
      ]
    },
    {
      id: 6,
      title: 'Car Rental Web Application',
      description: 'Developed a full-stack car rental platform using React.js, Node.js (Express), and MongoDB, with a microservices architecture for scalable backend operations.',
      detailedDescription: 'This car rental application provides a seamless experience for users to browse, filter, and reserve rental vehicles. The frontend is built with React and Tailwind CSS for a responsive and visually appealing UI, while the backend is structured using a microservices architecture to ensure scalability and maintainability. Core services handle user management, car listings, bookings, and payment processing. MongoDB serves as the primary database for storing vehicle, user, and booking data.',
      features: [
        'Responsive frontend with dynamic car listings and search filters',
        'Microservices backend for modular and scalable architecture',
        'User authentication and role-based access control',
        'Car booking management with real-time availability checks',
        'RESTful APIs for frontend-backend communication',
        'Secure and efficient MongoDB data handling',
        'Smooth UI transitions with Framer Motion'
      ],
      challenges: 'Designing and coordinating multiple backend services while maintaining data integrity and low latency was a major challenge. I implemented service isolation and efficient API gateways to manage requests and ensured consistent data modeling across services.',
      technologies: [
        'React.js',
        'Tailwind CSS',
        'Framer Motion',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Microservices Architecture',
        'JWT Authentication',
        'REST APIs'
      ],
      year: '2025',
      link: 'https://github.com/moementrabelsi/rent-car-app',
      media: [
        { type: 'image', src: BudarentHome },
        { type: 'image', src: SigninBuda },
        { type: 'image', src: SignupBuda }
      ]
    },
    {
      id: 2,
      title: 'AideProjet - Online Formation Platform',
      description: 'Developed a front-end application from Adobe XD mockups for a web platform that sells online formations and training courses.',
      detailedDescription: 'AideProjet is a comprehensive online formation platform designed to provide users with access to a wide range of educational courses and training materials. Working from detailed Adobe XD mockups, I created a responsive and user-friendly interface that enhances the learning experience while maintaining a clean, professional aesthetic.',
      features: [
        'Responsive and intuitive user interface built from Adobe XD mockups',
        'Comprehensive user authentication system with secure login',
        'Advanced course catalog with filtering and search capabilities',
        'User dashboard for tracking progress and managing enrolled courses',
        'Real-time notifications system for updates and new content',
        'Seamless payment integration for course purchases'
      ],
      challenges: 'Translating the detailed Adobe XD mockups into a fully functional front-end while ensuring responsiveness across all devices was challenging. I implemented a component-based architecture that maintained design fidelity while providing excellent user experience on both mobile and desktop platforms.',
      technologies: ['React.js', 'Vue.js', 'TailwindCSS', 'JavaScript', 'RESTful APIs', 'Authentication'],
      year: '2024',
      link: 'https://github.com/moementrabelsi/AideprojetNode',
      media: [
        { type: 'image', src: aideProjetMain },
        { type: 'image', src: aideProjetNotifications },
        { type: 'image', src: aideProjetSignin },
        { type: 'image', src: aideProjetCart },
        { type: 'image', src: aideProjetCart1 },
        { type: 'image', src: aideprojetStreaming }
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Face Recognition Module',
      description: 'Implemented an AI face recognition system using TensorFlow and OpenCV for secure authentication and user identification.',
      detailedDescription: 'This project focused on developing a sophisticated face recognition module that leverages artificial intelligence for secure and accurate user identification. The system uses deep learning models to analyze facial features and match them against a database of known faces, providing a secure and convenient authentication method.',
      features: [
        'Real-time face detection and recognition',
        'High accuracy using convolutional neural networks',
        'Secure user authentication system',
        'Integration with existing web applications',
        'Privacy-focused design with data protection',
        'Performance optimization for various hardware configurations'
      ],
      challenges: 'Balancing recognition accuracy with performance was the primary challenge. I implemented model optimization techniques and efficient processing algorithms to achieve high accuracy while maintaining reasonable processing speeds even on modest hardware.',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Neural Networks', 'JavaScript', 'Web APIs'],
      year: '2024',
      link: 'https://github.com/moementrabelsi/Reconnaissance-facial',
      media: [
        { type: 'video', src: reconnaissanceVideo }
      ]
    },
    {
      id: 4,
      title: 'Gaming E-Commerce Platform',
      description: 'Built a comprehensive e-commerce platform for gaming products using React.js, Node.js, and MongoDB with secure transaction processing.',
      detailedDescription: 'This gaming e-commerce platform provides gamers with a seamless shopping experience for purchasing games, hardware, and accessories. The platform features an attractive UI, efficient product filtering, secure payment processing, and comprehensive order management, catering to both casual and serious gamers.',
      features: [
        'Intuitive product browsing and search functionality',
        'Advanced filtering and sorting options',
        'Secure shopping cart and checkout process',
        'User account management with purchase history',
        'Product reviews and ratings system',
        'Responsive design for mobile and desktop users'
      ],
      challenges: 'Implementing a secure and efficient transaction system while handling a large product database was challenging. I designed an optimized database structure and implemented secure payment processing integration while ensuring fast loading times for product listings.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Payment Gateway APIs', 'JWT Authentication'],
      year: '2022',
      media: [
        { type: 'image', src: Gaming },
      ]
    },
    {
      id: 1,
      title: 'DevOps CI/CD Project',
      description: 'Implemented CI/CD pipelines with Jenkins, Docker, SonarQube, Prometheus, and Grafana for automated testing, deployment, and monitoring.',
      detailedDescription: 'This project focused on implementing robust DevOps practices for a microservices-based application. The CI/CD pipeline automates the entire software delivery process, from code commit to production deployment, with quality gates at each stage ensuring efficient and reliable software deployment.',
      features: [
        'Containerized microservices architecture using Docker',
        'Jenkins pipelines for continuous integration and deployment',
        'Automated code quality checks with SonarQube',
        'Comprehensive monitoring with Prometheus and Grafana dashboards',
        'Infrastructure as Code practices',
        'Automated security scanning and vulnerability assessment'
      ],
      challenges: 'The main challenge was integrating various tools into a cohesive pipeline while ensuring security and compliance. I implemented standardized pipeline definitions across multiple services and developed automated rollback mechanisms for failed deployments.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Prometheus', 'Grafana', 'CI/CD'],
      year: '2023',
      link: 'https://github.com/moementrabelsi',
      media: [
        { type: 'image', src: jenkins },
        { type: 'image', src: grafana1 }
      ]
    }

  ];

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Projects Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">my projects</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          Below is a selection of projects I've worked on. Each one represents a unique challenge
          and showcases different aspects of my technical abilities and problem-solving skills.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      {/* <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">other works</h2>

          <ul className="space-y-6 max-w-4xl">
            {t('projects.list', { returnObjects: true }).map((project, index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-200 hover:border-black transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">{project}</h3>
                </div>
                <a href="#" className="inline-block text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors self-start md:self-center">
                  Details
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* Additional Projects Section */}
      {/* Additional Projects Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">other works</h2>

          <ul className="space-y-6 max-w-4xl">
            <li className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-200 hover:border-black transition-colors">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Agricultural Products & Services Website</h3>
              </div>
              <a
                href="https://your-project-url.com" // Replace with actual project URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors self-start md:self-center"
              >
                Details
              </a>
            </li>
          </ul>
        </div>
      </section>



      {/* GitHub Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More on GitHub</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Check out my GitHub repositories for more projects, contributions, and code samples.
          </p>
          <a
            href="https://github.com/moementrabelsi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
          >
            Visit GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
