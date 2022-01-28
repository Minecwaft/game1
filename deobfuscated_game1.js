var VERSION = 7;
var VECTOR_LENGTH = 100;
var LIST = [
  "v",
  "tz",
  "dnt", 
  "product", 
  "osType",
  "app",
  "vendor", 
  "cookies",
  "mem",
  "con",
  "lang",
  "plugins",
  "gpu",
  "fonts", 
  "audioC", 
  "analyser", 
  "width",
  "height",
  "depth", 
  "lStore",
  "sStore", 
  "video", 
  "audio",
  "media", 
  "permissions", 
  "audioFP",
  "webglFP",
  "canvasFP", 
  "dP",
  "dF",
  "dW",
  "dC",
  "creation", 
  "uuid", 
  "d",
  "osVersion", 
  "vector",
  "userAgent",
  "serverTimeInMS",
  "request"
];
var SERVER_FILE_GAME1_FILE = "https://gameforge.com/tra/game1.js";
var FONTS = Object.keys({
  ".Aqua Kana": false,
  ".Helvetica LT MM": false,
  ".Times LT MM": false,
  "18thCentury": false,
  "8514oem": false,
  "AR BERKLEY": false,
  "AR JULIAN": false,
  "AR PL UKai CN": false,
  "AR PL UMing CN": false,
  "AR PL UMing HK": false,
  "AR PL UMing TW": false,
  "AR PL UMing TW MBE": false,
  Aakar: false,
  "Abadi MT Condensed Extra Bold": false,
  "Abadi MT Condensed Light": false,
  "Abyssinica SIL": false,
  AcmeFont: false,
  "Adobe Arabic": false,
  "Agency FB": false,
  Aharoni: false,
  "Aharoni Bold": false,
  "Al Bayan": false,
  "Al Bayan Bold": false,
  "Al Bayan Plain": false,
  "Al Nile": false,
  "Al Tarikh": false,
  Aldhabi: false,
  Alfredo: false,
  Algerian: false,
  "Alien Encounters": false,
  "Almonte Snow": false,
  "American Typewriter": false,
  "American Typewriter Bold": false,
  "American Typewriter Condensed": false,
  "American Typewriter Light": false,
  Amethyst: false,
  "Andale Mono": false,
  "Andale Mono Version": false,
  Andalus: false,
  "Angsana New": false,
  AngsanaUPC: false,
  Ani: false,
  AnjaliOldLipi: false,
  Aparajita: false,
  "Apple Braille": false,
  "Apple Braille Outline 6 Dot": false,
  "Apple Braille Outline 8 Dot": false,
  "Apple Braille Pinpoint 6 Dot": false,
  "Apple Braille Pinpoint 8 Dot": false,
  "Apple Chancery": false,
  "Apple Color Emoji": false,
  "Apple LiGothic Medium": false,
  "Apple LiSung Light": false,
  "Apple SD Gothic Neo": false,
  "Apple SD Gothic Neo Regular": false,
  "Apple SD GothicNeo ExtraBold": false,
  "Apple Symbols": false,
  AppleGothic: false,
  "AppleGothic Regular": false,
  AppleMyungjo: false,
  "AppleMyungjo Regular": false,
  AquaKana: false,
  "Arabic Transparent": false,
  "Arabic Typesetting": false,
  Arial: true,
  "Arial Baltic": false,
  "Arial Black": true,
  "Arial Bold": false,
  "Arial Bold Italic": false,
  "Arial CE": false,
  "Arial CYR": false,
  "Arial Greek": false,
  "Arial Hebrew": false,
  "Arial Hebrew Bold": false,
  "Arial Italic": false,
  "Arial Narrow": true,
  "Arial Narrow Bold": false,
  "Arial Narrow Bold Italic": false,
  "Arial Narrow Italic": false,
  "Arial Rounded Bold": false,
  "Arial Rounded MT Bold": false,
  "Arial TUR": false,
  "Arial Unicode MS": false,
  ArialHB: false,
  Arimo: false,
  Asimov: false,
  Autumn: false,
  Avenir: false,
  "Avenir Black": false,
  "Avenir Book": false,
  "Avenir Next": false,
  "Avenir Next Bold": false,
  "Avenir Next Condensed": false,
  "Avenir Next Condensed Bold": false,
  "Avenir Next Demi Bold": false,
  "Avenir Next Heavy": false,
  "Avenir Next Regular": false,
  "Avenir Roman": false,
  Ayuthaya: false,
  "BN Jinx": false,
  "BN Machine": false,
  "BOUTON International Symbols": false,
  "Baby Kruffy": false,
  Baghdad: false,
  Bahnschrift: true,
  Balthazar: false,
  "Bangla MN": false,
  "Bangla MN Bold": false,
  "Bangla Sangam MN": false,
  "Bangla Sangam MN Bold": false,
  Baskerville: false,
  "Baskerville Bold": false,
  "Baskerville Bold Italic": false,
  "Baskerville Old Face": false,
  "Baskerville SemiBold": false,
  "Baskerville SemiBold Italic": false,
  Bastion: false,
  Batang: false,
  BatangChe: false,
  "Bauhaus 93": false,
  Beirut: false,
  "Bell MT": false,
  "Bell MT Bold": false,
  "Bell MT Italic": false,
  Bellerose: false,
  "Berlin Sans FB": false,
  "Berlin Sans FB Demi": false,
  "Bernard MT Condensed": false,
  BiauKai: false,
  "Big Caslon": false,
  "Big Caslon Medium": false,
  "Birch Std": false,
  "Bitstream Charter": false,
  "Bitstream Vera Sans": false,
  "Blackadder ITC": false,
  "Blackoak Std": false,
  Bobcat: false,
  "Bodoni 72": false,
  "Bodoni MT": false,
  "Bodoni MT Black": false,
  "Bodoni MT Poster Compressed": false,
  "Bodoni Ornaments": false,
  BolsterBold: false,
  "Book Antiqua": false,
  "Book Antiqua Bold": false,
  "Bookman Old Style": false,
  "Bookman Old Style Bold": false,
  "Bookshelf Symbol 7": false,
  Borealis: false,
  "Bradley Hand": false,
  "Bradley Hand ITC": false,
  Braggadocio: false,
  Brandish: false,
  "Britannic Bold": false,
  Broadway: false,
  "Browallia New": false,
  BrowalliaUPC: false,
  "Brush Script": false,
  "Brush Script MT": false,
  "Brush Script MT Italic": false,
  "Brush Script Std": false,
  Brussels: false,
  Calibri: true,
  "Calibri Bold": false,
  "Calibri Light": true,
  "Californian FB": false,
  "Calisto MT": false,
  "Calisto MT Bold": false,
  Calligraphic: false,
  Calvin: false,
  Cambria: true,
  "Cambria Bold": false,
  "Cambria Math": true,
  Candara: true,
  "Candara Bold": false,
  Candles: false,
  "Carrois Gothic SC": false,
  Castellar: false,
  Centaur: false,
  Century: false,
  "Century Gothic": false,
  "Century Gothic Bold": false,
  "Century Schoolbook": false,
  "Century Schoolbook Bold": false,
  "Century Schoolbook L": false,
  Chalkboard: false,
  "Chalkboard Bold": false,
  "Chalkboard SE": false,
  "Chalkboard SE Bold": false,
  ChalkboardBold: false,
  Chalkduster: false,
  Chandas: false,
  "Chaparral Pro": false,
  "Chaparral Pro Light": false,
  "Charlemagne Std": false,
  Charter: false,
  Chilanka: false,
  Chiller: false,
  Chinyen: false,
  Clarendon: false,
  Cochin: false,
  "Cochin Bold": false,
  Colbert: false,
  "Colonna MT": false,
  "Comic Sans MS": true,
  "Comic Sans MS Bold": false,
  Commons: false,
  Consolas: true,
  "Consolas Bold": false,
  Constantia: true,
  "Constantia Bold": false,
  Coolsville: false,
  "Cooper Black": false,
  "Cooper Std Black": false,
  Copperplate: false,
  "Copperplate Bold": false,
  "Copperplate Gothic Bold": false,
  "Copperplate Light": false,
  Corbel: true,
  "Corbel Bold": false,
  "Cordia New": false,
  CordiaUPC: false,
  Corporate: false,
  Corsiva: false,
  "Corsiva Hebrew": false,
  "Corsiva Hebrew Bold": false,
  Courier: true,
  "Courier 10 Pitch": false,
  "Courier Bold": false,
  "Courier New": true,
  "Courier New Baltic": false,
  "Courier New Bold": false,
  "Courier New CE": false,
  "Courier New Italic": false,
  "Courier Oblique": false,
  "Cracked Johnnie": false,
  Creepygirl: false,
  "Curlz MT": false,
  Cursor: false,
  "Cutive Mono": false,
  "DFKai-SB": false,
  "DIN Alternate": false,
  "DIN Condensed": false,
  Damascus: false,
  "Damascus Bold": false,
  "Dancing Script": false,
  DaunPenh: false,
  David: false,
  Dayton: false,
  "DecoType Naskh": false,
  "Deja Vu": false,
  "DejaVu LGC Sans": false,
  "DejaVu Sans": false,
  "DejaVu Sans Mono": false,
  "DejaVu Serif": false,
  Deneane: false,
  Desdemona: false,
  Detente: false,
  "Devanagari MT": false,
  "Devanagari MT Bold": false,
  "Devanagari Sangam MN": false,
  Didot: false,
  "Didot Bold": false,
  Digifit: false,
  DilleniaUPC: false,
  Dingbats: false,
  "Distant Galaxy": false,
  "Diwan Kufi": false,
  "Diwan Kufi Regular": false,
  "Diwan Thuluth": false,
  "Diwan Thuluth Regular": false,
  DokChampa: false,
  Dominican: false,
  Dotum: false,
  DotumChe: false,
  "Droid Sans": false,
  "Droid Sans Fallback": false,
  "Droid Sans Mono": false,
  Dyuthi: false,
  Ebrima: true,
  "Edwardian Script ITC": false,
  Elephant: false,
  Emmett: false,
  "Engravers MT": false,
  "Engravers MT Bold": false,
  Enliven: false,
  "Eras Bold ITC": false,
  "Estrangelo Edessa": false,
  Ethnocentric: false,
  EucrosiaUPC: false,
  Euphemia: false,
  "Euphemia UCAS": false,
  "Euphemia UCAS Bold": false,
  Eurostile: false,
  "Eurostile Bold": false,
  "Expressway Rg": false,
  FangSong: false,
  Farah: false,
  Farisi: false,
  "Felix Titling": false,
  Fingerpop: false,
  Fixedsys: false,
  Flubber: false,
  "Footlight MT Light": false,
  Forte: false,
  FrankRuehl: false,
  "Frankfurter Venetian TT": false,
  "Franklin Gothic Book": false,
  "Franklin Gothic Book Italic": false,
  "Franklin Gothic Medium": true,
  "Franklin Gothic Medium Cond": false,
  "Franklin Gothic Medium Italic": false,
  FreeMono: false,
  FreeSans: false,
  FreeSerif: false,
  FreesiaUPC: false,
  "Freestyle Script": false,
  "French Script MT": false,
  Futura: false,
  "Futura Condensed ExtraBold": false,
  "Futura Medium": false,
  "GB18030 Bitmap": false,
  Gabriola: true,
  Gadugi: true,
  Garamond: false,
  "Garamond Bold": false,
  Gargi: false,
  Garuda: false,
  Gautami: false,
  Gazzarelli: false,
  "Geeza Pro": false,
  "Geeza Pro Bold": false,
  Geneva: false,
  GenevaCY: false,
  Gentium: false,
  "Gentium Basic": false,
  "Gentium Book Basic": false,
  GentiumAlt: false,
  Georgia: true,
  "Georgia Bold": false,
  "Geotype TT": false,
  "Giddyup Std": false,
  Gigi: false,
  Gill: false,
  "Gill Sans": false,
  "Gill Sans Bold": false,
  "Gill Sans MT": false,
  "Gill Sans MT Bold": false,
  "Gill Sans MT Condensed": false,
  "Gill Sans MT Ext Condensed Bold": false,
  "Gill Sans MT Italic": false,
  "Gill Sans Ultra Bold": false,
  "Gill Sans Ultra Bold Condensed": false,
  Gisha: false,
  Glockenspiel: false,
  "Gloucester MT Extra Condensed": false,
  "Good Times": false,
  Goudy: false,
  "Goudy Old Style": false,
  "Goudy Old Style Bold": false,
  "Goudy Stout": false,
  "Greek Diner Inline TT": false,
  Gubbi: false,
  "Gujarati MT": false,
  "Gujarati MT Bold": false,
  "Gujarati Sangam MN": false,
  "Gujarati Sangam MN Bold": false,
  Gulim: false,
  GulimChe: false,
  "GungSeo Regular": false,
  Gungseouche: false,
  Gungsuh: false,
  GungsuhChe: false,
  Gurmukhi: false,
  "Gurmukhi MN": false,
  "Gurmukhi MN Bold": false,
  "Gurmukhi MT": false,
  "Gurmukhi Sangam MN": false,
  "Gurmukhi Sangam MN Bold": false,
  Haettenschweiler: false,
  "Hand Me Down S (BRK)": false,
  Hansen: false,
  "Harlow Solid Italic": false,
  Harrington: false,
  Harvest: false,
  HarvestItal: false,
  "Haxton Logos TT": false,
  "HeadLineA Regular": false,
  HeadlineA: false,
  "Heavy Heap": false,
  Hei: false,
  "Hei Regular": false,
  "Heiti SC": false,
  "Heiti SC Light": false,
  "Heiti SC Medium": false,
  "Heiti TC": false,
  "Heiti TC Light": false,
  "Heiti TC Medium": false,
  Helvetica: true,
  "Helvetica Bold": false,
  "Helvetica CY Bold": false,
  "Helvetica CY Plain": false,
  "Helvetica LT Std": false,
  "Helvetica Light": false,
  "Helvetica Neue": false,
  "Helvetica Neue Bold": false,
  "Helvetica Neue Medium": false,
  "Helvetica Oblique": false,
  HelveticaCY: false,
  "HelveticaNeueLT Com 107 XBlkCn": false,
  Herculanum: false,
  "High Tower Text": false,
  Highboot: false,
  "Hiragino Kaku Gothic Pro W3": false,
  "Hiragino Kaku Gothic Pro W6": false,
  "Hiragino Kaku Gothic ProN W3": false,
  "Hiragino Kaku Gothic ProN W6": false,
  "Hiragino Kaku Gothic Std W8": false,
  "Hiragino Kaku Gothic StdN W8": false,
  "Hiragino Maru Gothic Pro W4": false,
  "Hiragino Maru Gothic ProN W4": false,
  "Hiragino Mincho Pro W3": false,
  "Hiragino Mincho Pro W6": false,
  "Hiragino Mincho ProN W3": false,
  "Hiragino Mincho ProN W6": false,
  "Hiragino Sans GB W3": false,
  "Hiragino Sans GB W6": false,
  "Hiragino Sans W0": false,
  "Hiragino Sans W1": false,
  "Hiragino Sans W2": false,
  "Hiragino Sans W3": false,
  "Hiragino Sans W4": false,
  "Hiragino Sans W5": false,
  "Hiragino Sans W6": false,
  "Hiragino Sans W7": false,
  "Hiragino Sans W8": false,
  "Hiragino Sans W9": false,
  "Hobo Std": false,
  "Hoefler Text": false,
  "Hoefler Text Black": false,
  "Hoefler Text Ornaments": false,
  "Hollywood Hills": false,
  Hombre: false,
  "Huxley Titling": false,
  "ITC Stone Serif": false,
  "ITF Devanagari": false,
  "ITF Devanagari Marathi": false,
  "ITF Devanagari Medium": false,
  Impact: true,
  "Imprint MT Shadow": false,
  InaiMathi: false,
  Induction: false,
  "Informal Roman": false,
  "Ink Free": true,
  IrisUPC: false,
  "Iskoola Pota": false,
  Italianate: false,
  Jamrul: false,
  JasmineUPC: false,
  "Javanese Text": true,
  Jokerman: false,
  "Juice ITC": false,
  KacstArt: false,
  KacstBook: false,
  KacstDecorative: false,
  KacstDigital: false,
  KacstFarsi: false,
  KacstLetter: false,
  KacstNaskh: false,
  KacstOffice: false,
  KacstOne: false,
  KacstPen: false,
  KacstPoster: false,
  KacstQurn: false,
  KacstScreen: false,
  KacstTitle: false,
  KacstTitleL: false,
  Kai: false,
  "Kai Regular": false,
  KaiTi: false,
  Kailasa: false,
  "Kailasa Regular": false,
  "Kaiti SC": false,
  "Kaiti SC Black": false,
  Kalapi: false,
  Kalimati: false,
  Kalinga: false,
  "Kannada MN": false,
  "Kannada MN Bold": false,
  "Kannada Sangam MN": false,
  "Kannada Sangam MN Bold": false,
  Kartika: false,
  Karumbi: false,
  Kedage: false,
  Kefa: false,
  "Kefa Bold": false,
  Keraleeyam: false,
  Keyboard: false,
  "Khmer MN": false,
  "Khmer MN Bold": false,
  "Khmer OS": false,
  "Khmer OS System": false,
  "Khmer Sangam MN": false,
  "Khmer UI": false,
  Kinnari: false,
  "Kino MT": false,
  KodchiangUPC: false,
  "Kohinoor Bangla": false,
  "Kohinoor Devanagari": false,
  "Kohinoor Telugu": false,
  Kokila: false,
  Kokonor: false,
  "Kokonor Regular": false,
  "Kozuka Gothic Pr6N B": false,
  "Kristen ITC": false,
  Krungthep: false,
  KufiStandardGK: false,
  "KufiStandardGK Regular": false,
  "Kunstler Script": false,
  Laksaman: false,
  "Lao MN": false,
  "Lao Sangam MN": false,
  "Lao UI": false,
  LastResort: false,
  Latha: false,
  Leelawadee: false,
  "Letter Gothic Std": false,
  "LetterOMatic!": false,
  "Levenim MT": false,
  "LiHei Pro": false,
  "LiSong Pro": false,
  "Liberation Mono": false,
  "Liberation Sans": false,
  "Liberation Sans Narrow": false,
  "Liberation Serif": false,
  Likhan: false,
  LilyUPC: false,
  Limousine: false,
  "Lithos Pro Regular": false,
  LittleLordFontleroy: false,
  "Lohit Assamese": false,
  "Lohit Bengali": false,
  "Lohit Devanagari": false,
  "Lohit Gujarati": false,
  "Lohit Gurmukhi": false,
  "Lohit Hindi": false,
  "Lohit Kannada": false,
  "Lohit Malayalam": false,
  "Lohit Odia": false,
  "Lohit Punjabi": false,
  "Lohit Tamil": false,
  "Lohit Tamil Classical": false,
  "Lohit Telugu": false,
  Loma: false,
  "Lucida Blackletter": false,
  "Lucida Bright": false,
  "Lucida Bright Demibold": false,
  "Lucida Bright Demibold Italic": false,
  "Lucida Bright Italic": false,
  "Lucida Calligraphy": false,
  "Lucida Calligraphy Italic": false,
  "Lucida Console": true,
  "Lucida Fax": false,
  "Lucida Fax Demibold": false,
  "Lucida Fax Regular": false,
  "Lucida Grande": false,
  "Lucida Grande Bold": false,
  "Lucida Handwriting": false,
  "Lucida Handwriting Italic": false,
  "Lucida Sans": false,
  "Lucida Sans Demibold Italic": false,
  "Lucida Sans Typewriter": false,
  "Lucida Sans Typewriter Bold": false,
  "Lucida Sans Unicode": true,
  Luminari: false,
  "Luxi Mono": false,
  "MS Gothic": true,
  "MS Mincho": false,
  "MS Outlook": false,
  "MS PGothic": true,
  "MS PMincho": false,
  "MS Reference Sans Serif": false,
  "MS Reference Specialty": false,
  "MS Sans Serif": true,
  "MS Serif": true,
  "MS UI Gothic": true,
  "MT Extra": false,
  "MV Boli": true,
  Mael: false,
  Magneto: false,
  "Maiandra GD": false,
  "Malayalam MN": false,
  "Malayalam MN Bold": false,
  "Malayalam Sangam MN": false,
  "Malayalam Sangam MN Bold": false,
  "Malgun Gothic": true,
  Mallige: false,
  Mangal: false,
  Manorly: false,
  Marion: false,
  "Marion Bold": false,
  "Marker Felt": false,
  "Marker Felt Thin": false,
  Marlett: true,
  Martina: false,
  "Matura MT Script Capitals": false,
  Meera: false,
  Meiryo: false,
  "Meiryo Bold": false,
  "Meiryo UI": false,
  MelodBold: false,
  Menlo: false,
  "Menlo Bold": false,
  "Mesquite Std": false,
  Microsoft: false,
  "Microsoft Himalaya": true,
  "Microsoft JhengHei": true,
  "Microsoft JhengHei UI": true,
  "Microsoft New Tai Lue": true,
  "Microsoft PhagsPa": true,
  "Microsoft Sans Serif": true,
  "Microsoft Tai Le": true,
  "Microsoft Tai Le Bold": false,
  "Microsoft Uighur": false,
  "Microsoft YaHei": true,
  "Microsoft YaHei UI": true,
  "Microsoft Yi Baiti": true,
  Minerva: false,
  MingLiU: false,
  "MingLiU-ExtB": true,
  MingLiU_HKSCS: false,
  "Minion Pro": false,
  Miriam: false,
  Mishafi: false,
  "Mishafi Gold": false,
  Mistral: false,
  Modern: false,
  "Modern No. 20": false,
  Monaco: false,
  "Mongolian Baiti": true,
  Monospace: false,
  "Monotype Corsiva": false,
  "Monotype Sorts": false,
  MoolBoran: false,
  Moonbeam: false,
  MotoyaLMaru: false,
  Mshtakan: false,
  "Mshtakan Bold": false,
  "Mukti Narrow": false,
  Muna: false,
  "Myanmar MN": false,
  "Myanmar MN Bold": false,
  "Myanmar Sangam MN": false,
  "Myanmar Text": true,
  Mycalc: false,
  "Myriad Arabic": false,
  "Myriad Hebrew": false,
  "Myriad Pro": false,
  NISC18030: false,
  NSimSun: true,
  Nadeem: false,
  "Nadeem Regular": false,
  Nakula: false,
  "Nanum Barun Gothic": false,
  "Nanum Gothic": false,
  "Nanum Myeongjo": false,
  NanumBarunGothic: false,
  NanumGothic: false,
  "NanumGothic Bold": false,
  NanumGothicCoding: false,
  NanumMyeongjo: false,
  "NanumMyeongjo Bold": false,
  Narkisim: false,
  Nasalization: false,
  Navilu: false,
  "Neon Lights": false,
  "New Peninim MT": false,
  "New Peninim MT Bold": false,
  "News Gothic MT": false,
  "News Gothic MT Bold": false,
  "Niagara Engraved": false,
  "Niagara Solid": false,
  "Nimbus Mono L": false,
  "Nimbus Roman No9 L": false,
  "Nimbus Sans L": false,
  "Nimbus Sans L Condensed": false,
  Nina: false,
  "Nirmala UI": true,
  "Nirmala.ttf": false,
  Norasi: false,
  Noteworthy: false,
  "Noteworthy Bold": false,
  "Noto Color Emoji": false,
  "Noto Emoji": false,
  "Noto Mono": false,
  "Noto Naskh Arabic": false,
  "Noto Nastaliq Urdu": false,
  "Noto Sans": false,
  "Noto Sans Armenian": false,
  "Noto Sans Bengali": false,
  "Noto Sans CJK": false,
  "Noto Sans Canadian Aboriginal": false,
  "Noto Sans Cherokee": false,
  "Noto Sans Devanagari": false,
  "Noto Sans Ethiopic": false,
  "Noto Sans Georgian": false,
  "Noto Sans Gujarati": false,
  "Noto Sans Gurmukhi": false,
  "Noto Sans Hebrew": false,
  "Noto Sans JP": false,
  "Noto Sans KR": false,
  "Noto Sans Kannada": false,
  "Noto Sans Khmer": false,
  "Noto Sans Lao": false,
  "Noto Sans Malayalam": false,
  "Noto Sans Myanmar": false,
  "Noto Sans Oriya": false,
  "Noto Sans SC": false,
  "Noto Sans Sinhala": false,
  "Noto Sans Symbols": false,
  "Noto Sans TC": false,
  "Noto Sans Tamil": false,
  "Noto Sans Telugu": false,
  "Noto Sans Thai": false,
  "Noto Sans Yi": false,
  "Noto Serif": false,
  Notram: false,
  November: false,
  "Nueva Std": false,
  "Nueva Std Cond": false,
  Nyala: false,
  "OCR A Extended": false,
  "OCR A Std": false,
  "Old English Text MT": false,
  OldeEnglish: false,
  Onyx: false,
  OpenSymbol: false,
  OpineHeavy: false,
  Optima: false,
  "Optima Bold": false,
  "Optima Regular": false,
  "Orator Std": false,
  "Oriya MN": false,
  "Oriya MN Bold": false,
  "Oriya Sangam MN": false,
  "Oriya Sangam MN Bold": false,
  Osaka: false,
  "Osaka-Mono": false,
  OsakaMono: false,
  "PCMyungjo Regular": false,
  PCmyoungjo: false,
  PMingLiU: false,
  "PMingLiU-ExtB": true,
  "PR Celtic Narrow": false,
  "PT Mono": false,
  "PT Sans": false,
  "PT Sans Bold": false,
  "PT Sans Caption Bold": false,
  "PT Sans Narrow Bold": false,
  "PT Serif": false,
  Padauk: false,
  "Padauk Book": false,
  Padmaa: false,
  Pagul: false,
  "Palace Script MT": false,
  Palatino: false,
  "Palatino Bold": false,
  "Palatino Linotype": true,
  "Palatino Linotype Bold": false,
  Papyrus: false,
  "Papyrus Condensed": false,
  Parchment: false,
  "Parry Hotter": false,
  PenultimateLight: false,
  Perpetua: false,
  "Perpetua Bold": false,
  "Perpetua Titling MT": false,
  "Perpetua Titling MT Bold": false,
  "Phetsarath OT": false,
  Phosphate: false,
  "Phosphate Inline": false,
  "Phosphate Solid": false,
  PhrasticMedium: false,
  "PilGi Regular": false,
  Pilgiche: false,
  "PingFang HK": false,
  "PingFang SC": false,
  "PingFang TC": false,
  Pirate: false,
  "Plantagenet Cherokee": false,
  Playbill: false,
  "Poor Richard": false,
  "Poplar Std": false,
  Pothana2000: false,
  "Prestige Elite Std": false,
  Pristina: false,
  Purisa: false,
  QuiverItal: false,
  Raanana: false,
  "Raanana Bold": false,
  Raavi: false,
  Rachana: false,
  "Rage Italic": false,
  RaghuMalayalam: false,
  Ravie: false,
  Rekha: false,
  Roboto: false,
  Rockwell: false,
  "Rockwell Bold": false,
  "Rockwell Condensed": false,
  "Rockwell Extra Bold": false,
  "Rockwell Italic": false,
  Rod: false,
  Roland: false,
  Rondalo: false,
  "Rosewood Std Regular": false,
  RowdyHeavy: false,
  "Russel Write TT": false,
  "SF Movie Poster": false,
  STFangsong: false,
  STHeiti: false,
  STIXGeneral: false,
  "STIXGeneral-Bold": false,
  "STIXGeneral-Regular": false,
  STIXIntegralsD: false,
  "STIXIntegralsD-Bold": false,
  STIXIntegralsSm: false,
  "STIXIntegralsSm-Bold": false,
  STIXIntegralsUp: false,
  "STIXIntegralsUp-Bold": false,
  "STIXIntegralsUp-Regular": false,
  STIXIntegralsUpD: false,
  "STIXIntegralsUpD-Bold": false,
  "STIXIntegralsUpD-Regular": false,
  STIXIntegralsUpSm: false,
  "STIXIntegralsUpSm-Bold": false,
  STIXNonUnicode: false,
  "STIXNonUnicode-Bold": false,
  STIXSizeFiveSym: false,
  "STIXSizeFiveSym-Regular": false,
  STIXSizeFourSym: false,
  "STIXSizeFourSym-Bold": false,
  STIXSizeOneSym: false,
  "STIXSizeOneSym-Bold": false,
  STIXSizeThreeSym: false,
  "STIXSizeThreeSym-Bold": false,
  STIXSizeTwoSym: false,
  "STIXSizeTwoSym-Bold": false,
  STIXVariants: false,
  "STIXVariants-Bold": false,
  STKaiti: false,
  STSong: false,
  STXihei: false,
  "SWGamekeys MT": false,
  Saab: false,
  Sahadeva: false,
  "Sakkal Majalla": false,
  Salina: false,
  Samanata: false,
  "Samyak Devanagari": false,
  "Samyak Gujarati": false,
  "Samyak Malayalam": false,
  "Samyak Tamil": false,
  Sana: false,
  "Sana Regular": false,
  Sans: false,
  Sarai: false,
  Sathu: false,
  "Savoye LET Plain:1.0": false,
  Sawasdee: false,
  Script: false,
  "Script MT Bold": false,
  "Segoe MDL2 Assets": true,
  "Segoe Print": true,
  "Segoe Pseudo": false,
  "Segoe Script": true,
  "Segoe UI": true,
  "Segoe UI Emoji": true,
  "Segoe UI Historic": true,
  "Segoe UI Semilight": false,
  "Segoe UI Symbol": true,
  Serif: false,
  "Shonar Bangla": false,
  "Showcard Gothic": false,
  "Shree Devanagari 714": false,
  Shruti: false,
  "SignPainter-HouseScript": false,
  Silom: false,
  SimHei: false,
  SimSun: true,
  "SimSun-ExtB": true,
  "Simplified Arabic": false,
  "Simplified Arabic Fixed": false,
  "Sinhala MN": false,
  "Sinhala MN Bold": false,
  "Sinhala Sangam MN": false,
  "Sinhala Sangam MN Bold": false,
  Sitka: false,
  Skia: false,
  "Skia Regular": false,
  Skinny: false,
  "Small Fonts": false,
  "Snap ITC": false,
  "Snell Roundhand": false,
  Snowdrift: false,
  "Songti SC": false,
  "Songti SC Black": false,
  "Songti TC": false,
  "Source Code Pro": false,
  Splash: false,
  "Standard Symbols L": false,
  Stencil: false,
  "Stencil Std": false,
  Stephen: false,
  "Sukhumvit Set": false,
  Suruma: false,
  Sylfaen: true,
  Symbol: true,
  Symbole: false,
  System: false,
  "System Font": false,
  TAMu_Kadambri: false,
  TAMu_Kalyani: false,
  TAMu_Maduram: false,
  TSCu_Comic: false,
  TSCu_Paranar: false,
  TSCu_Times: false,
  Tahoma: true,
  "Tahoma Negreta": false,
  TakaoExGothic: false,
  TakaoExMincho: false,
  TakaoGothic: false,
  TakaoMincho: false,
  TakaoPGothic: false,
  TakaoPMincho: false,
  "Tamil MN": false,
  "Tamil MN Bold": false,
  "Tamil Sangam MN": false,
  "Tamil Sangam MN Bold": false,
  Tarzan: false,
  "Tekton Pro": false,
  "Tekton Pro Cond": false,
  "Tekton Pro Ext": false,
  "Telugu MN": false,
  "Telugu MN Bold": false,
  "Telugu Sangam MN": false,
  "Telugu Sangam MN Bold": false,
  "Tempus Sans ITC": false,
  Terminal: false,
  "Terminator Two": false,
  Thonburi: false,
  "Thonburi Bold": false,
  "Tibetan Machine Uni": false,
  Times: true,
  "Times Bold": false,
  "Times New Roman": true,
  "Times New Roman Baltic": false,
  "Times New Roman Bold": false,
  "Times New Roman Italic": false,
  "Times Roman": false,
  "Tlwg Mono": false,
  "Tlwg Typewriter": false,
  "Tlwg Typist": false,
  "Tlwg Typo": false,
  TlwgMono: false,
  TlwgTypewriter: false,
  Toledo: false,
  "Traditional Arabic": false,
  "Trajan Pro": false,
  Trattatello: false,
  "Trebuchet MS": true,
  "Trebuchet MS Bold": false,
  Tunga: false,
  "Tw Cen MT": false,
  "Tw Cen MT Bold": false,
  "Tw Cen MT Italic": false,
  "URW Bookman L": false,
  "URW Chancery L": false,
  "URW Gothic L": false,
  "URW Palladio L": false,
  Ubuntu: false,
  "Ubuntu Condensed": false,
  "Ubuntu Mono": false,
  Ukai: false,
  "Ume Gothic": false,
  "Ume Mincho": false,
  "Ume P Gothic": false,
  "Ume P Mincho": false,
  "Ume UI Gothic": false,
  Uming: false,
  Umpush: false,
  UnBatang: false,
  UnDinaru: false,
  UnDotum: false,
  UnGraphic: false,
  UnGungseo: false,
  UnPilgi: false,
  Untitled1: false,
  "Urdu Typesetting": false,
  Uroob: false,
  Utkal: false,
  Utopia: false,
  Utsaah: false,
  Valken: false,
  Vani: false,
  Vemana2000: false,
  Verdana: true,
  "Verdana Bold": false,
  Vijaya: false,
  "Viner Hand ITC": false,
  Vivaldi: false,
  Vivian: false,
  "Vladimir Script": false,
  Vrinda: false,
  Waree: false,
  Waseem: false,
  Waverly: false,
  Webdings: true,
  "WenQuanYi Bitmap Song": false,
  "WenQuanYi Micro Hei": false,
  "WenQuanYi Micro Hei Mono": false,
  "WenQuanYi Zen Hei": false,
  "Whimsy TT": false,
  "Wide Latin": false,
  Wingdings: true,
  "Wingdings 2": false,
  "Wingdings 3": false,
  Woodcut: false,
  "X-Files": false,
  "Year supply of fairy cakes": false,
  "Yu Gothic": true,
  "Yu Mincho": false,
  "Yuppy SC": false,
  "Yuppy SC Regular": false,
  "Yuppy TC": false,
  "Yuppy TC Regular": false,
  "Zapf Dingbats": false,
  Zapfino: false,
  "Zawgyi-One": false,
  gargi: false,
  lklug: false,
  mry_KacstQurn: false,
  ori1Uni: false
});

