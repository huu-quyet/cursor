import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const LoginPage = lazy(() => import('@/pages/Login'))

export const authRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/auth/*',
        element: <Navigate to="/login" replace />
    }
] 