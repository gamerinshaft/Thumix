define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (canvas) {
buf.push("<section module=\"canvas\"" + (jade.attr("style", 'width: ' + (canvas.get("width")) + 'px; height: ' + (canvas.get("height")) + 'px;', true, false)) + "><section module=\"canvasHead\"><h4>" + (jade.escape((jade_interp = canvas.get("name")) == null ? '' : jade_interp)) + "</h4></section><section data-js=\"canvasField\" module=\"canvasField\"></section></section>");}.call(this,"canvas" in locals_for_with?locals_for_with.canvas:typeof canvas!=="undefined"?canvas:undefined));;return buf.join("");
};

});
