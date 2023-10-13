import { createBrowserRouter } from 'react-router-dom';

// import { AlertProvider } from '@contexts/AlertContext';

import { Permission, Routes } from '@/shared';
import { LoginView, ErrorView, HomeView } from '@/views';
import { ProtectedRoute } from '@/app/router';

export const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute
        permissions={[Permission.IS_UNAUTHENTICATED]}
        redirectPath={Routes.login}
      >
        <HomeView />
      </ProtectedRoute>
    ),
    errorElement: <ErrorView />,
    children: [],
  },
  {
    index: true,
    path: Routes.login,
    element: <LoginView />,
  },
]);
