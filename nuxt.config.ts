import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [{
        rel: 'icon',
        href: 'favicon.ico',
      }],
      htmlAttrs: {
        'data-theme': 'black',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
            // Ignore sourcemap warnings
            if (warning.code === 'SOURCEMAP_BROKEN') {
                return;
            }
  
            warn(warning);
        }
      }
    }
  },
  image: {
    domains: ['localhost', 'brickheads.space'],
    sizes: {
      default: [320, 640, 960, 1280],
      mobile: [320, 640],
      desktop: [640, 960, 1280],
    },
  },
  fonts: {
    google: {
      families: {
        Oxanium: [200, 300, 400, 500, 600, 700, 800],
      },
    },
  },
  css: ['~/assets/app.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/icon',
  ],
})
