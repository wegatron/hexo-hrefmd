'use strict';

var hexo = hexo || {};
// modify for change markdown link to hexo link
hexo.extend.filter.register('before_post_render', function (data) {
  data.content = data.content.replace(
    /\[(.*)\]\((.*)\)/g,
    (match, text, url, offset, string) => {
      if (/^\.\/(.*)/.test(url)) {
        const asset = url.replace(/\..*\/([\w ]*).md/g, '$1');
        return '{% post_link '+asset+' \''+text+' \'%}';
      }
      return string;
    },
  );
});
