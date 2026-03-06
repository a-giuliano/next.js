import {
  NodeModuleTracePlugin,
  NodeModuleTracePluginOptions,
} from '@vercel/webpack-nft'
import type { NextConfig } from 'next'

export function createNodeFileTrace(options?: NodeModuleTracePluginOptions) {
  return function withNodeFileTrace(config: NextConfig = {}) {
    const nextConfig = config as NextConfig & { outputFileTracing?: boolean }
    const createWebpackConfig = config.webpack
    nextConfig.outputFileTracing = false
    config.webpack = (webpackConfig, context) => {
      const config =
        createWebpackConfig?.(webpackConfig, context) ?? webpackConfig
      if (context.isServer && !context.dev) {
        const plugin = new NodeModuleTracePlugin(options)
        if (config.plugins) {
          config.plugins.push(plugin)
        } else {
          config.plugins = [plugin]
        }
      }

      return config
    }
    return config
  }
}
