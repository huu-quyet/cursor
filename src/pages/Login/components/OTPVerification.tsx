import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authService } from '@/services/auth'

const OTP_LENGTH = 6

export function OTPVerification() {
    const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(''))
    const [activeInput, setActiveInput] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        if (inputRefs.current[activeInput]) {
            inputRefs.current[activeInput]?.focus()
        }
    }, [activeInput])

    const handleChange = (value: string, index: number) => {
        const newOtp = [...otp]
        newOtp[index] = value.slice(-1)
        setOtp(newOtp)

        if (value && index < OTP_LENGTH - 1) {
            setActiveInput(index + 1)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            setActiveInput(index - 1)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const otpValue = otp.join('')

        if (otpValue.length !== OTP_LENGTH) {
            setError('Vui lòng nhập đủ mã OTP')
            return
        }

        try {
            setError(null)
            setIsSubmitting(true)
            const response = await authService.verifyOtp(otpValue)

            if (response.success) {
                navigate('/dashboard')
            } else {
                setError(response.message || 'Xác thực OTP thất bại')
            }
        } catch (err) {
            setError('Xác thực OTP thất bại. Vui lòng thử lại.')
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex flex-col items-center space-y-8">
            <p className="text-center font-roboto-condensed text-sm font-medium">
                Vui lòng nhập mã OTP được gửi qua SĐT của bạn
            </p>

            {error && (
                <div className="w-full rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-800">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex gap-[30px]">
                    {otp.map((value, index) => (
                        <Input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el
                            }}
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="h-[45px] w-[42px] rounded-[7px] border-[#9C9C9C] text-center text-xl"
                            maxLength={1}
                            disabled={isSubmitting}
                        />
                    ))}
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#005270] font-encode-sans text-base font-medium tracking-[1.5%]"
                    disabled={isSubmitting}
                >
                    XÁC THỰC
                </Button>
            </form>
        </div>
    )
} 