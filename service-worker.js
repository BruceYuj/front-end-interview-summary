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
    "revision": "f58fb5c833a11c9292333a798d0e3505"
  },
  {
    "url": "algorithm/1-algorithms-learning-general-outline.html",
    "revision": "e25e11acf6127ab0c61957ef981c4f04"
  },
  {
    "url": "algorithm/10-big-int-operation.html",
    "revision": "373cb3475b7b1c5d764add8c2ddf2d7d"
  },
  {
    "url": "algorithm/2-merge-sort-and-questions.html",
    "revision": "b5c9a659997505052073f6ea512c4852"
  },
  {
    "url": "algorithm/3-quick-sort-and-quick-select.html",
    "revision": "c9e8e39fc0e7d4cab6bb26df93da43fb"
  },
  {
    "url": "algorithm/4-binary-search-template-1.html",
    "revision": "d3938c4a5e7011515ddca9e23da6deba"
  },
  {
    "url": "algorithm/5-binary-search-template-2.html",
    "revision": "9ecadb255662b081959f764e736e83e9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6826a9885369c5f35c4f7f4a23c74ae8"
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
    "url": "assets/js/11.a801a390.js",
    "revision": "47d891edfedfc8856defc3d0a1f42038"
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
    "url": "assets/js/15.00f7dd56.js",
    "revision": "094f535160e933049bf12a98de142461"
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
    "url": "assets/js/37.3ec9f12d.js",
    "revision": "4cebe9109bcf2a7ad9eeb0657f5a3c75"
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
    "url": "assets/js/4.a52e8f4a.js",
    "revision": "75b71439a6f605b0626735a6eaf5d65b"
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
    "url": "assets/js/43.34478e1c.js",
    "revision": "b28845d08571781339cebd7c2e5a00eb"
  },
  {
    "url": "assets/js/44.546b3657.js",
    "revision": "56094aa0d87812602a6ed961ceaa38a4"
  },
  {
    "url": "assets/js/45.7f2c4479.js",
    "revision": "860c702bc0afd807ebe44260fa2551f6"
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
    "url": "assets/js/app.46f63629.js",
    "revision": "6b119005e93a2c4c9c554dfbccdbcbf7"
  },
  {
    "url": "front-end/browser/index.html",
    "revision": "f61bf283b29d8e185a4ac5e34d9e2f58"
  },
  {
    "url": "front-end/browser/reference.html",
    "revision": "cae2a82a6f024e8674a4ecdcff7e343e"
  },
  {
    "url": "front-end/front-end-thinking/1-how-to-get-in-leetcode-contest.html",
    "revision": "9cff149a81d6bd9a53282526369191bd"
  },
  {
    "url": "front-end/front-end-thinking/index.html",
    "revision": "98229f3d2effeb00e209e932e311f4cd"
  },
  {
    "url": "front-end/JavaScript/1-completion-record.html",
    "revision": "9a1bfeac63e73cdaea7e66225035aa5f"
  },
  {
    "url": "front-end/JavaScript/2-built-in-parseInt.html",
    "revision": "9bb0c635ef771e485b40fd65890af1cd"
  },
  {
    "url": "front-end/JavaScript/3-Array-prototype-map.html",
    "revision": "decfdf47e881c21d7c4e98219db6d472"
  },
  {
    "url": "front-end/JavaScript/4-javascript-declaration.html",
    "revision": "2c2bb2e2663e23d49124b6344a27e822"
  },
  {
    "url": "front-end/JavaScript/5-es6-block-scope.html",
    "revision": "2c65e687470afb3d661b66ee833f085b"
  },
  {
    "url": "front-end/JavaScript/6-environment-record.html",
    "revision": "cf50bc00a1a5e637321925f364e88e6a"
  },
  {
    "url": "front-end/JavaScript/7-block-level-function.html",
    "revision": "919080f9599e5fe8aa2d97ab6e24f75c"
  },
  {
    "url": "front-end/JavaScript/drafts/bitwise-operators.html",
    "revision": "dfebd324c5c1af56c5366ae1cfa81486"
  },
  {
    "url": "front-end/JavaScript/drafts/event-loop-in-CS.html",
    "revision": "5be923e494535d25a9216190ed74e2cb"
  },
  {
    "url": "front-end/JavaScript/drafts/Inheritance-and-prototype-chain.html",
    "revision": "696793c66fdac0ed54d016b6b628f0a7"
  },
  {
    "url": "front-end/JavaScript/drafts/this(undo).html",
    "revision": "76e62d363c375fe5c41bedac517c149a"
  },
  {
    "url": "front-end/JavaScript/drafts/using-object.html",
    "revision": "2191b9fb638201c42f652ca67681cc7e"
  },
  {
    "url": "front-end/JavaScript/index.html",
    "revision": "6aab3d2a58e352754b6678b94b29fb43"
  },
  {
    "url": "front-end/JavaScript/modular-programming/es-module.html",
    "revision": "c0c9f4e2ffce7bacd4c91273af97dfec"
  },
  {
    "url": "front-end/JavaScript/modular-programming/evolution-of-js-modularity-1.html",
    "revision": "092a5e64a1af2420a983648847a8f276"
  },
  {
    "url": "front-end/JavaScript/modular-programming/modular-programming-introduction.html",
    "revision": "9ec4e7c0284e19af5ac9ca2b2371012c"
  },
  {
    "url": "front-end/JavaScript/modular-programming/node-commonjs-module.html",
    "revision": "62300ef37fb04595d0788b75f24aca5c"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/1-CSS-one-line-layout.html",
    "revision": "14631e6da2f9cd83b12e606c2e3bea70"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/2-how-to-quantitatively-analyze-bundlers.html",
    "revision": "ddafb31c87cce978af35415f64423400"
  },
  {
    "url": "front-end/Mom-I-Cant-Learn-Anymore/index.html",
    "revision": "5953d2eaa141583f10c469c2698986db"
  },
  {
    "url": "front-end/vue/mixin-HoC-hook.html",
    "revision": "41023011a482b28f0f2e2a0b89b015ee"
  },
  {
    "url": "front-end/vue/vue3-source-code.html",
    "revision": "df99f598833e0f453134fb9885ebd358"
  },
  {
    "url": "index.html",
    "revision": "eb10e1d7ab6e05b88ab931d27493ae34"
  },
  {
    "url": "info/index.html",
    "revision": "1a8f496985ea71d3fb4d77e8562180ff"
  },
  {
    "url": "network/http/1-http-history.html",
    "revision": "9353a2e3e29aa2dca1e2b621f4f47033"
  },
  {
    "url": "network/http/2-http-definition.html",
    "revision": "cfc67d19cfba595a88b3697f919383f2"
  },
  {
    "url": "network/http/3-http-actual-process.html",
    "revision": "aaf31b8bf2b5c1ad3682b85102a93ae5"
  },
  {
    "url": "network/http/4-http-concepts.html",
    "revision": "1eb6494052f3f9225f95526b6986634f"
  },
  {
    "url": "network/http/5-http-request-methods.html",
    "revision": "1f730b62b6b8a3936085ec61be5cad7d"
  },
  {
    "url": "network/http/6-Why-design-MIME.html",
    "revision": "5e6b411e9d254df3f363e44ea0aa6be2"
  },
  {
    "url": "network/http/7-http-body.html",
    "revision": "ac6ddecc3baf6894fe0d0d1d21ba892b"
  },
  {
    "url": "network/http/index.html",
    "revision": "0d034d7b62d1146ac079b46157e49209"
  },
  {
    "url": "system-design/why-is-the-design/1-Why-design-MIME.html",
    "revision": "555375b57fbccfcc8cf052ba76544437"
  },
  {
    "url": "system-design/why-is-the-design/2-why-setTimeout-4ms.html",
    "revision": "5d07b06b30152dc97a8ab67c6e820b0a"
  },
  {
    "url": "system-design/why-is-the-design/3-why-design-fetch-api.html",
    "revision": "5148e73d19e0acd4c93fbfae978a4440"
  },
  {
    "url": "system-design/why-is-the-design/index.html",
    "revision": "449bc26b53c1d70ff0f2e346128ed22e"
  },
  {
    "url": "thinking-more/1-why-we-need-independent-thinking.html",
    "revision": "50b133e80b52e10ecf245bfeae0fe0e8"
  },
  {
    "url": "thinking-more/2-escaping-from-smartphone.html",
    "revision": "5fa932e8225f28b7f21d165242249e9f"
  },
  {
    "url": "thinking-more/drafts/3-knowledge-learning.html",
    "revision": "815216852a465704f65e4ec6ec783eda"
  },
  {
    "url": "thinking-more/drafts/brainStorming.html",
    "revision": "6a84ae7d39d2b27d9edd817b409c7304"
  },
  {
    "url": "thinking-more/drafts/how-i-record-my-time.html",
    "revision": "e292e150838fbe1260b136ba13b74706"
  },
  {
    "url": "thinking-more/drafts/playing.html",
    "revision": "575f73c3eb49c2f23ce4ed8b5dfbdbe4"
  },
  {
    "url": "thinking-more/drafts/thinking-failure.html",
    "revision": "cb498e818fd123e6556531b36a728672"
  },
  {
    "url": "thinking-more/drafts/方法论.html",
    "revision": "cd507dcb973727abfac4c2eff28adca3"
  },
  {
    "url": "thinking-more/index.html",
    "revision": "572c87d68d4e2274a96bda54d355e49d"
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
