'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a71db417674e85b12d14ffae6a0725bf",
"version.json": "ecebb258537e8fa42fe13a2d1e025ca0",
"index.html": "909cafc60c4b14614abcc07d6716a300",
"/": "909cafc60c4b14614abcc07d6716a300",
"main.dart.js": "767b9d232d7ae4681a1b93d7f0c119f7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "cc5a78627d9652972840faa231137ad3",
"favicon.png": "eb97ad283d42d48938e890ae51b11d6a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc0290f454411f60ca56cef27359d7c9",
".git/config": "2870feafef444c8b29a04881634d4685",
".git/objects/66/7b85d829b3e8b8d51e3604da4fa6bd3135e1bb": "ac10ed6937b6d8a11490f7a334deac5e",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/1425f05bb7726b0fd46e68da257d29a2ee48b8": "c073cbe9e35c15d62dad02db0a7bcf08",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/67/133a8c5b78c579ea1e4c3f0d1ab39f643898f1": "9b79aaf381f3d85ddb77bf9d92acae55",
".git/objects/0b/ae0adf5d3307c14860899127a4d9088653fd39": "d1d37bd246f48c9697fa102ae8fd104d",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0e/46aa8744298f979cd082e710a9cf23e46e17c4": "676a7a88bddf4db38912dd4f664390ec",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/0de95a8baa5247629eae9a1f3b87086c040a06": "13444e400ebb2cd8103bd3c36acc8bed",
".git/objects/b2/6f26330ffab3844be616f1b1c5fd482fb72652": "d2d485dca0666f7ec6a5f13323a496af",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/3c3bd83dfa9d930ae1c069c5e1fe7f9ca7a1b4": "9d6ed29fa4a772a7a71e02953f614b5d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/c1/d04a70cb847c02b10081cb56c5fc9663ad2f65": "0edd1bd05a243e6cc5cd7d7c9f4e3cb5",
".git/objects/7d/ec99638f46aca6474e30a5629f63fac81a04cd": "ccbfed8bfcc03da7a03fe1d6297051d2",
".git/objects/7c/21e4adc7ff68ded0ba430c2e801adae5ba9704": "ec158ed8f598b331ea0a9f459a109bca",
".git/objects/89/d7a71bcd3c2ec00cb31ee110796e8110a0f61b": "d716922ea2a9e594794da25847090f07",
".git/objects/7b/da34f462c93f1c458daa3eacfc6abfc1687cc7": "5e1b62224c0e938072d290986ec6af95",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/21/9a96441e448d649750e9af93725a0a29aa3d48": "03ccb53558aa60ec090177bf9f90e5b4",
".git/objects/4d/c63022e0268983cf86ccacc79bcac297a8c624": "c4c5b682b8d0de9e047c9af406e0e64b",
".git/objects/86/2b6a0d783c12833064699fc8253b15317346c6": "4d7d35e7e2390faca164ed684c355e24",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/43/f9f128b789551ac4e63dc7448a1c7cb4460a41": "99512b9a5d818897c198980f1e3a8c45",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/566e1c93c2a1057255becc90d9e608490a752e": "417dd3af1cd064b8da861f5f220df9af",
".git/objects/9a/51916f321891481e7a585c63f0a2c808919679": "5fa198036e3ab8958bf27f7d47a0f2fa",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/6d/eeca2868f6412a1080b120f3e1ca40f8f75a5f": "6b863c41554299c01469e7ba8435e23b",
".git/objects/6c/25bf96a84b022595770bb4c5aec3a55694fbac": "7b26439d17016fa8c5e253dcdbacc11e",
".git/objects/6c/7bcde4198a53a6e4dc036cb86b91f82238d3fb": "4fc2a14d8ad0d7b048cd2a7f5cec7fef",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/63/eb3d2538ed0f3285e5d75a2a8ccccc80265d9e": "17b5cd1faf09f8866da4312d7853df80",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/95437cb9087f5a91af65c733aea161ae6ffe40": "5c6dbdd71e4fe5563452b7c15eaf44a4",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/af/0b3daabd23278803697efd686ff222a85bcd2c": "728de7b0869334c210fc2e0aa72e03cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/db/5fe531b505cc6d2eb9c6fc98b0295b081e3611": "25c6c6cf186d6677fa2e71fe49dfa063",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/f68f2e2629bc7e24b1b6324ef99b896ba4a490": "6526415d39ff732ce709c7b638fa4608",
".git/objects/ff/b5665e66ac298042c2d33b6f42b869c19fb974": "62ff209ea233f6c26c5a7f58fd8230e7",
".git/objects/c5/623aaf526a5bb26075b81321717653337453dc": "d0bb86dada35aabdf9369f303b7c937b",
".git/objects/f6/4ebbf0a6b904c7654ebab63378b63ac2852e54": "7e4f6bd91a1db59a5f02f60bce62aade",
".git/objects/f6/b2a373bc09573745cf37334db7207530a01f8f": "047f363653515e0307d583dc47176fe2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/79203b46d15d5ab990f097bd69e42af984a27e": "ef39767149ac83143529a254d506ea14",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/50db7d37f7f7dee58706d8ed6a020ff5967481": "a5d1703bc920174b36abb1096f5a40ae",
".git/objects/1b/dca237824f59912b1f0c84291aefd32dcc5441": "2757d375e2278e7bbc26a2e2244909a5",
".git/objects/77/d0a483941a1f9933ec53cd33ca4dee4edc9761": "181d90f445a77ffc246f1360a4040bb0",
".git/objects/70/998bec0b5950b8f97efc16ccaf46bf3179a09b": "017d58e2d1355140021554c31e20172d",
".git/objects/4f/f36d1bb5f980e42f81131b90e3aa446252bef7": "fe54efbf5157f60890d913fc6847103a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/12/5cf081a971d9a4a559382ca7baeca66831b842": "e535b216225ad42c54f1d1ffa4bd5698",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/71/cec101bf3fe0a767bf907e86098b78a31f6b9c": "036879ce5b2f6efc15d146777f4faebe",
".git/objects/76/4dd92510b10f3f70a6844ef5b39d2671a51f1f": "a2c4ea59a8cbe4e6c43b27432853556f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/637a720078e867541018069c1a762e09a0293d": "eff5a74dbac618fb7cd3572e504a20c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa46e85187492162ec5171dfc3d7209e",
".git/logs/refs/heads/main": "df5df06154f35efcdc35e8814f0032c7",
".git/logs/refs/remotes/origin/main": "d627badf46987c30055f16a4071d0055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4467b03a886480c7a2a1ea4adf1c640b",
".git/refs/remotes/origin/main": "4467b03a886480c7a2a1ea4adf1c640b",
".git/index": "2031174186233194cd883b94835ce95f",
".git/COMMIT_EDITMSG": "be78a4f962afd349d9b2b1c82f45143a",
"assets/AssetManifest.json": "98d44aaffbf98fd8d11604e90c8d3d5b",
"assets/NOTICES": "23a661990744af90dc932a5f51c9b54c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0a12e5f5f46348dc2d138f3c788ab98a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "552e49394b6a7b392dbf1ae0ce402e2f",
"assets/fonts/MaterialIcons-Regular.otf": "818da422ab369876375461ca7993fc83",
"assets/assets/elantra.png": "544dc3b56706518839583730a1e5d630",
"assets/assets/mercedes.png": "371ae9e97824667636dbc31590fe2e99",
"assets/assets/rio.png": "811114f9784e9be26935c0b52c4b2b90",
"assets/assets/camaro.png": "e0c31fc1d406b9603d7bf5c35cccf368",
"assets/assets/camry.png": "0e5e1bc4ea40f38cc60d62c73d5d9a27",
"assets/assets/logo.png": "eb97ad283d42d48938e890ae51b11d6a",
"assets/assets/bmw.png": "9cb8ded8c82341668f0d8c364271b96a",
"assets/assets/accord.png": "0d209b4c52b9a98e853de55a43aefe09",
"assets/assets/gclass.png": "f690309b179b14dbba9f1c6a56cfbbe0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
