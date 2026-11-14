import HomePage from '../pages/home.f7';
import AddMangaPage from '../pages/add-manga.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/add-manga/',
    component: AddMangaPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;