import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/1',
                destination: '/digital-marketing-solution',
                permanent: true,
            },
            {
                source: '/solusi-digital-marketing',
                destination: '/digital-marketing-solution',
                permanent: true,
            },
            {
                source: '/2',
                destination: '/cakepreneur-empire',
                permanent: true,
            },
            {
                source: '/cake',
                destination: '/cakepreneur-empire',
                permanent: true,
            }
        ]
    },
};

export default nextConfig;
