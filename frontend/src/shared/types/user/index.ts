import { Permission } from '@/shared';

export interface AuthenticationUser {
  id: string;
  phoneNumber: string;
  expoId: string;
  email: string;
  firstname: string;
  lastname: string;
  permissions: Permission[];
  fullName?: string;
  userName: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken?: string;
  refreshToken?: string;
}
