// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vee, PUs, lg, Jgt, a6 } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

var I = new Map([ [ "a", "aA\uff21\uff41\u{1d400}\u{1d41a}\u{1d434}\u{1d44e}\u{1d468}\u{1d482}\u{1d49c}\u{1d4b6}\u{1d4d0}\u{1d4ea}\u{1d504}\u{1d51e}\u{1d538}\u{1d552}\u{1d56c}\u{1d586}\u{1d5a0}\u{1d5ba}\u{1d5d4}\u{1d5ee}\u{1d608}\u{1d622}\u{1d63c}\u{1d656}\u{1d670}\u{1d68a}\u24b6\u24d0\u0430\u03b1\u1d00\u0251\uab7a\ua4ee\u2c81\u0410\u0391\u2c6d\u13aa\u2c80\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\u0100\u0101\u0102\u0103\u0104\u0105\u01cd\u01ce\u01de\u01df\u01e0\u01e1\u01fa\u01fb\u0200\u0201\u0202\u0203\u0226\u0227\u1e00\u1e01\u1ea0\u1ea1\u1ea2\u1ea3\u1ea4\u1ea5\u1ea6\u1ea7\u1ea8\u1ea9\u1eaa\u1eab\u1eac\u1ead\u1eae\u1eaf\u1eb0\u1eb1\u1eb2\u1eb3\u1eb4\u1eb5\u1eb6\u1eb7\u212b\u{1d400}\u{1d41a}\u{1d434}\u{1d44e}\u{1d468}\u{1d482}\u{1d49c}\u{1d4b6}\u{1d4d0}\u{1d4ea}\u{1d504}\u{1d51e}\u{1d538}\u{1d552}\u{1d56c}\u{1d586}\u{1d5a0}\u{1d5ba}\u{1d5d4}\u{1d5ee}\u{1d608}\u{1d622}\u{1d63c}\u{1d656}\u{1d670}\u{1d68a}\u{1d6a8}\u{1d6c2}\u{1d6e2}\u{1d6fc}\u{1d71c}\u{1d736}\u{1d756}\u{1d770}\u{1d790}\u{1d7aa}\u1d2c\u1d43\u1d45\u2090" ], [ "b", "bB\uff22\uff42\u{1d401}\u{1d41b}\u{1d435}\u{1d44f}\u{1d469}\u{1d483}\u{1d49d}\u{1d4b7}\u{1d4d1}\u{1d4eb}\u{1d505}\u{1d51f}\u{1d539}\u{1d553}\u{1d56d}\u{1d587}\u{1d5a1}\u{1d5bb}\u{1d5d5}\u{1d5ef}\u{1d609}\u{1d623}\u{1d63d}\u{1d657}\u{1d671}\u{1d68b}\u24b7\u24d1\u212c\u0412\u0392\u0299\uab9f\u13fc\ua4d0\u2c83\u13cf\u13f4\u2c82\u1e02\u1e03\u1e04\u1e05\u1e06\u1e07\u{1d401}\u{1d41b}\u{1d435}\u{1d44f}\u{1d469}\u{1d483}\u{1d4b7}\u{1d4d1}\u{1d4eb}\u{1d505}\u{1d51f}\u{1d539}\u{1d553}\u{1d56d}\u{1d587}\u{1d5a1}\u{1d5bb}\u{1d5d5}\u{1d5ef}\u{1d609}\u{1d623}\u{1d63d}\u{1d657}\u{1d671}\u{1d68b}\u{1d6a9}\u{1d6e3}\u{1d71d}\u{1d757}\u{1d791}\u1d2e\u1d47" ], [ "c", "cC\uff23\uff43\u{1d402}\u{1d41c}\u{1d436}\u{1d450}\u{1d46a}\u{1d484}\u{1d49e}\u{1d4b8}\u{1d4d2}\u{1d4ec}\u{1d506}\u{1d520}\u{1d53a}\u{1d554}\u{1d56e}\u{1d588}\u{1d5a2}\u{1d5bc}\u{1d5d6}\u{1d5f0}\u{1d60a}\u{1d624}\u{1d63e}\u{1d658}\u{1d672}\u{1d68c}\u24b8\u24d2\u2102\u212d\u0441\u1d04\uabaf\ua4da\u03f2\u2ca5\u0421\u13df\u03f9\u2ca4\xc7\xe7\u0106\u0107\u0108\u0109\u010a\u010b\u010c\u010d\u1e08\u1e09\u{1d402}\u{1d41c}\u{1d436}\u{1d450}\u{1d46a}\u{1d484}\u{1d49e}\u{1d4b8}\u{1d4d2}\u{1d4ec}\u{1d520}\u{1d554}\u{1d56e}\u{1d588}\u{1d5a2}\u{1d5bc}\u{1d5d6}\u{1d5f0}\u{1d60a}\u{1d624}\u{1d63e}\u{1d658}\u{1d672}\u{1d68c}\u1d9c\u216d\u217d\ua7f2" ], [ "d", "dD\uff24\uff44\u{1d403}\u{1d41d}\u{1d437}\u{1d451}\u{1d46b}\u{1d485}\u{1d49f}\u{1d4b9}\u{1d4d3}\u{1d4ed}\u{1d507}\u{1d521}\u{1d53b}\u{1d555}\u{1d56f}\u{1d589}\u{1d5a3}\u{1d5bd}\u{1d5d7}\u{1d5f1}\u{1d60b}\u{1d625}\u{1d63f}\u{1d659}\u{1d673}\u{1d68d}\u24b9\u24d3\u2145\u2146\u0501\u1d05\uab70\uabb7\ua4d3\u0500\u13a0\u13e7\u010e\u010f\u1e0a\u1e0b\u1e0c\u1e0d\u1e0e\u1e0f\u1e10\u1e11\u1e12\u1e13\u{1d403}\u{1d41d}\u{1d437}\u{1d451}\u{1d46b}\u{1d485}\u{1d49f}\u{1d4b9}\u{1d4d3}\u{1d4ed}\u{1d507}\u{1d521}\u{1d53b}\u{1d555}\u{1d56f}\u{1d589}\u{1d5a3}\u{1d5bd}\u{1d5d7}\u{1d5f1}\u{1d60b}\u{1d625}\u{1d63f}\u{1d659}\u{1d673}\u{1d68d}\u1d30\u1d48\u216e\u217e" ], [ "e", "eE\uff25\uff45\u{1d404}\u{1d41e}\u{1d438}\u{1d452}\u{1d46c}\u{1d486}\u{1d4a0}\u{1d4ba}\u{1d4d4}\u{1d4ee}\u{1d508}\u{1d522}\u{1d53c}\u{1d556}\u{1d570}\u{1d58a}\u{1d5a4}\u{1d5be}\u{1d5d8}\u{1d5f2}\u{1d60c}\u{1d626}\u{1d640}\u{1d65a}\u{1d674}\u{1d68e}\u24ba\u24d4\u212f\u2130\u2147\u0435\u03b5\u1d07\uab7c\ua4f0\u2c89\u0415\u0395\u13ac\u2c88\xc8\xc9\xca\xcb\xe8\xe9\xea\xeb\u0112\u0113\u0114\u0115\u0116\u0117\u0118\u0119\u011a\u011b\u0204\u0205\u0206\u0207\u0228\u0229\u1e14\u1e15\u1e16\u1e17\u1e18\u1e19\u1e1a\u1e1b\u1e1c\u1e1d\u1eb8\u1eb9\u1eba\u1ebb\u1ebc\u1ebd\u1ebe\u1ebf\u1ec0\u1ec1\u1ec2\u1ec3\u1ec4\u1ec5\u1ec6\u1ec7\u{1d404}\u{1d41e}\u{1d438}\u{1d452}\u{1d46c}\u{1d486}\u{1d4d4}\u{1d4ee}\u{1d508}\u{1d522}\u{1d53c}\u{1d556}\u{1d570}\u{1d58a}\u{1d5a4}\u{1d5be}\u{1d5d8}\u{1d5f2}\u{1d60c}\u{1d626}\u{1d640}\u{1d65a}\u{1d674}\u{1d68e}\u{1d6ac}\u{1d6c6}\u{1d6dc}\u{1d6e6}\u{1d700}\u{1d716}\u{1d720}\u{1d73a}\u{1d750}\u{1d75a}\u{1d774}\u{1d78a}\u{1d794}\u{1d7ae}\u{1d7c4}\u1d31\u1d49\u2091" ], [ "f", "fF\uff26\uff46\u{1d405}\u{1d41f}\u{1d439}\u{1d453}\u{1d46d}\u{1d487}\u{1d4a1}\u{1d4bb}\u{1d4d5}\u{1d4ef}\u{1d509}\u{1d523}\u{1d53d}\u{1d557}\u{1d571}\u{1d58b}\u{1d5a5}\u{1d5bf}\u{1d5d9}\u{1d5f3}\u{1d60d}\u{1d627}\u{1d641}\u{1d65b}\u{1d675}\u{1d68f}\u24bb\u24d5\u2131\ua730\ua4dd\u1e1e\u1e1f\u{1d405}\u{1d41f}\u{1d439}\u{1d453}\u{1d46d}\u{1d487}\u{1d4bb}\u{1d4d5}\u{1d4ef}\u{1d509}\u{1d523}\u{1d53d}\u{1d557}\u{1d571}\u{1d58b}\u{1d5a5}\u{1d5bf}\u{1d5d9}\u{1d5f3}\u{1d60d}\u{1d627}\u{1d641}\u{1d65b}\u{1d675}\u{1d68f}\u1da0\ua7f3" ], [ "g", "gG\uff27\uff47\u{1d406}\u{1d420}\u{1d43a}\u{1d454}\u{1d46e}\u{1d488}\u{1d4a2}\u{1d4bc}\u{1d4d6}\u{1d4f0}\u{1d50a}\u{1d524}\u{1d53e}\u{1d558}\u{1d572}\u{1d58c}\u{1d5a6}\u{1d5c0}\u{1d5da}\u{1d5f4}\u{1d60e}\u{1d628}\u{1d642}\u{1d65c}\u{1d676}\u{1d690}\u24bc\u24d6\u210a\u0262\u0261\uab90\ua4d6\u0581\ua7ac\u13c0\u0551\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u01e6\u01e7\u01f4\u01f5\u1e20\u1e21\u{1d406}\u{1d420}\u{1d43a}\u{1d454}\u{1d46e}\u{1d488}\u{1d4a2}\u{1d4d6}\u{1d4f0}\u{1d50a}\u{1d524}\u{1d53e}\u{1d558}\u{1d572}\u{1d58c}\u{1d5a6}\u{1d5c0}\u{1d5da}\u{1d5f4}\u{1d60e}\u{1d628}\u{1d642}\u{1d65c}\u{1d676}\u{1d690}\u1d33\u1d4d\u1da2" ], [ "h", "hH\uff28\uff48\u{1d407}\u{1d421}\u{1d43b}\u{1d455}\u{1d46f}\u{1d489}\u{1d4a3}\u{1d4bd}\u{1d4d7}\u{1d4f1}\u{1d50b}\u{1d525}\u{1d53f}\u{1d559}\u{1d573}\u{1d58d}\u{1d5a7}\u{1d5c1}\u{1d5db}\u{1d5f5}\u{1d60f}\u{1d629}\u{1d643}\u{1d65d}\u{1d677}\u{1d691}\u24bd\u24d7\u210b\u210c\u210d\u210e\u04bb\u041d\u0397\u029c\uab8b\uab92\ua4e7\u0570\u2c8f\u04ba\u13bb\u13c2\u0540\u2c8e\u0124\u0125\u021e\u021f\u1e22\u1e23\u1e24\u1e25\u1e26\u1e27\u1e28\u1e29\u1e2a\u1e2b\u1e96\u{1d407}\u{1d421}\u{1d43b}\u{1d46f}\u{1d489}\u{1d4bd}\u{1d4d7}\u{1d4f1}\u{1d525}\u{1d559}\u{1d573}\u{1d58d}\u{1d5a7}\u{1d5c1}\u{1d5db}\u{1d5f5}\u{1d60f}\u{1d629}\u{1d643}\u{1d65d}\u{1d677}\u{1d691}\u{1d6ae}\u{1d6e8}\u{1d722}\u{1d75c}\u{1d796}\u02b0\u1d34\u2095" ], [ "i", "iI\uff29\uff49\u{1d408}\u{1d422}\u{1d43c}\u{1d456}\u{1d470}\u{1d48a}\u{1d4a4}\u{1d4be}\u{1d4d8}\u{1d4f2}\u{1d50c}\u{1d526}\u{1d540}\u{1d55a}\u{1d574}\u{1d58e}\u{1d5a8}\u{1d5c2}\u{1d5dc}\u{1d5f6}\u{1d610}\u{1d62a}\u{1d644}\u{1d65e}\u{1d678}\u{1d692}\u24be\u24d8\u2110\u2111\u2139\u2148\u0456\u03b9\u026a\u0131\ua4f2\u0269\u2c93\u0406\u0399\ua7ae\u0196\u2c92\xcc\xcd\xce\xcf\xec\xed\xee\xef\u0128\u0129\u012a\u012b\u012c\u012d\u012e\u012f\u0130\u01cf\u01d0\u0208\u0209\u020a\u020b\u1e2c\u1e2d\u1e2e\u1e2f\u1ec8\u1ec9\u1eca\u1ecb\u{1d408}\u{1d422}\u{1d43c}\u{1d456}\u{1d470}\u{1d48a}\u{1d4be}\u{1d4d8}\u{1d4f2}\u{1d526}\u{1d540}\u{1d55a}\u{1d574}\u{1d58e}\u{1d5a8}\u{1d5c2}\u{1d5dc}\u{1d5f6}\u{1d610}\u{1d62a}\u{1d644}\u{1d65e}\u{1d678}\u{1d692}\u{1d6a4}\u{1d6b0}\u{1d6ca}\u{1d6ea}\u{1d704}\u{1d724}\u{1d73e}\u{1d75e}\u{1d778}\u{1d798}\u{1d7b2}\u1d35\u1d62\u1da5\u1da6\u2071\u2160\u2170" ], [ "j", "jJ\uff2a\uff4a\u{1d409}\u{1d423}\u{1d43d}\u{1d457}\u{1d471}\u{1d48b}\u{1d4a5}\u{1d4bf}\u{1d4d9}\u{1d4f3}\u{1d50d}\u{1d527}\u{1d541}\u{1d55b}\u{1d575}\u{1d58f}\u{1d5a9}\u{1d5c3}\u{1d5dd}\u{1d5f7}\u{1d611}\u{1d62b}\u{1d645}\u{1d65f}\u{1d679}\u{1d693}\u24bf\u24d9\u2149\u0458\u03f3\u1d0a\uab7b\ua4d9\u0408\u037f\u13ab\u0134\u0135\u01f0\u{1d409}\u{1d423}\u{1d43d}\u{1d457}\u{1d471}\u{1d48b}\u{1d4a5}\u{1d4bf}\u{1d4d9}\u{1d4f3}\u{1d50d}\u{1d527}\u{1d541}\u{1d55b}\u{1d575}\u{1d58f}\u{1d5a9}\u{1d5c3}\u{1d5dd}\u{1d5f7}\u{1d611}\u{1d62b}\u{1d645}\u{1d65f}\u{1d679}\u{1d693}\u02b2\u1d36" ], [ "k", "kK\uff2b\uff4b\u{1d40a}\u{1d424}\u{1d43e}\u{1d458}\u{1d472}\u{1d48c}\u{1d4a6}\u{1d4c0}\u{1d4da}\u{1d4f4}\u{1d50e}\u{1d528}\u{1d542}\u{1d55c}\u{1d576}\u{1d590}\u{1d5aa}\u{1d5c4}\u{1d5de}\u{1d5f8}\u{1d612}\u{1d62c}\u{1d646}\u{1d660}\u{1d67a}\u{1d694}\u24c0\u24da\u212a\u043a\u03ba\u1d0b\uabb6\ua4d7\u2c95\u041a\u039a\u13e6\u2c94\u0136\u0137\u01e8\u01e9\u1e30\u1e31\u1e32\u1e33\u1e34\u1e35\u{1d40a}\u{1d424}\u{1d43e}\u{1d458}\u{1d472}\u{1d48c}\u{1d4a6}\u{1d4c0}\u{1d4da}\u{1d4f4}\u{1d50e}\u{1d528}\u{1d542}\u{1d55c}\u{1d576}\u{1d590}\u{1d5aa}\u{1d5c4}\u{1d5de}\u{1d5f8}\u{1d612}\u{1d62c}\u{1d646}\u{1d660}\u{1d67a}\u{1d694}\u{1d6b1}\u{1d6cb}\u{1d6de}\u{1d6eb}\u{1d705}\u{1d718}\u{1d725}\u{1d73f}\u{1d752}\u{1d75f}\u{1d779}\u{1d78c}\u{1d799}\u{1d7b3}\u{1d7c6}\u1d37\u1d4f\u2096" ], [ "l", "lL\uff2c\uff4c\u{1d40b}\u{1d425}\u{1d43f}\u{1d459}\u{1d473}\u{1d48d}\u{1d4a7}\u{1d4c1}\u{1d4db}\u{1d4f5}\u{1d50f}\u{1d529}\u{1d543}\u{1d55d}\u{1d577}\u{1d591}\u{1d5ab}\u{1d5c5}\u{1d5df}\u{1d5f9}\u{1d613}\u{1d62d}\u{1d647}\u{1d661}\u{1d67b}\u{1d695}\u24c1\u24db\u2112\u2113\u04cf\u029f\uabae\ua4e1\u04c0\u13de\u0139\u013a\u013b\u013c\u013d\u013e\u1e36\u1e37\u1e38\u1e39\u1e3a\u1e3b\u1e3c\u1e3d\u{1d40b}\u{1d425}\u{1d43f}\u{1d459}\u{1d473}\u{1d48d}\u{1d4c1}\u{1d4db}\u{1d4f5}\u{1d50f}\u{1d529}\u{1d543}\u{1d55d}\u{1d577}\u{1d591}\u{1d5ab}\u{1d5c5}\u{1d5df}\u{1d5f9}\u{1d613}\u{1d62d}\u{1d647}\u{1d661}\u{1d67b}\u{1d695}\u02e1\u1d38\u1dab\u2097\u216c\u217c" ], [ "m", "mM\uff2d\uff4d\u{1d40c}\u{1d426}\u{1d440}\u{1d45a}\u{1d474}\u{1d48e}\u{1d4a8}\u{1d4c2}\u{1d4dc}\u{1d4f6}\u{1d510}\u{1d52a}\u{1d544}\u{1d55e}\u{1d578}\u{1d592}\u{1d5ac}\u{1d5c6}\u{1d5e0}\u{1d5fa}\u{1d614}\u{1d62e}\u{1d648}\u{1d662}\u{1d67c}\u{1d696}\u24c2\u24dc\u2133\u041c\u039c\u1d0d\u043c\uab87\ua4df\u2c99\u13b7\u2c98\u1e3e\u1e3f\u1e40\u1e41\u1e42\u1e43\u{1d40c}\u{1d426}\u{1d440}\u{1d45a}\u{1d474}\u{1d48e}\u{1d4c2}\u{1d4dc}\u{1d4f6}\u{1d510}\u{1d52a}\u{1d544}\u{1d55e}\u{1d578}\u{1d592}\u{1d5ac}\u{1d5c6}\u{1d5e0}\u{1d5fa}\u{1d614}\u{1d62e}\u{1d648}\u{1d662}\u{1d67c}\u{1d696}\u{1d6b3}\u{1d6ed}\u{1d727}\u{1d761}\u{1d79b}\u1d39\u1d50\u2098\u216f\u217f" ], [ "n", "nN\uff2e\uff4e\u{1d40d}\u{1d427}\u{1d441}\u{1d45b}\u{1d475}\u{1d48f}\u{1d4a9}\u{1d4c3}\u{1d4dd}\u{1d4f7}\u{1d511}\u{1d52b}\u{1d545}\u{1d55f}\u{1d579}\u{1d593}\u{1d5ad}\u{1d5c7}\u{1d5e1}\u{1d5fb}\u{1d615}\u{1d62f}\u{1d649}\u{1d663}\u{1d67d}\u{1d697}\u24c3\u24dd\u2115\u039d\u0274\ua4e0\u0578\u2c9b\u0548\u2c9a\xd1\xf1\u0143\u0144\u0145\u0146\u0147\u0148\u01f8\u01f9\u1e44\u1e45\u1e46\u1e47\u1e48\u1e49\u1e4a\u1e4b\u{1d40d}\u{1d427}\u{1d441}\u{1d45b}\u{1d475}\u{1d48f}\u{1d4a9}\u{1d4c3}\u{1d4dd}\u{1d4f7}\u{1d511}\u{1d52b}\u{1d55f}\u{1d579}\u{1d593}\u{1d5ad}\u{1d5c7}\u{1d5e1}\u{1d5fb}\u{1d615}\u{1d62f}\u{1d649}\u{1d663}\u{1d67d}\u{1d697}\u{1d6b4}\u{1d6ee}\u{1d728}\u{1d762}\u{1d79c}\u1d3a\u1db0\u207f\u2099" ], [ "o", "oO\uff2f\uff4f\u{1d40e}\u{1d428}\u{1d442}\u{1d45c}\u{1d476}\u{1d490}\u{1d4aa}\u{1d4c4}\u{1d4de}\u{1d4f8}\u{1d512}\u{1d52c}\u{1d546}\u{1d560}\u{1d57a}\u{1d594}\u{1d5ae}\u{1d5c8}\u{1d5e2}\u{1d5fc}\u{1d616}\u{1d630}\u{1d64a}\u{1d664}\u{1d67e}\u{1d698}\u24c4\u24de\u2134\u043e\u03bf\u1d0f\ua4f3\u0585\u2c9f\u041e\u039f\u0555\u2c9e\xd2\xd3\xd4\xd5\xd6\xf2\xf3\xf4\xf5\xf6\u014c\u014d\u014e\u014f\u0150\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u01ec\u01ed\u020c\u020d\u020e\u020f\u022a\u022b\u022c\u022d\u022e\u022f\u0230\u0231\u1e4c\u1e4d\u1e4e\u1e4f\u1e50\u1e51\u1e52\u1e53\u1ecc\u1ecd\u1ece\u1ecf\u1ed0\u1ed1\u1ed2\u1ed3\u1ed4\u1ed5\u1ed6\u1ed7\u1ed8\u1ed9\u1eda\u1edb\u1edc\u1edd\u1ede\u1edf\u1ee0\u1ee1\u1ee2\u1ee3\u{1d40e}\u{1d428}\u{1d442}\u{1d45c}\u{1d476}\u{1d490}\u{1d4aa}\u{1d4de}\u{1d4f8}\u{1d512}\u{1d52c}\u{1d546}\u{1d560}\u{1d57a}\u{1d594}\u{1d5ae}\u{1d5c8}\u{1d5e2}\u{1d5fc}\u{1d616}\u{1d630}\u{1d64a}\u{1d664}\u{1d67e}\u{1d698}\u{1d6b6}\u{1d6d0}\u{1d6f0}\u{1d70a}\u{1d72a}\u{1d744}\u{1d764}\u{1d77e}\u{1d79e}\u{1d7b8}\u1d3c\u1d52\u2092" ], [ "p", "pP\uff30\uff50\u{1d40f}\u{1d429}\u{1d443}\u{1d45d}\u{1d477}\u{1d491}\u{1d4ab}\u{1d4c5}\u{1d4df}\u{1d4f9}\u{1d513}\u{1d52d}\u{1d547}\u{1d561}\u{1d57b}\u{1d595}\u{1d5af}\u{1d5c9}\u{1d5e3}\u{1d5fd}\u{1d617}\u{1d631}\u{1d64b}\u{1d665}\u{1d67f}\u{1d699}\u24c5\u24df\u2119\u0440\u03c1\u1d18\uabb2\ua4d1\u2ca3\u0420\u03a1\u13e2\u2ca2\u1e54\u1e55\u1e56\u1e57\u{1d40f}\u{1d429}\u{1d443}\u{1d45d}\u{1d477}\u{1d491}\u{1d4ab}\u{1d4c5}\u{1d4df}\u{1d4f9}\u{1d513}\u{1d52d}\u{1d561}\u{1d57b}\u{1d595}\u{1d5af}\u{1d5c9}\u{1d5e3}\u{1d5fd}\u{1d617}\u{1d631}\u{1d64b}\u{1d665}\u{1d67f}\u{1d699}\u{1d6b8}\u{1d6d2}\u{1d6e0}\u{1d6f2}\u{1d70c}\u{1d71a}\u{1d72c}\u{1d746}\u{1d754}\u{1d766}\u{1d780}\u{1d78e}\u{1d7a0}\u{1d7ba}\u{1d7c8}\u1d3e\u1d56\u1d68\u209a" ], [ "q", "qQ\uff31\uff51\u{1d410}\u{1d42a}\u{1d444}\u{1d45e}\u{1d478}\u{1d492}\u{1d4ac}\u{1d4c6}\u{1d4e0}\u{1d4fa}\u{1d514}\u{1d52e}\u{1d548}\u{1d562}\u{1d57c}\u{1d596}\u{1d5b0}\u{1d5ca}\u{1d5e4}\u{1d5fe}\u{1d618}\u{1d632}\u{1d64c}\u{1d666}\u{1d680}\u{1d69a}\u24c6\u24e0\u211a\u051b\u0566\u051a\u0536\u{1d410}\u{1d42a}\u{1d444}\u{1d45e}\u{1d478}\u{1d492}\u{1d4ac}\u{1d4c6}\u{1d4e0}\u{1d4fa}\u{1d514}\u{1d52e}\u{1d562}\u{1d57c}\u{1d596}\u{1d5b0}\u{1d5ca}\u{1d5e4}\u{1d5fe}\u{1d618}\u{1d632}\u{1d64c}\u{1d666}\u{1d680}\u{1d69a}\ua7f4" ], [ "r", "rR\uff32\uff52\u{1d411}\u{1d42b}\u{1d445}\u{1d45f}\u{1d479}\u{1d493}\u{1d4ad}\u{1d4c7}\u{1d4e1}\u{1d4fb}\u{1d515}\u{1d52f}\u{1d549}\u{1d563}\u{1d57d}\u{1d597}\u{1d5b1}\u{1d5cb}\u{1d5e5}\u{1d5ff}\u{1d619}\u{1d633}\u{1d64d}\u{1d667}\u{1d681}\u{1d69b}\u24c7\u24e1\u211b\u211c\u211d\u0280\uab71\uaba2\ua4e3\u01a6\u13a1\u13d2\u0154\u0155\u0156\u0157\u0158\u0159\u0210\u0211\u0212\u0213\u1e58\u1e59\u1e5a\u1e5b\u1e5c\u1e5d\u1e5e\u1e5f\u{1d411}\u{1d42b}\u{1d445}\u{1d45f}\u{1d479}\u{1d493}\u{1d4c7}\u{1d4e1}\u{1d4fb}\u{1d52f}\u{1d563}\u{1d57d}\u{1d597}\u{1d5b1}\u{1d5cb}\u{1d5e5}\u{1d5ff}\u{1d619}\u{1d633}\u{1d64d}\u{1d667}\u{1d681}\u{1d69b}\u02b3\u1d3f\u1d63" ], [ "s", "sS\uff33\uff53\u{1d412}\u{1d42c}\u{1d446}\u{1d460}\u{1d47a}\u{1d494}\u{1d4ae}\u{1d4c8}\u{1d4e2}\u{1d4fc}\u{1d516}\u{1d530}\u{1d54a}\u{1d564}\u{1d57e}\u{1d598}\u{1d5b2}\u{1d5cc}\u{1d5e6}\u{1d600}\u{1d61a}\u{1d634}\u{1d64e}\u{1d668}\u{1d682}\u{1d69c}\u24c8\u24e2\u0455\ua731\uabaa\ua4e2\u0405\u13da\u015a\u015b\u015c\u015d\u015e\u015f\u0160\u0161\u017f\u0218\u0219\u1e60\u1e61\u1e62\u1e63\u1e64\u1e65\u1e66\u1e67\u1e68\u1e69\u1e9b\u{1d412}\u{1d42c}\u{1d446}\u{1d460}\u{1d47a}\u{1d494}\u{1d4ae}\u{1d4c8}\u{1d4e2}\u{1d4fc}\u{1d516}\u{1d530}\u{1d54a}\u{1d564}\u{1d57e}\u{1d598}\u{1d5b2}\u{1d5cc}\u{1d5e6}\u{1d600}\u{1d61a}\u{1d634}\u{1d64e}\u{1d668}\u{1d682}\u{1d69c}\u02e2\u209b\ua7f1" ], [ "t", "tT\uff34\uff54\u{1d413}\u{1d42d}\u{1d447}\u{1d461}\u{1d47b}\u{1d495}\u{1d4af}\u{1d4c9}\u{1d4e3}\u{1d4fd}\u{1d517}\u{1d531}\u{1d54b}\u{1d565}\u{1d57f}\u{1d599}\u{1d5b3}\u{1d5cd}\u{1d5e7}\u{1d601}\u{1d61b}\u{1d635}\u{1d64f}\u{1d669}\u{1d683}\u{1d69d}\u24c9\u24e3\u0422\u03c4\u1d1b\u0442\uab72\ua4d4\u2ca7\u03a4\u13a2\u2ca6\u0162\u0163\u0164\u0165\u021a\u021b\u1e6a\u1e6b\u1e6c\u1e6d\u1e6e\u1e6f\u1e70\u1e71\u1e97\u{1d413}\u{1d42d}\u{1d447}\u{1d461}\u{1d47b}\u{1d495}\u{1d4af}\u{1d4c9}\u{1d4e3}\u{1d4fd}\u{1d517}\u{1d531}\u{1d54b}\u{1d565}\u{1d57f}\u{1d599}\u{1d5b3}\u{1d5cd}\u{1d5e7}\u{1d601}\u{1d61b}\u{1d635}\u{1d64f}\u{1d669}\u{1d683}\u{1d69d}\u{1d6bb}\u{1d6d5}\u{1d6f5}\u{1d70f}\u{1d72f}\u{1d749}\u{1d769}\u{1d783}\u{1d7a3}\u{1d7bd}\u1d40\u1d57\u209c" ], [ "u", "uU\uff35\uff55\u{1d414}\u{1d42e}\u{1d448}\u{1d462}\u{1d47c}\u{1d496}\u{1d4b0}\u{1d4ca}\u{1d4e4}\u{1d4fe}\u{1d518}\u{1d532}\u{1d54c}\u{1d566}\u{1d580}\u{1d59a}\u{1d5b4}\u{1d5ce}\u{1d5e8}\u{1d602}\u{1d61c}\u{1d636}\u{1d650}\u{1d66a}\u{1d684}\u{1d69e}\u24ca\u24e4\u03c5\u1d1c\uab9c\ua4f4\u057d\u13cc\u054d\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u01af\u01b0\u01d3\u01d4\u01d5\u01d6\u01d7\u01d8\u01d9\u01da\u01db\u01dc\u0214\u0215\u0216\u0217\u1e72\u1e73\u1e74\u1e75\u1e76\u1e77\u1e78\u1e79\u1e7a\u1e7b\u1ee4\u1ee5\u1ee6\u1ee7\u1ee8\u1ee9\u1eea\u1eeb\u1eec\u1eed\u1eee\u1eef\u1ef0\u1ef1\u{1d414}\u{1d42e}\u{1d448}\u{1d462}\u{1d47c}\u{1d496}\u{1d4b0}\u{1d4ca}\u{1d4e4}\u{1d4fe}\u{1d518}\u{1d532}\u{1d54c}\u{1d566}\u{1d580}\u{1d59a}\u{1d5b4}\u{1d5ce}\u{1d5e8}\u{1d602}\u{1d61c}\u{1d636}\u{1d650}\u{1d66a}\u{1d684}\u{1d69e}\u{1d6d6}\u{1d710}\u{1d74a}\u{1d784}\u{1d7be}\u1d41\u1d58\u1d64\u1db8" ], [ "v", "vV\uff36\uff56\u{1d415}\u{1d42f}\u{1d449}\u{1d463}\u{1d47d}\u{1d497}\u{1d4b1}\u{1d4cb}\u{1d4e5}\u{1d4ff}\u{1d519}\u{1d533}\u{1d54d}\u{1d567}\u{1d581}\u{1d59b}\u{1d5b5}\u{1d5cf}\u{1d5e9}\u{1d603}\u{1d61d}\u{1d637}\u{1d651}\u{1d66b}\u{1d685}\u{1d69f}\u24cb\u24e5\u03bd\u1d20\u0475\uaba9\ua4e6\u0474\u13d9\u1e7c\u1e7d\u1e7e\u1e7f\u{1d415}\u{1d42f}\u{1d449}\u{1d463}\u{1d47d}\u{1d497}\u{1d4b1}\u{1d4cb}\u{1d4e5}\u{1d4ff}\u{1d519}\u{1d533}\u{1d54d}\u{1d567}\u{1d581}\u{1d59b}\u{1d5b5}\u{1d5cf}\u{1d5e9}\u{1d603}\u{1d61d}\u{1d637}\u{1d651}\u{1d66b}\u{1d685}\u{1d69f}\u{1d6ce}\u{1d708}\u{1d742}\u{1d77c}\u{1d7b6}\u1d5b\u1d65\u2164\u2174" ], [ "w", "wW\uff37\uff57\u{1d416}\u{1d430}\u{1d44a}\u{1d464}\u{1d47e}\u{1d498}\u{1d4b2}\u{1d4cc}\u{1d4e6}\u{1d500}\u{1d51a}\u{1d534}\u{1d54e}\u{1d568}\u{1d582}\u{1d59c}\u{1d5b6}\u{1d5d0}\u{1d5ea}\u{1d604}\u{1d61e}\u{1d638}\u{1d652}\u{1d66c}\u{1d686}\u{1d6a0}\u24cc\u24e6\u051d\u1d21\uab83\uaba4\ua4ea\u051c\u13b3\u13d4\u0174\u0175\u1e80\u1e81\u1e82\u1e83\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89\u1e98\u{1d416}\u{1d430}\u{1d44a}\u{1d464}\u{1d47e}\u{1d498}\u{1d4b2}\u{1d4cc}\u{1d4e6}\u{1d500}\u{1d51a}\u{1d534}\u{1d54e}\u{1d568}\u{1d582}\u{1d59c}\u{1d5b6}\u{1d5d0}\u{1d5ea}\u{1d604}\u{1d61e}\u{1d638}\u{1d652}\u{1d66c}\u{1d686}\u{1d6a0}\u02b7\u1d42" ], [ "x", "xX\uff38\uff58\u{1d417}\u{1d431}\u{1d44b}\u{1d465}\u{1d47f}\u{1d499}\u{1d4b3}\u{1d4cd}\u{1d4e7}\u{1d501}\u{1d51b}\u{1d535}\u{1d54f}\u{1d569}\u{1d583}\u{1d59d}\u{1d5b7}\u{1d5d1}\u{1d5eb}\u{1d605}\u{1d61f}\u{1d639}\u{1d653}\u{1d66d}\u{1d687}\u{1d6a1}\u24cd\u24e7\u0445\u03c7\ua4eb\u2cad\u0425\u03a7\u2cac\u1e8a\u1e8b\u1e8c\u1e8d\u{1d417}\u{1d431}\u{1d44b}\u{1d465}\u{1d47f}\u{1d499}\u{1d4b3}\u{1d4cd}\u{1d4e7}\u{1d501}\u{1d51b}\u{1d535}\u{1d54f}\u{1d569}\u{1d583}\u{1d59d}\u{1d5b7}\u{1d5d1}\u{1d5eb}\u{1d605}\u{1d61f}\u{1d639}\u{1d653}\u{1d66d}\u{1d687}\u{1d6a1}\u{1d6be}\u{1d6d8}\u{1d6f8}\u{1d712}\u{1d732}\u{1d74c}\u{1d76c}\u{1d786}\u{1d7a6}\u{1d7c0}\u02e3\u1d61\u1d6a\u2093\u2169\u2179" ], [ "y", "yY\uff39\uff59\u{1d418}\u{1d432}\u{1d44c}\u{1d466}\u{1d480}\u{1d49a}\u{1d4b4}\u{1d4ce}\u{1d4e8}\u{1d502}\u{1d51c}\u{1d536}\u{1d550}\u{1d56a}\u{1d584}\u{1d59e}\u{1d5b8}\u{1d5d2}\u{1d5ec}\u{1d606}\u{1d620}\u{1d63a}\u{1d654}\u{1d66e}\u{1d688}\u{1d6a2}\u24ce\u24e8\u0443\u03a5\u028f\uab79\ua4ec\u2ca9\u0423\u13a9\u2ca8\xdd\xfd\xff\u0176\u0177\u0178\u0232\u0233\u1e8e\u1e8f\u1e99\u1ef2\u1ef3\u1ef4\u1ef5\u1ef6\u1ef7\u1ef8\u1ef9\u{1d418}\u{1d432}\u{1d44c}\u{1d466}\u{1d480}\u{1d49a}\u{1d4b4}\u{1d4ce}\u{1d4e8}\u{1d502}\u{1d51c}\u{1d536}\u{1d550}\u{1d56a}\u{1d584}\u{1d59e}\u{1d5b8}\u{1d5d2}\u{1d5ec}\u{1d606}\u{1d620}\u{1d63a}\u{1d654}\u{1d66e}\u{1d688}\u{1d6a2}\u{1d6bc}\u{1d6f6}\u{1d730}\u{1d76a}\u{1d7a4}\u02b8" ], [ "z", "zZ\uff3a\uff5a\u{1d419}\u{1d433}\u{1d44d}\u{1d467}\u{1d481}\u{1d49b}\u{1d4b5}\u{1d4cf}\u{1d4e9}\u{1d503}\u{1d51d}\u{1d537}\u{1d551}\u{1d56b}\u{1d585}\u{1d59f}\u{1d5b9}\u{1d5d3}\u{1d5ed}\u{1d607}\u{1d621}\u{1d63b}\u{1d655}\u{1d66f}\u{1d689}\u{1d6a3}\u24cf\u24e9\u2124\u2128\u0396\u1d22\uab93\ua4dc\u2c8d\u13c3\u2c8c\u0179\u017a\u017b\u017c\u017d\u017e\u1e90\u1e91\u1e92\u1e93\u1e94\u1e95\u{1d419}\u{1d433}\u{1d44d}\u{1d467}\u{1d481}\u{1d49b}\u{1d4b5}\u{1d4cf}\u{1d4e9}\u{1d503}\u{1d537}\u{1d56b}\u{1d585}\u{1d59f}\u{1d5b9}\u{1d5d3}\u{1d5ed}\u{1d607}\u{1d621}\u{1d63b}\u{1d655}\u{1d66f}\u{1d689}\u{1d6a3}\u{1d6ad}\u{1d6e7}\u{1d721}\u{1d75b}\u{1d795}\u1dbb" ] ]);

