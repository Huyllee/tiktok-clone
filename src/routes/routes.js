import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';

//layouts
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.following, component: Following },
   { path: config.profile, component: Profile },
   { path: config.upload, component: Upload, layout: HeaderOnly },
   { path: config.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
