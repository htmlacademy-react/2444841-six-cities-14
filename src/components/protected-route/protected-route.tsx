import { AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import { TProtectedRoute } from '../../types/index.ts';
import { useAppSelector } from '../../hooks/index.tsx';

export default function ProtectedRoute(props: TProtectedRoute): JSX.Element {
  const { redirectPage, children } = props;
  const status = useAppSelector((state) => state.authorizationStatus);

  return (
    status === AuthorizationStatus.Auth ? children : <Navigate to={redirectPage} />
  );
}
