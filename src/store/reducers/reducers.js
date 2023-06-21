import { combineReducers } from 'redux';

import authInfo from './auth'
import employess from './hrdata'
import pendingEmployees from './pendingEmployees';
import machines from './machinary'
import devices from './device'
import years from './checkpoints/years';
import months from './checkpoints/months';
import weeks from './checkpoints/weeks';

export default combineReducers({
    authInfo,
    employess,
    pendingEmployees,
    machines,
    devices,
    years,
    months,
    weeks
});