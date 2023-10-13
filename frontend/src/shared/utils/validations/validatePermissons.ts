import { validatePermission } from './validatePermission';
import { AuthenticationUser, Permission } from '@/shared';

type PropsType = {
  permissionsRequired: Permission[];
  user: AuthenticationUser | null;
};

export const validatePermissions = ({
  permissionsRequired,
  user,
}: PropsType): boolean => {
  const userPermissions = user?.permissions || [];
  const isAccessGranted = permissionsRequired.reduce((previous, current) => {
    if (!previous) {
      return previous;
    }

    return validatePermission({
      permissionRequired: current,
      permissionsGranted: userPermissions,
      user,
    });
  }, true);

  return isAccessGranted;
};
