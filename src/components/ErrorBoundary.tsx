import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()

  let errorMessage = 'Đã xảy ra lỗi không mong muốn'

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        errorMessage = 'Không tìm thấy trang bạn yêu cầu'
        break
      case 401:
        errorMessage = 'Bạn không có quyền truy cập trang này'
        break
      case 403:
        errorMessage = 'Truy cập bị từ chối'
        break
      case 503:
        errorMessage = 'Dịch vụ hiện không khả dụng'
        break
      default:
        errorMessage = error.statusText
    }
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
        <p className="text-lg text-gray-600">{errorMessage}</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(-1)} variant="outline">
            Quay lại
          </Button>
          <Button onClick={() => navigate('/')}>Về trang chủ</Button>
        </div>
      </div>
    </div>
  )
}