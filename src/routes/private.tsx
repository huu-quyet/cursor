import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const DashboardPage = lazy(() => import('@/pages/Dashboard'))

export const privateRoutes: RouteObject[] = [
    {
        path: '/dashboard',
        element: <DashboardPage />
    },
    {
        path: '*',
        element: <Navigate to="/dashboard" replace />
    }
] 