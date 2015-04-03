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
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _<MOODLE_DIR>/theme/_ にコピーします。
4. Moodleの管理画面「サイト管理 > アピアランス > テーマ > テーマセレクタ で、？？？？？？を選択してください。
5. 次の手順でパッチコマンドを実行してください。

    # mv chilo <MOODLE_DIR>/theme/
    # mv weblib.patch <MOODLE_DIR>/
    # patch -p0 < <MOODLE_DIR>/weblib.patch

### テーマの有効化・無効化

Moodle theme for CHiLO Bookを適応したMoodleは、Moodleの管理用メニュー、編集用メニューも非表示になります。

通常のMoodleのメニューを表示したい場合は、MoodleのURLに _?(&)chiloflag=2_ の引数を加えてください。
非表示部分を無効するため対応を加えています。

> 例
> https://dev.chilos.jp/login/index.php(&)chiloflag=2

その他、詳細はこちらをご覧ください。　-> [Moodle theme for CHiLO Book](https://github.com/cccties/moodle-theme_chilo/wiki)
