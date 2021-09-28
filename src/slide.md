# reveal.js を Github Actions でビルドする

## reveal-pon 素晴らしい

reveal.js build system
using GitHub eco systems.

https://github.com/mikkame/reveal-pon

---

# 元祖の使い方

1. [reveal-pon](https://github.com/mikkame/reveal-pon) のリポジトリで **Use this template** をクリック
2. **src/slide.md** を編集
3. コミットすると ci が自動で走ります
4. Github Pages を 有効 にする (Settings > GitHub Pages > Source で gh-pages を選択)
5. README.md を編集する (お好みで)

↓ キーを押すと英語版が見れます

vvv

## Usage

1. Click **Use this template** on GitHub
2. edit **src/slide.md**
3. commit and push then run ci automatically.
4. enable GitHub Pages (Settings > GitHub Pages > Source : select gh-pages)
5. edit README.md(optional)

vvv

## 日本語もいける

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

 <iframe width="560" height="315" src="https://www.youtube.com/embed/584sgzoJvu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

Note: 垂直開始

vvv

### ページ２ − １

ページ２から垂直に下に遷移する  
垂直遷移には補助的な説明を

- 普通のリスト
- 簡潔にね

### ページ２ − ２

どんどん書いていく

---

## gh コマンドをインストールしてみた

> brew install github/gh/gh

vvv

### 当然だけど初回は認証が必要。

> gh auth login

上下キーで選んでエンターキーで決定。文字を打つとフィルターできる。会社の GitHub Enterprise (GHE)にも入れるっぽいぞ!
とりあえず Github 個人アカウント、認証は HTTPS でやってみる。

vvv

> ? Authenticate Git with your GitHub credentials? (Y/n)

エンターすると

vvv

> Login with a web browser

となる。コンソールには 4 桁-4 桁 のコードが表示され、ブラウザで GitHub が表示されるので、そのコードを打ってアプリの権限を確認する。
認証が終わったら GitHub からクローンした適当なローカルリポジトリで

vvv

### 動作確認

> gh issue list

とすると issues が表示される。

vvv

このリポジトリ[oss-slides](https://github.com/kaitas/oss-slides/)の場合は、GitHub Actions でスライドをビルドしているので、

> gh run view

とすると実行状態をコマンドラインでリアルタイムで確認することができる。

---

https://revealjs.com/config/
