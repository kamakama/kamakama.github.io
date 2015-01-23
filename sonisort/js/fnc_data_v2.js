// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
   "Hyouka",
   "Steins;Gate",
   "NHK ni Youkoso!",
   "Tatami Galaxy",
   "Samurai Champloo",
   "Random fickshit"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
   [1, "Eru Chitanda",			[1,0,0,0,0,0], "hyouka/eru_chitanda.jpg"],   
   [1, "Fuyumi Irisu",			[1,0,0,0,0,0], "hyouka/fuyumi_irisu.jpg"],   
   [1, "Houtarou Oreki",		[1,0,0,0,0,0], "hyouka/houtarou_oreki.jpg"],   
   [1, "Mayaka Ibara",			[1,0,0,0,0,0], "hyouka/mayaka_ibara.jpg"],   
   [1, "Satoshi Fukube",		[1,0,0,0,0,0], "hyouka/satoshi_fukube.jpg"],   
   [1, "Kurisu Makise",			[0,1,0,0,0,0], "steinsgate/kurisu_makise.jpg"],   
   [1, "Rintarou Okabe",		[0,1,0,0,0,0], "steinsgate/rintarou_okabe.jpg"], 
   [1, "Mayuri Shiina",			[0,1,0,0,0,0], "steinsgate/mayuri_shiina.jpg"], 
   [1, "Suzuha Amane",			[0,1,0,0,0,0], "steinsgate/suzuha_amane.jpg"], 
   [1, "Ruka Urushibara",		[0,1,0,0,0,0], "steinsgate/ruka_urushibara.jpg"], 
   [1, "Kaoru Yamazaki",		[0,0,1,0,0,0], "nhk/kaoru_yamazaki.jpg"], 
   [1, "Misaki Nakahara",		[0,0,1,0,0,0], "nhk/misaki_nakahara.jpg"], 
   [1, "Tatsuhiro Satou",		[0,0,1,0,0,0], "nhk/tatsuhiro_satou.jpg"], 
   [1, "Watashi",				[0,0,0,1,0,0], "tatami/watashi.jpg"], 
   [1, "Akashi",				[0,0,0,1,0,0], "tatami/akashi.jpg"], 
   [1, "Ozu",					[0,0,0,1,0,0], "tatami/ozu.jpg"], 
   [1, "Mugen",					[0,0,0,0,1,0], "champloo/mugen.jpg"], 
   [1, "Jin",					[0,0,0,0,1,0], "champloo/jin.jpg"], 
   [1, "Fuu Kasumi",			[0,0,0,0,1,0], "champloo/fuu_kasumi.jpg"], 
   [1, "Kraft Lawrence",		[0,0,0,0,0,1], "random/kraft_lawrence.jpg"], 
   [1, "Holo",					[0,0,0,0,0,1], "random/holo.jpg"], 
   [1, "Nils",					[0,0,0,0,0,1], "random/nils.jpg"],
   [1, "Shichika Yasuri",		[0,0,0,0,0,1], "random/shichika_yasuri.jpg"], 
   [1, "Natsume",				[0,0,0,0,0,1], "random/natsume.jpg"], 
   [1, "Ginko",					[0,0,0,0,0,1], "random/ginko.jpg"], 
   [1, "Togame",				[0,0,0,0,0,1], "random/togame.jpg"],
   [1, "Nevarc",				[0,0,0,0,0,1], "random/nevarc.jpg"]
];
