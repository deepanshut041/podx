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
        children: [
            {
                title: 'Top Podcasts',
                icon: 'activity-outline',
                link: '/home/browse/top',
            },
            {
                title: 'Business & Technology',
                icon: 'bar-chart-2-outline',
                link: '/home/browse/business',
            },
            {
                title: 'News & Politics',
                icon: 'mic-outline',
                link: '/home/browse/news',
            },
            {
                title: 'Arts & Entertainment',
                icon: 'color-palette-outline',
                link: '/home/browse/arts',
            },
            {
                title: 'Lifestyle & Health',
                icon: 'heart-outline',
                link: '/home/browse/health',
            },
            {
                title: 'Sports & Recreation',
                icon: 'globe-2-outline',
                link: '/home/browse/sports',
            },
            {
                title: 'Educational',
                icon: 'book-open-outline',
                link: '/home/browse/educational',
            },
            {
                title: 'Games',
                icon: 'hard-drive-outline',
                link: '/home/browse/games',
            },
        ],
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