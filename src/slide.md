# reveal-pon 素晴らしい

reveal.js build system
using GitHub eco systems.

https://github.com/mikkame/reveal-pon

---

# 使い方!

1. [reveal-pon](https://github.com/mikkame/reveal-pon) のリポジトリで **Use this template** をクリック
2. **src/slide.md** を編集
3. コミットすると ci が自動で走ります
4. Github Pages を 有効 にする (Settings > GitHub Pages > Source で gh-pages を選択)
5. README.md を編集する (お好みで)

## Usage

1. Click **Use this template** on GitHub
2. edit **src/slide.md**
3. commit and push then run ci automatically.
4. enable GitHub Pages (Settings > GitHub Pages > Source : select gh-pages)
5. edit README.md(optional)

## 日本語はいけるのだろうか

qiita の[この記事](https://qiita.com/mikkame/items/b0f144920aba95d1c2be)を参照した

## Let's try!

---

# セキュリティ更新

[ssri に脆弱性があるそうで](https://github.com/advisories/GHSA-vx3p-948g-6vhq)、6.0.2 にパッチする必要があります。

## Sercuity Updates

- [lodash@^4.17.21](https://github.com/kaitas/oss-slides/security/dependabot/yarn.lock/lodash/open)

---

## 実際にこれでスライドを書く場合

どうなるんだろうか
他にもいろんなプラグインがあるから入れていきたい

しかし講義スライドぐらいだったらこれで十分な気がするな

---

---

### ページ１

---

上の破線のようなものは水平線
こんな感じでガシガシ書いていきます

**次は２ページ目**

<aside class="notes">
  発表者が見るノート   
  伝えたいことをメモ  
</aside>

---

### ページ２

---

1. 数字付きのリスト
1. 番号はどうでもいい

> > >

### ページ２ − １

ページ２から垂直に下に遷移する  
垂直遷移には補助的な説明を

- 普通のリスト
- 簡潔にね

> > >

### ページ２ − ２

どんどん書いていく

---

## gh コマンドをインストールしてみた

> brew install github/gh/gh

### 当然だけど初回は認証が必要。

> gh auth login

上下キーで選んでエンターキーで決定。文字を打つとフィルターできる。会社の GitHub Enterprise (GHE)にも入れるっぽいぞ!
とりあえず Github 個人アカウント、認証は HTTPS でやってみる。

> ? Authenticate Git with your GitHub credentials? (Y/n)

エンターすると

> Login with a web browser

となる。コンソールには 4 桁-4 桁 のコードが表示され、ブラウザで GitHub が表示されるので、そのコードを打ってアプリの権限を確認する。
認証が終わったら GitHub からクローンした適当なローカルリポジトリで

### 動作確認

> gh issue list

とすると issues が表示される。

このリポジトリ[oss-slides](https://github.com/kaitas/oss-slides/)の場合は、GitHub Actions でスライドをビルドしているので、

> gh run view

とすると実行状態をコマンドラインでリアルタイムで確認することができる。

<section data-markdown>
  <script type="text/template">
    - Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
    - Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->
  </script>
</section>
