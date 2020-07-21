window.__require=function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=n[c]={exports:{}};e[c][0].call(p.exports,function(t){return r(e[c][1][t]||t)},p,p.exports,t,e,n,o)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({AIPlayer:[function(t,e,n){"use strict";cc._RF.push(e,"71bbeKEso5He5xyOvuZCLnk","AIPlayer");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=t("./EventDefine"),c=t("./GameManager"),a=cc._decorator,s=a.ccclass,u=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.say=null,e.GM=null,e}return o(e,t),e.prototype.onLoad=function(){this.node.on(i.default.AIsTurn,this.MyTurn,this),this.node.on(i.default.OverGame,this.GameOver,this)},e.prototype.MyTurn=function(){var t=this;this.Say("AI \u6b63\u5728\u601d\u8003..."),this.scheduleOnce(function(){console.log("AI's Turn");var e=t.GM.maxNum-t.GM.minNum,n=100*Math.random()%e+t.GM.minNum+1;t.GM.ChangeNumber(n),t.Say(Math.floor(n).toString()),t.GM.SendEvent(i.default.MyTurn)},1)},e.prototype.Say=function(t){this.say.string=t},e.prototype.GameOver=function(){this.unscheduleAllCallbacks(),this.node.targetOff(this),this.Say("\u6e38\u620f\u7ed3\u675f")},r([u(cc.Label)],e.prototype,"say",void 0),r([u(c.default)],e.prototype,"GM",void 0),e=r([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./EventDefine":"EventDefine","./GameManager":"GameManager"}],ButtonsOnclick:[function(t,e,n){"use strict";cc._RF.push(e,"ac5340n/jNH8aaorFkXBn61","ButtonsOnclick");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.warnText=null,e}return o(e,t),e.prototype.onLoad=function(){this.warnText.string=""},e.prototype.PlayerOnline=function(){this.Play("online")},e.prototype.PlayerOffline=function(){this.Play("offline")},e.prototype.Play=function(t){var e=this;switch(console.log(t),t){case"offline":console.log("1"),this.warnText.string="\u52a0\u8f7d\u6e38\u620f\u4e2d......",this.scheduleOnce(function(){cc.director.loadScene("LocalGame")},.4);break;case"online":this.warnText.string="\u670d\u52a1\u7aef\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\n\u656c\u8bf7\u671f\u5f85......",this.scheduleOnce(function(){e.warnText.string=""},1)}},r([a(cc.Label)],e.prototype,"warnText",void 0),e=r([c],e)}(cc.Component);n.default=s,cc._RF.pop()},{}],EditBox:[function(t,e,n){"use strict";cc._RF.push(e,"678a5IDmjBPEqk92Ik3QkXC","EditBox");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=t("./GameManager"),c=t("./VarsContainer"),a=t("./EventDefine"),s=cc._decorator,u=s.ccclass,p=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vars=null,e.GM=null,e.player=null,e}return o(e,t),e.prototype.onLoad=function(){this.player=this.GM.player.getComponent("Player"),this.node.on(a.default.OverGame,this.GameOver,this)},e.prototype.on_EditBox_EditingDidEnded=function(){console.log("c"),this.TestNumberEnable()?(this.GM.ChangeNumber(this.node.getComponent("cc.EditBox").string),this.player.Say(this.node.getComponent("cc.EditBox").string),this.GM.SendEvent(a.default.AIsTurn)):this.player.Say("\u8f93\u5165\u4e0d\u5408\u6cd5\uff08\u5408\u7406\u8303\u56f4\u4e3a\u5de6\u5f00\u53f3\u95ed\u533a\u95f4\uff09")},e.prototype.TestNumberEnable=function(){var t=Number(this.node.getComponent("cc.EditBox").string);return!(t>this.GM.maxNum||t<=this.GM.minNum)},e.prototype.GameOver=function(){this.node.active=!1,this.unscheduleAllCallbacks(),this.node.targetOff(this)},r([p(c.default)],e.prototype,"vars",void 0),r([p(i.default)],e.prototype,"GM",void 0),e=r([u],e)}(cc.Component);n.default=l,cc._RF.pop()},{"./EventDefine":"EventDefine","./GameManager":"GameManager","./VarsContainer":"VarsContainer"}],EventDefine:[function(t,e,n){"use strict";cc._RF.push(e,"bd1d5UekFFFhJ/ykx/VYUi6","EventDefine");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.MyTurn="MyTurn",e.AIsTurn="AIsTurn",e.StartGame="StartGame",e.OverGame="OverGame",e=r([c],e)}(cc.Component));n.default=a,cc._RF.pop()},{}],GameData:[function(t,e,n){"use strict";cc._RF.push(e,"9f394EnazZBM57TsDoVRbOj","GameData"),Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(){this.isOnlineMode=!1}}();n.default=o,cc._RF.pop()},{}],GameManager:[function(t,e,n){"use strict";cc._RF.push(e,"0186eTR2dhL/Zf1jPsHMwsr","GameManager");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("./VarsContainer"),u=t("./EventDefine"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vars=null,e.actorID=0,e.maxNum=100,e.minNum=0,e.mineNum=50,e.curNum=-1,e.isOver=!1,e.player=null,e.other=null,e.RecvNodes=[],e.playerID=-1,e.otherID=-1,e}return o(e,t),e.prototype.start=function(){this.otherID=this.other.getComponent("AIPlayer").ID,this.playerID=this.player.getComponent("Player").ID,this.SetSlider(),this.SendEvent(u.default.MyTurn)},e.prototype.ChangeNumber=function(t){this.curNum=Math.floor(t),console.log(this.curNum+","+this.mineNum),this.isOver=this.curNum==this.mineNum,this.isOver&&(this.SendEvent(u.default.OverGame),console.log("Death")),this.isOver||(this.minNum=this.curNum<this.mineNum?this.curNum:this.minNum,this.maxNum=this.curNum>this.mineNum?this.curNum:this.maxNum,this.curNum==this.maxNum&&this.maxNum--),this.maxNum-this.minNum==1&&(this.curNum!=this.mineNum&&(this.actorID==this.playerID?this.actorID=this.otherID:this.actorID=this.playerID),this.isOver=!0,this.SendEvent(u.default.OverGame),console.log("Death")),this.SetSlider()},e.prototype.onDestroy=function(){this.actorID=0,this.maxNum=100,this.minNum=0,this.mineNum=-1,this.curNum=-1,this.isOver=!1},e.prototype.SendEvent=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var o=0,r=this.RecvNodes;o<r.length;o++){var i=r[o];i.emit(t,e),console.log("emit to "+i.name)}},e.prototype.SetSlider=function(){console.log(this.minNum+":"+this.maxNum),this.vars.minSlider.progress=this.minNum/100,this.vars.maxSlider.progress=this.maxNum/100},r([a(s.default)],e.prototype,"vars",void 0),r([a(cc.Node)],e.prototype,"player",void 0),r([a(cc.Node)],e.prototype,"other",void 0),r([a([cc.Node])],e.prototype,"RecvNodes",void 0),e=r([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./EventDefine":"EventDefine","./VarsContainer":"VarsContainer"}],Handle:[function(t,e,n){"use strict";cc._RF.push(e,"1dc3dEVdY1EqqEXxQk83nlr","Handle");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.arg=0,e}return o(e,t),e.prototype.update=function(t){this.node.getComponent("cc.Label").string=Math.floor(100*this.node.parent.parent.getComponents("cc.Slider")[this.arg].progress).toString()},r([a(Number)],e.prototype,"arg",void 0),e=r([c],e)}(cc.Component);n.default=s,cc._RF.pop()},{}],MineNumber:[function(t,e,n){"use strict";cc._RF.push(e,"409deYPS0ZIMavH+yaNIUiN","MineNumber");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=t("./EventDefine"),c=t("./GameManager"),a=cc._decorator,s=a.ccclass,u=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.GM=null,e}return o(e,t),e.prototype.onLoad=function(){this.node.on(i.default.OverGame,this.GameOver,this)},e.prototype.GameOver=function(){this.node.getComponent("cc.Label").string=this.GM.mineNum},r([u(c.default)],e.prototype,"GM",void 0),e=r([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./EventDefine":"EventDefine","./GameManager":"GameManager"}],Player:[function(t,e,n){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Player");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=t("./EventDefine"),c=t("./GameManager"),a=cc._decorator,s=a.ccclass,u=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ID=0,e.GM=null,e.say=null,e.editBox=null,e}return o(e,t),e.prototype.onLoad=function(){this.node.on(i.default.MyTurn,this.MyTurn,this),this.node.on(i.default.AIsTurn,this.AIsTurn,this),this.node.on(i.default.OverGame,this.GameOver,this)},e.prototype.MyTurn=function(){this.editBox.active=!0,this.editBox.getComponent("cc.EditBox").string="",this.say.string="\u8f6e\u5230\u4f60\u8f93\u5165..."},e.prototype.AIsTurn=function(){this.editBox.active=!1},e.prototype.Say=function(t){this.say.string=t},e.prototype.GameOver=function(){this.unscheduleAllCallbacks(),this.node.targetOff(this),this.Say("\u6e38\u620f\u7ed3\u675f"),cc.director.preloadScene("Menu"),this.scheduleOnce(function(){cc.director.loadScene("Menu")},1)},r([u(c.default)],e.prototype,"GM",void 0),r([u(cc.Label)],e.prototype,"say",void 0),r([u(cc.Node)],e.prototype,"editBox",void 0),e=r([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./EventDefine":"EventDefine","./GameManager":"GameManager"}],VarsContainer:[function(t,e,n){"use strict";cc._RF.push(e,"4deccG62tZETpLBx/ZUyOhG","VarsContainer");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sliderNode=null,e.minSlider=null,e.maxSlider=null,e}return o(e,t),e.prototype.onLoad=function(){this.minSlider=this.sliderNode.getComponents("cc.Slider")[0],this.maxSlider=this.sliderNode.getComponents("cc.Slider")[1]},r([a(cc.Node)],e.prototype,"sliderNode",void 0),r([a(cc.Slider)],e.prototype,"minSlider",void 0),r([a(cc.Slider)],e.prototype,"maxSlider",void 0),e=r([c],e)}(cc.Component);n.default=s,cc._RF.pop()},{}]},{},["AIPlayer","EditBox","EventDefine","GameData","GameManager","Handle","MineNumber","Player","VarsContainer","ButtonsOnclick"]);