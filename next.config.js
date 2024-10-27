//uses the next/constants to determine the current phase of the application and sets up environment variables, redirects, and image domains accordingly. 
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    //imports PHASE_DEVELOPMENT_SERVER and PHASE_PRODUCTION_BUILD from next/constants to determine the current phase of the application whether development (isDev), production (isProd), or staging (isStaging).
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    // allows you to define environment variables available in your application at runtime.  using this option.The env object is configured to set the API_PROD_URL based on the current phase.
    const env = {
        API_PROD_URL: (() => {
            if (isDev) return 'http://localhost:3000/api/'
            if (isProd) return 'http://localhost:3000/api/'
            if (isStaging) return 'http://localhost:3000/api/'
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
        API_BASE_URL: "http://localhost:3000/api",
    }

    //returns an array of redirect rules.specifies a permanent redirect from the root URL (/) to /en/theme/osaka.
    const redirects = () => {
        return [
            {
                source: "/",
                destination: "/en/home",
                permanent: true,
            },
        ];
    }

    // specifies allowed domains for loading images.It allows images from react.pixelstrap.net and defines a remote pattern for images served over HTTPS from this domain.
    const images = {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "react.pixelstrap.net",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "cdn.iconscout.com",
            },
        ],
    }

    return {
        env, redirects, images
    }
}