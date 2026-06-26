import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/main/MainLayout';
import { SCREENS_PATH } from '@/config/constant';

const router = createBrowserRouter([
  {
    path: SCREENS_PATH.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/home/Home')
      }
    ]
  }]);

export default router;
