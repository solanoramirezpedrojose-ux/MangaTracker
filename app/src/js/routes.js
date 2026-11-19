import HomePage from '../pages/home.f7';
import AddMangaPage from '../pages/add-manga.f7';
import NotFoundPage from '../pages/404.f7';
//Aqui se congiguran las rutas de la aplicacion cada ruta permite entrar a una pantlla diferente
var routes = [
  {
    //Rute de la pantalla principal
    path: '/',
    component: HomePage,
  },
  {
    //Ruta para abrir el formulario
    path: '/add-manga/',
    component: AddMangaPage,
  },
  {
    //pantalla que aparece cuando la ruta no existe
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;