define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (image) {
buf.push("<div" + (jade.attr("id", "image" + image.get("order"), true, false)) + " module=\"image\"" + (jade.attr("style", "width:" + image.get("width") + "px", true, false)) + "><div parts=\"header\"><div function=\"removeBtn\"" + (jade.attr("image-order", "image" + image.get("order"), true, false)) + " class=\"pull-left\"><div class=\"glyphicon glyphicon-remove\"></div></div><div clear=\"clear\"></div></div><div parts=\"body\"><img" + (jade.attr("src", image.get("src"), true, false)) + "/></div></div>");}.call(this,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined));;return buf.join("");
};

});
