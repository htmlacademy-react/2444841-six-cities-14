import { AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import { TProtectedRoute } from '../../types/index.ts';
import { useAppSelector } from '../../hooks/index.tsx';
import { getAuthStatus } from '../../store/user/selectors.ts';

export default function ProtectedRoute(props: TProtectedRoute): JSX.Element {
  const { redirectPage, children } = props;
  const status = useAppSelector(getAuthStatus);

  return (
    status === AuthorizationStatus.Auth ? children : <Navigate to={redirectPage} />
  );
}
