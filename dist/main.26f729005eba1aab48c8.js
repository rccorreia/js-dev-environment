webpackJsonp([0],[function(t,e,n){(function(t){"use strict";n(1);var e=n(3);(0,e.getUsers)().then(function(n){var r="";n.forEach(function(t){r+='<tr>\n\t\t\t<td><a href="#" data-id="'+t.id+'" class="deleteUser">Delete</a></td>\n\t\t\t<td>'+t.id+"</td>\n\t\t\t<td>"+t.firstName+"</td>\n\t\t\t<td>"+t.lastName+"</td>\n\t\t\t<td>"+t.email+"</td>\n\t\t\t</tr>"}),t.document.getElementById("users").innerHTML=r;var u=t.document.getElementsByClassName("deleteUser");Array.from(u,function(t){t.onclick=function(t){var n=t.target;t.preventDefault(),(0,e.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(e,function(){return this}())},function(t,e){},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(){return a("users")}function o(t){return c("users/"+t)}function a(t){return fetch(f+t).then(s,d)}function c(t){var e=new Request(f+t,{method:"DELETE"});return fetch(e).then(s,d)}function s(t){return t.json()}function d(t){console.log(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getUsers=u,e.deleteUser=o,n(4);var i=n(5),l=r(i),f=(0,l.default)()},,function(t,e){"use strict";function n(){return r("useMockApi")?"http://localhost:3001/":"https://mysterious-dawn-16770.herokuapp.com/"}function r(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),r=n.exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}]);
//# sourceMappingURL=main.26f729005eba1aab48c8.js.map