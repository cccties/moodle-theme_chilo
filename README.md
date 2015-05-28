English version is [HERE](#english).
# The "Chilo" Moodle Theme

Chiloテーマを設定すると、CHiLO Bookのユーザーが利用しないMoodleのメニューやリンクを非表示にし、ユーザーの操作ミスを防ぐことができます。

このソフトウェアは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

このテーマは、Moodle2.6 Clean themeをカスタマイズして作成されています。

[元の画面](image1.png)  
[テーマ適用後の画面](image2.png)  
　

### 推奨環境

・ Moodleの2.6以上  
・ UNIX 系 OS  


### インストール

1. Moodle 2.6 以上をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし、展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _moodle/theme/_ に移動します。
4. Moodleの管理者用メニューの _「サイト管理 > 通知」_ でchiloテーマを設定してください。
5. 展開された _weblib.patch_ を、Moodleをインストールしたサーバーの _moodle/_ に移動します。
6. Moodleがあるディレクトリに移動して、次のパッチコマンドを実行してください。  
    patch -p0 < weblib.patch  
(patch コマンドが見つからない場合はpatchをインストールしてください)


### 利用方法

chiloテーマを設定すると、**Moodleの管理者用メニューや編集者用メニューが表示されなくなります。**従いまして、次の利用方法をおすすめします。

**管理者用メニューや編集者用メニューを表示したい場合**

chiloテーマが設定されたページで、管理用メニューや編集用メニューを表示したい場合は、表示したいMoodleページのURLに _?(&)chiloflag=2_ の引数を追加します。
 
> 例  http://example.net/login/index.php?chiloflag=2

**MoodleをCHiLOでしか利用しない場合**

管理者用メニューの _「サイト管理 > アピアランス > テーマ > テーマセレクタ」_ でChiloを設定してください。

**MoodleをCHiLO以外でも利用する場合**

CHiLO Bookが利用する特定のコースだけにchiloテーマを設定してください。
 
1. 管理者用メニューの _「サイト管理 > アピアランス > テーマ > テーマ設定」_ で、コーステーマを許可します。
2. コース作成時に、「アピアランス > テーマを強制する」で、Chiloのテーマを設定します。


### CHiLO Book用のクイズ・フォーラムの作り方
https://github.com/cccties/moodle-theme_chilo/wiki
    

### 課題・質問

このソフトの課題、質問、及び要望はこちらにご記載ください。
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

### Licensing

This file is released on the GNU Public License (GPL) v3. (see [LICENSE.txt](LICENSE.txt)) 

***
# <a name="english">The "Chilo" Moodle Theme

After configuring Chilo theme, you can hide the menues and links of Moodle that the users would not use in order to reduce mistakes in operating.

This software is provided as a part of [_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ.

This theme is created by customizing Moodle2.6 Clean theme.

[Screen before application of the theme](image1.png)  
[Screen after the application of the theme](image2.png)  
　

### Recommended Environment

* Moodle 2.6 or higher 
* UNIX-like OS  


### Installation

1. Install Moodle 2.6 or higher.
2. Download Chilo theme( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)from GitHub then expand.
3. Move the expanded _chilo/_ on to _moodle/theme/_ of the Moodle downloaded server.
4. Configure the Chilo theme from the Moodle administrator menue _"Site > Notice"_.
5. Move the expanded _weblib.patch_ on to _moodle/_ of the Moodle downloaded server.
6. Move to the directory of Moodle and execute the following patch command.
    patch -p0 < weblib.patch  
(If you cannot find the patch command, install patch.)


### How to use

When the Chilo theme is configured, **the Moodle administrator menue and editor menue will not appear on screen.**Therefore, we recomend you to follow the steps below.

**To show the administrator's menu and/or editor's menu**

To show the administrator's menu and/or editor's menu on the Chilo theme configured page, add argument _?(&)chiloflag=2_ to the URL of the Moodle page you want to display.  

> E.g.)  http://example.net/login/index.php?chiloflag=2

**When Moodle is used only for CHiLO**

Configure Chilo from administrator menu _"Site administration > Appearance > Theme > Theme selector"_. 

**When Moodle is also used for other purpose than CHiLO**

Configure Chilo theme only to specific courses utilizing CHiLO Books.
 
1. From the administrator menu, _"Site administration > Appearance > Theme > Theme configuration"_, allow course theme.

2. When creating courses, configure Chilo theme from "Appearance > Theme > Enforce theme" .


### How to create quizzes and forums for CHiLO Book
https://github.com/cccties/moodle-theme_chilo/wiki
    

### Inquiries

Enter any inquiries, opinions, or requests concernig the software.
-> [Inquiries](https://github.com/cccties/moodle-theme_chilo/issues)

### Licensing

This file is released on the GNU Public License (GPL) v3. (see [LICENSE.txt](LICENSE.txt)) 

