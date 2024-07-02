/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_URL: "",
    },

    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    webpack(config) {
    config.experiments = {
        ...config.experiments,
        topLevelAwait: true
    }
    return config
    },
};

export default nextConfig;
