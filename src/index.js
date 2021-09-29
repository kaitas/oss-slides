import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealEmbedTweet from 'reveal.js-plugins/embed-tweet/plugin.js';
require('reveal.js/dist/reveal.css')
require('reveal.js/dist/theme/black.css')
let deck = new Reveal()
deck.initialize({
   slideNumber: 'c/t',
    plugins: [Markdown],
    plugins: [RevealEmbedTweet]

});
