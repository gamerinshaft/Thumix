define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div tabs=\"tabs\"><div class=\"dropdown pull-left\"><div id=\"fileLabel\" tab=\"fileMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">ファイル</div><ul data-js=\"fileMenu\" menuList=\"file\" role=\"menu\" aria-labelledby=\"fileLabel\" class=\"dropdown-menu\"><li data-js=\"newFile\" fileMenu=\"newFile\">新規ファイル</li></ul></div><div class=\"dropdown pull-left\"><div id=\"windowLabel\" tab=\"windowMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">ウインドウ</div><ul data-js=\"windowMenu\" menuList=\"file\" role=\"menu\" aria-labelledby=\"windowLabel\" class=\"dropdown-menu\"><li data-js=\"showTool\" fileMenu=\"new\">ツール</li></ul></div></div>");;return buf.join("");
};

});
