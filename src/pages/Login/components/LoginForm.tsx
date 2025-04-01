import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useAuthStore } from '@/store/auth'
import { authService } from '@/services/auth'
import userIcon from '@/assets/user-icon.svg'
import keyIcon from '@/assets/key-icon.svg'

const loginSchema = z.object({
    username: z.string().min(1, 'Tài khoản không được để trống'),
    password: z.string().min(1, 'Mật khẩu không được để trống'),
    rememberMe: z.boolean().default(false)
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    const { login, setIsOTPVerification } = useAuthStore((state) => state)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            rememberMe: false
        }
    })

    const onSubmit = async (data: LoginFormData) => {
        try {
            setError(null)
            setIsOTPVerification(true)
            const response = await authService.login(data.username, data.password)

            login(response.user, response.token, data.rememberMe)

            if (response.requireOtp) {
                navigate('/verify-otp')
            } else {
                navigate('/dashboard')
            }
        } catch (err) {
            setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.')
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
                <div className="rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-800">{error}</p>
                </div>
            )}

            <div className="space-y-2">
                <div className="flex items-center gap-1">
                    <label htmlFor="username" className="text-sm font-medium">
                        Tài khoản
                    </label>
                    <span className="text-sm text-muted-foreground">(Ví dụ:tuan.pvan10)</span>
                    <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-2 flex items-center">
                        <img src={userIcon} alt="" className="h-5 w-5" />
                    </div>
                    <Input
                        id="username"
                        type="text"
                        className="pl-9"
                        placeholder="Nhập tên tài khoản"
                        {...register('username')}
                    />
                </div>
                {errors.username && (
                    <p className="text-sm text-red-500">{errors.username.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-1">
                    <label htmlFor="password" className="text-sm font-medium">
                        Mật khẩu
                    </label>
                    <span className="text-red-500">*</span>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-2 flex items-center">
                        <img src={keyIcon} alt="" className="h-5 w-5" />
                    </div>
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className="pl-9"
                        placeholder="Nhập mật khẩu"
                        {...register('password')}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center"
                    >
                        {showPassword ? (
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <EyeOffIcon className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
            </div>

            <div className="flex items-center space-x-2">
                <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                        <Checkbox
                            id="rememberMe"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    )}
                />
                <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Ghi nhớ đăng nhập
                </label>
            </div>

            <Button
                type="submit"
                className="w-full bg-[#005270] font-encode-sans text-base font-medium tracking-[1.5%]"
                disabled={isSubmitting}
            >
                ĐĂNG NHẬP
            </Button>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#827D7D]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 font-encode-sans text-xl font-medium">
                        Hoặc
                    </span>
                </div>
            </div>

            <Button
                type="button"
                variant="link"
                className="w-full font-roboto-condensed text-base font-medium text-[#005270]"
            >
                Đăng nhập qua email Mobifone
            </Button>
        </form>
    )
} 