function $t(u) {
  return u.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function G9(u, e) {
  let d = $t(u);
  if (d.length <= e) return d;
  return $t(xsn(u, e));
}

function xsn(u, e) {
  let a = Math.max(0, Math.floor(u.length * (e / $t(u).length)));
  for (;;) {
    let n = ne(u, a);
    if ($t(n).length + 13 <= e || a === 0) return n + "\u2026 [truncated]";
    a = Math.floor(a * .9);
  }
}

function Ns(u) {
  return $t(u).replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

var IPr = "\\u00ad\\u034f\\u0600-\\u0605\\u061c\\u06dd\\u070f\\u0890\\u0891\\u08e2\\u115f\\u1160\\u17b4\\u17b5\\u180b-\\u180f\\u200b-\\u200f\\u202a-\\u202e\\u2060-\\u206f\\u3164\\ufe00-\\ufe0f\\ufeff\\uffa0\\ufff0-\\ufffb\\u{110bd}\\u{110cd}\\u{13430}-\\u{1343f}\\u{1bca0}-\\u{1bca3}\\u{1d173}-\\u{1d17a}\\u{16fe4}\\u{e0000}-\\u{e0fff}", C = {
  "\uff1c": "<",
  "\uff1e": ">",
  "\ufe64": "<",
  "\ufe65": ">",
  "\u2329": "<",
  "\u232a": ">",
  "\u27e8": "<",
  "\u27e9": ">",
  "\u3008": "<",
  "\u3009": ">",
  "\u2039": "<",
  "\u203a": ">",
  "\u02c2": "<",
  "\u02c3": ">",
  "\u1438": "<",
  "\u1433": ">",
  "\u276c": "<",
  "\u276d": ">",
  "\u276e": "<",
  "\u276f": ">",
  "\u2770": "<",
  "\u2771": ">",
  "\u29fc": "<",
  "\u29fd": ">",
  "\u226e": "<",
  "\u226f": ">",
  "\u227a": "<",
  "\u227b": ">",
  "\u22d6": "<",
  "\u22d7": ">",
  "\uff0f": "/",
  "\u2215": "/",
  "\u2044": "/"
}, uu = "\\u0300-\\u0344\\u0346-\\u036f\\u0483-\\u0489\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u064b-\\u065f\\u0670\\u06d6-\\u06dc\\u06df-\\u06e4\\u06e7\\u06e8\\u06ea-\\u06ed\\u1ab0-\\u1aff\\u1dc0-\\u1dff\\u20d0-\\u20ff\\u3099\\u309a\\ufe20-\\ufe2f", l9e = `${IPr}${uu}\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f-\\x9f\\u2028\\u2029`, du = "\\x0b\\x0c\\x1c-\\x1f\\x85\\u2028\\u2029\\u115f\\u1160\\u3164\\uffa0", TLt = "A-Za-z0-9_\\-", U = `(?:[^${TLt}]|$)`, ALt = "\\p{Pd}\\u2212\\u207b\\u208b\\u02d7\\u2796\\u2043\\u30fc\\uff70", i1e = ":\\uff1a\\ufe55\\ufe13\\ua789\\u2236\\u02d0\\u02f8\\u05c3\\u0589\\u0703\\u0704\\u16ec\\u1803\\u1809\\u205a\\ua4fd\\ufe30", F = "=\\u207c\\u208c\\ufe66\\uff1d\\ua78a\\u2550\\u268c\\ua4ff\\u{1f7f0}", B = "\u2e40\u30a0\u1400", G = `\\s\\u2800${l9e}`, OPr = `_\\p{Pc}\\u2017\\u02cd\\u07fa\\u0640${ALt}`, H = `[${OPr}]`, b = (() => {
  let u = {
    "<": "<",
    ">": ">",
    "/": "/"
  };
  for (let [e, d] of Object.entries(C)) u[d] += e;
  return {
    open: u["<"],
    close: u[">"],
    slash: u["/"],
    filler: `^${TLt}${u["<"]}${u[">"]}`,
    lookalikePattern: new RegExp(`[${Object.keys(C).join("")}]`, "g"),
    invisiblePattern: new RegExp(`[${IPr}]`, "gu")
  };
})(), aG = {
  open: b.open,
  close: b.close,
  slash: b.slash
};

function Yft() {
  return b.invisiblePattern;
}

function rRo(u) {
  return Jgt(u).replace(Yft(), a6);
}

function a1e(u, e) {
  return `(?=([${u}]*))(?:\\${e})`;
}

function CLt(u) {
  return a1e(l9e, u);
}

var x = new Map, eu = 64;

function w(u, e) {
  let d = `${e ? "/" : ""}${u}`, a = x.get(d);
  if (a) return a;
  let n = K({
    tags: [ u ],
    closeOnly: e,
    fillerClass: b.filler,
    spell: c => c === "-" || c === "_" ? H : c,
    tail: void 0
  });
  if (x.size >= eu) x.clear();
  return x.set(d, n), n;
}

function K({tags: u, closeOnly: e, fillerClass: d, spell: a, tail: n}) {
  let {open: c, slash: f} = b, t = 0, o = e ? `${a1e(`${d}${f}`, ++t)}[${f}]${a1e(d, ++t)}` : a1e(d, ++t), r = u.map(i => [ ...i ].map((p, R) => (R === 0 ? "" : CLt(++t)) + a(p)).join("")), s = n === void 0 ? U : `${CLt(++t)}${n}`;
  return new RegExp(`[${c}](?!\\\\)(?=${o}(?:${r.join("|")})${s})`, "giu");
}

function d9e(u, e) {
  return e.replace(w(u, !0), "<\\");
}

function Psn(u, e) {
  return e.replace(w(u, !1), "<\\");
}

function qO(u) {
  return u.replace(b.lookalikePattern, e => C[e] ?? e);
}

var au = (() => {
  let u = new Uint8Array(65536);
  for (let e of Object.keys(C)) for (let d = 0; d < e.length; d++) u[e.charCodeAt(d)] = 1;
  return u;
})();

function s0s(u) {
  let e = 0;
  for (let d = 0; d < u.length; d++) e += au[u.charCodeAt(d)];
  return e;
}

var M = {
  "\u0430": "a",
  "\u0435": "e",
  "\u043e": "o",
  "\u0440": "p",
  "\u0441": "c",
  "\u0443": "y",
  "\u0445": "x",
  "\u043a": "k",
  "\u0456": "i",
  "\u0458": "j",
  "\u0455": "s",
  "\u0501": "d",
  "\u051b": "q",
  "\u051d": "w",
  "\u04bb": "h",
  "\u04cf": "l",
  "\u0412": "b",
  "\u041c": "m",
  "\u041d": "h",
  "\u0422": "t",
  "\u03b1": "a",
  "\u03b5": "e",
  "\u03b9": "i",
  "\u03ba": "k",
  "\u03bd": "v",
  "\u03bf": "o",
  "\u03c1": "p",
  "\u03c4": "t",
  "\u03c5": "u",
  "\u03c7": "x",
  "\u03f3": "j",
  "\u0392": "b",
  "\u0396": "z",
  "\u0397": "h",
  "\u039c": "m",
  "\u039d": "n",
  "\u03a5": "y",
  "\u1d00": "a",
  "\u0299": "b",
  "\u1d04": "c",
  "\u1d05": "d",
  "\u1d07": "e",
  "\ua730": "f",
  "\u0262": "g",
  "\u029c": "h",
  "\u026a": "i",
  "\u1d0a": "j",
  "\u1d0b": "k",
  "\u029f": "l",
  "\u1d0d": "m",
  "\u0274": "n",
  "\u1d0f": "o",
  "\u1d18": "p",
  "\u0280": "r",
  "\ua731": "s",
  "\u1d1b": "t",
  "\u1d1c": "u",
  "\u1d20": "v",
  "\u1d21": "w",
  "\u028f": "y",
  "\u1d22": "z",
  "\u0251": "a",
  "\u0261": "g",
  "\u0131": "i",
  "\u0475": "v",
  "\u0442": "t",
  "\u043c": "m",
  "\uab70": "d",
  "\uab71": "r",
  "\uab72": "t",
  "\uab79": "y",
  "\uab7a": "a",
  "\uab7b": "j",
  "\uab7c": "e",
  "\uab83": "w",
  "\uab87": "m",
  "\uab8b": "h",
  "\uab90": "g",
  "\uab92": "h",
  "\uab93": "z",
  "\uab9c": "u",
  "\uab9f": "b",
  "\uaba2": "r",
  "\uaba4": "w",
  "\uaba9": "v",
  "\uabaa": "s",
  "\uabae": "l",
  "\uabaf": "c",
  "\uabb2": "p",
  "\uabb6": "k",
  "\uabb7": "d",
  "\u13fc": "b",
  "\ua4d0": "b",
  "\ua4d1": "p",
  "\ua4d3": "d",
  "\ua4d4": "t",
  "\ua4d6": "g",
  "\ua4d7": "k",
  "\ua4d9": "j",
  "\ua4da": "c",
  "\ua4dc": "z",
  "\ua4dd": "f",
  "\ua4df": "m",
  "\ua4e0": "n",
  "\ua4e1": "l",
  "\ua4e2": "s",
  "\ua4e3": "r",
  "\ua4e6": "v",
  "\ua4e7": "h",
  "\ua4ea": "w",
  "\ua4eb": "x",
  "\ua4ec": "y",
  "\ua4ee": "a",
  "\ua4f0": "e",
  "\ua4f2": "i",
  "\ua4f3": "o",
  "\ua4f4": "u",
  "\u0566": "q",
  "\u0570": "h",
  "\u0578": "n",
  "\u057d": "u",
  "\u0581": "g",
  "\u0585": "o",
  "\u03f2": "c",
  "\u2ca5": "c",
  "\u0269": "i",
  "\u2c81": "a",
  "\u2c83": "b",
  "\u2c89": "e",
  "\u2c8f": "h",
  "\u2c93": "i",
  "\u2c95": "k",
  "\u2c99": "m",
  "\u2c9b": "n",
  "\u2c9f": "o",
  "\u2ca3": "p",
  "\u2ca7": "t",
  "\u2ca9": "y",
  "\u2cad": "x",
  "\u2c8d": "z"
}, fu = (() => {
  let u = {
    ...M
  };
  for (let [e, d] of Object.entries(M)) {
    let a = e.toUpperCase();
    if (a !== e && [ ...a ].length === 1 && !(a in u) && !/^[A-Za-z]$/.test(a)) u[a] = d;
  }
  return {
    table: u,
    pattern: new RegExp(`[${Object.keys(u).join("")}]`, "gu")
  };
})();

function ree(u) {
  let {table: e, pattern: d} = fu, a = n => n.replace(d, c => e[c] ?? c);
  return a(Vee(nu(a(u))));
}

function nu(u) {
  return PUs(u).replace(/\p{M}+/gu, "");
}

var MPr = "abcdefghijklmnopqrstuvwxyz";

function lj(u) {
  if (!/^[a-z]$/.test(u)) throw Error("latinLetterConfusableClass: expected one ASCII lowercase letter");
  return I.get(u) ?? u;
}

function YO(u, e) {
  let d = b;
  return K({
    tags: u,
    closeOnly: !1,
    fillerClass: `${d.filler}${[ ...MPr ].map(lj).join("")}`,
    spell: a => {
      if (/^[a-z]$/.test(a)) return `[${lj(a)}]`;
      if (a === "-" || a === "_") return H;
      if (/^[0-9]$/.test(a)) return a;
      throw Error("confusableTagScrubPattern: tag names are lowercase [a-z0-9_-]");
    },
    tail: e?.({
      name: TLt,
      close: d.close,
      colon: i1e
    })
  });
}

function AIe(u) {
  return `${u}\\`;
}

function wVn() {
  return YO([ "channel" ], oRo);
}

function oRo({name: u, close: e, span: d = n => `[^${e}]{0,${n}}`, assign: a = n => `${n}(?=(?<assignGap>[${G}]*))\\k<assignGap>[${F}${B}]`}) {
  return `(?:(?![${u}])|(?<=[${du}][${l9e}]*))${d(120)}(?<![\\w-])${a("source")}`;
}

var sRo = "antml";

function vVn() {
  return YO([ sRo ], ({colon: u}) => `[${u}]`);
}

var cu = /[\u0080-\u{10ffff}]/u, tu = new RegExp(`[${b.open}]`, "u"), ru = new RegExp(`[${ALt}]`, "gu"), ou = new RegExp(`^[${OPr}]$`, "u"), su = String.fromCharCode(65533), y = 57344, bu = y + 32, iu = y + 126, P = 57856, v = P + 32, X = P + 126, O = `${String.fromCharCode(v)}-${String.fromCharCode(X)}`, q = [ "nv", "uy" ], S = 57600, lu = S + 255, k = String.fromCharCode(S + 240), T = new Map, gu = 32768, Y = new Uint8Array(4352), m;

function E(u) {
  return String.fromCharCode(y + u.charCodeAt(0));
}

function L(u) {
  return String.fromCharCode(P + u.charCodeAt(0));
}

function pu(u) {
  let e = T.get(u);
  if (e !== void 0) return e;
  let d = W(u);
  if (T.size >= gu) T.clear();
  return T.set(u, d), d;
}

function W(u) {
  let e = u.codePointAt(0), d = u;
  if (e >= bu && e <= iu || e >= v && e <= X || e >= S && e <= lu) d = su; else if (B.includes(u)) d = k; else {
    if (m === void 0) {
      m = new Map;
      for (let [f, t] of I) for (let o of t) m.set(o, f);
    }
    let a = new Set;
    for (let f of [ u, u.toLowerCase(), u.toUpperCase(), u.toUpperCase().toLowerCase(), u.toLowerCase().toUpperCase() ]) {
      let t = m.get(f);
      if (t !== void 0) a.add(t);
    }
    let n = [ ...a ].sort().join(""), c = n || ree(u).replace(ru, "-").toLowerCase().replace(/\u00DF/g, "ss");
    if (a.size > 1) {
      let f = q.indexOf(n);
      d = f === -1 ? E(n) : String.fromCharCode(S + f);
    } else if (/^[a-z0-9_-]+$/.test(c)) d = [ ...c ].map((f, t) => t === 0 ? E(f) : L(f)).join(""); else if (ou.test(u)) d = E("_");
  }
  return d;
}

var Eu = 256;

function Au(u) {
  let e = 1;
  for (let d = Math.max(u << 8, 128); d < u + 1 << 8; d++) {
    let a = String.fromCodePoint(d);
    if (W(a) !== a) {
      e = 2;
      break;
    }
  }
  return Y[u] = e, e;
}

function _u(u) {
  if (/^[a-z0-9]$/.test(u)) {
    let e = q.flatMap((d, a) => d.includes(u) ? [ String.fromCharCode(S + a) ] : []);
    return `[${u}${E(u)}${L(u)}${e.join("")}]`;
  }
  if (u === "-" || u === "_") return `[_\\-${E("_")}${E("-")}${L("_")}${L("-")}${k}]`;
  throw Error("createTagFormScrub: tag names are lowercase [a-z0-9_-]");
}

function Su({tags: u, tail: e}) {
  let {open: d, close: a, filler: n} = b, c = 0, f = r => [ ...r ].map((s, i) => (i === 0 ? "" : CLt(++c)) + _u(s)).join(""), t = u.map(f), o = e === void 0 ? U : `${CLt(++c)}${e({
    name: TLt,
    close: a,
    colon: i1e,
    span: r => `[${O}]*(?:[^${a}${O}][${O}]*){0,${r}}`,
    spell: f,
    assign: r => `${f(r)}${a1e(G, ++c)}[${F}${k}]`
  })}`;
  return new RegExp(`[${d}](?!\\\\)(?=[${n}]*?(?:${t.join("|")})${o})`, "giu");
}

function Isn(u) {
  let e = u.filter(d => d.tags.length > 0).map(Su);
  return {
    openerOffsets(d) {
      return j(d, e);
    },
    neutralize(d) {
      let a = "", n = 0;
      for (let c of j(d, e)) a += `${d.slice(n, c)}<\\`, n = c + 1;
      return a + d.slice(n);
    }
  };
}

function xu(u) {
  let e = [], d = [], a, n = "", c = 0;
  for (let f = 0; f < u.length; f++) {
    let t = u.charCodeAt(f);
    if (t < 128) continue;
    let o = u.charCodeAt(f + 1), r = t >= 55296 && t <= 56319 && o >= 56320 && o <= 57343 ? 2 : 1, s = (r === 2 ? u.codePointAt(f) : t) >> 8, i = Y[s];
    if (i === 0) {
      if (a ??= new Uint16Array(4352), ++a[s] >= Eu) i = Au(s);
    }
    if (i === 1) {
      f += r - 1;
      continue;
    }
    let p = pu(u.slice(f, f + r));
    if (n += u.slice(c, f) + p, c = f + r, p.length !== r) e.push(n.length), d.push(p.length - r + (d.at(-1) ?? 0));
    f += r - 1;
  }
  return n += u.slice(c), {
    reading: n,
    offsetInText(f) {
      let t = 0, o = e.length;
      while (t < o) {
        let r = t + o >> 1;
        if (e[r] <= f) t = r + 1; else o = r;
      }
      return t === 0 ? f : f - d[t - 1];
    }
  };
}

function j(u, e) {
  if (!tu.test(u)) return [];
  let d = cu.test(u) ? xu(u) : void 0, a = d?.reading ?? u, n = new Set;
  for (let c of e) for (let f of a.matchAll(c)) n.add(d ? d.offsetInText(f.index) : f.index);
  return [ ...n ].sort((c, f) => c - f);
}

var c9e = "\\[\\uff3b\\ufe47\\u27e6\\u301a\\u2045\\u298b\\u298d\\u298f\\u3010\\u3014\\ufe5d\\u3016\\u3018\\u2772\\u27ec\\ufe17\\ufe39\\ufe3b", z = "\\]\\uff3d\\ufe48\\u27e7\\u301b\\u2046\\u298c\\u2990\\u298e\\u3011\\u3015\\ufe5e\\u3017\\u3019\\u2773\\u27ed\\ufe18\\ufe3a\\ufe3c", Xft = `\\t\\v\\f \\u00a0\\u1680\\u2000-\\u200a\\u202f\\u205f\\u3000\\u2800${l9e}`, h = `\\r\\n${Xft}`, J = `\\p{Pc}\\u2017.\\u00b7\\u0387\\u2022\\u2219\\u22c5\\u2024\\u2026\\u2027\\u30fb\\ufe52\\uff65\\uff0e/\\u2044\\u2215\\uff0f\\\\\\u2216\\ufe68\\uff3c|\\u00a6\\uff5c~\\u223c\\uff5e${i1e};\\u037e\\ufe54\\uff1b`, Q = `${ALt}${J}`, Tu = "\\u30fc\\uff70\\u115f\\u1160\\u3164\\uffa0", Z = 4;

function $u(u) {
  let e = `[${h}]*`, d = "";
  for (let a = 0; a < Z; a++) d = `(?:[${Q}]${e}${d})?`;
  return `(?=(${e}${d}))(?:\\${u})`;
}

var mu = `[^${c9e}${z}\\r\\n]{0,119}?(?:(?![${Tu}])[\\p{L}\\p{N}]|(?![${z}])["')\\u2019\\u201d\\uff09\\p{Pe}\\p{Pf}])`, HPr = Symbol("LEAD_HEX_ID"), yfe = Symbol("LEAD_SPAN"), Osn = Symbol("LEAD_OPEN_END");

function i0s(u) {
  let e = 0, d = () => $u(++e), a = () => a1e(`\\r\\n${l9e}`, ++e), n = () => `(?=[${h}${Q}])` + d(), c = () => `(?=[${J}]{0,${Z}}[${h}${ALt}])` + d(), f = `0-9\\uff10-\\uff19\\u{1d7ce}-\\u{1d7ff}\\u2070\\u00b9\\u00b2\\u00b3\\u2074-\\u2079\\u2080-\\u2089${[ ..."abcdef" ].map(lj).join("")}`, t = g => {
    if (!/^[a-z]+$/.test(g)) throw Error("bracketedLeadScrubPattern: words are lowercase ASCII");
    return [ ...g ].map((A, l) => (l === 0 ? "" : a()) + `[${lj(A)}]`).join("");
  }, o = g => Array.from({
    length: g
  }, (A, l) => (l === 0 ? "" : a()) + `[${f}]`).join("") + a() + `[${ALt}]`, r = () => o(8) + d() + o(4) + d() + o(4), s = "(?![0-9A-Za-z_])", i = () => {
    throw Error("bracketedLeadScrubPattern: LEAD_OPEN_END must be the last token in a lead");
  }, p = d(), R = u.map(g => {
    let A = g.at(-1) === Osn, l = A ? g.slice(0, -1) : g;
    if (l.length === 0) throw Error("bracketedLeadScrubPattern: a lead has at least one token");
    let D = l.map((_, N) => (N === 0 ? "" : typeof _ !== "string" ? d() : l[N - 1] === yfe ? c() : n()) + (_ === HPr ? r() : _ === yfe ? mu : _ === Osn ? i() : t(_) + (l[N + 1] === yfe ? s : ""))).join("");
    return A || l.at(-1) === HPr ? D : `${D}${s}`;
  });
  return new RegExp(`[${c9e}](?!\\\\)(?=${p}(?:${R.join("|")}))`, "giu");
}

function l$(u, e) {
  let d = Psn(u, qO(lg(e).replace(Yft(), "")));
  if (ree(d) === d) return d;
  let a = w(u, !1);
  return d.split("<").map((n, c) => {
    if (c === 0 || n.startsWith("\\")) return n;
    let f = ree(n);
    return f !== n && `< ${f}`.search(a) === 0 ? `\\${n}` : n;
  }).join("<");
}

var Lu = /&(?:amp|lt|gt);/g, V = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">"
};

function q_(u) {
  return u.replace(Lu, e => V[e] ?? e);
}

var Cu = /&(?:amp|lt|gt|quot|apos);/g, Ru = {
  ...V,
  "&quot;": '"',
  "&apos;": "'"
};

function _fe(u) {
  return u.replace(Cu, e => Ru[e] ?? e);
}

export { $t, G9, xsn, Ns, IPr, l9e, TLt, ALt, i1e, OPr, aG, Yft, rRo, a1e, CLt, d9e, Psn, qO, s0s, ree, MPr, lj, YO, AIe, wVn, oRo, sRo, vVn, Isn, c9e, Xft, HPr, yfe, Osn, i0s, l$, q_, _fe };
