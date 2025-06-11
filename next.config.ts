  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fra.cloud.appwrite.io',
          pathname: '/**',
        },
      ],
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '5mb' // Có thể tăng lên: '10mb', '20mb' tùy ý
      }
    },
    
  };

  export default nextConfig;
