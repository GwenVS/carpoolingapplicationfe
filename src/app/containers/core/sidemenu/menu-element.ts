export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/auth/dashboard',
    'open': true,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Create Ride',
    'icon': 'mode_edit',
    'link': '/auth/createride',
    'open': true,
    'chip': {'value': 1, 'color': 'accent'},
  }, {
    'name': 'Applications',
    'icon': 'view_module',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'chat',
        'icon': 'chat',
        'link': 'chats/chat',
        'open': false,
      },
      {
        'name': 'mail',
        'icon': 'mail',
        'link': 'mail/mail',
        'open': false,
      },
      {
        'name': 'Editor',
        'icon': 'editor',
        'link': 'editor/editor',
        'open': false,
      }
    ]
  }
  , {
    'name': 'Pages',
    'icon': 'content_copy',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'Login',
        'icon': 'work',
        'open': false,
        'link': '../login',
      }, {
        'name': 'Services',
        'icon': 'local_laundry_service',
        'open': false,
        'link': 'pages/services',
      }, {
        'name': 'Contact',
        'icon': 'directions',
        'open': false,
        'link': 'pages/contact'
      }
    ]
  }
];
