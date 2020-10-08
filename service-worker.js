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
    "revision": "65c26821072f3145fcae0553834688e2"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "68599ce4dded327026fe5a52fb62e07a"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "4468e43060796b40d1f018fd261e8132"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "71897527c1eab59a08a2979e340eab65"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "e33f3e6174bc5f92d69ba09fbfa1910d"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "99ad33f2e20aaf1e3717c0acf4a6de5c"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "5ea637602ceccb86b7d624dfc8917320"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c815175d378be2dd7a22e336cbad9294"
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
    "url": "assets/js/10.aecd9cb1.js",
    "revision": "86bee30e680d77fc72383b64e6e3ae7e"
  },
  {
    "url": "assets/js/11.cedceb77.js",
    "revision": "c1604d9f78b7784e809e74c30525f71d"
  },
  {
    "url": "assets/js/12.582ae1d8.js",
    "revision": "359e03d9a25c40e7584da73015ad76d8"
  },
  {
    "url": "assets/js/13.12d1b244.js",
    "revision": "27e754d89bc8b2e089cda1b1c11879fb"
  },
  {
    "url": "assets/js/14.28bf4962.js",
    "revision": "23a5e54ab23a29540b563a680e74bf8b"
  },
  {
    "url": "assets/js/15.ac63f5a3.js",
    "revision": "dc832b3c46d0e1823fddaaa3a406d210"
  },
  {
    "url": "assets/js/16.3040d20a.js",
    "revision": "11d1618a24c4f70265598b8f3361e2c1"
  },
  {
    "url": "assets/js/17.5a6400ee.js",
    "revision": "01833fdb1c3d59b4f3b2dedf3ba56be8"
  },
  {
    "url": "assets/js/18.2ff8e27e.js",
    "revision": "f7e4ebc0452844351418c0c1252fbabf"
  },
  {
    "url": "assets/js/19.ffb9245c.js",
    "revision": "4644aba3459263033c5d61b4517bdddc"
  },
  {
    "url": "assets/js/2.3e309535.js",
    "revision": "e1f1508b48adc42d2aa955bd00f6e9b1"
  },
  {
    "url": "assets/js/20.edb77f5f.js",
    "revision": "753aa3cf4c593572c3248d6de24f05bd"
  },
  {
    "url": "assets/js/21.7bb8ab50.js",
    "revision": "d6e5cc776de0c1b7729fdba262a1efd0"
  },
  {
    "url": "assets/js/22.3c6c92f8.js",
    "revision": "7209a0b5bd49c8b6f8f527170bb35be0"
  },
  {
    "url": "assets/js/23.c1c7590d.js",
    "revision": "d5c2f2c514f3f9770b234362826105eb"
  },
  {
    "url": "assets/js/24.0126ff8c.js",
    "revision": "2cf58c1956630784057110beab62aa40"
  },
  {
    "url": "assets/js/25.302fbdd2.js",
    "revision": "91e2949158fede1751e934af5a1fa58c"
  },
  {
    "url": "assets/js/26.b09ad5aa.js",
    "revision": "43132d458efde2ce01b3fd21d826a79a"
  },
  {
    "url": "assets/js/27.2013d197.js",
    "revision": "51b317033ddcd4a84acda1eb5a55cc86"
  },
  {
    "url": "assets/js/28.ef690819.js",
    "revision": "dac123d5e42f7b60f3c74d19d33d3cee"
  },
  {
    "url": "assets/js/29.c12264f6.js",
    "revision": "e4b0f35d405013de88a127c4b2500e94"
  },
  {
    "url": "assets/js/3.66fd10f3.js",
    "revision": "e42eaa92453da486b2039827b306b674"
  },
  {
    "url": "assets/js/30.6271f306.js",
    "revision": "454475b24be93803cb0ab28c6313d44b"
  },
  {
    "url": "assets/js/31.d31d04ad.js",
    "revision": "ee45c0a9df19fa611d040bd826ecb236"
  },
  {
    "url": "assets/js/32.2ccb7a4d.js",
    "revision": "5fcb08cfcf36b05bb797a30c933a95ac"
  },
  {
    "url": "assets/js/33.2922ea20.js",
    "revision": "1a8fcdc68dcf780d6688ca25eec7381c"
  },
  {
    "url": "assets/js/34.acf7771a.js",
    "revision": "4595309c13d2a3e70e733fafe43a0318"
  },
  {
    "url": "assets/js/35.e7b8f2ea.js",
    "revision": "98a6ce790f18f66113043f403b18d6f0"
  },
  {
    "url": "assets/js/36.4113c79a.js",
    "revision": "10905a247997fa854d3bbcdd36355bab"
  },
  {
    "url": "assets/js/37.a29d3daf.js",
    "revision": "3ce2e07dea1dbee23750014305cb21d3"
  },
  {
    "url": "assets/js/38.fb7c91d3.js",
    "revision": "31aa1bc96abb045dd381523e0ce6c9ea"
  },
  {
    "url": "assets/js/39.a1d83427.js",
    "revision": "7b5a597bfa9f2636de2b44be1fe3a276"
  },
  {
    "url": "assets/js/4.173eb4cc.js",
    "revision": "78cda7db547d12c9f49578e27202b62a"
  },
  {
    "url": "assets/js/40.453a37e4.js",
    "revision": "c9c44acd7d5fc3c7295e542f7d3feb83"
  },
  {
    "url": "assets/js/41.70ab622d.js",
    "revision": "2dcfce2c8158f21be9afec6c8431c119"
  },
  {
    "url": "assets/js/42.7a968539.js",
    "revision": "5e122c9972c4f2c4c7edd6a09500eb61"
  },
  {
    "url": "assets/js/43.ffea633c.js",
    "revision": "9bee98594ad82f1f61c480975b041293"
  },
  {
    "url": "assets/js/44.c07be8ed.js",
    "revision": "843d0a83d0e944984d12e88710630fd9"
  },
  {
    "url": "assets/js/45.a8bfe16f.js",
    "revision": "abd67ac2e56b26f649e005ffb5e320d4"
  },
  {
    "url": "assets/js/46.ff7ecb84.js",
    "revision": "dec1349df0fbd41ae8cf57e56602d1a6"
  },
  {
    "url": "assets/js/47.92dcf450.js",
    "revision": "4e7e8f4fad01bc20465a36681aface1d"
  },
  {
    "url": "assets/js/48.e3080018.js",
    "revision": "ed90ceb34f567aeb61ea5d7e432c8425"
  },
  {
    "url": "assets/js/49.354b5503.js",
    "revision": "487a3eddb108e491cbbaf06ce1eb13c1"
  },
  {
    "url": "assets/js/5.90b5014c.js",
    "revision": "fcd90a07e44c5d66a67557b62fd2e90f"
  },
  {
    "url": "assets/js/50.c5af461e.js",
    "revision": "ab1994a1f1739acd4c763cdf5ab94052"
  },
  {
    "url": "assets/js/51.ab0f3467.js",
    "revision": "f6e53be9bf0939f014c422c93e15e1cc"
  },
  {
    "url": "assets/js/52.d1cad92e.js",
    "revision": "bc7924e5a68a7836a68e61590ffd265d"
  },
  {
    "url": "assets/js/53.0fa42d02.js",
    "revision": "2a1d603f171607df92d73c605526395a"
  },
  {
    "url": "assets/js/54.726c6323.js",
    "revision": "4c57dedfe4c15270c2609483b9041c05"
  },
  {
    "url": "assets/js/55.1e115ec5.js",
    "revision": "9aec2e833851e8bdfa995618cc0544dd"
  },
  {
    "url": "assets/js/56.6f90e241.js",
    "revision": "4f5167564a57d88a10db2fe87938eb1f"
  },
  {
    "url": "assets/js/57.5579c167.js",
    "revision": "fcaa3e58e837c9a45d47b77293022950"
  },
  {
    "url": "assets/js/58.a0a102bd.js",
    "revision": "efebbde9ac0871cba9c284fc81dbe051"
  },
  {
    "url": "assets/js/59.987998c5.js",
    "revision": "82234b5783d9dff7d32df3f88cf72d7c"
  },
  {
    "url": "assets/js/6.99c3a0ef.js",
    "revision": "69608630e8490ee8080489cd6b3c305c"
  },
  {
    "url": "assets/js/60.bb1d92c0.js",
    "revision": "7ffe8c746af985700c5e32d4e8c50234"
  },
  {
    "url": "assets/js/61.7d77cf06.js",
    "revision": "59a5e5de6fa7ae669c2d14c799a399f8"
  },
  {
    "url": "assets/js/62.365934eb.js",
    "revision": "e26454778c0636f2507bfe29597f48a4"
  },
  {
    "url": "assets/js/7.020dff6c.js",
    "revision": "c70e359167ececcffd3c0bf8b42dcb64"
  },
  {
    "url": "assets/js/8.a53160ff.js",
    "revision": "b12721b0266d5cec4b8287e5bbe5bf2e"
  },
  {
    "url": "assets/js/9.c898c99f.js",
    "revision": "7c36270c678e1cb636ee2be91383b014"
  },
  {
    "url": "assets/js/app.86d6c06a.js",
    "revision": "1ec1fea30bd26304827aab16ca1bb1ea"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "99b10bb274d035a7fc2271f25604f7b9"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "437277d6ddb66628a646af77951ef2b7"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "c3660f52c8ad33bf002e5a1360fb8efc"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "7e6c824cda9e2905bdf73372cdbe2b8a"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "69a0191ba2039a2f2090ead4cba193c4"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "1f8fb9fe558260e0e046ceb3cef3224e"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "79abd55f1f461a2f813d051e224905aa"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "f0add288cdf3de0dfb0b05dd7870f8cc"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "ef1c2f6c0fe0571bc611d51ce50a2d80"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "8e96b73a1ad91bd3abc5385d0058da94"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "4c68fb8131fe9e332107dafb9ea5cd6a"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "5b0c0967c882c1406ec756add5387691"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "42c19732180c7646623e0cab9ebdf04d"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "080644c8eab275bcc992e3d71dfabaf9"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "5244d3c4385b9722520c830699aa80aa"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "dc65abc6524d275b847d186429b0a2cf"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "7001b4ddf9a0f42c0774b3d0626a0b08"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "2fdb067f48d2e0cb46f9852419384b82"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "7846d54f929374f067bcf5e1174949ad"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "77f7a265722a273ae61a78f0723946aa"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "b6fb5f6ceca76d94320527425e5fdef5"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "b09eb8ada0f192fbf1cbb6ac30289432"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "7f8dbe2cdd4e40dea55024e354156aab"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "59770e31f90e103d2ff9a7997e8b4c5c"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "9b69180cb2b1e32b2275e71427fa0814"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "537c403c847c182fec2be22d830058f9"
  },
  {
    "url": "index.html",
    "revision": "8b75ef90e1d7ed6f8541f3d247514a20"
  },
  {
    "url": "info/index.html",
    "revision": "95ff3005a547fe1dbc15cb38551aac79"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "dda8363b92ae3191d63fa0ec55161d80"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "bb8584dac6c25d7dae2548398197884d"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "a7095193218f6c9b5a3fbb5351b23709"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "557ab7af55dc97545505ab22f7bd9b1e"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "98ac29d25ee52baaac58d8f1f39f0b95"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "e3313007abcf76245a311d0db4c9c259"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "4eff65479307230ba8cc13c9a347bfb5"
  },
  {
    "url": "network/http/index.html",
    "revision": "9e3ea444ea16c712caf1b341858bf4aa"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "4971e329a08c062b6d541a97fe928902"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "180751ac6cbb485f06c0943fa63ce3e2"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "1219ec020773099bd334454004dd19cf"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "a714a796ad24087946a3ca00cbe5a856"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "e53a855d72bded863bc0433a4a3a8139"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "ac69b050a9ef7c42f649bf60675b0339"
  },
  {
    "url": "thinking-more/drafts/3-knowledge-learning.html",
    "revision": "11bba7b78e979cd8e7019b3cdd9c4dfb"
  },
  {
    "url": "thinking-more/drafts/brainStorming.html",
    "revision": "e7fac64a958c90de38d0a1378b226070"
  },
  {
    "url": "thinking-more/drafts/how-i-record-my-time.html",
    "revision": "155810dfa496035e32d3b43aa95d6780"
  },
  {
    "url": "thinking-more/drafts/playing.html",
    "revision": "010086ba5818a31d17c7e484c3b22671"
  },
  {
    "url": "thinking-more/drafts/thinking-failure.html",
    "revision": "3d1dbb5d0e89161de57f83a8e6f57729"
  },
  {
    "url": "thinking-more/drafts/方法论.html",
    "revision": "3b16f1a0bfc0e7fe8bbe8e344c748c0a"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "a016eefd641bfdaed4402eeb0139eed0"
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
