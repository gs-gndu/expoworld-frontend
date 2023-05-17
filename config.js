const publicRuntimeConfig = {
    APP_NAME: 'Coding4u',
    APP_DESCRIPTION:'Coding4U is a blog website where users can publish their articles related to programming or computer science field. It is designed to help individuals learn programming concepts, languages, and best practices.',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION:"https://coding4u.onrender.com/",
    API_PRODUCTION:"https://coding4u.onrender.com/api",
    PRODUCTION: true,
    DOMAIN_DEVELOPMENT:"http://localhost:3000",
    DOMAIN_PRODUCTION:"https://coding4u-project.vercel.app",
    DISQUS_SHORTNAME:"my-cms-7",
    }

export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
export const APP_DESCRIPTION = publicRuntimeConfig.APP_DESCRIPTION;
