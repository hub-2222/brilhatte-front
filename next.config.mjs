/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.edgestore.dev',
                port: '',
                pathname: '/l5oru4td4kmw8rub/myPublicImages/_public/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
