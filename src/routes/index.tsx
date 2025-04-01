import { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicRoutes } from '@/components/PublicRoutes'
import { PrivateRoutes } from '@/components/PrivateRoutes'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { authRoutes } from './auth'
import { privateRoutes } from './private'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <PublicRoutes />
            </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        children: authRoutes
    },
    {
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <PrivateRoutes />
            </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        children: privateRoutes
    }
])

export default router 