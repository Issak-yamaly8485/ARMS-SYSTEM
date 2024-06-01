import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SadminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.role === 'superadmin' ? <Outlet /> : <Navigate to='/home' replace />;
};
export default SadminRoute;