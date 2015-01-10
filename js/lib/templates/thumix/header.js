define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div tabs=\"tabs\"><div id=\"file\" data-js=\"dropdown\" class=\"dropdown pull-left\"><div id=\"fileLabel\" tab=\"fileMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">ファイル</div><ul data-js=\"fileMenu\" menuList=\"file\" class=\"dropdown-menu\"><li data-js=\"openModal\" fileMenu=\"newFile\" modalClass=\"#fileModal\">新規ファイル</li><div id=\"fileModal\" data-js=\"fileModal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 id=\"fileModalLabel\" class=\"modal-title\">新規キャンバス</h4></div><div class=\"modal-body\"><div for=\"canvasName\" class=\"label\">名前：</div><input id=\"canvasName\" name=\"canvasName\" type=\"text\" value=\"新規キャンバス\" class=\"form-control\"/></div><div [clear]=\"[clear]\"></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">キャンセル</button><button type=\"submit\" data-js=\"submit\" class=\"btn btn-primary\">ＯＫ</button></div></div></div></div></ul></div><div id=\"window\" data-js=\"dropdown\" class=\"dropdown pull-left\"><div id=\"windowLabel\" tab=\"windowMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">ウインドウ</div><ul data-js=\"windowMenu\" menuList=\"file\" role=\"menu\" aria-labelledby=\"windowLabel\" class=\"dropdown-menu\"><li data-js=\"showTool\" fileMenu=\"new\">ツール</li></ul></div><div clear=\"clear\"></div></div>");;return buf.join("");
};

});
