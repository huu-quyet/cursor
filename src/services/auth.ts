import { http } from './http'

interface LoginResponse {
  user: {
    id: string
    username: string
    email?: string
  }
  token: string
  requireOtp: boolean
}

interface OtpVerificationResponse {
  success: boolean
  message?: string
}

export const authService = {
  async login(username: string, password: string) {
    const response = await http.post<LoginResponse>('/auth/login', {
      username,
      password
    })
    return response.data
  },

  async verifyOtp(otp: string) {
    const response = await http.post<OtpVerificationResponse>('/auth/verify-otp', {
      otp
    })
    return response.data
  },

  refreshToken: async (): Promise<LoginResponse> => {
    const response = await http.post('/auth/refresh-token');
    return response.data;
  },
};