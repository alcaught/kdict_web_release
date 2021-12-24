'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dc7d164c688b5b2755d0401f9e8f8ddf",
"index.html": "01a26757667cfe0ab864969dd70b46ac",
"/": "01a26757667cfe0ab864969dd70b46ac",
"main.dart.js": "d8e329269c4e772fd3d13397dcbdcebe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "97ada51c15add13a4d0da351427afd94",
"facepalm": "68b329da9893e34099c7d8ad5cb9c940",
".git/config": "7607deeab4f88bfa03e7a5e7ebf7874f",
".git/objects/0d/f9ec88228e98f31f5ac0d28038cae81c882882": "4c0575754f29473cdfc68762557a8693",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/835f341dc2a9a9391957959364f4c7812252e5": "706d2d08da20a08d3440e1c019164b70",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/da/bddb9de4130db3bfbbeea976a08a9a9828c419": "5bd46679a993d5c70eefd4cb700fa573",
".git/objects/d1/b8625fb9f88d3863b1f54f4681933d009f469e": "68a6ec087e16b7505bde7f6b348601c7",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/4a2f2593b0f1317bf2e6df96c6eb38615ed88e": "60e800126708f47882946906205ae511",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/18ad7ff6975f9f0707db1594a6adeb8f12d0ce": "4a35815d9c52e4db6bfa255da8064838",
".git/objects/7d/2c9e995e53c835193a79e95009633f455aa52d": "f049a63fe0784d06972d0d197968f5df",
".git/objects/7c/38653716f20905197d6cc383937e4da983603a": "81134b7ac8bcf79e2f5ec4cb1e47d940",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9a205caeba4a8cf77d44d19cbdfa70d15f1db2": "f6dccf9ef2bdd7f2e732f955a7b1cb6b",
".git/objects/9a/9fc3171101e6f21e03b12973c735e6d6e1cfba": "84d8f91a121b6d7d6957e550f9452dbf",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/39/3c71643a09454162cd4c310984c21411205b19": "57d2ca042a0518d1e15ce9357cfe4bf1",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/306c36c73e338fe546aea9e6b6406d9c6ed6bd": "978cbee0ac5443f4fdde54275947e096",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ff/6f1d3ff056556a13361c13646542dff228a546": "d26ac850f32c1d8706d7ef00746621da",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/83ff3d90e1f039aa4fc8cccc8ab4b7bd43ae25": "cf225f2c4ea023a3125fb885657aedfa",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "7a6e345e30002f6a041927605bd24f17",
".git/logs/refs/heads/main": "7a6e345e30002f6a041927605bd24f17",
".git/logs/refs/remotes/origin/main": "57a52ae5fefccd4883b7c6584125e480",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "a4aabd5b47363c29bac6f536d2e3c24a",
".git/refs/remotes/origin/main": "a4aabd5b47363c29bac6f536d2e3c24a",
".git/index": "ac4faeddb40f13658936a0882f1c1df3",
".git/COMMIT_EDITMSG": "beb655a087aceea1d72c9aaf705775f2",
".git/FETCH_HEAD": "285b973ec996428d971fdef5ec79039c",
"assets/AssetManifest.json": "98d0b258acbfcf972af3dc80ae740d39",
"assets/NOTICES": "da01593c8aeec50d38a1d24fcf7b43f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/flag/res/flag/hn.svg": "81ab9078acf460af828739861f250713",
"assets/packages/flag/res/flag/dm.svg": "815a2329fc6db449afed64d280c0ccea",
"assets/packages/flag/res/flag/fr.svg": "2f9befe94ef9076d58b0a2ae38e1a025",
"assets/packages/flag/res/flag/dz.svg": "daeb5108dcabc9e00e731ee40e546b40",
"assets/packages/flag/res/flag/ga.svg": "4544cd0bb3faf33f633ddb36b134b8f8",
"assets/packages/flag/res/flag/ph.svg": "21edfa6742a6843aacaff53b937e5c15",
"assets/packages/flag/res/flag/ss.svg": "de6a14955a3a56cdfb032bd70c0c8a0d",
"assets/packages/flag/res/flag/rw.svg": "559f166d947d2e7b4e0d4bb426d6632b",
"assets/packages/flag/res/flag/sd.svg": "a53d817395b239599901627a36a6a335",
"assets/packages/flag/res/flag/se.svg": "97ce2d679f8d8ede50153b91124cd264",
"assets/packages/flag/res/flag/sr.svg": "6905244b5370ff2cc10d5420affa03f6",
"assets/packages/flag/res/flag/eh.svg": "450b4000426c7799a5648da3e7a0cc96",
"assets/packages/flag/res/flag/gw.svg": "6c1ff733c39d9e4e76f0eb9a0f269c7c",
"assets/packages/flag/res/flag/jp.svg": "a1e1ea513a3fcd801e85db4373ce8cd6",
"assets/packages/flag/res/flag/gb.svg": "68b4d8305c4f90577e6357bb0c247d29",
"assets/packages/flag/res/flag/pk.svg": "52975d36167e1ad68ecd379b6854530e",
"assets/packages/flag/res/flag/sg.svg": "2d6223aec3513bb057ed8540b2dae40a",
"assets/packages/flag/res/flag/ru.svg": "7a8b3a7d8204983d246e6edbcbe21413",
"assets/packages/flag/res/flag/do.svg": "68cc45c8b6a1d9f2d900782c017aca56",
"assets/packages/flag/res/flag/gt.svg": "c79e10d99aee6f0f66c9d2907075a7bd",
"assets/packages/flag/res/flag/kw.svg": "0887d9941c4f694048087ec864fcc7ef",
"assets/packages/flag/res/flag/il.svg": "71dbb46044e8f441aad32fb9a91f8436",
"assets/packages/flag/res/flag/dk.svg": "07be12773c9bacc7883f41cf806ad7e5",
"assets/packages/flag/res/flag/sb.svg": "79392615aa0527d6d741de6742d0a811",
"assets/packages/flag/res/flag/py.svg": "8156f5f7586b7d92c0fb46aeda70ce68",
"assets/packages/flag/res/flag/st.svg": "f48819e95d956ddbcb37a7be63f56faa",
"assets/packages/flag/res/flag/sc.svg": "90c9327b714637cdf6c46586068d1f45",
"assets/packages/flag/res/flag/dj.svg": "3c879837e330f212b02669fd5cb1485f",
"assets/packages/flag/res/flag/gq.svg": "8be10c943b439a856aad59ab88fdab64",
"assets/packages/flag/res/flag/kr.svg": "b62df313096b2d0205e937926db159a5",
"assets/packages/flag/res/flag/ke.svg": "aa572e0e7ad47c23e37633f1b370da8d",
"assets/packages/flag/res/flag/kg.svg": "c08e9251ab996b005655d6b5c56f4115",
"assets/packages/flag/res/flag/hk.svg": "bcd1bda531d3d568826424f779dab941",
"assets/packages/flag/res/flag/kp.svg": "a9f988e5c3b8644f1555b6830600581c",
"assets/packages/flag/res/flag/gd.svg": "84b1ac78a6e909f7244d56c7a7b5f17d",
"assets/packages/flag/res/flag/sa.svg": "c9373219b085ed5791458bf23a7aa361",
"assets/packages/flag/res/flag/sv.svg": "1b29ca9e5a0b70bc2be8c55423c891c7",
"assets/packages/flag/res/flag/rs.svg": "74b32a84deba1c68326d0aad4173f7ec",
"assets/packages/flag/res/flag/pl.svg": "aa3ad8a9daa8ec9d6018955708fe5737",
"assets/packages/flag/res/flag/gr.svg": "b41b5f52dd7dbffc35801da4400b0cd5",
"assets/packages/flag/res/flag/ge.svg": "c9a85b6eea715acb3d71c35aa913b6ec",
"assets/packages/flag/res/flag/in.svg": "7a482fd38133dd2ac91dbb7a0cfc51c6",
"assets/packages/flag/res/flag/mv.svg": "dd23d9966716c14519286a72ca9308ca",
"assets/packages/flag/res/flag/lr.svg": "177182a8e32845d6535283ebae12b9ea",
"assets/packages/flag/res/flag/ma.svg": "7e55bd5403440cc1d3e17652420571e3",
"assets/packages/flag/res/flag/nz.svg": "7d1ea3d5c1fee2c14d81152169da672b",
"assets/packages/flag/res/flag/au.svg": "ac7ddacad338b6d1074f8b0d2e6fd2ac",
"assets/packages/flag/res/flag/bn.svg": "82577bde2a2f18a74bece06113782219",
"assets/packages/flag/res/flag/by.svg": "46f88d7e094f95ce28a74b570bb5e395",
"assets/packages/flag/res/flag/tt.svg": "30180834dc0602f19f8dd332b3e027f9",
"assets/packages/flag/res/flag/ug.svg": "a3dccd48c0aa42614749ff9dcca8be6c",
"assets/packages/flag/res/flag/ye.svg": "209af6bf0b2f47057aab72bd0392d6f4",
"assets/packages/flag/res/flag/bo.svg": "1bc18cd73405b56c1f6ee39d059b3961",
"assets/packages/flag/res/flag/at.svg": "0d38e4d825bb3176af4507d2bdf60eba",
"assets/packages/flag/res/flag/ls.svg": "f9ff2c953a4d9fb2b68876ae6c684152",
"assets/packages/flag/res/flag/mw.svg": "6ae05cd68db4fdec0c31f4eeaca3d7d7",
"assets/packages/flag/res/flag/nl.svg": "e53fc83f569b904b5b883c87a37b5607",
"assets/packages/flag/res/flag/mu.svg": "139f91a3aebd9bb7f8d15aa0a996a5ff",
"assets/packages/flag/res/flag/ci.svg": "9996d349c36e0856832977d6b70ae09c",
"assets/packages/flag/res/flag/bz.svg": "6f7fb09570637e205ebd010e6b0a70c4",
"assets/packages/flag/res/flag/tw.svg": "45ef6b6922fc468e4d1bd12153b0e050",
"assets/packages/flag/res/flag/us.svg": "ad5dff63fcfd4539295434c0013c3afa",
"assets/packages/flag/res/flag/tv.svg": "7dbc961e1a282d5760cc7d3cd321b30f",
"assets/packages/flag/res/flag/ch.svg": "69547e25f5fe58a8b78777dc82725e04",
"assets/packages/flag/res/flag/mc.svg": "3d1d95bfa7445052d8173a5722f8de6e",
"assets/packages/flag/res/flag/mt.svg": "dcb55d4236b9977a909882974a12e924",
"assets/packages/flag/res/flag/no.svg": "4b57a28e497b81a0fb3063015dfbe800",
"assets/packages/flag/res/flag/lc.svg": "e094620d44bd68ca32fd104d474028fb",
"assets/packages/flag/res/flag/mg.svg": "65482ca562875ff1337f0cccbdaa46ce",
"assets/packages/flag/res/flag/lt.svg": "f81172011b0b0fd8f95db12e196458f6",
"assets/packages/flag/res/flag/ad.svg": "6a14dcd1af407b41e8921b9bc6c90e32",
"assets/packages/flag/res/flag/cl.svg": "11f7f79f090e3ee5fd8763722af3a99c",
"assets/packages/flag/res/flag/bh.svg": "30728ffe1993377df3a9fc5f6fc42713",
"assets/packages/flag/res/flag/ua.svg": "1aeecd60c245f84d7db8bd634f0e870b",
"assets/packages/flag/res/flag/tr.svg": "2254e9c06c40bfac15d3fb9ddf2421e5",
"assets/packages/flag/res/flag/td.svg": "8812ba91dbffba55946efdba3b2569d7",
"assets/packages/flag/res/flag/bi.svg": "1a2bcfb909091ebc0c6d3fea31eef993",
"assets/packages/flag/res/flag/ar.svg": "2236d9b396c4475234b1f050758631b9",
"assets/packages/flag/res/flag/cm.svg": "e48da92d4f4f63eb91152ca126cedc8b",
"assets/packages/flag/res/flag/ae.svg": "8ae6708cbab0fe2eeddb8152d87e302c",
"assets/packages/flag/res/flag/cz.svg": "9c5898c620005bd48fed5f3ea9210894",
"assets/packages/flag/res/flag/lu.svg": "4e06269e2a86d334d7185881d21a298f",
"assets/packages/flag/res/flag/lb.svg": "db1d8d6564dba6e1babeb04983a2b4d5",
"assets/packages/flag/res/flag/md.svg": "7e4c0d86dcf33627148f9cd67bee6b51",
"assets/packages/flag/res/flag/ag.svg": "0538fa90e8ba12bad017f05975aa0841",
"assets/packages/flag/res/flag/co.svg": "230d6931448dc893671ff6a59e6fb753",
"assets/packages/flag/res/flag/vn.svg": "cc2e55f0f5f8b70997ac88191a8561e6",
"assets/packages/flag/res/flag/zm.svg": "4bd901a04f4821e61fc158e3c28d09a6",
"assets/packages/flag/res/flag/tg.svg": "5e565ac50245c96dfd9f9753e11a64e5",
"assets/packages/flag/res/flag/cn.svg": "9caece66507768334f68bc3ec25e5ceb",
"assets/packages/flag/res/flag/bj.svg": "203c8d481e7303757026d65cf6a1e43f",
"assets/packages/flag/res/flag/cy.svg": "135c77a66ab99f0e5b41be14b4f8d4c1",
"assets/packages/flag/res/flag/af.svg": "056c4dbcaf56932bee246bb751309c9f",
"assets/packages/flag/res/flag/lv.svg": "9fa6c690c05867c2240c179909de5f85",
"assets/packages/flag/res/flag/om.svg": "c7dcd8ebb9ad2dbdf06fe5bd0d9b0f41",
"assets/packages/flag/res/flag/mr.svg": "e12cbc42ed04c6a1ae1bbe8cfa185029",
"assets/packages/flag/res/flag/ni.svg": "90df73abfa958b37c5f1a041938826c3",
"assets/packages/flag/res/flag/la.svg": "b76f93a9d626679c2aed426bc3fcd758",
"assets/packages/flag/res/flag/me.svg": "d8e4f69a717279564d11c383372db23c",
"assets/packages/flag/res/flag/mh.svg": "15e740f7d94caa54c706b3da4a14545e",
"assets/packages/flag/res/flag/bg.svg": "e3e193057e741aaeb9486d0af77f8f8b",
"assets/packages/flag/res/flag/tj.svg": "c8b3c4946503ec9a6e6d9a251ced60d4",
"assets/packages/flag/res/flag/vu.svg": "f0b65910f246ae5cbecedc933029f482",
"assets/packages/flag/res/flag/uy.svg": "f639e12989ff9aa7bbfb4ed47fa8ae8a",
"assets/packages/flag/res/flag/za.svg": "8f50c35985eab084114711cad6776eb6",
"assets/packages/flag/res/flag/zw.svg": "227d02aa1aa0f29e691ad7566b7c9521",
"assets/packages/flag/res/flag/vc.svg": "2cc0562abbb0a32483c12d29fa0ad79f",
"assets/packages/flag/res/flag/bf.svg": "8c9b84ac3c7851f2e34ab4935f33397e",
"assets/packages/flag/res/flag/cu.svg": "3e5f9c8b3f8b7173d008e5cfd1682418",
"assets/packages/flag/res/flag/ne.svg": "0c4322271e2aecc54aec87a8935228f0",
"assets/packages/flag/res/flag/nr.svg": "2526a443e0f48c0a8ee7c3314bf15f85",
"assets/packages/flag/res/flag/mk.svg": "93c15186533262b4a99e531c484d4459",
"assets/packages/flag/res/flag/np.svg": "0e7b6b2545dc384690c597aa1db4d1c8",
"assets/packages/flag/res/flag/ng.svg": "6fea46bec5cbabaf3502436889e93ca0",
"assets/packages/flag/res/flag/bs.svg": "5d04b31e6259544bb975cdc259c32551",
"assets/packages/flag/res/flag/bd.svg": "73c177e4545c26b844551aa8038970b0",
"assets/packages/flag/res/flag/va.svg": "e9c2506a920cce4e36ee5aeb5573a7f9",
"assets/packages/flag/res/flag/uz.svg": "f0eb4284776fa1378666495d136303b3",
"assets/packages/flag/res/flag/a.txt": "b5a3499a576030c8f27bb27b77efe113",
"assets/packages/flag/res/flag/xk.svg": "af02b9e4d3da01c09359aa23c7ceef74",
"assets/packages/flag/res/flag/ws.svg": "69b52e9a76c73fc5ea231fb5a1499b1e",
"assets/packages/flag/res/flag/th.svg": "e7f18a5477d4f250f136c54ce56f7081",
"assets/packages/flag/res/flag/ca.svg": "6cafa17d9715922ebb496b6384cc1541",
"assets/packages/flag/res/flag/be.svg": "df57b33ad7b80d3b04a92c263130d26e",
"assets/packages/flag/res/flag/cv.svg": "66a51943bb7c8560ccaa06b955ea3ce6",
"assets/packages/flag/res/flag/br.svg": "248da95ef49cb528b8ef16e4b2dc36d9",
"assets/packages/flag/res/flag/ly.svg": "592a5116d907a28ce6a435bf71899c20",
"assets/packages/flag/res/flag/my.svg": "417cba3cc8c4121cf0d2250fd5c9697b",
"assets/packages/flag/res/flag/mn.svg": "39bcb3ef04696298430ca84b7ff2d6fa",
"assets/packages/flag/res/flag/az.svg": "d1c6ff3d2c6137ed6dc59deff9ca1795",
"assets/packages/flag/res/flag/ba.svg": "38a248a0da355ec7d6591e67489ed08b",
"assets/packages/flag/res/flag/am.svg": "69727bec1f2a92340d3a6822131ffc23",
"assets/packages/flag/res/flag/cr.svg": "b6d92c95d7229492a298cf3631f8f368",
"assets/packages/flag/res/flag/tl.svg": "f34c9a0193bb410985e04f4ba8e8d415",
"assets/packages/flag/res/flag/tm.svg": "c7bf7db7254400133131a7b4b2552828",
"assets/packages/flag/res/flag/tz.svg": "5ec3b115b6f327284a2414d7ec3f5a9b",
"assets/packages/flag/res/flag/ve.svg": "d6be56f106bf5454a6555518aaf3c1e0",
"assets/packages/flag/res/flag/al.svg": "9ca1e7c55a76c6f0c5b34c29ed911c8f",
"assets/packages/flag/res/flag/bw.svg": "f9750ef2e25bda43bdd29b454b9e32ca",
"assets/packages/flag/res/flag/cd.svg": "ed47822b634dfe5707d57321a76f13ab",
"assets/packages/flag/res/flag/lk.svg": "faa1949523b46e9f67c4cbac775a0cbc",
"assets/packages/flag/res/flag/mo.svg": "79d90d7e3778c5c2c7d4d5f887d53bb1",
"assets/packages/flag/res/flag/mx.svg": "b4d928c17dfc94c56858c3da56e94188",
"assets/packages/flag/res/flag/na.svg": "a830d0864b6aa393b629c1baa5246d2a",
"assets/packages/flag/res/flag/mz.svg": "bc33186e77bd479f472c214c1e5de5d5",
"assets/packages/flag/res/flag/li.svg": "071b1d57a0ece6b2b738a3de7dfd0ccd",
"assets/packages/flag/res/flag/mm.svg": "2d22272029a2d705b4cd5c0a4895ef16",
"assets/packages/flag/res/flag/cf.svg": "66eaa7d7fa8434f3966af11188be0028",
"assets/packages/flag/res/flag/bb.svg": "68cbe43424c89d45c4d06fda5195fdcd",
"assets/packages/flag/res/flag/to.svg": "f4d05f56b92d182344f767567eb17211",
"assets/packages/flag/res/flag/tn.svg": "179c4fc6765bf7369d8136ae3986e517",
"assets/packages/flag/res/flag/ao.svg": "ea0a59870bfb372f25c6f56271eb6808",
"assets/packages/flag/res/flag/bt.svg": "ce4684f240e15637d2c67eb222d63fe5",
"assets/packages/flag/res/flag/cg.svg": "5911439801b0aa84bcb9f67d90c4ed89",
"assets/packages/flag/res/flag/ml.svg": "12f23b6b05cc66725e2374f8dc78f5c0",
"assets/packages/flag/res/flag/jo.svg": "34d7eca815fff085db34d0e97ef84ac3",
"assets/packages/flag/res/flag/it.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/packages/flag/res/flag/gh.svg": "7d6d7a831497ce467b888fbba4cf7d21",
"assets/packages/flag/res/flag/sm.svg": "16dab5ad5a24fc6af779439d1ef21724",
"assets/packages/flag/res/flag/pa.svg": "1a65c4313238fbc4b8cfbce75172a24f",
"assets/packages/flag/res/flag/sz.svg": "609860b29fbc32697847b72b40c3feba",
"assets/packages/flag/res/flag/pw.svg": "2104cf16e5d8b2927269348f649b641f",
"assets/packages/flag/res/flag/sl.svg": "7755f12e8da38a69f6347c901557b429",
"assets/packages/flag/res/flag/de.svg": "85f98c37ca46ee50b5c8ba121baacf2d",
"assets/packages/flag/res/flag/fm.svg": "cfc3756759f4002983b49217456fc8e4",
"assets/packages/flag/res/flag/kh.svg": "6e722bc2d4535eb7655d4f8f95ad90be",
"assets/packages/flag/res/flag/et.svg": "120ea455502dbaa6dffe199a6b589e8b",
"assets/packages/flag/res/flag/ec.svg": "94317befb597bfc7cbe5a664dbe34afd",
"assets/packages/flag/res/flag/sn.svg": "4db98c0bbb98adc9ae3d8fd689a97600",
"assets/packages/flag/res/flag/sy.svg": "d8e896be0dd656174ccb831f6b42a997",
"assets/packages/flag/res/flag/pt.svg": "8399d871b0102e3df032cc9f69ca06aa",
"assets/packages/flag/res/flag/so.svg": "6e5f13371514efbf71ddfdcc5eaa2c14",
"assets/packages/flag/res/flag/eu.svg": "9491b689ec6a5a12ca42ec1096568b80",
"assets/packages/flag/res/flag/jm.svg": "684650029f9dad09d779663fcb809282",
"assets/packages/flag/res/flag/hr.svg": "3e56776d23fdd54b4ed116481dd19d2b",
"assets/packages/flag/res/flag/ki.svg": "64cf951cfc4bcec910b2d5911dcf78b4",
"assets/packages/flag/res/flag/kz.svg": "0fe9097bba1cc582f03d6b845bea512a",
"assets/packages/flag/res/flag/ie.svg": "4a6b333e1b344bd04ee59f19fbd4abaa",
"assets/packages/flag/res/flag/km.svg": "6d07496344175e577266949b2833b0c3",
"assets/packages/flag/res/flag/ir.svg": "6d32f5794b10d03a50057b8fd5ecea46",
"assets/packages/flag/res/flag/gy.svg": "3d50da7f6eff25385a33bd1c0cab7fbe",
"assets/packages/flag/res/flag/gn.svg": "a783ea888c06b7d64cf5bcd08ef20ad8",
"assets/packages/flag/res/flag/fj.svg": "4541ca5ba2cd691b30245e7d5a2d9d7b",
"assets/packages/flag/res/flag/pg.svg": "d2ad188348d575dd628d65efef4b94ee",
"assets/packages/flag/res/flag/sk.svg": "a63549e8450fff840984650a9b0c5a64",
"assets/packages/flag/res/flag/ro.svg": "15da9998583a8bece6fd90bf201b310e",
"assets/packages/flag/res/flag/eg.svg": "98f7dcbe7af8749848ba688e9fc1af2c",
"assets/packages/flag/res/flag/is.svg": "1310d11c16a0a3ad8bbec39084d98d6a",
"assets/packages/flag/res/flag/id.svg": "e9b657b839dba5a312c5ea243cf43c3d",
"assets/packages/flag/res/flag/iq.svg": "f7890d3258ca62b7efcedf3f4aae3751",
"assets/packages/flag/res/flag/kn.svg": "1ab2d7d4d373306c4d9ffdca79c80128",
"assets/packages/flag/res/flag/hu.svg": "2e0e3e500ac9a0f691900d3e27c6e8b2",
"assets/packages/flag/res/flag/ee.svg": "8665c242c58dc75c99b4e1e46e607b39",
"assets/packages/flag/res/flag/er.svg": "67f5cd294f998bb172bd8c6e702c411c",
"assets/packages/flag/res/flag/fi.svg": "a814e980a8184e1efa297d90d6284c4c",
"assets/packages/flag/res/flag/gm.svg": "51399c19982b57b330c58dbae394d5c7",
"assets/packages/flag/res/flag/ps.svg": "77872242acfe696929d9a56b55748709",
"assets/packages/flag/res/flag/si.svg": "d718e9d1b5dedd27e4114371fd00dd80",
"assets/packages/flag/res/flag/pe.svg": "23f4fbf5e318c51dcdd76271c0c6604a",
"assets/packages/flag/res/flag/qa.svg": "1dcd82370d3912273a15c26d264400fd",
"assets/packages/flag/res/flag/es.svg": "e511dceedff1a2f71233ed3907c73199",
"assets/packages/flag/res/flag/ht.svg": "93c514d3d908f86d524e68b65ea333ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
