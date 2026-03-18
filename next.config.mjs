import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProd && { output: 'export', trailingSlash: true }),
  images: { unoptimized: true },
  reactCompiler: true
};

export default withNextIntl(nextConfig);