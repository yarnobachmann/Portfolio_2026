import { getPayload as getPayloadSDK } from 'payload'
import config from '@payload-config'

let cached: Awaited<ReturnType<typeof getPayloadSDK>> | null = null

export async function getPayload() {
  if (cached) return cached
  cached = await getPayloadSDK({ config })
  return cached
}
