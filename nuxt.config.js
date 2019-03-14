export default {
  server: {
    port: 8000,
  },
  head: {
    meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { hid: 'description', name: 'description', content: 'Max-Andre Zils | Scrum Master' } 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
      { rel: 'stylessheet', href: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript in order to run. Please enable it in your browser.' }
    ]
  },
  loading: { color: '#000000'}
}