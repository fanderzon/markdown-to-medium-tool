import marked from 'marked';

let renderer = new marked.Renderer();
renderer.codespan = (code) => {
  return '<strong>' + code + '</strong>';
};
console.log(renderer);

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

function converter(input) {
  return marked(input);
}

export default converter;
