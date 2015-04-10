# The "Chilo" Moodle Theme

Chiloテーマを設定すると、CHiLO Bookのユーザーが利用しないMoodleのメニューやリンクを非表示にし、ユーザーの操作ミスを防ぐことができます。

このソフトウェアは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

このテーマは、Moodle2.6 Clean themeをカスタマイズして作成されています。

[元の画面](image1.png)  
[テーマ適用後の画面](image2.png)  
　

## 推奨環境

・ Moodleの2.6以上  
・ UNIX 系 OS  


## インストール

1. Moodle 2.6 以上をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし、展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _moodle/theme/_ に移動します。
4. Moodleの管理者用メニューの _「サイト管理 > 通知」_ でchiloテーマを設定してください。
5. 展開された _weblib.patch_ を、Moodleをインストールしたサーバーの _moodle/_ に移動します。
6. 次のパッチコマンドを実行してください。  
patch -p0 < <MOODLE_DIR>/weblib.patch

## 利用方法

chiloテーマを設定すると、Moodleの管理者用メニューや編集者用メニューが表示されなくなります。従いまして、次の利用方法をおすすめします。

**MoodleをCHiLOでしか利用しない場合**

管理者用メニューの _「サイト管理 > アピアランス > テーマ > テーマセレクタ」_ でChiloを設定してください。

**MoodleをCHiLO以外でも利用する場合**

CHiLO Bookが利用する特定のコースだけにchiloテーマを設定してください。
 
1. 管理者用メニューの _「サイト管理 > アピアランス > テーマ > テーマ設定」_ で、コーステーマを許可します。
2. コース作成時に、「アピアランス > テーマを強制する」で、Chiloのテーマを設定します。

**管理者用メニューや編集者用メニューを表示したい場合**

chiloテーマが設定されたページで、管理用メニューや編集用メニューを表示したい場合は、表示したいMoodleページのURLに _?(&)chiloflag=2_ の引数を追加します。
 
> 例  http://example.net/login/index.php?chiloflag=2
 

## CHiLO Book用のクイズ・フォーラムの作り方
https://github.com/cccties/moodle-theme_chilo/wiki
    

## 課題・質問

このソフトの課題、質問、及び要望はこちらにご記載ください。
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

## Licensing

This file is released on the GNU Public License (GPL) v3. (see [LICENSE.txt](LICENSE.txt)) 





