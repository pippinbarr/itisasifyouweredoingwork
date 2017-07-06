/*1499303631,,JIT Construction: v3135146,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f=/^\d+$/,g='https://www.facebook.com/tr/',h={},i=[],j=c.href,k=b.referrer,l=a.top!==a;function m(v){var w=[];for(var x=0,y=v.length;x<y;x++)w.push(v[x][0]+'='+encodeURIComponent(v[x][1]));return w.join('&');}function n(v,w){var x=function y(){if(v.detachEvent){v.detachEvent('onload',y);}else v.onload=null;w();};if(v.attachEvent){v.attachEvent('onload',x);}else v.onload=x;}function o(v,w){var x='fb'+Math.random().toString().replace('.',''),y=b.createElement('form');y.method='post';y.action=v;y.target=x;y.acceptCharset='utf-8';y.style.display='none';var z=!!(a.attachEvent&&!a.addEventListener),aa=z?'<iframe name="'+x+'">':'iframe',ba=b.createElement(aa);ba.src='javascript:false';ba.id=x;ba.name=x;y.appendChild(ba);n(ba,function(){for(var ca=0,da=w.length;ca<da;ca++){var ea=b.createElement('input');ea.name=w[ca][0];ea.value=w[ca][1];y.appendChild(ea);}n(ba,function(){y.parentNode.removeChild(y);});y.submit();});b.body.appendChild(y);}h.addPixelId=function(v){i.push(v);};h.track=function(v,w){var x=typeof v;if(x!=='string'&&x!=='number')return false;if(f.test(v)){p(null,v,w);return true;}for(var y=0,z=i.length;y<z;y++)p(i[y],v,w);return i.length>0;};function p(v,w,x){var y=[];y.push(['id',v]);y.push(['ev',w]);y.push(['dl',j]);y.push(['rl',k]);y.push(['if',l]);y.push(['ts',new Date().valueOf()]);if(x&&typeof x==='object')for(var z in x)if(Object.prototype.hasOwnProperty.call(x,z)){var aa=x[z],ba=aa===null?'null':typeof aa;if(ba in {number:1,string:1,"boolean":1}){y.push(['cd['+encodeURIComponent(z)+']',aa]);}else if(ba==='object'){aa=typeof JSON==='undefined'?String(aa):JSON.stringify(aa);y.push(['cd['+encodeURIComponent(z)+']',aa]);}}var ca=m(y);if(2048>(g+'?'+ca).length){var da=new Image();da.src=g+'?'+ca;}else o(g,y);}var q=function v(w){if(Object.prototype.toString.call(w)!=='[object Array]')return false;var x=w.shift();if(!x)return false;var y=h[x];if(typeof y!=='function')return false;if(a._fbds){var z=a._fbds.pixelId;if(f.test(z)){i.push(z);delete a._fbds.pixelId;}}return y.apply(h,w);};for(var r=0,s=e.length;r<s;++r)q(e[r]);e.push=q;if(e.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var t=function v(){k=j;j=c.href;e.push(['track','PixelInitialized']);},u=function v(w,x,y){var z=w[x];w[x]=function(){var aa=z.apply(this,arguments);y.apply(this,arguments);return aa;};};u(d,'pushState',t);u(d,'replaceState',t);a.addEventListener('popstate',t,false);})(window,document,location,history);} catch (e) {new Image().src="https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"3135146","namespace":"FB","message":"'+e.message+'"}}');}