import { createBrowserRouter } from 'react-router-dom';

// import { AlertProvider } from '@contexts/AlertContext';
import { Permission, Routes } from '@/shared';
import { ErrorView, HomeView, LoginView } from '@/views';
import { ProtectedRoute } from './ProtectedRoute.tsx';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorView />,
    path: Routes.home,
    element: (
      <ProtectedRoute
        permissions={[Permission.IS_AUTHENTICATED]}
        redirectPath={Routes.login}
      >
        <HomeView />
      </ProtectedRoute>
    ),
    children: [],
  },
  {
    index: true,
    path: Routes.login,
    element: <LoginView />,
  },
]);
