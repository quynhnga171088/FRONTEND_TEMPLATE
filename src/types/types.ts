/* For Dropdown controls */
export interface IDropdownOption {
  icon?: string;
  imgUrl?: string;
  label: string;
  value: string | number;
  className?: string | null | undefined
}

export type IRole = 'TEACHER' | 'ADMIN' | 'STUDENT';
export type IUserStatus = 'ACTIVE' | 'BLOCKED';

export interface IAuthUser {
  id: number;
  email: string;
  fullName: string;
  role: IRole;
  status: IUserStatus;
  phone: string;
  createdAt: string;
  avatarUrl?: string;
}

export interface IAuthState {
  user: IAuthUser | null;
  accessToken: string | null;
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
  setRefreshToken: (token: string | null) => void;
  setAuthentication: (isAuthenticated: boolean) => void;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setUser: (user: IAuthUser | null) => void;
  setAuth: (user: IAuthUser, accessToken: string, refreshToken: string) => void
  setAccessToken: (token: string | null) => void
  logout: () => void
}
