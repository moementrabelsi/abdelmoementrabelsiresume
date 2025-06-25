import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import GitHubContributions from "../components/GitHubContributions";

// Import project media
import project1Image1 from "../assets/projects/project1-image1.jpg";
import project1Image2 from "../assets/projects/project1-image2.jpg";
import project2Image1 from "../assets/projects/project2-image1.jpg";
import project2Image2 from "../assets/projects/project2-image2.jpg";
import aideProjetMain from "../assets/projects/1.png";
import aideProjetNotifications from "../assets/projects/notifications.png";
import aideProjetSignin from "../assets/projects/signin.png";
import aideProjetCart from "../assets/projects/cart.png";
import aideProjetCart1 from "../assets/projects/cart1.png";
import aideprojetStreaming from "../assets/projects/streaming.png";
import reconnaissanceVideo from "../assets/projects/reconnaissance-final.mp4";
import Home from "../assets/projects/Home.png";
import Login from "../assets/projects/Login.png";
import Blog from "../assets/projects/Blog.png";
import Events from "../assets/projects/Event.png";
import Hologart1 from "../assets/projects/Hologart1.png";
import Hologart from "../assets/projects/Hologart.png";
import BudarentHome from "../assets/projects/BudarentHome.png";
import SigninBuda from "../assets/projects/SigninBuda.png";
import SignupBuda from "../assets/projects/SignupBuda.png";
import jenkins from "../assets/projects/jenkins.png";
import grafana1 from "../assets/projects/grafana1.png";
import Gaming from "../assets/projects/gaming1.png";
import GitHubProfile from "../components/GitHubProfile";
import GitHubActivity from "../components/GitHubActivity";

const Projects = () => {
  const { t } = useTranslation();

  // Use translation files for project data with fallback to English if keys are missing
  const projects = (() => {
    const projectData = t("projects.projectData", { returnObjects: true });
    return [
      {
        id: 5,
        title: projectData.hologart.title,
        description: projectData.hologart.description,
        detailedDescription: projectData.hologart.detailedDescription,
        features: projectData.hologart.features,
        challenges: projectData.hologart.challenges,
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Framer Motion",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
        ],
        year: projectData.hologart.year,
        link: "https://moementrabelsi.github.io/creative-studio/",
        media: [
          { type: "image", src: Hologart1 },
          { type: "image", src: Hologart },
        ],
      },
      {
        id: 2,
        title: t(
          projectData.aideProjet.titleKey,
          projectData.aideProjet.defaultTitle
        ),
        description: t(
          projectData.aideProjet.descriptionKey,
          projectData.aideProjet.defaultDescription
        ),
        detailedDescription: t(
          projectData.aideProjet.detailedDescriptionKey,
          projectData.aideProjet.defaultDetailedDescription
        ),
        features:
          t(projectData.aideProjet.featuresKey, { returnObjects: true }) ||
          projectData.aideProjet.defaultFeatures,
        challenges: t(
          projectData.aideProjet.challengesKey,
          projectData.aideProjet.defaultChallenges
        ),
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Socket.io",
          "WebRTC",
          "Stripe API",
        ],
        year: projectData.aideProjet.year,
        link: "https://github.com/moementrabelsi/AideProjet",
        media: [
          { type: "image", src: aideProjetMain },
          { type: "image", src: aideProjetNotifications },
          { type: "image", src: aideProjetSignin },
          { type: "image", src: aideProjetCart },
          { type: "image", src: aideProjetCart1 },
          { type: "image", src: aideprojetStreaming },
        ],
      },
      {
        id: 6,
        title: projectData.carRental.title,
        description: projectData.carRental.description,
        detailedDescription: projectData.carRental.detailedDescription,
        features: projectData.carRental.features,
        challenges: projectData.carRental.challenges,
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Framer Motion",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Microservices Architecture",
          "JWT Authentication",
          "REST APIs",
        ],
        year: projectData.carRental.year,
        link: "https://github.com/moementrabelsi/rent-car-app",
        media: [
          { type: "image", src: BudarentHome },
          { type: "image", src: SigninBuda },
          { type: "image", src: SignupBuda },
        ],
      },
      {
        id: 3,
        title: projectData.facialRecognition.title,
        description: projectData.facialRecognition.description,
        detailedDescription: projectData.facialRecognition.detailedDescription,
        features: projectData.facialRecognition.features,
        challenges: projectData.facialRecognition.challenges,
        technologies: [
          "TensorFlow",
          "OpenCV",
          "Python",
          "Neural Networks",
          "JavaScript",
          "Web APIs",
        ],
        year: projectData.facialRecognition.year,
        link: "https://github.com/moementrabelsi/Reconnaissance-facial",
        media: [{ type: "video", src: reconnaissanceVideo }],
      },
      {
        id: 4,
        title: projectData.gamingEcommerce.title,
        description: projectData.gamingEcommerce.description,
        detailedDescription: projectData.gamingEcommerce.detailedDescription,
        features: projectData.gamingEcommerce.features,
        challenges: projectData.gamingEcommerce.challenges,
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Payment Gateway APIs",
          "JWT Authentication",
        ],
        year: projectData.gamingEcommerce.year,
        media: [
          { type: "image", src: Gaming },
          { type: "image", src: Home },
          { type: "image", src: Login },
          { type: "image", src: Blog },
          { type: "image", src: Events },
        ],
      },
      {
        id: 1,
        title: projectData.devops.title,
        description: projectData.devops.description,
        detailedDescription: projectData.devops.detailedDescription,
        features: projectData.devops.features,
        challenges: projectData.devops.challenges,
        technologies: [
          "Jenkins",
          "Docker",
          "SonarQube",
          "Prometheus",
          "Grafana",
          "CI/CD",
        ],
        year: projectData.devops.year,
        link: "https://github.com/moementrabelsi",
        media: [
          { type: "image", src: jenkins },
          { type: "image", src: grafana1 },
        ],
      },
    ];
  })();

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Projects Header */}
      <section className="py-12 sm:py-16 md:py-20 max-w-screen-xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 uppercase tracking-tight">
          {t("projects.pageTitle")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 sm:mb-16">
          {t("projects.pageDescription")}
        </p>
      </section>

      {/* GitHub Profile */}
      <div className="px-4 sm:px-6">
        <GitHubProfile username="moementrabelsi" />
      </div>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch">
            {projects.map((project) => (
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
      {/* <section className="py-20 bg-rn-gray">
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
      </section> */}

      {/* GitHub Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-rn-gray bg-opacity-30">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            {t("projects.exploreMoreOnGitHub")}
          </h2>

          <div className="w-full">
            {/* GitHub Contributions */}
            <GitHubContributions username="moementrabelsi" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
