/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",

    redirects: async () => {
        return [
            {
                source: "/routes/products",
                destination: "/",
                permanent: false
            },
            {
                source: "/routes/products/:productID",
                destination: "/",
                permanent: false
            },
            {
                source: "/routes/sellers",
                destination: "/",
                permanent: false
            }
        ]
    }
};

export default nextConfig;
