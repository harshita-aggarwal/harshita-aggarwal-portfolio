import SkillsFilter from "../components/SkillsFilter";

const AboutPage = () => {
  return (
    <div className="container about-section">
      <h1 className="about-heading">About <span className="about-heading-accent">Me</span></h1>

      <section className="mb-16">
        <p className="about-bio">
          I am a full-stack and cloud developer with a passion for building
          things that actually work, end to end. I specialize in the MERN stack
          for web development, Python for cloud solutions and I bring a solid
          DevOps background to everything I build.
        </p>
      </section>

      <SkillsFilter />

      <section className="mb-16">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="timeline">
            <div className="timeline-item">
              <p className="timeline-date">Sept 2023 — May 2025</p>
              <h3 className="timeline-title">
                Cloud Developer & Teaching Assistant
              </h3>
              <p className="timeline-subtitle">
                ASU AI Smart City Cloud Innovation Center · Scottsdale, AZ
              </p>
              <ul className="timeline-body list-disc list-inside space-y-1 mt-auto pt-3">
                <li>
                  Built a multi-lingual chatbot using Python and LLM APIs for
                  100+ users
                </li>
                <li>
                  Deployed serverless full-stack apps using Python (Flask) and
                  cloud-native patterns
                </li>
                <li>
                  Led technical deep-dives for 80+ students on fullstack and
                  cloud fundamentals
                </li>
                <li>
                  Automated grading workflows saving 10+ hours/week for a team
                  of 7 TAs
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <p className="timeline-date">July 2020 — June 2023</p>
              <h3 className="timeline-title">DevOps Engineer - Software Configuration Management</h3>
              <p className="timeline-subtitle">
                Tata Consultancy Services Ltd. · Gurugram, India
              </p>
              <ul className="timeline-body list-disc list-inside space-y-1 mt-auto pt-3">
                <li>
                  Engineered CI/CD pipelines with Jenkins achieving 99% SLA
                  compliance
                </li>
                <li>
                  Containerized apps with Docker, reducing deployment failures
                  by 25%
                </li>
                <li>
                  Integrated SonarQube for automated static analysis on Java
                  projects
                </li>
                <li>
                  Led full migration from TFS to GitHub preserving 100% of
                  version history
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="timeline">
            <div className="timeline-item">
              <p className="timeline-date">Aug 2023 — May 2025</p>
              <h3 className="timeline-title">Masters of Science, Computer Science
              </h3>
              <p className="timeline-subtitle">
                Arizona State University · Tempe, Arizona, United States
              </p>
              <p className="timeline-body">GPA 3.93 / 4.00</p>
            </div>

            <div className="timeline-item">
              <p className="timeline-date">Aug 2016 — Sept 2020</p>
              <h3 className="timeline-title">Bachelor of Technology, Information Technology</h3>
              <p className="timeline-subtitle">
                Guru Gobind Singh Indraprastha University · Delhi, India
              </p>
              <p className="timeline-body">GPA 8.77 / 10.00</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;
