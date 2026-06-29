import { getPayload as getPayloadSDK } from 'payload'
import config from '@payload-config'

let cached: Awaited<ReturnType<typeof getPayloadSDK>> | null = null

export async function getPayload() {
  if (process.env.SKIP_CMS_DURING_BUILD === '1') {
    throw new Error('CMS access is disabled during production builds.')
  }

  if (cached) return cached
  cached = await getPayloadSDK({ config })
  return cached
}
