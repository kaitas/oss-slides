import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealEmbedTweet from 'reveal.js-plugins/embed-tweet/plugin.js';
require('reveal.js/dist/reveal.css')
require('reveal.js/dist/theme/black.css')
let deck = new Reveal({
 // https://qiita.com/takayu90/items/0af9bd125e6704803c0d#configuration   
 // スライドに矢印を表示する
 // (矢印とは移動できるスライドの方向を示す矢印 = control arrow)
    controls: true,
 // ユーザーにヒントを表示する
    controlsTutorial: true,
  // 矢印を表示する場所
  // edges / bottom-right
    controlsLayout: 'bottom-right',

  // 戻る方向の矢印を表示する
  // faded / hidden / visible
    controlsBackArrows: 'faded',

  // スライドの進行度合いを示すバー(プログレスバー)を表示する
    progress: true,

  // スライドの移動をブラウザの履歴に追加する(URLにスライド番号を含める)
  // trueにするとブラウザバックで直前のスライドに戻るようになります
  // また、URLにページ番号が含まれるので、リンクで特定の番号のスライドを表示したい場合はtrueにするとよい
    history: true,

  // キーボードショートカットを使用する
  keyboard: true,

  // 全体表示モード(overview mode)を有効にする
  // (Escでプレゼンの全体を表示する機能)
  overview: true,

  // 中央に寄せる(falseの場合、上寄せ)
  center: true,

  // タッチ操作を有効にする
  touch: true,

  // スライドをループする(最終スライドの次に最初のスライドを表示する, 垂直方向のスライドを作る場合は便利)
  loop: false,

  // スライドの方向を右から左にする(right to left)
  rtl: false,

  // スライドの順番をシャッフルする(一巡する度にシャッフルされる)
  // ブースなどで製品紹介画像などを自動再生するような用途で使われる
  // 登壇資料はシャッフルしないこと
  shuffle: false,

  // フラグメントを有効にする(ページ内で要素を表示制御できる機能)
  fragments: true,

  // フラグメントをURLに含める(history:trueの場合のみ有効)
  // リンクでフラグメントが中途半端な状態のスライドを読み込むことができるようになります
  fragmentInURL: false,

  // 埋め込みモード(embedded mode)でスライドを実行
  embedded: false,

  // `?`ボタンを押してヘルプを表示する
  help: true,

  // スピーカーノート(speaker notes : 発表者用のスライド)を聞き手にも見せる
    showNotes: true,


  // 埋め込みコンテンツ(ビデオ/音楽/iframe)を自動的に再生する
  // いずれの場合も、要素個別に設定されていればそちらを優先します
  // - null: data-autoplayが指定されている場合のみ自動再生します
  // - true: 自動再生します
  // - false: 自動再生しません
  autoPlayMedia: null,

  // 自動的に次のスライドに遷移するまでの時間をミリ秒単位で指定します
  // 自動遷移しない場合は0に設定してください
  // スライド個別に設定したい場合は`data-autoslide`属性を指定します
  autoSlide: 0,

  // スライドの自動遷移が設定されている場合、
  // ユーザーが操作したらスライドの自動遷移をやめる
  autoSlideStoppable: true,

  // スライドの自動遷移が設定されている場合、
  // スライドの遷移に使うメソッドを指定する
  autoSlideMethod: Reveal.navigateNext,

  // スピーカーノートに表示されるカウントダウンタイマー
  // スライド単位の秒数を指定する
  defaultTiming: 120,

  // マウスホイールでページを移動していい
  mouseWheel: false,

  // モバイル端末でアドレスバーを隠す
  // 最近のブラウザではあまり効きません...
  hideAddressBar: true,

  // iframeのオーバーレイ表示のリンクを開く
  // リンク毎に`data-preview-link`または`data-preview-link="false"`を指定することでも実現できます
  previewLinks: false,

  // スライド遷移アニメーション
  // none / fade / slide / convex / concave / zoom
  transition: 'slide',

  // スライド遷移スピード
  // default / fast / slow
  transitionSpeed: 'default',

  // スライド背景の遷移アニメーション
  // none / fade / slide / convex / concave / zoom
  backgroundTransition: 'fade',

  // 遅延読み込みを開始する、表示中のスライドとの距離
  // つまり、表示中のページがここで指定された枚数まで近づいたらコンテンツをロードする
  viewDistance: 3,

  // パララックス背景画像
  parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // パララックス背景画像サイズ
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

  // スライド毎に移動するパララックス背景画像のピクセル数
  // - 指定されていない場合、自動計算されます
  // - 無効にする場合、0を指定してください
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,

  // スライドに適用するCSSのボックスモデル
  display: 'block'
  
    slideNumber: 'c/t',
//    plugins: [Markdown],
    plugins: [RevealEmbedTweet]
})
deck.initialize();
