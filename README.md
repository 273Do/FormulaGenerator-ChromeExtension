<p align="center">
<img width="120" src="https://github.com/user-attachments/assets/69f3a5c7-b780-4812-855f-caa826f6c7f2">
</p>

# FormulaGenerator-ChromeExtension

数式生成ツールの Chrome 拡張機能版です．GUI で Tex を用いた数式を生成することができます．

<details>
<summary>スクリーンショット</summary>
   
<image width="450px" src="https://github.com/user-attachments/assets/908f139f-dc05-4b8e-a024-9be333b14f4c"/><image width="450px" src="https://github.com/user-attachments/assets/68ffec1d-62ba-4307-97f2-9f277d19832f"/><image width="450px" src="https://github.com/user-attachments/assets/f7f5b00e-9f92-4744-8dcc-a1d78c40e0d9"/><image width="450px" src="https://github.com/user-attachments/assets/6d9b3738-5de3-4766-98ec-e2beb4c00057"/><image width="450px" src="https://github.com/user-attachments/assets/3aa0386c-b5b3-4e4d-bc99-859fecc71f08"/>
</details>

## 🧩 開発環境・使用技術・ツール

<H3>開発期間：3週間</H3>

<H3>技術スタック</H3>
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=typescript,react,redux,tailwindcss,latex"/>
</a> <p>Radix-UI / shadcn/ui / MathJax / i18next</p>
<h3>UI・ロゴ</H3>
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=blender,figma,photoshop"/>
</a>

## 🧩 導入方法(How to get started)

~~[こちら]()の Chrome ウェブストアからインストールすることができます．~~

<details>
<summary>日本語</summary>

MathJax の内部に CDN が使われているため，Chrome ウェブストアで公開することができませんでした．ローカルで使用する方法を載せています．

1. Releases からソースコード(zip)を任意の場所にダウンロードしてください．
2. `dist-firefox-v2`フォルダを任意の場所に配置してください．
3. Chrome の拡張機能の設定から「デベロッパーモード」を ON にしてください．
4. 「パッケージ化されてない拡張機能を読み込む」をクリックし，`dist-firefox-v2`フォルダを読み込ませてください．
</details>

<details>
<summary>English</summary>

Because MathJax uses a CDN internally, it was not possible to publish it on the Chrome Web Store. Here is how to use it locally.

1. Download the source code (zip) from Releases to a location of your choice.
2. Place the `dist-firefox-v2` folder in a location of your choice.
3. Turn on "Developer mode" in the Chrome extension settings.
4. Click "Load unpackaged extension" and load the `dist-firefox-v2` folder.
</details>

## 🧩 アプリ機能

### 1. 数式生成機能

テキストエリアに Tex を入力すると数式が表示されます．また，あらかじめ用意されたテンプレートを使用することも可能です．

### 2. 数式コピー機能

生成した数式をクリップボードにコピーすることができます． Tex をそのままテキスト形式でコピーするか，Word などに対応した MathML 形式でコピーするか選択することができます．

### 3. お気に入り/編集機能

残しておきたい数式があればお気に入りに追加して保存しておくことができます．  
お気に入りに登録した数式は再度編集したり削除したりすることが可能です．  
これらは chrome にログインしているアカウント間で同期ができます．

### 4. テーマ/言語切り替え機能

テーマは，ダークテーマ，ライトテーマ，システム設定から選択することができます．  
言語は英語と日本語に対応しています．  
デフォルトではダークテーマ，英語になっています．一度設定すると保存されますので都度切り替える必要はありません．

## 🧩 免責事項

この作成物および同梱物を使用したことによって生じたすべての障害・損害・不具合等に関しては，私と私の関係者および私の所属するいかなる団体・組織とも，一切の責任を負いません．各自の責任においてご使用ください．
