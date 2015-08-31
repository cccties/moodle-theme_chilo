English version is [HERE](#english).
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
)をダウンロードし展開します。
3. 展開された _chilo/_ をMoodleをインストールしたサーバーの _moodle/theme/_ に移動します。
4. Moodleの管理者用メニューの _「サイト管理 > 通知」_ でchiloテーマを設定してください。
5. 展開された _weblib.patch_ を、Moodleをインストールしたサーバーの _moodle/_ に移動します。
6. Moodleがあるディレクトリに移動して、次のパッチコマンドを実行してください。  
    patch -p0 < weblib.patch  
(patch コマンドが見つからない場合はpatchをインストールしてください)

## CHiLO のためのMoodle設定

**AutoEnrol**

**ゲストログインの設定**

1. ゲストログインボタンの非表示化
2. ゲストのオートログインを有効にする
3. Moodleコースのディフォルト設定とする


**ゲストのログインの有効化**

1. オートログインを有効にする
2. Moodleコースのディフォルト設定とする

**完了トラッキング設定**

1. 完了トラッキングを有効にする
2. Moodleコースのディフォルト設定とする

**活動名自動リンクの設定変更をonから変更する**




## CHiLO Book用のクイズ・フォーラムの作り方

https://github.com/cccties/moodle-theme_chilo/wiki
    

## 課題・質問

このソフトの課題、質問、及び要望はこちらにご記載ください。
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

## Licensing

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

### How to create quizzes and forums for CHiLO Book
https://github.com/cccties/moodle-theme_chilo/wiki
    

### Inquiries

Enter any inquiries, opinions, or requests concernig the software.
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

### Licensing

This file is released on the GNU Public License (GPL) v3. (see [LICENSE.txt](LICENSE.txt)) 

