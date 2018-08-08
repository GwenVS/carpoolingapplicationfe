export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'maps',
        'icon': 'map',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'google-map',
                'icon': 'directions',
                'link': 'maps/googlemap',
                'open': false,
            },
            {
                'name': 'leaflet-map',
                'icon': 'directions',
                'link': 'maps/leafletmap',
                'open': false,
            }
        ]
    }
];
