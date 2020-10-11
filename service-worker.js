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
    "revision": "d9fe8411adb3d4869d6513cc99522fc4"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "2411cd4fae92334cf29892e8e23c7c8b"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "ca549a47af302fe21f2d73b580bf67c4"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "deedc6fc729d04635ac791f0e7216d6a"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "6b00dcaaa5e0274cd0ea80a589ab7a53"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "1e9e96bbb0dcb548d86c46c681f8e96a"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "e7f01a6eb6e07eaf60e40517e96b4008"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6ffa77ba7a56b6f6bb17e34ac5453358"
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
    "url": "assets/img/5-5.609f0b59.png",
    "revision": "609f0b59e1f83f8cf55ac790c67baec1"
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
    "url": "assets/js/10.5a2babf3.js",
    "revision": "ca8e67cbb7586acb716d817771b65791"
  },
  {
    "url": "assets/js/11.7ef1e8cc.js",
    "revision": "709b5a981eaa239b6c7238e36d8a3f97"
  },
  {
    "url": "assets/js/12.09ab4975.js",
    "revision": "9cd292a166e1e87c8392a016a0e501f5"
  },
  {
    "url": "assets/js/13.f2fb478e.js",
    "revision": "01bdc07fc218c4295c2e13665c2128c8"
  },
  {
    "url": "assets/js/14.53e5ddf7.js",
    "revision": "2c23891e041d8a35f6a47bde7603a2f7"
  },
  {
    "url": "assets/js/15.abdb8b50.js",
    "revision": "9f05c7e108e9b7e672a8a6e523cc9ca9"
  },
  {
    "url": "assets/js/16.acfff665.js",
    "revision": "d8c0996de719515cf5541c9520c2edcc"
  },
  {
    "url": "assets/js/17.cf4e61f8.js",
    "revision": "14d0c529468a5ee558aca0e0426e35b7"
  },
  {
    "url": "assets/js/18.9c50ab29.js",
    "revision": "b0e880b10c7865cd1c657f66149ec30e"
  },
  {
    "url": "assets/js/19.8396e146.js",
    "revision": "b1d512c80b41f2619bb5c7f2740512d7"
  },
  {
    "url": "assets/js/2.3c763a30.js",
    "revision": "d28d9e358350a22e25da13581de2953d"
  },
  {
    "url": "assets/js/20.bc5201e4.js",
    "revision": "6cf696feaa5652a51d8eb3bfe35eb8ea"
  },
  {
    "url": "assets/js/21.41938d05.js",
    "revision": "99af56a944ebf8c1e629703cc7fa2b74"
  },
  {
    "url": "assets/js/22.4b5b6c75.js",
    "revision": "a2431fb5fb11d2bfd827f7ac08931e17"
  },
  {
    "url": "assets/js/23.33d0ab00.js",
    "revision": "f356a681024d550e994d8e38da98b03a"
  },
  {
    "url": "assets/js/24.64920475.js",
    "revision": "51c021665ffffd56d36a28f5097c399f"
  },
  {
    "url": "assets/js/25.5b023b16.js",
    "revision": "17d25738f4bc520996835243a2b59bab"
  },
  {
    "url": "assets/js/26.98e10604.js",
    "revision": "35caf9d6e0279024dc29d019d252356f"
  },
  {
    "url": "assets/js/27.ba220213.js",
    "revision": "91a07a6f14f26f09783f88453258db3a"
  },
  {
    "url": "assets/js/28.e042a31d.js",
    "revision": "d3f76816554cfc38ef8213c0471fa9ef"
  },
  {
    "url": "assets/js/29.64e92916.js",
    "revision": "253c00d73cd0296a30d96dacc59bc088"
  },
  {
    "url": "assets/js/3.4e47cebf.js",
    "revision": "37886c16faa67d8e2eefd66ebd7e7e83"
  },
  {
    "url": "assets/js/30.a9a03d75.js",
    "revision": "c88f4e617a5160ca4612bfac602898b2"
  },
  {
    "url": "assets/js/31.ef2b1297.js",
    "revision": "4242295b1c47e076e0d49effc0876ee7"
  },
  {
    "url": "assets/js/32.e46cad10.js",
    "revision": "649896ab7b7c1264171da2ad7b729c8a"
  },
  {
    "url": "assets/js/33.9cb530d5.js",
    "revision": "01a28725ba31252445964482f542da2f"
  },
  {
    "url": "assets/js/34.d77987b6.js",
    "revision": "49ffc465d0f31d956334220b0b1a94e9"
  },
  {
    "url": "assets/js/35.13818f25.js",
    "revision": "57c68b23e285b0446db8a0863568fea1"
  },
  {
    "url": "assets/js/36.3cd136b9.js",
    "revision": "477f7f1662bc6702bf861188698231d8"
  },
  {
    "url": "assets/js/37.2e4fb7e5.js",
    "revision": "83987b7ca15132d62da10d0b0ba1ad2c"
  },
  {
    "url": "assets/js/38.1fcada89.js",
    "revision": "48bfddb422cb2171d02dcbe3534e2d3d"
  },
  {
    "url": "assets/js/39.2a1fad90.js",
    "revision": "c6971753651bc6010d11a3dd68640cc1"
  },
  {
    "url": "assets/js/4.4fa32a2c.js",
    "revision": "b81353918046f254b55cb5164c92f5ee"
  },
  {
    "url": "assets/js/40.64fbc404.js",
    "revision": "01082754d4a045d4340ff6742a787439"
  },
  {
    "url": "assets/js/41.f95cc647.js",
    "revision": "b7f6bd07a5d479b80efdd75256a911e8"
  },
  {
    "url": "assets/js/42.eda7c291.js",
    "revision": "dd7c81dc38050a46c4139bcbf62e0f89"
  },
  {
    "url": "assets/js/43.a0899225.js",
    "revision": "6e8af22fad118b6775be8f67829667a6"
  },
  {
    "url": "assets/js/44.81054e7f.js",
    "revision": "0a89d0ddc6836cded1e918ea00656a77"
  },
  {
    "url": "assets/js/45.9e80c30d.js",
    "revision": "589318435ec1b41271cf26ca039a9e4b"
  },
  {
    "url": "assets/js/46.06100d17.js",
    "revision": "28a2dfa6d39ef59e01e17c186cd8dcd8"
  },
  {
    "url": "assets/js/47.b6047e1a.js",
    "revision": "a71d15256768e78b3597c590bc6df375"
  },
  {
    "url": "assets/js/48.ab1c892f.js",
    "revision": "715eb7556e957e874d15f13e136edebe"
  },
  {
    "url": "assets/js/49.bfbcb543.js",
    "revision": "76028db267adff48fe125c4c47650a85"
  },
  {
    "url": "assets/js/5.98b19358.js",
    "revision": "3252fcb2ec00af91e4f7308e547a1d55"
  },
  {
    "url": "assets/js/50.40ba45c5.js",
    "revision": "7da6d9f495bd983ac1622d0641dd1c51"
  },
  {
    "url": "assets/js/51.b8bb3d1d.js",
    "revision": "9ea2a8c5f9a8066c4a03bb6a5ddef4c9"
  },
  {
    "url": "assets/js/52.13ff0473.js",
    "revision": "d1f1acd7feaa8d6c702bdc1d659683c9"
  },
  {
    "url": "assets/js/53.30246db2.js",
    "revision": "2e236ddcf2077ee62f858433b7175fdc"
  },
  {
    "url": "assets/js/54.9824529e.js",
    "revision": "1243b172646c8c3efdfa2826710c5271"
  },
  {
    "url": "assets/js/55.6ec24adc.js",
    "revision": "5a4b95c8f55ac8343b9d2b0df6ce5a8c"
  },
  {
    "url": "assets/js/56.a3a29aaf.js",
    "revision": "6fe01f13646247e6105b992130d895a5"
  },
  {
    "url": "assets/js/6.698a42ea.js",
    "revision": "8ac4b853ef59d4b01f815065786fe8a6"
  },
  {
    "url": "assets/js/7.43909bbe.js",
    "revision": "3df4c8dadb2162d6f270de094b50ec4a"
  },
  {
    "url": "assets/js/8.7843d91d.js",
    "revision": "6916d4f4e3c7424f82c2b5b5d182d5e3"
  },
  {
    "url": "assets/js/9.0ee8325a.js",
    "revision": "69d94e822a4045329c7b15c8522f6f96"
  },
  {
    "url": "assets/js/app.2c7c221a.js",
    "revision": "8e6d8e934b597ddf159914bbf548dcf9"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "7a07903107a890a150a0e597e5d292fe"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "358862b67c857c19e94dc5d3dcc0bfb9"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "d8fdab5ceae1e2c068a1d6941887d2b8"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "8e68afea0132058d163f6f87114ba964"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "c46ff5fa13c6912db5b20f780006fc98"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "ee5b5fc499a82717df214eae4567bbf4"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "3db4c0027fbd5f1552ac10cf7307697d"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "6ef0d9c988893a9c5f49b0aadaeba9f9"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "fae6c109e24f873ebc24b91b404995ff"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "6745843c4dab1db9b74c86a160bacdc9"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "0c6aed9ae2faabb352d46cea323bce30"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "ff7f4412a651d703c2330665fb90fa6d"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "afa8cb1bd3963e8c35c7576f6d9d8c97"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "dd7f3bb2d8d3d3c0a015f54b9c025f6a"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "caecb55a239a994b275b2f90511dfed4"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "e66b359d0503f1b1e78e004f31cbfb7b"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "b5050a9b6362b93c39c366d53e54e09f"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "54d7649c055d3514f72b323e45ebd3c1"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "b6376aa34248ca092586225a42bd09db"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "d1ec17260f5854c39c2f77fe80fe5db8"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "97792068b1c1800fe4547bf14b96fa79"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "e936131d1f76d9c6eb55db96c7ac293c"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "74b9bd724d56dc054e82e09172a98273"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "e3774b51e0a2d34c22a47dc4229cff97"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "2fe5ba59cf7f4252e4d6fd9eeb3b74eb"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "6d2c80b22ba0c80fd9de9012b648326b"
  },
  {
    "url": "index.html",
    "revision": "6a6e537392d96f0a3c09da3dbb5e619f"
  },
  {
    "url": "info/index.html",
    "revision": "88f865eb4aa0f886790a53050b0e2e5f"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "a2bef77bbb443eee03751471fc3bbe65"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "4f964ae357baeb60ecb1d76aac19c677"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "b4e8c5706b62c8ee75c3c1a050a58363"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "eb5a0b3c05a980647c9f53dceb4531b3"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "6d235b0d2eede4f2c4ae7838ebaf871e"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "c1013c1cd4eb5957e41fd52aa15d289f"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "ee762925f6ad13c4963526f01a1802c5"
  },
  {
    "url": "network/http/index.html",
    "revision": "cbaddaff4be3b5c3fc1533936de4e40a"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "6a5a6b534d1b26cc105c173cc5033332"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "4800b9012369380d5ed2604b6a35a0ac"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "3784410dea48975f5c7d46cb7a27cc10"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "ccdeab5034d26a1cc4203cbdc8fcceb2"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "b3c19018a4080c4f28174c0fa8eed86c"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "091d014cb908ce678625c37280bb98c6"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "adce02e0763abf883a329b671bdb5fb6"
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
