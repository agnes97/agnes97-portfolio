/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    experimental: {
        typedRoutes: true,
    },
    async rewrites() {
        return [
            {
                source: '/_metrics/:match*',
                destination: '/_vercel/insights/:match*',
            },
            {
                source: '/_vitals/:match*',
                destination: 'https://vitals.vercel-insights.com/:match*',
            },
        ];
    },
}

export default nextConfig;