var getAudioFingerprint = () => {
  try {
    const audioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!audioContext) 
      return -2;
    const hashFromIndex = 4500;
    const audioContextLength = 5000;
    const context = new audioContext(1, audioContextLength, 44100);

    const oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.value = 10000;

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;

    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);

    var [renderPromise, finishRendering] = startRenderingAudio(context);

    const fingerprintPromise = renderPromise.then( (buffer) => 
      getHash(buffer.getChannelData(0).subarray(hashFromIndex)), (error) => {
        if (error.name === "timeout" || error.name === "suspended")
          return "timeout";
        throw error;
      }
    );
    fingerprintPromise.catch(() => undefined);
    finishRendering();
    return fingerprintPromise;
  } catch (error) {
    return -1;
  }
}

function startRenderingAudio(context) {
  const renderTryMaxCount = 3;
  const renderRetryDelay = 500;
  const runningMaxAwaitTime = 500;
  const runningSufficientTime = 5000;
  let finalize = () => undefined

  const resultPromise = new Promise((resolve, reject) => {
    var isFinalized = false;
    var renderTryCount = 0;
    var startedRunningAt = 0;

    context.oncomplete = (event) => resolve(event.renderedBuffer);

    const startRunningTimeout = () => {
      setTimeout(() => 
        reject(makeInnerError("timeout")), Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
    }

    const tryRender = () => {
      try {
        context.startRendering();
        switch (context.state) {
          case "running":
            startedRunningAt = Date.now();
            if(isFinalized) {
              startRunningTimeout();
            }
            break;
          case "suspended":
            if(!document.hidden) {
              renderTryCount++;
            }
            if(isFinalized && renderTryCount >= renderTryMaxCount) {
              reject(makeInnerError("suspended"));
            }
            else {
              setTimeout(tryRender, renderRetryDelay);
            }
            break;
        }
      } catch (error) {
        reject(error);
      }
    }

    tryRender();
    finalize = () => {
      if (!isFinalized) {
        isFinalized = true
        if (startedRunningAt > 0) {
          startRunningTimeout();
        }
      }
    }
  });

  return [resultPromise, finalize];
}

function getHash(input) {
  var result = 0;
  for (let i = 0; i < input.length; ++i) {
    result += Math.abs(input[i]);
  }
  return result;
}

function makeInnerError(name) {
  const error = new Error(name)
  error.name = name;
  return error;
}

var getBrowserEngine = browserEngine => {
  try {
    const engineList = {
      Chrome: "Blink",
      Opera: "Blink",
      Mozilla: "Gecko",
      Edge: "Blink",
      Safari: "WebKit",
      Firefox: "Gecko",
      "Internet Explorer": "Trident"
    }
    return engineList[browserEngine] || "Other";
  } catch (error) {
    return "Other";
  }
}

var getPlatformInfo = () => {
  try {
    const platformList = [
      {
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0)/
      },
      {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
      },
      {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
      },
      {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
      },
      {
        s: "Windows Vista",
        r: /Windows NT 6.0/
      },
      {
        s: "Windows Server 2003",
        r: /Windows NT 5.2/
      },
      {
        s: "Windows XP",
        r: /(Windows NT 5.1|Windows XP)/
      },
      {
        s: "Windows 2000",
        r: /(Windows NT 5.0|Windows 2000)/
      },
      {
        s: "Windows ME",
        r: /(Win 9x 4.90|Windows ME)/
      },
      {
        s: "Windows 98",
        r: /(Windows 98|Win98)/
      },
      {
        s: "Windows 95",
        r: /(Windows 95|Win95|Windows_95)/
      },
      {
        s: "Windows NT 4.0",
        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
      },
      {
        s: "Windows CE",
        r: /Windows CE/
      },
      {
        s: "Windows 3.11",
        r: /Win16/
      },
      {
        s: "Android",
        r: /Android/
      },
      {
        s: "Open BSD",
        r: /OpenBSD/
      },
      {
        s: "Sun OS",
        r: /SunOS/
      },
      {
        s: "Chrome OS",
        r: /CrOS/
      },
      {
        s: "Linux",
        r: /(Linux|X11(?!.*CrOS))/
      },
      {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
      },
      {
        s: "Mac OS X",
        r: /Mac OS X/
      },
      {
        s: "Mac OS",
        r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      },
      {
        s: "QNX",
        r: /QNX/
      },
      {
        s: "UNIX",
        r: /UNIX/
      },
      {
        s: "BeOS",
        r: /BeOS/
      },
      {
        s: "OS\/2",
        r: /OS\/2/
      },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
      }
    ]

    var platformVersion;

    var platformName = platformList.filter(platform =>
      platform.r.test(navigator.userAgent))[0].s;

    /Windows/.test(platformName) && ((platformVersion = /Windows (.*)/.exec(platformName)[1]), (platformName = "Windows"));

    switch (platformName) {
      case "Mac OS":
      case "Mac OS X":
      case "Android":
        platformVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(navigator.userAgent)[1];
        break

      case "iOS":
        platformVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
        platformVersion = platformVersion[1] + "." + platformVersion[2] + "." + (platformVersion[3] | 0);
        break
    }

    return {
      name: platformName,
      version: platformVersion
    }
  } catch (error) {
    return {
      name: "Unknown",
      version: "Unknown"
    }
  }
}

