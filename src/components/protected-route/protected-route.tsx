import { AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import { TProtectedRoute } from '../../types/index.ts';

///dev константа
const currentStatus: AuthorizationStatus = AuthorizationStatus.Auth;

export default function ProtectedRoute(props: TProtectedRoute): JSX.Element {
  const { status, redirectPage, children } = props;

  return (
    currentStatus === status ? <Navigate to={redirectPage} /> : children
  );
}
