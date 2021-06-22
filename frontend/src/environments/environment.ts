import { NgxLoggerLevel } from 'ngx-logger';


export const environment = {
  production: false,
  APIURL: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
  STATEURL: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
  DISTURL: 'https://cdn-api.co-vin.in/api/v2/admin/location/districts',
  DISTIDURL: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict',
  logging: {
    level: NgxLoggerLevel.INFO,
    serverLogLevel: NgxLoggerLevel.INFO
  }
};

