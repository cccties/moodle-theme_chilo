# The "Chilo" Moodle Theme

Chiloテーマは、クイズやフォーラムのMoodle標準デザインをシンプルなデザインに変更し、ユーザーに分かりやすく表示します。

このソフトウェアは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

このテーマは、Moodle2.6 Clean themeをカスタマイズして作成されています。

[元の画面](image1.png)  
[テーマ適用後の画面](image2.png)  
　Moodle標準デザインのパンくずやサイドメニューを非表示にし、ユーザーの誤操作を防ぎます。


## 推奨環境

・ Moodleの2.6以上
・ UNIX 系 OS  


## インストール

1. Moodle 2.6 以上をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし、展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _moodle/theme/_ に移動します。
4. Moodleの管理画面「サイト管理 > 通知」でchiloテーマをインストールしてください。
5. 展開された _weblib.patch_ を、Moodleをインストールしたサーバーの _moodle/_ に移動します。
6. 次のパッチコマンドを実行してください。  
patch -p0 < <MOODLE_DIR>/weblib.patch

## 利用方法

chiloテーマを適用すると、Moodleの管理用メニューや編集用メニューが表示されなくなります。従いまして、次の利用方法をおすすめします。

*MoodleをCHiLOでしか利用しない場合*

> 管理者メニューの「サイト管理 > アピアランス > テーマ > テーマセレクタ」でChiloを適用してください。

*MoodleをCHiLO以外でも利用する場合*

> CHiLO Bookからリンクする特定のコースだけにchiloテーマを適用してください。
> 
> 1. 管理者メニューの「サイト管理 > アピアランス > テーマ > テーマ設定」で、コーステーマを許可する。
> 2. コース作成時に、「アピアランス > テーマを強制する」で、Chiloのテーマを選択する。

*管理用メニューや編集用メニューを表示したい場合*

> chiloテーマが適用されたページで、管理用メニューや編集用メニューを表示したい場合は、MoodleページのURLに _?(&)chiloflag=2_ の引数を追加します。
> 
> 例  http://example.net/login/index.php?chiloflag=2
> 

## CHiLO Book用のクイズ・フォーラムの作り方
https://github.com/cccties/moodle-theme_chilo/wiki
    
## Licensing

This file is released on the GNU Public License (GPL) v3. see <http://www.gnu.org/licenses/gpl.html/>.





