'use server'
import config from '@payload-config'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap'

export const serverFunction = async ({
  name,
  args,
}: {
  name: string
  args: Record<string, unknown>
}) => {
  return handleServerFunctions({ name, args, config, importMap })
}
