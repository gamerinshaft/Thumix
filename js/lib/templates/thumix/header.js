define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div tabs=\"tabs\"><div class=\"dropdown\"><div id=\"dLabel\" tab=\"fileMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">ファイル</div><ul menuList=\"file\" role=\"menu\" aria-labelledby=\"dLabel\" class=\"dropdown-menu\"><li fileMenu=\"new\" data-js=\"newFile\">新規ファイル</li></ul></div></div>");;return buf.join("");
};

});
