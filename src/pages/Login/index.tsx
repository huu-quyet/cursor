import { Suspense } from 'react'
import { LoginHeader } from './components/LoginHeader'
import { LoginForm } from './components/LoginForm'
import { useAuthStore } from '@/store/auth'
import { OTPVerification } from './components/OTPVerification'

export default function LoginPage() {
    const { isOTPVerification } = useAuthStore((state) => state)
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <div className="w-full max-w-[480px] space-y-8">
                <Suspense fallback={<div>Loading...</div>}>
                    <LoginHeader />
                    {isOTPVerification ? <OTPVerification /> : <LoginForm />}
                </Suspense>
            </div>
        </div>
    )
} 