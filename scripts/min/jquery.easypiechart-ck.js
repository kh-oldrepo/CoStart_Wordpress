/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
!function(e,t){"object"==typeof exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define("EasyPieChart",["jquery"],t):t(e.jQuery)}(this,function(e){var t=function(e,t){var n,i=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(i);var a=i.getContext("2d");i.width=i.height=t.size,e.appendChild(i);var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,i.style.width=i.style.height=[t.size,"px"].join(""),i.width=i.height=t.size*r,a.scale(r,r)),a.translate(t.size/2,t.size/2),a.rotate((-0.5+t.rotate/180)*Math.PI);var o=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(o-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(e,t,n){n=Math.min(Math.max(0,n||1),1),a.beginPath(),a.arc(0,0,o,0,2*Math.PI*n,!1),a.strokeStyle=e,a.lineWidth=t,a.stroke()},d=function(){var e,n,i=24;a.lineWidth=1,a.fillStyle=t.scaleColor,a.save();for(var i=24;i>0;--i)i%6===0?(n=t.scaleLength,e=0):(n=.6*t.scaleLength,e=t.scaleLength-n),a.fillRect(-t.size/2+e,0,n,1),a.rotate(Math.PI/12);a.restore()},h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),l=function(){t.scaleColor&&d(),t.trackColor&&s(t.trackColor,t.lineWidth)};this.clear=function(){a.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){t.scaleColor||t.trackColor?a.getImageData&&a.putImageData?n?a.putImageData(n,0,0):(l(),n=a.getImageData(0,0,t.size*r,t.size*r)):(this.clear(),l()):this.clear(),a.lineCap=t.lineCap;var i;i="function"==typeof t.barColor?t.barColor(e):t.barColor,e>0&&s(i,t.lineWidth,e/100)}.bind(this),this.animate=function(e,n){var i=Date.now();t.onStart(e,n);var a=function(){var r=Math.min(Date.now()-i,t.animate),o=t.easing(this,r,e,n-e,t.animate);this.draw(o),t.onStep(e,n,o),r>=t.animate?t.onStop(e,n):h(a)}.bind(this);h(a)}.bind(this)},n=function(e,n){var i={barColor:"#59C4C5",trackColor:"#e1e1e3",scaleColor:"#e1e1e3",scaleLength:0,lineCap:"round",lineWidth:15,size:152,rotate:0,animate:1e3,easing:function(e,t,n,i,a){return t/=a/2,1>t?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},onStart:function(e,t){},onStep:function(e,t,n){},onStop:function(e,t){}};if("undefined"!=typeof t)i.renderer=t;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");i.renderer=SVGRenderer}var a={},r=0,o=function(){this.el=e,this.options=a;for(var t in i)i.hasOwnProperty(t)&&(a[t]=n&&"undefined"!=typeof n[t]?n[t]:i[t],"function"==typeof a[t]&&(a[t]=a[t].bind(this)));a.easing="string"==typeof a.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[a.easing])?jQuery.easing[a.easing]:i.easing,this.renderer=new a.renderer(e,a),this.renderer.draw(r),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),a.animate?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),o()};e.fn.easyPieChart=function(t){return this.each(function(){e.data(this,"easyPieChart")||e.data(this,"easyPieChart",new n(this,t))})}});