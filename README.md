# Moodle theme for CHiLO Book

### Moodle theme for CHiLO Bookとは

Hybrid [CHiLO Book](https://github.com/cccties/CHiLO-Producer/wiki) は、EPUB3フォーマットの電子書籍に、解説ビデオのみを埋め込み、確認テスト、バッジ発行機能はオープンソースLMSのMoodleにリンクして実現しています。
 このMoodle theme for CHiLO Bookは、CHiLO Bookからクイズやフォーラムにリンクしたとき、不要なメニューやリンクを非表示にします。
 
 Moodle theme for CHiLO Bookは、Moodle2.6 Clean themeをカスタマイズして作成されています。

[元の画面](image1.png)  
[Moodle theme for CHiLO Book適用後の画面](image2.png)  

### 推奨環境

Moodle 2.6,2.7,2.8

### インストール

1. Moodle2.6以上をインストールします。
2. GitHubから Moodle theme for CHiLO Book( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし、展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _<MOODLE_DIR>/theme/_ にコピーします。
4. Moodleの管理画面「 サイト管理 > 通知 」 でchiloのテーマをインストールしてください。
5. _weblib.patch_ ファイルを、Moodleディレクトリの直下に移動して、次の手順でパッチコマンドを実行してください。

    patch -p0 < <MOODLE_DIR>/weblib.patch

### 利用方法

Moodle theme for CHiLO Bookは、管理用メニュー、編集用メニューを非表示にしてしまうなど、Moodle全体のデザインを大きく変更してしまいます。次の利用方法をおすすめします。

*テーマの適用*

> *MoodleをCHiLOでしか利用しない場合*
> 
> 管理者メニューの「サイト管理 > アピアランス > テーマ > テーマセレクタ」でChiloを適用してください。
> 
> *MoodleをCHiLO以外でも利用する場合*
> 
> CHiLO Bookからリンクする特定のコースだけにMoodle theme for CHiLO Bookを適用してください。
> 
> 1. 管理者メニューの「サイト管理 > アピアランス > テーマ > テーマ設定」で、コーステーマを許可する
> 2. コース作成時に、「アピアランス > テーマを強制する」で、Chiloのテーマを強制する

*Moodleディフォルトデザインに戻す*
> 
> Moodleディフォルトデザインを表示したい場合は、MoodleのURLに _?(&)chiloflag=2_ の引数を加えてください。
> 
> 例
> 
> https://dev.chilos.jp/login/index.php?chiloflag=2



その他、詳細はこちらをご覧ください。　-> [Moodle theme for CHiLO Book](https://github.com/cccties/moodle-theme_chilo/wiki)
