import { useNavigate } from 'react-router-dom';
import ErrorPage from '../components/common/ErrorPage';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ErrorPage
      title="404"
      message="페이지를 찾을 수 없습니다"
      onButtonClick={() => navigate('/')}
    />
  );
};

export default NotFound;