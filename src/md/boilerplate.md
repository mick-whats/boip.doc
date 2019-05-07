# boilerplate

ここではboilerplateの作成方法について解説します。
`boilerplate`とは**基本ファイルを集めたもの**です。ここでは`node.js`でmoduleを作成するプロジェクトをboilerplate化する手順を解説します。

## step-1

### 1. package.jsonの作成
コマンドラインから`npm init -y`を実行すると`package.json`が作成されます。

### 2. 依存moduleのインストール
ソースコード整形ツールの`prettier`、リントツールの`eslint`、eslintのプラグイン各種をインストールします。
下記コマンドを実行するとインストールと同時にこれらのmoduleが`package.json`に書き込まれます。
```shell
> npm install -D prettier eslint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-jsdoc eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

### 3. Projectに必要なファイルの作成

ここでは以下のファイルを作成します。他のプロジェクトからコピーしてきても構いません。詳細については割愛します。

```
README.md
LICENSE
lib/index.js
test/index.test.js
.gitignore
.eslintrc.json
```

環境構築が終わりました。この時点のProjectをboilerplateとしてGitHubにpushします。

ここまでをコマンドにしたのが以下。

```shell
> cd path/to/project
> mkdir bo && cd bo
> npm init -y
> npm install -D prettier eslint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-jsdoc eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jest
> mkdir lib test
> touch README.md LICENSE lib/index.js test/index.test.js .gitignore
> git init
> hub create
> git add --all
> git commit -m 'initial commit'
> git push -u origin master
```



これであなたの`bo`リポジトリが完成しました。適当なディレクトリに移動して`boip create`コマンドを実行してみましよう。

```shell
> cd path/to/project
> boip create myProject -r "your-name/bo"
```


> [mick\-whats/bo\-sample#step\-1](https://github.com/mick-whats/bo-sample/tree/step-1)

step-1では基本的なboilerplateを作成しました。この状態での`boip create`は実質的にboilerplateの単なるコピーです。

## step-2

step-1でboilerplateの作成を行いましたが、いくつか問題があります。  
`boip create`で作成したmyProjectの`package.json`ファイルを見てみましょう。

```
// package.json
{
  "name": "bo",
  ~~~
}
```

nameが`bo`になっています。ここを手動で`my.project`に変更する必要があります。

次に`lib/index.js`を見てみます。

```js
class BoSample {
  constructor (name) {
    this.name = name
  }
}

module.exports = BoSample
```

クラス名が`BoSample`となっていますが求めるのは`MyProject`です。

次に`LICENSE`を見てみます。

```
// LICENSE
Copyright 2019 your-name
```

2019年になっています。2020年以降に作成しても2019になってしまうので修正する必要が出てきます。

これらの手間を省くためにplaceholderを使用します。`package.json`を修正しましょう

```
// package.json
{
  "name": "{{name:dot}}",
  ~~~
}
```

`{{name:dot}}`は「変数nameをdotcaseで置き換える」と意味します。  
変数nameはcreateコマンドの引数が使われます。  
なので`{{name:dot}}`は`my.project`と出力されます

`lib/index.js`も修正します。

```js
class {{name:pascal}} {
  constructor (name) {
    this.name = name
  }
}

module.exports = {{name:pascal}}
```
`{{name:pascal}}`は「変数nameをpascalcaseで置き換える」と意味します。  
変数nameはcreateコマンドの引数が使われます。  
なので`{{name:pascal}}`は`my.project`と出力されます

これらは内部的に[temject \- npm](https://www.npmjs.com/package/temject#keyvalueinjectorinput-values)の機能が使用されています。

---

LICENSEも修正します。

```
Copyright {{__year}} {{owner}}
```

`{{__year}}`は現在の西暦に置き換えられます(内部では[temject \- datetimeinjectorinput](https://www.npmjs.com/package/temject#datetimeinjectorinput)が使われています)  
`{{owner}}`は`boip create`実行時に入力を求められ、その値が出力されます

> [mick\-whats/bo\-sample#step\-2](https://github.com/mick-whats/bo-sample/tree/step-2)

`step-1`から`step-2`への変更点はこちらをご覧ください  
[Comparing step\-1\.\.\.step\-2 · mick\-whats/bo\-sample](https://github.com/mick-whats/bo-sample/compare/step-1...step-2)

## step-3

`step-2`にもまだ問題があります。`LICENSE`は以下の様になっています。

```
Copyright {{__year}} {{owner}}
```

新規プロジェクトを作成する時に適切な値を出力する為にこのような形になっていますが、`bo`リポジトリのライセンスとしては不適切です。

- boリポジトリのLICENSE
- 新規プロジェクトのLICENSE

この２つが必要になります。この問題を解決するために`LICENSE`のコピーを用意してファイル名を`__LICENSE`とします。

- `LICENSE`はboリポジトリのライセンスファイルです。
- `__LICENSE`は新規プロジェクトのライセンスファイルです。

このように`__`(アンダースコア２つ)を加えた同名のファイルがある場合、`boip`は次の様に動作します。

1. `__LICENSE`は`__`(アンダースコア２つ)を外したファイル名で新規プロジェクトに追加する
1. `LICENSE`は新規プロジェクトに**追加しない**

`LICENSE`ファイルをboリポジトリのライセンスファイルにする為に書き換えます。

```
Copyright 2019 your-name
```

`__LICENSE`はコピーしたままにしておきます。

```
Copyright {{__year}} {{owner}}
```

同様に`README.md`もコピーします。

> [mick\-whats/bo\-sample#step\-3](https://github.com/mick-whats/bo-sample/tree/step-3)

step-2 から step-3 への変更点はこちらをご覧ください 
[Comparing step\-2\.\.\.step\-3 · mick\-whats/bo\-sample](https://github.com/mick-whats/bo-sample/compare/step-2...step-3)

## other

### ignore
ボイラープレートには用意しているけれど新規プロジェクトには置きたくないファイルはファイル名を`<filename>.ignore.<extension>`としておきます。
(例: `LICENSE.ignore`, `idea.ignore.md`等)

### noject
プレースホルダを含んだテキストファイルは自動的にインジェクトされますが、これを行いたくない場合(`{{ }}`をそのまま新規プロジェクトに展開したい場合)はファイル名を`<filename>.noject.<extension>`としておきます。  
(例: `LICENSE.noject`, `idea.noject.md`等)

