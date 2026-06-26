import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { IAuthUser, IAuthState } from '@/types/types';

export const authStore = create<IAuthState>()(
  persist(
    set => ({
      user: null as IAuthUser | null,
      accessToken: null as string | null,
      refreshToken: null as string | null,
      errorMessage: null as string | null,
      isAuthenticated: false as boolean,
      logout: () => set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false }),
      setUser: (user: IAuthUser | null) => set({ user }),
      setAuth: (user: IAuthUser, accessToken: string, refreshToken) => set({ user, accessToken, refreshToken, isAuthenticated: true, errorMessage: null }),
      setAccessToken: (token: string | null) => set({ accessToken: token }),
      setAuthentication: (isAuthenticated: boolean) => set({ isAuthenticated }),
      setErrorMessage: (errorMessage: string | null) => set({ errorMessage, isAuthenticated: false }),
      setRefreshToken: (refreshToken: string | null) => set({ refreshToken })
    }),
    {
      name: 'auth-store',
      skipHydration: true,
      partialize: (state: IAuthState) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
