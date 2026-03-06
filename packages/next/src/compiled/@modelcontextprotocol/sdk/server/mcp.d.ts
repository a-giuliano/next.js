export declare class McpServer {
  constructor(options: { name: string; version: string })
  connect(transport: unknown): Promise<void>
  registerTool(
    name: string,
    config: { description: string; inputSchema?: unknown },
    handler: (request: any) => Promise<any> | any
  ): void
}
