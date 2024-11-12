import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>키보드 스토어에 오신 것을 환영합니다</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>자동 로그인</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              비밀번호 찾기
            </Link>
          </div>

          <button type="submit" className="login-button">
            로그인
            <ArrowRight size={16} />
          </button>

          <div className="social-login">
            <span className="divider">또는</span>
            <div className="social-buttons">
              <button type="button" className="social-button kakao">
                카카오로 시작하기
              </button>
              <button type="button" className="social-button naver">
                네이버로 시작하기
              </button>
            </div>
          </div>

          <div className="signup-prompt">
            <span>아직 회원이 아니신가요?</span>
            <Link to="/signup" className="signup-link">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 