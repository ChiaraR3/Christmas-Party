import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Christmas-Party',
    title: 'Christmas-Party',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.chucknorris.io/jokes/random'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

   i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: "Welcome",
          home1:"This year Christmas has also arrived and so have the gatherings among friends, family, co-workers... and with them, the gifts.",
          home2:"We know that this time, no, you are not going to organize any party.",
          home3:"But, as we know each other, here is a small list of your guests to keep under control the gift ideas and confirmations.",
          home4:"You can also remove people from the list, don't worry.",
          home5:"Happy Holidays"
        },
        
        es: {
          welcome: "Bienvenido",
          home1: "Este año también ha llegado la Navidad y las reuniones entre amigos, familiares, compañeros de trabajo... y con ellas, los regalos.",
          home2:"Sabemos que esta vez, no, no vas a organizar ninguna fiesta.",
          home3:"Pero, como nos conocemos, aquí tienes una pequeña lista de tus invitados para tener controladas las ideas de regalos y las confirmaciones.",
          home4:"También puedes eliminar gente de la lista, no te preocupes.",
          home5:"¡Felices fiestas!"
        }
      }
    }
  },
  

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
