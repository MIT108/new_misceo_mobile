/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env'

const devEnvironmentVariable = {
    DEV_BACKEND_URL,
};
const prodEnvironmentVariable = {
    PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariable : prodEnvironmentVariable