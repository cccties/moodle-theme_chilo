# Moodle theme for CHiLO Book

## Moodle theme for CHiLO Bookとは

Hybrid [CHiLO Book](https://github.com/cccties/CHiLO-Producer/wiki) は、EPUB3フォーマットの電子書籍に、解説ビデオのみを埋め込み、確認テスト、バッジ発行機能はオープンソースLMSのMoodleにリンクして実現しています。
 このMoodle theme for CHiLO Bookは、CHiLO Bookからクイズやフォーラムにリンクしたとき、不要なメニューやリンクを非表示にします。
 
 Moodle theme for CHiLO Bookは、Moodle2.6 Clean themeをカスタマイズして作成されています。

[元の画面](image1.png)  
[Moodle theme for CHiLO Book適用後の画面](image2.png)  

### 推奨環境？

＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

### インストール

1. Moodle2.6以上をインストールします。
2. GitHubから Moodle theme for CHiLO Book( https://github.com/cccties/?????????? )をダウンロードし、展開します。

chiloフォルダを、Moodleのテーマディレクトリに配置し、通常のMoodleテーマのインストールに加え、

    # mv chilo <MOODLE_DIR>/theme/

weblib.patchをMoodleディレクトリ直下に配置し、パッチコマンドを実行してください。

    # mv weblib.patch <MOODLE_DIR>/
    # patch -p0 < <MOODLE_DIR>/weblib.patch

テーマの有効化・無効化
---------------------------------
このテーマを適応したページにアクセスすると、編集するのに必要な箇所も非表示になり困るので、   
非表示部分を無効するため対応を加えています。

※デフォルト設定の場合
* 非表示を無効にしたい場合、URL末尾に ?(&)chiloflag=2 と引数を加えます
* 非表示を有効にしたい場合、URL末尾に ?(&)chiloflag=0 と引数を加えます

設定などに関しての詳細はこちらを見てください  
https://github.com/cccties/moodle-theme_chilo/wiki
