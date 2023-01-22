module.exports = {
    experimental: { esmExternals: true },
    target: 'serverless',
    images: {
        deviceSizes: [320, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
        domains: ['cdn-images-1.medium.com', '*.medium.com']
    },
    env: {
        SITE_URL: 'https://saranshgrover.com'
    },
    async redirects() {
        return [
            {
                source: '/politech',
                destination: '/projects/politech',
                permanent: true,
            },
        ]
    },

}