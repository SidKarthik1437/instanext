/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'imgkub.com'],
  },
}

const intercept = require('intercept-stdout')

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return ''
  }
  return text
}

// Intercept in dev and prod
intercept(interceptStdout)