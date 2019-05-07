# commands

CLIからのコマンド`boip`について解説します。 `boip -h`でヘルプを表示します。

```shell
>boip -h
boip

Usage:
  $ boip <command> [options]

Commands:
  create [projectName]         create new project
  injections [key] [newValue]  inject key and value settings
  path                         see config path

For more info, run any command with the `--help` flag:
  $ boip create --help
  $ boip injections --help
  $ boip path --help

Options:
  -h, --help  Display this message
```

| command     | alias | desc                               |
| ----------- | ----- | ---------------------------------- |
| create      | new   | 新規プロジェクトを作成する         |
| injections | in    | 保存されたインジェクトの確認、設定 |
| path        | -     | configパス、キャッシュパスを確認   |

## create (alias is "new")

新規プロジェクトを作成する

### args

|             | type   | desc                       |
| ----------- | ------ | -------------------------- |
| projectName | string | 新規作成するプロジェクト名 |



### options

| short | long           | type    | desc                                                                          |
| ----- | -------------- | ------- | ----------------------------------------------------------------------------- |
| -o    | --offline      | boolean | githubにアクセスせずにキャッシュからプロジェクトを作成する                    |
| -r    | --repository | string  | github上にあるボイラープレートのrepository-name |
| -n    | --noject       | glob    | インジェクトを行わないファイルの指定                                          |
| -d    | --dry          | boolean | dry-run(実際に環境構築を行わずにログだけを見る)                               |
| -b    | --debug        | boolean | デバッグモード(エラー時にスタックトレースを表示する)                          |
| -h    | --help         | boolean | help表示                                                                      |

- `projectName`、`--repository`オプションの指定がない場合はインタラクティブに入力を求められます。
- `--repository`は"owner/repository-name"という形式で入力してください
- `--repository`は`#`を挟んでgitのブランチやタグを指定できます
- 例: "owner/repo#tag","owner/repo#branch"
- offlineオプションは過去に使用したリポジトリのみ対象になります


### examples

```shell
> boip create
# If you do not give the option will be interactive input

> boip new
# "new" is an alias of "create"

> boip create myProject
# The first argument is the project name

> boip create myProject -r "mick-whats/bo#sample"
# This is an example where repository is specified

> boip create -od
# option "offline" and "dry"
```



## injections (alias is "in")

保存されたインジェクトの確認、設定を行います。

`boip create`で指定した値は保存され、このコマンドで確認、再設定できます。

### args

|       | type   | desc              |
| ----- | ------ | ----------------- |
| key   | string | 確認、設定するkey |
| value | string | 確認、設定する値  |


- 引数なしで実行すると全ての値が表示されます(例: `boip injections`)
- 引数を1つ与えると、そのkeyに設定されている値が表示されます(例: `boip injections owner`)
- 引数を2つ与えると、第一引数のkeyに第二引数の値が設定されます(例: `boip injections owner mick-whats`)
### examples

```shell
> boip injections
owner: mick-whats
text1: helloWorld

> boip injections owner
mick-whats

> boip injections owner mick-jaguar

> boip injections owner
mick-jaguar
```

## path

`config path`,`data path`の確認

```shell
> boip path
config path:  ~/Library/Preferences/boip-nodejs/config.json
data(repository cache) path:  ~/Library/Application Support/boip-nodejs
```

### config path
`injections`他の情報が保存されています

### data path
GitHubからダウンロードされたボイラープレートが保存されています