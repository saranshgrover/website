module.exports = {
    //https://github.com/vercel/next.js/issues/7755
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
    target: 'serverless'
}