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
    "revision": "d664f3d7eb69bca5dc832efeba7ae2bf"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "9142beb4801b7a2c3b031809e662c072"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "406c613ac2d5319bfd2797fc02d227c0"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "c1d6dfe2a77e43123d7bfdd5de6f8ad5"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "f71fee5cff9c5fe41486efc4988e89a1"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "3b5bf7bc5e849110d8a178b45384e4ce"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "75b50401a4b82b249df798417dc0f3ad"
  },
  {
    "url": "algorithm/6-dynamic-programming.html",
    "revision": "94bef3dc5d9b9a645654c9cbaba47462"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d6a0160f320b55b19d5dcdc23a320ed1"
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
    "url": "assets/img/6-1.d4e74911.jpg",
    "revision": "d4e74911d149b659801a2a8b2e359c5f"
  },
  {
    "url": "assets/img/6-2.213458c2.png",
    "revision": "213458c26aa7e212cb77e30d55aac57b"
  },
  {
    "url": "assets/img/6-3.10fd1438.jpg",
    "revision": "10fd143875b7500eff4a0b28ea04ba94"
  },
  {
    "url": "assets/img/6-4.229ed489.jpg",
    "revision": "229ed489644f47a924dc1436e4950e68"
  },
  {
    "url": "assets/img/6-5.18f11d34.jpg",
    "revision": "18f11d348cd16665a0ef5bbbc64562aa"
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
    "url": "assets/js/10.007deec9.js",
    "revision": "0824b1faa5a40fe55b012f866ed1bb12"
  },
  {
    "url": "assets/js/11.654a1f38.js",
    "revision": "9ca3b09abd32c0f1c9a09b23f8384437"
  },
  {
    "url": "assets/js/12.bca498eb.js",
    "revision": "9f92f7085d30614df0da4645b925bb9e"
  },
  {
    "url": "assets/js/13.5e396d6e.js",
    "revision": "1bf6a37945dc91c3ffd3750eb4cf40c1"
  },
  {
    "url": "assets/js/14.efde4dad.js",
    "revision": "0c25352c53067bc5ca21a8a0bb3b7ed8"
  },
  {
    "url": "assets/js/15.159b4fae.js",
    "revision": "15eecfe8404a328395ddf6d013bde354"
  },
  {
    "url": "assets/js/16.58e2bf1f.js",
    "revision": "e1981508743c8f3cef18b33d0cbfd6df"
  },
  {
    "url": "assets/js/17.ef3e3bd6.js",
    "revision": "80cbf4f0c6ed4063a00f4693ec6d6673"
  },
  {
    "url": "assets/js/18.293a93d5.js",
    "revision": "88e0f167538b306b58147540f8fc8b73"
  },
  {
    "url": "assets/js/19.a0b21cbf.js",
    "revision": "12568cdf4fda1c9d78ac309e154826f1"
  },
  {
    "url": "assets/js/2.7f7891e4.js",
    "revision": "4d198630f060bcad6809e194a76f3f6f"
  },
  {
    "url": "assets/js/20.08bf4a15.js",
    "revision": "6d5ec52f3541dc8075a759dc4645f670"
  },
  {
    "url": "assets/js/21.53dc31b6.js",
    "revision": "5ab2a3ca032720ba8e7a3d561d5732b7"
  },
  {
    "url": "assets/js/22.08c85132.js",
    "revision": "54944d2b9e6807741662f286a6e8a354"
  },
  {
    "url": "assets/js/23.3f3175a7.js",
    "revision": "8f24a41298cb5caef92173e4a5ddaacd"
  },
  {
    "url": "assets/js/24.1c9921fd.js",
    "revision": "ce7703bf4c5d28136f47cb9731f16b02"
  },
  {
    "url": "assets/js/25.104177c6.js",
    "revision": "5e981f0eff705894eac477313c6f4651"
  },
  {
    "url": "assets/js/26.c0352d38.js",
    "revision": "d4538591826d10d198aa8dcbe723dec1"
  },
  {
    "url": "assets/js/27.7f0758dd.js",
    "revision": "b29d47fe726cde574b102f4c40930176"
  },
  {
    "url": "assets/js/28.3fd75ef9.js",
    "revision": "ad40278f95b36165aaa9eb626e396454"
  },
  {
    "url": "assets/js/29.bbc36af8.js",
    "revision": "1df0129708ecdecee638ba2d491ef0c9"
  },
  {
    "url": "assets/js/3.60b8d5fa.js",
    "revision": "95a504fef59cfc12da45af8fc70c623c"
  },
  {
    "url": "assets/js/30.fd89296c.js",
    "revision": "a96e41d5912e68e94b9f72112e6c78cf"
  },
  {
    "url": "assets/js/31.85aab8c9.js",
    "revision": "2b739738c229d8f4a7d13a989fac5d69"
  },
  {
    "url": "assets/js/32.2b546f08.js",
    "revision": "1cc9d9128482b2ec036b71fe8f5990c5"
  },
  {
    "url": "assets/js/33.2fba3cd1.js",
    "revision": "8acb0fb7908ed6519b18a14e8c000b1e"
  },
  {
    "url": "assets/js/34.b410d584.js",
    "revision": "1553be08fb7c33c4cddd79e80bfe42f7"
  },
  {
    "url": "assets/js/35.750da1d3.js",
    "revision": "789fd821c3b04cff559743140398596c"
  },
  {
    "url": "assets/js/36.881274ef.js",
    "revision": "9cb520ebd9272ea7914149dd72b7208a"
  },
  {
    "url": "assets/js/37.1d77fbe6.js",
    "revision": "3c63f24f1f66739401be796f60f49690"
  },
  {
    "url": "assets/js/38.ee0bf670.js",
    "revision": "f2470dd4a90dbce33f59261099026772"
  },
  {
    "url": "assets/js/39.ceea38be.js",
    "revision": "ac4c5370eec88f949a8a40106d55520b"
  },
  {
    "url": "assets/js/4.5cfcfbcd.js",
    "revision": "27fba53864d8f4abd89d0cb4952e4e01"
  },
  {
    "url": "assets/js/40.e469df3b.js",
    "revision": "1b9b39464db9d253043e4f51f96c8357"
  },
  {
    "url": "assets/js/41.5864648b.js",
    "revision": "40e23f604329fece1ce1cf22d874538b"
  },
  {
    "url": "assets/js/42.2175c885.js",
    "revision": "492e4ebd15c7255a7dd6e4f367da2aa5"
  },
  {
    "url": "assets/js/43.25405ef6.js",
    "revision": "3626d8d6f46e5e70a41bb4b339fb7b8f"
  },
  {
    "url": "assets/js/44.b315c61d.js",
    "revision": "73c947e6b0df049a16bd6b225f495b79"
  },
  {
    "url": "assets/js/45.2406a059.js",
    "revision": "83398388630df6ef05f46ed162276dd8"
  },
  {
    "url": "assets/js/46.1cd0efc6.js",
    "revision": "80748df6a41a2d56c81fba5514e0afee"
  },
  {
    "url": "assets/js/47.e178adc3.js",
    "revision": "dccaccdaf6464760a44edc68650e4ed6"
  },
  {
    "url": "assets/js/48.854d8dd4.js",
    "revision": "6e70f641dd845b7195b4aff2be1f527f"
  },
  {
    "url": "assets/js/49.9d1cdc19.js",
    "revision": "80362bd26a9f47ace2a83ea84b57eaa0"
  },
  {
    "url": "assets/js/5.90b5014c.js",
    "revision": "fcd90a07e44c5d66a67557b62fd2e90f"
  },
  {
    "url": "assets/js/50.46d7dfc7.js",
    "revision": "0697e1822dd869c043531257b7f2484b"
  },
  {
    "url": "assets/js/51.bcfb2d25.js",
    "revision": "3c538f5f19b6bdd87e223c84fc866a07"
  },
  {
    "url": "assets/js/52.dae953b1.js",
    "revision": "cf7013930fb2b4f3c8671069a82b5a20"
  },
  {
    "url": "assets/js/53.98f08b84.js",
    "revision": "f7db6dddda8eb46bc9399f088d4f01c4"
  },
  {
    "url": "assets/js/54.17d39238.js",
    "revision": "73457d137eb03dc03614e3054ce43016"
  },
  {
    "url": "assets/js/55.ddea87d9.js",
    "revision": "4211ba584f10ae5ad96fed5c77225859"
  },
  {
    "url": "assets/js/56.8e44264c.js",
    "revision": "defd4175d5dd481b5b93d406c0086fbd"
  },
  {
    "url": "assets/js/57.46fbd2e6.js",
    "revision": "c40c314d4540b47cd5115011d4c81f4b"
  },
  {
    "url": "assets/js/6.b2103e4c.js",
    "revision": "74f5dc39fb6fc9499501a73a510ebf43"
  },
  {
    "url": "assets/js/7.228d03a2.js",
    "revision": "b16508b19de0f1cdaf5dd176ffe3e001"
  },
  {
    "url": "assets/js/8.019ed6a2.js",
    "revision": "7e635a345f4807f0bb833604b0d1d2a0"
  },
  {
    "url": "assets/js/9.cff9bb9a.js",
    "revision": "a10f343654a0909e31ee564a23a6bc0d"
  },
  {
    "url": "assets/js/app.ad874f02.js",
    "revision": "e81a45ccb942f5dc39f3271b95ea17b7"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "762491ef0bffe47d4c911e5f42abfb39"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "d603658fd7e025e9dd56f0dd948fd38c"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "e853f339d9e5771104d159aad29c64d7"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "44593c3fc120812b94f6b911b4953cbe"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "ba0b84b2435010dae40cb12d32a2a2b8"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "158126cb506cff48e6d5bf6908d4f737"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "bdacb844da9e56495269a4b92aebf7a0"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "0381e7e1a083fe65bfd39a5f0b5e9c2f"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "75e3180170c4b991e1170b9ddb7b8d84"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "d606ec6db89c2b55d4ac55c0a9503407"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "215ac0b5244bde0efa227f5e4e12e7c7"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "eed065e8685aba9de841a1476b765717"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "8486e71bc00a3c85e9b0697fd973ecc5"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "e08c7949af5f66b27bb9fd38a35395b8"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "1d09296467a2f5ac4fc571255f7330cd"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "413cc589b68704d8384b93e0009259b2"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "798ec047158aaeec6c3ccbfbd1ddf1a5"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "f979cdfa74d25ebebdd0240d26965431"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "04e8a3a674be527f24020700ce3406b6"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "71f42b6ae50cdd6fda19b51cb0eff2a1"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "1009df2a9fc86d7382e374196da08788"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "ceee8278116dcc186c35a03a75727295"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "a3f848d745c29af7507f710e7ca46578"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "2ad48abd37b7933492299255938dc1b4"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "76af5893c4b609be494ba92c9a49bd48"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "901252b363e9097a404bcadd270e0d6e"
  },
  {
    "url": "index.html",
    "revision": "e8402a900b3112a21a2a1989e793a54e"
  },
  {
    "url": "info/index.html",
    "revision": "b8e3bdb3087aa8a0b9565e49713ec39b"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "ac0fd929077761e0c76c5a4daf2560d9"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "510809c6729ae06d29ce1ea015cd2a79"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "f5c1f3b3d323a00faefbdc72e38bcad2"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "aed4bff7c72c13d04f9025291fe3d2f3"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "7e01d6180bcf0291c942b7235d6d9e27"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "9783f9fd6c2c6f82788dc6067336271a"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "b576b7d3a24776f724f7206fb21500d2"
  },
  {
    "url": "network/http/index.html",
    "revision": "d3cfa74d2783d1914feb2e7274620a4b"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "2344627ef7fc4826576e16d8ef1d3dd7"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "14e8319ced37bd385a655612da8f7842"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "03f603431b7040146a208889df7c70df"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "d886b671ebbb1d8b1e2208c6d12abcb8"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "6f90f6c48a0d0686a0038cbf5d18aedb"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "dc5ebf18aa0ce953fda3aa89b4559e3c"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "116b8ba94f33967b7c42c9b7526bb862"
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
