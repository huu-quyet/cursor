import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth'

export default function DashboardPage() {
    const logout = useAuthStore((state) => state.logout)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md space-y-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome to your dashboard!</p>
                <Button onClick={logout} variant="outline">
                    Đăng xuất
                </Button>
            </div>
        </div>
    )
} 