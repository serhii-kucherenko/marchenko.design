/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = withSvgr({
  svgrOptions: {
    titleProp: true,
    icon: true,
    svgProps: {
      height: 'auto',
    },
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          name: "prefixIds",
          params: {
            prefixIds: false,
            prefixClassNames: false
          }
        },
      ]
    }
  },
})

export default nextConfig;