import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// REMOVED: import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login attempt with:", formData);
    alert("Login successful! Redirecting to dashboard...");
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    alert("Password reset link would be sent to your email!");
  };

  const handleShowRegister = () => {
    navigate("/register");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div style={styles.logo}>WonderKids</div>
          <div style={styles.subtitle}>Where Curiosity Meets Learning</div>
          <h2 style={styles.h2}>Welcome Back!</h2>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="login-email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e1e5eb'}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label htmlFor="login-password" style={styles.label}>Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e1e5eb'}
              />
            </div>
            
            <div style={styles.forgotPassword}>
              <a href="#" onClick={handleForgotPassword} style={styles.forgotLink}>Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              style={styles.btn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              onMouseDown={(e) => e.target.style.transform = 'translateY(-1px)'}
              onMouseUp={(e) => e.target.style.transform = 'translateY(-3px)'}
            >
              Login
            </button>
          </form>
          
          <div style={styles.switchText}>
            Don't have an account? 
            <span 
              style={styles.switchLink} 
              onClick={handleShowRegister}
              onMouseEnter={(e) => e.target.style.color = '#764ba2'}
              onMouseLeave={(e) => e.target.style.color = '#667eea'}
            >
              Sign up
            </span>
          </div>
        </div>

        <div style={styles.sidePanel}>
          <div style={styles.decorativeIcons}>
            <div style={{...styles.icon, top: '12%', right: '10%'}}>π</div>
            <div style={{...styles.icon, top: '65%', right: '8%'}}>🎨</div>
            <div style={{...styles.icon, bottom: '18%', left: '10%'}}>📁</div>
            <div style={{...styles.icon, top: '35%', left: '8%'}}>🔬</div>
          </div>
          <h2 style={styles.sidePanelH2}>Transform Education Into Adventure</h2>
          <p style={styles.sidePanelP}>Interactive lessons, engaging games, and personalized learning paths for every child.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    background: 'white',
    borderRadius: '24px',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    width: '95%',
    maxWidth: '1100px',
    minHeight: '650px',
    display: 'flex',
  },
  formContainer: {
    flex: 1,
    padding: '45px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '320px',
  },
  logo: {
    fontSize: '34px',
    fontWeight: '800',
    color: '#667eea',
    marginBottom: '10px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: '#666',
    marginBottom: '35px',
    fontSize: '15px',
    fontWeight: '400',
  },
  h2: {
    color: '#333',
    marginBottom: '32px',
    fontSize: '30px',
    fontWeight: '700',
  },
  inputGroup: {
    marginBottom: '22px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontSize: '14px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    border: '2px solid #e1e5eb',
    borderRadius: '12px',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    background: '#f8fafc',
    color: '#333',
  },
  btn: {
    width: '100%',
    padding: '18px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '15px',
    letterSpacing: '0.3px',
  },
  switchText: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#64748b',
    fontSize: '14px',
    paddingTop: '22px',
    borderTop: '1px solid #e2e8f0',
  },
  switchLink: {
    color: '#667eea',
    fontWeight: '700',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: '6px',
    transition: 'color 0.2s',
  },
  sidePanel: {
    flex: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '45px 40px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minWidth: '320px',
  },
  sidePanelH2: {
    color: 'white',
    fontSize: '40px',
    marginBottom: '24px',
    fontWeight: '800',
    lineHeight: '1.25',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sidePanelP: {
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '35px',
    opacity: '0.95',
    maxWidth: '450px',
    fontWeight: '300',
  },
  decorativeIcons: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    opacity: '0.2',
  },
  icon: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    padding: '20px',
    fontSize: '30px',
    backdropFilter: 'blur(8px)',
  },
  forgotPassword: {
    textAlign: 'right',
    margin: '-8px 0 22px 0',
  },
  forgotLink: {
    color: '#667eea',
    fontSize: '13px',
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer',
  },
};

export default Login;