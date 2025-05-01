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
            },
            {
                source: '/3',
                destination: '/rental-playstation',
                permanent: true,
            },
            {
                source: '/rental-ps',
                destination: '/rental-playstation',
                permanent: true,
            },
            {
                source: '/rental',
                destination: '/rental-playstation',
                permanent: true,
            },
            {
                source: '/4',
                destination: '/barbershop',
                permanent: true,
            },
            {
                source: '/barber',
                destination: '/barbershop',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
