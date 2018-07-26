// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBwlk0KMM75nBsZ8L7j9cZ5N5x0fwqfBjg',
    authDomain: 'newproject-5d731.firebaseapp.com',
    databaseURL: 'https://newproject-5d731.firebaseio.com',
    projectId: 'newproject-5d731',
    storageBucket: 'newproject-5d731.appspot.com',
    messagingSenderId: '737689833575'
  },
  mailApi: '/assets/list.json'
};
export const palete = {
  primary: '#D32F2F',
  accent: '#E65100',
  warm: '#C2185B',
  name: '#D50000',
  secondary: '#D81B60',
  tertiary: '#8E24AA',
  quaternary: '#5E35B1',
  quinary: '#3949AB',
  secondaryLight: '#E91E63',
  tertiaryLight: '#9C27B0',
  quaternaryLight: '#673AB7',
  quinaryLight: '#3F51B5'
};

/***
 * For development purpososes
 * Easy switch between localhost run and deploy
 */
export const serverUrl = 'https://carpoolingapplication.herokuapp.com';
// export const serverUrl = 'http://localhost:9090';

export const frontendUrl = 'https://carpoolingapplicationfe.herokuapp.com';
// export const frontendUrl = 'http://localhost:4200';

export const clientId = 'qtI0xZsb4N3I6eKbHjnFPWkmoCTeu1Me';
// export const clientId = '3gXaZrmNoS40hzJvHwm2cP0Qq782nSdw';


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
