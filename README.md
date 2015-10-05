English version is [HERE](#top_e).

# <a name="top">The "Chilo" Moodle Theme</a>

Chiloテーマを設定すると、CHiLO Bookのユーザーが利用しないMoodleのメニューやリンクを非表示にし、ユーザーの操作ミスを防ぐことができます。 [元の画面](image1.png) → [テーマ適用後の画面](image2.png)  

このソフトウェアは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

このテーマは、Moodle2.6 Clean themeをカスタマイズして作成されています。


* [推奨環境](#no_1)
* [インストール](#no_2)
* [CHiLO用Moodle設定](#no_3)
* [CHiLO Book用のクイズ・フォーラムの作り方](#no_4)
* [課題・質問](#no_5)
* [Licensing](#no_6)



## <a name="no_1">推奨環境</a> 

・ Moodleの2.6以上  
・ UNIX 系 OS
CHiLO用Moodle設定

[top↑](#top)

## <a name="no_2">インストール</a>

1. Moodle 2.6 以上をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _moodle/theme/_ に移動します。
4. _chilo/javascript/styleSwitcher.js_ に記述されている_var moodleroot_の値を、あなたがインストールしたMoodleのディレクトリに変更してください。<br> 例）<br>var moodleroot = '/'; <br>var moodleroot = '/moodle/';
5. Moodleの管理者用メニューの _「サイト管理 > 通知」_ でchiloテーマを設定してください。
6. 展開された _weblib.patch_ を、Moodleをインストールしたサーバーの _moodle/_ に移動します。
7. Moodleがあるディレクトリに移動して、次のパッチコマンドを実行してください。  
    patch -p0 < weblib.patch  
(patch コマンドが見つからない場合はpatchをインストールしてください)

[top↑](#top)

## <a name="no_3">CHiLO用Moodle設定</a>

### ナビゲーション

1. Moodleから配信するCHiLOBookの一覧をユーザのデフォルトホームページに表示するため「ダッシュボード」から「サイト」に変更する
 
    http://_root you installed_/admin/settings.php?section=navigation


### 完了トラッキング

1. Moodle Quiz モジュールの結果によりバッジを発行するため、完了トラッキングを有効にする
 
    http://_root you installed_/admin/settings.php?section=optionalsubsystems

2. 全てのMoodleコースの完了トラッキングを有効にする
 
    http://_root you installed_/admin/settings.php?section=coursesettings

### ゲストアクセス

CHiLO ReaderアプリからCHiLO Bookをダウンロードする際、CHiLO Bookファイルまでのアクセスが途中で止まらないようにするため、ゲストアクセスとゲストオートログインの許可をしておきます。

1. コース作成時のゲストアクセス許可のデフォルト設定を有効にする
 
    http://_root you installed_/admin/settings.php?section=enrolsettingsguest

2. コースアクセス時のゲストオートログインを有効にする
 
    http://_root you installed_/admin/settings.php?section=userpolicies

### 自動登録

*自動登録を行う場合は、プラグインをインストールする必要があります。<br>
（see https://moodle.org/plugins/view/enrol_autoenrol ）

1. 利用可能なコース登録プラグインで自動登録を有効にする
 
    http://_root you installed_/admin/settings.php?section=manageenrols

2. 作成する全てのMoodleコースに対して自動登録を有効にする
 
    http://_root you installed_/admin/settings.php?section=enrolsettingsautoenrol



## <a name="no_4">CHiLO Book用のクイズ・フォーラムの作り方</a>

https://github.com/cccties/moodle-theme_chilo/wiki
    
[top↑](#top)

## <a name="no_5">課題・質問</a>

このソフトの課題、質問、及び要望はこちらにご記載ください。
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

[top↑](#top)

## <a name="no_6">Licensing</a>

The CHiLO theme is 'free' software under the terms of the GNU GPLv3 License. (see [LICENSE.txt](LICENSE.txt)) 


***
日本語版は[こちら](#top).

# <a name="top_e">The "Chilo" Moodle Theme</a>

In order to reduce  operational errors, hide the menues and links of Moodle which would not be used after configuring Chilo theme.  [Original screen](image1.png)  → [Screen after the application of the theme](image2.png) 

This software is provided as a part of [_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ.

This theme is created by customizing Moodle2.6 Clean theme.


* [Recommended Environment](#no_1_e)
* [Installation](#no_2_e)
* [Configuration of Moodle for CHiLO](#no_3_e)
* [How to create quizzes and forums for CHiLO Book](#no_4_e)
* [Inquiries](#no_5_e)
* [Licensing](#no_6_e)
 


## <a name="no_1_e">Recommended Environment</a>

* Moodle 2.6 or higher 
* UNIX-like OS Configuration of Moodle for CHiLO 

[top↑](#top_e)

## <a name="no_2_e">Installation</a>

1. Install Moodle 2.6 or higher.
2. Download Chilo theme( https://github.com/cccties/moodle-theme_chilo/archive/master.zip )from GitHub then expand.
3. Move the expanded _chilo/_ to _moodle/theme/_ of the sever where Moodle is installed.
4. Alter the _var moodleroot_ value entered in _chilo/javascript/styleSwitcher.js_ to the directory of Moodle you installed.<br> e.g.) <br>var moodleroot = '/'; <br>var moodleroot = '/moodle/'; 
5. Configure the Chilo theme from the Moodle administrator menue _"Site > Notice"_.
6. Move the expanded _weblib.patch_ to _moodle/_ of the server where Moodle is installed.
7. Move to the directory of Moodle you installed and execute the following patch command.  
    patch -p0 < weblib.patch  
(If you cannot find the patch command, install patch.)

[top↑](#top_e)

## <a name="no_3_e">Configration Moodle for CHiLO</a>

### Navigation Setting

1. In order to display the list of CHiLO Books distributed from Moodle on the user default home page, modify the setting from "Dashboard" to "Site".
 
    http://_root you installed_/admin/settings.php?section=navigation


### Completion Tracking Setting

1. Badges are issued according to the results of the Moodle Quiz module, so enable completion tracking.
 
    http://_root you installed_/admin/settings.php?section=optionalsubsystems

2. Enable completion tracking of all Moodle courses
 
    http://_root you installed_/admin/settings.php?section=coursesettings

### Guest Access Setting

When downloading CHiLO Books form CHiLO Reader App, allow guest access and guest auto login to prevent from stopping access to the CHiLO Book file in the midst of downloading.

1. Enable the default identity of allowing guest access.
 
    http://_root you installed_/admin/settings.php?section=enrolsettingsguest

2. Enable guest auto login when accessing the course.
 
    http://_root you installed_/admin/settings.php?section=userpolicies

### AutoEnrol Setting

*:You must install a plugin "AutoEnrol" for automatic registration.<br>
（see https://moodle.org/plugins/view/enrol_autoenrol ）

1. Enable AutoEnrol in "Available course enrolment plugins".
 
    http://_root you installed_/admin/settings.php?section=manageenrols

2. Enable AutoEnrol of all the Moodle courses.
 
    http://_root you installed_/admin/settings.php?section=enrolsettingsautoenrol

[top↑](#top_e)

## <a name="no_4_e">How to create quizzes and forums for CHiLO Book</a>

https://github.com/cccties/moodle-theme_chilo/wiki

[top↑](#top_e)

## <a name="no_5_e">Inquiries</a>

Enter any inquiries, opinions, or requests concernig the software.
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

[top↑](#top_e)

## <a name="no_6_e">Licensing</a>

The CHiLO theme is 'free' software under the terms of the GNU GPLv3 License. (see [LICENSE.txt](LICENSE.txt)) 
