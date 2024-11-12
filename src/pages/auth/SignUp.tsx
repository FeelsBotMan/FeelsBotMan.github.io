import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 로직 구현
    console.log('SignUp attempt:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>회원가입</h1>
          <p>키보드 스토어의 회원이 되어주세요</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호"
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="비밀번호 확인"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="terms-group">
            <label className="terms-checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <span>이용약관 및 개인정보처리방침에 동의합니다</span>
            </label>
            <Link to="/terms" className="terms-link">
              약관 보기
            </Link>
          </div>

          <button type="submit" className="signup-button" disabled={!formData.agreeToTerms}>
            회원가입
          </button>

          <div className="social-signup">
            <span className="divider">또는</span>
            <div className="social-buttons">
              <button type="button" className="social-button kakao">
                카카오로 회원가입
              </button>
              <button type="button" className="social-button naver">
                네이버로 회원가입
              </button>
            </div>
          </div>

          <Link to="/login" className="back-to-login">
            <ArrowLeft size={16} />
            이미 계정이 있으신가요? 로그인하기
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 