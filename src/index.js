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
    showNotes: false,
  
    slideNumber: 'c/t',
//    plugins: [Markdown],
    plugins: [RevealEmbedTweet]
})
deck.initialize();
