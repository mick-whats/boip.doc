# FAQ

## boilerplate

### Q: boilerplateリポジトリの命名規約は？

**A: 特にありませんが`bo`を推奨します**

npmでは[Yeoman](https://yeoman.io/authoring/)が配布されています。これは素晴らしいproject generatorですが、READMEの１行だけ変えたい場合など、ちょっとした改変の方法が難解です。`boip`は誰でも簡単に改変したりオリジナルのボイラープレートを作成しやすいようにしています。  
Yeomanは`yo`という名前のボイラープレートを推奨していますが、これに習って`boip`では`bo`を推奨します。

### Q: boリポジトリのbranchやtagを使いたい

**A: 使えます**

例えば公開用module作成用のブランチ`module`、公開しないプライベート用のブランチ`private`と別にすることができます。  
読み込むときには`boip create -r owner/bo#private`と、`#`を区切りに置くことで指定できます。同様にタグも`owner/bo#v1.0.0`と指定できます。

### Q: 他のリポジトリからボイラープレートを作成したい

**A: cpコマンドではなくrsyncが便利です**

例えば新たに`express`というブランチを切り、既存プロジェクトから`bo`ブランチを作ることにします。
この場合単純にコピーすれば良さそうですがいくつか問題があります。

1. `.git`以下はコピーしたくない
2. `.gitignore`に指定したファイルはコピーしたくない

`bo`リポジトリが既に存在するならすでに`.git`ディレクトリも存在すると思います。ここで`express`プロジェクトをそのままコピーすれば`.git`ディレクトリ以下もコピーされてしまい、`bo`リポジトリのgitが消えてしまいます。同様に`.gitignore`に指定したファイルはgit管理対象外なので、これをコピーしてしまうと他のブランチにも影響してしまいます。

これらの問題を解決するためには`rsync`コマンドが便利です。

```shell
>cd path/to/bo
>rsync -C --filter=":- .gitignore" --exclude=".git/" -acvz <<コピー元パス>> .
```

### Q: 他のブランチからファイルをコピーしたい
**A: git checkoutが便利です**

例えばモジュール作成用ボイラープレートが`mod`ブランチにあり、cliアプリケーション用ボイラープレートが`cli`ブランチにあるとします。  
`mod`ブランチで編集した`.gitignore`ファイルを`cli`ブランチにも適用したい場合、以下の方法でコピーできます。

```shell
> git checkout cli
> git checkout mod .gitignore
```

`git checkout`は二種類の動作を行います。

- `git checkout ブランチ名`
- `git checkout ファイル名`

`git checkout ブランチ名`とした場合はブランチの切り替えを行いますが、`git checkout ファイル名`とした場合は、そのファイルを取り込むことができます。

仮に`git checkout .gitignore`とすると、現在のブランチの最終コミットにある`.gitignore`を取り込みます。 (未コミットの`.gitignore`は破棄されます)  
他のブランチから取り込む場合は`git checkout ブランチ名 ファイル名`とします。
`git checkout mod .gitignore`とすると`mod`ブランチの最終コミットにある`.gitignore`を取り込むことができます。
