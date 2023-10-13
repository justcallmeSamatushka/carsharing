import { AuthenticationUser, Permission } from '@/shared';

type PropsType = {
  permissionRequired: Permission;
  permissionsGranted: Permission[];
  user: AuthenticationUser | null;
};

export const validatePermission = ({
  permissionRequired,
  permissionsGranted,
  user,
}: PropsType): boolean => {
  switch (permissionRequired) {
    case Permission.NEVER: {
      return false;
    }
    case Permission.IS_AUTHENTICATED: {
      return !!user;
    }
    case Permission.IS_UNAUTHENTICATED: {
      return !user;
    }
    default: {
      return permissionsGranted.includes(permissionRequired);
    }
  }
};
