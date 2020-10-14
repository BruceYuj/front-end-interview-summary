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
    "revision": "7f388a4f2c848f9c406cf29f9b4a7c7c"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "8d1a1d029eed0d7a5ee8189b663f92eb"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "c550f7b214bd4087c635f55f185949c6"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "e841144e34210da017c81dc13a44bab4"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "e60e43341d6a6c42512918f426796f02"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "1731f6105b9b8fe1c502ed6403b37d49"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "ade8ab06ee6364cdcb4c4d5c066819ee"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0ded53eeed3a026d5cfbead09e0079d2"
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
    "url": "assets/img/5-1.74037ab2.png",
    "revision": "74037ab2ca2a885fe37df94835f4555f"
  },
  {
    "url": "assets/img/5-2.29e4ede7.jpg",
    "revision": "29e4ede7e2d6431df28f916178cd3d7b"
  },
  {
    "url": "assets/img/5-3.e191d869.png",
    "revision": "e191d8691a374dc97be2eca8587ab5ad"
  },
  {
    "url": "assets/img/5-4.3cab7f78.png",
    "revision": "3cab7f78713c4d4f0d022e62cab92c70"
  },
  {
    "url": "assets/img/5-5.2ac3ba11.png",
    "revision": "2ac3ba116ffb1c5104aa3e85106a2747"
  },
  {
    "url": "assets/img/5-6.94558194.png",
    "revision": "945581942d5a567de09782e643404ea6"
  },
  {
    "url": "assets/img/5-7.709f1e53.jpg",
    "revision": "709f1e5323f35ad263d619ed2d62f390"
  },
  {
    "url": "assets/img/5-8.45e58708.png",
    "revision": "45e587089295fb8eb270f2959af84c63"
  },
  {
    "url": "assets/img/5-9.f2ff1dd8.png",
    "revision": "f2ff1dd8d82411f258bc69f6467c9759"
  },
  {
    "url": "assets/img/6-why-design-MIME.15cf5674.png",
    "revision": "15cf56741ac0f956167db05e724ebe12"
  },
  {
    "url": "assets/img/bilibili.36a8e4f1.png",
    "revision": "36a8e4f1a819da7e35ab5dcaa569987e"
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
    "url": "assets/img/wechat.c44351ab.png",
    "revision": "c44351ab5ae9d66cc88f8de1fc91a858"
  },
  {
    "url": "assets/js/10.64b2fcdc.js",
    "revision": "f020b71a6fb7c00bcc1f0e008b8a9e4d"
  },
  {
    "url": "assets/js/11.08ed2bab.js",
    "revision": "0250191f5565a8e2d1aa66bffdb48a25"
  },
  {
    "url": "assets/js/12.db4bb610.js",
    "revision": "1a0cf7f3941144c11451334d571ae25c"
  },
  {
    "url": "assets/js/13.c3214b20.js",
    "revision": "c28848bfe44b25cc76c5fd0244a2d2e4"
  },
  {
    "url": "assets/js/14.db8f4284.js",
    "revision": "e61c3cd6b0ca28bc77864eb6a1f19dba"
  },
  {
    "url": "assets/js/15.8f5b33d4.js",
    "revision": "f2b136665415e5a367806421af7beefe"
  },
  {
    "url": "assets/js/16.26503476.js",
    "revision": "541a44384c9b9db13be781fecd139210"
  },
  {
    "url": "assets/js/17.accb64c4.js",
    "revision": "a45788b7e42be2dff39dfd850bf37032"
  },
  {
    "url": "assets/js/18.cff214dd.js",
    "revision": "477eca368c918e1a079426f258b8c25b"
  },
  {
    "url": "assets/js/19.67f30ff6.js",
    "revision": "d5a444ca59c6b184f72643d6c45c6604"
  },
  {
    "url": "assets/js/2.9b343076.js",
    "revision": "b4c73dbb2a7adf967c49638d54e7840c"
  },
  {
    "url": "assets/js/20.4bac9835.js",
    "revision": "80d9e173b28d975b7cda517b01a4cc34"
  },
  {
    "url": "assets/js/21.50f12972.js",
    "revision": "953bedefcb7814f58e1fb352830e4a05"
  },
  {
    "url": "assets/js/22.8560d777.js",
    "revision": "e3faf6c471e8807c6b95083f374344d5"
  },
  {
    "url": "assets/js/23.11467882.js",
    "revision": "8727ac37137c15b398413660c36b3b70"
  },
  {
    "url": "assets/js/24.63bc8234.js",
    "revision": "b79b9a7751cadd233518cf30a04b1727"
  },
  {
    "url": "assets/js/25.61dc613f.js",
    "revision": "3723e5fe3809d2868774d1a5477404eb"
  },
  {
    "url": "assets/js/26.6eafbd04.js",
    "revision": "ad3db5f74886dc032a386a1f0e3c6879"
  },
  {
    "url": "assets/js/27.d46b5b40.js",
    "revision": "3302c51dddc870bc80517be9c487bddd"
  },
  {
    "url": "assets/js/28.8d5895eb.js",
    "revision": "197406b05dd89169230f340cff49a9c1"
  },
  {
    "url": "assets/js/29.73cfd4ff.js",
    "revision": "1c775c7f6346a50cb882e1f72f963bcb"
  },
  {
    "url": "assets/js/3.a9374cea.js",
    "revision": "82575c0a1dc7a3e2eb159cec751dfbee"
  },
  {
    "url": "assets/js/30.88a53c68.js",
    "revision": "6049f8317d2e2bccb5c99587b77e37ad"
  },
  {
    "url": "assets/js/31.327f5256.js",
    "revision": "9b6804265b95047e578aecd6c933a551"
  },
  {
    "url": "assets/js/32.90e39e30.js",
    "revision": "82b47debd006e9f835da5bc769d3da31"
  },
  {
    "url": "assets/js/33.b8c6d735.js",
    "revision": "16b4ee4f17156fa8cf9cd8c344212651"
  },
  {
    "url": "assets/js/34.865dc524.js",
    "revision": "09f6e6bc87c84891697b8f3571a820e7"
  },
  {
    "url": "assets/js/35.e301318e.js",
    "revision": "16b3e460fc55f1ed9c56c4165153ba02"
  },
  {
    "url": "assets/js/36.c466c515.js",
    "revision": "58ac26d18bc1616777e3f6f55e8d5d0b"
  },
  {
    "url": "assets/js/37.e27bb783.js",
    "revision": "a3a455ef109e8d7391b4c1ef5b77c8fe"
  },
  {
    "url": "assets/js/38.49a1d44a.js",
    "revision": "7947067d554772bb2788b2f2785f86b3"
  },
  {
    "url": "assets/js/39.377c3e39.js",
    "revision": "b405244b05684b19e780779e137f853b"
  },
  {
    "url": "assets/js/4.b3dbefe1.js",
    "revision": "034cb3e8aa88e949eb798463befb3c89"
  },
  {
    "url": "assets/js/40.0ee482bd.js",
    "revision": "00fb7b43760c5e4f8cad5ae203ce2850"
  },
  {
    "url": "assets/js/41.71f3f83a.js",
    "revision": "e2ddb103118e7c3a20489de854c40f94"
  },
  {
    "url": "assets/js/42.60e45a1e.js",
    "revision": "afaf22e2cb2b9fd4f4fcbece16954807"
  },
  {
    "url": "assets/js/43.9f419b40.js",
    "revision": "bef8f1f41f3dd4ef4fd3c5250f48e26c"
  },
  {
    "url": "assets/js/44.89e319c6.js",
    "revision": "c0225d2456c1e3ef62850792558a7dcc"
  },
  {
    "url": "assets/js/45.d49fe915.js",
    "revision": "542464cbeb7e580aa3c310ae424d6562"
  },
  {
    "url": "assets/js/46.49036315.js",
    "revision": "d8b33bc9ba45001ab00c2d82245a70de"
  },
  {
    "url": "assets/js/47.a854d2a1.js",
    "revision": "128f83133756ba584995da9f0781e73a"
  },
  {
    "url": "assets/js/48.670e01a8.js",
    "revision": "b1a8b1c1b2dc057c0c61df220ac77079"
  },
  {
    "url": "assets/js/49.c2a04f51.js",
    "revision": "d1ac0b7118e2126ebe80740d2abd48d1"
  },
  {
    "url": "assets/js/5.7c69718c.js",
    "revision": "a4acc946f99fe01bee1e912b25579cbb"
  },
  {
    "url": "assets/js/50.015399d9.js",
    "revision": "ba887d19073d40f8b28a2f3b378cf1e5"
  },
  {
    "url": "assets/js/51.6a6c89bf.js",
    "revision": "c8c47047d1ebcb039e069719979411dd"
  },
  {
    "url": "assets/js/52.4f94e55f.js",
    "revision": "d896ba92014002469c894a52cee1b7f1"
  },
  {
    "url": "assets/js/53.d1844d29.js",
    "revision": "1a27f2bd26e61b6fc8f6931200073a23"
  },
  {
    "url": "assets/js/54.345b43ac.js",
    "revision": "e310870afe4091e61d1bf1cde2f8ec5f"
  },
  {
    "url": "assets/js/55.14a9f816.js",
    "revision": "71a301664f00a801e0311452062ed967"
  },
  {
    "url": "assets/js/56.1303bf8c.js",
    "revision": "40730176dd2baf32ab1eb8b6d12aa34a"
  },
  {
    "url": "assets/js/6.a70c724c.js",
    "revision": "a93589cd49d6d59c9c23f703f4f55243"
  },
  {
    "url": "assets/js/7.3b248faf.js",
    "revision": "a25374e732c9de63aef86ae08cb74d7b"
  },
  {
    "url": "assets/js/8.e652da83.js",
    "revision": "56682998cc6750209753161aa6a19aa9"
  },
  {
    "url": "assets/js/9.86e9bcf5.js",
    "revision": "a7465f377daf7175b5754453375ccd80"
  },
  {
    "url": "assets/js/app.9251b7d9.js",
    "revision": "fcab4124dd28252e7096920b5ff6107b"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "4e4118b0192c087e2593c1c4295cb9e7"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "84b142919bf04f4ba990f0716d258d2a"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "7605b6904adafecba8b31cb589684ec7"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "2b9954a4a349c9522f0c580bb53dab41"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "690f81732d07d529e38e959dd37802a5"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "bc1a216975cc520876156582e7eac80c"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "8040d2bc512ec5db82de910c569ad85c"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "dba59fb6c733d0c18c1a6f8e55d15f56"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "ee1912d735bfddde613f98490a19d5e3"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "9ea48232122a4412cff79378b61cd047"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "11129daf11461822ff0e3eb938373a65"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "746350522c94dd0a5dcf026dcabbbf54"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "33b8e5ecb3fd45b0bc7e93a55206f35b"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "18b66278623d33e14f08455e488cf99d"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "1363c845b40f2577b1922f8450ba0978"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "dd2685784a0b67675561da9e55d525f4"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "db59279b326a4f85abb2d35290cc7ce6"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "3390e20e149eafd653ebd0eb9833a9ce"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "6cdb53288bba12d775406dbc941ef3a7"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "edf87b47201049011df2c60246587e61"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "4a338ee1fb4bcdf9ecd0eb93b0ef80af"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "afb51720322aae0c08e2452b03dd3813"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "de21051c71d03ee0162cb05db2b2ac13"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "f1b8f74aa27c3e6e3c113d50c8200ae3"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "13baf16ee589a5ee727aca338e4bfc0f"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "db20a57d46d250721720c102db084298"
  },
  {
    "url": "index.html",
    "revision": "483d0bffb7a6ba4fabd490a79ebadf59"
  },
  {
    "url": "info/index.html",
    "revision": "7a11b7bf0a5fbaaccffe82cbd68ff0c3"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "3ff2f3fbf204fbe6fdbad1887621341f"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "8513fc0b5e93c22e1b67d4d3b038aafa"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "fa7add7812a821321813b14cfe338c83"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "f87e445169cbb7d6eefde6733231e28c"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "2f86f88d145960dd5ff22599bf4b77af"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "8fa158d28373f3bc0a491269e9a28b86"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "d863d83349484646683a401773e3dd02"
  },
  {
    "url": "network/http/index.html",
    "revision": "918306c4c8c7517966760670cbd14419"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "2062ad1ef6723231f85e4f24f04f8c74"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "9766bd872c4109c2c23a7b896e920d94"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "67b5bb248042910c5ff5d9f3c62bf3f8"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "a279d7ceca7d7a750f687fca4d695452"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "ad0420f6a4c612c2e6e5660795b15e5d"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "f13ce8bfac22a254a7c0096297212991"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "22a7f70d0bca303486094cd25061513b"
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
