export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  status: boolean;
  statusCode: number;
  message: string;
  data: {
    uid: string;
    username: string;
    email: string;
    userType: string;
    status: string;
    passwordStrength: string;
    requirePasswordChange: boolean;
    lastLoginAt: string;
    createdAt: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
  };
  timestamp: string;
}

export interface User {
  uid: string;
  username: string;
  email: string;
  userType: string;
  status: string;
  passwordStrength: string;
  requirePasswordChange: boolean;
  lastLoginAt: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}

export interface PageResponse<T> {
  status: boolean;
  statusCode: number;
  message: string;
  data: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  timestamp: string;
}
