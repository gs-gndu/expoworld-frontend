// import { publicRuntimeConfig } from './next.config';

// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

const publicRuntimeConfig = {
    APP_NAME: 'Coding4u',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION:"https://coding4u-backend.vercel.app/api",
    PRODUCTION: true,
    DOMAIN_DEVELOPMENT:"http://localhost:3000",
    DOMAIN_PRODUCTION:"https://coding4u-project.vercel.app/",
    DISQUS_SHORTNAME:"my-cms-7",
    }


export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;


