import "../styles/Home.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Where <span className="gradient-text">Curiosity</span> Meets Learning
              </h1>
              <p className="hero-description">
                WonderKids World transforms education into an adventure. Interactive lessons, 
                engaging games, and personalized learning paths for every child.
              </p>
              <div className="hero-cta">
                <button className="cta-primary">
                  <span>Start Free Trial</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
                <button className="cta-secondary">View Demo</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Learning Activities</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Happy Kids</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Educators</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="element math">π</div>
                <div className="element science">🔬</div>
                <div className="element art">🎨</div>
                <div className="element book">📖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LEARNING PATHS */}
      <section className="learning-paths">
        <div className="container">
          <div className="section-header">
            <h2>Personalized Learning Journeys</h2>
            <p>Curriculum-aligned paths that adapt to your child's progress</p>
          </div>
          
          <div className="paths-grid">
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon math">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div className="path-level">Beginner</div>
              </div>
              <h3>Math Foundations</h3>
              <p>Build essential math skills through interactive games and puzzles</p>
              <div className="path-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
                <span>12 of 18 lessons</span>
              </div>
            </div>
            
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon reading">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                </div>
                <div className="path-level">Intermediate</div>
              </div>
              <h3>Reading Adventure</h3>
              <p>Develop literacy with interactive stories and vocabulary builders</p>
              <div className="path-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '40%'}}></div>
                </div>
                <span>8 of 20 lessons</span>
              </div>
            </div>
            
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon science">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 6h-2v2h2v2h-2v2h2v2h-4v-4h2v-2h-2v-2h2v-2h-2V7h4v2h-2v2z"/>
                  </svg>
                </div>
                <div className="path-level">Beginner</div>
              </div>
              <h3>Science Explorer</h3>
              <p>Discover the world through virtual experiments and discovery</p>
              <div className="path-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
                <span>5 of 20 lessons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ACTIVITIES */}
      <section className="featured-activities">
        <div className="container">
          <div className="section-header">
            <h2>Today's Featured Activities</h2>
            <p>New and trending educational games</p>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card featured">
              <div className="activity-image math-activity">
                <div className="activity-badge">New</div>
              </div>
              <div className="activity-content">
                <div className="activity-meta">
                  <span className="category">Math</span>
                  <span className="duration">15 min</span>
                </div>
                <h4>Fraction Forest Adventure</h4>
                <p>Learn fractions while exploring a magical forest</p>
                <div className="activity-footer">
                  <span className="age-group">Ages 7-9</span>
                  <button className="play-button">Play Now</button>
                </div>
              </div>
            </div>
            
            <div className="activity-card">
              <div className="activity-image science-activity">
                <div className="activity-badge popular">Popular</div>
              </div>
              <div className="activity-content">
                <div className="activity-meta">
                  <span className="category">Science</span>
                  <span className="duration">20 min</span>
                </div>
                <h4>Solar System Explorer</h4>
                <p>Journey through space and learn about planets</p>
                <div className="activity-footer">
                  <span className="age-group">Ages 8-10</span>
                  <button className="play-button">Play Now</button>
                </div>
              </div>
            </div>
            
            <div className="activity-card">
              <div className="activity-image reading-activity">
                <div className="activity-badge trending">Trending</div>
              </div>
              <div className="activity-content">
                <div className="activity-meta">
                  <span className="category">Reading</span>
                  <span className="duration">25 min</span>
                </div>
                <h4>Story Builder Workshop</h4>
                <p>Create your own adventure story</p>
                <div className="activity-footer">
                  <span className="age-group">Ages 6-8</span>
                  <button className="play-button">Play Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Why WonderKids World?</h2>
            <p>Designed with education and engagement in mind</p>
          </div>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Curriculum Aligned</h3>
              <p>Content developed by educators to match school standards</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3>Personalized Learning</h3>
              <p>Adaptive paths that adjust to each child's pace</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3>Safe Environment</h3>
              <p>Ad-free, secure platform with parental controls</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3>Progress Tracking</h3>
              <p>Detailed reports on learning milestones and achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start the Learning Adventure?</h2>
            <p>Join thousands of parents and educators who trust WonderKids World</p>
            <div className="cta-buttons">
              <button className="cta-primary large">Get Started for Free</button>
              <button className="cta-outline large">Schedule a Demo</button>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "My daughter went from struggling with math to asking for extra practice. 
                WonderKids World has made learning something she looks forward to!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <p className="author-name">Sarah Johnson</p>
                  <p className="author-role">Parent & Elementary Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}