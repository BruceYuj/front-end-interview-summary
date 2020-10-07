/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "046bdcbf24cce8aca15f392d9b503af0"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "f6334359e3daf9a9c56685d5ceff7375"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "d36cc92f83b20b4ffae0522a57b01e2f"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "d7f96628ea68e6f4d7ed434e3bedabe4"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "f14a493f5415d7e02297396b38d52da1"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "ee734d8b494fad57d5a88031e68d47c3"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "df51d4d7cb68f95fdd1ae9e5b9e7a3bb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8fd2f98c81d47215d6785724bfa3732e"
  },
  {
    "url": "assets/css/0.styles.4db39399.css",
    "revision": "47c1779206f08924d4b2013e76bcfa65"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/1-1-1.1440d6ce.gif",
    "revision": "1440d6ce9e24105e44a70bb155cae507"
  },
  {
    "url": "assets/img/1-1.4a5610c9.png",
    "revision": "4a5610c92856e0643dd3055ffd4ca5b9"
  },
  {
    "url": "assets/img/1-1.86cdc331.jpg",
    "revision": "86cdc331acb820f3a82d36bc93c1b4b4"
  },
  {
    "url": "assets/img/1-2-1.94c81843.gif",
    "revision": "94c81843276c1f0ee41f3ccb1575bc8a"
  },
  {
    "url": "assets/img/1-2-2.80a13161.gif",
    "revision": "80a131615b3c9d071045ccd4529b829b"
  },
  {
    "url": "assets/img/1-2.256c91eb.jpg",
    "revision": "256c91ebb2822cfaa23cf608ea1ff0b5"
  },
  {
    "url": "assets/img/1-2.cdab7c37.png",
    "revision": "cdab7c37f149f857ce54b13c40074572"
  },
  {
    "url": "assets/img/1-3-1.80dc5b95.gif",
    "revision": "80dc5b954509223f6e30b73b432b4a51"
  },
  {
    "url": "assets/img/1-3.d07a0764.jpg",
    "revision": "d07a07643230dd4f380ac051a717affc"
  },
  {
    "url": "assets/img/1-4-1.a5b358e4.gif",
    "revision": "a5b358e413262b47ddb5f6ec2c5f6853"
  },
  {
    "url": "assets/img/1-4.9939b6bf.png",
    "revision": "9939b6bf319677462857ba10126d78b4"
  },
  {
    "url": "assets/img/1-4.c32c4e52.jpg",
    "revision": "c32c4e52a7341335087c6629ed12fc37"
  },
  {
    "url": "assets/img/1-5-1.da08d3f2.gif",
    "revision": "da08d3f2825f5c2e2e6881d1672b7811"
  },
  {
    "url": "assets/img/1-6-1.06829513.png",
    "revision": "06829513d35c6f76617aa7e80256ea7e"
  },
  {
    "url": "assets/img/1-6.8b589a9f.png",
    "revision": "8b589a9fada3dede752e4b3e480a3c32"
  },
  {
    "url": "assets/img/1-7-1.a9e7b8ef.gif",
    "revision": "a9e7b8ef1e79cb160050c58f8bffc012"
  },
  {
    "url": "assets/img/1-7-2.b935395d.gif",
    "revision": "b935395d79921c04fb81c276a10801d2"
  },
  {
    "url": "assets/img/1-7.557e23f1.png",
    "revision": "557e23f17cf0b9a130f402712808a6f0"
  },
  {
    "url": "assets/img/1-8-1.400496d8.gif",
    "revision": "400496d8860e13c47d0a81f2173ed959"
  },
  {
    "url": "assets/img/1-8.435d7cb3.png",
    "revision": "435d7cb34f2ee0f911a384848c8573e4"
  },
  {
    "url": "assets/img/1-9-1.c4cf0632.gif",
    "revision": "c4cf0632abcf4fcb49f4e1947e8e614d"
  },
  {
    "url": "assets/img/1.e545510c.jpg",
    "revision": "e545510c9eac2056e717da2983acb358"
  },
  {
    "url": "assets/img/2-1.bb5d53b7.png",
    "revision": "bb5d53b7bdb283cfa1a3a03dde6d1022"
  },
  {
    "url": "assets/img/2-11.26fb1ed2.png",
    "revision": "26fb1ed27209b831626d1c9a2daeb8e2"
  },
  {
    "url": "assets/img/2-12.a4d26ebb.png",
    "revision": "a4d26ebb6ea087aceb1d6ffa6e45dc44"
  },
  {
    "url": "assets/img/2-13.12135eeb.png",
    "revision": "12135eebc9cf87c7b5588219ad2f24d2"
  },
  {
    "url": "assets/img/2-14.e8b527d7.png",
    "revision": "e8b527d73b7d2000253cba603d6c0687"
  },
  {
    "url": "assets/img/2-15.8f267a57.png",
    "revision": "8f267a57153b4c25994a59d7e7ea2bc6"
  },
  {
    "url": "assets/img/2-2.c6b83027.png",
    "revision": "c6b83027bf7fda3627e5217f3f6b21a3"
  },
  {
    "url": "assets/img/2-3.d403d34e.png",
    "revision": "d403d34eea0d824cfbb56ea71001a67d"
  },
  {
    "url": "assets/img/2-5.6e3a1d9f.png",
    "revision": "6e3a1d9fa5d393b4e3265fd10f4037fb"
  },
  {
    "url": "assets/img/2-6.d9115da7.png",
    "revision": "d9115da78a9e87b21feb68aad0454dd4"
  },
  {
    "url": "assets/img/2-8.1cf84961.png",
    "revision": "1cf84961d7b210ff963368ae55de62bb"
  },
  {
    "url": "assets/img/2-9.90036572.png",
    "revision": "900365729258682c0408d26c27023bed"
  },
  {
    "url": "assets/img/200115-JavaScript-prototype-chain.e4815bc5.jpg",
    "revision": "e4815bc5d515f8d6bc4c5c8217c397ee"
  },
  {
    "url": "assets/img/200224-javascript-declaration.e9f532ba.jpg",
    "revision": "e9f532ba40433ad193670a4887008e40"
  },
  {
    "url": "assets/img/200225-javascript-block-scope-1.7f46914b.png",
    "revision": "7f46914b9044d0097a282a10a2df6cbf"
  },
  {
    "url": "assets/img/200225-javascript-block-scope-2.662d4ddd.png",
    "revision": "662d4ddd3ef684cc0af62aa113a169ff"
  },
  {
    "url": "assets/img/200311-environement-record.058ba393.jpg",
    "revision": "058ba3935dd4c5a1bc930a76616efd0a"
  },
  {
    "url": "assets/img/200324-block-level-function-case.78c02793.png",
    "revision": "78c027933589ebf57a11384c65de895a"
  },
  {
    "url": "assets/img/200324-block-level-function-global.05127083.png",
    "revision": "05127083cfd66ec439a59910adfcd5de"
  },
  {
    "url": "assets/img/2020-02-20-winter-javascript-statement.0c1e9cf1.jpg",
    "revision": "0c1e9cf1a6db724994e362a0f073d192"
  },
  {
    "url": "assets/img/3-why-design-fetch-api-1.c8125263.png",
    "revision": "c81252635e14eef81d8ad840d7eaa95b"
  },
  {
    "url": "assets/img/4-1.9960b385.png",
    "revision": "9960b385ea464bfe4bead30d27f5f8ba"
  },
  {
    "url": "assets/img/4-2.e7b1e2f0.jpg",
    "revision": "e7b1e2f0176437a1063c2ee74501b991"
  },
  {
    "url": "assets/img/4-3.c8e17a03.jpg",
    "revision": "c8e17a034d86c9620f288e482e4c7cb0"
  },
  {
    "url": "assets/img/4-4.eca469ec.png",
    "revision": "eca469ecaac035208150faf6813aa2ee"
  },
  {
    "url": "assets/img/4-5.3dd2b2f3.jpg",
    "revision": "3dd2b2f327ef8c733f034312a4185fd9"
  },
  {
    "url": "assets/img/6-why-design-MIME.15cf5674.png",
    "revision": "15cf56741ac0f956167db05e724ebe12"
  },
  {
    "url": "assets/img/brain.a25dd662.jpg",
    "revision": "a25dd662eb8f5749e1ac4d2d30d8a266"
  },
  {
    "url": "assets/img/donkey.a09e23fe.jpg",
    "revision": "a09e23fea86ea6fca0556afd9c572666"
  },
  {
    "url": "assets/img/dopamine.5a7ec1d6.jpg",
    "revision": "5a7ec1d61d5bc84cf2f4a1e139e697b0"
  },
  {
    "url": "assets/img/focus.d70c03cc.jpg",
    "revision": "d70c03cc8774a7f2549b053956244b21"
  },
  {
    "url": "assets/img/HTTP-actual-process-1.6370b3a1.jpg",
    "revision": "6370b3a15e30a2072c2fc8dd69f019d8"
  },
  {
    "url": "assets/img/http-actual-process-2.64c3c9b0.png",
    "revision": "64c3c9b0ae05eb8d452e86c1b042ca8b"
  },
  {
    "url": "assets/img/http-actual-process-3.e0d278f0.png",
    "revision": "e0d278f0005fbc0de6ef3026230617dd"
  },
  {
    "url": "assets/img/http-concepts-1.89af8281.jpg",
    "revision": "89af8281fd5b3cbca5dc0479a6d4cb36"
  },
  {
    "url": "assets/img/http-concepts-2.b07c9fae.png",
    "revision": "b07c9faee8e90e8ced4a2737c5a635db"
  },
  {
    "url": "assets/img/http-concepts-3.1e700742.png",
    "revision": "1e7007425b1c8407100869b3b2f841ec"
  },
  {
    "url": "assets/img/http-concepts-4.86f7596c.png",
    "revision": "86f7596cc73c39da3823ae74cd9453e8"
  },
  {
    "url": "assets/img/http-concepts-5.d30e2ad1.png",
    "revision": "d30e2ad190cf9de1c0b600915c295dec"
  },
  {
    "url": "assets/img/http-concepts-6.6ef6597f.png",
    "revision": "6ef6597f9c959042776b1bad0f1d3b43"
  },
  {
    "url": "assets/img/http-concepts-7.98047b31.png",
    "revision": "98047b3198d38647c2d99afa599208fb"
  },
  {
    "url": "assets/img/http-concepts-8.50336b2f.png",
    "revision": "50336b2fda68b2b51d781f46372a398c"
  },
  {
    "url": "assets/img/http-concepts-9.eaac6f16.png",
    "revision": "eaac6f16c9260e9ffa744093e1644057"
  },
  {
    "url": "assets/img/HTTP-definition-1.9ae5fd10.jpg",
    "revision": "9ae5fd1077e79d97f046c8d47462df27"
  },
  {
    "url": "assets/img/http-definition-2.dad483fa.png",
    "revision": "dad483fa1ad3907881e3e8fe50900679"
  },
  {
    "url": "assets/img/HTTP-history-1.d335e7be.png",
    "revision": "d335e7be457f2e564d40b93d53f91b14"
  },
  {
    "url": "assets/img/http-request-method-1.a17abced.jpg",
    "revision": "a17abced4643d9829a53a2f6e8c507a0"
  },
  {
    "url": "assets/img/http-request-method-2.f6ccbde5.png",
    "revision": "f6ccbde5cd2670360cb88008fd4b24e2"
  },
  {
    "url": "assets/img/phone.0b2cf5fb.png",
    "revision": "0b2cf5fb7c3e4357eae092ee8bed4064"
  },
  {
    "url": "assets/img/reading.3b1554cd.jpg",
    "revision": "3b1554cdb5825b1f1b9c28627b0c16ed"
  },
  {
    "url": "assets/img/reason.434b9b94.jpg",
    "revision": "434b9b942b917a84135f8b25c02f2214"
  },
  {
    "url": "assets/img/reward-sytem.e220bfcd.png",
    "revision": "e220bfcd13a1db9bcaf6e43c9bcd63d5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/the-thinker.12e1b39a.jpg",
    "revision": "12e1b39a24256c82c41246d17e79b0ce"
  },
  {
    "url": "assets/img/time-using-1.f53cb1e3.jpg",
    "revision": "f53cb1e362d773d3cd38161a45bc2a33"
  },
  {
    "url": "assets/img/time-using-2.c12f3a77.jpg",
    "revision": "c12f3a77b2bffe9cdd2802a148e170e0"
  },
  {
    "url": "assets/img/todo.3b5fb864.jpg",
    "revision": "3b5fb864350a85dee087d3f29bb11f6f"
  },
  {
    "url": "assets/img/universe.8df7308a.jpg",
    "revision": "8df7308ae3ee4ea5c75b646b4d1bb7c6"
  },
  {
    "url": "assets/img/wechat-number.2b90df1b.jpg",
    "revision": "2b90df1bfe5411a505672c471f01ae99"
  },
  {
    "url": "assets/js/10.e1fa8404.js",
    "revision": "09cb2e235e33a5653e653d8e18343bc8"
  },
  {
    "url": "assets/js/11.f8032f48.js",
    "revision": "45f2775a57374d9b03226836febf969c"
  },
  {
    "url": "assets/js/12.c19a660b.js",
    "revision": "58eb0fcf17c704f364d74044953c44a9"
  },
  {
    "url": "assets/js/13.6ac7559c.js",
    "revision": "f00fb941a5de49bdd2367cf0beade4b4"
  },
  {
    "url": "assets/js/14.0a8f5e32.js",
    "revision": "690b3d1997f4027949e6e3e99e34417e"
  },
  {
    "url": "assets/js/15.276f4881.js",
    "revision": "0d8e4232b5b31c40743ad1c0c5e19311"
  },
  {
    "url": "assets/js/16.f85421ab.js",
    "revision": "118db9f3a8a4277eef4b11b29b8e8a37"
  },
  {
    "url": "assets/js/17.1bf38e4c.js",
    "revision": "892ccf573c5957eafeb741dff5c4ae38"
  },
  {
    "url": "assets/js/18.5c5902f1.js",
    "revision": "c2367f0efbae6d056aa92a36acef7e4b"
  },
  {
    "url": "assets/js/19.1289645b.js",
    "revision": "c200ef475661aee7a7170d16b8f3cf62"
  },
  {
    "url": "assets/js/2.07613145.js",
    "revision": "6f4fdaf82df84a1b02deef28b0a2cf0a"
  },
  {
    "url": "assets/js/20.7f08a2b2.js",
    "revision": "99a7bb7792eaf1ef5577306e1c0c7a0f"
  },
  {
    "url": "assets/js/21.634aefb5.js",
    "revision": "1a2002984a573e294909ae1f8c43f7ea"
  },
  {
    "url": "assets/js/22.99e7601d.js",
    "revision": "f790fee67f84841299349fcaa92b72fa"
  },
  {
    "url": "assets/js/23.671b28b6.js",
    "revision": "588b4a269b18e11ea9f5bf547011dd62"
  },
  {
    "url": "assets/js/24.3df266cc.js",
    "revision": "575d211fb16375dd5dc2d8228f684b8c"
  },
  {
    "url": "assets/js/25.62541681.js",
    "revision": "7b866e921752e8b93d12dbf815f92a16"
  },
  {
    "url": "assets/js/26.6fa7785b.js",
    "revision": "40bcc6afe3afbb51973a67d1bf68b660"
  },
  {
    "url": "assets/js/27.b67f6fa8.js",
    "revision": "72deff64ce20bcdd51b20b98fb079c16"
  },
  {
    "url": "assets/js/28.2cf0e725.js",
    "revision": "5844832987262538e92b54a8a1ccc2f5"
  },
  {
    "url": "assets/js/29.dc28d51c.js",
    "revision": "0c5dfe9cc8e5d451cb502d4efe585768"
  },
  {
    "url": "assets/js/3.cf579478.js",
    "revision": "6d4ff7c1f668da3e7fde516e04ea21cd"
  },
  {
    "url": "assets/js/30.1b3fb4c3.js",
    "revision": "32ff8a765ed3145db61f58dbd4b51710"
  },
  {
    "url": "assets/js/31.4a2105ba.js",
    "revision": "6bc3f84dbe5e377918e6fdb47cb78905"
  },
  {
    "url": "assets/js/32.a499e085.js",
    "revision": "5b937211bf802242c9468f41c25e00ef"
  },
  {
    "url": "assets/js/33.55106114.js",
    "revision": "03043a674e0adbbb7e11fba3baf7b558"
  },
  {
    "url": "assets/js/34.6ba63f5a.js",
    "revision": "be026f2ed0d981d5654bf0bcceb0297f"
  },
  {
    "url": "assets/js/35.a36a4527.js",
    "revision": "b22d7feba417a9177e9fd9668f04b068"
  },
  {
    "url": "assets/js/36.913298e9.js",
    "revision": "63d223435d334d28fb2467b348722584"
  },
  {
    "url": "assets/js/37.25154107.js",
    "revision": "79be49a56a0e07083d53a4b2f6e15a84"
  },
  {
    "url": "assets/js/38.9c330856.js",
    "revision": "bc35737c20e781dcfc4f842fea32c5dc"
  },
  {
    "url": "assets/js/39.aacef523.js",
    "revision": "e067727d89735a64abe1735ef310437a"
  },
  {
    "url": "assets/js/4.57213052.js",
    "revision": "24a6749090a8136e777ebdee9b0a21be"
  },
  {
    "url": "assets/js/40.56358a4d.js",
    "revision": "22c31af302f6f4800bb318bc6e722cd0"
  },
  {
    "url": "assets/js/41.43e74e98.js",
    "revision": "f7102ea2c7ff0bbeb08b1377399a56d7"
  },
  {
    "url": "assets/js/42.74a24c3b.js",
    "revision": "af58b3805dca814d44ba222f88db0437"
  },
  {
    "url": "assets/js/43.113f8d1d.js",
    "revision": "beeb7ab11b6db914d0e8b11593d9412f"
  },
  {
    "url": "assets/js/44.b395e05d.js",
    "revision": "212050fce1b2da92d3f4a7b8fcd9e854"
  },
  {
    "url": "assets/js/45.199250d4.js",
    "revision": "02329df875a181b5e2439232d179faf0"
  },
  {
    "url": "assets/js/46.6ce1e697.js",
    "revision": "346803c8a06c34b15012dce972d1b4cd"
  },
  {
    "url": "assets/js/47.9039fd43.js",
    "revision": "278404973dda858ae3011653bf6228c4"
  },
  {
    "url": "assets/js/48.f8848116.js",
    "revision": "422db0c060c497873964fc3f25da9f47"
  },
  {
    "url": "assets/js/49.250d1b09.js",
    "revision": "57bf1a85784db7e19d6d12ba884acd01"
  },
  {
    "url": "assets/js/5.34136be0.js",
    "revision": "791b8da8ad45201e58821876ca989b28"
  },
  {
    "url": "assets/js/50.f47d69b8.js",
    "revision": "243efc583e802d867f343b482ed9dbe2"
  },
  {
    "url": "assets/js/51.d26407e3.js",
    "revision": "70c1d07d049847418966fa2259c6230a"
  },
  {
    "url": "assets/js/52.11ce3732.js",
    "revision": "d935da1176666a94db30a5db67711bab"
  },
  {
    "url": "assets/js/53.3e35cb20.js",
    "revision": "d5eef539c3beea2b1279a626e17cc717"
  },
  {
    "url": "assets/js/54.962240d3.js",
    "revision": "4a1149bbdcc04c056381835549bac6ea"
  },
  {
    "url": "assets/js/55.261d7d6f.js",
    "revision": "1e7a473e01b6c25684fc236bfd9e9aa2"
  },
  {
    "url": "assets/js/56.3e854c9b.js",
    "revision": "1e1a652535cf9cc9cc02aea5a714edc2"
  },
  {
    "url": "assets/js/57.1c279b05.js",
    "revision": "f129b7015d8ae8148518e5bef56db9b0"
  },
  {
    "url": "assets/js/58.9c981de9.js",
    "revision": "1aebb360850e589a2464626d1def4159"
  },
  {
    "url": "assets/js/59.e7f7a46f.js",
    "revision": "08ba9c91ec9bac7a517c47e7aecfd181"
  },
  {
    "url": "assets/js/6.b58e5aa9.js",
    "revision": "b5f802185333085d77ea59f582912b81"
  },
  {
    "url": "assets/js/60.f2f7b443.js",
    "revision": "79706010a9d6c6cda8f04b880c35b745"
  },
  {
    "url": "assets/js/61.f0f23236.js",
    "revision": "b50b38ad13f655771d3d692c90e1196d"
  },
  {
    "url": "assets/js/62.cd267046.js",
    "revision": "7c88c625bd9413e8da03e9ca87eaf2b7"
  },
  {
    "url": "assets/js/7.c71df402.js",
    "revision": "e1bb86b5d1ed77c2a5eaddc6976dbd9b"
  },
  {
    "url": "assets/js/8.0c955152.js",
    "revision": "a934cf3ad2a2f9688f93c83ec967706e"
  },
  {
    "url": "assets/js/9.db9c67f9.js",
    "revision": "fe6460ea67102b072efd72784a589cac"
  },
  {
    "url": "assets/js/app.57da8ffd.js",
    "revision": "532de3296b2120cd12bf89d87ecfa433"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "39283e9a0d5f8e025902cf0f87d703f1"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "c1d7116076cacb37d77070f59e6318c8"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "455e76936cd51aa62da68b8c639580ee"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "0b4981e866da9be732a4c337f58944a7"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "457153ce125b927b1cdad919777fe2cf"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "173a54addb9bf4ceb6901dfe05d6029e"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "a190520b548cf4ae1a8bf7eb1633ee11"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "9d621e10dbd4ee08474fbfff3745da20"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "daea981c6a2cb2a6850e622e6c7825ce"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "88db89cf07de107824a26b7308c800ba"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "709368edbbebb576b7343301f5f774bb"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "fa43c673ad3e712b3b9d8e21ade30c29"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "8a6a192fb45b2b4b57830e7af0264e13"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "28568bc0dba2898104d137b57db1ce06"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "44b9c0e04d5dc5631e1836c8dec71851"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "b0ce50cd53406465b01ab9f3321295c7"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "90331a787873c55fd834d9faf5cc8b2f"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "cd9cbc185a3939929be974613e9d491b"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "5c5edca12dd4ee97da0cf635a8e14294"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "58a3a569bd4054082f578ea7f1c8d3ac"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "e385f245187cdc9b1deddd926051b171"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "790df91ad319962ce827d5c9a52a332b"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "42260036d0ca8e3d1d95d53a6818b99a"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "2f15952206a8f74e271cecf38c4c032f"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "4a628c24b83463b55afb7b120dce3979"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "d1bbcfaa4ed11eab1792537989a5aaa7"
  },
  {
    "url": "index.html",
    "revision": "836c484322349a5f7a7914deadac0dff"
  },
  {
    "url": "info/index.html",
    "revision": "b49301be062b6ba81f2d42cc9d811408"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "44c267f2599fabf48e20aa7d6087b81f"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "13c5719f5cd3c7be08e494b9c4dbc8d7"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "fe42b3a6796d27115aadf0852475d29f"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "a6e88c00cd2b24142bb91f600b0850e3"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "27a0a168dbd279db18ffba0e341ce540"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "ef400973069454e94a74c119bb7a5bb3"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "45ab504c2f9f9310b77e3fa0f23f7015"
  },
  {
    "url": "network/http/index.html",
    "revision": "ebf81d42f66c71f7a6b28859d29662b3"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "9359d6af77cf58d36590720f0f912580"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "91d2c57dcbce8650cec6e17d53dbbb9f"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "0ea7516f886a82e7aa8dea9da7c2067d"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "ad2e3261140a0dc81d14e52b7b07afc3"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "9764d04bedc1d4a53ca76761d2874dcc"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "1a6eac76516a2cd1cb779db4f03a405f"
  },
  {
    "url": "thinking-more/drafts/3-knowledge-learning.html",
    "revision": "d665b50aa8f0af903020d53c160bbc51"
  },
  {
    "url": "thinking-more/drafts/brainStorming.html",
    "revision": "450ee799548c71bc63a4383112324494"
  },
  {
    "url": "thinking-more/drafts/how-i-record-my-time.html",
    "revision": "78a8ff641c1374a62c1effe2e9cc6d8c"
  },
  {
    "url": "thinking-more/drafts/playing.html",
    "revision": "a91bf7f166cddd70a94277f443a9c800"
  },
  {
    "url": "thinking-more/drafts/thinking-failure.html",
    "revision": "8b4e714f63e12270630f26936102ec43"
  },
  {
    "url": "thinking-more/drafts/方法论.html",
    "revision": "b41912119f3f0ebdf43854e7cc80d204"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "2a2077e2d7220d0895caadb76d899bca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
