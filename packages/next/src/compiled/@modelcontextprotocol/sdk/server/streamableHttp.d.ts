export declare class StreamableHTTPServerTransport {
  constructor(options: { sessionIdGenerator: unknown })
  close(): void
  handleRequest(
    req: unknown,
    res: unknown,
    body: unknown
  ): Promise<void>
}