var getBrowserInfo = () => {
  try {
    const uagent = navigator.userAgent;
    const browserList = [
      {
        name: "Opera",
        getInfo: start => {
          if (uagent.indexOf("Version") !== -1)
            return {
              name: "Opera",
              version: uagent.substring(start + 8)
            }
          return {
            name: "Opera",
            version: uagent.substring(start + 6)
          }
        }
      },
      {
        name: "OPR",
        getInfo: start => {
          return {
            name: "Opera",
            version: uagent.substring(start + 4)
          }
        }
      },
      {
        name: "Edge",
        getInfo: start => {
          return {
            name: "Edge",
            version: uagent.substring(start + 5)
          }
        }
      },
      {
        name: "Edg",
        getInfo: start => {
          return {
            name: "Edge",
            version: uagent.substring(start + 4)
          }
        }
      },
      {
        name: "MSIE",
        getInfo: start => {
          return {
            name: "Internet Explorer",
            version: uagent.substring(start + 5)
          }
        }
      },
      {
        name: "Chrome",
        getInfo: start => {
          return {
            name: "Chrome",
            version: uagent.substring(start + 7)
          }
        }
      },
      {
        name: "Safari",
        getInfo: start => {

          const safariVersion = uagent.indexOf("Version");

          if (safariVersion !== -1)
            return {
              name: "Safari",
              version: uagent.substring(start + 8)
            }
          return {
            name: "Safari",
            version: uagent.substring(start + 7)
          }
        }
      },
      {
        name: "Firefox",
        getInfo: start => {
          return {
            name: "Firefox",
            version: uagent.substring(start + 8)
          }
        }
      },
      {
        name: "Trident/",
        getInfo: () => {
          return {
            name: "Internet Explorer",
            version: uagent.substring(uagent.indexOf("rv:") + 3)
          }
        }
      }
    ];
    return browserList.filter(({ name: _name }) => 
      uagent.indexOf(_name) !== -1).map(({ getInfo: info, name: _name2 }) =>
        info(uagent.indexOf(_name2)))[0];
  } catch (error) {
    return {
      name: "Unknown",
      version: "Unknown"
    }
  }
}

