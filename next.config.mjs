/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/zh", destination: "/", permanent: true },
      { source: "/zh/privacy", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
