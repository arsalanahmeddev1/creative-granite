export default defineConfig({
    preview: {
      allowedHosts: [
        'creative-granite.sitestaginglink.com'
      ],
      host: '0.0.0.0',
      port: 1228
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'creative-granite.sitestaginglink.com'
      ]
    }
  });