var canvasFingerPrint = () => {
  try {
    const canvas = document.createElement("canvas");
    const canvasContext = canvas.getContext("2d");
    const text = "i9asdm..$#po((^@KbXrww!~cz";

    canvasContext.textBaseline = "top";
    canvasContext.font = "16px 'Arial'";
    canvasContext.textBaseline = "alphabetic";
    canvasContext.rotate(0.05);
    canvasContext.fillStyle = "#f60";
    canvasContext.fillRect(125, 1, 62, 20);
    canvasContext.fillStyle = "#069";
    canvasContext.fillText(text, 2, 15);
    canvasContext.fillStyle = "rgba(102, 200, 0, 0.7)";
    canvasContext.fillText(text, 4, 17);
    canvasContext.shadowBlur = 10;
    canvasContext.shadowColor = "blue";
    canvasContext.fillRect(-20, 10, 234, 5);

    const dataURL = canvas.toDataURL();
    var result = 0;
    if (dataURL.length === 0) 
      return "nothing!"

    for (let i = 0; i < dataURL.length; i++) {
      const charCode = dataURL.charCodeAt(i);
      result = (result << 5) - result + charCode;
      result = result & result;
    }
    return result;
  } catch (error) {
    return -1;
  }
}

var webglFingerPrint = () => {
  try {
    const width = 256;
    const height = 128;
    const canvas = document.createElement(canvas);
    canvas.width = width;
    canvas.height = height;

    const webglContext = canvas.getContext("webgl2") ||
      canvas.getContext("experimental-webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("moz-webgl");

    try {
      const shaderSourceCode = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
      const fragmentShaderSourceCode = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
      const buffer = webglContext.createBuffer();
      webglContext.bindBuffer(webglContext.ARRAY_BUFFER, buffer);
      const floatArray = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);
      webglContext.bufferData(webglContext.ARRAY_BUFFER, floatArray, webglContext.STATIC_DRAW);
      buffer.itemSize = 3;
      buffer.numItems = 3;
      const program = webglContext.createProgram();
      const shader = webglContext.createShader("VERTEX_SHADER");
      webglContext.shaderSource(shader, shaderSourceCode);
      webglContext.compileShader(shader);
      const fragmentShader = webglContext.createShader(webglContext.FRAGMENT_SHADER);
      webglContext.shaderSource(fragmentShader, fragmentShaderSourceCode);
      webglContext.compileShader(fragmentShader);
      webglContext.attachShader(program, shader);
      webglContext.attachShader(program, fragmentShader);
      webglContext.linkProgram(program);
      webglContext.useProgram(program);
      program.vertexPosAttrib = webglContext.getAttribLocation(program,"attrVertex");
      program.offsetUniform = webglContext.getUniformLocation(program,"uniformOffset");
      webglContext.enableVertexAttribArray(program.vertexPosArray);
      webglContext.vertexAttribPointer(program.vertexPosAttrib, buffer.itemSize, webglContext.FLOAT, false, 0, 0);
      webglContext.uniform2f(program.offsetUniform, 1, 1);
      webglContext.drawArrays(webglContext.TRIANGLE_STRIP, 0, buffer.numItems);
    } catch (error) {
      console.log(error);
    }

    const pixelBuffer = new Uint8Array(131072);
    webglContext.readPixels(0, 0, width, height, webglContext.RGBA, webglContext.UNSIGNED_BYTE, pixelBuffer);
    const pixels = JSON.stringify(pixelBuffer).replace(/,?"[0-9]+":/g, "");
    return sha256(pixels);
  } catch (error) {
    return "-1";
  }
}

var sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
		return (value >>> amount) | (value << (32 - amount));
	};
  var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length';
	var i, j;
	var result = '';
  var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;

  var hash = sha256.h = sha256.h || [];
  var k = sha256.k = sha256.k || [];
  var primeCounter = k[lengthProperty];
  var isComposite = {};

  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
			k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while (ascii[lengthProperty] % 64 - 56) 
    ascii += '\x00';

  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) 
      return;
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength);

  for (j = 0; j < words[lengthProperty];) {
    var w = words.slice(j, j += 16);
		var oldHash = hash;
		hash = hash.slice(0, 8);
    for (i = 0; i < 64; i++) {
      var i2 = i + j;
			var w15 = w[i - 15], w2 = w[i - 2];
			var a = hash[0], e = hash[4];
      var temp1 = hash[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + ((e&hash[5]) ^ ((~e)&hash[6])) + k[i] + (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>>  3)) + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>> 10))) | 0);
      var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
      hash = [(temp1 + temp2)|0].concat(hash);
			hash[4] = (hash[4] + temp1)|0;
    }

    for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i]) | 0;
		}
  }

  for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i] >> (j * 8)) & 255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
}

var sha256J = input => sha256(JSON.stringify(input));

var getMediaDevices = async () => {
  try {
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();

    return mediaDevices.map(data => data.kind).sort();
  } catch (error) {
    return [];
  }
}

