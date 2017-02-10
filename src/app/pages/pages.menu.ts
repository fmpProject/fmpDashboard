export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'test',
        data: {
          menu: {
            title: 'test',
            icon: 'ion-android-settings',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      {
        path: 'administration',
        data: {
          menu: {
            title: 'Administration',
            icon: 'ion-android-settings', // menu icon
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'configuration',
            data: {
              menu: {
                title: 'Configuration',
                icon: 'ion-android-options'
              }
            }
          },
          {
            path: 'plan',
            data: {
              menu: {
                title: 'Plan Conf.',
                icon: 'ion-grid'                
              }
            }
          }
        ]
      }

    ]
  }
];
