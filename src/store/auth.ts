import { create } from 'zustand';
import { authService } from '@/services/auth';

interface User {
  id: string;
  username: string;
  email?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string, rememberMe: boolean) => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (username: string, password: string, rememberMe: boolean) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(username, password);

      set({
        user: response.user,
        isAuthenticated: false, // Will be set to true after OTP verification
        isLoading: false,
      });

      if (rememberMe) {
        localStorage.setItem('auth', JSON.stringify({
          user: response.user,
          token: response.token,
        }));
      }
    } catch (error) {
      set({
        error: 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.',
        isLoading: false,
      });
      throw error;
    }
  },

  verifyOtp: async (otp: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.verifyOtp(otp);

      if (response.success) {
        set((state) => ({
          isAuthenticated: true,
          isLoading: false,
          user: state.user,
        }));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      set({
        error: 'Xác thực OTP thất bại. Vui lòng thử lại.',
        isLoading: false,
      });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('auth');
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },

  resendOtp: async () => {

  },
}));