/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY,
  },
};

export default nextConfig;



