import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';

function PrivateRoute() {
    const user = useSelector(selectUser)

    if (!user) {
        return <Navigate to="/login" />
    }

    // authorized so return outlet for child routes
    return <Outlet />;
}

export { PrivateRoute };