define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<section data-js=\"toolBox\" module=\"toolBox\" class=\"hide\"><div parts=\"header\"><div data-js=\"remove\" function=\"removeBtn\"><div class=\"glyphicon glyphicon-remove\"></div></div></div><div parts=\"body\"><div function=\"acceptBox\">ここにファイルをドラッグまたはクリックでアップロード</div><input type=\"file\" id=\"SubmitImage\" name=\"file\" style=\"display:none\"/></div></section>");;return buf.join("");
};

});
