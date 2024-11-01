/** @type {import('next').NextConfig} */
const nextConfig = {
    // 添加静态文件的响应头配置
    async headers() {
      return [
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/pdf'
            },
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate'
            },
            {
              key: 'Pragma',
              value: 'no-cache'
            },
            {
              key: 'Access-Control-Allow-Origin',
              value: '*'
            }
          ],
        }
      ];
    },
  
    // 添加静态文件路由重写规则
    async rewrites() {
      return [
        {
          source: '/assets/:path*',
          destination: '/assets/:path*'
        }
      ];
    },
  
    // 确保静态文件被正确处理
    output: 'standalone'
  };
  
  module.exports = nextConfig;