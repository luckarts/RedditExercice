if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise(async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()})),i.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},i=(i,n)=>{Promise.all(i.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(i)};self.define=(i,c,a)=>{n[i]||(n[i]=Promise.resolve().then(()=>{let n={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return n;case"module":return s;default:return e(i)}})).then(e=>{const i=a(...e);return n.default||(n.default=i),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/pages/_app.js",revision:"bf0d3721c1ce2e8f8f4529bbd7ca5e95"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/pages/_error.js",revision:"ab1c08614f123bf25e517283c61bdada"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/pages/index.js",revision:"476e1042090e4cf8a26856cc2a6402ec"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/pages/r/%5B...slug%5D.js",revision:"cd57223c247e770d959d72801e8326d5"},{url:"/_next/static/EiYMiEZY94fYB2fBkbPYR/pages/search.js",revision:"7c1bb1fbc83703385d24c256094c5eb3"},{url:"/_next/static/chunks/117bd9e6b9eda8b51b9307ba792e8205a24b11ad.a5b925a6cb5c25890a93.js",revision:"0157774e734b20e7741856bee27aff9b"},{url:"/_next/static/chunks/commons.94e9432177da8e3c395d.js",revision:"3563a419d6f316703860530c99add8e1"},{url:"/_next/static/chunks/framework.e84fa698c7ee940652bd.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/b1633dbfef257268d24e.css",revision:"58613de5c6840e54b6b50cfed98f88b2"},{url:"/_next/static/runtime/main-bb853fda09b72ada0b8e.js",revision:"226f5819b4133dcda19691ced383189b"},{url:"/_next/static/runtime/polyfills-f500672a22b5a3a6edae.js",revision:"b90027b8c6dbfffa74ab23adcdfcbebe"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/favicons/android-icon-144x144.png",revision:"1ca1e96e9e028b08307e67e08a048922"},{url:"/favicons/android-icon-192x192.png",revision:"81aa0d11fea7ae8e818999dec1802ce2"},{url:"/favicons/android-icon-36x36.png",revision:"c5803533ce42219f8e2a31a37047a298"},{url:"/favicons/android-icon-48x48.png",revision:"17f3ec018f3b2cc329ea222c04038644"},{url:"/favicons/android-icon-72x72.png",revision:"4b1fd4adbd51489987ce82e524d76167"},{url:"/favicons/android-icon-96x96.png",revision:"239354bbe74dd093503c20c17ea830c7"},{url:"/favicons/apple-icon-114x114.png",revision:"f86a8ce6be58cd3b1bffda3b3f6c2a01"},{url:"/favicons/apple-icon-120x120.png",revision:"54fef66b3e98caafc91adc12289cd55b"},{url:"/favicons/apple-icon-144x144.png",revision:"1ca1e96e9e028b08307e67e08a048922"},{url:"/favicons/apple-icon-152x152.png",revision:"35303ed643bfacac47adbe1069d4c627"},{url:"/favicons/apple-icon-180x180.png",revision:"eef6f5cffabcaa6b5a4f01a0b17213e2"},{url:"/favicons/apple-icon-57x57.png",revision:"60f4f679fc611be66e68ed8951af6745"},{url:"/favicons/apple-icon-60x60.png",revision:"14f4d019d5a0f4b429973cecbe03b09f"},{url:"/favicons/apple-icon-72x72.png",revision:"4b1fd4adbd51489987ce82e524d76167"},{url:"/favicons/apple-icon-76x76.png",revision:"0b0c262041dfb9317986eb935bc66b6b"},{url:"/favicons/apple-icon-precomposed.png",revision:"42421c37c5e33ed00c4d8d65eec4c7a8"},{url:"/favicons/apple-icon.png",revision:"42421c37c5e33ed00c4d8d65eec4c7a8"},{url:"/favicons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicons/favicon-16x16.png",revision:"f352423da293cbe6bb71166163cf975d"},{url:"/favicons/favicon-32x32.png",revision:"3c599374b31d6070196010bc169f1513"},{url:"/favicons/favicon-96x96.png",revision:"239354bbe74dd093503c20c17ea830c7"},{url:"/favicons/favicon.ico",revision:"e57194f3b300e1e9bf469f4e6d0e4863"},{url:"/favicons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicons/ms-icon-144x144.png",revision:"1ca1e96e9e028b08307e67e08a048922"},{url:"/favicons/ms-icon-150x150.png",revision:"dedcb16cedff9cdb29bf654b47f45134"},{url:"/favicons/ms-icon-310x310.png",revision:"5736500e1b19ad6f99482a691a04d1b5"},{url:"/favicons/ms-icon-70x70.png",revision:"cff46672b5acbc6d7a16f66b63071e1f"},{url:"/images/icons/icon-128x128.png",revision:"d746985437848a08607faf284adbf4ce"},{url:"/images/icons/icon-144x144.png",revision:"83e909c922251fc9dd03757e4fd75ea7"},{url:"/images/icons/icon-152x152.png",revision:"2ffa9b5c4e25fb2d5797e5ea3eb701ca"},{url:"/images/icons/icon-192x192.png",revision:"b243a305d71b2878eff4301279c657e5"},{url:"/images/icons/icon-384x384.png",revision:"a67cfa2763aa8793a1894ee2c8fe232d"},{url:"/images/icons/icon-512x512.png",revision:"fcda04640272595bd3ef8da3d0385975"},{url:"/images/icons/icon-72x72.png",revision:"96f281647cb18b963362a2e241279ea2"},{url:"/images/icons/icon-96x96.png",revision:"8f14e354fc6fd792bb42cf8f9f504fce"},{url:"/manifest.json",revision:"6d0c083419b2700da09e0a8f72cc8d12"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));