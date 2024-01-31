/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = withSvgr({
  svgrOptions: {
    titleProp: true,
    icon: true,
    svgProps: {
      height: 'auto',
    },
  },
})

export default nextConfig;