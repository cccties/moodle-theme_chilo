概要
============
このテーマはHybrid CHiLO Bookに最適化されたMoodleの確認テスト、バッジ発行用ページのテーマです。   Moodle2.6の時点で用意されたClean themeをベースに作成しました。

Hybrid CHiLO Bookの確認テスト、バッジ発行はMoodleにリンクして実現しています。

テーマ適応
---------------------------------
通常のMoodleテーマのインストールに加え、lib//weblib.patchに対してこちらで用意したパッチを適応してください。

    # mv weblib.patch <MOODLE_DIR>
    # patch -p0 < <MOODLE_DIR>/weblib.patch

テーマの有効化・無効化
---------------------------------
このテーマを適応したページにアクセスすると、コース管理者でも編集が出来なくなるので、非表示部分を解除するための対応を加えています。
* 非表示を無効にしたい場合、URL末尾に ?(&)chiloflag=2 と引数を加えます
* 非表示を有効にしたい場合、URL末尾に ?(&)chiloflag=0 と引数を加えます
