import { NbMenuItem } from '@nebular/theme';

export const HOME_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Home',
        icon: 'home-outline',
        link: '/home/',
        home: true,
    },
    {
        title: 'Browse',
        icon: 'globe-outline',
        link: '/home/browse',
    },
    {
        title: 'Streams',
        icon: 'radio-outline',
        link: '/home/streams',
    },
    {
        title: 'Your Library',
        group: true,
    },
    {
        title: 'Made For You',
        link: '/home/library/you',
    },
    {
        title: 'Downloaded',
        link: '/home/library/downloaded',
    },
    {
        title: 'Liked Podcasts',
        link: '/home/library/liked',
    }
];
