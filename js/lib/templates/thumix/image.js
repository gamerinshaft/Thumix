define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (image) {
buf.push("<img" + (jade.attr("id", "image" + image.get("order"), true, false)) + (jade.attr("style", "width:" + image.get("width") + "px", true, false)) + (jade.attr("src", image.get("src"), true, false)) + " class=\"image\"/>");}.call(this,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined));;return buf.join("");
};

});
