import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 비밀번호 재설정 이메일 발송 로직
    setIsSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        {!isSubmitted ? (
          <>
            <div className="forgot-password-header">
              <h1>비밀번호 찾기</h1>
              <p>가입하신 이메일로 비밀번호 재설정 링크를 보내드립니다</p>
            </div>

            <form onSubmit={handleSubmit} className="forgot-password-form">
              <div className="form-group">
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                재설정 링크 받기
              </button>

              <Link to="/login" className="back-to-login">
                <ArrowLeft size={16} />
                로그인으로 돌아가기
              </Link>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>이메일을 확인해주세요</h2>
            <p>
              {email}로 비밀번호 재설정 링크를 발송했습니다.<br />
              이메일이 도착하지 않았다면 스팸함을 확인해주세요.
            </p>
            <Link to="/login" className="back-to-login-button">
              로그인으로 돌아가기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 