# autocomplete-kintone
This is an autocomplete provider to write kintone API comfortably.


## Usage
### kintone JavaScript API
Type `ke` command.
`kintone.events.on` function is appeared.

### kintone REST API
Type `ka` command.
`kintone.api` function is appeared.

## Support

### kintone javaScript API

| function | description |
|:-:| :-:|
| app.record.create.show | レコード追加画面 表示 |
| app.record.create.change | レコード追加画面 フィールド値変更 |
| app.record.create.submit | レコード追加画面 保存実行前 |
| app.record.create.submit.success |  レコード追加画面 保存成功後 |
| app.record.detail.show |  レコード詳細画面　表示 |
| app.record.detail.delete.submit |  レコード詳細画面　削除前 |
| app.record.detail.process.proceed |　レコード詳細画面プロセス管理のアクション実行|
| app.record.edit.show | レコード編集画面　表示 |
| app.record.edit.change | レコード編集画面　フィールド値変更 |		
| app.record.edit.submit | レコード編集画面　保存実行前 |
| app.record.edit.submit.success | レコード編集画面　保存成功後 |
| app.record.index.show | レコード一覧画面　表示 |
| app.record.index.edit.show | レコード一覧画面　インライン編集開始 |
| app.record.index.edit.change | レコード一覧画面　インライン編集のフィールド値変更 |
| app.record.index.edit.submit | レコード一覧画面　インライン編集の保存実行前 |
| app.record.index.edit.submit.success | レコード一覧画面　インライン編集の保存成功後 |
| app.record.index.delete.submit | レコード削除前 |
| app.record.print.show | レコード印刷画面　表示 |
| app.report.show | グラフ画面　表示 |


### kintone REST API

| URI | description |
|:-:| :-:|
| /k/v1/record" | レコードの取得、登録、更新 |
| /k/v1/records | レコードの一括取得、登録、更新、削除 |
| /k/v1/record/assignees | レコードの作業者の更新(PUT) |
| /k/v1/record/status |  レコードのステータスの更新(PUT) |
| /k/v1/records/status | 複数のレコードのステータスを一括更新(PUT) |
| /k/v1/record/comments | レコードのコメントの一括取得(GET) |
| /k/v1/record/comment | レコードのコメントの投稿、削除(POST,DELETE) |
| /k/v1/form | フォーム設計情報取得(GET) |
| /k/v1/preview/form | 開発中アプリのフォーム設計情報取得(GET) |		
| /k/v1/app/form/fields | フィールド一覧の取得(GET) |
| /k/v1/app/form/layout | フォームのレイアウト情報の取得(GET) |
| /k/v1/app | アプリ情報の取得(GET) |
| /k/v1/apps | アプリ情報の一括取得(GET) |
| /k/v1/preview/app | テスト環境にアプリを作成(POST) |
| /k/v1/preview/app/deploy | アプリ設定の運用環境への反映(POST) |
| /k/v1/preview/app/deploy | アプリ設定の運用環境への反映状況確認(GET) |
| /k/v1/app/acl | アプリのアクセス権の取得、変更(GET,PUT) |
| /k/v1/app/status | アプリのプロセス管理の設定の取得(GET) |
| /k/v1/preview/app/status | アプリのプロセス管理の設定の変更(PUT) |
| /k/v1/record/acl | レコードのアクセス権の取得、変更(GET,PUT) |
| /k/v1/field/acl | フィールドのアクセス権の取得、変更(GET,PUT) |
| /k/v1/app/views | 一覧の設定の取得(GET) |
| /k/v1/preview/app/views | 一覧の設定の変更(PUT) |
| /k/v1/app/settings | 一般設定の取得(GET) |
| /k/v1/preview/app/settings| 一般設定の変更(PUT) |
| /k/v1/app/customize | カスタマイズ設定の取得(GET) |
| /k/v1/preview/app/customize | カスタマイズ設定の変更(PUT) |
| /k/v1/space | スペース情報の取得、削除(GET,DELETE) |
| /k/v1/space/body | スペースの本文の更新(PUT) |
| /k/v1/template/space | スペースの作成(POST) |
| /k/v1/space/thread | スペースのスレッドの更新(PUT) |
| /k/v1/space/thread/comment | スペースのスレッド内コメントの投稿(POST) |
| /k/v1/space/members | スペースのメンバーの取得、更新(GET,PUT) |
| /k/v1/guests| ゲストユーザーの一括追加、削除(POST,DELETE) |
| /k/v1/apis/record/get | APIスキーマ情報の取得(GET) |
| /k/v1/apis | API一覧の取得(GET) |

