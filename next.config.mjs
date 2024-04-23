/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
     remotePatterns: [
        {
           protocol: 'https',
           hostname: 'avatars.githubusercontent.com',
           pathname: '**',
        },
        {
           protocol: 'https',
           hostname: 'www.nrconexoes.com.br',
           pathname: '**',
        },
        {
           protocol: 'https',
           hostname: 'placehold.co',
           pathname: '**',
        },
        {
         protocol: 'https',
         hostname: 'cdnimgs.nrconexoes.com.br',
      }
     ],
  },
}

export default nextConfig;
