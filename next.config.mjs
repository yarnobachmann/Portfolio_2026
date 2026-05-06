import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    qualities: [75, 90],
  },
}

export default withPayload(nextConfig)
