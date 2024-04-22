/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/",
    ],
  },
};

export default nextConfig;
