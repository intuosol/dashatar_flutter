'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"index.html": "240347c05c565288e35abec10e7059f5",
"/": "240347c05c565288e35abec10e7059f5",
"assets/NOTICES": "282cfe0945e3f19e490b93b2c35a5b66",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7176513d1a10771cc1da40fd7a05662d",
"assets/fonts/MaterialIcons-Regular.otf": "07f07345359c90a1ac2de83210acfb2f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "24e81f3181470f82e6e8b96dbf98499c",
"assets/packages/dashatar_flutter/assets/dashatars/silhouette.png": "e5e93bf851956b9846604436130a6029",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-1_w-4_c-5.png": "4e2f8b64ff2238d52ebe6e519b8e8822",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-3_w-2_c-4.png": "cc34e71874739e8f32eb95dc16f05565",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-4_w-1_c-2.png": "f070bd4876831f1dc0f4958f07be92cd",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-4_w-5_c-2.png": "1c1606ba0bc4043cd672372bb612a47b",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-3_w-2_c-3.png": "f7df5b50a09e1ed484d00d6a8ea303bd",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-1_w-1_c-5.png": "c2d0296cd9adbc3e6676f526f47621d3",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-1_w-3_c-5.png": "a90d83c8d1908c8c50da96eeb470579d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-2_w-2_c-4.png": "efd7ad5ad05bcd155347c96df691636a",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-1_w-5_c-3.png": "e3adad29f490f460e5fe293e73b6b649",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-5_w-3_c-1.png": "f5af34aa48de6b4214871b85eff8b1d5",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-2_w-5_c-4.png": "174555008db04990291f1bc97a5aeccc",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-5_w-2_c-4.png": "926cec51449faf73250e75057b281d3f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-4_w-3_c-3.png": "9e57298ae3cc596c1242069802631d8c",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-1_w-3_c-4.png": "562c26ddca8fc157d247760795158878",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-4_w-4_c-2.png": "751f740324b67eb28846b0694ba8ed24",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-5_w-5_c-1.png": "fe68b160ea583c5d2149ed63eed0c518",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-3_w-4_c-3.png": "f45e102583963a6930d566e1503a765f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-2_w-2_c-5.png": "3b7415afc0aa8b675d37d55b2ab0e750",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-5_w-3_c-2.png": "9c8e9cb5c34aa2f641349277fb102933",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-1_w-4_c-2.png": "e839f488335254e46c27ac5c85ec5353",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-1_w-5_c-1.png": "4b38757ae16796db16232c05ad5bd07c",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-3_w-4_c-1.png": "81f7a10246c8d069bd15ec272842220d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-5_w-2_c-2.png": "bbb2de3d36d0ea3a6bca27ad5776b51e",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-2_w-2_c-3.png": "169c0d3a1faf69309ff5f18f075e0ef2",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-2_w-1_c-5.png": "712c4db401f56943ef06c8f4995de4c2",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-2_w-3_c-4.png": "d4a9c51efa6f1f5164995064bff4bc4c",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-2_w-4_c-1.png": "f6121663df90595f40bf77c8c23650fd",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-5_w-1_c-2.png": "1aa8ad9b8df26a0f37d71bf9755684be",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-3_w-3_c-3.png": "71c5a87174c6d8e7fb7570c4aad6eede",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-5_w-2_c-1.png": "2fe392ae0a5cfbffb2f574242599837c",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-5_w-4_c-1.png": "b80002027aee41fea90c0bb1148552d3",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-4_w-4_c-3.png": "49dd79b7c29552ba54ad0b76b88daff5",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-1_w-2_c-4.png": "ee0e861641a3b45e81ab9c8763343c6d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-4_w-2_c-5.png": "1b12d9b5cf3ce9c81ce40eea870f7351",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-4_w-4_c-1.png": "16dc8412a89fccbc00651513a2cc7c11",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-3_w-1_c-5.png": "3345700918bedaf7831b441b25c02379",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-4_w-1_c-3.png": "24c8a00e9d7fd13a2e5eb1239db12777",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-3_w-3_c-1.png": "82877c162795c5d440ebb875b48df3e8",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-5_w-1_c-3.png": "e8b49d5ee29f1abdb5e4e7b13646bf77",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-1_w-5_c-2.png": "3edb03754c40ce30994dbd83e5acbfb7",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-4_w-2_c-4.png": "2fb843d3ad8da4c2681abd47ca64f335",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-3_w-5_c-3.png": "50e14c14e7a087618a4674d052874f0e",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-1_w-4_c-4.png": "d8f5267191c00e52bf7fb0b51423d882",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-1_w-5_c-4.png": "8c1bb5284276e5bbd8dc44856e9a693f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-3_w-5_c-1.png": "95cf720f110ab53e1cf2f7ec45472b8d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-2_w-5_c-2.png": "adb6e4dac6a563d03693811c9085722f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-4_w-1_c-5.png": "1fef6f6e495dde3d1d08ca29d91902d0",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-4_w-1_c-4.png": "7f8213b28eeec0fb2b0a99de2bd45548",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-2_w-4_c-3.png": "030c7d6e07e3e31935a17a40a9628382",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-4_w-3_c-4.png": "7a6c0f62700f6337474dfc9b017f520f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-1_w-5_c-5.png": "47938ce26b9665260936a0fa49c65f88",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-2_w-3_c-2.png": "44d6b7bc080fe903694dab77aea29a29",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-4_w-2_c-1.png": "73c6a57550f47f29521ae64b949170ce",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-2_w-4_c-2.png": "29e177113a03e4188d3719a69e6b6300",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-5_w-1_c-4.png": "dd181cb4e6125fa61c14119853b29664",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-1_w-3_c-3.png": "e8e1f849319cea8e8c8d697f70ffe4ab",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-5_w-1_c-1.png": "2a6aa639128c9fbd782ae4351b77a229",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-3_w-3_c-5.png": "bd6b5a8da80c708036b11a26cafae552",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-3_w-5_c-2.png": "1c1606ba0bc4043cd672372bb612a47b",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-2_w-4_c-5.png": "1cb827b1a93e2120cfad7b88558fcc92",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-4_w-2_c-2.png": "1d85cbefe81db7fdedfba81351dafc5d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-2_w-3_c-3.png": "15fa28a336856a1d3f6659da2c90e379",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-5_w-2_c-3.png": "a1859756d097c4700a7b945018b5174b",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-1_w-2_c-5.png": "dbe405751443d6a3c5ecd31ec9414085",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-4_w-5_c-1.png": "23469d0165eba2f9f259df3351bbb9aa",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-4_w-2_c-3.png": "87c80b64daf220d6a475b5b0d54a8dc5",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-5_w-4_c-2.png": "51e2f83aedd32f6296fc1f0d0be5cc28",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-3_w-3_c-4.png": "d1438545bb0d8e56c5555dac51d49fea",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-3_w-3_c-2.png": "821eb042d2f1f8f9c47a7b2aebc000e3",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-5_w-1_c-5.png": "3ad79f7df77d83a172a217f2b0fded9b",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-3_w-2_c-5.png": "0f5144896132f5bcdb5c593ff4cb8354",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-3_w-1_c-3.png": "246135c23d3af95757444bf61476ebca",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-2_w-5_c-3.png": "7e88ea715fa65e40622ca0aafde45e04",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-2_w-3_c-5.png": "73128793d81d3a431d3077d5ede2ef6b",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-5_w-3_c-3.png": "69f1b145adb5ed755862e4347ea25ad9",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-3_w-2_c-2.png": "1dce45e8f4675ad3dc1d675207d9b801",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-1_a-3_w-4_c-4.png": "d1438545bb0d8e56c5555dac51d49fea",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-3_w-1_c-4.png": "5ca7b24241c54cff40e17c2fc4c81d9f",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-2_a-2_w-4_c-4.png": "93e99cad43dba1ad86680bf5ddeb3077",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-3_w-4_c-2.png": "148f544bcd88a0624fe6f594d980554d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-3_a-4_w-3_c-2.png": "a8ef4df31b64886388a765cc34a69c8c",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-4_w-3_c-1.png": "148f544bcd88a0624fe6f594d980554d",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-5_a-2_w-1_c-4.png": "a0a7be7b6f9db64146b432a21a1615a1",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-1_w-4_c-3.png": "7706e404a73abba0d8c75c7c81e7e497",
"assets/packages/dashatar_flutter/assets/dashatars/Manager/s-4_a-2_w-5_c-1.png": "2ade60927cc0f995abbe3b68051ce338",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-1_w-4_c-5.png": "dc16aeb083b88b3c84f211945dd6fce8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-3_w-2_c-4.png": "d3a75757ab6db7574e39fe6930dc5188",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-4_w-1_c-2.png": "3cbe574e69838847af49617bd753472f",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-4_w-5_c-2.png": "254c9112643cc6a4778b5c4d5c579ec7",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-3_w-2_c-3.png": "6c1efb0fbee90a8d5b79140069bffe54",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-1_w-1_c-5.png": "ce0b1ea9cc06d86ea048bb62b81e179a",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-1_w-3_c-5.png": "a77427990e35228de78c73e1d15e378c",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-2_w-2_c-4.png": "d8f5c7364cfb0d64dd56769a909195c5",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-1_w-5_c-3.png": "e19870a6f6cfcee3a3a264d593d57e05",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-5_w-3_c-1.png": "845b62313d036b3adbaedcf6e2ec89f8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-2_w-5_c-4.png": "859a95855bef625b22de94726aea5d30",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-5_w-2_c-4.png": "7184e1793e59fb8b056c8d42f9c75277",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-4_w-3_c-3.png": "5c40c0ed2998f9cc08bf8c8a0a2f90cb",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-1_w-3_c-4.png": "12e90e00854c6bbfa622d604657c9253",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-4_w-4_c-2.png": "1d6468ee1553e657b6d83d9a804445ff",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-5_w-5_c-1.png": "bfb0e3891b64f895f6231cd1a86a9f33",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-3_w-4_c-3.png": "0b4287526388f80c16db273cf2ff14a0",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-2_w-2_c-5.png": "600126d4b5e6f6da18c630bc8d355a44",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-5_w-3_c-2.png": "5e2520cbc22417e7ef4a10e961c0a958",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-1_w-4_c-2.png": "d8df0a08cff78ccdb7d8f5f8b4e49556",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-1_w-5_c-1.png": "00c39932926ab7dc1f18d78d0d178899",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-3_w-4_c-1.png": "5a2b435b14c0b61b3411e15be7f2e611",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-5_w-2_c-2.png": "70a3a3ff1b4527d820b1ca0dafb815a5",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-2_w-2_c-3.png": "0e464999411633c2e008b8817bdb922d",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-2_w-1_c-5.png": "ef59241c65944fdbbc21d49d05a4a8b4",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-2_w-3_c-4.png": "f622d51937c6b2699040de79bb243357",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-2_w-4_c-1.png": "3b1da8405cd9697285e1f7958ade2d68",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-5_w-1_c-2.png": "b4b9d5559c572a25301f63408f75f5f5",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-3_w-3_c-3.png": "71c5a87174c6d8e7fb7570c4aad6eede",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-5_w-2_c-1.png": "9cf83003d07a4aa3a883aaab8b332b95",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-5_w-4_c-1.png": "91ac11c13ea2c64967e9ee5c22c7674f",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-4_w-4_c-3.png": "9d569ddb1eedf190c03ebd3e8cd41db7",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-1_w-2_c-4.png": "7537e6987eec8481bc3f6ab7fc40d08c",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-4_w-2_c-5.png": "b068ddfa9b84d07466c6dd64276af429",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-4_w-4_c-1.png": "3b419c155e059e70293f7952589467be",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-3_w-1_c-5.png": "a67cd7e234f05d45d3c39019a014c587",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-4_w-1_c-3.png": "f8f4a371095265b84ccc90f1e823064d",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-3_w-3_c-1.png": "82877c162795c5d440ebb875b48df3e8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-5_w-1_c-3.png": "f7965a14597565ef2939db18778068b9",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-1_w-5_c-2.png": "79489e0cbd452acfa550969e0388e9cf",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-4_w-2_c-4.png": "c96a2a3db331a0fd5fccec5237e21bd1",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-3_w-5_c-3.png": "eefa731e13a844d2e84456d87ee6647d",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-1_w-4_c-4.png": "cc024d5437f5d8f1ed99dced0f9afdc7",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-1_w-5_c-4.png": "6a0e297f39fb23bf6ac1d19e54d22704",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-3_w-5_c-1.png": "a4d7792cce7a74fe0a539a3a0b9a07a8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-2_w-5_c-2.png": "ddc652c3985f213cf7f9f29eb52d355a",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-4_w-1_c-5.png": "06aa9285d4eeb542f804603598328476",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-4_w-1_c-4.png": "b0d690a0a35f4fb3d318c2a6a1888aa5",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-2_w-4_c-3.png": "b123447e01bf6bff6a84e8bb4619303a",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-4_w-3_c-4.png": "b1300f9ea4f569c9b898fab848a216a4",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-1_w-5_c-5.png": "47938ce26b9665260936a0fa49c65f88",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-2_w-3_c-2.png": "1b9dc6cb4ec8375aa97f99253001155d",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-4_w-2_c-1.png": "d1d077d8aa4652723b2445863b305f5b",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-2_w-4_c-2.png": "706ddf7f11a5f6f5957b9085cba1609e",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-5_w-1_c-4.png": "fa8fca240bda65689d88e757987d00d6",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-1_w-3_c-3.png": "93b9e27da5893d841d0229add8d09b86",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-5_w-1_c-1.png": "2a6aa639128c9fbd782ae4351b77a229",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-3_w-3_c-5.png": "2ebd0ce96cbd6b410ce98c2a960159d6",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-3_w-5_c-2.png": "254c9112643cc6a4778b5c4d5c579ec7",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-2_w-4_c-5.png": "519a017971cfd4d7a464400898c07843",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-4_w-2_c-2.png": "cc4bb82c042d6bd91cadd46364f6b464",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-2_w-3_c-3.png": "0e015ddcfe44d4647ee345b0aec9416e",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-5_w-2_c-3.png": "bcae7d9c7084e2697ce9b380b7ce5d28",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-1_w-2_c-5.png": "8d17e0da7da7072f3d16a08e14a280d8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-4_w-5_c-1.png": "407b756874727132c41bbea0e21812bf",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-4_w-2_c-3.png": "419860ee4e80e00fd890422d0d318bda",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-5_w-4_c-2.png": "7c13a49bbea690fe382c8471c197c774",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-3_w-3_c-4.png": "af170a1d7d9c19c755e489aa3b11e967",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-3_w-3_c-2.png": "e8d1b6f1672c45716460a7f123841b9e",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-5_w-1_c-5.png": "3ad79f7df77d83a172a217f2b0fded9b",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-3_w-2_c-5.png": "73568f4fd80cee123c1faa080a9bf4f9",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-3_w-1_c-3.png": "ea04ee91e26308bc70b37db9e6af5fd0",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-2_w-5_c-3.png": "75c6182342d503ec1c5d0b3c1088e19b",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-2_w-3_c-5.png": "ff609a05b0f54666cdd5f8a2c5e285fa",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-5_w-3_c-3.png": "c9510b3ae67346be25a4ec9d38cf0b4e",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-3_w-2_c-2.png": "01c4a2f78c4b36855cc37933d731bbe3",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-1_a-3_w-4_c-4.png": "f84c6cd282cf704de5b8e55bf51ec0df",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-3_w-1_c-4.png": "9af2cfeceb69c9e2ea4898b3726047e8",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-2_a-2_w-4_c-4.png": "f03ea1e6e25d9dc8be1e7e2458c02ba7",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-3_w-4_c-2.png": "eca6b5d316c4e99307531a68c00cf4e6",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-3_a-4_w-3_c-2.png": "18684de4ca39ac23016792e7a3e2191b",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-4_w-3_c-1.png": "7075c6e500fa426e4c057211b78a20e3",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-5_a-2_w-1_c-4.png": "340c6130527ce78aa5cc3a97a076d319",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-1_w-4_c-3.png": "05c2effa2e6a726f62125fa2f0474016",
"assets/packages/dashatar_flutter/assets/dashatars/Developer/s-4_a-2_w-5_c-1.png": "0400c205e0a572c415951aec38a4036b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-1_w-4_c-5.png": "7ea2c1263994408aa7e9d85d6fb42aea",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-3_w-2_c-4.png": "19f2a6193620c28d8548021967fdf057",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-4_w-1_c-2.png": "39dacb547ddd2db73d4fcb875be51f18",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-4_w-5_c-2.png": "f9c464d698a9cd1b9c9bc8b89ce5c01b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-3_w-2_c-3.png": "86d006994b0e59c1f20854479a70d36d",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-1_w-1_c-5.png": "ad1d13e3f9d4e97b8524a2426842c7b8",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-1_w-3_c-5.png": "e7c2d9208e4de8c51813acf42a1807e1",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-2_w-2_c-4.png": "84fb0a2e225b86f31509f4f5ec95fa10",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-1_w-5_c-3.png": "883f7581e4563556757a7ecd0ae2853b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-5_w-3_c-1.png": "5fae7a0450601b8641265d3564082931",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-2_w-5_c-4.png": "87f3917c8f988aa0d8481dee5345b729",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-5_w-2_c-4.png": "78ef29be616bd2d9214c437b48eb9319",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-4_w-3_c-3.png": "a967a54c73ad717f074a73bb4cda7fd3",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-1_w-3_c-4.png": "bcf9fb80fab71c840823fd9902ea1c5b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-4_w-4_c-2.png": "a95314233b09b3889ab78e84366fd66f",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-5_w-5_c-1.png": "ee01857cf17b2983ae96d677c185da6b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-3_w-4_c-3.png": "feaed74867d80476aea50d2c461b5314",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-2_w-2_c-5.png": "5193f5da07c3cb940f0d159160620ca4",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-5_w-3_c-2.png": "11c60a3d866939d2c6170611648a4eee",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-1_w-4_c-2.png": "a72272aee34a070ac3171808d986a13c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-1_w-5_c-1.png": "f6b81a486565ac4e170f0faf48cd013b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-3_w-4_c-1.png": "67b3637b0c1b0aac393f4cad9437d507",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-5_w-2_c-2.png": "5eb0d0c6f644a060fe4cdb377f0e9ef6",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-2_w-2_c-3.png": "634c718ef7d240ce013f2f8cf65c6cea",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-2_w-1_c-5.png": "6e02d14cf9399ac94bed3a03c16cd66d",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-2_w-3_c-4.png": "3b2abfb62e5668a08e719f43a0df7f5c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-2_w-4_c-1.png": "e1a1ca19db5214cae4fa54725d64fcce",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-5_w-1_c-2.png": "d4ea6676e3daa8da83812a83f6abe111",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-3_w-3_c-3.png": "71c5a87174c6d8e7fb7570c4aad6eede",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-5_w-2_c-1.png": "d388134fceafa38ebef474a3deedc8bb",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-5_w-4_c-1.png": "fae7fcd57df017c022d38a17be13fb83",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-4_w-4_c-3.png": "80ca3d064a6e723e10281d6144da85f9",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-1_w-2_c-4.png": "afa579e9ef92ce91361775fa22d53920",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-4_w-2_c-5.png": "c4eaa0c8111917ecb0e4731dbb7f57b6",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-4_w-4_c-1.png": "35789573f73e66df2f7f4066263f18db",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-3_w-1_c-5.png": "262aee35f527402d274caf777bf66fb5",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-4_w-1_c-3.png": "14faedfcf72c614c6659eac5b510a41a",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-3_w-3_c-1.png": "82877c162795c5d440ebb875b48df3e8",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-5_w-1_c-3.png": "6e6fa7d2e4e7ac3af9ec935fd06f2974",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-1_w-5_c-2.png": "013b9d73c2ae695586ef5702743d5af2",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-4_w-2_c-4.png": "91751a43f31882c7da1f0830c0819e17",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-3_w-5_c-3.png": "643d6879eb44d02976e54dc4655dde76",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-1_w-4_c-4.png": "f875bb25437f2e5bc4594dd4994b360c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-1_w-5_c-4.png": "987e8e1f71ce02cd7802c29acf1074ff",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-3_w-5_c-1.png": "42aac4d22ad032d925490399ec5b245a",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-2_w-5_c-2.png": "e3cb6df996820ac4c918cd1bc87edcb1",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-4_w-1_c-5.png": "40a6c138683ca906ebdcb9d747d7515f",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-4_w-1_c-4.png": "827bccaddfdbdc035e77d39d0a5879c0",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-2_w-4_c-3.png": "722e9763895213c2d0bab1fa0e86afee",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-4_w-3_c-4.png": "34496cc2284abb3c594773e1a42799fd",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-1_w-5_c-5.png": "47938ce26b9665260936a0fa49c65f88",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-2_w-3_c-2.png": "3446ad47192cdd33317107f4a18d8e8e",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-4_w-2_c-1.png": "74f8b426b622a72f190267fd1360d5f9",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-2_w-4_c-2.png": "e7e05af5e575379dcc2060697a6aaba2",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-5_w-1_c-4.png": "919bc1e77fb1f6f349894e807ab19f0d",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-1_w-3_c-3.png": "9b682c9357ac5478d52724ce79cb17d1",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-5_w-1_c-1.png": "2a6aa639128c9fbd782ae4351b77a229",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-3_w-3_c-5.png": "48f3451d03dc390b160ebaa7d69a72e3",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-3_w-5_c-2.png": "f9c464d698a9cd1b9c9bc8b89ce5c01b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-2_w-4_c-5.png": "5ef59c7c0c466b18c8a37ef9dda49046",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-4_w-2_c-2.png": "d00c1bade63ba04c4aa9b69858dbd388",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-2_w-3_c-3.png": "87bae8630216dc7a4db56ca807d20419",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-5_w-2_c-3.png": "3547e21206eb091ea593d05bedcb1517",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-1_w-2_c-5.png": "09c46f05786c6a638ac6a61d0da22b05",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-4_w-5_c-1.png": "1cb1a8c5f861bc075c8d3913e8ab362e",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-4_w-2_c-3.png": "02cbd68317044d0a1528de935208a31c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-5_w-4_c-2.png": "757a4cfc384c632d63fed7bd72860fde",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-3_w-3_c-4.png": "d26715aef3b220f52399a025949d7afd",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-3_w-3_c-2.png": "d7844bee026fdc393dca3e6c7c29392e",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-5_w-1_c-5.png": "3ad79f7df77d83a172a217f2b0fded9b",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-3_w-2_c-5.png": "4b89cc363ddf02e12d9108041298962d",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-3_w-1_c-3.png": "a92b6ff3767e9b955743b81dc9671f40",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-2_w-5_c-3.png": "e165658fa587d013d35d6e516f02eb0d",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-2_w-3_c-5.png": "4ab200a6e4f8553504d9df1038ef8819",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-5_w-3_c-3.png": "cc8b2dc30d4b8f4a76e217d9b62781bb",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-3_w-2_c-2.png": "c6d38f2b0d6a2a2776b5e01f50f5848c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-1_a-3_w-4_c-4.png": "bdde59edb381e58e3809287ea0fd4836",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-3_w-1_c-4.png": "87081ed5e8bafa268c939794b27a05f2",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-2_a-2_w-4_c-4.png": "65d788b4f45254af6639d2cc10bdbf39",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-3_w-4_c-2.png": "4ad6adb8e91249ee20392d2038e2c0f5",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-3_a-4_w-3_c-2.png": "8d159a5838e24f9dd6d6647b969a24fd",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-4_w-3_c-1.png": "456b8d7934effd127b4fb8ff235f845c",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-5_a-2_w-1_c-4.png": "db94152171b2a180fb7da3fff97843ea",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-1_w-4_c-3.png": "4a29b4768b7210b369687e0161501a85",
"assets/packages/dashatar_flutter/assets/dashatars/Designer/s-4_a-2_w-5_c-1.png": "a069fcd46bc8c407bcf399a53ff1d273",
"assets/packages/intuosol_design_system/assets/logos/light.png": "d594e4a89d8d9aa3b2899ff19c410a20",
"assets/packages/intuosol_design_system/assets/logos/square_dark.png": "2d8a8bf5f1e4ba17cf8517b5ffdfab6d",
"assets/packages/intuosol_design_system/assets/logos/app_icon.png": "28017557d3c8b1ed572c5032bc43b786",
"assets/packages/intuosol_design_system/assets/logos/dark.png": "f1fd6835da950b43cbdcfdfe365f129c",
"assets/packages/intuosol_design_system/assets/logos/square_light.png": "a4ec8f50391cd985f3906fc6593dabcc",
"assets/packages/intuosol_design_system/assets/logos/by_intuosol.png": "0ca067e2961cb8811df02d726b1e0964",
"assets/packages/intuosol_design_system/assets/logos/text.png": "40af0a144944696292050a388881673b",
"assets/AssetManifest.json": "14cc1261b1c672111b62d6a850282c94",
"version.json": "3ecad8ef7f49d1f28614c04279ef1e75",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "00d5c7bc67700563056a965da9ece67c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "9028befefcb009d82188594a159c1570",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "f138fc02efb1776ec789750b129cd60d"};
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
