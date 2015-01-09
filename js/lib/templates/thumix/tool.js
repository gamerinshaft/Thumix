define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<section data-js=\"toolBox\" module=\"toolBox\"><div parts=\"header\"></div><div parts=\"body\"><div function=\"acceptBox\">ここにファイルをドラッグまたはクリックでアップロード</div><input type=\"file\" id=\"SubmitImage\" name=\"file\" style=\"display:none\"/></div></section>");;return buf.join("");
};

});
