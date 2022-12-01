// This is a custom build of MathJax
// https://github.com/mathjax/MathJax
// Apache License 2.0: https://github.com/mathjax/MathJax/blob/master/LICENSE
/*!
 *************************************************************************
 *
 *  mhchemParser.ts
 *  4.1.1
 *
 *  Parser for the \ce command and \pu command for MathJax and Co.
 *
 *  mhchem's \ce is a tool for writing beautiful chemical equations easily.
 *  mhchem's \pu is a tool for writing physical units easily.
 *
 *  ----------------------------------------------------------------------
 *
 *  Copyright (c) 2015-2021 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  ----------------------------------------------------------------------
 *
 *  https://github.com/mhchem/mhchemParser
 *
 */Object.defineProperty(e,"__esModule",{value:!0}),e.mhchemParser=void 0;var Q=function(){function t(){}return t.toTex=function(t,e){return n.go(T.go(t,e),"tex"!==e)},t}();function r(t){var e,Q,r={};for(e in t)for(Q in t[e]){var T=Q.split("|");t[e][Q].stateArray=T;for(var n=0;n<T.length;n++)r[T[n]]=[]}for(e in t)for(Q in t[e])for(T=t[e][Q].stateArray||[],n=0;n<T.length;n++){var o=t[e][Q];o.action_=[].concat(o.action_);for(var i=0;i<o.action_.length;i++)"string"==typeof o.action_[i]&&(o.action_[i]={type_:o.action_[i]});for(var a=e.split("|"),s=0;s<a.length;s++)if("*"===T[n]){var l=void 0;for(l in r)r[l].push({pattern:a[s],task:o})}else r[T[n]].push({pattern:a[s],task:o})}return r}e.mhchemParser=Q;var T={go:function(t,e){if(!t)return[];void 0===e&&(e="ce");var Q,r="0",n={};n.parenthesisLevel=0,t=(t=(t=t.replace(/\n/g," ")).replace(/[\u2212\u2013\u2014\u2010]/g,"-")).replace(/[\u2026]/g,"...");for(var o=10,i=[];;){Q!==t?(o=10,Q=t):o--;var a=T.stateMachines[e],s=a.transitions[r]||a.transitions["*"];t:for(var l=0;l<s.length;l++){var c=T.patterns.match_(s[l].pattern,t);if(c){for(var u=s[l].task,p=0;p<u.action_.length;p++){var h=void 0;if(a.actions[u.action_[p].type_])h=a.actions[u.action_[p].type_](n,c.match_,u.action_[p].option);else{if(!T.actions[u.action_[p].type_])throw["MhchemBugA","mhchem bug A. Please report. ("+u.action_[p].type_+")"];h=T.actions[u.action_[p].type_](n,c.match_,u.action_[p].option)}T.concatArray(i,h)}if(r=u.nextState||r,!(t.length>0))return i;if(u.revisit||(t=c.remainder),!u.toContinue)break t}}if(o<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(var Q=0;Q<e.length;Q++)t.push(e[Q]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.slice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/,"state of aggregation $":function(t){var e=T.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;var Q=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return Q?{match_:Q[0],remainder:t.substr(Q[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". __* ":/^([.\u22C5\u00B7\u2022]|[*])\s*/,"...":/^\.\.\.(?=$|[^.])/,"^{(...)}":function(t){return T.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return T.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return T.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return T.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return T.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return T.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return T.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return T.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}^":/^\{\}(?=\^)/,"{}":/^\{\}/,"{...}":function(t){return T.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return T.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return T.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$__$(...)$":function(t){return T.patterns.findObserveGroups(t,"${","","","}$")||T.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return T.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return T.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return T.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")||T.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\ce{","","","}")},"\\pu{(...)}":function(t){return T.patterns.findObserveGroups(t,"\\pu{","","","}")},oxidation$:/^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"d-oxidation$":/^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"roman numeral":/^[IVX]+/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){var e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/))return{match_:e[0],remainder:t.substr(e[0].length)};var Q=T.patterns.findObserveGroups(t,"","$","$","");return Q&&(e=Q.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/))?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;var e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,Q,r,T,n,o,i,a,s){var l=function(t,e){if("string"==typeof e)return 0!==t.indexOf(e)?null:e;var Q=t.match(e);return Q?Q[0]:null},c=l(t,e);if(null===c)return null;if(t=t.substr(c.length),null===(c=l(t,Q)))return null;var u=function(t,e,Q){for(var r=0;e<t.length;){var T=t.charAt(e),n=l(t.substr(e),Q);if(null!==n&&0===r)return{endMatchBegin:e,endMatchEnd:e+n.length};if("{"===T)r++;else if("}"===T){if(0===r)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];r--}e++}return null}(t,c.length,r||T);if(null===u)return null;var p=t.substring(0,r?u.endMatchEnd:u.endMatchBegin);if(n||o){var h=this.findObserveGroups(t.substr(u.endMatchEnd),n,o,i,a);if(null===h)return null;var f=[p,h.match_];return{match_:s?f.join(""):f,remainder:h.remainder}}return{match_:p,remainder:t.substr(u.endMatchEnd)}},match_:function(t,e){var Q=T.patterns.patterns[t];if(void 0===Q)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if("function"==typeof Q)return T.patterns.patterns[t](e);var r=e.match(Q);return r?r.length>2?{match_:r.slice(1),remainder:e.substr(r[0].length)}:{match_:r[1]||r[0],remainder:e.substr(r[0].length)}:null}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,Q){return{type_:Q}},"insert+p1":function(t,e,Q){return{type_:Q,p1:e}},"insert+p1+p2":function(t,e,Q){return{type_:Q,p1:e[0],p2:e[1]}},copy:function(t,e){return e},write:function(t,e,Q){return Q},rm:function(t,e){return{type_:"rm",p1:e}},text:function(t,e){return T.go(e,"text")},"tex-math":function(t,e){return T.go(e,"tex-math")},"tex-math tight":function(t,e){return T.go(e,"tex-math tight")},bond:function(t,e,Q){return{type_:"bond",kind_:Q||e}},"color0-output":function(t,e){return{type_:"color0",color:e}},ce:function(t,e){return T.go(e,"ce")},pu:function(t,e){return T.go(e,"pu")},"1/2":function(t,e){var Q=[];e.match(/^[+\-]/)&&(Q.push(e.substr(0,1)),e=e.substr(1));var r=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return r[1]=r[1].replace(/\$/g,""),Q.push({type_:"frac",p1:r[1],p2:r[2]}),r[3]&&(r[3]=r[3].replace(/\$/g,""),Q.push({type_:"tex-math",p1:r[3]})),Q},"9,9":function(t,e){return T.go(e,"9,9")}},stateMachines:{tex:{transitions:r({empty:{0:{action_:"copy"}},"\\ce{(...)}":{0:{action_:[{type_:"write",option:"{"},"ce",{type_:"write",option:"}"}]}},"\\pu{(...)}":{0:{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},else:{0:{action_:"copy"}}}),actions:{}},ce:{transitions:r({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},"-9":{"3|o":{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"3"}},"- orbital overlap":{o:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},d:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"}},"-":{"0|1|2":{action_:[{type_:"output",option:1},"beginsWithBond=true",{type_:"bond",option:"-"}],nextState:"3"},3:{action_:{type_:"bond",option:"-"}},a:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},as:{action_:[{type_:"output",option:2},{type_:"bond",option:"-"}],nextState:"3"},b:{action_:"b="},o:{action_:{type_:"- after o/d",option:!1},nextState:"2"},q:{action_:{type_:"- after o/d",option:!1},nextState:"2"},"d|qd|dq":{action_:{type_:"- after o/d",option:!0},nextState:"2"},"D|qD|p":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},amount2:{"1|3":{action_:"a=",nextState:"a"}},letters:{"0|1|2|3|a|as|b|p|bp|o":{action_:"o=",nextState:"o"},"q|dq":{action_:["output","o="],nextState:"o"},"d|D|qd|qD":{action_:"o after d",nextState:"o"}},digits:{o:{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},q:{action_:["output","o="],nextState:"o"},a:{action_:"o=",nextState:"o"}},"space A":{"b|p|bp":{action_:[]}},space:{a:{action_:[],nextState:"as"},0:{action_:"sb=false"},"1|2":{action_:"sb=true"},"r|rt|rd|rdt|rdq":{action_:"output",nextState:"0"},"*":{action_:["output","sb=true"],nextState:"1"}},"1st-level escape":{"1|2":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}]},"*":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}],nextState:"0"}},"[(...)]":{"r|rt":{action_:"rd=",nextState:"rd"},"rd|rdt":{action_:"rq=",nextState:"rdq"}},"...":{"o|d|D|dq|qd|qD":{action_:["output",{type_:"bond",option:"..."}],nextState:"3"},"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"ellipsis"}],nextState:"1"}},". __* ":{"*":{action_:["output",{type_:"insert",option:"addition compound"}],nextState:"1"}},"state of aggregation $":{"*":{action_:["output","state of aggregation"],nextState:"1"}},"{[(":{"a|as|o":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"0|1|2|3":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"*":{action_:["output","o=","output","parenthesisLevel++"],nextState:"2"}},")]}":{"0|1|2|3|b|p|bp|o":{action_:["o=","parenthesisLevel--"],nextState:"o"},"a|as|d|D|q|qd|qD|dq":{action_:["output","o=","parenthesisLevel--"],nextState:"o"}},", ":{"*":{action_:["output","comma"],nextState:"0"}},"^_":{"*":{action_:[]}},"^{(...)}|^($...$)":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"D"},q:{action_:"d=",nextState:"qD"},"d|D|qd|qD|dq":{action_:["output","d="],nextState:"D"}},"^a|^\\x{}{}|^\\x{}|^\\x|'":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"d"},q:{action_:"d=",nextState:"qd"},"d|qd|D|qD":{action_:"d="},dq:{action_:["output","d="],nextState:"d"}},"_{(state of aggregation)}$":{"d|D|q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x":{"0|1|2|as":{action_:"p=",nextState:"p"},b:{action_:"p=",nextState:"bp"},"3|o":{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},"q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"=<>":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"#":{"0|1|2|3|a|as|o":{action_:[{type_:"output",option:2},{type_:"bond",option:"#"}],nextState:"3"}},"{}^":{"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"tinySkip"}],nextState:"1"}},"{}":{"*":{action_:{type_:"output",option:1},nextState:"1"}},"{...}":{"0|1|2|3|a|as|b|p|bp":{action_:"o=",nextState:"o"},"o|d|D|q|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"$...$":{a:{action_:"a="},"0|1|2|3|as|b|p|bp|o":{action_:"o=",nextState:"o"},"as|o":{action_:"o="},"q|d|D|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"\\bond{(...)}":{"*":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"\\frac{(...)}":{"*":{action_:[{type_:"output",option:1},"frac-output"],nextState:"3"}},"\\overset{(...)}":{"*":{action_:[{type_:"output",option:2},"overset-output"],nextState:"3"}},"\\underset{(...)}":{"*":{action_:[{type_:"output",option:2},"underset-output"],nextState:"3"}},"\\underbrace{(...)}":{"*":{action_:[{type_:"output",option:2},"underbrace-output"],nextState:"3"}},"\\color{(...)}{(...)}":{"*":{action_:[{type_:"output",option:2},"color-output"],nextState:"3"}},"\\color{(...)}":{"*":{action_:[{type_:"output",option:2},"color0-output"]}},"\\ce{(...)}":{"*":{action_:[{type_:"output",option:2},"ce"],nextState:"3"}},"\\,":{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"1"}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}],nextState:"3"}},"\\x{}{}|\\x{}|\\x":{"0|1|2|3|a|as|b|p|bp|o|c0":{action_:["o=","output"],nextState:"3"},"*":{action_:["output","o=","output"],nextState:"3"}},others:{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"3"}},else2:{a:{action_:"a to o",nextState:"o",revisit:!0},as:{action_:["output","sb=true"],nextState:"1",revisit:!0},"r|rt|rd|rdt|rdq":{action_:["output"],nextState:"0",revisit:!0},"*":{action_:["output","copy"],nextState:"3"}}}),actions:{"o after d":function(t,e){var Q;if((t.d||"").match(/^[1-9][0-9]*$/)){var r=t.d;t.d=void 0,(Q=this.output(t)).push({type_:"tinySkip"}),t.b=r}else Q=this.output(t);return T.actions["o="](t,e),Q},"d= kv":function(t,e){t.d=e,t.dType="kv"},"charge or bond":function(t,e){if(t.beginsWithBond){var Q=[];return T.concatArray(Q,this.output(t)),T.concatArray(Q,T.actions.bond(t,e,"-")),Q}t.d=e},"- after o/d":function(t,e,Q){var r=T.patterns.match_("orbital",t.o||""),n=T.patterns.match_("one lowercase greek letter $",t.o||""),o=T.patterns.match_("one lowercase latin letter $",t.o||""),i=T.patterns.match_("$one lowercase latin letter$ $",t.o||""),a="-"===e&&(r&&""===r.remainder||n||o||i);!a||t.a||t.b||t.p||t.d||t.q||r||!o||(t.o="$"+t.o+"$");var s=[];return a?(T.concatArray(s,this.output(t)),s.push({type_:"hyphen"})):(r=T.patterns.match_("digits",t.d||""),Q&&r&&""===r.remainder?(T.concatArray(s,T.actions["d="](t,e)),T.concatArray(s,this.output(t))):(T.concatArray(s,this.output(t)),T.concatArray(s,T.actions.bond(t,e,"-")))),s},"a to o":function(t){t.o=t.a,t.a=void 0},"sb=true":function(t){t.sb=!0},"sb=false":function(t){t.sb=!1},"beginsWithBond=true":function(t){t.beginsWithBond=!0},"beginsWithBond=false":function(t){t.beginsWithBond=!1},"parenthesisLevel++":function(t){t.parenthesisLevel++},"parenthesisLevel--":function(t){t.parenthesisLevel--},"state of aggregation":function(t,e){return{type_:"state of aggregation",p1:T.go(e,"o")}},comma:function(t,e){var Q=e.replace(/\s*$/,"");return Q!==e&&0===t.parenthesisLevel?{type_:"comma enumeration L",p1:Q}:{type_:"comma enumeration M",p1:Q}},output:function(t,e,Q){var r;if(t.r){var n=void 0;n="M"===t.rdt?T.go(t.rd,"tex-math"):"T"===t.rdt?[{type_:"text",p1:t.rd||""}]:T.go(t.rd,"ce");var o=void 0;o="M"===t.rqt?T.go(t.rq,"tex-math"):"T"===t.rqt?[{type_:"text",p1:t.rq||""}]:T.go(t.rq,"ce"),r={type_:"arrow",r:t.r,rd:n,rq:o}}else r=[],(t.a||t.b||t.p||t.o||t.q||t.d||Q)&&(t.sb&&r.push({type_:"entitySkip"}),t.o||t.q||t.d||t.b||t.p||2===Q?t.o||t.q||t.d||!t.b&&!t.p?t.o&&"kv"===t.dType&&T.patterns.match_("d-oxidation$",t.d||"")?t.dType="oxidation":t.o&&"kv"===t.dType&&!t.q&&(t.dType=void 0):(t.o=t.a,t.d=t.b,t.q=t.p,t.a=t.b=t.p=void 0):(t.o=t.a,t.a=void 0),r.push({type_:"chemfive",a:T.go(t.a,"a"),b:T.go(t.b,"bd"),p:T.go(t.p,"pq"),o:T.go(t.o,"o"),q:T.go(t.q,"pq"),d:T.go(t.d,"oxidation"===t.dType?"oxidation":"bd"),dType:t.dType}));for(var i in t)"parenthesisLevel"!==i&&"beginsWithBond"!==i&&delete t[i];return r},"oxidation-output":function(t,e){var Q=["{"];return T.concatArray(Q,T.go(e,"oxidation")),Q.push("}"),Q},"frac-output":function(t,e){return{type_:"frac-ce",p1:T.go(e[0],"ce"),p2:T.go(e[1],"ce")}},"overset-output":function(t,e){return{type_:"overset",p1:T.go(e[0],"ce"),p2:T.go(e[1],"ce")}},"underset-output":function(t,e){return{type_:"underset",p1:T.go(e[0],"ce"),p2:T.go(e[1],"ce")}},"underbrace-output":function(t,e){return{type_:"underbrace",p1:T.go(e[0],"ce"),p2:T.go(e[1],"ce")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:T.go(e[1],"ce")}},"r=":function(t,e){t.r=e},"rdt=":function(t,e){t.rdt=e},"rd=":function(t,e){t.rd=e},"rqt=":function(t,e){t.rqt=e},"rq=":function(t,e){t.rq=e},operator:function(t,e,Q){return{type_:"operator",kind_:Q||e}}}},a:{transitions:r({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math tight",nextState:"1"}},",":{"*":{action_:{type_:"insert",option:"commaDecimal"}}},else2:{"*":{action_:"copy"}}}),actions:{}},o:{transitions:r({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},letters:{"*":{action_:"rm"}},"\\ca":{"*":{action_:{type_:"insert",option:"circa"}}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:[{type_:"write",option:"{"},"text",{type_:"write",option:"}"}]}},else2:{"*":{action_:"copy"}}}),actions:{}},text:{transitions:r({empty:{"*":{action_:"output"}},"{...}":{"*":{action_:"text="}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"\\greek":{"*":{action_:["output","rm"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:["output","copy"]}},else:{"*":{action_:"text="}}}),actions:{output:function(t){if(t.text_){var e={type_:"text",p1:t.text_};for(var Q in t)delete t[Q];return e}}}},pq:{transitions:r({empty:{"*":{action_:[]}},"state of aggregation $":{"*":{action_:"state of aggregation"}},i$:{0:{action_:[],nextState:"!f",revisit:!0}},"(KV letters),":{0:{action_:"rm",nextState:"0"}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"a-z":{f:{action_:"tex-math"}},letters:{"*":{action_:"rm"}},"-9.,9":{"*":{action_:"9,9"}},",":{"*":{action_:{type_:"insert+p1",option:"comma enumeration S"}}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"state of aggregation":function(t,e){return{type_:"state of aggregation subscript",p1:T.go(e,"o")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:T.go(e[1],"pq")}}}},bd:{transitions:r({empty:{"*":{action_:[]}},x$:{0:{action_:[],nextState:"!f",revisit:!0}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"-9.,9 no missing 0":{"*":{action_:"9,9"}},".":{"*":{action_:{type_:"insert",option:"electron dot"}}},"a-z":{f:{action_:"tex-math"}},x:{"*":{action_:{type_:"insert",option:"KV x"}}},letters:{"*":{action_:"rm"}},"'":{"*":{action_:{type_:"insert",option:"prime"}}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"color-output":function(t,e){return{type_:"color",color1:e[0],color2:T.go(e[1],"bd")}}}},oxidation:{transitions:r({empty:{"*":{action_:[]}},"roman numeral":{"*":{action_:"roman-numeral"}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},else:{"*":{action_:"copy"}}}),actions:{"roman-numeral":function(t,e){return{type_:"roman numeral",p1:e}}}},"tex-math":{transitions:r({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},else:{"*":{action_:"o="}}}),actions:{output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var Q in t)delete t[Q];return e}}}},"tex-math tight":{transitions:r({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},"-|+":{"*":{action_:"tight operator"}},else:{"*":{action_:"o="}}}),actions:{"tight operator":function(t,e){t.o=(t.o||"")+"{"+e+"}"},output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var Q in t)delete t[Q];return e}}}},"9,9":{transitions:r({empty:{"*":{action_:[]}},",":{"*":{action_:"comma"}},else:{"*":{action_:"copy"}}}),actions:{comma:function(){return{type_:"commaDecimal"}}}},pu:{transitions:r({empty:{"*":{action_:"output"}},space$:{"*":{action_:["output","space"]}},"{[(|)]}":{"0|a":{action_:"copy"}},"(-)(9)^(-9)":{0:{action_:"number^",nextState:"a"}},"(-)(9.,9)(e)(99)":{0:{action_:"enumber",nextState:"a"}},space:{"0|a":{action_:[]}},"pm-operator":{"0|a":{action_:{type_:"operator",option:"\\pm"},nextState:"0"}},operator:{"0|a":{action_:"copy",nextState:"0"}},"//":{d:{action_:"o=",nextState:"/"}},"/":{d:{action_:"o=",nextState:"/"}},"{...}|else":{"0|d":{action_:"d=",nextState:"d"},a:{action_:["space","d="],nextState:"d"},"/|q":{action_:"q=",nextState:"q"}}}),actions:{enumber:function(t,e){var Q=[];return"+-"===e[0]||"+/-"===e[0]?Q.push("\\pm "):e[0]&&Q.push(e[0]),e[1]&&(T.concatArray(Q,T.go(e[1],"pu-9,9")),e[2]&&(e[2].match(/[,.]/)?T.concatArray(Q,T.go(e[2],"pu-9,9")):Q.push(e[2])),(e[3]||e[4])&&("e"===e[3]||"*"===e[4]?Q.push({type_:"cdot"}):Q.push({type_:"times"}))),e[5]&&Q.push("10^{"+e[5]+"}"),Q},"number^":function(t,e){var Q=[];return"+-"===e[0]||"+/-"===e[0]?Q.push("\\pm "):e[0]&&Q.push(e[0]),T.concatArray(Q,T.go(e[1],"pu-9,9")),Q.push("^{"+e[2]+"}"),Q},operator:function(t,e,Q){return{type_:"operator",kind_:Q||e}},space:function(){return{type_:"pu-space-1"}},output:function(t){var e,Q=T.patterns.match_("{(...)}",t.d||"");Q&&""===Q.remainder&&(t.d=Q.match_);var r=T.patterns.match_("{(...)}",t.q||"");if(r&&""===r.remainder&&(t.q=r.match_),t.d&&(t.d=t.d.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.d=t.d.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F")),t.q){t.q=t.q.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.q=t.q.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F");var n={d:T.go(t.d,"pu"),q:T.go(t.q,"pu")};"//"===t.o?e={type_:"pu-frac",p1:n.d,p2:n.q}:(e=n.d,n.d.length>1||n.q.length>1?e.push({type_:" / "}):e.push({type_:"/"}),T.concatArray(e,n.q))}else e=T.go(t.d,"pu-2");for(var o in t)delete t[o];return e}}},"pu-2":{transitions:r({empty:{"*":{action_:"output"}},"*":{"*":{action_:["output","cdot"],nextState:"0"}},"\\x":{"*":{action_:"rm="}},space:{"*":{action_:["output","space"],nextState:"0"}},"^{(...)}|^(-1)":{1:{action_:"^(-1)"}},"-9.,9":{0:{action_:"rm=",nextState:"0"},1:{action_:"^(-1)",nextState:"0"}},"{...}|else":{"*":{action_:"rm=",nextState:"1"}}}),actions:{cdot:function(){return{type_:"tight cdot"}},"^(-1)":function(t,e){t.rm+="^{"+e+"}"},space:function(){return{type_:"pu-space-2"}},output:function(t){var e=[];if(t.rm){var Q=T.patterns.match_("{(...)}",t.rm||"");e=Q&&""===Q.remainder?T.go(Q.match_,"pu"):{type_:"rm",p1:t.rm}}for(var r in t)delete t[r];return e}}},"pu-9,9":{transitions:r({empty:{0:{action_:"output-0"},o:{action_:"output-o"}},",":{0:{action_:["output-0","comma"],nextState:"o"}},".":{0:{action_:["output-0","copy"],nextState:"o"}},else:{"*":{action_:"text="}}}),actions:{comma:function(){return{type_:"commaDecimal"}},"output-0":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var Q=t.text_.length%3;0===Q&&(Q=3);for(var r=t.text_.length-3;r>0;r-=3)e.push(t.text_.substr(r,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(0,Q)),e.reverse()}else e.push(t.text_);for(var T in t)delete t[T];return e},"output-o":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var Q=t.text_.length-3,r=void 0;for(r=0;r<Q;r+=3)e.push(t.text_.substr(r,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(r))}else e.push(t.text_);for(var T in t)delete t[T];return e}}}}},n={go:function(t,e){if(!t)return"";for(var Q="",r=!1,T=0;T<t.length;T++){var o=t[T];"string"==typeof o?Q+=o:(Q+=n._go2(o),"1st-level escape"===o.type_&&(r=!0))}return e&&!r&&Q&&(Q="{"+Q+"}"),Q},_goInner:function(t){return n.go(t,!1)},_go2:function(t){var e;switch(t.type_){case"chemfive":e="";var Q={a:n._goInner(t.a),b:n._goInner(t.b),p:n._goInner(t.p),o:n._goInner(t.o),q:n._goInner(t.q),d:n._goInner(t.d)};Q.a&&(Q.a.match(/^[+\-]/)&&(Q.a="{"+Q.a+"}"),e+=Q.a+"\\,"),(Q.b||Q.p)&&(e+="{\\vphantom{A}}",e+="^{\\hphantom{"+(Q.b||"")+"}}_{\\hphantom{"+(Q.p||"")+"}}",e+="\\mkern-1.5mu",e+="{\\vphantom{A}}",e+="^{\\smash[t]{\\vphantom{2}}\\llap{"+(Q.b||"")+"}}",e+="_{\\vphantom{2}\\llap{\\smash[t]{"+(Q.p||"")+"}}}"),Q.o&&(Q.o.match(/^[+\-]/)&&(Q.o="{"+Q.o+"}"),e+=Q.o),"kv"===t.dType?((Q.d||Q.q)&&(e+="{\\vphantom{A}}"),Q.d&&(e+="^{"+Q.d+"}"),Q.q&&(e+="_{\\smash[t]{"+Q.q+"}}")):"oxidation"===t.dType?(Q.d&&(e+="{\\vphantom{A}}",e+="^{"+Q.d+"}"),Q.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+Q.q+"}}")):(Q.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+Q.q+"}}"),Q.d&&(e+="{\\vphantom{A}}",e+="^{"+Q.d+"}"));break;case"rm":case"roman numeral":e="\\mathrm{"+t.p1+"}";break;case"text":t.p1.match(/[\^_]/)?(t.p1=t.p1.replace(" ","~").replace("-","\\text{-}"),e="\\mathrm{"+t.p1+"}"):e="\\text{"+t.p1+"}";break;case"state of aggregation":e="\\mskip2mu "+n._goInner(t.p1);break;case"state of aggregation subscript":e="\\mskip1mu "+n._goInner(t.p1);break;case"bond":if(!(e=n._getBond(t.kind_)))throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+t.kind_+")"];break;case"frac":var r="\\frac{"+t.p1+"}{"+t.p2+"}";e="\\mathchoice{\\textstyle"+r+"}{"+r+"}{"+r+"}{"+r+"}";break;case"pu-frac":var T="\\frac{"+n._goInner(t.p1)+"}{"+n._goInner(t.p2)+"}";e="\\mathchoice{\\textstyle"+T+"}{"+T+"}{"+T+"}{"+T+"}";break;case"tex-math":case"1st-level escape":e=t.p1+" ";break;case"frac-ce":e="\\frac{"+n._goInner(t.p1)+"}{"+n._goInner(t.p2)+"}";break;case"overset":e="\\overset{"+n._goInner(t.p1)+"}{"+n._goInner(t.p2)+"}";break;case"underset":e="\\underset{"+n._goInner(t.p1)+"}{"+n._goInner(t.p2)+"}";break;case"underbrace":e="\\underbrace{"+n._goInner(t.p1)+"}_{"+n._goInner(t.p2)+"}";break;case"color":e="{\\color{"+t.color1+"}{"+n._goInner(t.color2)+"}}";break;case"color0":e="\\color{"+t.color+"}";break;case"arrow":var o={rd:n._goInner(t.rd),rq:n._goInner(t.rq)},i=n._getArrow(t.r);o.rd||o.rq?"<=>"===t.r||"<=>>"===t.r||"<<=>"===t.r||"<--\x3e"===t.r?(i="\\long"+i,o.rd&&(i="\\overset{"+o.rd+"}{"+i+"}"),o.rq&&(i="<--\x3e"===t.r?"\\underset{\\lower2mu{"+o.rq+"}}{"+i+"}":"\\underset{\\lower6mu{"+o.rq+"}}{"+i+"}"),i=" {}\\mathrel{"+i+"}{} "):(o.rq&&(i+="[{"+o.rq+"}]"),i=" {}\\mathrel{\\x"+(i+="{"+o.rd+"}")+"}{} "):i=" {}\\mathrel{\\long"+i+"}{} ",e=i;break;case"operator":e=n._getOperator(t.kind_);break;case"space":e=" ";break;case"tinySkip":e="\\mkern2mu";break;case"entitySkip":case"pu-space-1":e="~";break;case"pu-space-2":e="\\mkern3mu ";break;case"1000 separator":e="\\mkern2mu ";break;case"commaDecimal":e="{,}";break;case"comma enumeration L":e="{"+t.p1+"}\\mkern6mu ";break;case"comma enumeration M":e="{"+t.p1+"}\\mkern3mu ";break;case"comma enumeration S":e="{"+t.p1+"}\\mkern1mu ";break;case"hyphen":e="\\text{-}";break;case"addition compound":e="\\,{\\cdot}\\,";break;case"electron dot":e="\\mkern1mu \\bullet\\mkern1mu ";break;case"KV x":e="{\\times}";break;case"prime":e="\\prime ";break;case"cdot":e="\\cdot ";break;case"tight cdot":e="\\mkern1mu{\\cdot}\\mkern1mu ";break;case"times":e="\\times ";break;case"circa":e="{\\sim}";break;case"^":e="uparrow";break;case"v":e="downarrow";break;case"ellipsis":e="\\ldots ";break;case"/":e="/";break;case" / ":e="\\,/\\,";break;default:throw["MhchemBugT","mhchem bug T. Please report."]}return e},_getArrow:function(t){switch(t){case"->":case"\u2192":case"\u27f6":return"rightarrow";case"<-":return"leftarrow";case"<->":return"leftrightarrow";case"<--\x3e":return"leftrightarrows";case"<=>":case"\u21cc":return"rightleftharpoons";case"<=>>":return"Rightleftharpoons";case"<<=>":return"Leftrightharpoons";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getBond:function(t){switch(t){case"-":case"1":return"{-}";case"=":case"2":return"{=}";case"#":case"3":return"{\\equiv}";case"~":return"{\\tripledash}";case"~-":return"{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";case"~=":case"~--":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";case"-~-":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";case"...":return"{{\\cdot}{\\cdot}{\\cdot}}";case"....":return"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";case"->":return"{\\rightarrow}";case"<-":return"{\\leftarrow}";case"<":return"{<}";case">":return"{>}";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getOperator:function(t){switch(t){case"+":return" {}+{} ";case"-":return" {}-{} ";case"=":return" {}={} ";case"<":return" {}<{} ";case">":return" {}>{} ";case"<<":return" {}\\ll{} ";case">>":return" {}\\gg{} ";case"\\pm":return" {}\\pm{} ";case"\\approx":case"$\\approx$":return" {}\\approx{} ";case"v":case"(v)":return" \\downarrow{} ";case"^":case"(^)":return" \\uparrow{} ";default:throw["MhchemBugT","mhchem bug T. Please report."]}}}}},e={};function Q(r){var T=e[r];if(void 0!==T)return T.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,Q),n.exports}Q.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return Q.d(e,{a:e}),e},Q.d=function(t,e){for(var r in e)Q.o(e,r)&&!Q.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},Q.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),Q.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},Q.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},Q(7346),Q(1605).Loader.preLoad("loader","startup","core","adaptors/liteDOM","input/tex-base","[tex]/mathtools","[tex]/amscd","[tex]/braket","[tex]/cancel","[tex]/cases","[tex]/color","[tex]/gensymb","[tex]/mhchem","[tex]/physics","output/svg","output/svg/fonts/tex.js"),Q(4483),Q(3362),Q(1413),Q(502),Q(6375),Q(1942),Q(9115),Q(5564),Q(5262),Q(4673),Q(9646),Q(2759),Q(3106),Q(1796),(0,Q(546).insert)(MathJax.config,{tex:{packages:{"[+]":["mathtools","amscd","braket","cancel","cases","color","gensymb","mhchem","physics"]}}}),Q(970)}();