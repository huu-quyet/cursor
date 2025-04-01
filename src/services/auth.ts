import http from './http';

interface LoginResponse {
  user: {
    id: string;
    username: string;
    email?: string;
  };
  token: string;
}

interface OtpVerificationResponse {
  success: boolean;
  message: string;
}

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await http.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  },

  verifyOtp: async (otp: string): Promise<OtpVerificationResponse> => {
    const response = await http.post('/auth/verify-otp', {
      otp,
    });
    return response.data;
  },

  refreshToken: async (): Promise<LoginResponse> => {
    const response = await http.post('/auth/refresh-token');
    return response.data;
  },
};