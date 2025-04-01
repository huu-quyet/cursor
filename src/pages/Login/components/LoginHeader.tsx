import logo from '@/assets/logo.png'

export function LoginHeader() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <img src={logo} alt="Mobifone Logo" className="h-16 w-auto" />
            <h1 className="text-center font-roboto-condensed text-[16px] font-medium tracking-[1.5%] text-[#005270]">
                Hệ thống Bản đồ dữ liệu Mobifone
            </h1>
        </div>
    )
} 