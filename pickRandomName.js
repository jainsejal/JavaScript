
function whosPaying(names) {
var len = names.length;
var pickName = Math.random();
pickName = Math.round(pickName * len);
return names[pickName] + " is going to buy lunch today!"
}
whosPaying(["Sejal", "Harsh", "Deb", "Rihab", "Shilpa"]);
