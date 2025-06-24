export const redirects: Record<string, string> = {
  '/intro': '/overview',
  // Installation redirects
  '/installation/installation': '/run/installation/binaries',
  '/installation/binaries': '/run/installation/binaries',
  '/installation/docker': '/run/installation/docker',
  '/installation/source': '/run/installation/source',
  '/installation/build-for-arm-devices': '/run/installation/build-for-arm-devices',
  '/installation/priorities': '/run/installation/priorities',
  // Run a node redirects
  '/run/run-a-node': '/run/run-a-node/overview',
  '/run/mainnet': '/run/ethereum',
  '/run/optimism': '/run/opstack',
  '/run/sync-op-mainnet': '/run/faq/sync-op-mainnet',
  '/run/private-testnet': '/run//private-testnets',
  '/run/observability': '/run/faq/monitoring',
  '/run/config': '/run/configuration',
  '/run/transactions': '/run/faq/transactions',
  '/run/pruning': '/run/faq/pruning',
  '/run/ports': '/run/faq/ports',
  '/run/troubleshooting': '/run/faq/troubleshooting',
  // Exex
  '/developers/exex': '/exex/overview',
  '/developers/exex/how-it-works': '/exex/how-it-works',
  '/developers/exex/hello-world': '/exex/hello-world',
  '/developers/exex/tracking-state': '/exex/tracking-state',
  '/developers/exex/remote': '/exex/remote',
  // Contributing
  '/developers/contribute': '/introduction/contributing',
}

export const basePath = '/reth';