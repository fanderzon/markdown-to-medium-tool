import marked from 'marked';

let renderer = new marked.Renderer();

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
  let codespanOptions = input.codespan || {};
  renderer.codespan = (code) => {
    if (!codespanOptions.strong && !codespanOptions.em && !codespanOptions.quoted) {
      return '<strong>' + code + '</strong>';
    }
    let wrappedCode = code;
    if (codespanOptions.strong) {
      wrappedCode = '<strong>' + wrappedCode + '</strong>';
    }
    if (codespanOptions.em) {
      wrappedCode = '<em>' + wrappedCode + '</em>';
    }
    if (codespanOptions.quoted) {
      wrappedCode = '&rdquo;' + wrappedCode + '&rdquo;';
    }

    return wrappedCode;
  };
  
  let obj = {};

  return marked(input.content);
}

export default converter;