var getSupportedAudioFormats = () => {
  const codecs = [
    'audio/aac',
    'audio/flac',
    'audio/mpeg',
    'audio/mp4; codecs="mp4a.40.2"',
    'audio/ogg; codecs="flac"',
    'audio/ogg; codecs="vorbis"',
    'audio/ogg; codecs="opus"',
    'audio/wav; codecs="1"',
    'audio/webm; codecs="vorbis"',
    'audio/webm; codecs="opus"'
  ];

  try {
    const audio = document.createElement("audio");

    return codecs.map(data => {
      return {
        type: data,
        canPlay: audio.canPlayType(data)
      }
    });
  } catch (error) {
    return codecs.map(data => {
      return {
        type: data,
        canPlay: "no info"
      }
    });
  }
}

var getSupportedVideoFormats = () => {
  const codecs = [
    'video/ogg; codecs="theora"',
    'video/ogg; codecs="opus"',
    'video/mp4; codecs="avc1.42E01E"',
    'video/mp4; codecs="flac"',
    'video/webm; codecs="vp8, vorbis"',
    'video/webm; codecs="vp9"',
    'application/x-mpegURL; codecs="avc1.42E01E"'
  ];

  try {
    const video = document.createElement("video");

    return codecs.map(result => {
      return {
        type: result,
        canPlay: video.canPlayType(result)
      }
    });
  } catch (error) {
    return codecs.map(result => {
      return {
        type: result,
        canPlay: "no info"
      }
    });
  }
}

