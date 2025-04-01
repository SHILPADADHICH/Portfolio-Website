import { Project } from "@/props";

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
     
      <Project
        title="Gas-Utility-Service"
        description="The Django-based web application is designed for gas utility companies to efficiently manage customer service requests by enabling customers to submit and track service requests, manage accounts, and providing support representatives with tools for request management and resolution, utilizing technologies like Django, SQLite/PostgreSQL, Bootstrap & CSS, and the Django Email System."
        preview="/images/projects/gas-utility.png"
        githubLink="https://github.com/SHILPADADHICH/Gas_utility_service_django"
        liveLink=""
        techLogo={[
          "/logos/css.svg",
          "/logos/django-icon.svg",
          "/logos/sql-com.svg",
          
          "/logos/tailwind.svg",
        ]}
        techStack={[
          "React JS",
          "Node JS",
          "Express JS",
          "MongoDB",
          "Socket.IO",
          "Tailwind CSS",
        ]}
      />

      <Project
        title="MyChat Bot"
        description="Simple Image Uploader: A sleek solution for seamless image uploading and management. Powered by Next.js and MongoDB, it guarantees secure, user-friendly functionality. Perfect for efficient image management."
        preview="/images/projects/mychatbot.png"
        githubLink="https://github.com/SHILPADADHICH/MychatBot"
        liveLink=" https://mychatfriend.netlify.app/"
        techLogo={[
          "/logos/js.svg",
          "/logos/html.svg",
          "/logos/css.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Next JS", "Node JS", "Tailwind CSS"]}
      />

      

      <Project
        title="Weather ForecastApp"
        description="This is a full stack weather app built using HTML, CSS, Express JS and Node JS. It fetches weather data from OpenWeatherMap API and displays it to the user. It also allows users to search for weather of any city."
        preview="/images/projects/weather.png"
        githubLink="https://github.com/SHILPADADHICH/Weather-Forecast-Tool"
        liveLink=""
        techLogo={[
          "/logos/node.svg",
          "/logos/express.svg",
          "/logos/html.svg",
          "/logos/js.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Node JS", "Express JS", "HTML", "JS", "Tailwind CSS"]}
      />

      <Project
        title="Todo App"
        description="This is a todo app built using core technologies like HTML, CSS and JS. It allows users to add, delete and edit tasks. This is full fledged CRUD application."
        preview="/images/projects/simon-game.png"
        githubLink="https://github.com/SHILPADADHICH/Simon-game"
        liveLink="https://simon-game27.netlify.app/"
        techLogo={["/logos/html.svg", "/logos/js.svg", "/logos/tailwind.svg"]}
        techStack={["HTML", "JS", "Tailwind CSS"]}
      />
    </div>
  );
};

export default Projects;
