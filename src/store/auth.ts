import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  email?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  rememberMe: boolean;
  login: (user: User, token: string, rememberMe: boolean) => void;
  logout: () => void;
  isOTPVerification: boolean;
  setIsOTPVerification: (isOTPVerification: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      rememberMe: false,
      isOTPVerification: false,
      setIsOTPVerification: (isOTPVerification) => set({ isOTPVerification }),
      login: (user, token, rememberMe) =>
        set({
          user,
          token,
          isAuthenticated: true,
          rememberMe
        }),
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          rememberMe: false
        })
    }),
    {
      name: 'auth-storage',
      partialize: (state) =>
        state.rememberMe
          ? {
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            rememberMe: state.rememberMe
          }
          : {}
    }
  )
);