var getPermissions = async () => {
  try {
    const permissionList = [
      "accelerometer", 
      "camera", 
      "clipboard-read", 
      "clipboard-write", 
      "geolocation", 
      "background-sync", 
      "magnetometer",
      "microphone",
      "midi",
      "notifications",
      "payment-handler",
      "persistent-storage"
    ];
    const result = {};
    return (
      await Promise.all(
        permissionList.map(async permission => {
          try {
            var { state: stateValue } = await navigator.permissions.query({name: permission});
            result[permission] = stateValue;
          } 
          catch (error) {}
        })
      ),
      result
    );
  } catch (error) {
    return {}
  }
}

var getGpuRendererInfo = () => {
  try {
    const canvas = document.createElement("canvas");
    const webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const webglDebugInfo = webgl.getExtension("WEBGL_debug_renderer_info");

    return {
      vendor: webgl.getParameter(webglDebugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: webgl.getParameter(webglDebugInfo.UNMASKED_RENDERER_WEBGL),
      extensions: webgl.getSupportedExtensions()
    }
  } catch (error) {
    return {
      vendor: "Unknown",
      renderer: "Unknown",
      extensions: []
    }
  }
}

var getAudioContextData = () => {
  try {
    const audioContext = new AudioContext();
    return {
      state: audioContext.state,
      sampleRate: audioContext.sampleRate,
      channelCount: audioContext.destination.channelCount,
      channelCountMode: audioContext.destination.channelCountMode,
      channelInterpretation: audioContext.destination.channelInterpretation,
      maxChannelCount: audioContext.destination.maxChannelCount,
      numberOfInputs: audioContext.destination.numberOfInputs,
      numberOfOutputs: audioContext.destination.numberOfOutputs
    }
  } catch (error) {
    return {}
  }
}

var getFrequencyAnalyzerData = () => {
  try {
    const analyserNode = new AnalyserNode(new AudioContext(), {});
    return {
      channelCount: analyserNode.channelCount,
      fftSize: analyserNode.fftSize,
      channelCountMode: analyserNode.channelCountMode,
      maxDecibels: analyserNode.maxDecibels,
      minDecibels: analyserNode.minDecibels,
      numberOfInputs: analyserNode.numberOfInputs,
      numberOfOutputs: analyserNode.numberOfOutputs,
      channelInterpretation: analyserNode.channelInterpretation,
      frequencyBinCount: analyserNode.frequencyBinCount,
      smoothingTimeConstant: analyserNode.smoothingTimeConstant
    }
  } catch (error) {
    return {}
  }
}

var getInstalledFonts = () => {
  const bodyElement = document.getElementsByTagName("body")[0];
  const divElement = document.createElement("div");
  const documentFragment = document.createDocumentFragment();

  const commonFonts = ["monospace", "sans-serif", "serif"];
  const fontInfos = {
    monospace: {},
    "sans-serif": {},
    serif: {}
  };

  const fpCheckRuntime = "fp-check-runtime-0.0.1";
  const fpDivCheckRuntime = "fp-div-check-runtime-0.0.1";
  const commonFontWidths = {};
  const commonFontHeights = {};
  divElement["id"] = fpDivCheckRuntime;
  bodyElement.appendChild(divElement);

  commonFonts.forEach((_data, fontIndex) => {
    const span = document.createElement("span");
    span.style.fontSize = "72px";
    span.innerHTML = "mmmmmmmmmmlli";
    span.style.fontFamily = commonFonts[fontIndex];
    span.style.position = "fixed";
    span.style.visibility = "hidden";
    span.classList.add(fpCheckRuntime);
    documentFragment.appendChild(span);
  });

  FONTS.forEach(fontIterator => {
    commonFonts.forEach(commonFontIterator => {
        const span = document.createElement("span");
        span.style.fontSize = "72px";
        span.innerHTML = "mmmmmmmmmmlli";
        span.style.fontFamily = fontIterator + "," + commonFontIterator;
        span.style.position = "fixed";
        span.style.visibility = "hidden";
        span.id = fontIterator + "&" + commonFontIterator;
        span.classList.add(fpCheckRuntime);
        documentFragment.appendChild(span);
    });
  });

  divElement.appendChild(documentFragment);
  const children = divElement.children;

  commonFonts.forEach((_data, i) => {
    commonFontWidths[commonFonts[i]] = children[i].offsetWidth;
    commonFontHeights[commonFonts[i]] = children[i].offsetHeight;
  });

  for (let i = 0; i < children.length; i++) {
    var [font, commonFont] = children[i].id.split("&");
    commonFont && (fontInfos[commonFont][font] = children[i]);
  }

  const result = [];

  for (let i = 0; i < FONTS.length; i++) {
    for (let j = 0; j < commonFonts.length; j++) {
      var fontMatch = false
      const fontInfo = fontInfos[commonFonts[j]][FONTS[i]]

      const currentFontMatch = fontInfo.offsetWidth !== commonFontWidths[commonFonts[j]] ||
                               fontInfo.offsetHeight !== commonFontHeights[commonFonts[j]];

      fontMatch = fontMatch || currentFontMatch;

      if (fontMatch) {
        result.push(FONTS[i]);
        break;
      }
    }
  }

  return document.getElementById(fpDivCheckRuntime).remove(), result;
}

var getInstalledPlugins = () => {
  try {
    const result = [];

    for (let i = 0; i < navigator.plugins.length; i++) {
      result.push(navigator.plugins[i].name);
    }
    return result;
  } catch (error) {
    return [];
  }
}

var generateId = size => {
  return new Array(size).fill(0).map(() =>
      Math.random().toString(24).substr(2, 9)).reduce((previousValue, currentValue) => previousValue + currentValue, "");
}

var randomNumber = () => {
  return Math.floor(Math.random() * 10000) + 1;
}

var fingerprint = async () => {
  const date = new Date().getTime();
  const browserInfo = getBrowserInfo();
  const platformInfo = getPlatformInfo();
  const gpuRendererInfo = getGpuRendererInfo();
  const promises = await Promise.all([
    getPermissions(),
    getMediaDevices(),
    getAudioFingerprint()
  ]);

  const dateP = new Date().getTime();
  const installedFontsHash = sha256J(getInstalledFonts());
  const dateF = new Date().getTime();
  const webglFingerprint = webglFingerPrint();
  const dateW = new Date().getTime();
  const canvasFingerprint = canvasFingerPrint();
  const dateC = new Date().getTime();

  return {
    v: VERSION,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    dnt: navigator.doNotTrack || false,
    product: getBrowserEngine(browserInfo.name),
    osType: platformInfo.name,
    app: browserInfo.name,
    vendor: navigator.vendor,
    cookies: navigator.cookieEnabled,
    mem: navigator.deviceMemory,
    con: navigator.hardwareConcurrency,
    lang: navigator.languages.join(","),
    plugins: sha256J(getInstalledPlugins()),
    gpu: gpuRendererInfo.vendor + "," + gpuRendererInfo.renderer,
    fonts: installedFontsHash,
    audioC: sha256J(getAudioContextData()),
    analyser: sha256J(getFrequencyAnalyzerData()),
    osVersion: platformInfo.version,
    width: window.screen.availWidth,
    height: window.screen.availHeight,
    depth: window.screen.colorDepth,
    lStore: Boolean(localStorage),
    sStore: Boolean(sessionStorage),
    video: sha256J(getSupportedVideoFormats()),
    audio: sha256J(getSupportedAudioFormats()),
    media: sha256J(promises[1]),
    permissions: sha256J(promises[0]),
    audioFP: promises[2],
    webglFP: webglFingerprint,
    canvasFP: canvasFingerprint,
    dP: dateP - date,
    dF: dateF - dateP,
    dW: dateW - dateF,
    dC: dateC - dateW
  };
}

function convertToArray(arg1) {
  const result = [];
  return (
    LIST.forEach(item => {
      result.push(arg1[item]);
      delete arg1[item];
    }),
    result
  );
}

function chain(input) {
  const allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=".split("");
  const chainResult = function(message) {
    
    var result = "";
    const alignment = message.length % 3;

    for (let i = 0; i < message.length; ) {
      const a = message.charCodeAt(i++);
      const b = message.charCodeAt(i++);
      const c = message.charCodeAt(i++);

      if (a > 255 || b > 255 || c > 255)
        throw new Error("Input not valid");

      const x = (a << 16) | (b << 8) | c;

      result +=
        allowedCharacters[(x >> 18) & 0x3f] +
        allowedCharacters[(x >> 12) & 0x3f] +
        allowedCharacters[(x >> 6) & 0x3f] +
        allowedCharacters[x & 0x3f];
    }

    return alignment > 0 ? result.slice(0, alignment - 3) : result;
  }

  input = encodeURIComponent(input);
  var result = input[0];

  // Unevaluable loop test expression
  for (let i = 1; i < input.length; ++i) {
    result += String.fromCharCode((result.charCodeAt(i - 1) + input.charCodeAt(i)) % 256);
  }

  return chainResult(result);
}

const game1 = async function(request = null) {
  const time = new Date().getTime();
  var xGame = localStorage.getItem("x-game");

  const GetRandomCharacter = () =>
    String.fromCharCode((32 + Math.random() * 94) | 0);

  var splittedXVec;
  var lastIntOfXVec;
  try {
    const xVec = localStorage.getItem("x-vec");
    const lastSplitOfXVec = xVec.lastIndexOf(" ");

    splittedXVec = xVec.substr(0, lastSplitOfXVec).split("");
    lastIntOfXVec = parseInt(xVec.substr(lastSplitOfXVec + 1));
  } catch (error) {
    splittedXVec = Array.from(Array(VECTOR_LENGTH), () => GetRandomCharacter());
    lastIntOfXVec = time;
  }

  var newXVec = splittedXVec.join("") + " " + lastIntOfXVec;
  localStorage.setItem("x-vec", newXVec);
  splittedXVec.shift();
  splittedXVec.push(GetRandomCharacter());

  newXVec = splittedXVec.join("") + " " + time;
  localStorage.setItem("x-vec", newXVec);

  xGame = generateId(3);
  localStorage.setItem("x-game", xGame);

  var blackBox = await fingerprint();
  blackBox.creation = new Date().toISOString();
  blackBox.uuid = xGame;
  blackBox.vector = window.btoa(newXVec);
  blackBox.d = new Date().getTime() - time;

  try {
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", SERVER_FILE_GAME1_FILE, false);
    xmlHttpRequest.send(null);
    blackBox.serverTimeInMS = new Date(xmlHttpRequest.getResponseHeader("date")).toISOString();
  } catch (error) {
    const currentTime = new Date();
    currentTime.setDate(currentTime.getDate() - 14);
    blackBox.serverTimeInMS = currentTime.toISOString();
  }

  blackBox.userAgent = navigator.userAgent;
  blackBox.request = request;
  blackBox = convertToArray(blackBox);
  const result = chain(JSON.stringify(blackBox));
  return result;
}
