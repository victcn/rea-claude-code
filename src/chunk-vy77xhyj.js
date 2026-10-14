// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C } from "./chunk-m8ez8fhk.js";

var Out = C(function(ge, gt) {
  (function(g, Z) {
    typeof ge === "object" && typeof gt < "u" ? Z(ge) : typeof define === "function" && define.amd ? define([ "exports" ], Z) : (g = typeof globalThis < "u" ? globalThis : g || self, 
    Z(g.acorn = {}));
  })(ge, function(g) {
    var Z = [ 509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239 ], Te = [ 0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191 ], bt = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0897-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65", Le = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c8a\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7cd\ua7d0\ua7d1\ua7d3\ua7d5-\ua7dc\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc", be = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    }, ye = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", yt = {
      5: ye,
      "5module": ye + " export import",
      6: ye + " const class extends export import super"
    }, _t = /^in(stanceof)?$/, Ct = new RegExp("[" + Le + "]"), St = new RegExp("[" + Le + bt + "]");
    function _e(e, t) {
      var i = 65536;
      for (var s = 0; s < t.length; s += 2) {
        if (i += t[s], i > e) return !1;
        if (i += t[s + 1], i >= e) return !0;
      }
      return !1;
    }
    function L(e, t) {
      if (e < 65) return e === 36;
      if (e < 91) return !0;
      if (e < 97) return e === 95;
      if (e < 123) return !0;
      if (e <= 65535) return e >= 170 && Ct.test(String.fromCharCode(e));
      if (t === !1) return !1;
      return _e(e, Te);
    }
    function B(e, t) {
      if (e < 48) return e === 36;
      if (e < 58) return !0;
      if (e < 65) return !1;
      if (e < 91) return !0;
      if (e < 97) return e === 95;
      if (e < 123) return !0;
      if (e <= 65535) return e >= 170 && St.test(String.fromCharCode(e));
      if (t === !1) return !1;
      return _e(e, Te) || _e(e, Z);
    }
    var v = function(t, i) {
      if (i === void 0) i = {};
      this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, 
      this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, 
      this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
    };
    function E(e, t) {
      return new v(e, {
        beforeExpr: !0,
        binop: t
      });
    }
    var P = {
      beforeExpr: !0
    }, I = {
      startsExpr: !0
    }, ne = {};
    function m(e, t) {
      if (t === void 0) t = {};
      return t.keyword = e, ne[e] = new v(e, t);
    }
    var a = {
      num: new v("num", I),
      regexp: new v("regexp", I),
      string: new v("string", I),
      name: new v("name", I),
      privateId: new v("privateId", I),
      eof: new v("eof"),
      bracketL: new v("[", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      bracketR: new v("]"),
      braceL: new v("{", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      braceR: new v("}"),
      parenL: new v("(", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      parenR: new v(")"),
      comma: new v(",", P),
      semi: new v(";", P),
      colon: new v(":", P),
      dot: new v("."),
      question: new v("?", P),
      questionDot: new v("?."),
      arrow: new v("=>", P),
      template: new v("template"),
      invalidTemplate: new v("invalidTemplate"),
      ellipsis: new v("...", P),
      backQuote: new v("`", I),
      dollarBraceL: new v("${", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      eq: new v("=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      assign: new v("_=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      incDec: new v("++/--", {
        prefix: !0,
        postfix: !0,
        startsExpr: !0
      }),
      prefix: new v("!/~", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      logicalOR: E("||", 1),
      logicalAND: E("&&", 2),
      bitwiseOR: E("|", 3),
      bitwiseXOR: E("^", 4),
      bitwiseAND: E("&", 5),
      equality: E("==/!=/===/!==", 6),
      relational: E("</>/<=/>=", 7),
      bitShift: E("<</>>/>>>", 8),
      plusMin: new v("+/-", {
        beforeExpr: !0,
        binop: 9,
        prefix: !0,
        startsExpr: !0
      }),
      modulo: E("%", 10),
      star: E("*", 10),
      slash: E("/", 10),
      starstar: new v("**", {
        beforeExpr: !0
      }),
      coalesce: E("??", 1),
      _break: m("break"),
      _case: m("case", P),
      _catch: m("catch"),
      _continue: m("continue"),
      _debugger: m("debugger"),
      _default: m("default", P),
      _do: m("do", {
        isLoop: !0,
        beforeExpr: !0
      }),
      _else: m("else", P),
      _finally: m("finally"),
      _for: m("for", {
        isLoop: !0
      }),
      _function: m("function", I),
      _if: m("if"),
      _return: m("return", P),
      _switch: m("switch"),
      _throw: m("throw", P),
      _try: m("try"),
      _var: m("var"),
      _const: m("const"),
      _while: m("while", {
        isLoop: !0
      }),
      _with: m("with"),
      _new: m("new", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      _this: m("this", I),
      _super: m("super", I),
      _class: m("class", I),
      _extends: m("extends", P),
      _export: m("export"),
      _import: m("import", I),
      _null: m("null", I),
      _true: m("true", I),
      _false: m("false", I),
      _in: m("in", {
        beforeExpr: !0,
        binop: 7
      }),
      _instanceof: m("instanceof", {
        beforeExpr: !0,
        binop: 7
      }),
      _typeof: m("typeof", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _void: m("void", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _delete: m("delete", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      })
    }, w = /\r\n?|\n|\u2028|\u2029/, Re = new RegExp(w.source, "g");
    function j(e) {
      return e === 10 || e === 13 || e === 8232 || e === 8233;
    }
    function Oe(e, t, i) {
      if (i === void 0) i = e.length;
      for (var s = t; s < i; s++) {
        var r = e.charCodeAt(s);
        if (j(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
      }
      return -1;
    }
    var Ce = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, S = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Be = Object.prototype, {hasOwnProperty: kt, toString: wt} = Be, H = Object.hasOwn || function(e, t) {
      return kt.call(e, t);
    }, De = Array.isArray || function(e) {
      return wt.call(e) === "[object Array]";
    }, Fe = Object.create(null);
    function U(e) {
      return Fe[e] || (Fe[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
    }
    function D(e) {
      if (e <= 65535) return String.fromCharCode(e);
      return e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320);
    }
    var At = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, W = function(t, i) {
      this.line = t, this.column = i;
    };
    W.prototype.offset = function(t) {
      return new W(this.line, this.column + t);
    };
    var J = function(t, i, s) {
      if (this.start = i, this.end = s, t.sourceFile !== null) this.source = t.sourceFile;
    };
    function Se(e, t) {
      for (var i = 1, s = 0; ;) {
        var r = Oe(e, s, t);
        if (r < 0) return new W(i, t - s);
        ++i, s = r;
      }
    }
    var ue = {
      ecmaVersion: null,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: null,
      allowSuperOutsideMethod: null,
      allowHashBang: !1,
      checkPrivateFields: !0,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1
    }, Me = !1;
    function It(e) {
      var t = {};
      for (var i in ue) t[i] = e && H(e, i) ? e[i] : ue[i];
      if (t.ecmaVersion === "latest") t.ecmaVersion = 1e8; else if (t.ecmaVersion == null) {
        if (!Me && typeof console === "object" && console.warn) Me = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.`);
        t.ecmaVersion = 11;
      } else if (t.ecmaVersion >= 2015) t.ecmaVersion -= 2009;
      if (t.allowReserved == null) t.allowReserved = t.ecmaVersion < 5;
      if (!e || e.allowHashBang == null) t.allowHashBang = t.ecmaVersion >= 14;
      if (De(t.onToken)) {
        var s = t.onToken;
        t.onToken = function(r) {
          return s.push(r);
        };
      }
      if (De(t.onComment)) t.onComment = Et(t, t.onComment);
      return t;
    }
    function Et(e, t) {
      return function(i, s, r, n, u, o) {
        var h = {
          type: i ? "Block" : "Line",
          value: s,
          start: r,
          end: n
        };
        if (e.locations) h.loc = new J(this, u, o);
        if (e.ranges) h.range = [ r, n ];
        t.push(h);
      };
    }
    var ee = 1, z = 2, ke = 4, Ue = 8, we = 16, qe = 32, oe = 64, je = 128, G = 256, te = 512, he = ee | z | G;
    function Ae(e, t) {
      return z | (e ? ke : 0) | (t ? Ue : 0);
    }
    var ce = 0, Ie = 1, F = 2, Ge = 3, He = 4, We = 5, _ = function(t, i, s) {
      this.options = t = It(t), this.sourceFile = t.sourceFile, this.keywords = U(yt[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
      var r = "";
      if (t.allowReserved !== !0) {
        if (r = be[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module") r += " await";
      }
      this.reservedWords = U(r);
      var n = (r ? r + " " : "") + be.strict;
      if (this.reservedWordsStrict = U(n), this.reservedWordsStrictBind = U(n + " " + be.strictBind), 
      this.input = String(i), this.containsEsc = !1, s) this.pos = s, this.lineStart = this.input.lastIndexOf(`\n`, s - 1) + 1, 
      this.curLine = this.input.slice(0, this.lineStart).split(w).length; else this.pos = this.lineStart = 0, 
      this.curLine = 1;
      if (this.type = a.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), 
      this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, 
      this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", 
      this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, 
      this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, 
      this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!") this.skipLineComment(2);
      this.scopeStack = [], this.enterScope(ee), this.regexpState = null, this.privateNameStack = [];
    }, R = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      canAwait: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      },
      allowNewDotTarget: {
        configurable: !0
      },
      inClassStaticBlock: {
        configurable: !0
      }
    };
    _.prototype.parse = function() {
      var t = this.options.program || this.startNode();
      return this.nextToken(), this.parseTopLevel(t);
    }, R.inFunction.get = function() {
      return (this.currentVarScope().flags & z) > 0;
    }, R.inGenerator.get = function() {
      return (this.currentVarScope().flags & Ue) > 0;
    }, R.inAsync.get = function() {
      return (this.currentVarScope().flags & ke) > 0;
    }, R.canAwait.get = function() {
      for (var e = this.scopeStack.length - 1; e >= 0; e--) {
        var t = this.scopeStack[e], i = t.flags;
        if (i & (G | te)) return !1;
        if (i & z) return (i & ke) > 0;
      }
      return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
    }, R.allowSuper.get = function() {
      var e = this.currentThisScope(), t = e.flags;
      return (t & oe) > 0 || this.options.allowSuperOutsideMethod;
    }, R.allowDirectSuper.get = function() {
      return (this.currentThisScope().flags & je) > 0;
    }, R.treatFunctionsAsVar.get = function() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }, R.allowNewDotTarget.get = function() {
      for (var e = this.scopeStack.length - 1; e >= 0; e--) {
        var t = this.scopeStack[e], i = t.flags;
        if (i & (G | te) || i & z && !(i & we)) return !0;
      }
      return !1;
    }, R.inClassStaticBlock.get = function() {
      return (this.currentVarScope().flags & G) > 0;
    }, _.extend = function() {
      var t = [], i = arguments.length;
      while (i--) t[i] = arguments[i];
      var s = this;
      for (var r = 0; r < t.length; r++) s = t[r](s);
      return s;
    }, _.parse = function(t, i) {
      return new this(i, t).parse();
    }, _.parseExpressionAt = function(t, i, s) {
      var r = new this(s, t, i);
      return r.nextToken(), r.parseExpression();
    }, _.tokenizer = function(t, i) {
      return new this(i, t);
    }, Object.defineProperties(_.prototype, R);
    var A = _.prototype, Pt = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
    A.strictDirective = function(e) {
      if (this.options.ecmaVersion < 5) return !1;
      for (;;) {
        S.lastIndex = e, e += S.exec(this.input)[0].length;
        var t = Pt.exec(this.input.slice(e));
        if (!t) return !1;
        if ((t[1] || t[2]) === "use strict") {
          S.lastIndex = e + t[0].length;
          var i = S.exec(this.input), s = i.index + i[0].length, r = this.input.charAt(s);
          return r === ";" || r === "}" || w.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || r === "!" && this.input.charAt(s + 1) === "=");
        }
        if (e += t[0].length, S.lastIndex = e, e += S.exec(this.input)[0].length, this.input[e] === ";") e++;
      }
    }, A.eat = function(e) {
      if (this.type === e) return this.next(), !0; else return !1;
    }, A.isContextual = function(e) {
      return this.type === a.name && this.value === e && !this.containsEsc;
    }, A.eatContextual = function(e) {
      if (!this.isContextual(e)) return !1;
      return this.next(), !0;
    }, A.expectContextual = function(e) {
      if (!this.eatContextual(e)) this.unexpected();
    }, A.canInsertSemicolon = function() {
      return this.type === a.eof || this.type === a.braceR || w.test(this.input.slice(this.lastTokEnd, this.start));
    }, A.insertSemicolon = function() {
      if (this.canInsertSemicolon()) {
        if (this.options.onInsertedSemicolon) this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
        return !0;
      }
    }, A.semicolon = function() {
      if (!this.eat(a.semi) && !this.insertSemicolon()) this.unexpected();
    }, A.afterTrailingComma = function(e, t) {
      if (this.type === e) {
        if (this.options.onTrailingComma) this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
        if (!t) this.next();
        return !0;
      }
    }, A.expect = function(e) {
      this.eat(e) || this.unexpected();
    }, A.unexpected = function(e) {
      this.raise(e != null ? e : this.start, "Unexpected token");
    };
    var pe = function() {
      this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
    };
    A.checkPatternErrors = function(e, t) {
      if (!e) return;
      if (e.trailingComma > -1) this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
      var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
      if (i > -1) this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
    }, A.checkExpressionErrors = function(e, t) {
      if (!e) return !1;
      var {shorthandAssign: i, doubleProto: s} = e;
      if (!t) return i >= 0 || s >= 0;
      if (i >= 0) this.raise(i, "Shorthand property assignments are valid only in destructuring patterns");
      if (s >= 0) this.raiseRecoverable(s, "Redefinition of __proto__ property");
    }, A.checkYieldAwaitInDefaultParams = function() {
      if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) this.raise(this.yieldPos, "Yield expression cannot be a default value");
      if (this.awaitPos) this.raise(this.awaitPos, "Await expression cannot be a default value");
    }, A.isSimpleAssignTarget = function(e) {
      if (e.type === "ParenthesizedExpression") return this.isSimpleAssignTarget(e.expression);
      return e.type === "Identifier" || e.type === "MemberExpression";
    };
    var p = _.prototype;
    p.parseTopLevel = function(e) {
      var t = Object.create(null);
      if (!e.body) e.body = [];
      while (this.type !== a.eof) {
        var i = this.parseStatement(null, !0, t);
        e.body.push(i);
      }
      if (this.inModule) for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
        var n = r[s];
        this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
      }
      return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, 
      this.finishNode(e, "Program");
    };
    var Ee = {
      kind: "loop"
    }, Nt = {
      kind: "switch"
    };
    p.isLet = function(e) {
      if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
      S.lastIndex = this.pos;
      var t = S.exec(this.input), i = this.pos + t[0].length, s = this.input.charCodeAt(i);
      if (s === 91 || s === 92) return !0;
      if (e) return !1;
      if (s === 123 || s > 55295 && s < 56320) return !0;
      if (L(s, !0)) {
        var r = i + 1;
        while (B(s = this.input.charCodeAt(r), !0)) ++r;
        if (s === 92 || s > 55295 && s < 56320) return !0;
        var n = this.input.slice(i, r);
        if (!_t.test(n)) return !0;
      }
      return !1;
    }, p.isAsyncFunction = function() {
      if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
      S.lastIndex = this.pos;
      var e = S.exec(this.input), t = this.pos + e[0].length, i;
      return !w.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(B(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
    }, p.isUsingKeyword = function(e, t) {
      if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using")) return !1;
      S.lastIndex = this.pos;
      var i = S.exec(this.input), s = this.pos + i[0].length;
      if (w.test(this.input.slice(this.pos, s))) return !1;
      if (e) {
        var r = s + 5, n;
        if (this.input.slice(s, r) !== "using" || r === this.input.length || B(n = this.input.charCodeAt(r)) || n > 55295 && n < 56320) return !1;
        S.lastIndex = r;
        var u = S.exec(this.input);
        if (u && w.test(this.input.slice(r, r + u[0].length))) return !1;
      }
      if (t) {
        var o = s + 2, h;
        if (this.input.slice(s, o) === "of") {
          if (o === this.input.length || !B(h = this.input.charCodeAt(o)) && !(h > 55295 && h < 56320)) return !1;
        }
      }
      var l = this.input.charCodeAt(s);
      return L(l, !0) || l === 92;
    }, p.isAwaitUsing = function(e) {
      return this.isUsingKeyword(!0, e);
    }, p.isUsing = function(e) {
      return this.isUsingKeyword(!1, e);
    }, p.parseStatement = function(e, t, i) {
      var s = this.type, r = this.startNode(), n;
      if (this.isLet(e)) s = a._var, n = "let";
      switch (s) {
       case a._break:
       case a._continue:
        return this.parseBreakContinueStatement(r, s.keyword);

       case a._debugger:
        return this.parseDebuggerStatement(r);

       case a._do:
        return this.parseDoStatement(r);

       case a._for:
        return this.parseForStatement(r);

       case a._function:
        if (e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6) this.unexpected();
        return this.parseFunctionStatement(r, !1, !e);

       case a._class:
        if (e) this.unexpected();
        return this.parseClass(r, !0);

       case a._if:
        return this.parseIfStatement(r);

       case a._return:
        return this.parseReturnStatement(r);

       case a._switch:
        return this.parseSwitchStatement(r);

       case a._throw:
        return this.parseThrowStatement(r);

       case a._try:
        return this.parseTryStatement(r);

       case a._const:
       case a._var:
        if (n = n || this.value, e && n !== "var") this.unexpected();
        return this.parseVarStatement(r, n);

       case a._while:
        return this.parseWhileStatement(r);

       case a._with:
        return this.parseWithStatement(r);

       case a.braceL:
        return this.parseBlock(!0, r);

       case a.semi:
        return this.parseEmptyStatement(r);

       case a._export:
       case a._import:
        if (this.options.ecmaVersion > 10 && s === a._import) {
          S.lastIndex = this.pos;
          var u = S.exec(this.input), o = this.pos + u[0].length, h = this.input.charCodeAt(o);
          if (h === 40 || h === 46) return this.parseExpressionStatement(r, this.parseExpression());
        }
        if (!this.options.allowImportExportEverywhere) {
          if (!t) this.raise(this.start, "'import' and 'export' may only appear at the top level");
          if (!this.inModule) this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
        return s === a._import ? this.parseImport(r) : this.parseExport(r, i);

       default:
        if (this.isAsyncFunction()) {
          if (e) this.unexpected();
          return this.next(), this.parseFunctionStatement(r, !0, !e);
        }
        var l = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
        if (l) {
          if (t && this.options.sourceType === "script") this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`");
          if (l === "await using") {
            if (!this.canAwait) this.raise(this.start, "Await using cannot appear outside of async function");
            this.next();
          }
          return this.next(), this.parseVar(r, !1, l), this.semicolon(), this.finishNode(r, "VariableDeclaration");
        }
        var d = this.value, y = this.parseExpression();
        if (s === a.name && y.type === "Identifier" && this.eat(a.colon)) return this.parseLabeledStatement(r, d, y, e); else return this.parseExpressionStatement(r, y);
      }
    }, p.parseBreakContinueStatement = function(e, t) {
      var i = t === "break";
      if (this.next(), this.eat(a.semi) || this.insertSemicolon()) e.label = null; else if (this.type !== a.name) this.unexpected(); else e.label = this.parseIdent(), 
      this.semicolon();
      var s = 0;
      for (;s < this.labels.length; ++s) {
        var r = this.labels[s];
        if (e.label == null || r.name === e.label.name) {
          if (r.kind != null && (i || r.kind === "loop")) break;
          if (e.label && i) break;
        }
      }
      if (s === this.labels.length) this.raise(e.start, "Unsyntactic " + t);
      return this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
    }, p.parseDebuggerStatement = function(e) {
      return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
    }, p.parseDoStatement = function(e) {
      if (this.next(), this.labels.push(Ee), e.body = this.parseStatement("do"), this.labels.pop(), 
      this.expect(a._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6) this.eat(a.semi); else this.semicolon();
      return this.finishNode(e, "DoWhileStatement");
    }, p.parseForStatement = function(e) {
      this.next();
      var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
      if (this.labels.push(Ee), this.enterScope(0), this.expect(a.parenL), this.type === a.semi) {
        if (t > -1) this.unexpected(t);
        return this.parseFor(e, null);
      }
      var i = this.isLet();
      if (this.type === a._var || this.type === a._const || i) {
        var s = this.startNode(), r = i ? "let" : this.value;
        return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), 
        this.parseForAfterInit(e, s, t);
      }
      var n = this.isContextual("let"), u = !1, o = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
      if (o) {
        var h = this.startNode();
        if (this.next(), o === "await using") this.next();
        return this.parseVar(h, !0, o), this.finishNode(h, "VariableDeclaration"), this.parseForAfterInit(e, h, t);
      }
      var l = this.containsEsc, d = new pe, y = this.start, k = t > -1 ? this.parseExprSubscripts(d, "await") : this.parseExpression(!0, d);
      if (this.type === a._in || (u = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
        if (t > -1) {
          if (this.type === a._in) this.unexpected(t);
          e.await = !0;
        } else if (u && this.options.ecmaVersion >= 8) {
          if (k.start === y && !l && k.type === "Identifier" && k.name === "async") this.unexpected(); else if (this.options.ecmaVersion >= 9) e.await = !1;
        }
        if (n && u) this.raise(k.start, "The left-hand side of a for-of loop may not start with 'let'.");
        return this.toAssignable(k, !1, d), this.checkLValPattern(k), this.parseForIn(e, k);
      } else this.checkExpressionErrors(d, !0);
      if (t > -1) this.unexpected(t);
      return this.parseFor(e, k);
    }, p.parseForAfterInit = function(e, t, i) {
      if ((this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) if (this.type === a._in) {
          if (i > -1) this.unexpected(i);
        } else e.await = i > -1;
        return this.parseForIn(e, t);
      }
      if (i > -1) this.unexpected(i);
      return this.parseFor(e, t);
    }, p.parseFunctionStatement = function(e, t, i) {
      return this.next(), this.parseFunction(e, ie | (i ? 0 : Pe), !1, t);
    }, p.parseIfStatement = function(e) {
      return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), 
      e.alternate = this.eat(a._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
    }, p.parseReturnStatement = function(e) {
      if (!this.inFunction && !this.options.allowReturnOutsideFunction) this.raise(this.start, "'return' outside of function");
      if (this.next(), this.eat(a.semi) || this.insertSemicolon()) e.argument = null; else e.argument = this.parseExpression(), 
      this.semicolon();
      return this.finishNode(e, "ReturnStatement");
    }, p.parseSwitchStatement = function(e) {
      this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(a.braceL), 
      this.labels.push(Nt), this.enterScope(0);
      var t;
      for (var i = !1; this.type !== a.braceR; ) if (this.type === a._case || this.type === a._default) {
        var s = this.type === a._case;
        if (t) this.finishNode(t, "SwitchCase");
        if (e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s) t.test = this.parseExpression(); else {
          if (i) this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
          i = !0, t.test = null;
        }
        this.expect(a.colon);
      } else {
        if (!t) this.unexpected();
        t.consequent.push(this.parseStatement(null));
      }
      if (this.exitScope(), t) this.finishNode(t, "SwitchCase");
      return this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
    }, p.parseThrowStatement = function(e) {
      if (this.next(), w.test(this.input.slice(this.lastTokEnd, this.start))) this.raise(this.lastTokEnd, "Illegal newline after throw");
      return e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
    };
    var Vt = [];
    p.parseCatchClauseParam = function() {
      var e = this.parseBindingAtom(), t = e.type === "Identifier";
      return this.enterScope(t ? qe : 0), this.checkLValPattern(e, t ? He : F), this.expect(a.parenR), 
      e;
    }, p.parseTryStatement = function(e) {
      if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === a._catch) {
        var t = this.startNode();
        if (this.next(), this.eat(a.parenL)) t.param = this.parseCatchClauseParam(); else {
          if (this.options.ecmaVersion < 10) this.unexpected();
          t.param = null, this.enterScope(0);
        }
        t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
      }
      if (e.finalizer = this.eat(a._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer) this.raise(e.start, "Missing catch or finally clause");
      return this.finishNode(e, "TryStatement");
    }, p.parseVarStatement = function(e, t, i) {
      return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
    }, p.parseWhileStatement = function(e) {
      return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ee), 
      e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
    }, p.parseWithStatement = function(e) {
      if (this.strict) this.raise(this.start, "'with' in strict mode");
      return this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), 
      this.finishNode(e, "WithStatement");
    }, p.parseEmptyStatement = function(e) {
      return this.next(), this.finishNode(e, "EmptyStatement");
    }, p.parseLabeledStatement = function(e, t, i, s) {
      for (var r = 0, n = this.labels; r < n.length; r += 1) {
        var u = n[r];
        if (u.name === t) this.raise(i.start, "Label '" + t + "' is already declared");
      }
      var o = this.type.isLoop ? "loop" : this.type === a._switch ? "switch" : null;
      for (var h = this.labels.length - 1; h >= 0; h--) {
        var l = this.labels[h];
        if (l.statementStart === e.start) l.statementStart = this.start, l.kind = o; else break;
      }
      return this.labels.push({
        name: t,
        kind: o,
        statementStart: this.start
      }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), 
      this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
    }, p.parseExpressionStatement = function(e, t) {
      return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
    }, p.parseBlock = function(e, t, i) {
      if (e === void 0) e = !0;
      if (t === void 0) t = this.startNode();
      if (t.body = [], this.expect(a.braceL), e) this.enterScope(0);
      while (this.type !== a.braceR) {
        var s = this.parseStatement(null);
        t.body.push(s);
      }
      if (i) this.strict = !1;
      if (this.next(), e) this.exitScope();
      return this.finishNode(t, "BlockStatement");
    }, p.parseFor = function(e, t) {
      return e.init = t, this.expect(a.semi), e.test = this.type === a.semi ? null : this.parseExpression(), 
      this.expect(a.semi), e.update = this.type === a.parenR ? null : this.parseExpression(), 
      this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), 
      this.finishNode(e, "ForStatement");
    }, p.parseForIn = function(e, t) {
      var i = this.type === a._in;
      if (this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier")) this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
      return e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), 
      this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), 
      this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
    }, p.parseVar = function(e, t, i, s) {
      e.declarations = [], e.kind = i;
      for (;;) {
        var r = this.startNode();
        if (this.parseVarId(r, i), this.eat(a.eq)) r.init = this.parseMaybeAssign(t); else if (!s && i === "const" && !(this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) this.unexpected(); else if (!s && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== a._in && !this.isContextual("of")) this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration"); else if (!s && r.id.type !== "Identifier" && !(t && (this.type === a._in || this.isContextual("of")))) this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value"); else r.init = null;
        if (e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(a.comma)) break;
      }
      return e;
    }, p.parseVarId = function(e, t) {
      e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), 
      this.checkLValPattern(e.id, t === "var" ? Ie : F, !1);
    };
    var ie = 1, Pe = 2, ze = 4;
    p.parseFunction = function(e, t, i, s, r) {
      if (this.initFunction(e), this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) {
        if (this.type === a.star && t & Pe) this.unexpected();
        e.generator = this.eat(a.star);
      }
      if (this.options.ecmaVersion >= 8) e.async = !!s;
      if (t & ie) {
        if (e.id = t & ze && this.type !== a.name ? null : this.parseIdent(), e.id && !(t & Pe)) this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Ie : F : Ge);
      }
      var n = this.yieldPos, u = this.awaitPos, o = this.awaitIdentPos;
      if (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ae(e.async, e.generator)), 
      !(t & ie)) e.id = this.type === a.name ? this.parseIdent() : null;
      return this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, r), this.yieldPos = n, 
      this.awaitPos = u, this.awaitIdentPos = o, this.finishNode(e, t & ie ? "FunctionDeclaration" : "FunctionExpression");
    }, p.parseFunctionParams = function(e) {
      this.expect(a.parenL), e.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8), 
      this.checkYieldAwaitInDefaultParams();
    }, p.parseClass = function(e, t) {
      this.next();
      var i = this.strict;
      this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
      var s = this.enterClassBody(), r = this.startNode(), n = !1;
      r.body = [], this.expect(a.braceL);
      while (this.type !== a.braceR) {
        var u = this.parseClassElement(e.superClass !== null);
        if (u) {
          if (r.body.push(u), u.type === "MethodDefinition" && u.kind === "constructor") {
            if (n) this.raiseRecoverable(u.start, "Duplicate constructor in the same class");
            n = !0;
          } else if (u.key && u.key.type === "PrivateIdentifier" && Tt(s, u)) this.raiseRecoverable(u.key.start, "Identifier '#" + u.key.name + "' has already been declared");
        }
      }
      return this.strict = i, this.next(), e.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), 
      this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
    }, p.parseClassElement = function(e) {
      if (this.eat(a.semi)) return null;
      var t = this.options.ecmaVersion, i = this.startNode(), s = "", r = !1, n = !1, u = "method", o = !1;
      if (this.eatContextual("static")) {
        if (t >= 13 && this.eat(a.braceL)) return this.parseClassStaticBlock(i), i;
        if (this.isClassElementNameStart() || this.type === a.star) o = !0; else s = "static";
      }
      if (i.static = o, !s && t >= 8 && this.eatContextual("async")) if ((this.isClassElementNameStart() || this.type === a.star) && !this.canInsertSemicolon()) n = !0; else s = "async";
      if (!s && (t >= 9 || !n) && this.eat(a.star)) r = !0;
      if (!s && !n && !r) {
        var h = this.value;
        if (this.eatContextual("get") || this.eatContextual("set")) if (this.isClassElementNameStart()) u = h; else s = h;
      }
      if (s) i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), 
      i.key.name = s, this.finishNode(i.key, "Identifier"); else this.parseClassElementName(i);
      if (t < 13 || this.type === a.parenL || u !== "method" || r || n) {
        var l = !i.static && le(i, "constructor"), d = l && e;
        if (l && u !== "method") this.raise(i.key.start, "Constructor can't have get/set modifier");
        i.kind = l ? "constructor" : u, this.parseClassMethod(i, r, n, d);
      } else this.parseClassField(i);
      return i;
    }, p.isClassElementNameStart = function() {
      return this.type === a.name || this.type === a.privateId || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword;
    }, p.parseClassElementName = function(e) {
      if (this.type === a.privateId) {
        if (this.value === "constructor") this.raise(this.start, "Classes can't have an element named '#constructor'");
        e.computed = !1, e.key = this.parsePrivateIdent();
      } else this.parsePropertyName(e);
    }, p.parseClassMethod = function(e, t, i, s) {
      var r = e.key;
      if (e.kind === "constructor") {
        if (t) this.raise(r.start, "Constructor can't be a generator");
        if (i) this.raise(r.start, "Constructor can't be an async method");
      } else if (e.static && le(e, "prototype")) this.raise(r.start, "Classes may not have a static property named prototype");
      var n = e.value = this.parseMethod(t, i, s);
      if (e.kind === "get" && n.params.length !== 0) this.raiseRecoverable(n.start, "getter should have no params");
      if (e.kind === "set" && n.params.length !== 1) this.raiseRecoverable(n.start, "setter should have exactly one param");
      if (e.kind === "set" && n.params[0].type === "RestElement") this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params");
      return this.finishNode(e, "MethodDefinition");
    }, p.parseClassField = function(e) {
      if (le(e, "constructor")) this.raise(e.key.start, "Classes can't have a field named 'constructor'"); else if (e.static && le(e, "prototype")) this.raise(e.key.start, "Classes can't have a static field named 'prototype'");
      if (this.eat(a.eq)) this.enterScope(te | oe), e.value = this.parseMaybeAssign(), 
      this.exitScope(); else e.value = null;
      return this.semicolon(), this.finishNode(e, "PropertyDefinition");
    }, p.parseClassStaticBlock = function(e) {
      e.body = [];
      var t = this.labels;
      this.labels = [], this.enterScope(G | oe);
      while (this.type !== a.braceR) {
        var i = this.parseStatement(null);
        e.body.push(i);
      }
      return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
    }, p.parseClassId = function(e, t) {
      if (this.type === a.name) {
        if (e.id = this.parseIdent(), t) this.checkLValSimple(e.id, F, !1);
      } else {
        if (t === !0) this.unexpected();
        e.id = null;
      }
    }, p.parseClassSuper = function(e) {
      e.superClass = this.eat(a._extends) ? this.parseExprSubscripts(null, !1) : null;
    }, p.enterClassBody = function() {
      var e = {
        declared: Object.create(null),
        used: []
      };
      return this.privateNameStack.push(e), e.declared;
    }, p.exitClassBody = function() {
      var e = this.privateNameStack.pop(), {declared: t, used: i} = e;
      if (!this.options.checkPrivateFields) return;
      var s = this.privateNameStack.length, r = s === 0 ? null : this.privateNameStack[s - 1];
      for (var n = 0; n < i.length; ++n) {
        var u = i[n];
        if (!H(t, u.name)) if (r) r.used.push(u); else this.raiseRecoverable(u.start, "Private field '#" + u.name + "' must be declared in an enclosing class");
      }
    };
    function Tt(e, t) {
      var i = t.key.name, s = e[i], r = "true";
      if (t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set")) r = (t.static ? "s" : "i") + t.kind;
      if (s === "iget" && r === "iset" || s === "iset" && r === "iget" || s === "sget" && r === "sset" || s === "sset" && r === "sget") return e[i] = "true", 
      !1; else if (!s) return e[i] = r, !1; else return !0;
    }
    function le(e, t) {
      var {computed: i, key: s} = e;
      return !i && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
    }
    p.parseExportAllDeclaration = function(e, t) {
      if (this.options.ecmaVersion >= 11) if (this.eatContextual("as")) e.exported = this.parseModuleExportName(), 
      this.checkExport(t, e.exported, this.lastTokStart); else e.exported = null;
      if (this.expectContextual("from"), this.type !== a.string) this.unexpected();
      if (e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
      return this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
    }, p.parseExport = function(e, t) {
      if (this.next(), this.eat(a.star)) return this.parseExportAllDeclaration(e, t);
      if (this.eat(a._default)) return this.checkExport(t, "default", this.lastTokStart), 
      e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
      if (this.shouldParseExportStatement()) {
        if (e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration") this.checkVariableExport(t, e.declaration.declarations); else this.checkExport(t, e.declaration.id, e.declaration.id.start);
        if (e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16) e.attributes = [];
      } else {
        if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) {
          if (this.type !== a.string) this.unexpected();
          if (e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
        } else {
          for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
            var r = s[i];
            if (this.checkUnreserved(r.local), this.checkLocalExport(r.local), r.local.type === "Literal") this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
          }
          if (e.source = null, this.options.ecmaVersion >= 16) e.attributes = [];
        }
        this.semicolon();
      }
      return this.finishNode(e, "ExportNamedDeclaration");
    }, p.parseExportDeclaration = function(e) {
      return this.parseStatement(null);
    }, p.parseExportDefaultDeclaration = function() {
      var e;
      if (this.type === a._function || (e = this.isAsyncFunction())) {
        var t = this.startNode();
        if (this.next(), e) this.next();
        return this.parseFunction(t, ie | ze, !1, e);
      } else if (this.type === a._class) {
        var i = this.startNode();
        return this.parseClass(i, "nullableID");
      } else {
        var s = this.parseMaybeAssign();
        return this.semicolon(), s;
      }
    }, p.checkExport = function(e, t, i) {
      if (!e) return;
      if (typeof t !== "string") t = t.type === "Identifier" ? t.name : t.value;
      if (H(e, t)) this.raiseRecoverable(i, "Duplicate export '" + t + "'");
      e[t] = !0;
    }, p.checkPatternExport = function(e, t) {
      var i = t.type;
      if (i === "Identifier") this.checkExport(e, t, t.start); else if (i === "ObjectPattern") for (var s = 0, r = t.properties; s < r.length; s += 1) {
        var n = r[s];
        this.checkPatternExport(e, n);
      } else if (i === "ArrayPattern") for (var u = 0, o = t.elements; u < o.length; u += 1) {
        var h = o[u];
        if (h) this.checkPatternExport(e, h);
      } else if (i === "Property") this.checkPatternExport(e, t.value); else if (i === "AssignmentPattern") this.checkPatternExport(e, t.left); else if (i === "RestElement") this.checkPatternExport(e, t.argument);
    }, p.checkVariableExport = function(e, t) {
      if (!e) return;
      for (var i = 0, s = t; i < s.length; i += 1) {
        var r = s[i];
        this.checkPatternExport(e, r.id);
      }
    }, p.shouldParseExportStatement = function() {
      return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
    }, p.parseExportSpecifier = function(e) {
      var t = this.startNode();
      return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, 
      this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
    }, p.parseExportSpecifiers = function(e) {
      var t = [], i = !0;
      this.expect(a.braceL);
      while (!this.eat(a.braceR)) {
        if (!i) {
          if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
        } else i = !1;
        t.push(this.parseExportSpecifier(e));
      }
      return t;
    }, p.parseImport = function(e) {
      if (this.next(), this.type === a.string) e.specifiers = Vt, e.source = this.parseExprAtom(); else e.specifiers = this.parseImportSpecifiers(), 
      this.expectContextual("from"), e.source = this.type === a.string ? this.parseExprAtom() : this.unexpected();
      if (this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
      return this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }, p.parseImportSpecifier = function() {
      var e = this.startNode();
      if (e.imported = this.parseModuleExportName(), this.eatContextual("as")) e.local = this.parseIdent(); else this.checkUnreserved(e.imported), 
      e.local = e.imported;
      return this.checkLValSimple(e.local, F), this.finishNode(e, "ImportSpecifier");
    }, p.parseImportDefaultSpecifier = function() {
      var e = this.startNode();
      return e.local = this.parseIdent(), this.checkLValSimple(e.local, F), this.finishNode(e, "ImportDefaultSpecifier");
    }, p.parseImportNamespaceSpecifier = function() {
      var e = this.startNode();
      return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, F), 
      this.finishNode(e, "ImportNamespaceSpecifier");
    }, p.parseImportSpecifiers = function() {
      var e = [], t = !0;
      if (this.type === a.name) {
        if (e.push(this.parseImportDefaultSpecifier()), !this.eat(a.comma)) return e;
      }
      if (this.type === a.star) return e.push(this.parseImportNamespaceSpecifier()), e;
      this.expect(a.braceL);
      while (!this.eat(a.braceR)) {
        if (!t) {
          if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
        } else t = !1;
        e.push(this.parseImportSpecifier());
      }
      return e;
    }, p.parseWithClause = function() {
      var e = [];
      if (!this.eat(a._with)) return e;
      this.expect(a.braceL);
      var t = {}, i = !0;
      while (!this.eat(a.braceR)) {
        if (!i) {
          if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
        } else i = !1;
        var s = this.parseImportAttribute(), r = s.key.type === "Identifier" ? s.key.name : s.key.value;
        if (H(t, r)) this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + r + "'");
        t[r] = !0, e.push(s);
      }
      return e;
    }, p.parseImportAttribute = function() {
      var e = this.startNode();
      if (e.key = this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), 
      this.expect(a.colon), this.type !== a.string) this.unexpected();
      return e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
    }, p.parseModuleExportName = function() {
      if (this.options.ecmaVersion >= 13 && this.type === a.string) {
        var e = this.parseLiteral(this.value);
        if (At.test(e.value)) this.raise(e.start, "An export name cannot include a lone surrogate.");
        return e;
      }
      return this.parseIdent(!0);
    }, p.adaptDirectivePrologue = function(e) {
      for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
    }, p.isDirectiveCandidate = function(e) {
      return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value === "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
    };
    var N = _.prototype;
    N.toAssignable = function(e, t, i) {
      if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
       case "Identifier":
        if (this.inAsync && e.name === "await") this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;

       case "ObjectPattern":
       case "ArrayPattern":
       case "AssignmentPattern":
       case "RestElement":
        break;

       case "ObjectExpression":
        if (e.type = "ObjectPattern", i) this.checkPatternErrors(i, !0);
        for (var s = 0, r = e.properties; s < r.length; s += 1) {
          var n = r[s];
          if (this.toAssignable(n, t), n.type === "RestElement" && (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern")) this.raise(n.argument.start, "Unexpected token");
        }
        break;

       case "Property":
        if (e.kind !== "init") this.raise(e.key.start, "Object pattern can't contain getter or setter");
        this.toAssignable(e.value, t);
        break;

       case "ArrayExpression":
        if (e.type = "ArrayPattern", i) this.checkPatternErrors(i, !0);
        this.toAssignableList(e.elements, t);
        break;

       case "SpreadElement":
        if (e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern") this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;

       case "AssignmentExpression":
        if (e.operator !== "=") this.raise(e.left.end, "Only '=' operator can be used for specifying default value.");
        e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;

       case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, i);
        break;

       case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;

       case "MemberExpression":
        if (!t) break;

       default:
        this.raise(e.start, "Assigning to rvalue");
      } else if (i) this.checkPatternErrors(i, !0);
      return e;
    }, N.toAssignableList = function(e, t) {
      var i = e.length;
      for (var s = 0; s < i; s++) {
        var r = e[s];
        if (r) this.toAssignable(r, t);
      }
      if (i) {
        var n = e[i - 1];
        if (this.options.ecmaVersion === 6 && t && n && n.type === "RestElement" && n.argument.type !== "Identifier") this.unexpected(n.argument.start);
      }
      return e;
    }, N.parseSpread = function(e) {
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
    }, N.parseRestBinding = function() {
      var e = this.startNode();
      if (this.next(), this.options.ecmaVersion === 6 && this.type !== a.name) this.unexpected();
      return e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
    }, N.parseBindingAtom = function() {
      if (this.options.ecmaVersion >= 6) switch (this.type) {
       case a.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(a.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");

       case a.braceL:
        return this.parseObj(!0);
      }
      return this.parseIdent();
    }, N.parseBindingList = function(e, t, i, s) {
      var r = [], n = !0;
      while (!this.eat(e)) {
        if (n) n = !1; else this.expect(a.comma);
        if (t && this.type === a.comma) r.push(null); else if (i && this.afterTrailingComma(e)) break; else if (this.type === a.ellipsis) {
          var u = this.parseRestBinding();
          if (this.parseBindingListItem(u), r.push(u), this.type === a.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          this.expect(e);
          break;
        } else r.push(this.parseAssignableListItem(s));
      }
      return r;
    }, N.parseAssignableListItem = function(e) {
      var t = this.parseMaybeDefault(this.start, this.startLoc);
      return this.parseBindingListItem(t), t;
    }, N.parseBindingListItem = function(e) {
      return e;
    }, N.parseMaybeDefault = function(e, t, i) {
      if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(a.eq)) return i;
      var s = this.startNodeAt(e, t);
      return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
    }, N.checkLValSimple = function(e, t, i) {
      if (t === void 0) t = ce;
      var s = t !== ce;
      switch (e.type) {
       case "Identifier":
        if (this.strict && this.reservedWordsStrictBind.test(e.name)) this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode");
        if (s) {
          if (t === F && e.name === "let") this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name");
          if (i) {
            if (H(i, e.name)) this.raiseRecoverable(e.start, "Argument name clash");
            i[e.name] = !0;
          }
          if (t !== We) this.declareName(e.name, t, e.start);
        }
        break;

       case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;

       case "MemberExpression":
        if (s) this.raiseRecoverable(e.start, "Binding member expression");
        break;

       case "ParenthesizedExpression":
        if (s) this.raiseRecoverable(e.start, "Binding parenthesized expression");
        return this.checkLValSimple(e.expression, t, i);

       default:
        this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
      }
    }, N.checkLValPattern = function(e, t, i) {
      if (t === void 0) t = ce;
      switch (e.type) {
       case "ObjectPattern":
        for (var s = 0, r = e.properties; s < r.length; s += 1) {
          var n = r[s];
          this.checkLValInnerPattern(n, t, i);
        }
        break;

       case "ArrayPattern":
        for (var u = 0, o = e.elements; u < o.length; u += 1) {
          var h = o[u];
          if (h) this.checkLValInnerPattern(h, t, i);
        }
        break;

       default:
        this.checkLValSimple(e, t, i);
      }
    }, N.checkLValInnerPattern = function(e, t, i) {
      if (t === void 0) t = ce;
      switch (e.type) {
       case "Property":
        this.checkLValInnerPattern(e.value, t, i);
        break;

       case "AssignmentPattern":
        this.checkLValPattern(e.left, t, i);
        break;

       case "RestElement":
        this.checkLValPattern(e.argument, t, i);
        break;

       default:
        this.checkLValPattern(e, t, i);
      }
    };
    var V = function(t, i, s, r, n) {
      this.token = t, this.isExpr = !!i, this.preserveSpace = !!s, this.override = r, 
      this.generator = !!n;
    }, b = {
      b_stat: new V("{", !1),
      b_expr: new V("{", !0),
      b_tmpl: new V("${", !1),
      p_stat: new V("(", !1),
      p_expr: new V("(", !0),
      q_tmpl: new V("`", !0, !0, function(e) {
        return e.tryReadTemplateToken();
      }),
      f_stat: new V("function", !1),
      f_expr: new V("function", !0),
      f_expr_gen: new V("function", !0, !1, null, !0),
      f_gen: new V("function", !1, !1, null, !0)
    }, K = _.prototype;
    K.initialContext = function() {
      return [ b.b_stat ];
    }, K.curContext = function() {
      return this.context[this.context.length - 1];
    }, K.braceIsBlock = function(e) {
      var t = this.curContext();
      if (t === b.f_expr || t === b.f_stat) return !0;
      if (e === a.colon && (t === b.b_stat || t === b.b_expr)) return !t.isExpr;
      if (e === a._return || e === a.name && this.exprAllowed) return w.test(this.input.slice(this.lastTokEnd, this.start));
      if (e === a._else || e === a.semi || e === a.eof || e === a.parenR || e === a.arrow) return !0;
      if (e === a.braceL) return t === b.b_stat;
      if (e === a._var || e === a._const || e === a.name) return !1;
      return !this.exprAllowed;
    }, K.inGeneratorContext = function() {
      for (var e = this.context.length - 1; e >= 1; e--) {
        var t = this.context[e];
        if (t.token === "function") return t.generator;
      }
      return !1;
    }, K.updateContext = function(e) {
      var t, i = this.type;
      if (i.keyword && e === a.dot) this.exprAllowed = !1; else if (t = i.updateContext) t.call(this, e); else this.exprAllowed = i.beforeExpr;
    }, K.overrideContext = function(e) {
      if (this.curContext() !== e) this.context[this.context.length - 1] = e;
    }, a.parenR.updateContext = a.braceR.updateContext = function() {
      if (this.context.length === 1) {
        this.exprAllowed = !0;
        return;
      }
      var e = this.context.pop();
      if (e === b.b_stat && this.curContext().token === "function") e = this.context.pop();
      this.exprAllowed = !e.isExpr;
    }, a.braceL.updateContext = function(e) {
      this.context.push(this.braceIsBlock(e) ? b.b_stat : b.b_expr), this.exprAllowed = !0;
    }, a.dollarBraceL.updateContext = function() {
      this.context.push(b.b_tmpl), this.exprAllowed = !0;
    }, a.parenL.updateContext = function(e) {
      var t = e === a._if || e === a._for || e === a._with || e === a._while;
      this.context.push(t ? b.p_stat : b.p_expr), this.exprAllowed = !0;
    }, a.incDec.updateContext = function() {}, a._function.updateContext = a._class.updateContext = function(e) {
      if (e.beforeExpr && e !== a._else && !(e === a.semi && this.curContext() !== b.p_stat) && !(e === a._return && w.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === a.colon || e === a.braceL) && this.curContext() === b.b_stat)) this.context.push(b.f_expr); else this.context.push(b.f_stat);
      this.exprAllowed = !1;
    }, a.colon.updateContext = function() {
      if (this.curContext().token === "function") this.context.pop();
      this.exprAllowed = !0;
    }, a.backQuote.updateContext = function() {
      if (this.curContext() === b.q_tmpl) this.context.pop(); else this.context.push(b.q_tmpl);
      this.exprAllowed = !1;
    }, a.star.updateContext = function(e) {
      if (e === a._function) {
        var t = this.context.length - 1;
        if (this.context[t] === b.f_expr) this.context[t] = b.f_expr_gen; else this.context[t] = b.f_gen;
      }
      this.exprAllowed = !0;
    }, a.name.updateContext = function(e) {
      var t = !1;
      if (this.options.ecmaVersion >= 6 && e !== a.dot) {
        if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) t = !0;
      }
      this.exprAllowed = t;
    };
    var f = _.prototype;
    f.checkPropClash = function(e, t, i) {
      if (this.options.ecmaVersion >= 9 && e.type === "SpreadElement") return;
      if (this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand)) return;
      var s = e.key, r;
      switch (s.type) {
       case "Identifier":
        r = s.name;
        break;

       case "Literal":
        r = String(s.value);
        break;

       default:
        return;
      }
      var n = e.kind;
      if (this.options.ecmaVersion >= 6) {
        if (r === "__proto__" && n === "init") {
          if (t.proto) if (i) {
            if (i.doubleProto < 0) i.doubleProto = s.start;
          } else this.raiseRecoverable(s.start, "Redefinition of __proto__ property");
          t.proto = !0;
        }
        return;
      }
      r = "$" + r;
      var u = t[r];
      if (u) {
        var o;
        if (n === "init") o = this.strict && u.init || u.get || u.set; else o = u.init || u[n];
        if (o) this.raiseRecoverable(s.start, "Redefinition of property");
      } else u = t[r] = {
        init: !1,
        get: !1,
        set: !1
      };
      u[n] = !0;
    }, f.parseExpression = function(e, t) {
      var i = this.start, s = this.startLoc, r = this.parseMaybeAssign(e, t);
      if (this.type === a.comma) {
        var n = this.startNodeAt(i, s);
        n.expressions = [ r ];
        while (this.eat(a.comma)) n.expressions.push(this.parseMaybeAssign(e, t));
        return this.finishNode(n, "SequenceExpression");
      }
      return r;
    }, f.parseMaybeAssign = function(e, t, i) {
      if (this.isContextual("yield")) if (this.inGenerator) return this.parseYield(e); else this.exprAllowed = !1;
      var s = !1, r = -1, n = -1, u = -1;
      if (t) r = t.parenthesizedAssign, n = t.trailingComma, u = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1; else t = new pe, 
      s = !0;
      var o = this.start, h = this.startLoc;
      if (this.type === a.parenL || this.type === a.name) this.potentialArrowAt = this.start, 
      this.potentialArrowInForAwait = e === "await";
      var l = this.parseMaybeConditional(e, t);
      if (i) l = i.call(this, l, o, h);
      if (this.type.isAssign) {
        var d = this.startNodeAt(o, h);
        if (d.operator = this.value, this.type === a.eq) l = this.toAssignable(l, !1, t);
        if (!s) t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1;
        if (t.shorthandAssign >= l.start) t.shorthandAssign = -1;
        if (this.type === a.eq) this.checkLValPattern(l); else this.checkLValSimple(l);
        if (d.left = l, this.next(), d.right = this.parseMaybeAssign(e), u > -1) t.doubleProto = u;
        return this.finishNode(d, "AssignmentExpression");
      } else if (s) this.checkExpressionErrors(t, !0);
      if (r > -1) t.parenthesizedAssign = r;
      if (n > -1) t.trailingComma = n;
      return l;
    }, f.parseMaybeConditional = function(e, t) {
      var i = this.start, s = this.startLoc, r = this.parseExprOps(e, t);
      if (this.checkExpressionErrors(t)) return r;
      if (this.eat(a.question)) {
        var n = this.startNodeAt(i, s);
        return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(a.colon), 
        n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
      }
      return r;
    }, f.parseExprOps = function(e, t) {
      var i = this.start, s = this.startLoc, r = this.parseMaybeUnary(t, !1, !1, e);
      if (this.checkExpressionErrors(t)) return r;
      return r.start === i && r.type === "ArrowFunctionExpression" ? r : this.parseExprOp(r, i, s, -1, e);
    }, f.parseExprOp = function(e, t, i, s, r) {
      var n = this.type.binop;
      if (n != null && (!r || this.type !== a._in)) {
        if (n > s) {
          var u = this.type === a.logicalOR || this.type === a.logicalAND, o = this.type === a.coalesce;
          if (o) n = a.logicalAND.binop;
          var h = this.value;
          this.next();
          var l = this.start, d = this.startLoc, y = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), l, d, n, r), k = this.buildBinary(t, i, e, y, h, u || o);
          if (u && this.type === a.coalesce || o && (this.type === a.logicalOR || this.type === a.logicalAND)) this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
          return this.parseExprOp(k, t, i, s, r);
        }
      }
      return e;
    }, f.buildBinary = function(e, t, i, s, r, n) {
      if (s.type === "PrivateIdentifier") this.raise(s.start, "Private identifier can only be left side of binary expression");
      var u = this.startNodeAt(e, t);
      return u.left = i, u.operator = r, u.right = s, this.finishNode(u, n ? "LogicalExpression" : "BinaryExpression");
    }, f.parseMaybeUnary = function(e, t, i, s) {
      var r = this.start, n = this.startLoc, u;
      if (this.isContextual("await") && this.canAwait) u = this.parseAwait(s), t = !0; else if (this.type.prefix) {
        var o = this.startNode(), h = this.type === a.incDec;
        if (o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, h, s), 
        this.checkExpressionErrors(e, !0), h) this.checkLValSimple(o.argument); else if (this.strict && o.operator === "delete" && Ke(o.argument)) this.raiseRecoverable(o.start, "Deleting local variable in strict mode"); else if (o.operator === "delete" && Ne(o.argument)) this.raiseRecoverable(o.start, "Private fields can not be deleted"); else t = !0;
        u = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression");
      } else if (!t && this.type === a.privateId) {
        if ((s || this.privateNameStack.length === 0) && this.options.checkPrivateFields) this.unexpected();
        if (u = this.parsePrivateIdent(), this.type !== a._in) this.unexpected();
      } else {
        if (u = this.parseExprSubscripts(e, s), this.checkExpressionErrors(e)) return u;
        while (this.type.postfix && !this.canInsertSemicolon()) {
          var l = this.startNodeAt(r, n);
          l.operator = this.value, l.prefix = !1, l.argument = u, this.checkLValSimple(u), 
          this.next(), u = this.finishNode(l, "UpdateExpression");
        }
      }
      if (!i && this.eat(a.starstar)) if (t) this.unexpected(this.lastTokStart); else return this.buildBinary(r, n, u, this.parseMaybeUnary(null, !1, !1, s), "**", !1); else return u;
    };
    function Ke(e) {
      return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Ke(e.expression);
    }
    function Ne(e) {
      return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Ne(e.expression) || e.type === "ParenthesizedExpression" && Ne(e.expression);
    }
    f.parseExprSubscripts = function(e, t) {
      var i = this.start, s = this.startLoc, r = this.parseExprAtom(e, t);
      if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
      var n = this.parseSubscripts(r, i, s, !1, t);
      if (e && n.type === "MemberExpression") {
        if (e.parenthesizedAssign >= n.start) e.parenthesizedAssign = -1;
        if (e.parenthesizedBind >= n.start) e.parenthesizedBind = -1;
        if (e.trailingComma >= n.start) e.trailingComma = -1;
      }
      return n;
    }, f.parseSubscripts = function(e, t, i, s, r) {
      var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, u = !1;
      while (!0) {
        var o = this.parseSubscript(e, t, i, s, n, u, r);
        if (o.optional) u = !0;
        if (o === e || o.type === "ArrowFunctionExpression") {
          if (u) {
            var h = this.startNodeAt(t, i);
            h.expression = o, o = this.finishNode(h, "ChainExpression");
          }
          return o;
        }
        e = o;
      }
    }, f.shouldParseAsyncArrow = function() {
      return !this.canInsertSemicolon() && this.eat(a.arrow);
    }, f.parseSubscriptAsyncArrow = function(e, t, i, s) {
      return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, s);
    }, f.parseSubscript = function(e, t, i, s, r, n, u) {
      var o = this.options.ecmaVersion >= 11, h = o && this.eat(a.questionDot);
      if (s && h) this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
      var l = this.eat(a.bracketL);
      if (l || h && this.type !== a.parenL && this.type !== a.backQuote || this.eat(a.dot)) {
        var d = this.startNodeAt(t, i);
        if (d.object = e, l) d.property = this.parseExpression(), this.expect(a.bracketR); else if (this.type === a.privateId && e.type !== "Super") d.property = this.parsePrivateIdent(); else d.property = this.parseIdent(this.options.allowReserved !== "never");
        if (d.computed = !!l, o) d.optional = h;
        e = this.finishNode(d, "MemberExpression");
      } else if (!s && this.eat(a.parenL)) {
        var y = new pe, k = this.yieldPos, re = this.awaitPos, Q = this.awaitIdentPos;
        this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
        var ve = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1, y);
        if (r && !h && this.shouldParseAsyncArrow()) {
          if (this.checkPatternErrors(y, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0) this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
          return this.yieldPos = k, this.awaitPos = re, this.awaitIdentPos = Q, this.parseSubscriptAsyncArrow(t, i, ve, u);
        }
        this.checkExpressionErrors(y, !0), this.yieldPos = k || this.yieldPos, this.awaitPos = re || this.awaitPos, 
        this.awaitIdentPos = Q || this.awaitIdentPos;
        var Y = this.startNodeAt(t, i);
        if (Y.callee = e, Y.arguments = ve, o) Y.optional = h;
        e = this.finishNode(Y, "CallExpression");
      } else if (this.type === a.backQuote) {
        if (h || n) this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
        var X = this.startNodeAt(t, i);
        X.tag = e, X.quasi = this.parseTemplate({
          isTagged: !0
        }), e = this.finishNode(X, "TaggedTemplateExpression");
      }
      return e;
    }, f.parseExprAtom = function(e, t, i) {
      if (this.type === a.slash) this.readRegexp();
      var s, r = this.potentialArrowAt === this.start;
      switch (this.type) {
       case a._super:
        if (!this.allowSuper) this.raise(this.start, "'super' keyword outside a method");
        if (s = this.startNode(), this.next(), this.type === a.parenL && !this.allowDirectSuper) this.raise(s.start, "super() call outside constructor of a subclass");
        if (this.type !== a.dot && this.type !== a.bracketL && this.type !== a.parenL) this.unexpected();
        return this.finishNode(s, "Super");

       case a._this:
        return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");

       case a.name:
        var n = this.start, u = this.startLoc, o = this.containsEsc, h = this.parseIdent(!1);
        if (this.options.ecmaVersion >= 8 && !o && h.name === "async" && !this.canInsertSemicolon() && this.eat(a._function)) return this.overrideContext(b.f_expr), 
        this.parseFunction(this.startNodeAt(n, u), 0, !1, !0, t);
        if (r && !this.canInsertSemicolon()) {
          if (this.eat(a.arrow)) return this.parseArrowExpression(this.startNodeAt(n, u), [ h ], !1, t);
          if (this.options.ecmaVersion >= 8 && h.name === "async" && this.type === a.name && !o && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
            if (h = this.parseIdent(!1), this.canInsertSemicolon() || !this.eat(a.arrow)) this.unexpected();
            return this.parseArrowExpression(this.startNodeAt(n, u), [ h ], !0, t);
          }
        }
        return h;

       case a.regexp:
        var l = this.value;
        return s = this.parseLiteral(l.value), s.regex = {
          pattern: l.pattern,
          flags: l.flags
        }, s;

       case a.num:
       case a.string:
        return this.parseLiteral(this.value);

       case a._null:
       case a._true:
       case a._false:
        return s = this.startNode(), s.value = this.type === a._null ? null : this.type === a._true, 
        s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");

       case a.parenL:
        var d = this.start, y = this.parseParenAndDistinguishExpression(r, t);
        if (e) {
          if (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(y)) e.parenthesizedAssign = d;
          if (e.parenthesizedBind < 0) e.parenthesizedBind = d;
        }
        return y;

       case a.bracketL:
        return s = this.startNode(), this.next(), s.elements = this.parseExprList(a.bracketR, !0, !0, e), 
        this.finishNode(s, "ArrayExpression");

       case a.braceL:
        return this.overrideContext(b.b_expr), this.parseObj(!1, e);

       case a._function:
        return s = this.startNode(), this.next(), this.parseFunction(s, 0);

       case a._class:
        return this.parseClass(this.startNode(), !1);

       case a._new:
        return this.parseNew();

       case a.backQuote:
        return this.parseTemplate();

       case a._import:
        if (this.options.ecmaVersion >= 11) return this.parseExprImport(i); else return this.unexpected();

       default:
        return this.parseExprAtomDefault();
      }
    }, f.parseExprAtomDefault = function() {
      this.unexpected();
    }, f.parseExprImport = function(e) {
      var t = this.startNode();
      if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword import");
      if (this.next(), this.type === a.parenL && !e) return this.parseDynamicImport(t); else if (this.type === a.dot) {
        var i = this.startNodeAt(t.start, t.loc && t.loc.start);
        return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
      } else this.unexpected();
    }, f.parseDynamicImport = function(e) {
      if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) if (!this.eat(a.parenR)) if (this.expect(a.comma), 
      !this.afterTrailingComma(a.parenR)) {
        if (e.options = this.parseMaybeAssign(), !this.eat(a.parenR)) {
          if (this.expect(a.comma), !this.afterTrailingComma(a.parenR)) this.unexpected();
        }
      } else e.options = null; else e.options = null; else if (!this.eat(a.parenR)) {
        var t = this.start;
        if (this.eat(a.comma) && this.eat(a.parenR)) this.raiseRecoverable(t, "Trailing comma is not allowed in import()"); else this.unexpected(t);
      }
      return this.finishNode(e, "ImportExpression");
    }, f.parseImportMeta = function(e) {
      this.next();
      var t = this.containsEsc;
      if (e.property = this.parseIdent(!0), e.property.name !== "meta") this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'");
      if (t) this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters");
      if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module");
      return this.finishNode(e, "MetaProperty");
    }, f.parseLiteral = function(e) {
      var t = this.startNode();
      if (t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110) t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "");
      return this.next(), this.finishNode(t, "Literal");
    }, f.parseParenExpression = function() {
      this.expect(a.parenL);
      var e = this.parseExpression();
      return this.expect(a.parenR), e;
    }, f.shouldParseArrow = function(e) {
      return !this.canInsertSemicolon();
    }, f.parseParenAndDistinguishExpression = function(e, t) {
      var i = this.start, s = this.startLoc, r, n = this.options.ecmaVersion >= 8;
      if (this.options.ecmaVersion >= 6) {
        this.next();
        var u = this.start, o = this.startLoc, h = [], l = !0, d = !1, y = new pe, k = this.yieldPos, re = this.awaitPos, Q;
        this.yieldPos = 0, this.awaitPos = 0;
        while (this.type !== a.parenR) if (l ? l = !1 : this.expect(a.comma), n && this.afterTrailingComma(a.parenR, !0)) {
          d = !0;
          break;
        } else if (this.type === a.ellipsis) {
          if (Q = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === a.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          break;
        } else h.push(this.parseMaybeAssign(!1, y, this.parseParenItem));
        var ve = this.lastTokEnd, Y = this.lastTokEndLoc;
        if (this.expect(a.parenR), e && this.shouldParseArrow(h) && this.eat(a.arrow)) return this.checkPatternErrors(y, !1), 
        this.checkYieldAwaitInDefaultParams(), this.yieldPos = k, this.awaitPos = re, this.parseParenArrowList(i, s, h, t);
        if (!h.length || d) this.unexpected(this.lastTokStart);
        if (Q) this.unexpected(Q);
        if (this.checkExpressionErrors(y, !0), this.yieldPos = k || this.yieldPos, this.awaitPos = re || this.awaitPos, 
        h.length > 1) r = this.startNodeAt(u, o), r.expressions = h, this.finishNodeAt(r, "SequenceExpression", ve, Y); else r = h[0];
      } else r = this.parseParenExpression();
      if (this.options.preserveParens) {
        var X = this.startNodeAt(i, s);
        return X.expression = r, this.finishNode(X, "ParenthesizedExpression");
      } else return r;
    }, f.parseParenItem = function(e) {
      return e;
    }, f.parseParenArrowList = function(e, t, i, s) {
      return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, s);
    };
    var Lt = [];
    f.parseNew = function() {
      if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      var e = this.startNode();
      if (this.next(), this.options.ecmaVersion >= 6 && this.type === a.dot) {
        var t = this.startNodeAt(e.start, e.loc && e.loc.start);
        t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
        var i = this.containsEsc;
        if (e.property = this.parseIdent(!0), e.property.name !== "target") this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'");
        if (i) this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters");
        if (!this.allowNewDotTarget) this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block");
        return this.finishNode(e, "MetaProperty");
      }
      var s = this.start, r = this.startLoc;
      if (e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, r, !0, !1), 
      this.eat(a.parenL)) e.arguments = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1); else e.arguments = Lt;
      return this.finishNode(e, "NewExpression");
    }, f.parseTemplateElement = function(e) {
      var t = e.isTagged, i = this.startNode();
      if (this.type === a.invalidTemplate) {
        if (!t) this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
        i.value = {
          raw: this.value.replace(/\r\n?/g, `\n`),
          cooked: null
        };
      } else i.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `\n`),
        cooked: this.value
      };
      return this.next(), i.tail = this.type === a.backQuote, this.finishNode(i, "TemplateElement");
    }, f.parseTemplate = function(e) {
      if (e === void 0) e = {};
      var t = e.isTagged;
      if (t === void 0) t = !1;
      var i = this.startNode();
      this.next(), i.expressions = [];
      var s = this.parseTemplateElement({
        isTagged: t
      });
      i.quasis = [ s ];
      while (!s.tail) {
        if (this.type === a.eof) this.raise(this.pos, "Unterminated template literal");
        this.expect(a.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(a.braceR), 
        i.quasis.push(s = this.parseTemplateElement({
          isTagged: t
        }));
      }
      return this.next(), this.finishNode(i, "TemplateLiteral");
    }, f.isAsyncProp = function(e) {
      return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === a.name || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === a.star) && !w.test(this.input.slice(this.lastTokEnd, this.start));
    }, f.parseObj = function(e, t) {
      var i = this.startNode(), s = !0, r = {};
      i.properties = [], this.next();
      while (!this.eat(a.braceR)) {
        if (!s) {
          if (this.expect(a.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(a.braceR)) break;
        } else s = !1;
        var n = this.parseProperty(e, t);
        if (!e) this.checkPropClash(n, r, t);
        i.properties.push(n);
      }
      return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
    }, f.parseProperty = function(e, t) {
      var i = this.startNode(), s, r, n, u;
      if (this.options.ecmaVersion >= 9 && this.eat(a.ellipsis)) {
        if (e) {
          if (i.argument = this.parseIdent(!1), this.type === a.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          return this.finishNode(i, "RestElement");
        }
        if (i.argument = this.parseMaybeAssign(!1, t), this.type === a.comma && t && t.trailingComma < 0) t.trailingComma = this.start;
        return this.finishNode(i, "SpreadElement");
      }
      if (this.options.ecmaVersion >= 6) {
        if (i.method = !1, i.shorthand = !1, e || t) n = this.start, u = this.startLoc;
        if (!e) s = this.eat(a.star);
      }
      var o = this.containsEsc;
      if (this.parsePropertyName(i), !e && !o && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i)) r = !0, 
      s = this.options.ecmaVersion >= 9 && this.eat(a.star), this.parsePropertyName(i); else r = !1;
      return this.parsePropertyValue(i, e, s, r, n, u, t, o), this.finishNode(i, "Property");
    }, f.parseGetterSetter = function(e) {
      var t = e.key.name;
      this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
      var i = e.kind === "get" ? 0 : 1;
      if (e.value.params.length !== i) {
        var s = e.value.start;
        if (e.kind === "get") this.raiseRecoverable(s, "getter should have no params"); else this.raiseRecoverable(s, "setter should have exactly one param");
      } else if (e.kind === "set" && e.value.params[0].type === "RestElement") this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
    }, f.parsePropertyValue = function(e, t, i, s, r, n, u, o) {
      if ((i || s) && this.type === a.colon) this.unexpected();
      if (this.eat(a.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u), 
      e.kind = "init"; else if (this.options.ecmaVersion >= 6 && this.type === a.parenL) {
        if (t) this.unexpected();
        e.method = !0, e.value = this.parseMethod(i, s), e.kind = "init";
      } else if (!t && !o && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && (this.type !== a.comma && this.type !== a.braceR && this.type !== a.eq)) {
        if (i || s) this.unexpected();
        this.parseGetterSetter(e);
      } else if (this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier") {
        if (i || s) this.unexpected();
        if (this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = r;
        if (t) e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key)); else if (this.type === a.eq && u) {
          if (u.shorthandAssign < 0) u.shorthandAssign = this.start;
          e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key));
        } else e.value = this.copyNode(e.key);
        e.kind = "init", e.shorthand = !0;
      } else this.unexpected();
    }, f.parsePropertyName = function(e) {
      if (this.options.ecmaVersion >= 6) if (this.eat(a.bracketL)) return e.computed = !0, 
      e.key = this.parseMaybeAssign(), this.expect(a.bracketR), e.key; else e.computed = !1;
      return e.key = this.type === a.num || this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
    }, f.initFunction = function(e) {
      if (e.id = null, this.options.ecmaVersion >= 6) e.generator = e.expression = !1;
      if (this.options.ecmaVersion >= 8) e.async = !1;
    }, f.parseMethod = function(e, t, i) {
      var s = this.startNode(), r = this.yieldPos, n = this.awaitPos, u = this.awaitIdentPos;
      if (this.initFunction(s), this.options.ecmaVersion >= 6) s.generator = e;
      if (this.options.ecmaVersion >= 8) s.async = !!t;
      return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ae(t, s.generator) | oe | (i ? je : 0)), 
      this.expect(a.parenL), s.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8), 
      this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = r, 
      this.awaitPos = n, this.awaitIdentPos = u, this.finishNode(s, "FunctionExpression");
    }, f.parseArrowExpression = function(e, t, i, s) {
      var r = this.yieldPos, n = this.awaitPos, u = this.awaitIdentPos;
      if (this.enterScope(Ae(i, !1) | we), this.initFunction(e), this.options.ecmaVersion >= 8) e.async = !!i;
      return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), 
      this.parseFunctionBody(e, !0, !1, s), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = u, 
      this.finishNode(e, "ArrowFunctionExpression");
    }, f.parseFunctionBody = function(e, t, i, s) {
      var r = t && this.type !== a.braceL, n = this.strict, u = !1;
      if (r) e.body = this.parseMaybeAssign(s), e.expression = !0, this.checkParams(e, !1); else {
        var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
        if (!n || o) {
          if (u = this.strictDirective(this.end), u && o) this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
        }
        var h = this.labels;
        if (this.labels = [], u) this.strict = !0;
        if (this.checkParams(e, !n && !u && !t && !i && this.isSimpleParamList(e.params)), 
        this.strict && e.id) this.checkLValSimple(e.id, We);
        e.body = this.parseBlock(!1, void 0, u && !n), e.expression = !1, this.adaptDirectivePrologue(e.body.body), 
        this.labels = h;
      }
      this.exitScope();
    }, f.isSimpleParamList = function(e) {
      for (var t = 0, i = e; t < i.length; t += 1) {
        var s = i[t];
        if (s.type !== "Identifier") return !1;
      }
      return !0;
    }, f.checkParams = function(e, t) {
      var i = Object.create(null);
      for (var s = 0, r = e.params; s < r.length; s += 1) {
        var n = r[s];
        this.checkLValInnerPattern(n, Ie, t ? null : i);
      }
    }, f.parseExprList = function(e, t, i, s) {
      var r = [], n = !0;
      while (!this.eat(e)) {
        if (!n) {
          if (this.expect(a.comma), t && this.afterTrailingComma(e)) break;
        } else n = !1;
        var u = void 0;
        if (i && this.type === a.comma) u = null; else if (this.type === a.ellipsis) {
          if (u = this.parseSpread(s), s && this.type === a.comma && s.trailingComma < 0) s.trailingComma = this.start;
        } else u = this.parseMaybeAssign(!1, s);
        r.push(u);
      }
      return r;
    }, f.checkUnreserved = function(e) {
      var {start: t, end: i, name: s} = e;
      if (this.inGenerator && s === "yield") this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator");
      if (this.inAsync && s === "await") this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function");
      if (!(this.currentThisScope().flags & he) && s === "arguments") this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer");
      if (this.inClassStaticBlock && (s === "arguments" || s === "await")) this.raise(t, "Cannot use " + s + " in class static initialization block");
      if (this.keywords.test(s)) this.raise(t, "Unexpected keyword '" + s + "'");
      if (this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1) return;
      var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
      if (r.test(s)) {
        if (!this.inAsync && s === "await") this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function");
        this.raiseRecoverable(t, "The keyword '" + s + "' is reserved");
      }
    }, f.parseIdent = function(e) {
      var t = this.parseIdentNode();
      if (this.next(!!e), this.finishNode(t, "Identifier"), !e) {
        if (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = t.start;
      }
      return t;
    }, f.parseIdentNode = function() {
      var e = this.startNode();
      if (this.type === a.name) e.name = this.value; else if (this.type.keyword) {
        if (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) this.context.pop();
        this.type = a.name;
      } else this.unexpected();
      return e;
    }, f.parsePrivateIdent = function() {
      var e = this.startNode();
      if (this.type === a.privateId) e.name = this.value; else this.unexpected();
      if (this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields) if (this.privateNameStack.length === 0) this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class"); else this.privateNameStack[this.privateNameStack.length - 1].used.push(e);
      return e;
    }, f.parseYield = function(e) {
      if (!this.yieldPos) this.yieldPos = this.start;
      var t = this.startNode();
      if (this.next(), this.type === a.semi || this.canInsertSemicolon() || this.type !== a.star && !this.type.startsExpr) t.delegate = !1, 
      t.argument = null; else t.delegate = this.eat(a.star), t.argument = this.parseMaybeAssign(e);
      return this.finishNode(t, "YieldExpression");
    }, f.parseAwait = function(e) {
      if (!this.awaitPos) this.awaitPos = this.start;
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
    };
    var fe = _.prototype;
    fe.raise = function(e, t) {
      var i = Se(this.input, e);
      if (t += " (" + i.line + ":" + i.column + ")", this.sourceFile) t += " in " + this.sourceFile;
      var s = SyntaxError(t);
      throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
    }, fe.raiseRecoverable = fe.raise, fe.curPosition = function() {
      if (this.options.locations) return new W(this.curLine, this.pos - this.lineStart);
    };
    var q = _.prototype, Rt = function(t) {
      this.flags = t, this.var = [], this.lexical = [], this.functions = [];
    };
    q.enterScope = function(e) {
      this.scopeStack.push(new Rt(e));
    }, q.exitScope = function() {
      this.scopeStack.pop();
    }, q.treatFunctionsAsVarInScope = function(e) {
      return e.flags & z || !this.inModule && e.flags & ee;
    }, q.declareName = function(e, t, i) {
      var s = !1;
      if (t === F) {
        var r = this.currentScope();
        if (s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1, 
        r.lexical.push(e), this.inModule && r.flags & ee) delete this.undefinedExports[e];
      } else if (t === He) {
        var n = this.currentScope();
        n.lexical.push(e);
      } else if (t === Ge) {
        var u = this.currentScope();
        if (this.treatFunctionsAsVar) s = u.lexical.indexOf(e) > -1; else s = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1;
        u.functions.push(e);
      } else for (var o = this.scopeStack.length - 1; o >= 0; --o) {
        var h = this.scopeStack[o];
        if (h.lexical.indexOf(e) > -1 && !(h.flags & qe && h.lexical[0] === e) || !this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1) {
          s = !0;
          break;
        }
        if (h.var.push(e), this.inModule && h.flags & ee) delete this.undefinedExports[e];
        if (h.flags & he) break;
      }
      if (s) this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
    }, q.checkLocalExport = function(e) {
      if (this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1) this.undefinedExports[e.name] = e;
    }, q.currentScope = function() {
      return this.scopeStack[this.scopeStack.length - 1];
    }, q.currentVarScope = function() {
      for (var e = this.scopeStack.length - 1; ;e--) {
        var t = this.scopeStack[e];
        if (t.flags & (he | te | G)) return t;
      }
    }, q.currentThisScope = function() {
      for (var e = this.scopeStack.length - 1; ;e--) {
        var t = this.scopeStack[e];
        if (t.flags & (he | te | G) && !(t.flags & we)) return t;
      }
    };
    var se = function(t, i, s) {
      if (this.type = "", this.start = i, this.end = 0, t.options.locations) this.loc = new J(t, s);
      if (t.options.directSourceFile) this.sourceFile = t.options.directSourceFile;
      if (t.options.ranges) this.range = [ i, 0 ];
    }, ae = _.prototype;
    ae.startNode = function() {
      return new se(this, this.start, this.startLoc);
    }, ae.startNodeAt = function(e, t) {
      return new se(this, e, t);
    };
    function Qe(e, t, i, s) {
      if (e.type = t, e.end = i, this.options.locations) e.loc.end = s;
      if (this.options.ranges) e.range[1] = i;
      return e;
    }
    ae.finishNode = function(e, t) {
      return Qe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
    }, ae.finishNodeAt = function(e, t, i, s) {
      return Qe.call(this, e, t, i, s);
    }, ae.copyNode = function(e) {
      var t = new se(this, e.start, this.startLoc);
      for (var i in e) t[i] = e[i];
      return t;
    };
    var Ot = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Ye = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Xe = Ye + " Extended_Pictographic", Ze = Xe, Je = Ze + " EBase EComp EMod EPres ExtPict", $e = Je, Bt = $e, Dt = {
      9: Ye,
      10: Xe,
      11: Ze,
      12: Je,
      13: $e,
      14: Bt
    }, Ft = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Mt = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: Ft
    }, et = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", tt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", it = tt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", st = it + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", at = st + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", rt = at + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Ut = rt + " " + Ot, qt = {
      9: tt,
      10: it,
      11: st,
      12: at,
      13: rt,
      14: Ut
    }, nt = {};
    function jt(e) {
      var t = nt[e] = {
        binary: U(Dt[e] + " " + et),
        binaryOfStrings: U(Mt[e]),
        nonBinary: {
          General_Category: U(et),
          Script: U(qt[e])
        }
      };
      t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, 
      t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
    }
    for (var Ve = 0, ut = [ 9, 10, 11, 12, 13, 14 ]; Ve < ut.length; Ve += 1) {
      var Gt = ut[Ve];
      jt(Gt);
    }
    var c = _.prototype, de = function(t, i) {
      this.parent = t, this.base = i || this;
    };
    de.prototype.separatedFrom = function(t) {
      for (var i = this; i; i = i.parent) for (var s = t; s; s = s.parent) if (i.base === s.base && i !== s) return !0;
      return !1;
    }, de.prototype.sibling = function() {
      return new de(this.parent, this.base);
    };
    var O = function(t) {
      this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), 
      this.unicodeProperties = nt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], 
      this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, 
      this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", 
      this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, 
      this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
    };
    O.prototype.reset = function(t, i, s) {
      var r = s.indexOf("v") !== -1, n = s.indexOf("u") !== -1;
      if (this.start = t | 0, this.source = i + "", this.flags = s, r && this.parser.options.ecmaVersion >= 15) this.switchU = !0, 
      this.switchV = !0, this.switchN = !0; else this.switchU = n && this.parser.options.ecmaVersion >= 6, 
      this.switchV = !1, this.switchN = n && this.parser.options.ecmaVersion >= 9;
    }, O.prototype.raise = function(t) {
      this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
    }, O.prototype.at = function(t, i) {
      if (i === void 0) i = !1;
      var s = this.source, r = s.length;
      if (t >= r) return -1;
      var n = s.charCodeAt(t);
      if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r) return n;
      var u = s.charCodeAt(t + 1);
      return u >= 56320 && u <= 57343 ? (n << 10) + u - 56613888 : n;
    }, O.prototype.nextIndex = function(t, i) {
      if (i === void 0) i = !1;
      var s = this.source, r = s.length;
      if (t >= r) return r;
      var n = s.charCodeAt(t), u;
      if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r || (u = s.charCodeAt(t + 1)) < 56320 || u > 57343) return t + 1;
      return t + 2;
    }, O.prototype.current = function(t) {
      if (t === void 0) t = !1;
      return this.at(this.pos, t);
    }, O.prototype.lookahead = function(t) {
      if (t === void 0) t = !1;
      return this.at(this.nextIndex(this.pos, t), t);
    }, O.prototype.advance = function(t) {
      if (t === void 0) t = !1;
      this.pos = this.nextIndex(this.pos, t);
    }, O.prototype.eat = function(t, i) {
      if (i === void 0) i = !1;
      if (this.current(i) === t) return this.advance(i), !0;
      return !1;
    }, O.prototype.eatChars = function(t, i) {
      if (i === void 0) i = !1;
      var s = this.pos;
      for (var r = 0, n = t; r < n.length; r += 1) {
        var u = n[r], o = this.at(s, i);
        if (o === -1 || o !== u) return !1;
        s = this.nextIndex(s, i);
      }
      return this.pos = s, !0;
    }, c.validateRegExpFlags = function(e) {
      var {validFlags: t, flags: i} = e, s = !1, r = !1;
      for (var n = 0; n < i.length; n++) {
        var u = i.charAt(n);
        if (t.indexOf(u) === -1) this.raise(e.start, "Invalid regular expression flag");
        if (i.indexOf(u, n + 1) > -1) this.raise(e.start, "Duplicate regular expression flag");
        if (u === "u") s = !0;
        if (u === "v") r = !0;
      }
      if (this.options.ecmaVersion >= 15 && s && r) this.raise(e.start, "Invalid regular expression flag");
    };
    function Ht(e) {
      for (var t in e) return !0;
      return !1;
    }
    c.validateRegExpPattern = function(e) {
      if (this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Ht(e.groupNames)) e.switchN = !0, 
      this.regexp_pattern(e);
    }, c.regexp_pattern = function(e) {
      if (e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, 
      e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = Object.create(null), 
      e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), 
      e.pos !== e.source.length) {
        if (e.eat(41)) e.raise("Unmatched ')'");
        if (e.eat(93) || e.eat(125)) e.raise("Lone quantifier brackets");
      }
      if (e.maxBackReference > e.numCapturingParens) e.raise("Invalid escape");
      for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
        var s = i[t];
        if (!e.groupNames[s]) e.raise("Invalid named capture referenced");
      }
    }, c.regexp_disjunction = function(e) {
      var t = this.options.ecmaVersion >= 16;
      if (t) e.branchID = new de(e.branchID, null);
      this.regexp_alternative(e);
      while (e.eat(124)) {
        if (t) e.branchID = e.branchID.sibling();
        this.regexp_alternative(e);
      }
      if (t) e.branchID = e.branchID.parent;
      if (this.regexp_eatQuantifier(e, !0)) e.raise("Nothing to repeat");
      if (e.eat(123)) e.raise("Lone quantifier brackets");
    }, c.regexp_alternative = function(e) {
      while (e.pos < e.source.length && this.regexp_eatTerm(e)) ;
    }, c.regexp_eatTerm = function(e) {
      if (this.regexp_eatAssertion(e)) {
        if (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e)) {
          if (e.switchU) e.raise("Invalid quantifier");
        }
        return !0;
      }
      if (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) return this.regexp_eatQuantifier(e), 
      !0;
      return !1;
    }, c.regexp_eatAssertion = function(e) {
      var t = e.pos;
      if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;
      if (e.eat(92)) {
        if (e.eat(66) || e.eat(98)) return !0;
        e.pos = t;
      }
      if (e.eat(40) && e.eat(63)) {
        var i = !1;
        if (this.options.ecmaVersion >= 9) i = e.eat(60);
        if (e.eat(61) || e.eat(33)) {
          if (this.regexp_disjunction(e), !e.eat(41)) e.raise("Unterminated group");
          return e.lastAssertionIsQuantifiable = !i, !0;
        }
      }
      return e.pos = t, !1;
    }, c.regexp_eatQuantifier = function(e, t) {
      if (t === void 0) t = !1;
      if (this.regexp_eatQuantifierPrefix(e, t)) return e.eat(63), !0;
      return !1;
    }, c.regexp_eatQuantifierPrefix = function(e, t) {
      return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
    }, c.regexp_eatBracedQuantifier = function(e, t) {
      var i = e.pos;
      if (e.eat(123)) {
        var s = 0, r = -1;
        if (this.regexp_eatDecimalDigits(e)) {
          if (s = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e)) r = e.lastIntValue;
          if (e.eat(125)) {
            if (r !== -1 && r < s && !t) e.raise("numbers out of order in {} quantifier");
            return !0;
          }
        }
        if (e.switchU && !t) e.raise("Incomplete quantifier");
        e.pos = i;
      }
      return !1;
    }, c.regexp_eatAtom = function(e) {
      return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
    }, c.regexp_eatReverseSolidusAtomEscape = function(e) {
      var t = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatAtomEscape(e)) return !0;
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatUncapturingGroup = function(e) {
      var t = e.pos;
      if (e.eat(40)) {
        if (e.eat(63)) {
          if (this.options.ecmaVersion >= 16) {
            var i = this.regexp_eatModifiers(e), s = e.eat(45);
            if (i || s) {
              for (var r = 0; r < i.length; r++) {
                var n = i.charAt(r);
                if (i.indexOf(n, r + 1) > -1) e.raise("Duplicate regular expression modifiers");
              }
              if (s) {
                var u = this.regexp_eatModifiers(e);
                if (!i && !u && e.current() === 58) e.raise("Invalid regular expression modifiers");
                for (var o = 0; o < u.length; o++) {
                  var h = u.charAt(o);
                  if (u.indexOf(h, o + 1) > -1 || i.indexOf(h) > -1) e.raise("Duplicate regular expression modifiers");
                }
              }
            }
          }
          if (e.eat(58)) {
            if (this.regexp_disjunction(e), e.eat(41)) return !0;
            e.raise("Unterminated group");
          }
        }
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatCapturingGroup = function(e) {
      if (e.eat(40)) {
        if (this.options.ecmaVersion >= 9) this.regexp_groupSpecifier(e); else if (e.current() === 63) e.raise("Invalid group");
        if (this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
        e.raise("Unterminated group");
      }
      return !1;
    }, c.regexp_eatModifiers = function(e) {
      var t = "", i = 0;
      while ((i = e.current()) !== -1 && Wt(i)) t += D(i), e.advance();
      return t;
    };
    function Wt(e) {
      return e === 105 || e === 109 || e === 115;
    }
    c.regexp_eatExtendedAtom = function(e) {
      return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
    }, c.regexp_eatInvalidBracedQuantifier = function(e) {
      if (this.regexp_eatBracedQuantifier(e, !0)) e.raise("Nothing to repeat");
      return !1;
    }, c.regexp_eatSyntaxCharacter = function(e) {
      var t = e.current();
      if (ot(t)) return e.lastIntValue = t, e.advance(), !0;
      return !1;
    };
    function ot(e) {
      return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
    }
    c.regexp_eatPatternCharacters = function(e) {
      var t = e.pos, i = 0;
      while ((i = e.current()) !== -1 && !ot(i)) e.advance();
      return e.pos !== t;
    }, c.regexp_eatExtendedPatternCharacter = function(e) {
      var t = e.current();
      if (t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124) return e.advance(), 
      !0;
      return !1;
    }, c.regexp_groupSpecifier = function(e) {
      if (e.eat(63)) {
        if (!this.regexp_eatGroupName(e)) e.raise("Invalid group");
        var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
        if (i) if (t) for (var s = 0, r = i; s < r.length; s += 1) {
          var n = r[s];
          if (!n.separatedFrom(e.branchID)) e.raise("Duplicate capture group name");
        } else e.raise("Duplicate capture group name");
        if (t) (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID); else e.groupNames[e.lastStringValue] = !0;
      }
    }, c.regexp_eatGroupName = function(e) {
      if (e.lastStringValue = "", e.eat(60)) {
        if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
        e.raise("Invalid capture group name");
      }
      return !1;
    }, c.regexp_eatRegExpIdentifierName = function(e) {
      if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
        e.lastStringValue += D(e.lastIntValue);
        while (this.regexp_eatRegExpIdentifierPart(e)) e.lastStringValue += D(e.lastIntValue);
        return !0;
      }
      return !1;
    }, c.regexp_eatRegExpIdentifierStart = function(e) {
      var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
      if (e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) s = e.lastIntValue;
      if (zt(s)) return e.lastIntValue = s, !0;
      return e.pos = t, !1;
    };
    function zt(e) {
      return L(e, !0) || e === 36 || e === 95;
    }
    c.regexp_eatRegExpIdentifierPart = function(e) {
      var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
      if (e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) s = e.lastIntValue;
      if (Kt(s)) return e.lastIntValue = s, !0;
      return e.pos = t, !1;
    };
    function Kt(e) {
      return B(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
    }
    c.regexp_eatAtomEscape = function(e) {
      if (this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) return !0;
      if (e.switchU) {
        if (e.current() === 99) e.raise("Invalid unicode escape");
        e.raise("Invalid escape");
      }
      return !1;
    }, c.regexp_eatBackReference = function(e) {
      var t = e.pos;
      if (this.regexp_eatDecimalEscape(e)) {
        var i = e.lastIntValue;
        if (e.switchU) {
          if (i > e.maxBackReference) e.maxBackReference = i;
          return !0;
        }
        if (i <= e.numCapturingParens) return !0;
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatKGroupName = function(e) {
      if (e.eat(107)) {
        if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), 
        !0;
        e.raise("Invalid named reference");
      }
      return !1;
    }, c.regexp_eatCharacterEscape = function(e) {
      return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
    }, c.regexp_eatCControlLetter = function(e) {
      var t = e.pos;
      if (e.eat(99)) {
        if (this.regexp_eatControlLetter(e)) return !0;
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatZero = function(e) {
      if (e.current() === 48 && !xe(e.lookahead())) return e.lastIntValue = 0, e.advance(), 
      !0;
      return !1;
    }, c.regexp_eatControlEscape = function(e) {
      var t = e.current();
      if (t === 116) return e.lastIntValue = 9, e.advance(), !0;
      if (t === 110) return e.lastIntValue = 10, e.advance(), !0;
      if (t === 118) return e.lastIntValue = 11, e.advance(), !0;
      if (t === 102) return e.lastIntValue = 12, e.advance(), !0;
      if (t === 114) return e.lastIntValue = 13, e.advance(), !0;
      return !1;
    }, c.regexp_eatControlLetter = function(e) {
      var t = e.current();
      if (ht(t)) return e.lastIntValue = t % 32, e.advance(), !0;
      return !1;
    };
    function ht(e) {
      return e >= 65 && e <= 90 || e >= 97 && e <= 122;
    }
    c.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
      if (t === void 0) t = !1;
      var i = e.pos, s = t || e.switchU;
      if (e.eat(117)) {
        if (this.regexp_eatFixedHexDigits(e, 4)) {
          var r = e.lastIntValue;
          if (s && r >= 55296 && r <= 56319) {
            var n = e.pos;
            if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
              var u = e.lastIntValue;
              if (u >= 56320 && u <= 57343) return e.lastIntValue = (r - 55296) * 1024 + (u - 56320) + 65536, 
              !0;
            }
            e.pos = n, e.lastIntValue = r;
          }
          return !0;
        }
        if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Qt(e.lastIntValue)) return !0;
        if (s) e.raise("Invalid unicode escape");
        e.pos = i;
      }
      return !1;
    };
    function Qt(e) {
      return e >= 0 && e <= 1114111;
    }
    c.regexp_eatIdentityEscape = function(e) {
      if (e.switchU) {
        if (this.regexp_eatSyntaxCharacter(e)) return !0;
        if (e.eat(47)) return e.lastIntValue = 47, !0;
        return !1;
      }
      var t = e.current();
      if (t !== 99 && (!e.switchN || t !== 107)) return e.lastIntValue = t, e.advance(), 
      !0;
      return !1;
    }, c.regexp_eatDecimalEscape = function(e) {
      e.lastIntValue = 0;
      var t = e.current();
      if (t >= 49 && t <= 57) {
        do {
          e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
        } while ((t = e.current()) >= 48 && t <= 57);
        return !0;
      }
      return !1;
    };
    var ct = 0, M = 1, T = 2;
    c.regexp_eatCharacterClassEscape = function(e) {
      var t = e.current();
      if (Yt(t)) return e.lastIntValue = -1, e.advance(), M;
      var i = !1;
      if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
        e.lastIntValue = -1, e.advance();
        var s;
        if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) {
          if (i && s === T) e.raise("Invalid property name");
          return s;
        }
        e.raise("Invalid property name");
      }
      return ct;
    };
    function Yt(e) {
      return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
    }
    c.regexp_eatUnicodePropertyValueExpression = function(e) {
      var t = e.pos;
      if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
        var i = e.lastStringValue;
        if (this.regexp_eatUnicodePropertyValue(e)) {
          var s = e.lastStringValue;
          return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), M;
        }
      }
      if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
        var r = e.lastStringValue;
        return this.regexp_validateUnicodePropertyNameOrValue(e, r);
      }
      return ct;
    }, c.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
      if (!H(e.unicodeProperties.nonBinary, t)) e.raise("Invalid property name");
      if (!e.unicodeProperties.nonBinary[t].test(i)) e.raise("Invalid property value");
    }, c.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
      if (e.unicodeProperties.binary.test(t)) return M;
      if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return T;
      e.raise("Invalid property name");
    }, c.regexp_eatUnicodePropertyName = function(e) {
      var t = 0;
      e.lastStringValue = "";
      while (pt(t = e.current())) e.lastStringValue += D(t), e.advance();
      return e.lastStringValue !== "";
    };
    function pt(e) {
      return ht(e) || e === 95;
    }
    c.regexp_eatUnicodePropertyValue = function(e) {
      var t = 0;
      e.lastStringValue = "";
      while (Xt(t = e.current())) e.lastStringValue += D(t), e.advance();
      return e.lastStringValue !== "";
    };
    function Xt(e) {
      return pt(e) || xe(e);
    }
    c.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
      return this.regexp_eatUnicodePropertyValue(e);
    }, c.regexp_eatCharacterClass = function(e) {
      if (e.eat(91)) {
        var t = e.eat(94), i = this.regexp_classContents(e);
        if (!e.eat(93)) e.raise("Unterminated character class");
        if (t && i === T) e.raise("Negated character class may contain strings");
        return !0;
      }
      return !1;
    }, c.regexp_classContents = function(e) {
      if (e.current() === 93) return M;
      if (e.switchV) return this.regexp_classSetExpression(e);
      return this.regexp_nonEmptyClassRanges(e), M;
    }, c.regexp_nonEmptyClassRanges = function(e) {
      while (this.regexp_eatClassAtom(e)) {
        var t = e.lastIntValue;
        if (e.eat(45) && this.regexp_eatClassAtom(e)) {
          var i = e.lastIntValue;
          if (e.switchU && (t === -1 || i === -1)) e.raise("Invalid character class");
          if (t !== -1 && i !== -1 && t > i) e.raise("Range out of order in character class");
        }
      }
    }, c.regexp_eatClassAtom = function(e) {
      var t = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatClassEscape(e)) return !0;
        if (e.switchU) {
          var i = e.current();
          if (i === 99 || dt(i)) e.raise("Invalid class escape");
          e.raise("Invalid escape");
        }
        e.pos = t;
      }
      var s = e.current();
      if (s !== 93) return e.lastIntValue = s, e.advance(), !0;
      return !1;
    }, c.regexp_eatClassEscape = function(e) {
      var t = e.pos;
      if (e.eat(98)) return e.lastIntValue = 8, !0;
      if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
      if (!e.switchU && e.eat(99)) {
        if (this.regexp_eatClassControlLetter(e)) return !0;
        e.pos = t;
      }
      return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
    }, c.regexp_classSetExpression = function(e) {
      var t = M, i;
      if (this.regexp_eatClassSetRange(e)) ; else if (i = this.regexp_eatClassSetOperand(e)) {
        if (i === T) t = T;
        var s = e.pos;
        while (e.eatChars([ 38, 38 ])) {
          if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
            if (i !== T) t = M;
            continue;
          }
          e.raise("Invalid character in character class");
        }
        if (s !== e.pos) return t;
        while (e.eatChars([ 45, 45 ])) {
          if (this.regexp_eatClassSetOperand(e)) continue;
          e.raise("Invalid character in character class");
        }
        if (s !== e.pos) return t;
      } else e.raise("Invalid character in character class");
      for (;;) {
        if (this.regexp_eatClassSetRange(e)) continue;
        if (i = this.regexp_eatClassSetOperand(e), !i) return t;
        if (i === T) t = T;
      }
    }, c.regexp_eatClassSetRange = function(e) {
      var t = e.pos;
      if (this.regexp_eatClassSetCharacter(e)) {
        var i = e.lastIntValue;
        if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
          var s = e.lastIntValue;
          if (i !== -1 && s !== -1 && i > s) e.raise("Range out of order in character class");
          return !0;
        }
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatClassSetOperand = function(e) {
      if (this.regexp_eatClassSetCharacter(e)) return M;
      return this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
    }, c.regexp_eatNestedClass = function(e) {
      var t = e.pos;
      if (e.eat(91)) {
        var i = e.eat(94), s = this.regexp_classContents(e);
        if (e.eat(93)) {
          if (i && s === T) e.raise("Negated character class may contain strings");
          return s;
        }
        e.pos = t;
      }
      if (e.eat(92)) {
        var r = this.regexp_eatCharacterClassEscape(e);
        if (r) return r;
        e.pos = t;
      }
      return null;
    }, c.regexp_eatClassStringDisjunction = function(e) {
      var t = e.pos;
      if (e.eatChars([ 92, 113 ])) {
        if (e.eat(123)) {
          var i = this.regexp_classStringDisjunctionContents(e);
          if (e.eat(125)) return i;
        } else e.raise("Invalid escape");
        e.pos = t;
      }
      return null;
    }, c.regexp_classStringDisjunctionContents = function(e) {
      var t = this.regexp_classString(e);
      while (e.eat(124)) if (this.regexp_classString(e) === T) t = T;
      return t;
    }, c.regexp_classString = function(e) {
      var t = 0;
      while (this.regexp_eatClassSetCharacter(e)) t++;
      return t === 1 ? M : T;
    }, c.regexp_eatClassSetCharacter = function(e) {
      var t = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e)) return !0;
        if (e.eat(98)) return e.lastIntValue = 8, !0;
        return e.pos = t, !1;
      }
      var i = e.current();
      if (i < 0 || i === e.lookahead() && Zt(i)) return !1;
      if (Jt(i)) return !1;
      return e.advance(), e.lastIntValue = i, !0;
    };
    function Zt(e) {
      return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
    }
    function Jt(e) {
      return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
    }
    c.regexp_eatClassSetReservedPunctuator = function(e) {
      var t = e.current();
      if ($t(t)) return e.lastIntValue = t, e.advance(), !0;
      return !1;
    };
    function $t(e) {
      return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
    }
    c.regexp_eatClassControlLetter = function(e) {
      var t = e.current();
      if (xe(t) || t === 95) return e.lastIntValue = t % 32, e.advance(), !0;
      return !1;
    }, c.regexp_eatHexEscapeSequence = function(e) {
      var t = e.pos;
      if (e.eat(120)) {
        if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
        if (e.switchU) e.raise("Invalid escape");
        e.pos = t;
      }
      return !1;
    }, c.regexp_eatDecimalDigits = function(e) {
      var t = e.pos, i = 0;
      e.lastIntValue = 0;
      while (xe(i = e.current())) e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
      return e.pos !== t;
    };
    function xe(e) {
      return e >= 48 && e <= 57;
    }
    c.regexp_eatHexDigits = function(e) {
      var t = e.pos, i = 0;
      e.lastIntValue = 0;
      while (lt(i = e.current())) e.lastIntValue = 16 * e.lastIntValue + ft(i), e.advance();
      return e.pos !== t;
    };
    function lt(e) {
      return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
    }
    function ft(e) {
      if (e >= 65 && e <= 70) return 10 + (e - 65);
      if (e >= 97 && e <= 102) return 10 + (e - 97);
      return e - 48;
    }
    c.regexp_eatLegacyOctalEscapeSequence = function(e) {
      if (this.regexp_eatOctalDigit(e)) {
        var t = e.lastIntValue;
        if (this.regexp_eatOctalDigit(e)) {
          var i = e.lastIntValue;
          if (t <= 3 && this.regexp_eatOctalDigit(e)) e.lastIntValue = t * 64 + i * 8 + e.lastIntValue; else e.lastIntValue = t * 8 + i;
        } else e.lastIntValue = t;
        return !0;
      }
      return !1;
    }, c.regexp_eatOctalDigit = function(e) {
      var t = e.current();
      if (dt(t)) return e.lastIntValue = t - 48, e.advance(), !0;
      return e.lastIntValue = 0, !1;
    };
    function dt(e) {
      return e >= 48 && e <= 55;
    }
    c.regexp_eatFixedHexDigits = function(e, t) {
      var i = e.pos;
      e.lastIntValue = 0;
      for (var s = 0; s < t; ++s) {
        var r = e.current();
        if (!lt(r)) return e.pos = i, !1;
        e.lastIntValue = 16 * e.lastIntValue + ft(r), e.advance();
      }
      return !0;
    };
    var me = function(t) {
      if (this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, 
      t.options.locations) this.loc = new J(t, t.startLoc, t.endLoc);
      if (t.options.ranges) this.range = [ t.start, t.end ];
    }, x = _.prototype;
    if (x.next = function(e) {
      if (!e && this.type.keyword && this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
      if (this.options.onToken) this.options.onToken(new me(this));
      this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, 
      this.lastTokStartLoc = this.startLoc, this.nextToken();
    }, x.getToken = function() {
      return this.next(), new me(this);
    }, typeof Symbol < "u") x[Symbol.iterator] = function() {
      var e = this;
      return {
        next: function() {
          var t = e.getToken();
          return {
            done: t.type === a.eof,
            value: t
          };
        }
      };
    };
    x.nextToken = function() {
      var e = this.curContext();
      if (!e || !e.preserveSpace) this.skipSpace();
      if (this.start = this.pos, this.options.locations) this.startLoc = this.curPosition();
      if (this.pos >= this.input.length) return this.finishToken(a.eof);
      if (e.override) return e.override(this); else this.readToken(this.fullCharCodeAtPos());
    }, x.readToken = function(e) {
      if (L(e, this.options.ecmaVersion >= 6) || e === 92) return this.readWord();
      return this.getTokenFromCode(e);
    }, x.fullCharCodeAtPos = function() {
      var e = this.input.charCodeAt(this.pos);
      if (e <= 55295 || e >= 56320) return e;
      var t = this.input.charCodeAt(this.pos + 1);
      return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
    }, x.skipBlockComment = function() {
      var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
      if (i === -1) this.raise(this.pos - 2, "Unterminated comment");
      if (this.pos = i + 2, this.options.locations) for (var s = void 0, r = t; (s = Oe(this.input, r, this.pos)) > -1; ) ++this.curLine, 
      r = this.lineStart = s;
      if (this.options.onComment) this.options.onComment(!0, this.input.slice(t + 2, i), t, this.pos, e, this.curPosition());
    }, x.skipLineComment = function(e) {
      var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e);
      while (this.pos < this.input.length && !j(s)) s = this.input.charCodeAt(++this.pos);
      if (this.options.onComment) this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
    }, x.skipSpace = function() {
      e: while (this.pos < this.input.length) {
        var e = this.input.charCodeAt(this.pos);
        switch (e) {
         case 32:
         case 160:
          ++this.pos;
          break;

         case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) ++this.pos;

         case 10:
         case 8232:
         case 8233:
          if (++this.pos, this.options.locations) ++this.curLine, this.lineStart = this.pos;
          break;

         case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
           case 42:
            this.skipBlockComment();
            break;

           case 47:
            this.skipLineComment(2);
            break;

           default:
            break e;
          }
          break;

         default:
          if (e > 8 && e < 14 || e >= 5760 && Ce.test(String.fromCharCode(e))) ++this.pos; else break e;
        }
      }
    }, x.finishToken = function(e, t) {
      if (this.end = this.pos, this.options.locations) this.endLoc = this.curPosition();
      var i = this.type;
      this.type = e, this.value = t, this.updateContext(i);
    }, x.readToken_dot = function() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (e >= 48 && e <= 57) return this.readNumber(!0);
      var t = this.input.charCodeAt(this.pos + 2);
      if (this.options.ecmaVersion >= 6 && e === 46 && t === 46) return this.pos += 3, 
      this.finishToken(a.ellipsis); else return ++this.pos, this.finishToken(a.dot);
    }, x.readToken_slash = function() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (this.exprAllowed) return ++this.pos, this.readRegexp();
      if (e === 61) return this.finishOp(a.assign, 2);
      return this.finishOp(a.slash, 1);
    }, x.readToken_mult_modulo_exp = function(e) {
      var t = this.input.charCodeAt(this.pos + 1), i = 1, s = e === 42 ? a.star : a.modulo;
      if (this.options.ecmaVersion >= 7 && e === 42 && t === 42) ++i, s = a.starstar, 
      t = this.input.charCodeAt(this.pos + 2);
      if (t === 61) return this.finishOp(a.assign, i + 1);
      return this.finishOp(s, i);
    }, x.readToken_pipe_amp = function(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === e) {
        if (this.options.ecmaVersion >= 12) {
          var i = this.input.charCodeAt(this.pos + 2);
          if (i === 61) return this.finishOp(a.assign, 3);
        }
        return this.finishOp(e === 124 ? a.logicalOR : a.logicalAND, 2);
      }
      if (t === 61) return this.finishOp(a.assign, 2);
      return this.finishOp(e === 124 ? a.bitwiseOR : a.bitwiseAND, 1);
    }, x.readToken_caret = function() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (e === 61) return this.finishOp(a.assign, 2);
      return this.finishOp(a.bitwiseXOR, 1);
    }, x.readToken_plus_min = function(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === e) {
        if (t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || w.test(this.input.slice(this.lastTokEnd, this.pos)))) return this.skipLineComment(3), 
        this.skipSpace(), this.nextToken();
        return this.finishOp(a.incDec, 2);
      }
      if (t === 61) return this.finishOp(a.assign, 2);
      return this.finishOp(a.plusMin, 1);
    }, x.readToken_lt_gt = function(e) {
      var t = this.input.charCodeAt(this.pos + 1), i = 1;
      if (t === e) {
        if (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61) return this.finishOp(a.assign, i + 1);
        return this.finishOp(a.bitShift, i);
      }
      if (t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) return this.skipLineComment(4), 
      this.skipSpace(), this.nextToken();
      if (t === 61) i = 2;
      return this.finishOp(a.relational, i);
    }, x.readToken_eq_excl = function(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 61) return this.finishOp(a.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
      if (e === 61 && t === 62 && this.options.ecmaVersion >= 6) return this.pos += 2, 
      this.finishToken(a.arrow);
      return this.finishOp(e === 61 ? a.eq : a.prefix, 1);
    }, x.readToken_question = function() {
      var e = this.options.ecmaVersion;
      if (e >= 11) {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t === 46) {
          var i = this.input.charCodeAt(this.pos + 2);
          if (i < 48 || i > 57) return this.finishOp(a.questionDot, 2);
        }
        if (t === 63) {
          if (e >= 12) {
            var s = this.input.charCodeAt(this.pos + 2);
            if (s === 61) return this.finishOp(a.assign, 3);
          }
          return this.finishOp(a.coalesce, 2);
        }
      }
      return this.finishOp(a.question, 1);
    }, x.readToken_numberSign = function() {
      var e = this.options.ecmaVersion, t = 35;
      if (e >= 13) {
        if (++this.pos, t = this.fullCharCodeAtPos(), L(t, !0) || t === 92) return this.finishToken(a.privateId, this.readWord1());
      }
      this.raise(this.pos, "Unexpected character '" + D(t) + "'");
    }, x.getTokenFromCode = function(e) {
      switch (e) {
       case 46:
        return this.readToken_dot();

       case 40:
        return ++this.pos, this.finishToken(a.parenL);

       case 41:
        return ++this.pos, this.finishToken(a.parenR);

       case 59:
        return ++this.pos, this.finishToken(a.semi);

       case 44:
        return ++this.pos, this.finishToken(a.comma);

       case 91:
        return ++this.pos, this.finishToken(a.bracketL);

       case 93:
        return ++this.pos, this.finishToken(a.bracketR);

       case 123:
        return ++this.pos, this.finishToken(a.braceL);

       case 125:
        return ++this.pos, this.finishToken(a.braceR);

       case 58:
        return ++this.pos, this.finishToken(a.colon);

       case 96:
        if (this.options.ecmaVersion < 6) break;
        return ++this.pos, this.finishToken(a.backQuote);

       case 48:
        var t = this.input.charCodeAt(this.pos + 1);
        if (t === 120 || t === 88) return this.readRadixNumber(16);
        if (this.options.ecmaVersion >= 6) {
          if (t === 111 || t === 79) return this.readRadixNumber(8);
          if (t === 98 || t === 66) return this.readRadixNumber(2);
        }

       case 49:
       case 50:
       case 51:
       case 52:
       case 53:
       case 54:
       case 55:
       case 56:
       case 57:
        return this.readNumber(!1);

       case 34:
       case 39:
        return this.readString(e);

       case 47:
        return this.readToken_slash();

       case 37:
       case 42:
        return this.readToken_mult_modulo_exp(e);

       case 124:
       case 38:
        return this.readToken_pipe_amp(e);

       case 94:
        return this.readToken_caret();

       case 43:
       case 45:
        return this.readToken_plus_min(e);

       case 60:
       case 62:
        return this.readToken_lt_gt(e);

       case 61:
       case 33:
        return this.readToken_eq_excl(e);

       case 63:
        return this.readToken_question();

       case 126:
        return this.finishOp(a.prefix, 1);

       case 35:
        return this.readToken_numberSign();
      }
      this.raise(this.pos, "Unexpected character '" + D(e) + "'");
    }, x.finishOp = function(e, t) {
      var i = this.input.slice(this.pos, this.pos + t);
      return this.pos += t, this.finishToken(e, i);
    }, x.readRegexp = function() {
      var e, t, i = this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(i, "Unterminated regular expression");
        var s = this.input.charAt(this.pos);
        if (w.test(s)) this.raise(i, "Unterminated regular expression");
        if (!e) {
          if (s === "[") t = !0; else if (s === "]" && t) t = !1; else if (s === "/" && !t) break;
          e = s === "\\";
        } else e = !1;
        ++this.pos;
      }
      var r = this.input.slice(i, this.pos);
      ++this.pos;
      var n = this.pos, u = this.readWord1();
      if (this.containsEsc) this.unexpected(n);
      var o = this.regexpState || (this.regexpState = new O(this));
      o.reset(i, r, u), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
      var h = null;
      try {
        h = new RegExp(r, u);
      } catch (l) {}
      return this.finishToken(a.regexp, {
        pattern: r,
        flags: u,
        value: h
      });
    }, x.readInt = function(e, t, i) {
      var s = this.options.ecmaVersion >= 12 && t === void 0, r = i && this.input.charCodeAt(this.pos) === 48, n = this.pos, u = 0, o = 0;
      for (var h = 0, l = t == null ? 1 / 0 : t; h < l; ++h, ++this.pos) {
        var d = this.input.charCodeAt(this.pos), y = void 0;
        if (s && d === 95) {
          if (r) this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
          if (o === 95) this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
          if (h === 0) this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
          o = d;
          continue;
        }
        if (d >= 97) y = d - 97 + 10; else if (d >= 65) y = d - 65 + 10; else if (d >= 48 && d <= 57) y = d - 48; else y = 1 / 0;
        if (y >= e) break;
        o = d, u = u * e + y;
      }
      if (s && o === 95) this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
      if (this.pos === n || t != null && this.pos - n !== t) return null;
      return u;
    };
    function ei(e, t) {
      if (t) return parseInt(e, 8);
      return parseFloat(e.replace(/_/g, ""));
    }
    function xt(e) {
      if (typeof BigInt !== "function") return null;
      return BigInt(e.replace(/_/g, ""));
    }
    x.readRadixNumber = function(e) {
      var t = this.pos;
      this.pos += 2;
      var i = this.readInt(e);
      if (i == null) this.raise(this.start + 2, "Expected number in radix " + e);
      if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) i = xt(this.input.slice(t, this.pos)), 
      ++this.pos; else if (L(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
      return this.finishToken(a.num, i);
    }, x.readNumber = function(e) {
      var t = this.pos;
      if (!e && this.readInt(10, void 0, !0) === null) this.raise(t, "Invalid number");
      var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
      if (i && this.strict) this.raise(t, "Invalid number");
      var s = this.input.charCodeAt(this.pos);
      if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
        var r = xt(this.input.slice(t, this.pos));
        if (++this.pos, L(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
        return this.finishToken(a.num, r);
      }
      if (i && /[89]/.test(this.input.slice(t, this.pos))) i = !1;
      if (s === 46 && !i) ++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos);
      if ((s === 69 || s === 101) && !i) {
        if (s = this.input.charCodeAt(++this.pos), s === 43 || s === 45) ++this.pos;
        if (this.readInt(10) === null) this.raise(t, "Invalid number");
      }
      if (L(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
      var n = ei(this.input.slice(t, this.pos), i);
      return this.finishToken(a.num, n);
    }, x.readCodePoint = function() {
      var e = this.input.charCodeAt(this.pos), t;
      if (e === 123) {
        if (this.options.ecmaVersion < 6) this.unexpected();
        var i = ++this.pos;
        if (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, 
        t > 1114111) this.invalidStringToken(i, "Code point out of bounds");
      } else t = this.readHexChar(4);
      return t;
    }, x.readString = function(e) {
      var t = "", i = ++this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(this.start, "Unterminated string constant");
        var s = this.input.charCodeAt(this.pos);
        if (s === e) break;
        if (s === 92) t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), 
        i = this.pos; else if (s === 8232 || s === 8233) {
          if (this.options.ecmaVersion < 10) this.raise(this.start, "Unterminated string constant");
          if (++this.pos, this.options.locations) this.curLine++, this.lineStart = this.pos;
        } else {
          if (j(s)) this.raise(this.start, "Unterminated string constant");
          ++this.pos;
        }
      }
      return t += this.input.slice(i, this.pos++), this.finishToken(a.string, t);
    };
    var mt = {};
    x.tryReadTemplateToken = function() {
      this.inTemplateElement = !0;
      try {
        this.readTmplToken();
      } catch (e) {
        if (e === mt) this.readInvalidTemplateToken(); else throw e;
      }
      this.inTemplateElement = !1;
    }, x.invalidStringToken = function(e, t) {
      if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw mt; else this.raise(e, t);
    }, x.readTmplToken = function() {
      var e = "", t = this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(this.start, "Unterminated template");
        var i = this.input.charCodeAt(this.pos);
        if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
          if (this.pos === this.start && (this.type === a.template || this.type === a.invalidTemplate)) if (i === 36) return this.pos += 2, 
          this.finishToken(a.dollarBraceL); else return ++this.pos, this.finishToken(a.backQuote);
          return e += this.input.slice(t, this.pos), this.finishToken(a.template, e);
        }
        if (i === 92) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), 
        t = this.pos; else if (j(i)) {
          switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
           case 13:
            if (this.input.charCodeAt(this.pos) === 10) ++this.pos;

           case 10:
            e += `\n`;
            break;

           default:
            e += String.fromCharCode(i);
            break;
          }
          if (this.options.locations) ++this.curLine, this.lineStart = this.pos;
          t = this.pos;
        } else ++this.pos;
      }
    }, x.readInvalidTemplateToken = function() {
      for (;this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
       case "\\":
        ++this.pos;
        break;

       case "$":
        if (this.input[this.pos + 1] !== "{") break;

       case "`":
        return this.finishToken(a.invalidTemplate, this.input.slice(this.start, this.pos));

       case "\r":
        if (this.input[this.pos + 1] === `\n`) ++this.pos;

       case `\n`:
       case "\u2028":
       case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
      }
      this.raise(this.start, "Unterminated template");
    }, x.readEscapedChar = function(e) {
      var t = this.input.charCodeAt(++this.pos);
      switch (++this.pos, t) {
       case 110:
        return `\n`;

       case 114:
        return "\r";

       case 120:
        return String.fromCharCode(this.readHexChar(2));

       case 117:
        return D(this.readCodePoint());

       case 116:
        return "\t";

       case 98:
        return "\b";

       case 118:
        return "\v";

       case 102:
        return "\f";

       case 13:
        if (this.input.charCodeAt(this.pos) === 10) ++this.pos;

       case 10:
        if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
        return "";

       case 56:
       case 57:
        if (this.strict) this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
        if (e) {
          var i = this.pos - 1;
          this.invalidStringToken(i, "Invalid escape sequence in template string");
        }

       default:
        if (t >= 48 && t <= 55) {
          var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], r = parseInt(s, 8);
          if (r > 255) s = s.slice(0, -1), r = parseInt(s, 8);
          if (this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), (s !== "0" || t === 56 || t === 57) && (this.strict || e)) this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode");
          return String.fromCharCode(r);
        }
        if (j(t)) {
          if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
          return "";
        }
        return String.fromCharCode(t);
      }
    }, x.readHexChar = function(e) {
      var t = this.pos, i = this.readInt(16, e);
      if (i === null) this.invalidStringToken(t, "Bad character escape sequence");
      return i;
    }, x.readWord1 = function() {
      this.containsEsc = !1;
      var e = "", t = !0, i = this.pos, s = this.options.ecmaVersion >= 6;
      while (this.pos < this.input.length) {
        var r = this.fullCharCodeAtPos();
        if (B(r, s)) this.pos += r <= 65535 ? 1 : 2; else if (r === 92) {
          this.containsEsc = !0, e += this.input.slice(i, this.pos);
          var n = this.pos;
          if (this.input.charCodeAt(++this.pos) !== 117) this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
          ++this.pos;
          var u = this.readCodePoint();
          if (!(t ? L : B)(u, s)) this.invalidStringToken(n, "Invalid Unicode escape");
          e += D(u), i = this.pos;
        } else break;
        t = !1;
      }
      return e + this.input.slice(i, this.pos);
    }, x.readWord = function() {
      var e = this.readWord1(), t = a.name;
      if (this.keywords.test(e)) t = ne[e];
      return this.finishToken(t, e);
    };
    var vt = "8.15.0";
    _.acorn = {
      Parser: _,
      version: vt,
      defaultOptions: ue,
      Position: W,
      SourceLocation: J,
      getLineInfo: Se,
      Node: se,
      TokenType: v,
      tokTypes: a,
      keywordTypes: ne,
      TokContext: V,
      tokContexts: b,
      isIdentifierChar: B,
      isIdentifierStart: L,
      Token: me,
      isNewLine: j,
      lineBreak: w,
      lineBreakG: Re,
      nonASCIIwhitespace: Ce
    };
    function ti(e, t) {
      return _.parse(e, t);
    }
    function ii(e, t, i) {
      return _.parseExpressionAt(e, t, i);
    }
    function si(e, t) {
      return _.tokenizer(e, t);
    }
    g.Node = se, g.Parser = _, g.Position = W, g.SourceLocation = J, g.TokContext = V, 
    g.Token = me, g.TokenType = v, g.defaultOptions = ue, g.getLineInfo = Se, g.isIdentifierChar = B, 
    g.isIdentifierStart = L, g.isNewLine = j, g.keywordTypes = ne, g.lineBreak = w, 
    g.lineBreakG = Re, g.nonASCIIwhitespace = Ce, g.parse = ti, g.parseExpressionAt = ii, 
    g.tokContexts = b, g.tokTypes = a, g.tokenizer = si, g.version = vt;
  });
});

export { Out };
