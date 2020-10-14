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
    "revision": "70e0973c947fd1d1ac84876162e65a9b"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "c6a25bcdcf4a3d9b854958302c7de551"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "baa98af7b8cb47ce3f02fac2084ef002"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "492a54a87403113f3b33609bb99df2b6"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "37c2da5176317ae512037d45d5dc827d"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "3692747372b5331b5d63d79db3037a92"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "668d5d82b94316441e6eecf7781d8fbd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0dfd0d9da946d4995e0e3b62c01cecf6"
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
    "url": "assets/js/10.f6ce4925.js",
    "revision": "44247f8756ee95a7b1c33584c4fb6d71"
  },
  {
    "url": "assets/js/11.177f1270.js",
    "revision": "cb3f7cf8731df1ce5a5d71746a36ebc8"
  },
  {
    "url": "assets/js/12.78c462d6.js",
    "revision": "11a75c77f56fc776b421ee371d9ece08"
  },
  {
    "url": "assets/js/13.c165a681.js",
    "revision": "025c08e419da677557e2552e04ef2d98"
  },
  {
    "url": "assets/js/14.d5cfcd8a.js",
    "revision": "549aea6280726b0378780d6938e8b5dc"
  },
  {
    "url": "assets/js/15.712fb2b6.js",
    "revision": "fa8816c12aef6ec5b840c87bfc007f81"
  },
  {
    "url": "assets/js/16.85f74575.js",
    "revision": "6866d481dbaca4e910df4f26da35abab"
  },
  {
    "url": "assets/js/17.55da79ae.js",
    "revision": "e3f2505fc0be09dc2549c711c850b0b8"
  },
  {
    "url": "assets/js/18.24156e26.js",
    "revision": "0181f90d312ca31289fa0a0b614fa548"
  },
  {
    "url": "assets/js/19.f99e6a96.js",
    "revision": "60266a3663d3db73f0985ce3039c59e0"
  },
  {
    "url": "assets/js/2.f26de738.js",
    "revision": "0a4eb158a25cb7772e20a64a6b003d5e"
  },
  {
    "url": "assets/js/20.c1167b20.js",
    "revision": "7b8e3f04b4bc10a5878bb201598d66aa"
  },
  {
    "url": "assets/js/21.e9c4debe.js",
    "revision": "d90bea15fdbb0831a32cbfce3e3ae2c6"
  },
  {
    "url": "assets/js/22.6a21ed3f.js",
    "revision": "c2e4b8492e8a4384384caf9e108c5087"
  },
  {
    "url": "assets/js/23.af4fa546.js",
    "revision": "589b7117b6a86c00f96f6b9948e38080"
  },
  {
    "url": "assets/js/24.5fe8bab3.js",
    "revision": "2b38ec9c28b1e8646e994b224d9a728b"
  },
  {
    "url": "assets/js/25.3b16d442.js",
    "revision": "00888afccf31abdd343a73cf5c6d97e3"
  },
  {
    "url": "assets/js/26.94f541a6.js",
    "revision": "d1b8cafbc8b4a337cbec8dfc564d9043"
  },
  {
    "url": "assets/js/27.ce993aa6.js",
    "revision": "dfd844cddbae8c451ba978ed8f12722b"
  },
  {
    "url": "assets/js/28.a2432ee2.js",
    "revision": "63c40d10a7c4df3d5037f8ba8cf65e48"
  },
  {
    "url": "assets/js/29.51dda6a6.js",
    "revision": "89e2abd9fcb4e172c4d7b82430e3a6d2"
  },
  {
    "url": "assets/js/3.4a6226f5.js",
    "revision": "7b72b16d03339f7c34e6d7612a8d42ac"
  },
  {
    "url": "assets/js/30.1c59c891.js",
    "revision": "d6a95452f50fa5eb7f0f2840ea2ea398"
  },
  {
    "url": "assets/js/31.77cbb284.js",
    "revision": "014fc0b30895e7c1f9c8f73cc598743b"
  },
  {
    "url": "assets/js/32.2357f52c.js",
    "revision": "f06a76f8c86203f8547acb3ccfc26dc1"
  },
  {
    "url": "assets/js/33.f4adcf48.js",
    "revision": "4818fc3784c24a553a75b410de10ce86"
  },
  {
    "url": "assets/js/34.4665a034.js",
    "revision": "5d409783af72574d150bd460cf546f6f"
  },
  {
    "url": "assets/js/35.5a96fbd8.js",
    "revision": "bcb75ea065afee082db7ab8c9727fffe"
  },
  {
    "url": "assets/js/36.096b577b.js",
    "revision": "9702d55d388f5bfd337a3e2188143281"
  },
  {
    "url": "assets/js/37.ca3c4bc5.js",
    "revision": "8014b6fd34ac7e616ff4870658f4e0fc"
  },
  {
    "url": "assets/js/38.781603b4.js",
    "revision": "503131dfd7cc58a1cdfe945a5d929310"
  },
  {
    "url": "assets/js/39.bf044d12.js",
    "revision": "3a5e78e4c80e4da69ed0b3c8f454d8b2"
  },
  {
    "url": "assets/js/4.85de2f54.js",
    "revision": "8d4decce376aa7a7bccbc4e9b87fdee6"
  },
  {
    "url": "assets/js/40.5edfc02e.js",
    "revision": "7c966091f7f62cbe3684e119d2ca13a7"
  },
  {
    "url": "assets/js/41.2531e2bd.js",
    "revision": "8bb575844fd59a05d186beecb4e78552"
  },
  {
    "url": "assets/js/42.271ce9d6.js",
    "revision": "1b94ddde4775121640be1042081b18bc"
  },
  {
    "url": "assets/js/43.85294dbf.js",
    "revision": "3d621dee625b0c70a64c8161ebb7f45b"
  },
  {
    "url": "assets/js/44.661a5579.js",
    "revision": "318f4c7581823b91842c1e475895ed37"
  },
  {
    "url": "assets/js/45.a5f1357d.js",
    "revision": "6c75a4aede9af50ebadc4f681dba61f2"
  },
  {
    "url": "assets/js/46.a6c54db5.js",
    "revision": "02d168feddade6ec19790bdb4fd9c6f6"
  },
  {
    "url": "assets/js/47.47080ad7.js",
    "revision": "5e0e6d3fb48352d437974a2dbc8658c3"
  },
  {
    "url": "assets/js/48.c2d5921a.js",
    "revision": "4b055cf6188bf9bb280393bf3949ba9b"
  },
  {
    "url": "assets/js/49.fb7c6a6b.js",
    "revision": "21c4a3675c034cc4bd1c3ede55a2ce28"
  },
  {
    "url": "assets/js/5.3b9e3aaa.js",
    "revision": "3cd4d5a5c45f8a05b1a26e4f396c3a83"
  },
  {
    "url": "assets/js/50.cfcf036b.js",
    "revision": "3ea2e933598541c2849f0ee71ea7f549"
  },
  {
    "url": "assets/js/51.337136c6.js",
    "revision": "e805c02e5da981f6bec28051656b1fa2"
  },
  {
    "url": "assets/js/52.f960ca79.js",
    "revision": "c29eef630b05008c261e84ee8a3d5b4e"
  },
  {
    "url": "assets/js/53.a883c08c.js",
    "revision": "b720ce0d20164977a7ac94686da64993"
  },
  {
    "url": "assets/js/54.14b32c49.js",
    "revision": "15846fd659f50a4cb2702b9353c879c3"
  },
  {
    "url": "assets/js/55.ffb2901f.js",
    "revision": "8d8fe6ff81de734c5bf8fc6ddb6e809e"
  },
  {
    "url": "assets/js/56.6ae73b0a.js",
    "revision": "4d4cce617356b9f9f04bd3cc98e2bdad"
  },
  {
    "url": "assets/js/6.afd3e721.js",
    "revision": "7bf642adc536928a3e3341986fb3429d"
  },
  {
    "url": "assets/js/7.ec4f474c.js",
    "revision": "3255246c61437c966332ab6c8683dfd4"
  },
  {
    "url": "assets/js/8.4cf1e2dd.js",
    "revision": "3c8f667a696c597933971293608fbdfa"
  },
  {
    "url": "assets/js/9.6ebe3e2d.js",
    "revision": "a8f9ea017134ce09007500e31da0d2c7"
  },
  {
    "url": "assets/js/app.ac2cb83e.js",
    "revision": "28e79cdde651ffc4eb70cd8ccd161b15"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "d369c428db6be1f2d98ee54a9774314c"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "bfa67a0aca8b089e1e1fcd7f9d9119d5"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "058755985beb8946606fc53f6008bff4"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "98cedaa5f8dff33a382d941ae4d81171"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "9a43dbf8c3951d9a9c366e6f12258257"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "3e2fe7fec3997f6fc68e2a3309e7bf7f"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "691ae87795863cde113db7247f55ebb4"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "b4eae81ad721946423d758245174995d"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "6204cb41579bbf9254acd95b15e81b9d"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "2d04f4069052fe2f6db749b125b58e8b"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "a84217a1fa0751acdcc15ca2ca1544c3"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "febd0e93fbeb8547ef726ff29e043117"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "5d7c897e64acc1ac91ca08ffc7b7b974"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "39cd6e28cd089857a827265970aeb58e"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "fed5f0a16d3abda7122b9990282ff10b"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "0a786bc42832a5c691c6043176d70e61"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "c61de42eb9150f29c9b0da8c1c43dbc8"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "bf617dae1dc71675f7f59e2db508e6d9"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "6ddacbaae9b3aa440eedabef2dbac6cb"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "b05be3140615908236d48ea1441e7b27"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "370da3c7732c57593d5d68107fbf2de8"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "cb1316b98045cc070d5ae185f510f703"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "0cbd550367517bb154169b71ed703a4b"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "b52818f7b6609705b82c149e4f96f2e6"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "8d28980fcce34c173838db1d3038eec9"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "bad3a885f683dc761cc8269f2043c441"
  },
  {
    "url": "index.html",
    "revision": "94480c0e42e2582951b00deb19746a10"
  },
  {
    "url": "info/index.html",
    "revision": "63d65ccec7683f125eb9f1724a1bd75c"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "88511772821875c824f248699d1ef6ff"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "3a8b213c0583bbfa861ccdfc2fb80e2d"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "2b2f2a03ab9fab148beff757a6077440"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "f0147669ab545f1ac69a55285019cd8f"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "4c3518b9e30ff3df9feca4987ba09049"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "d51dcc5e8865b5cb04c07b86d8e2c93a"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "76581479fcf44d14c8e7a7ae8b761b08"
  },
  {
    "url": "network/http/index.html",
    "revision": "dccb894ac190da591a4e4519a2ac7943"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "e8441fcfa8df2a8259c7f3daa41e72ba"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "ca3889eee71ac4b5310c57f708ee3dd1"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "edee6b50aa109d3cef68a157322df97d"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "61fe3bc0d08af4e9161eb6ef31572df5"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "f2715c64ab7d9da5942151197f9825b1"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "51d57cc323a933259c6ca742c630c77a"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "743ba3c6c87c8c52d3523e37c7bf01bf"
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
