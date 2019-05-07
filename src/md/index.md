
boip is a command line application that creates a new project from a boilerplate stored on GitHub

```Shell
> cd /path/to
> boip create
? please input new project name › myProject
? please input github repository “owner/repo" › mick-whats/bo#sample
? What is the value of "owner"? › mick-whats

?
📁 New project directory: /path/to/myProject
📙 boilerplate: mick-whats/bo#sample
🖌️ injections: {
  "name": "myProject",
  "owner": "mick-whats"
}
📌 Number of new files: 9
? Do you want to execute? › no / yes

✔ create /path/to/myProject/.eslintrc.json
✔ create /path/to/myProject/.gitignore
✔ create /path/to/myProject/LICENSE.txt
✔ create /path/to/myProject/README.md
✔ create /path/to/myProject/package.json
✔ create /path/to/myProject/nojectSample.md
✔ create /path/to/myProject/sample.md
✔ create /path/to/myProject/lib/index.js
✔ create /path/to/myProject/test/index.test.js
created new Project: myProject
```

boipはGitHubに保存したボイラープレートから新規プロジェクトを作成するコマンドラインアプリケーションです。

## Features

### ⭐️Create a new project from boilerplate

ボイラープレートを使って新しいプロジェクトを作成できます。

### ⭐️Boilerplates stored on Github

ボイラープレートはGitHubに保存したものを使います

### ⭐️Set value in placeholder

プレースホルダの値を文書にセットできます

### ⭐️Do not execute if there is a project with the same name

同名のプロジェクトが存在する場合は実行しません



## what is "boilerplate"

ボイラープレートとは**基本ファイルを集めたもの**です。例えばnodejsのプロジェクトでは`package.json`、`README.md`、`LICENSE`等の基本ファイル、`.gitignore`、`.eslint.json`等の設定ファイルを始め、`lib`ディレクトリにはプログラムファイルを、`test`ディレクトリにはテストファイルを置くなどの基本ファイル郡が必要です。

基本ファイルを集めたボイラープレートを用意しておくと、新規プロジェクト作成時に環境構築を簡略化できます。

## what is "boip"

`boip`は`GitHub`に保存したボイラープレートから新規プロジェクトを作成するコマンドラインアプリケーションです。例えば`README.md`の定型文を用意しておけば作成時に空白部分を埋めるだけで作成を行うことができます。

[README\.md sample · GitHub](https://github.com/mick-whats/bo/blob/sample/__README.md)

また、定型文にはプレースホルダを埋め込むことができます。例えば`LICENSE`ファイルは`制作した年`や`製作者名`を記述する必要があります。

```
Copyright 2019 mick-whats
```

定型文には以下のように`{{ }}`というプレースホルダを埋め込むことで、boipコマンド使用時に展開することが可能です。

```
Copyright {{__year}} {{owner}}
```

これらのファイルをまとめたボイラープレートをGitHubにpushしておくと、boipから利用して新規プロジェクトを作成できます。

<img src="https://mick-whats-images.netlify.com/boip/tutorial01.png" alt="tutorial01.png" />







## install

```Shell
>npm install -g boip
```

## useit

```Shell
>cd path/to/dir
>boip create
```

> `boip create`は新規プロジェクトを作成するコマンドです。
>
> optionがない場合、必須項目はインタラクティブでに入力を求められます。

```Shell
? please input new project name › myProject
? please input github repository “owner/repo" › mick-whats/bo#sample
? What is the value of "owner"? › mick-whats

?
📁 New project directory: /path/to/myProject
📙 boilerplate: mick-whats/bo#sample
🖌️ injections: {
  "name": "myProject",
  "owner": "mick-whats"
}
📌 Number of new files: 9
? Do you want to execute? › no / yes
```

`yes`を選択すると新規プロジェクトが作成されます。

```Shell
✔ create /path/to/myProject/.eslintrc.json
✔ create /path/to/myProject/.gitignore
✔ create /path/to/myProject/LICENSE.txt
✔ create /path/to/myProject/README.md
✔ create /path/to/myProject/package.json
✔ create /path/to/myProject/nojectSample.md
✔ create /path/to/myProject/sample.md
✔ create /path/to/myProject/lib/index.js
✔ create /path/to/myProject/test/index.test.js
created new Project: myProject
```

