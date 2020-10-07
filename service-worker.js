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
    "revision": "dace87cc9ed19748d42055e015641617"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "6219c2ef595791c5a10e91e0dc32cdc0"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "09fa159aaed3c1c1896b747d738ec0b6"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "585ec54eb1a7374b90b68061f9796395"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "06d5778942786834f0739f6eae581dd9"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "b8e6f1ba1c1de28ad31e0015bdec3a9d"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "95cbfe8a46611bd9f41810093e2b4461"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b40dcefff9160ca2ab6295d510d6f611"
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
    "url": "assets/js/10.b014c39f.js",
    "revision": "e017ff114f74210d39243d11ebe5f2aa"
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
    "url": "assets/js/17.26baaa0f.js",
    "revision": "0c342cea31655f095853e51a86e57c35"
  },
  {
    "url": "assets/js/18.5c5902f1.js",
    "revision": "c2367f0efbae6d056aa92a36acef7e4b"
  },
  {
    "url": "assets/js/19.aff1fa53.js",
    "revision": "d9fe84c37cc63a184fbbbb51aae1678c"
  },
  {
    "url": "assets/js/2.b0325e86.js",
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
    "url": "assets/js/25.ea46e2d3.js",
    "revision": "c7590f4d58cb47cb3a570a4e0d0baf24"
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
    "url": "assets/js/31.37287436.js",
    "revision": "af7fe32094ce082c0bcd6020221d448d"
  },
  {
    "url": "assets/js/32.0a978e2a.js",
    "revision": "2cf109fe6c6fdae4006c5da3590565e4"
  },
  {
    "url": "assets/js/33.ce58ce75.js",
    "revision": "d4076cef813db11a7fb1c4fbc2538447"
  },
  {
    "url": "assets/js/34.e99d1d68.js",
    "revision": "8dd5386077e0328570d6866e4a2bc782"
  },
  {
    "url": "assets/js/35.5fcb990c.js",
    "revision": "42abad3ae326687edfb08ac457aff708"
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
    "url": "assets/js/39.5f499625.js",
    "revision": "d34c9b04d9e6c08d2caeab0c2367fa92"
  },
  {
    "url": "assets/js/4.57213052.js",
    "revision": "24a6749090a8136e777ebdee9b0a21be"
  },
  {
    "url": "assets/js/40.c1480c06.js",
    "revision": "e9bb2399caee4ccdeda7e777ec72ecb5"
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
    "url": "assets/js/5.d957647f.js",
    "revision": "872cb14aee80eefb031cd78b3809eefc"
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
    "url": "assets/js/55.f04536a4.js",
    "revision": "7ddeaa90b46e29974b915bcfaad33f2d"
  },
  {
    "url": "assets/js/56.837c1c83.js",
    "revision": "c7f0b1c560a637611862837322067d6a"
  },
  {
    "url": "assets/js/57.e6ca43d4.js",
    "revision": "6ebb87947e9d6ebd3cbd7e2ea041847e"
  },
  {
    "url": "assets/js/58.a2774b12.js",
    "revision": "802eaaff4f075c745568a9c263fde7aa"
  },
  {
    "url": "assets/js/59.c789b812.js",
    "revision": "165a68349d6f6c17d6c76b30e6a7fb58"
  },
  {
    "url": "assets/js/6.b58e5aa9.js",
    "revision": "b5f802185333085d77ea59f582912b81"
  },
  {
    "url": "assets/js/60.ea9b3327.js",
    "revision": "3d6aed66f293ba9a4b4b83195bb510f2"
  },
  {
    "url": "assets/js/61.a9d3bd67.js",
    "revision": "c90fb5e562c9c1c0e7e487b5808a8a6f"
  },
  {
    "url": "assets/js/62.cd267046.js",
    "revision": "7c88c625bd9413e8da03e9ca87eaf2b7"
  },
  {
    "url": "assets/js/7.e70ef31e.js",
    "revision": "85e356ecf80079084819661b8f1680f5"
  },
  {
    "url": "assets/js/8.d8923f3d.js",
    "revision": "93cc33b68946a54e040669cf6ced1438"
  },
  {
    "url": "assets/js/9.76501717.js",
    "revision": "c8735988ebe137bbfbe5969074936a36"
  },
  {
    "url": "assets/js/app.9e0e4926.js",
    "revision": "a60a9daea94b254973676f16c33282ba"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "8edbe187b138c38824dc60683a1eabc3"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "c4af4e6e06b6cef40a94c54aca9e7355"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "8757d73809b28259e49c5daa319abea4"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "c9daabfbaa293b0eafa25272319c06ee"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "1c1bc354bf16e987df6cc2e53a5b07cd"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "28a9c14d41c49d75c5ecc44cab39cbb4"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "7528c69fb682f814ec11fb5182b26abe"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "dcf495cdba7f22eb3a35584e9019fa3c"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "e9d42e0cb9cdd8a9d6d08e770a6f46e6"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "9e1186b68cde3879d3cb4b0422338f3f"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "4c81f216768c4a80fde91d3c8783b4b3"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "e7dcba215a138464e384471490d65824"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "0d953811450f79ff08eb15252f9c08ef"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "2cf0d26095deaa7b1864d72e37b31967"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "f8267f976eb26104f10db656d8775d81"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "570398aad9593ec73a26de41937719fb"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "3f8d392fd3903b5481db73e294271b09"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "fd5a315da5e40007122d69839bb53b98"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "d7be6d5e038a433938adb55bc191eed9"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "719cea439ff5d933ef17ddc989fc491a"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "b28de6cb9e5c09c257a4fd5c5741ae41"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "442eeb6f3ee101a1b17dd3facb2bdabf"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "535e70e66ed86ab8241708e72a78e64f"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "ab3c055da75a09aee492049d4f0d9869"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "b3d301ec1bcc17ce57d13a81b35709b2"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "7aaba9e4359c679af3a20e9290d3db62"
  },
  {
    "url": "index.html",
    "revision": "64055c446710dfa3fdca5fba4f147e63"
  },
  {
    "url": "info/index.html",
    "revision": "121d0d0e125d72c823530c8c1d418f64"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "8f283b912248ff9af011e38b2e1a4290"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "c98c3d53d14827e5cd78eafb85bfa2ca"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "838a6a56b61b04096af262f7074d99e4"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "23ceef009cb0e14e402222c51141f546"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "2a407facf56aa891cfe886bf21d4abab"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "637dbf2f1eecced320c0f018091ebfee"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "d9f2f3ce9be338e2a124c7058eb33c64"
  },
  {
    "url": "network/http/index.html",
    "revision": "e18f15e14e325b9d35ace31466651cf6"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "1fd21ec1aebc2991d189fb64e030e738"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "491fafcb511a477c318c99068368b91a"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "9b5ac8dbdcb15811b7e67deeeb43f9d3"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "d78b92a5ed248d5028a82540901931ea"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "56e314a143dc5130f0b5a842662d5604"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "11ddb715336e27031502cc2babc2f19f"
  },
  {
    "url": "thinking-more/drafts/3-knowledge-learning.html",
    "revision": "8f239a7ae40036a70a873fae8117a746"
  },
  {
    "url": "thinking-more/drafts/brainStorming.html",
    "revision": "a2862f68edce2f0ef170a3aed087d114"
  },
  {
    "url": "thinking-more/drafts/how-i-record-my-time.html",
    "revision": "c69e6d82801bf990c6a5067c9e7648ba"
  },
  {
    "url": "thinking-more/drafts/playing.html",
    "revision": "117b29397e11924895b28ad95031713b"
  },
  {
    "url": "thinking-more/drafts/thinking-failure.html",
    "revision": "2d286039af2fd35a9ef4e3d97dfa6cd0"
  },
  {
    "url": "thinking-more/drafts/方法论.html",
    "revision": "e71dac7a1a63acabf4e66c7e4d8cc052"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "787b33b4f1058434c5a4d0e70c59affd"
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
