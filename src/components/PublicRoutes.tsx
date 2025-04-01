import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

export function PublicRoutes() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const location = useLocation()

    if (isAuthenticated) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />
    }

    return <Outlet />
} 