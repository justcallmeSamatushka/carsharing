import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Permission, Routes } from '@/shared';
import { LoadingLayout } from '@/shared/layouts';
import { validatePermissions } from '@/shared/utils/validations/validatePermissons.ts';

// import { validatePermissions } from '@utils/authentication';
// import { useGetCurrentUser } from './useGetCurrentUser';

type PropsType = {
  children: React.ReactElement;
  permissions: Permission[];
  redirectPath?: Routes;
};

export const ProtectedRoute: React.FC<PropsType> = ({
  children,
  permissions,
  redirectPath = Routes.login,
}): React.ReactElement => {
  // const { isLoading, user } = useGetCurrentUser();
  const isLoading = false;
  const user = null;

  if (isLoading) {
    return <LoadingLayout />;
  }

  const isAccessGranted = validatePermissions({
    permissionsRequired: permissions,
    user,
  });

  if (!isAccessGranted) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};
