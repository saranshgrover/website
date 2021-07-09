module.exports = {
    target: 'serverless',
    images: {
        deviceSizes: [320, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840]
    },
    env: {
        SITE_URL: 'https://portfolio.saranshgrover.com'
    }
}