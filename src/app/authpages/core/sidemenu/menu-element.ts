export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/auth/dashboard',
    'open': true,
    'chip': {'value': 1, 'color': 'accent'},
  },
 {
    'name': 'Rides',
    'icon': 'view_module',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'Create Ride',
        'icon': 'mode_edit',
        'link': '/auth/createride',
        'open': true,
        'chip': {'value': 1, 'color': 'accent'},
      },
      {
        'name': 'My Rides',
        'icon': 'chat',
        'link': '/auth/myrides',
        'open': true,
      },
      {
        'name': 'Find Ride',
        'icon': 'search',
        'link': '/auth/findride',
        'open': true,
      }
    ]
  }
];
