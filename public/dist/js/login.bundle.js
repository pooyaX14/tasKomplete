!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(this,function(){return webpackJsonp([1],{161:function(e,n,t){var a,s;try{(function(){"use strict";function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}a=[t(11),t(75),t(74)],s=function(e,n,t){var a,s=e.createClass((a={displayName:"HomePage",signup:{usernameStatus:"false"},verifyLogin:function(){var e=document.getElementById("loginNameInput").value,n=document.getElementById("loginPwInput").value,a={username:e,password:n},s=function(e){"loggedIn"===e.status?window.location.replace("/mytodos"):"authentication failure"===e.status&&(document.getElementById("loginErrMsg").innerHTML="Looks like you entered wrong credentials. Please try again")};t.sendHTTPPostRequest("/login",a,s)},checkForUsername:function(){var e=document.getElementById("signupNameInput");if(""!==e.value){var n={username:e.value},a=function(e){"unavailable"===e.status?(document.getElementById("signupNameMsg").innerHTML="username not available",this.signup.usernameStatus="false"):"available"===e.status&&(document.getElementById("signupNameMsg").innerHTML="username available",this.signup.usernameStatus="ok")}.bind(this);t.sendHTTPPostRequest("/signup/username/verify",n,a)}else this.signup.usernameStatus="false"}},i(a,"signup",function(){var e=document.getElementById("signupNameInput").value,n=document.getElementById("signupPwInputOne").value,a=document.getElementById("signupPwInputTwo").value,s=this;if(n!==a)document.getElementById("signupPwMsg").innerHTML="Passwords do not match";else if("ok"===s.signup.usernameStatus&&""!==n){var i={username:e,password:n},l=function(e){window.location.replace("/mytodos")};t.sendHTTPPostRequest("/signup",i,l)}else console.log("username exists")}),i(a,"render",function(){var t=this;return e.createElement("div",{id:"homePage"},e.createElement("div",{id:"main",className:"section group"},e.createElement(n,null),e.createElement("div",{id:"contentWrapper",className:"section group"},e.createElement("div",{id:"loginSection",className:"column loginSection"},e.createElement("h5",null,"Existing user?"),e.createElement("h3",{id:"loginHeader"},"Login"),e.createElement("p",{className:"inputClassOne"},e.createElement("input",{type:"text",id:"loginNameInput",placeholder:"User-name"})),e.createElement("p",{className:"inputClassOne"},e.createElement("input",{type:"password",id:"loginPwInput",placeholder:"Password"})),e.createElement("div",{onClick:t.verifyLogin,className:"buttonClassOne",id:"loginButton"},"Login"),e.createElement("div",{id:"loginErrMsg"})),e.createElement("div",{id:"signupSection",className:"column signupSection"},e.createElement("h5",null,"Are you a new user?"),e.createElement("h3",{id:"signupHeader"},"Sign Up!"),e.createElement("p",{className:"inputClassOne"},e.createElement("input",{type:"text",id:"signupNameInput",placeholder:"Choose a username",onBlur:t.checkForUsername}),e.createElement("div",{id:"signupNameMsg"})),e.createElement("p",{className:"inputClassOne"},e.createElement("input",{type:"password",id:"signupPwInputOne",placeholder:"Choose a password"}),e.createElement("br",null),e.createElement("br",null),e.createElement("input",{type:"password",id:"signupPwInputTwo",placeholder:"Re-enter your password"}),e.createElement("div",{id:"signupPwMsg"})),e.createElement("div",{onClick:t.signup,className:"buttonClassOne",id:"signupButton"},"Sign Up!"))),e.createElement("div",{id:"bgImg"}),e.createElement("div",{className:"overlay"})))}),a));return s}.apply(n,a),!(void 0!==s&&(e.exports=s))}).call(this)}finally{}},177:function(e,n,t){e.exports=t(83)},83:function(e,n,t){var a,s,a,s;try{(function(){"use strict";a=[t(11),t(31)],s=function(i,l){var o=document.getElementById("usernameHeader").getAttribute("data-user-name");o?window.location.replace("/mytodos"):(a=[t(161)],s=function(e){l.render(i.createElement(e,null),document.getElementById("componentContainer"))}.apply(n,a),!(void 0!==s&&(e.exports=s)))}.apply(n,a),!(void 0!==s&&(e.exports=s))}).call(this)}finally{}}},[177])});