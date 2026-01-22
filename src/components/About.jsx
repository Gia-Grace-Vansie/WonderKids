import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Story & Mission</h1>
            <p className="hero-subtitle">
              Creating a world where every child loves learning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Welcome to WonderKids World</h2>
              <p className="lead">
                WonderKids World is an innovative educational platform designed to 
                make learning engaging, effective, and fun for children aged 3-12.
              </p>
              
              <p>
                We believe that every child has a natural curiosity about the world. 
                Our mission is to nurture that curiosity through interactive games, 
                personalized learning paths, and creative activities that transform 
                education into an exciting adventure.
              </p>
              
              <div className="mission-statement">
                <h3>Our Mission</h3>
                <p>
                  To create a safe, engaging digital environment where children can 
                  explore, learn, and grow at their own pace, while providing parents 
                  and educators with powerful tools to support their learning journey.
                </p>
              </div>
            </div>
            
            <div className="content-visual">
              <div className="visual-placeholder">
                <div className="floating-shapes">
                  <div className="shape circle"></div>
                  <div className="shape triangle"></div>
                  <div className="shape square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <span>🎯</span>
              </div>
              <h3>Engagement First</h3>
              <p>
                Learning should be fun. We design experiences that captivate 
                children's attention while teaching essential skills.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <span>🛡️</span>
              </div>
              <h3>Safety & Privacy</h3>
              <p>
                A completely ad-free, secure environment with parental controls 
                and privacy protection for every child.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <span>📈</span>
              </div>
              <h3>Personalized Growth</h3>
              <p>
                Adaptive learning paths that adjust to each child's pace and 
                learning style for optimal progress.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <span>🤝</span>
              </div>
              <h3>Parent Partnership</h3>
              <p>
                Tools and insights for parents to actively participate in their 
                child's educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/History Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Journey</h2>
            <p>
              Founded in 2023 by a team of educators, parents, and technologists, 
              WonderKids World was born from a simple observation: children learn 
              best when they're having fun.
            </p>
            <p>
              After years of research and development, we've created a platform 
              that combines educational best practices with cutting-edge technology. 
              Today, we serve thousands of families and educators worldwide, 
              constantly evolving based on feedback and educational research.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Active Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Learning Activities</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Partner Schools</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Learning Community</h2>
            <p>
              Whether you're a parent, teacher, or school administrator, 
              there's a place for you in the WonderKids World.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-outline">Contact Our Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}