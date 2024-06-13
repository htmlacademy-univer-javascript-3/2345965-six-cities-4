import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {authorizationStatus, children} = props;

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'/login'} />
  );
}

export default PrivateRoute;
