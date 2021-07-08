import HomePage from './pages/Home';
import ContactsPage from './pages/AllContacts';
import NewContactPage from './pages/NewContact';
import VideoPage from './pages/VideoPage';

export const routes = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: HomePage,
  },
  {
    path: '/new-contact',
    title: 'New Contact',
    exact: true,
    component: NewContactPage,
  },
  {
    path: '/all-contacts',
    title: 'All Contacts',
    exact: true,
    component: ContactsPage,
  },
  {
    path: '/video',
    title: 'Video',
    exact: true,
    component: VideoPage,
  },
];
