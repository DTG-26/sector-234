var Wc=Object.defineProperty;var Xc=(s,t,e)=>t in s?Wc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>Xc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="170",Yc=0,Uo=1,Kc=2,qc=0,Ql=1,$c=2,Di=3,tn=0,$e=1,Ue=2,Bi=0,Xn=1,Ts=2,No=3,Fo=4,Zc=5,un=100,jc=101,Jc=102,Qc=103,th=104,eh=200,ih=201,nh=202,sh=203,ha=204,da=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,dh=212,uh=213,fh=214,ua=0,fa=1,pa=2,qn=3,ma=4,ga=5,_a=6,va=7,tc=0,ph=1,mh=2,Qi=0,ec=1,ic=2,nc=3,ro=4,gh=5,sc=6,rc=7,ac=300,$n=301,Zn=302,xa=303,Ma=304,Sr=306,_n=1e3,vn=1001,ya=1002,vi=1003,_h=1004,Os=1005,Qe=1006,Cr=1007,xn=1008,zi=1009,oc=1010,lc=1011,Es=1012,ao=1013,yn=1014,Ni=1015,Ti=1016,oo=1017,lo=1018,jn=1020,cc=35902,hc=1021,dc=1022,oi=1023,uc=1024,fc=1025,Yn=1026,Jn=1027,pc=1028,co=1029,mc=1030,ho=1031,uo=1033,cr=33776,hr=33777,dr=33778,ur=33779,Sa=35840,Ta=35841,Ea=35842,wa=35843,ba=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,Ia=37810,La=37811,Da=37812,Oa=37813,Ua=37814,Na=37815,Fa=37816,Ba=37817,Ga=37818,ka=37819,Ha=37820,za=37821,fr=36492,Va=36494,Wa=36495,gc=36283,Xa=36284,Ya=36285,Ka=36286,vh=3200,xh=3201,_c=0,Mh=1,Ji="",si="srgb",is="srgb-linear",Tr="linear",ae="srgb",Tn=7680,Bo=519,yh=512,Sh=513,Th=514,vc=515,Eh=516,wh=517,bh=518,Ah=519,qa=35044,Go="300 es",Fi=2e3,mr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const ys=Math.PI/180,Qn=180/Math.PI;function Gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function fo(s,t){return(s%t+t)%t}function Rh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Ch(s,t,e){return s!==t?(e-s)/(t-s):0}function Ss(s,t,e){return(1-e)*s+e*t}function Ph(s,t,e,i){return Ss(s,t,1-Math.exp(-e*i))}function Ih(s,t=1){return t-Math.abs(fo(s,t*2)-t)}function Lh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Oh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uh(s,t){return s+Math.random()*(t-s)}function Nh(s){return s*(.5-Math.random())}function Fh(s){s!==void 0&&(ko=s);let t=ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bh(s){return s*ys}function Gh(s){return s*Qn}function kh(s){return(s&s-1)===0&&s!==0}function Hh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vh(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ni={DEG2RAD:ys,RAD2DEG:Qn,generateUUID:Gi,clamp:Ge,euclideanModulo:fo,mapLinear:Rh,inverseLerp:Ch,lerp:Ss,damp:Ph,pingpong:Ih,smoothstep:Lh,smootherstep:Dh,randInt:Oh,randFloat:Uh,randFloatSpread:Nh,seededRandom:Fh,degToRad:Bh,radToDeg:Gh,isPowerOfTwo:kh,ceilPowerOfTwo:Hh,floorPowerOfTwo:zh,setQuaternionFromProperEuler:Vh,normalize:le,denormalize:_i};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,n,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],T=n[1],w=n[4],y=n[7],L=n[2],P=n[5],S=n[8];return r[0]=a*v+o*T+l*L,r[3]=a*m+o*w+l*P,r[6]=a*f+o*y+l*S,r[1]=c*v+h*T+d*L,r[4]=c*m+h*w+d*P,r[7]=c*f+h*y+d*S,r[2]=u*v+p*T+g*L,r[5]=u*m+p*w+g*P,r[8]=u*f+p*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new kt;function xc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wh(){const s=gr("canvas");return s.style.display="block",s}const Ho={};function xs(s){s in Ho||(Ho[s]=!0,console.warn(s))}function Xh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Yh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Tr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zo=[.64,.33,.3,.6,.15,.06],Vo=[.2126,.7152,.0722],Wo=[.3127,.329],Xo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[is]:{primaries:zo,whitePoint:Wo,transfer:Tr,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:zo,whitePoint:Wo,transfer:ae,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:si}}});let En;class qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{En===void 0&&(En=gr("canvas")),En.width=t.width,En.height=t.height;const i=En.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=En}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ki(e[i]/255)*255):e[i]=ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $h=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ir(n[a].image)):r.push(Ir(n[a]))}else r=Ir(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class We extends ns{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=vn,n=vn,r=Qe,a=xn,o=oi,l=zi,c=We.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Gi(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=ac;We.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,n=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,L=(f+1)/2,P=(h+u)/4,S=(d+v)/4,R=(g+m)/4;return w>y&&w>L?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=P/i,r=S/i):y>L?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=P/n,r=R/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=S/r,n=R/r),this.set(i,n,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends jh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yc extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=vi,this.minFilter=vi,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*v,T=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const L=Math.sqrt(w),P=Math.atan2(L,f*T);m=Math.sin(m*P)/L,o=Math.sin(o*P)/L}const y=o*T;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+v*y,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),p=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new I,Ko=new As;class Rs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ns.subVectors(this.max,ls),wn.subVectors(t.a,ls),bn.subVectors(t.b,ls),An.subVectors(t.c,ls),Xi.subVectors(bn,wn),Yi.subVectors(An,bn),rn.subVectors(wn,An);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-rn.z,rn.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,rn.z,0,-rn.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-rn.y,rn.x,0];return!Dr(e,wn,bn,An,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,wn,bn,An,Ns))?!1:(Fs.crossVectors(Xi,Yi),e=[Fs.x,Fs.y,Fs.z],Dr(e,wn,bn,An,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new I,new I,new I,new I,new I,new I,new I,new I],di=new I,Us=new Rs,wn=new I,bn=new I,An=new I,Xi=new I,Yi=new I,rn=new I,ls=new I,Ns=new I,Fs=new I,an=new I;function Dr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){an.fromArray(s,r);const o=n.x*Math.abs(an.x)+n.y*Math.abs(an.y)+n.z*Math.abs(an.z),l=t.dot(an),c=e.dot(an),h=i.dot(an);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qh=new Rs,cs=new I,Or=new I;class Cs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(cs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Or)),this.expandByPoint(cs.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new I,Ur=new I,Bs=new I,Ki=new I,Nr=new I,Gs=new I,Fr=new I;class Er{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ur.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=Ki.dot(this.direction),l=-Ki.dot(Bs),c=Ki.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ur).addScaledVector(Bs,u),p}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,n,r){Nr.subVectors(e,t),Gs.subVectors(i,t),Fr.crossVectors(Nr,Gs);let a=this.direction.dot(Fr),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,t);const l=o*this.direction.dot(Gs.crossVectors(Ki,Gs));if(l<0)return null;const c=o*this.direction.dot(Nr.cross(Ki));if(c<0||l+c>a)return null;const h=-o*Ki.dot(Fr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,n,r,a,o,l,c,h,d,u,p,g,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,p,g,v,m)}set(t,e,i,n,r,a,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Rn.setFromMatrixColumn(t,0).length(),r=1/Rn.setFromMatrixColumn(t,1).length(),a=1/Rn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,i){const n=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),qi.crossVectors(i,je),qi.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),qi.crossVectors(i,je)),qi.normalize(),ks.crossVectors(je,qi),n[0]=qi.x,n[4]=ks.x,n[8]=je.x,n[1]=qi.y,n[5]=ks.y,n[9]=je.y,n[2]=qi.z,n[6]=ks.z,n[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],T=i[3],w=i[7],y=i[11],L=i[15],P=n[0],S=n[4],R=n[8],x=n[12],_=n[1],A=n[5],D=n[9],O=n[13],k=n[2],Y=n[6],K=n[10],J=n[14],X=n[3],ot=n[7],ut=n[11],St=n[15];return r[0]=a*P+o*_+l*k+c*X,r[4]=a*S+o*A+l*Y+c*ot,r[8]=a*R+o*D+l*K+c*ut,r[12]=a*x+o*O+l*J+c*St,r[1]=h*P+d*_+u*k+p*X,r[5]=h*S+d*A+u*Y+p*ot,r[9]=h*R+d*D+u*K+p*ut,r[13]=h*x+d*O+u*J+p*St,r[2]=g*P+v*_+m*k+f*X,r[6]=g*S+v*A+m*Y+f*ot,r[10]=g*R+v*D+m*K+f*ut,r[14]=g*x+v*O+m*J+f*St,r[3]=T*P+w*_+y*k+L*X,r[7]=T*S+w*A+y*Y+L*ot,r[11]=T*R+w*D+y*K+L*ut,r[15]=T*x+w*O+y*J+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*d-n*c*d-r*o*u+i*c*u+n*o*p-i*l*p)+v*(+e*l*p-e*c*u+r*a*u-n*a*p+n*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+f*(-n*o*h-e*l*d+e*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],T=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,w=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,y=h*v*c-g*d*c+g*o*p-a*v*p-h*o*f+a*d*f,L=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,P=e*T+i*w+n*y+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/P;return t[0]=T*S,t[1]=(v*u*r-d*m*r-v*n*p+i*m*p+d*n*f-i*u*f)*S,t[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*f+i*l*f)*S,t[3]=(d*l*r-o*u*r-d*n*c+i*u*c+o*n*p-i*l*p)*S,t[4]=w*S,t[5]=(h*m*r-g*u*r+g*n*p-e*m*p-h*n*f+e*u*f)*S,t[6]=(g*l*r-a*m*r-g*n*c+e*m*c+a*n*f-e*l*f)*S,t[7]=(a*u*r-h*l*r+h*n*c-e*u*c-a*n*p+e*l*p)*S,t[8]=y*S,t[9]=(g*d*r-h*v*r-g*i*p+e*v*p+h*i*f-e*d*f)*S,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*f+e*o*f)*S,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*p-e*o*p)*S,t[12]=L*S,t[13]=(h*v*n-g*d*n+g*i*u-e*v*u-h*i*m+e*d*m)*S,t[14]=(g*o*n-a*v*n-g*i*l+e*v*l+a*i*m-e*o*m)*S,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*u+e*o*u)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,v=a*h,m=a*d,f=o*d,T=l*c,w=l*h,y=l*d,L=i.x,P=i.y,S=i.z;return n[0]=(1-(v+f))*L,n[1]=(p+y)*L,n[2]=(g-w)*L,n[3]=0,n[4]=(p-y)*P,n[5]=(1-(u+f))*P,n[6]=(m+T)*P,n[7]=0,n[8]=(g+w)*S,n[9]=(m-T)*S,n[10]=(1-(u+v))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Rn.set(n[0],n[1],n[2]).length();const a=Rn.set(n[4],n[5],n[6]).length(),o=Rn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],ui.copy(this);const c=1/r,h=1/a,d=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Fi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n);let p,g;if(o===Fi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Fi){const l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(a-r),u=(e+t)*c,p=(i+n)*h;let g,v;if(o===Fi)g=(a+r)*d,v=-2*d;else if(o===mr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rn=new I,ui=new ue,td=new I(0,0,0),ed=new I(1,1,1),qi=new I,ks=new I,je=new I,qo=new ue,$o=new As;class wi{constructor(t=0,e=0,i=0,n=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const Zo=new I,Cn=new As,Pi=new ue,Hs=new I,hs=new I,nd=new I,sd=new As,jo=new I(1,0,0),Jo=new I(0,1,0),Qo=new I(0,0,1),tl={type:"added"},rd={type:"removed"},Pn={type:"childadded",child:null},Br={type:"childremoved",child:null};class Te extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new wi,i=new As,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis(Qo,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis(Qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(hs,Hs,this.up):Pi.lookAt(Hs,hs,this.up),this.quaternion.setFromRotationMatrix(Pi),n&&(Pi.extractRotation(n.matrixWorld),Cn.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new I,Ii=new I,Gr=new I,Li=new I,In=new I,Ln=new I,el=new I,kr=new I,Hr=new I,zr=new I,Vr=new he,Wr=new he,Xr=new he;class ai{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){fi.subVectors(n,e),Ii.subVectors(i,e),Gr.subVectors(t,e);const a=fi.dot(fi),o=fi.dot(Ii),l=fi.dot(Gr),c=Ii.dot(Ii),h=Ii.dot(Gr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Vr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,i),Xr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Ii.subVectors(t,e),fi.cross(Ii).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),fi.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ai.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;In.subVectors(n,i),Ln.subVectors(r,i),kr.subVectors(t,i);const l=In.dot(kr),c=Ln.dot(kr);if(l<=0&&c<=0)return e.copy(i);Hr.subVectors(t,n);const h=In.dot(Hr),d=Ln.dot(Hr);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(In,a);zr.subVectors(t,r);const p=In.dot(zr),g=Ln.dot(zr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ln,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return el.subVectors(r,n),o=(d-h)/(d-h+(p-g)),e.copy(n).addScaledVector(el,o);const f=1/(m+v+u);return a=v*f,o=u*f,e.copy(i).addScaledVector(In,a).addScaledVector(Ln,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=fo(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Yr(a,r,t+1/3),this.g=Yr(a,r,t),this.b=Yr(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,n),this}setStyle(t,e=si){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=Sc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Zt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ge(Be.r*255,0,255))*65536+Math.round(Ge(Be.g*255,0,255))*256+Math.round(Ge(Be.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Be.copy(this),e);const i=Be.r,n=Be.g,r=Be.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=si){Zt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,n=Be.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(zs);const i=Ss($i.h,zs.h,e),n=Ss($i.s,zs.s,e),r=Ss($i.l,zs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ut;Ut.NAMES=Sc;let ad=0;class nn extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Gi(),this.name="",this.blending=Xn,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=da,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ha&&(i.blendSrc=this.blendSrc),this.blendDst!==da&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jt extends nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new I,Vs=new Mt;class ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Tc extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ec extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}let od=0;const ii=new ue,Kr=new Te,Dn=new I,Je=new Rs,ds=new Rs,Le=new I;class we extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xc(t)?Ec:Tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(Je.min,ds.min),Je.expandByPoint(Le),Le.addVectors(Je.max,ds.max),Je.expandByPoint(Le)):(Je.expandByPoint(ds.min),Je.expandByPoint(ds.max))}Je.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(Dn.fromBufferAttribute(t,c),Le.add(Dn)),n=Math.max(n,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,d=new I,u=new Mt,p=new Mt,g=new Mt,v=new I,m=new I;function f(R,x,_){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[R].add(v),o[x].add(v),o[_].add(v),l[R].add(m),l[x].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,x=T.length;R<x;++R){const _=T[R],A=_.start,D=_.count;for(let O=A,k=A+D;O<k;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const w=new I,y=new I,L=new I,P=new I;function S(R){L.fromBufferAttribute(n,R),P.copy(L);const x=o[R];w.copy(x),w.sub(L.multiplyScalar(L.dot(x))).normalize(),y.crossVectors(P,x);const A=y.dot(l[R])<0?-1:1;a.setXYZW(R,w.x,w.y,w.z,A)}for(let R=0,x=T.length;R<x;++R){const _=T[R],A=_.start,D=_.count;for(let O=A,k=A+D;O<k;O+=3)S(t.getX(O+0)),S(t.getX(O+1)),S(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new ti(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new ue,on=new Er,Ws=new Cs,nl=new I,Xs=new I,Ys=new I,Ks=new I,qr=new I,qs=new I,sl=new I,$s=new I;class G extends Te{constructor(t=new we,e=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(qr.fromBufferAttribute(d,t),a?qs.addScaledVector(qr,h):qs.addScaledVector(qr.sub(e),h))}e.add(qs)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),on.copy(t.ray).recast(t.near),!(Ws.containsPoint(on.origin)===!1&&(on.intersectSphere(Ws,nl)===null||on.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(il.copy(r).invert(),on.copy(t.ray).applyMatrix4(il),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,on)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,L=w;y<L;y+=3){const P=o.getX(y),S=o.getX(y+1),R=o.getX(y+2);n=Zs(this,f,t,i,c,h,d,P,S,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);n=Zs(this,a,t,i,c,h,d,T,w,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,L=w;y<L;y+=3){const P=y,S=y+1,R=y+2;n=Zs(this,f,t,i,c,h,d,P,S,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,w=m+1,y=m+2;n=Zs(this,a,t,i,c,h,d,T,w,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function ld(s,t,e,i,n,r,a,o){let l;if(t.side===$e?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===tn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:s}}function Zs(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Xs),s.getVertexPosition(l,Ys),s.getVertexPosition(c,Ks);const h=ld(s,t,e,i,Xs,Ys,Ks,sl);if(h){const d=new I;ai.getBarycoord(sl,Xs,Ys,Ks,d),n&&(h.uv=ai.getInterpolatedAttribute(n,o,l,c,d,new Mt)),r&&(h.uv1=ai.getInterpolatedAttribute(r,o,l,c,d,new Mt)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};ai.getNormal(Xs,Ys,Ks,u.normal),h.face=u,h.barycoord=d}return h}class it extends we{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function g(v,m,f,T,w,y,L,P,S,R,x){const _=y/S,A=L/R,D=y/2,O=L/2,k=P/2,Y=S+1,K=R+1;let J=0,X=0;const ot=new I;for(let ut=0;ut<K;ut++){const St=ut*A-O;for(let Ft=0;Ft<Y;Ft++){const te=Ft*_-D;ot[v]=te*T,ot[m]=St*w,ot[f]=k,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[f]=P>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Ft/S),d.push(1-ut/R),J+=1}}for(let ut=0;ut<R;ut++)for(let St=0;St<S;St++){const Ft=u+St+Y*ut,te=u+St+Y*(ut+1),$=u+(St+1)+Y*(ut+1),st=u+(St+1)+Y*ut;l.push(Ft,te,st),l.push(te,$,st),X+=6}o.addGroup(p,X,x),p+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const i=ts(s[e]);for(const n in i)t[n]=i[n]}return t}function cd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ws={clone:ts,merge:ze};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class bc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new I,rl=new Mt,al=new Mt;class qe extends bc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qn*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,rl,al),e.subVectors(al,rl)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const On=-90,Un=1;class ud extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new qe(On,Un,t,e);n.layers=this.layers,this.add(n);const r=new qe(On,Un,t,e);r.layers=this.layers,this.add(r);const a=new qe(On,Un,t,e);a.layers=this.layers,this.add(a);const o=new qe(On,Un,t,e);o.layers=this.layers,this.add(o);const l=new qe(On,Un,t,e);l.layers=this.layers,this.add(l);const c=new qe(On,Un,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ac extends We{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$n,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ac(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new it(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:Bi});r.uniforms.tEquirect.value=e;const a=new G(n,r),o=e.minFilter;return e.minFilter===xn&&(e.minFilter=Qe),new ud(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const $r=new I,pd=new I,md=new kt;class ji{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$r.subVectors(i,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($r),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||md.getNormalMatrix(t),n=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ln=new Cs,js=new I;class mo{constructor(t=new ji,e=new ji,i=new ji,n=new ji,r=new ji,a=new ji){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],T=n[13],w=n[14],y=n[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+a,u+h,m+g,y+T).normalize(),i[3].setComponents(l-a,u-h,m-g,y-T).normalize(),i[4].setComponents(l-o,u-d,m-v,y-w).normalize(),e===Fi)i[5].setComponents(l+o,u+d,m+v,y+w).normalize();else if(e===mr)i[5].setComponents(o,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ln)}intersectsSprite(t){return ln.center.set(0,0,0),ln.radius=.7071067811865476,ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(js.x=n.normal.x>0?t.max.x:t.min.x,js.y=n.normal.y>0?t.max.y:t.min.y,js.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class ri extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const T=f*u-a;for(let w=0;w<c;w++){const y=w*d-r;g.push(y,-T,0),v.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const w=T+c*f,y=T+c*(f+1),L=T+1+c*(f+1),P=T+1+c*f;p.push(w,y,P),p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.widthSegments,t.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:xd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:Td,aomap_pars_fragment:Ed,batching_pars_vertex:wd,batching_vertex:bd,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Bd,color_vertex:Gd,common:kd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Yd,colorspace_fragment:Kd,colorspace_pars_fragment:qd,envmap_fragment:$d,envmap_common_pars_fragment:Zd,envmap_pars_fragment:jd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:cu,envmap_vertex:Qd,fog_vertex:tu,fog_pars_vertex:eu,fog_fragment:iu,fog_pars_fragment:nu,gradientmap_pars_fragment:su,lightmap_pars_fragment:ru,lights_lambert_fragment:au,lights_lambert_pars_fragment:ou,lights_pars_begin:lu,lights_toon_fragment:hu,lights_toon_pars_fragment:du,lights_phong_fragment:uu,lights_phong_pars_fragment:fu,lights_physical_fragment:pu,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:vu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Su,map_fragment:Tu,map_pars_fragment:Eu,map_particle_fragment:wu,map_particle_pars_fragment:bu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Cu,morphcolor_vertex:Pu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Du,normal_fragment_begin:Ou,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Fu,normal_vertex:Bu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:ku,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Vu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:Yu,project_vertex:Ku,dithering_fragment:qu,dithering_pars_fragment:$u,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:tf,shadowmask_pars_fragment:ef,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:hf,transmission_fragment:df,transmission_pars_fragment:uf,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:_f,background_frag:vf,backgroundCube_vert:xf,backgroundCube_frag:Mf,cube_vert:yf,cube_frag:Sf,depth_vert:Tf,depth_frag:Ef,distanceRGBA_vert:wf,distanceRGBA_frag:bf,equirect_vert:Af,equirect_frag:Rf,linedashed_vert:Cf,linedashed_frag:Pf,meshbasic_vert:If,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:Of,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Bf,meshphong_vert:Gf,meshphong_frag:kf,meshphysical_vert:Hf,meshphysical_frag:zf,meshtoon_vert:Vf,meshtoon_frag:Wf,points_vert:Xf,points_frag:Yf,shadow_vert:Kf,shadow_frag:qf,sprite_vert:$f,sprite_frag:Zf},ct={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},yi={basic:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([ct.lights,ct.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};yi.physical={uniforms:ze([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Js={r:0,b:0,g:0},cn=new wi,jf=new ue;function Jf(s,t,e,i,n,r,a){const o=new Ut(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function v(T){let w=!1;const y=g(T);y===null?f(o,l):y&&y.isColor&&(f(y,1),w=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Sr)?(h===void 0&&(h=new G(new it(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ts(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),cn.copy(w.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(cn)),h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,(d!==y||u!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new G(new ri(2,2),new Ve({name:"BackgroundMaterial",uniforms:ts(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,w){T.getRGB(Js,wc(s)),i.buffers.color.setClear(Js.r,Js.g,Js.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),l=w,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:v,addToRenderList:m}}function Qf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(_,A,D,O,k){let Y=!1;const K=d(O,D,A);r!==K&&(r=K,c(r.object)),Y=p(_,O,D,k),Y&&g(_,O,D,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(_,A,D,O),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,A,D){const O=D.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let Y=k[A.id];Y===void 0&&(Y={},k[A.id]=Y);let K=Y[O];return K===void 0&&(K=u(l()),Y[O]=K),K}function u(_){const A=[],D=[],O=[];for(let k=0;k<e;k++)A[k]=0,D[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,A,D,O){const k=r.attributes,Y=A.attributes;let K=0;const J=D.getAttributes();for(const X in J)if(J[X].location>=0){const ut=k[X];let St=Y[X];if(St===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),ut===void 0||ut.attribute!==St||St&&ut.data!==St.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function g(_,A,D,O){const k={},Y=A.attributes;let K=0;const J=D.getAttributes();for(const X in J)if(J[X].location>=0){let ut=Y[X];ut===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const St={};St.attribute=ut,ut&&ut.data&&(St.data=ut.data),k[X]=St,K++}r.attributes=k,r.attributesNum=K,r.index=O}function v(){const _=r.newAttributes;for(let A=0,D=_.length;A<D;A++)_[A]=0}function m(_){f(_,0)}function f(_,A){const D=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;D[_]=1,O[_]===0&&(s.enableVertexAttribArray(_),O[_]=1),k[_]!==A&&(s.vertexAttribDivisor(_,A),k[_]=A)}function T(){const _=r.newAttributes,A=r.enabledAttributes;for(let D=0,O=A.length;D<O;D++)A[D]!==_[D]&&(s.disableVertexAttribArray(D),A[D]=0)}function w(_,A,D,O,k,Y,K){K===!0?s.vertexAttribIPointer(_,A,D,k,Y):s.vertexAttribPointer(_,A,D,O,k,Y)}function y(_,A,D,O){v();const k=O.attributes,Y=D.getAttributes(),K=A.defaultAttributeValues;for(const J in Y){const X=Y[J];if(X.location>=0){let ot=k[J];if(ot===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){const ut=ot.normalized,St=ot.itemSize,Ft=t.get(ot);if(Ft===void 0)continue;const te=Ft.buffer,$=Ft.type,st=Ft.bytesPerElement,yt=$===s.INT||$===s.UNSIGNED_INT||ot.gpuType===ao;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Ct=lt.stride,Lt=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)f(X.location+Ht,lt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)m(X.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Ht=0;Ht<X.locationSize;Ht++)w(X.location+Ht,St/X.locationSize,$,ut,Ct*st,(Lt+St/X.locationSize*Ht)*st,yt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)f(X.location+lt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let lt=0;lt<X.locationSize;lt++)w(X.location+lt,St/X.locationSize,$,ut,St*st,St/X.locationSize*lt*st,yt)}}else if(K!==void 0){const ut=K[J];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(X.location,ut);break;case 3:s.vertexAttrib3fv(X.location,ut);break;case 4:s.vertexAttrib4fv(X.location,ut);break;default:s.vertexAttrib1fv(X.location,ut)}}}}T()}function L(){R();for(const _ in i){const A=i[_];for(const D in A){const O=A[D];for(const k in O)h(O[k].object),delete O[k];delete A[D]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;const A=i[_.id];for(const D in A){const O=A[D];for(const k in O)h(O[k].object),delete O[k];delete A[D]}delete i[_.id]}function S(_){for(const A in i){const D=i[A];if(D[_.id]===void 0)continue;const O=D[_.id];for(const k in O)h(O[k].object),delete O[k];delete D[_.id]}}function R(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function tp(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ep(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(S){return!(S!==oi&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==zi&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ni&&!R)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function ip(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new ji,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,w=T*4;let y=f.clippingState||null;l.value=y,y=h(g,u,w,p);for(let L=0;L!==w;++L)y[L]=e[L];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==v;++w,y+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function np(s){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=$n:o===Ma&&(a.mapping=Zn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xa||o===Ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fd(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class go extends bc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wn=4,ol=[.125,.215,.35,.446,.526,.582],fn=20,Zr=new go,ll=new Ut;let jr=null,Jr=0,Qr=0,ta=!1;const dn=(1+Math.sqrt(5))/2,Nn=1/dn,cl=[new I(-dn,Nn,0),new I(dn,Nn,0),new I(-Nn,0,dn),new I(Nn,0,dn),new I(0,dn,-Nn),new I(0,dn,Nn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Jr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===Zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ti,format:oi,colorSpace:is,depthBuffer:!1},n=dl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(r)),this._blurMaterial=rp(r,t,e)}return n}_compileMaterial(t){const e=new G(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,i,n){const o=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ll),h.toneMapping=Qi,h.autoClear=!1;const p=new jt({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new G(new it,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(ll),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const w=this._cubeSize;Qs(n,T*w,f>2?w:0,w,w),h.setRenderTarget(n),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===$n||t.mapping===Zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new G(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Zr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cl[(n-r-1)%cl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new G(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fn;m>fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fn}`);const f=[];let T=0;for(let S=0;S<fn;++S){const R=S/v,x=Math.exp(-R*R/2);f.push(x),S===0?T+=x:S<m&&(T+=2*x)}for(let S=0;S<f.length;S++)f[S]=f[S]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const y=this._sizeLods[n],L=3*y*(n>w-Wn?n-w+Wn:0),P=4*(this._cubeSize-y);Qs(e,L,P,3*y,2*y),l.setRenderTarget(e),l.render(d,Zr)}}function sp(s){const t=[],e=[],i=[];let n=s;const r=s-Wn+1+ol.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Wn?l=ol[a-s+Wn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let P=0;P<p;P++){const S=P%3*2/3-1,R=P>2?0:-1,x=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];T.set(x,v*g*P),w.set(u,m*g*P);const _=[P,P,P,P,P,P];y.set(_,f*g*P)}const L=new we;L.setAttribute("position",new ti(T,v)),L.setAttribute("uv",new ti(w,m)),L.setAttribute("faceIndex",new ti(y,f)),t.push(L),n>Wn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function dl(s,t,e){const i=new li(s,t,e);return i.texture.mapping=Sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function rp(s,t,e){const i=new Float32Array(fn),n=new I(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ul(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function fl(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xa||l===Ma,h=l===$n||l===Zn;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new hl(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new hl(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function op(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function lp(s,t,e,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete n[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let w=0,y=T.length;w<y;w+=3){const L=T[w+0],P=T[w+1],S=T[w+2];u.push(L,P,P,S,S,L)}}else if(g!==void 0){const T=g.array;v=g.version;for(let w=0,y=T.length/3-1;w<y;w+=3){const L=w+0,P=w+1,S=w+2;u.push(L,P,P,S,S,L)}}else return;const m=new(xc(u)?Ec:Tc)(u,1);m.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cp(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(i,p,r,u*a),e.update(p,i,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,u*a,g),e.update(p,i,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(u,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];e.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function dp(s,t,e){const i=new WeakMap,n=new he;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let _=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let L=o.attributes.position.count*y,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const S=new Float32Array(L*P*4*d),R=new yc(S,L,P,d);R.type=Ni,R.needsUpdate=!0;const x=y*4;for(let A=0;A<d;A++){const D=f[A],O=T[A],k=w[A],Y=L*P*4*A;for(let K=0;K<D.count;K++){const J=K*x;g===!0&&(n.fromBufferAttribute(D,K),S[Y+J+0]=n.x,S[Y+J+1]=n.y,S[Y+J+2]=n.z,S[Y+J+3]=0),v===!0&&(n.fromBufferAttribute(O,K),S[Y+J+4]=n.x,S[Y+J+5]=n.y,S[Y+J+6]=n.z,S[Y+J+7]=0),m===!0&&(n.fromBufferAttribute(k,K),S[Y+J+8]=n.x,S[Y+J+9]=n.y,S[Y+J+10]=n.z,S[Y+J+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:R,size:new Mt(L,P)},i.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function up(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Cc extends We{constructor(t,e,i,n,r,a,o,l,c,h=Yn){if(h!==Yn&&h!==Jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yn&&(i=yn),i===void 0&&h===Jn&&(i=jn),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vi,this.minFilter=l!==void 0?l:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pc=new We,pl=new Cc(1,1),Ic=new yc,Lc=new Jh,Dc=new Ac,ml=[],gl=[],_l=new Float32Array(16),vl=new Float32Array(9),xl=new Float32Array(4);function ss(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=ml[n];if(r===void 0&&(r=new Float32Array(n),ml[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function wr(s,t){let e=gl[t];e===void 0&&(e=new Int32Array(t),gl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function fp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function _p(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;xl.set(i),s.uniformMatrix2fv(this.addr,!1,xl),Ie(e,i)}}function vp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;vl.set(i),s.uniformMatrix3fv(this.addr,!1,vl),Ie(e,i)}}function xp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;_l.set(i),s.uniformMatrix4fv(this.addr,!1,_l),Ie(e,i)}}function Mp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function Ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function Rp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(pl.compareFunction=vc,r=pl):r=Pc,e.setTexture2D(t||r,n)}function Cp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Lc,n)}function Pp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Dc,n)}function Ip(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ic,n)}function Lp(s){switch(s){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return Tp;case 5125:return Ep;case 36294:return wp;case 36295:return bp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Dp(s,t){s.uniform1fv(this.addr,t)}function Op(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function Up(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function Np(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function Fp(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bp(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gp(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function kp(s,t){s.uniform1iv(this.addr,t)}function Hp(s,t){s.uniform2iv(this.addr,t)}function zp(s,t){s.uniform3iv(this.addr,t)}function Vp(s,t){s.uniform4iv(this.addr,t)}function Wp(s,t){s.uniform1uiv(this.addr,t)}function Xp(s,t){s.uniform2uiv(this.addr,t)}function Yp(s,t){s.uniform3uiv(this.addr,t)}function Kp(s,t){s.uniform4uiv(this.addr,t)}function qp(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Pc,r[a])}function $p(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Lc,r[a])}function Zp(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Dc,r[a])}function jp(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ic,r[a])}function Jp(s){switch(s){case 5126:return Dp;case 35664:return Op;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Bp;case 35676:return Gp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return zp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return Yp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return jp}}class Qp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class tm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Ml(s,t){s.seq.push(t),s.map[t.id]=t}function im(s,t,e){const i=s.name,n=i.length;for(ea.lastIndex=0;;){const r=ea.exec(i),a=ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ml(e,c===void 0?new Qp(o,s,t):new tm(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new em(o),Ml(e,d)),e=d}}}class pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);im(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function yl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const nm=37297;let sm=0;function rm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Sl=new kt;function am(s){Zt._getMatrix(Sl,Zt.workingColorSpace,s);const t=`mat3( ${Sl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Tr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+rm(s.getShaderSource(t),a)}else return n}function om(s,t){const e=am(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lm(s,t){let e;switch(t){case ec:e="Linear";break;case ic:e="Reinhard";break;case nc:e="Cineon";break;case ro:e="ACESFilmic";break;case sc:e="AgX";break;case rc:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new I;function cm(){Zt.getLuminanceCoefficients(tr);const s=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function dm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function um(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ms(s){return s!==""}function El(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(s){return s.replace(fm,mm)}const pm=new Map;function mm(s,t){let e=Vt[t];if(e===void 0){const i=pm.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $a(e)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(s){return s.replace(gm,_m)}function _m(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Al(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $n:case Zn:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zn:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Tm(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vm(e),c=xm(e),h=Mm(e),d=ym(e),u=Sm(e),p=hm(e),g=dm(r),v=n.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),f.length>0&&(f+=`
`)):(m=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),f=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=$a(a),a=El(a,e),a=wl(a,e),o=$a(o),o=El(o,e),o=wl(o,e),a=bl(a),o=bl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+m+a,y=T+f+o,L=yl(n,n.VERTEX_SHADER,w),P=yl(n,n.FRAGMENT_SHADER,y);n.attachShader(v,L),n.attachShader(v,P),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function S(A){if(s.debug.checkShaderErrors){const D=n.getProgramInfoLog(v).trim(),O=n.getShaderInfoLog(L).trim(),k=n.getShaderInfoLog(P).trim();let Y=!0,K=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,L,P);else{const J=Tl(n,L,"vertex"),X=Tl(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+J+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(K=!1);K&&(A.diagnostics={runnable:Y,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:f}})}n.deleteShader(L),n.deleteShader(P),R=new pr(n,v),x=um(n,v)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let x;this.getAttributes=function(){return x===void 0&&S(this),x};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(v,nm)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=P,this}let Em=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bm(t),e.set(t,i)),i}}class bm{constructor(t){this.id=Em++,this.code=t,this.usedTimes=0}}function Am(s,t,e,i,n,r,a){const o=new po,l=new wm,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,_,A,D,O){const k=D.fog,Y=O.geometry,K=x.isMeshStandardMaterial?D.environment:null,J=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),X=J&&J.mapping===Sr?J.image.height:null,ot=g[x.type];x.precision!==null&&(p=n.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=ut!==void 0?ut.length:0;let Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let te,$,st,yt;if(ot){const se=yi[ot];te=se.vertexShader,$=se.fragmentShader}else te=x.vertexShader,$=x.fragmentShader,l.update(x),st=l.getVertexShaderID(x),yt=l.getFragmentShaderID(x);const lt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Ht=O.isBatchedMesh===!0,fe=!!x.map,Xt=!!x.matcap,ye=!!J,F=!!x.aoMap,ke=!!x.lightMap,Yt=!!x.bumpMap,Wt=!!x.normalMap,Rt=!!x.displacementMap,_e=!!x.emissiveMap,Pt=!!x.metalnessMap,C=!!x.roughnessMap,E=x.anisotropy>0,H=x.clearcoat>0,Q=x.dispersion>0,et=x.iridescence>0,j=x.sheen>0,bt=x.transmission>0,dt=E&&!!x.anisotropyMap,_t=H&&!!x.clearcoatMap,Jt=H&&!!x.clearcoatNormalMap,nt=H&&!!x.clearcoatRoughnessMap,vt=et&&!!x.iridescenceMap,It=et&&!!x.iridescenceThicknessMap,Dt=j&&!!x.sheenColorMap,xt=j&&!!x.sheenRoughnessMap,$t=!!x.specularMap,zt=!!x.specularColorMap,pe=!!x.specularIntensityMap,U=bt&&!!x.transmissionMap,ht=bt&&!!x.thicknessMap,q=!!x.gradientMap,tt=!!x.alphaMap,mt=x.alphaTest>0,ft=!!x.alphaHash,Bt=!!x.extensions;let Ee=Qi;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const Ne={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:$,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:is,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:Xt,envMap:ye,envMapMode:ye&&J.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:ke,bumpMap:Yt,normalMap:Wt,displacementMap:u&&Rt,emissiveMap:_e,normalMapObjectSpace:Wt&&x.normalMapType===Mh,normalMapTangentSpace:Wt&&x.normalMapType===_c,metalnessMap:Pt,roughnessMap:C,anisotropy:E,anisotropyMap:dt,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:Q,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:It,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:$t,specularColorMap:zt,specularIntensityMap:pe,transmission:bt,transmissionMap:U,thicknessMap:ht,gradientMap:q,opaque:x.transparent===!1&&x.blending===Xn&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:ft,combine:x.combine,mapUv:fe&&v(x.map.channel),aoMapUv:F&&v(x.aoMap.channel),lightMapUv:ke&&v(x.lightMap.channel),bumpMapUv:Yt&&v(x.bumpMap.channel),normalMapUv:Wt&&v(x.normalMap.channel),displacementMapUv:Rt&&v(x.displacementMap.channel),emissiveMapUv:_e&&v(x.emissiveMap.channel),metalnessMapUv:Pt&&v(x.metalnessMap.channel),roughnessMapUv:C&&v(x.roughnessMap.channel),anisotropyMapUv:dt&&v(x.anisotropyMap.channel),clearcoatMapUv:_t&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(x.sheenRoughnessMap.channel),specularMapUv:$t&&v(x.specularMap.channel),specularColorMapUv:zt&&v(x.specularColorMap.channel),specularIntensityMapUv:pe&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:ht&&v(x.thicknessMap.channel),alphaMapUv:tt&&v(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Wt||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(fe||tt),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ue,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Bt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&x.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)_.push(A),_.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(T(_,x),w(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function T(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function w(x,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const _=g[x.type];let A;if(_){const D=yi[_];A=ws.clone(D.uniforms)}else A=x.uniforms;return A}function L(x,_){let A;for(let D=0,O=h.length;D<O;D++){const k=h[D];if(k.cacheKey===_){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Tm(s,_,x,r),h.push(A)),A}function P(x){if(--x.usedTimes===0){const _=h.indexOf(x);h[_]=h[h.length-1],h.pop(),x.destroy()}}function S(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:S,programs:h,dispose:R}}function Rm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d,u,p,g,v,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function o(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Cm),i.length>1&&i.sort(u||Rl),n.length>1&&n.sort(u||Rl)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Pm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Cl,s.set(i,[a])):n>=r.length?(a=new Cl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Im(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ut};break;case"SpotLight":e={position:new I,direction:new I,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dm=0;function Om(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Um(s){const t=new Im,e=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const n=new I,r=new ue,a=new ue;function o(c){let h=0,d=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,w=0,y=0,L=0,P=0,S=0;c.sort(Om);for(let x=0,_=c.length;x<_;x++){const A=c[x],D=A.color,O=A.intensity,k=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*O,d+=D.g*O,u+=D.b*O;else if(A.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(A.sh.coefficients[K],O);S++}else if(A.isDirectionalLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,X=e.get(A);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=A.shadow.matrix,T++}i.directional[p]=K,p++}else if(A.isSpotLight){const K=t.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(D).multiplyScalar(O),K.distance=k,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,i.spot[v]=K;const J=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,J.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[v]=J.matrix,A.castShadow){const X=e.get(A);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=Y,y++}v++}else if(A.isRectAreaLight){const K=t.get(A);K.color.copy(D).multiplyScalar(O),K.halfWidth.set(A.width*.5,0,0),K.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=K,m++}else if(A.isPointLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),K.distance=A.distance,K.decay=A.decay,A.castShadow){const J=A.shadow,X=e.get(A);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=K,g++}else if(A.isHemisphereLight){const K=t.get(A);K.skyColor.copy(A.color).multiplyScalar(O),K.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[f]=K,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==T||R.numPointShadows!==w||R.numSpotShadows!==y||R.numSpotMaps!==L||R.numLightProbes!==S)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=S,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=T,R.numPointShadows=w,R.numSpotShadows=y,R.numSpotMaps=L,R.numLightProbes=S,i.version=Dm++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const w=c[f];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(w.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Pl(s){const t=new Um(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nm(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Pl(s),t.set(n,[o])):r>=a.length?(o=new Pl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Fm extends nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bm extends nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hm(s,t,e){let i=new mo;const n=new Mt,r=new Mt,a=new he,o=new Fm({depthPacking:xh}),l=new Bm,c={},h=e.maxTextureSize,d={[tn]:$e,[$e]:tn,[Ue]:Ue},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Gm,fragmentShader:km}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new G(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let f=this.type;this.render=function(P,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const x=s.getRenderTarget(),_=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Bi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=f!==Di&&this.type===Di,k=f===Di&&this.type!==Di;for(let Y=0,K=P.length;Y<K;Y++){const J=P[Y],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const ot=X.getFrameExtents();if(n.multiply(ot),r.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ot.x),n.x=r.x*ot.x,X.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ot.y),n.y=r.y*ot.y,X.mapSize.y=r.y)),X.map===null||O===!0||k===!0){const St=this.type!==Di?{minFilter:vi,magFilter:vi}:{};X.map!==null&&X.map.dispose(),X.map=new li(n.x,n.y,St),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const ut=X.getViewportCount();for(let St=0;St<ut;St++){const Ft=X.getViewport(St);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),D.viewport(a),X.updateMatrices(J,St),i=X.getFrustum(),y(S,R,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Di&&T(X,R),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(x,_,A)};function T(P,S){const R=t.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new li(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(S,null,R,u,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(S,null,R,p,v,null)}function w(P,S,R,x){let _=null;const A=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)_=A;else if(_=R.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=_.uuid,O=S.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let Y=k[O];Y===void 0&&(Y=_.clone(),k[O]=Y,S.addEventListener("dispose",L)),_=Y}if(_.visible=S.visible,_.wireframe=S.wireframe,x===Di?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:d[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=s.properties.get(_);D.light=R}return _}function y(P,S,R,x,_){if(P.visible===!1)return;if(P.layers.test(S.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Di)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const O=t.update(P),k=P.material;if(Array.isArray(k)){const Y=O.groups;for(let K=0,J=Y.length;K<J;K++){const X=Y[K],ot=k[X.materialIndex];if(ot&&ot.visible){const ut=w(P,ot,x,_);P.onBeforeShadow(s,P,S,R,O,ut,X),s.renderBufferDirect(R,null,O,ut,P,X),P.onAfterShadow(s,P,S,R,O,ut,X)}}}else if(k.visible){const Y=w(P,k,x,_);P.onBeforeShadow(s,P,S,R,O,Y,null),s.renderBufferDirect(R,null,O,Y,P,null),P.onAfterShadow(s,P,S,R,O,Y,null)}}const D=P.children;for(let O=0,k=D.length;O<k;O++)y(D[O],S,R,x,_)}function L(P){P.target.removeEventListener("dispose",L);for(const R in c){const x=c[R],_=P.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}const zm={[ua]:fa,[pa]:_a,[ma]:va,[qn]:ga,[fa]:ua,[_a]:pa,[va]:ma,[ga]:qn};function Vm(s,t){function e(){let U=!1;const ht=new he;let q=null;const tt=new he(0,0,0,0);return{setMask:function(mt){q!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){U=mt},setClear:function(mt,ft,Bt,Ee,Ne){Ne===!0&&(mt*=Ee,ft*=Ee,Bt*=Ee),ht.set(mt,ft,Bt,Ee),tt.equals(ht)===!1&&(s.clearColor(mt,ft,Bt,Ee),tt.copy(ht))},reset:function(){U=!1,q=null,tt.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,q=null,tt=null,mt=null;return{setReversed:function(ft){if(ht!==ft){const Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=mt;mt=null,this.setClear(Ee)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?lt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ft){q!==ft&&!U&&(s.depthMask(ft),q=ft)},setFunc:function(ft){if(ht&&(ft=zm[ft]),tt!==ft){switch(ft){case ua:s.depthFunc(s.NEVER);break;case fa:s.depthFunc(s.ALWAYS);break;case pa:s.depthFunc(s.LESS);break;case qn:s.depthFunc(s.LEQUAL);break;case ma:s.depthFunc(s.EQUAL);break;case ga:s.depthFunc(s.GEQUAL);break;case _a:s.depthFunc(s.GREATER);break;case va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ft}},setLocked:function(ft){U=ft},setClear:function(ft){mt!==ft&&(ht&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){U=!1,q=null,tt=null,mt=null,ht=!1}}}function n(){let U=!1,ht=null,q=null,tt=null,mt=null,ft=null,Bt=null,Ee=null,Ne=null;return{setTest:function(se){U||(se?lt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(se){ht!==se&&!U&&(s.stencilMask(se),ht=se)},setFunc:function(se,ci,bi){(q!==se||tt!==ci||mt!==bi)&&(s.stencilFunc(se,ci,bi),q=se,tt=ci,mt=bi)},setOp:function(se,ci,bi){(ft!==se||Bt!==ci||Ee!==bi)&&(s.stencilOp(se,ci,bi),ft=se,Bt=ci,Ee=bi)},setLocked:function(se){U=se},setClear:function(se){Ne!==se&&(s.clearStencil(se),Ne=se)},reset:function(){U=!1,ht=null,q=null,tt=null,mt=null,ft=null,Bt=null,Ee=null,Ne=null}}}const r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,w=null,y=null,L=null,P=null,S=new Ut(0,0,0),R=0,x=!1,_=null,A=null,D=null,O=null,k=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=J>=2);let ot=null,ut={};const St=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),te=new he().fromArray(St),$=new he().fromArray(Ft);function st(U,ht,q,tt){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(U,ft),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<q;Bt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ht+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const yt={};yt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc(qn),Yt(!1),Wt(Uo),lt(s.CULL_FACE),F(Bi);function lt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Ct(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Lt(U,ht){return d[U]!==ht?(s.bindFramebuffer(U,ht),d[U]=ht,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ht(U,ht){let q=p,tt=!1;if(U){q=u.get(ht),q===void 0&&(q=[],u.set(ht,q));const mt=U.textures;if(q.length!==mt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Bt=mt.length;ft<Bt;ft++)q[ft]=s.COLOR_ATTACHMENT0+ft;q.length=mt.length,tt=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,tt=!0);tt&&s.drawBuffers(q)}function fe(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Xt={[un]:s.FUNC_ADD,[jc]:s.FUNC_SUBTRACT,[Jc]:s.FUNC_REVERSE_SUBTRACT};Xt[Qc]=s.MIN,Xt[th]=s.MAX;const ye={[eh]:s.ZERO,[ih]:s.ONE,[nh]:s.SRC_COLOR,[ha]:s.SRC_ALPHA,[ch]:s.SRC_ALPHA_SATURATE,[oh]:s.DST_COLOR,[rh]:s.DST_ALPHA,[sh]:s.ONE_MINUS_SRC_COLOR,[da]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA,[hh]:s.CONSTANT_COLOR,[dh]:s.ONE_MINUS_CONSTANT_COLOR,[uh]:s.CONSTANT_ALPHA,[fh]:s.ONE_MINUS_CONSTANT_ALPHA};function F(U,ht,q,tt,mt,ft,Bt,Ee,Ne,se){if(U===Bi){v===!0&&(Ct(s.BLEND),v=!1);return}if(v===!1&&(lt(s.BLEND),v=!0),U!==Zc){if(U!==m||se!==x){if((f!==un||y!==un)&&(s.blendEquation(s.FUNC_ADD),f=un,y=un),se)switch(U){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFunc(s.ONE,s.ONE);break;case No:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case No:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,w=null,L=null,P=null,S.set(0,0,0),R=0,m=U,x=se}return}mt=mt||ht,ft=ft||q,Bt=Bt||tt,(ht!==f||mt!==y)&&(s.blendEquationSeparate(Xt[ht],Xt[mt]),f=ht,y=mt),(q!==T||tt!==w||ft!==L||Bt!==P)&&(s.blendFuncSeparate(ye[q],ye[tt],ye[ft],ye[Bt]),T=q,w=tt,L=ft,P=Bt),(Ee.equals(S)===!1||Ne!==R)&&(s.blendColor(Ee.r,Ee.g,Ee.b,Ne),S.copy(Ee),R=Ne),m=U,x=!1}function ke(U,ht){U.side===Ue?Ct(s.CULL_FACE):lt(s.CULL_FACE);let q=U.side===$e;ht&&(q=!q),Yt(q),U.blending===Xn&&U.transparent===!1?F(Bi):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(U){_!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),_=U)}function Wt(U){U!==Yc?(lt(s.CULL_FACE),U!==A&&(U===Uo?s.cullFace(s.BACK):U===Kc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),A=U}function Rt(U){U!==D&&(K&&s.lineWidth(U),D=U)}function _e(U,ht,q){U?(lt(s.POLYGON_OFFSET_FILL),(O!==ht||k!==q)&&(s.polygonOffset(ht,q),O=ht,k=q)):Ct(s.POLYGON_OFFSET_FILL)}function Pt(U){U?lt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+Y-1),ot!==U&&(s.activeTexture(U),ot=U)}function E(U,ht,q){q===void 0&&(ot===null?q=s.TEXTURE0+Y-1:q=ot);let tt=ut[q];tt===void 0&&(tt={type:void 0,texture:void 0},ut[q]=tt),(tt.type!==U||tt.texture!==ht)&&(ot!==q&&(s.activeTexture(q),ot=q),s.bindTexture(U,ht||yt[U]),tt.type=U,tt.texture=ht)}function H(){const U=ut[ot];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){te.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function xt(U){$.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function $t(U,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let tt=q.get(U);tt===void 0&&(tt=s.getUniformBlockIndex(ht,U.name),q.set(U,tt))}function zt(U,ht){const tt=c.get(ht).get(U);l.get(ht)!==tt&&(s.uniformBlockBinding(ht,tt,U.__bindingPointIndex),l.set(ht,tt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,ut={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,w=null,y=null,L=null,P=null,S=new Ut(0,0,0),R=0,x=!1,_=null,A=null,D=null,O=null,k=null,te.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:Lt,drawBuffers:Ht,useProgram:fe,setBlending:F,setMaterial:ke,setFlipSided:Yt,setCullFace:Wt,setLineWidth:Rt,setPolygonOffset:_e,setScissorTest:Pt,activeTexture:C,bindTexture:E,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:vt,texImage3D:It,updateUBOMapping:$t,uniformBlockBinding:zt,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Dt,viewport:xt,reset:pe}}function Il(s,t,e,i){const n=Wm(i);switch(e){case hc:return s*t;case uc:return s*t;case fc:return s*t*2;case pc:return s*t/n.components*n.byteLength;case co:return s*t/n.components*n.byteLength;case mc:return s*t*2/n.components*n.byteLength;case ho:return s*t*2/n.components*n.byteLength;case dc:return s*t*3/n.components*n.byteLength;case oi:return s*t*4/n.components*n.byteLength;case uo:return s*t*4/n.components*n.byteLength;case cr:case hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:case wa:return Math.max(s,16)*Math.max(t,8)/4;case Sa:case Ea:return Math.max(s,8)*Math.max(t,8)/2;case ba:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fr:case Va:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gc:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ya:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(s){switch(s){case zi:case oc:return{byteLength:1,components:1};case Es:case lc:case Ti:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case yn:case ao:case Ni:return{byteLength:4,components:1};case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xm(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):gr("canvas")}function v(C,E,H){let Q=1;const et=Pt(C);if((et.width>H||et.height>H)&&(Q=H/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Q*et.width),bt=Math.floor(Q*et.height);d===void 0&&(d=g(j,bt));const dt=E?g(j,bt):d;return dt.width=j,dt.height=bt,dt.getContext("2d").drawImage(C,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+bt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,E,H,Q,et=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=E;if(E===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),E===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),E===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),E===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),E===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),E===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),E===s.RGBA){const bt=et?Tr:Zt.getTransfer(Q);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=bt===ae?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(C,E){let H;return C?E===null||E===yn||E===jn?H=s.DEPTH24_STENCIL8:E===Ni?H=s.DEPTH32F_STENCIL8:E===Es&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===yn||E===jn?H=s.DEPTH_COMPONENT24:E===Ni?H=s.DEPTH_COMPONENT32F:E===Es&&(H=s.DEPTH_COMPONENT16),H}function L(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==vi&&C.minFilter!==Qe?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){const E=C.target;E.removeEventListener("dispose",P),R(E),E.isVideoTexture&&h.delete(E)}function S(C){const E=C.target;E.removeEventListener("dispose",S),_(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,Q=u.get(H);if(Q){const et=Q[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&x(C),Object.keys(Q).length===0&&u.delete(H)}i.remove(C)}function x(C){const E=i.get(C);s.deleteTexture(E.__webglTexture);const H=C.source,Q=u.get(H);delete Q[E.__cacheKey],a.memory.textures--}function _(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let et=0;et<E.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(E.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Q]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let Q=0,et=H.length;Q<et;Q++){const j=i.get(H[Q]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(C)}let A=0;function D(){A=0}function O(){const C=A;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),A+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const H=i.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,C,E);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function K(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function J(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,E);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function X(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){st(H,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const ot={[_n]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[ya]:s.MIRRORED_REPEAT},ut={[vi]:s.NEAREST,[_h]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},St={[yh]:s.NEVER,[Ah]:s.ALWAYS,[Sh]:s.LESS,[vc]:s.LEQUAL,[Th]:s.EQUAL,[bh]:s.GEQUAL,[Eh]:s.GREATER,[wh]:s.NOTEQUAL};function Ft(C,E){if(E.type===Ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qe||E.magFilter===Cr||E.magFilter===Os||E.magFilter===xn||E.minFilter===Qe||E.minFilter===Cr||E.minFilter===Os||E.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ot[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ot[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ot[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ut[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Os&&E.minFilter!==xn||E.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function te(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const Q=E.source;let et=u.get(Q);et===void 0&&(et={},u.set(Q,et));const j=k(E);if(j!==C.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[j].usedTimes++;const bt=et[C.__cacheKey];bt!==void 0&&(et[C.__cacheKey].usedTimes--,bt.usedTimes===0&&x(E)),C.__cacheKey=j,C.__webglTexture=et[j].texture}return H}function $(C,E,H){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);const et=te(C,E),j=E.source;e.bindTexture(Q,C.__webglTexture,s.TEXTURE0+H);const bt=i.get(j);if(j.version!==bt.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const dt=Zt.getPrimaries(Zt.workingColorSpace),_t=E.colorSpace===Ji?null:Zt.getPrimaries(E.colorSpace),Jt=E.colorSpace===Ji||dt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=v(E.image,!1,n.maxTextureSize);nt=_e(E,nt);const vt=r.convert(E.format,E.colorSpace),It=r.convert(E.type);let Dt=w(E.internalFormat,vt,It,E.colorSpace,E.isVideoTexture);Ft(Q,E);let xt;const $t=E.mipmaps,zt=E.isVideoTexture!==!0,pe=bt.__version===void 0||et===!0,U=j.dataReady,ht=L(E,nt);if(E.isDepthTexture)Dt=y(E.format===Jn,E.type),pe&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,It,null));else if(E.isDataTexture)if($t.length>0){zt&&pe&&e.texStorage2D(s.TEXTURE_2D,ht,Dt,$t[0].width,$t[0].height);for(let q=0,tt=$t.length;q<tt;q++)xt=$t[q],zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(s.TEXTURE_2D,q,Dt,xt.width,xt.height,0,vt,It,xt.data);E.generateMipmaps=!1}else zt?(pe&&e.texStorage2D(s.TEXTURE_2D,ht,Dt,nt.width,nt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,It,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,It,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Dt,$t[0].width,$t[0].height,nt.depth);for(let q=0,tt=$t.length;q<tt;q++)if(xt=$t[q],E.format!==oi)if(vt!==null)if(zt){if(U)if(E.layerUpdates.size>0){const mt=Il(xt.width,xt.height,E.format,E.type);for(const ft of E.layerUpdates){const Bt=xt.data.subarray(ft*mt/xt.data.BYTES_PER_ELEMENT,(ft+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ft,xt.width,xt.height,1,vt,Bt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,nt.depth,vt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Dt,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,nt.depth,vt,It,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Dt,xt.width,xt.height,nt.depth,0,vt,It,xt.data)}else{zt&&pe&&e.texStorage2D(s.TEXTURE_2D,ht,Dt,$t[0].width,$t[0].height);for(let q=0,tt=$t.length;q<tt;q++)xt=$t[q],E.format!==oi?vt!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(s.TEXTURE_2D,q,Dt,xt.width,xt.height,0,vt,It,xt.data)}else if(E.isDataArrayTexture)if(zt){if(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Dt,nt.width,nt.height,nt.depth),U)if(E.layerUpdates.size>0){const q=Il(nt.width,nt.height,E.format,E.type);for(const tt of E.layerUpdates){const mt=nt.data.subarray(tt*q/nt.data.BYTES_PER_ELEMENT,(tt+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,vt,It,mt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,It,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,vt,It,nt.data);else if(E.isData3DTexture)zt?(pe&&e.texStorage3D(s.TEXTURE_3D,ht,Dt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,It,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,vt,It,nt.data);else if(E.isFramebufferTexture){if(pe)if(zt)e.texStorage2D(s.TEXTURE_2D,ht,Dt,nt.width,nt.height);else{let q=nt.width,tt=nt.height;for(let mt=0;mt<ht;mt++)e.texImage2D(s.TEXTURE_2D,mt,Dt,q,tt,0,vt,It,null),q>>=1,tt>>=1}}else if($t.length>0){if(zt&&pe){const q=Pt($t[0]);e.texStorage2D(s.TEXTURE_2D,ht,Dt,q.width,q.height)}for(let q=0,tt=$t.length;q<tt;q++)xt=$t[q],zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,vt,It,xt):e.texImage2D(s.TEXTURE_2D,q,Dt,vt,It,xt);E.generateMipmaps=!1}else if(zt){if(pe){const q=Pt(nt);e.texStorage2D(s.TEXTURE_2D,ht,Dt,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,It,nt)}else e.texImage2D(s.TEXTURE_2D,0,Dt,vt,It,nt);m(E)&&f(Q),bt.__version=j.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function st(C,E,H){if(E.image.length!==6)return;const Q=te(C,E),et=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const j=i.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);const bt=Zt.getPrimaries(Zt.workingColorSpace),dt=E.colorSpace===Ji?null:Zt.getPrimaries(E.colorSpace),_t=E.colorSpace===Ji||bt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Jt&&!nt?vt[tt]=v(E.image[tt],!0,n.maxCubemapSize):vt[tt]=nt?E.image[tt].image:E.image[tt],vt[tt]=_e(E,vt[tt]);const It=vt[0],Dt=r.convert(E.format,E.colorSpace),xt=r.convert(E.type),$t=w(E.internalFormat,Dt,xt,E.colorSpace),zt=E.isVideoTexture!==!0,pe=j.__version===void 0||Q===!0,U=et.dataReady;let ht=L(E,It);Ft(s.TEXTURE_CUBE_MAP,E);let q;if(Jt){zt&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,It.width,It.height);for(let tt=0;tt<6;tt++){q=vt[tt].mipmaps;for(let mt=0;mt<q.length;mt++){const ft=q[mt];E.format!==oi?Dt!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Dt,xt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,$t,ft.width,ft.height,0,Dt,xt,ft.data)}}}else{if(q=E.mipmaps,zt&&pe){q.length>0&&ht++;const tt=Pt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Dt,xt,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,vt[tt].width,vt[tt].height,0,Dt,xt,vt[tt].data);for(let mt=0;mt<q.length;mt++){const Bt=q[mt].image[tt].image;zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Bt.width,Bt.height,Dt,xt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,$t,Bt.width,Bt.height,0,Dt,xt,Bt.data)}}else{zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,xt,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Dt,xt,vt[tt]);for(let mt=0;mt<q.length;mt++){const ft=q[mt];zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Dt,xt,ft.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,$t,Dt,xt,ft.image[tt])}}}m(E)&&f(s.TEXTURE_CUBE_MAP),j.__version=et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function yt(C,E,H,Q,et,j){const bt=r.convert(H.format,H.colorSpace),dt=r.convert(H.type),_t=w(H.internalFormat,bt,dt,H.colorSpace),Jt=i.get(E),nt=i.get(H);if(nt.__renderTarget=E,!Jt.__hasExternalTextures){const vt=Math.max(1,E.width>>j),It=Math.max(1,E.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,_t,vt,It,E.depth,0,bt,dt,null):e.texImage2D(et,j,_t,vt,It,0,bt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,et,nt.__webglTexture,0,Yt(E)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,et,nt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(C,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=y(E.stencilBuffer,et),bt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Yt(E);Wt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,j,E.width,E.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,j,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{const Q=E.textures;for(let et=0;et<Q.length;et++){const j=Q[et],bt=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),_t=w(j.internalFormat,bt,dt,j.colorSpace),Jt=Yt(E);H&&Wt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,_t,E.width,E.height):Wt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,_t,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,_t,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const et=Q.__webglTexture,j=Yt(E);if(E.depthTexture.format===Yn)Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(E.depthTexture.format===Jn)Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=s.createRenderbuffer(),lt(E.__webglDepthbuffer[Q],C,!1);else{const et=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),lt(E.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(C,E,H){const Q=i.get(C);E!==void 0&&yt(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Lt(C)}function fe(C){const E=C.texture,H=i.get(C),Q=i.get(E);C.addEventListener("dispose",S);const et=C.textures,j=C.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let _t=0;_t<E.mipmaps.length;_t++)H.__webglFramebuffer[dt][_t]=s.createFramebuffer()}else H.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)H.__webglFramebuffer[dt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(bt)for(let dt=0,_t=et.length;dt<_t;dt++){const Jt=i.get(et[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Wt(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const _t=et[dt];H.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const Jt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),vt=w(_t.internalFormat,Jt,nt,_t.colorSpace,C.isXRRenderTarget===!0),It=Yt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,vt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)yt(H.__webglFramebuffer[dt][_t],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else yt(H.__webglFramebuffer[dt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(E)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,_t=et.length;dt<_t;dt++){const Jt=et[dt],nt=i.get(Jt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Ft(s.TEXTURE_2D,Jt),yt(H.__webglFramebuffer,C,Jt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Ft(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)yt(H.__webglFramebuffer[_t],C,E,s.COLOR_ATTACHMENT0,dt,_t);else yt(H.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,dt,0);m(E)&&f(dt),e.unbindTexture()}C.depthBuffer&&Lt(C)}function Xt(C){const E=C.textures;for(let H=0,Q=E.length;H<Q;H++){const et=E[H];if(m(et)){const j=T(C),bt=i.get(et).__webglTexture;e.bindTexture(j,bt),f(j),e.unbindTexture()}}}const ye=[],F=[];function ke(C){if(C.samples>0){if(Wt(C)===!1){const E=C.textures,H=C.width,Q=C.height;let et=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(C),dt=E.length>1;if(dt)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Jt=i.get(E[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,H,Q,0,0,H,Q,et,s.NEAREST),l===!0&&(ye.length=0,F.length=0,ye.push(s.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ye.push(j),F.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Jt=i.get(E[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Yt(C){return Math.min(n.maxSamples,C.samples)}function Wt(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function _e(C,E){const H=C.colorSpace,Q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==is&&H!==Ji&&(Zt.getTransfer(H)===ae?(Q!==oi||et!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Wt}function Ym(s,t){function e(i,n=Ji){let r;const a=Zt.getTransfer(n);if(i===zi)return s.UNSIGNED_BYTE;if(i===oo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===oc)return s.BYTE;if(i===lc)return s.SHORT;if(i===Es)return s.UNSIGNED_SHORT;if(i===ao)return s.INT;if(i===yn)return s.UNSIGNED_INT;if(i===Ni)return s.FLOAT;if(i===Ti)return s.HALF_FLOAT;if(i===hc)return s.ALPHA;if(i===dc)return s.RGB;if(i===oi)return s.RGBA;if(i===uc)return s.LUMINANCE;if(i===fc)return s.LUMINANCE_ALPHA;if(i===Yn)return s.DEPTH_COMPONENT;if(i===Jn)return s.DEPTH_STENCIL;if(i===pc)return s.RED;if(i===co)return s.RED_INTEGER;if(i===mc)return s.RG;if(i===ho)return s.RG_INTEGER;if(i===uo)return s.RGBA_INTEGER;if(i===cr||i===hr||i===dr||i===ur)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ta||i===Ea||i===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ba||i===Aa||i===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ba||i===Aa)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ca||i===Pa||i===Ia||i===La||i===Da||i===Oa||i===Ua||i===Na||i===Fa||i===Ba||i===Ga||i===ka||i===Ha||i===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ha)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fr||i===Va||i===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fr)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gc||i===Xa||i===Ya||i===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Km extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new We,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ve({vertexShader:$m,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends ns{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new jm,m=e.getContextAttributes();let f=null,T=null;const w=[],y=[],L=new Mt;let P=null;const S=new qe;S.viewport=new he;const R=new qe;R.viewport=new he;const x=[S,R],_=new Km;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=w[$];return st===void 0&&(st=new ia,w[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=w[$];return st===void 0&&(st=new ia,w[$]=st),st.getGripSpace()},this.getHand=function($){let st=w[$];return st===void 0&&(st=new ia,w[$]=st),st.getHandSpace()};function O($){const st=y.indexOf($.inputSource);if(st===-1)return;const yt=w[st];yt!==void 0&&(yt.update($.inputSource,$.frame,c||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",Y);for(let $=0;$<w.length;$++){const st=y[$];st!==null&&(y[$]=null,w[$].disconnect(st))}A=null,D=null,v.reset(),t.setRenderTarget(f),p=null,u=null,d=null,n=null,T=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",k),n.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),n.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,st),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new li(p.framebufferWidth,p.framebufferHeight,{format:oi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Jn:Yn,yt=m.stencil?jn:yn);const Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Ct),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new li(u.textureWidth,u.textureHeight,{format:oi,type:zi,depthTexture:new Cc(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let st=0;st<$.removed.length;st++){const yt=$.removed[st],lt=y.indexOf(yt);lt>=0&&(y[lt]=null,w[lt].disconnect(yt))}for(let st=0;st<$.added.length;st++){const yt=$.added[st];let lt=y.indexOf(yt);if(lt===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=y.length){y.push(yt),lt=Lt;break}else if(y[Lt]===null){y[Lt]=yt,lt=Lt;break}if(lt===-1)break}const Ct=w[lt];Ct&&Ct.connect(yt)}}const K=new I,J=new I;function X($,st,yt){K.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const lt=K.distanceTo(J),Ct=st.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),fe=Ct[14]/(Ct[10]+1),Xt=(Ct[9]+1)/Ct[5],ye=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],ke=(Lt[8]+1)/Lt[0],Yt=Ht*F,Wt=Ht*ke,Rt=lt/(-F+ke),_e=Rt*-F;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(Rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Pt=Ht+Rt,C=fe+Rt,E=Yt-_e,H=Wt+(lt-_e),Q=Xt*fe/C*Pt,et=ye*fe/C*Pt;$.projectionMatrix.makePerspective(E,H,Q,et,Pt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let st=$.near,yt=$.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(yt=v.depthFar)),_.near=R.near=S.near=st,_.far=R.far=S.far=yt,(A!==_.near||D!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,D=_.far),S.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,_.layers.mask=S.layers.mask|R.layers.mask;const lt=$.parent,Ct=_.cameras;ot(_,lt);for(let Lt=0;Lt<Ct.length;Lt++)ot(Ct[Lt],lt);Ct.length===2?X(_,S,R):_.projectionMatrix.copy(S.projectionMatrix),ut($,_,lt)};function ut($,st,yt){yt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qn*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let St=null;function Ft($,st){if(h=st.getViewerPose(c||a),g=st,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let lt=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,lt=!0);for(let Lt=0;Lt<yt.length;Lt++){const Ht=yt[Lt];let fe=null;if(p!==null)fe=p.getViewport(Ht);else{const ye=d.getViewSubImage(u,Ht);fe=ye.viewport,Lt===0&&(t.setRenderTargetTextures(T,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(T))}let Xt=x[Lt];Xt===void 0&&(Xt=new qe,Xt.layers.enable(Lt),Xt.viewport=new he,x[Lt]=Xt),Xt.matrix.fromArray(Ht.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ht.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(fe.x,fe.y,fe.width,fe.height),Lt===0&&(_.matrix.copy(Xt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),lt===!0&&_.cameras.push(Xt)}const Ct=n.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Lt=d.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,n.renderState)}}for(let yt=0;yt<w.length;yt++){const lt=y[yt],Ct=w[yt];lt!==null&&Ct!==void 0&&Ct.update(lt,st,c||a)}St&&St($,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const te=new Rc;te.setAnimationLoop(Ft),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const hn=new wi,Qm=new ue;function t0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,wc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,T,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===$e&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===$e&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),w=T.envMap,y=T.envMapRotation;w&&(m.envMap.value=w,hn.copy(y),hn.x*=-1,hn.y*=-1,hn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(hn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$e&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function e0(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const y=w.program;i.uniformBlockBinding(T,y)}function c(T,w){let y=n[T.id];y===void 0&&(g(T),y=h(T),n[T.id]=y,T.addEventListener("dispose",m));const L=w.program;i.updateUBOMapping(T,L);const P=t.render.frame;r[T.id]!==P&&(u(T),r[T.id]=P)}function h(T){const w=d();T.__bindingPointIndex=w;const y=s.createBuffer(),L=T.__size,P=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,y),y}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const w=n[T.id],y=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let P=0,S=y.length;P<S;P++){const R=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,_=R.length;x<_;x++){const A=R[x];if(p(A,P,x,L)===!0){const D=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let Y=0;Y<O.length;Y++){const K=O[Y],J=v(K);typeof K=="number"||typeof K=="boolean"?(A.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,D+k,A.__data)):K.isMatrix3?(A.__data[0]=K.elements[0],A.__data[1]=K.elements[1],A.__data[2]=K.elements[2],A.__data[3]=0,A.__data[4]=K.elements[3],A.__data[5]=K.elements[4],A.__data[6]=K.elements[5],A.__data[7]=0,A.__data[8]=K.elements[6],A.__data[9]=K.elements[7],A.__data[10]=K.elements[8],A.__data[11]=0):(K.toArray(A.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,w,y,L){const P=T.value,S=w+"_"+y;if(L[S]===void 0)return typeof P=="number"||typeof P=="boolean"?L[S]=P:L[S]=P.clone(),!0;{const R=L[S];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return L[S]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function g(T){const w=T.uniforms;let y=0;const L=16;for(let S=0,R=w.length;S<R;S++){const x=Array.isArray(w[S])?w[S]:[w[S]];for(let _=0,A=x.length;_<A;_++){const D=x[_],O=Array.isArray(D.value)?D.value:[D.value];for(let k=0,Y=O.length;k<Y;k++){const K=O[k],J=v(K),X=y%L,ot=X%J.boundary,ut=X+ot;y+=ot,ut!==0&&L-ut<J.storage&&(y+=L-ut),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=J.storage}}}const P=y%L;return P>0&&(y+=L-P),T.__size=y,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function f(){for(const T in n)s.deleteBuffer(n[T]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class i0{constructor(t={}){const{canvas:e=Wh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=Qi,this.toneMappingExposure=1;const y=this;let L=!1,P=0,S=0,R=null,x=-1,_=null;const A=new he,D=new he;let O=null;const k=new Ut(0);let Y=0,K=e.width,J=e.height,X=1,ot=null,ut=null;const St=new he(0,0,K,J),Ft=new he(0,0,K,J);let te=!1;const $=new mo;let st=!1,yt=!1;const lt=new ue,Ct=new ue,Lt=new I,Ht=new he,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ye(){return R===null?X:1}let F=i;function ke(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){const N="webgl2";if(F=ke(N,b),F===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,Wt,Rt,_e,Pt,C,E,H,Q,et,j,bt,dt,_t,Jt,nt,vt,It,Dt,xt,$t,zt,pe,U;function ht(){Yt=new op(F),Yt.init(),zt=new Ym(F,Yt),Wt=new ep(F,Yt,t,zt),Rt=new Vm(F,Yt),Wt.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),_e=new hp(F),Pt=new Rm,C=new Xm(F,Yt,Rt,Pt,Wt,zt,_e),E=new np(y),H=new ap(y),Q=new gd(F),pe=new Qf(F,Q),et=new lp(F,Q,_e,pe),j=new up(F,et,Q,_e),Dt=new dp(F,Wt,C),nt=new ip(Pt),bt=new Am(y,E,H,Yt,Wt,pe,nt),dt=new t0(y,Pt),_t=new Pm,Jt=new Nm(Yt),It=new Jf(y,E,H,Rt,j,p,l),vt=new Hm(y,j,Wt),U=new e0(F,_e,Wt,Rt),xt=new tp(F,Yt,_e),$t=new cp(F,Yt,_e),_e.programs=bt.programs,y.capabilities=Wt,y.extensions=Yt,y.properties=Pt,y.renderLists=_t,y.shadowMap=vt,y.state=Rt,y.info=_e}ht();const q=new Jm(y,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(K,J,!1))},this.getSize=function(b){return b.set(K,J)},this.setSize=function(b,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,J=N,e.width=Math.floor(b*X),e.height=Math.floor(N*X),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(K*X,J*X).floor()},this.setDrawingBufferSize=function(b,N,V){K=b,J=N,X=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,N,V,W){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,N,V,W),Rt.viewport(A.copy(St).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,N,V,W){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,N,V,W),Rt.scissor(D.copy(Ft).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){Rt.setScissorTest(te=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,N=!0,V=!0){let W=0;if(b){let B=!1;if(R!==null){const rt=R.texture.format;B=rt===uo||rt===ho||rt===co}if(B){const rt=R.texture.type,pt=rt===zi||rt===yn||rt===Es||rt===jn||rt===oo||rt===lo,Tt=It.getClearColor(),Et=It.getClearAlpha(),Ot=Tt.r,Gt=Tt.g,wt=Tt.b;pt?(g[0]=Ot,g[1]=Gt,g[2]=wt,g[3]=Et,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ot,v[1]=Gt,v[2]=wt,v[3]=Et,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),V&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Jt.dispose(),Pt.dispose(),E.dispose(),H.dispose(),j.dispose(),pe.dispose(),U.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ao),q.removeEventListener("sessionend",Ro),sn.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=_e.autoReset,N=vt.enabled,V=vt.autoUpdate,W=vt.needsUpdate,B=vt.type;ht(),_e.autoReset=b,vt.enabled=N,vt.autoUpdate=V,vt.needsUpdate=W,vt.type=B}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Bt(b){const N=b.target;N.removeEventListener("dispose",Bt),Ee(N)}function Ee(b){Ne(b),Pt.remove(b)}function Ne(b){const N=Pt.get(b).programs;N!==void 0&&(N.forEach(function(V){bt.releaseProgram(V)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,W,B,rt){N===null&&(N=fe);const pt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=Hc(b,N,V,W,B);Rt.setMaterial(W,pt);let Et=V.index,Ot=1;if(W.wireframe===!0){if(Et=et.getWireframeAttribute(V),Et===void 0)return;Ot=2}const Gt=V.drawRange,wt=V.attributes.position;let Qt=Gt.start*Ot,me=(Gt.start+Gt.count)*Ot;rt!==null&&(Qt=Math.max(Qt,rt.start*Ot),me=Math.min(me,(rt.start+rt.count)*Ot)),Et!==null?(Qt=Math.max(Qt,0),me=Math.min(me,Et.count)):wt!=null&&(Qt=Math.max(Qt,0),me=Math.min(me,wt.count));const ve=me-Qt;if(ve<0||ve===1/0)return;pe.setup(B,W,Tt,V,Et);let Xe,ee=xt;if(Et!==null&&(Xe=Q.get(Et),ee=$t,ee.setIndex(Xe)),B.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*ye()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(B.isLine){let At=W.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*ye()),B.isLineSegments?ee.setMode(F.LINES):B.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else B.isPoints?ee.setMode(F.POINTS):B.isSprite&&ee.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ee.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ee.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,Ai=B._multiDrawCounts,ie=B._multiDrawCount,hi=Et?Q.get(Et).bytesPerElement:1,Sn=Pt.get(W).currentProgram.getUniforms();for(let Ze=0;Ze<ie;Ze++)Sn.setValue(F,"_gl_DrawID",Ze),ee.render(At[Ze]/hi,Ai[Ze])}else if(B.isInstancedMesh)ee.renderInstances(Qt,ve,B.count);else if(V.isInstancedBufferGeometry){const At=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ai=Math.min(V.instanceCount,At);ee.renderInstances(Qt,ve,Ai)}else ee.render(Qt,ve)};function se(b,N,V){b.transparent===!0&&b.side===Ue&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,Ds(b,N,V),b.side=tn,b.needsUpdate=!0,Ds(b,N,V),b.side=Ue):Ds(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),f=Jt.get(V),f.init(N),w.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==V&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const W=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const rt=B.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const Tt=rt[pt];se(Tt,V,B),W.add(Tt)}else se(rt,V,B),W.add(rt)}),w.pop(),f=null,W},this.compileAsync=function(b,N,V=null){const W=this.compile(b,N,V);return new Promise(B=>{function rt(){if(W.forEach(function(pt){Pt.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){B(b);return}setTimeout(rt,10)}Yt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ci=null;function bi(b){ci&&ci(b)}function Ao(){sn.stop()}function Ro(){sn.start()}const sn=new Rc;sn.setAnimationLoop(bi),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(b){ci=b,q.setAnimationLoop(b),b===null?sn.stop():sn.start()},q.addEventListener("sessionstart",Ao),q.addEventListener("sessionend",Ro),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,R),f=Jt.get(b,w.length),f.init(N),w.push(f),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,yt),m=_t.get(b,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Rr(rt,N,-1/0,y.sortObjects)}Rr(b,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ut),Xt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Xt&&It.addToRenderList(m,b),this.info.render.frame++,st===!0&&nt.beginShadows();const V=f.state.shadowsArray;vt.render(V,b,N),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(f.setupLights(),N.isArrayCamera){const rt=N.cameras;if(B.length>0)for(let pt=0,Tt=rt.length;pt<Tt;pt++){const Et=rt[pt];Po(W,B,b,Et)}Xt&&It.render(b);for(let pt=0,Tt=rt.length;pt<Tt;pt++){const Et=rt[pt];Co(m,b,Et,Et.viewport)}}else B.length>0&&Po(W,B,b,N),Xt&&It.render(b),Co(m,b,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,N),pe.resetDefaultState(),x=-1,_=null,w.pop(),w.length>0?(f=w[w.length-1],st===!0&&nt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Rr(b,N,V,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){W&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const pt=j.update(b),Tt=b.material;Tt.visible&&m.push(b,pt,Tt,V,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const pt=j.update(b),Tt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ht.copy(pt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const Et=pt.groups;for(let Ot=0,Gt=Et.length;Ot<Gt;Ot++){const wt=Et[Ot],Qt=Tt[wt.materialIndex];Qt&&Qt.visible&&m.push(b,pt,Qt,V,Ht.z,wt)}}else Tt.visible&&m.push(b,pt,Tt,V,Ht.z,null)}}const rt=b.children;for(let pt=0,Tt=rt.length;pt<Tt;pt++)Rr(rt[pt],N,V,W)}function Co(b,N,V,W){const B=b.opaque,rt=b.transmissive,pt=b.transparent;f.setupLightsView(V),st===!0&&nt.setGlobalState(y.clippingPlanes,V),W&&Rt.viewport(A.copy(W)),B.length>0&&Ls(B,N,V),rt.length>0&&Ls(rt,N,V),pt.length>0&&Ls(pt,N,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Po(b,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new li(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Ti:zi,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[W.id],pt=W.viewport||A;rt.setSize(pt.z,pt.w);const Tt=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(k),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&It.render(V);const Et=y.toneMapping;y.toneMapping=Qi;const Ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),st===!0&&nt.setGlobalState(y.clippingPlanes,W),Ls(b,V,W),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let wt=0,Qt=N.length;wt<Qt;wt++){const me=N[wt],ve=me.object,Xe=me.geometry,ee=me.material,At=me.group;if(ee.side===Ue&&ve.layers.test(W.layers)){const Ai=ee.side;ee.side=$e,ee.needsUpdate=!0,Io(ve,V,W,Xe,ee,At),ee.side=Ai,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}y.setRenderTarget(Tt),y.setClearColor(k,Y),Ot!==void 0&&(W.viewport=Ot),y.toneMapping=Et}function Ls(b,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,rt=b.length;B<rt;B++){const pt=b[B],Tt=pt.object,Et=pt.geometry,Ot=W===null?pt.material:W,Gt=pt.group;Tt.layers.test(V.layers)&&Io(Tt,N,V,Et,Ot,Gt)}}function Io(b,N,V,W,B,rt){b.onBeforeRender(y,N,V,W,B,rt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,N,V,W,b,rt),B.transparent===!0&&B.side===Ue&&B.forceSinglePass===!1?(B.side=$e,B.needsUpdate=!0,y.renderBufferDirect(V,N,W,B,b,rt),B.side=tn,B.needsUpdate=!0,y.renderBufferDirect(V,N,W,B,b,rt),B.side=Ue):y.renderBufferDirect(V,N,W,B,b,rt),b.onAfterRender(y,N,V,W,B,rt)}function Ds(b,N,V){N.isScene!==!0&&(N=fe);const W=Pt.get(b),B=f.state.lights,rt=f.state.shadowsArray,pt=B.state.version,Tt=bt.getParameters(b,B.state,rt,N,V),Et=bt.getProgramCacheKey(Tt);let Ot=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Bt),Ot=new Map,W.programs=Ot);let Gt=Ot.get(Et);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===pt)return Do(b,Tt),Gt}else Tt.uniforms=bt.getUniforms(b),b.onBeforeCompile(Tt,y),Gt=bt.acquireProgram(Tt,Et),Ot.set(Et,Gt),W.uniforms=Tt.uniforms;const wt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=nt.uniform),Do(b,Tt),W.needsLights=Vc(b),W.lightsStateVersion=pt,W.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Lo(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=pr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Do(b,N){const V=Pt.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Hc(b,N,V,W,B){N.isScene!==!0&&(N=fe),C.resetTextureUnits();const rt=N.fog,pt=W.isMeshStandardMaterial?N.environment:null,Tt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:is,Et=(W.isMeshStandardMaterial?H:E).get(W.envMap||pt),Ot=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let ve=Qi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ve=y.toneMapping);const Xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=Xe!==void 0?Xe.length:0,At=Pt.get(W),Ai=f.state.lights;if(st===!0&&(yt===!0||b!==_)){const ei=b===_&&W.id===x;nt.setState(W,b,ei)}let ie=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ai.state.version||At.outputColorSpace!==Tt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==Et||W.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Ot||At.vertexTangents!==Gt||At.morphTargets!==wt||At.morphNormals!==Qt||At.morphColors!==me||At.toneMapping!==ve||At.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,At.__version=W.version);let hi=At.currentProgram;ie===!0&&(hi=Ds(W,N,B));let Sn=!1,Ze=!1,as=!1;const xe=hi.getUniforms(),xi=At.uniforms;if(Rt.useProgram(hi.program)&&(Sn=!0,Ze=!0,as=!0),W.id!==x&&(x=W.id,Ze=!0),Sn||_!==b){Rt.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),Yh(lt),Kh(lt),xe.setValue(F,"projectionMatrix",lt)):xe.setValue(F,"projectionMatrix",b.projectionMatrix),xe.setValue(F,"viewMatrix",b.matrixWorldInverse);const Vi=xe.map.cameraPosition;Vi!==void 0&&Vi.setValue(F,Lt.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,Ze=!0,as=!0)}if(B.isSkinnedMesh){xe.setOptional(F,B,"bindMatrix"),xe.setOptional(F,B,"bindMatrixInverse");const ei=B.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),xe.setValue(F,"boneTexture",ei.boneTexture,C))}B.isBatchedMesh&&(xe.setOptional(F,B,"batchingTexture"),xe.setValue(F,"batchingTexture",B._matricesTexture,C),xe.setOptional(F,B,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",B._indirectTexture,C),xe.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",B._colorsTexture,C));const os=V.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Dt.update(B,V,hi),(Ze||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,xe.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Et,xi.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(xi.envMapIntensity.value=N.environmentIntensity),Ze&&(xe.setValue(F,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&zc(xi,as),rt&&W.fog===!0&&dt.refreshFogUniforms(xi,rt),dt.refreshMaterialUniforms(xi,W,X,J,f.state.transmissionRenderTarget[b.id]),pr.upload(F,Lo(At),xi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pr.upload(F,Lo(At),xi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(F,"center",B.center),xe.setValue(F,"modelViewMatrix",B.modelViewMatrix),xe.setValue(F,"normalMatrix",B.normalMatrix),xe.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ei=W.uniformsGroups;for(let Vi=0,Wi=ei.length;Vi<Wi;Vi++){const Oo=ei[Vi];U.update(Oo,hi),U.bind(Oo,hi)}}return hi}function zc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Vc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,V){Pt.get(b.texture).__webglTexture=N,Pt.get(b.depthTexture).__webglTexture=V;const W=Pt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const V=Pt.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,V=0){R=b,P=N,S=V;let W=!0,B=null,rt=!1,pt=!1;if(b){const Et=Pt.get(b);if(Et.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Et.__hasExternalTextures)C.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const wt=b.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&Pt.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);const Gt=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?B=Gt[N][V]:B=Gt[N],rt=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?B=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?B=Gt[V]:B=Gt,A.copy(b.viewport),D.copy(b.scissor),O=b.scissorTest}else A.copy(St).multiplyScalar(X).floor(),D.copy(Ft).multiplyScalar(X).floor(),O=te;if(Rt.bindFramebuffer(F.FRAMEBUFFER,B)&&W&&Rt.drawBuffers(b,B),Rt.viewport(A),Rt.scissor(D),Rt.setScissorTest(O),rt){const Et=Pt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Et.__webglTexture,V)}else if(pt){const Et=Pt.get(b.texture),Ot=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,Ot)}x=-1},this.readRenderTargetPixels=function(b,N,V,W,B,rt,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){Rt.bindFramebuffer(F.FRAMEBUFFER,Tt);try{const Et=b.texture,Ot=Et.format,Gt=Et.type;if(!Wt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&V>=0&&V<=b.height-B&&F.readPixels(N,V,W,B,zt.convert(Ot),zt.convert(Gt),rt)}finally{const Et=R!==null?Pt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,W,B,rt,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){const Et=b.texture,Ot=Et.format,Gt=Et.type;if(!Wt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-W&&V>=0&&V<=b.height-B){Rt.bindFramebuffer(F.FRAMEBUFFER,Tt);const wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.bufferData(F.PIXEL_PACK_BUFFER,rt.byteLength,F.STREAM_READ),F.readPixels(N,V,W,B,zt.convert(Ot),zt.convert(Gt),0);const Qt=R!==null?Pt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Qt);const me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Xh(F,me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,rt),F.deleteBuffer(wt),F.deleteSync(me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,V=0){b.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-V),B=Math.floor(b.image.width*W),rt=Math.floor(b.image.height*W),pt=N!==null?N.x:0,Tt=N!==null?N.y:0;C.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,pt,Tt,B,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(b,N,V=null,W=null,B=0){b.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],N=arguments[2],B=arguments[3]||0,V=null);let rt,pt,Tt,Et,Ot,Gt,wt,Qt,me;const ve=b.isCompressedTexture?b.mipmaps[B]:b.image;V!==null?(rt=V.max.x-V.min.x,pt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Ot=V.min.y,Gt=V.isBox3?V.min.z:0):(rt=ve.width,pt=ve.height,Tt=ve.depth||1,Et=0,Ot=0,Gt=0),W!==null?(wt=W.x,Qt=W.y,me=W.z):(wt=0,Qt=0,me=0);const Xe=zt.convert(N.format),ee=zt.convert(N.type);let At;N.isData3DTexture?(C.setTexture3D(N,0),At=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),At=F.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const Ai=F.getParameter(F.UNPACK_ROW_LENGTH),ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Ze=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt);const as=b.isDataArrayTexture||b.isData3DTexture,xe=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const xi=Pt.get(b),os=Pt.get(N),ei=Pt.get(xi.__renderTarget),Vi=Pt.get(os.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,ei.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Wi=0;Wi<Tt;Wi++)as&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(b).__webglTexture,B,Gt+Wi),b.isDepthTexture?(xe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(N).__webglTexture,B,me+Wi),F.blitFramebuffer(Et,Ot,rt,pt,wt,Qt,rt,pt,F.DEPTH_BUFFER_BIT,F.NEAREST)):xe?F.copyTexSubImage3D(At,B,wt,Qt,me+Wi,Et,Ot,rt,pt):F.copyTexSubImage2D(At,B,wt,Qt,me+Wi,Et,Ot,rt,pt);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(At,B,wt,Qt,me,rt,pt,Tt,Xe,ee,ve.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(At,B,wt,Qt,me,rt,pt,Tt,Xe,ve.data):F.texSubImage3D(At,B,wt,Qt,me,rt,pt,Tt,Xe,ee,ve):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,wt,Qt,rt,pt,Xe,ee,ve.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,wt,Qt,ve.width,ve.height,Xe,ve.data):F.texSubImage2D(F.TEXTURE_2D,B,wt,Qt,rt,pt,Xe,ee,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ai),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze),B===0&&N.generateMipmaps&&F.generateMipmap(At),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,V=null,W=null,B=0){return b.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],N=arguments[3],B=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,V,W,B)},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){P=0,S=0,R=null,Rt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class vo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class n0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class s0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new I;class _r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ti(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class br extends nn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fn;const us=new I,Bn=new I,Gn=new I,kn=new Mt,fs=new Mt,Oc=new ue,er=new I,ps=new I,ir=new I,Ll=new Mt,na=new Mt,Dl=new Mt;class xo extends Te{constructor(t=new br){if(super(),this.isSprite=!0,this.type="Sprite",Fn===void 0){Fn=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new s0(e,5);Fn.setIndex([0,1,2,0,2,3]),Fn.setAttribute("position",new _r(i,3,0,!1)),Fn.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=Fn,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bn.setFromMatrixScale(this.matrixWorld),Oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bn.multiplyScalar(-Gn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;nr(er.set(-.5,-.5,0),Gn,a,Bn,n,r),nr(ps.set(.5,-.5,0),Gn,a,Bn,n,r),nr(ir.set(.5,.5,0),Gn,a,Bn,n,r),Ll.set(0,0),na.set(1,0),Dl.set(1,1);let o=t.ray.intersectTriangle(er,ps,ir,!1,us);if(o===null&&(nr(ps.set(-.5,.5,0),Gn,a,Bn,n,r),na.set(0,1),o=t.ray.intersectTriangle(er,ir,ps,!1,us),o===null))return;const l=t.ray.origin.distanceTo(us);l<t.near||l>t.far||e.push({distance:l,point:us.clone(),uv:ai.getInterpolation(us,er,ps,ir,Ll,na,Dl,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(s,t,e,i,n,r){kn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(fs.x=r*kn.x-n*kn.y,fs.y=n*kn.x+r*kn.y):fs.copy(kn),s.copy(t),s.x+=fs.x,s.y+=fs.y,s.applyMatrix4(Oc)}class Ar extends nn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vr=new I,xr=new I,Ol=new ue,ms=new Er,sr=new Cs,sa=new I,Ul=new I;class Mo extends Te{constructor(t=new we,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)vr.fromBufferAttribute(e,n-1),xr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=vr.distanceTo(xr);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(n),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Ol.copy(n).invert(),ms.copy(t.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),T=h.getX(v+1),w=rr(this,t,ms,l,f,T);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=rr(this,t,ms,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=rr(this,t,ms,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=rr(this,t,ms,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(vr.fromBufferAttribute(a,n),xr.fromBufferAttribute(a,r),e.distanceSqToSegment(vr,xr,sa,Ul)>i)return;sa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sa);if(!(l<t.near||l>t.far))return{distance:l,point:Ul.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class r0 extends Mo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Za extends nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nl=new ue,ja=new Er,ar=new Cs,or=new I;class Fl extends Te{constructor(t=new we,e=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(n),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Nl.copy(n).invert(),ja.copy(t.ray).applyMatrix4(Nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);or.fromBufferAttribute(d,m),Bl(or,m,l,n,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,v=p;g<v;g++)or.fromBufferAttribute(d,g),Bl(or,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bl(s,t,e,i,n,r,a){const o=ja.distanceSqToPoint(s);if(o<e){const l=new I;ja.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Re extends We{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends we{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=i+d/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends we{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=i/2;let f=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function T(){const y=new I,L=new I;let P=0;const S=(e-t)/i;for(let R=0;R<=r;R++){const x=[],_=R/r,A=_*(e-t)+t;for(let D=0;D<=n;D++){const O=D/n,k=O*l+o,Y=Math.sin(k),K=Math.cos(k);L.x=A*Y,L.y=-_*i+m,L.z=A*K,d.push(L.x,L.y,L.z),y.set(Y,S,K).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-_),x.push(g++)}v.push(x)}for(let R=0;R<n;R++)for(let x=0;x<r;x++){const _=v[x][R],A=v[x+1][R],D=v[x+1][R+1],O=v[x][R+1];(t>0||x!==0)&&(h.push(_,A,O),P+=3),(e>0||x!==r-1)&&(h.push(A,D,O),P+=3)}c.addGroup(f,P,0),f+=P}function w(y){const L=g,P=new Mt,S=new I;let R=0;const x=y===!0?t:e,_=y===!0?1:-1;for(let D=1;D<=n;D++)d.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const A=g;for(let D=0;D<=n;D++){const k=D/n*l+o,Y=Math.cos(k),K=Math.sin(k);S.x=x*K,S.y=m*_,S.z=x*Y,d.push(S.x,S.y,S.z),u.push(0,_,0),P.x=Y*.5+.5,P.y=K*.5*_+.5,p.push(P.x,P.y),g++}for(let D=0;D<n;D++){const O=L+D,k=A+D;y===!0?h.push(k,k+1,O):h.push(k+1,k,O),R+=3}c.addGroup(f,R,y===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mn extends qt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ps extends we{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const w=new I,y=new I,L=new I;for(let P=0;P<e.length;P+=3)p(e[P+0],w),p(e[P+1],y),p(e[P+2],L),l(w,y,L,T)}function l(T,w,y,L){const P=L+1,S=[];for(let R=0;R<=P;R++){S[R]=[];const x=T.clone().lerp(y,R/P),_=w.clone().lerp(y,R/P),A=P-R;for(let D=0;D<=A;D++)D===0&&R===P?S[R][D]=x:S[R][D]=x.clone().lerp(_,D/A)}for(let R=0;R<P;R++)for(let x=0;x<2*(P-R)-1;x++){const _=Math.floor(x/2);x%2===0?(u(S[R][_+1]),u(S[R+1][_]),u(S[R][_])):(u(S[R][_+1]),u(S[R+1][_+1]),u(S[R+1][_]))}}function c(T){const w=new I;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(T),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const T=new I;for(let w=0;w<r.length;w+=3){T.x=r[w+0],T.y=r[w+1],T.z=r[w+2];const y=m(T)/2/Math.PI+.5,L=f(T)/Math.PI+.5;a.push(y,1-L)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const w=a[T+0],y=a[T+2],L=a[T+4],P=Math.max(w,y,L),S=Math.min(w,y,L);P>.9&&S<.1&&(w<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),L<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function p(T,w){const y=T*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){const T=new I,w=new I,y=new I,L=new I,P=new Mt,S=new Mt,R=new Mt;for(let x=0,_=0;x<r.length;x+=9,_+=6){T.set(r[x+0],r[x+1],r[x+2]),w.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),P.set(a[_+0],a[_+1]),S.set(a[_+2],a[_+3]),R.set(a[_+4],a[_+5]),L.copy(T).add(w).add(y).divideScalar(3);const A=m(L);v(P,_+0,T,A),v(S,_+2,w,A),v(R,_+4,y,A)}}function v(T,w,y,L){L<0&&T.x===1&&(a[w]=T.x-1),y.x===0&&y.z===0&&(a[w]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.vertices,t.indices,t.radius,t.details)}}class So extends Ps{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new So(t.radius,t.detail)}}class To extends Ps{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new To(t.radius,t.detail)}}class Ei extends we{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,p=new I,g=new Mt;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let f=0;f<i;f++){const T=f+m,w=T,y=T+i+1,L=T+i+2,P=T+1;o.push(w,y,P),o.push(y,L,P)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hi extends we{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,u=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const T=[],w=f/i;let y=0;f===0&&a===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const P=L/e;d.x=-t*Math.cos(n+P*r)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(n+P*r)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(P+y,1-w),T.push(c++)}h.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){const w=h[f][T+1],y=h[f][T],L=h[f+1][T],P=h[f+1][T+1];(f!==0||a>0)&&p.push(w,y,P),(f!==i-1||l<Math.PI)&&p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Eo extends Ps{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}class Mr extends we{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const v=g/n*r,m=p/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const v=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,T=(n+1)*p+g;a.push(v,m,T),a.push(m,f,T)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class a0 extends Ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Nt extends nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uc extends Nt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Is extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class o0 extends Is{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new ue,Gl=new I,kl=new I;class wo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l0 extends wo{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Qn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Nc extends Is{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new l0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hl=new ue,gs=new I,aa=new I;class c0 extends wo{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gs.setFromMatrixPosition(t.matrixWorld),i.position.copy(gs),aa.copy(i.position),aa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(aa),i.updateMatrixWorld(),n.makeTranslation(-gs.x,-gs.y,-gs.z),Hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class h0 extends Is{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new c0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class d0 extends wo{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oa extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class f0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zl(){return performance.now()}const Vl=new ue;class p0{constructor(t,e,i=0,n=1/0){this.ray=new Er(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(t,e=!0,i=[]){return Ja(t,this,i,e),i.sort(Wl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Ja(t[n],this,i,e);return i.sort(Wl),i}}function Wl(s,t){return s.distance-t.distance}function Ja(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ja(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);const Fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const m0=new go(-1,1,1,-1,0,1);class g0 extends we{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const _0=new g0;class bo{constructor(t){this._mesh=new G(_0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,m0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class v0 extends rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ws.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new bo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xl extends rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class x0 extends rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class M0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Mt);this._width=i.width,this._height=i.height,e=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new v0(Fc),this.copyPass.material.blending=Bi,this.clock=new f0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xl!==void 0&&(a instanceof Xl?i=!0:a instanceof x0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class y0 extends rs{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const S0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends rs{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new li(r,a,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new li(r,a,{type:Ti});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new li(r,a,{type:Ti});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=S0;this.highPassUniforms=ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Fc;this.copyUniforms=ws.clone(h.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ts,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new bo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}es.BlurDirectionX=new Mt(1,0);es.BlurDirectionY=new Mt(0,1);const T0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class E0 extends rs{constructor(){super();const t=T0;this.uniforms=ws.clone(t.uniforms),this.material=new a0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new bo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class w0{constructor(t,e,i){M(this,"composer");M(this,"bloomPass");M(this,"renderPass");const n=window.innerWidth<=900||"ontouchstart"in window,r=new li(window.innerWidth,window.innerHeight,{type:Ti,format:oi,minFilter:Qe,magFilter:Qe,samples:0});this.composer=new M0(t,r),this.renderPass=new y0(e,i),this.composer.addPass(this.renderPass);const a=n?Math.floor(window.innerWidth*.5):window.innerWidth,o=n?Math.floor(window.innerHeight*.5):window.innerHeight,l=new Mt(a,o);this.bloomPass=new es(l,n?.35:.45,n?.2:.25,.82),this.composer.addPass(this.bloomPass);const c=new E0;this.composer.addPass(c)}setSize(t,e){const i=window.innerWidth<=900||"ontouchstart"in window;this.composer.setSize(t,e),i?this.bloomPass.resolution.set(Math.floor(t*.5),Math.floor(e*.5)):this.bloomPass.resolution.set(t,e)}render(){this.composer.render()}}var Z=(s=>(s[s.EMPTY=0]="EMPTY",s[s.WOOD_SCAFFOLD=1]="WOOD_SCAFFOLD",s[s.GLASS_WINDOW=2]="GLASS_WINDOW",s[s.BRICK_CONCRETE=3]="BRICK_CONCRETE",s[s.STEEL_GIRDER=4]="STEEL_GIRDER",s[s.POWER_TRANSFORMER=5]="POWER_TRANSFORMER",s))(Z||{}),gt=(s=>(s.BREACH_BOOSTER="BREACH_BOOSTER",s.OVERDRIVE_SLIDE="OVERDRIVE_SLIDE",s.PHASE_DASH="PHASE_DASH",s.GLITCH_ANCHOR="GLITCH_ANCHOR",s))(gt||{}),z=(s=>(s.CUTLASS="CUTLASS",s.PISTOL_XAG9="PISTOL_XAG9",s.AKIMBO_UZIS="AKIMBO_UZIS",s.SHOTGUN_AA12="SHOTGUN_AA12",s.REVOLVER_JUDGE="REVOLVER_JUDGE",s.RIFLE_XAG47="RIFLE_XAG47",s.GHOST_SMG="GHOST_SMG",s.RICOCHET_SAW="RICOCHET_SAW",s.RAIL_SNIPER="RAIL_SNIPER",s.BUNKER_RPG="BUNKER_RPG",s.SHOCK_ARC="SHOCK_ARC",s.VULCAN_MINIGUN="VULCAN_MINIGUN",s))(z||{}),Me=(s=>(s.TEAM_DEATHMATCH="TEAM_DEATHMATCH",s.FREE_FOR_ALL="FREE_FOR_ALL",s.ODOGWU_STASH="ODOGWU_STASH",s.VAULT_HEIST="VAULT_HEIST",s.APAPA_LOCKDOWN="APAPA_LOCKDOWN",s))(Me||{}),ce=(s=>(s.BIRNIN_KANO="BIRNIN_KANO",s.LAGOS_GOSLOW="LAGOS_GOSLOW",s))(ce||{}),Ae=(s=>(s.ACT_1_BREACH="ACT_1_BREACH",s.ACT_2_CARRIER="ACT_2_CARRIER",s.ACT_3_EXTRACTION="ACT_3_EXTRACTION",s.MATCH_OVER="MATCH_OVER",s))(Ae||{}),Oe=(s=>(s.MATCH_START="MATCH_START",s.FIRST_BLOOD="FIRST_BLOOD",s.DOUBLE_KILL="DOUBLE_KILL",s.KILL_STREAK="KILL_STREAK",s.VAULT_BREACHED="VAULT_BREACHED",s.CARRIER_MARKED="CARRIER_MARKED",s.CHOPPER_ARRIVED="CHOPPER_ARRIVED",s.CLEAN_EVAC="CLEAN_EVAC",s))(Oe||{}),Vn=(s=>(s.SPECTER="SPECTER",s.VANGUARD="VANGUARD",s.CHRONOS="CHRONOS",s.STRIKER="STRIKER",s))(Vn||{});const Mi={GRID_WIDTH:80,GRID_HEIGHT:50,TILE_SIZE:1,TILE_DEPTH:3.5,CAMERA_FOV:50,GRAVITY:-32,GROUND_SLAM_VELOCITY:-40},Ye={[z.CUTLASS]:{id:z.CUTLASS,name:"Takobin Kano",category:"Melee",damage:90,fireInterval:.26,wallDmgMultiplier:1.5,magSize:999,reloadTime:0,range:3.8,speed:50,spread:0,recoilKick:.35,description:"Traditional Northern double-edged sword: +25% sprint/flight speed, kinetic lunge, steals +₦50,000 cash on kill"},[z.PISTOL_XAG9]:{id:z.PISTOL_XAG9,name:"XAG-9 Service Pistol",category:"Sidearm",damage:22,fireInterval:.16,wallDmgMultiplier:1,magSize:15,reloadTime:.9,range:35,speed:72,spread:.02,recoilKick:.18,description:"Reliable 9mm sidearm with fast draw and infinite reserve ammo"},[z.AKIMBO_UZIS]:{id:z.AKIMBO_UZIS,name:"Akimbo Micro-Uzis",category:"SMG",damage:13,fireInterval:.055,wallDmgMultiplier:1,magSize:64,reloadTime:1.3,range:28,speed:76,pellets:2,spread:.08,recoilKick:.14,description:"Dual-wielded spray shredding wood and glass at 0% movement penalty"},[z.SHOTGUN_AA12]:{id:z.SHOTGUN_AA12,name:'AA-12 "Bunker" Shotgun',category:"Shotgun",damage:11,fireInterval:.28,wallDmgMultiplier:4.5,magSize:20,reloadTime:1.6,range:24,speed:58,pellets:9,spread:.15,recoilKick:.5,description:"Drum-fed combat shotgun: 4.5x damage against vault doors and walls"},[z.REVOLVER_JUDGE]:{id:z.REVOLVER_JUDGE,name:'Kano "Zaki" .44 Revolver',category:"Sidearm",damage:58,fireInterval:.46,wallDmgMultiplier:2.2,magSize:6,reloadTime:1.4,range:42,speed:82,spread:.015,recoilKick:.65,description:"Heavy .44 hand cannon blasts enemies off rooftops and Danfo buses"},[z.RIFLE_XAG47]:{id:z.RIFLE_XAG47,name:"XAG-47 Kalashnikov",category:"Rifle",damage:28,fireInterval:.1,wallDmgMultiplier:1.6,magSize:30,reloadTime:1.2,range:48,speed:85,spread:.035,recoilKick:.25,description:"Iconic 7.62mm Nigerian assault rifle chipping through mud & concrete"},[z.GHOST_SMG]:{id:z.GHOST_SMG,name:'MP5-SD "Ghost" SMG',category:"SMG",damage:21,fireInterval:.075,wallDmgMultiplier:.8,magSize:32,reloadTime:1.1,range:34,speed:72,spread:.03,recoilKick:.15,description:"Silenced assassin: zero muzzle flash and zero sonar sound rings"},[z.RICOCHET_SAW]:{id:z.RICOCHET_SAW,name:"Harbi Tactical Launcher",category:"Tech",damage:52,fireInterval:.38,wallDmgMultiplier:.6,magSize:10,reloadTime:1.6,range:58,speed:48,bounces:4,spread:.01,recoilKick:.35,description:"Tactical ricochet projectile bouncing up to 4 times around corners"},[z.RAIL_SNIPER]:{id:z.RAIL_SNIPER,name:"Arewa .50 Cal Sniper",category:"Heavy",damage:120,fireInterval:1.05,wallDmgMultiplier:3.5,magSize:4,reloadTime:1.8,range:90,speed:200,piercing:2,spread:0,recoilKick:.85,description:"Anti-materiel sniper: zooms out 40%, red laser, pierces 2 walls"},[z.BUNKER_RPG]:{id:z.BUNKER_RPG,name:"RPG-7 Bunker Buster",category:"Heavy",damage:145,fireInterval:.42,wallDmgMultiplier:5.5,magSize:2,reloadTime:1.15,range:68,speed:54,spread:.01,recoilKick:.95,description:"Dual-tube shoulder rocket with rapid 1.15s reload and 3x3 wall breach"},[z.SHOCK_ARC]:{id:z.SHOCK_ARC,name:"Tactical EMP Arc",category:"Tech",damage:42,fireInterval:.6,wallDmgMultiplier:0,magSize:8,reloadTime:1.6,range:28,speed:60,spread:.04,recoilKick:.3,description:"High-voltage arc disables enemy Rigs for 4s and forces cash drops"},[z.VULCAN_MINIGUN]:{id:z.VULCAN_MINIGUN,name:"FN Heavy Support Gun",category:"Heavy",damage:18,fireInterval:.04,wallDmgMultiplier:3,magSize:150,reloadTime:2.8,range:65,speed:95,spread:.07,recoilKick:.32,description:"150-round drum heavy machine gun; recoil pushes shooter (aim down to fly!)"}};class b0{constructor(t){M(this,"camera");M(this,"targetPosition",new I(40,25,0));M(this,"currentPosition",new I(40,25,18));M(this,"aimOffset",new Mt(0,0));M(this,"targetAimOffset",new Mt(0,0));M(this,"speedZoom",0);M(this,"targetSpeedZoom",0);M(this,"isMobile",!1);M(this,"activeWeapon",z.RIFLE_XAG47);M(this,"weaponTargetZ",18);M(this,"weaponAimLead",4.5);M(this,"weaponSpeedZoomMult",1);M(this,"breachPullbackTimer",0);M(this,"isSlideActive",!1);M(this,"trauma",0);M(this,"shakeOffset",new I(0,0,0));M(this,"lookTarget",new I(40,25,0));this.isMobile=window.innerWidth<=900||"ontouchstart"in window,this.setWeaponProfile(z.RIFLE_XAG47);const e=this.getBaseZ();this.camera=new qe(Mi.CAMERA_FOV,t,.1,250),this.camera.position.set(40,25,e),this.currentPosition.set(40,25,e),this.camera.lookAt(40,25,0)}setWeaponProfile(t){switch(this.activeWeapon=t,t){case z.CUTLASS:this.weaponTargetZ=this.isMobile?11.5:13.5,this.weaponAimLead=2.2,this.weaponSpeedZoomMult=1.25;break;case z.SHOTGUN_AA12:case z.AKIMBO_UZIS:case z.GHOST_SMG:this.weaponTargetZ=this.isMobile?14.5:16.5,this.weaponAimLead=3.6,this.weaponSpeedZoomMult=1.15;break;case z.RIFLE_XAG47:case z.REVOLVER_JUDGE:case z.PISTOL_XAG9:case z.SHOCK_ARC:this.weaponTargetZ=this.isMobile?15.5:18,this.weaponAimLead=4.5,this.weaponSpeedZoomMult=1;break;case z.BUNKER_RPG:case z.VULCAN_MINIGUN:case z.RICOCHET_SAW:this.weaponTargetZ=this.isMobile?17.5:20.5,this.weaponAimLead=5.2,this.weaponSpeedZoomMult=.85;break;case z.RAIL_SNIPER:this.weaponTargetZ=this.isMobile?22:25.5,this.weaponAimLead=7.5,this.weaponSpeedZoomMult=.7;break;default:this.weaponTargetZ=this.isMobile?15.5:18,this.weaponAimLead=4.5,this.weaponSpeedZoomMult=1;break}}triggerBreachZoom(){this.breachPullbackTimer=.45}triggerSlideZoom(t){this.isSlideActive=t}triggerPhaseSnap(t,e){this.currentPosition.x=t,this.currentPosition.y=e,this.addTrauma(.08)}triggerAnchorSlingshot(){this.addTrauma(.18)}getBaseZ(){return this.weaponTargetZ}onResize(t){this.isMobile=window.innerWidth<=900||"ontouchstart"in window,this.camera.aspect=t,this.camera.updateProjectionMatrix()}setFollowTarget(t,e){this.targetPosition.set(t,e,0)}setAimShift(t,e){const i=this.weaponAimLead,n=this.activeWeapon===z.BUNKER_RPG?.35:0;this.targetAimOffset.set(t*i,(e+n)*i*.72)}setSpeedZoom(t){this.targetSpeedZoom=ni.clamp(t*this.weaponSpeedZoomMult,0,1)}addTrauma(t){this.trauma=ni.clamp(this.trauma+t,0,1)}update(t){let e=this.getBaseZ(),i=0;this.breachPullbackTimer>0&&(this.breachPullbackTimer-=t,e=Math.max(e,this.isMobile?18.5:21.5)),this.isSlideActive&&(e=this.isMobile?12.5:14.5,i=-.65),this.aimOffset.lerp(this.targetAimOffset,Math.min(t*6,1)),this.speedZoom=ni.lerp(this.speedZoom,this.targetSpeedZoom,Math.min(t*3.5,1));const n=e+this.speedZoom*3.2,r=ni.clamp(this.targetPosition.x+this.aimOffset.x,5,75),a=ni.clamp(this.targetPosition.y+this.aimOffset.y+i,3.5,45);if(this.currentPosition.x=ni.lerp(this.currentPosition.x,r,Math.min(t*10,1)),this.currentPosition.y=ni.lerp(this.currentPosition.y,a,Math.min(t*10,1)),this.currentPosition.z=ni.lerp(this.currentPosition.z,n,Math.min(t*5.5,1)),this.trauma>0){const o=this.trauma*this.trauma,l=performance.now()*.04;this.shakeOffset.set((Math.sin(l*1.8)+Math.cos(l*3.3))*o*.22,(Math.cos(l*2.4)+Math.sin(l*2.8))*o*.22,Math.sin(l*1.5)*o*.1),this.trauma=Math.max(0,this.trauma-t*3.2)}else this.shakeOffset.set(0,0,0);this.camera.position.copy(this.currentPosition).add(this.shakeOffset),this.lookTarget.set(this.currentPosition.x,this.currentPosition.y,0),this.camera.lookAt(this.lookTarget)}}class A0{constructor(t){M(this,"renderer");M(this,"scene");M(this,"cameraSystem");M(this,"postProcessing");M(this,"isMobile",!1);M(this,"container");M(this,"isRunning",!1);M(this,"lastTime",0);M(this,"animationFrameId",null);M(this,"updateCallbacks",[]);M(this,"loop",()=>{if(!this.isRunning)return;const t=performance.now(),e=this.lastTime===0?.016:(t-this.lastTime)/1e3;this.lastTime=t;const i=Math.min(Math.max(e,.001),.033);for(let n=0;n<this.updateCallbacks.length;n++)this.updateCallbacks[n](i);this.cameraSystem.update(i),this.isMobile?this.renderer.render(this.scene,this.cameraSystem.camera):this.postProcessing.render(),this.animationFrameId=requestAnimationFrame(this.loop)});const e=document.getElementById(t);if(!e)throw new Error(`Container with ID ${t} not found`);this.container=e,this.isMobile=window.innerWidth<=900||"ontouchstart"in window||navigator.maxTouchPoints>0,this.renderer=new i0({antialias:!this.isMobile,powerPreference:"high-performance",alpha:!1,depth:!0,precision:this.isMobile?"mediump":"highp"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(this.isMobile?1:Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=ro,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!this.isMobile,this.renderer.shadowMap.type=qc,this.container.appendChild(this.renderer.domElement),this.scene=new n0,this.scene.background=new Ut(724761),this.scene.fog=new vo(724761,35e-5),this.cameraSystem=new b0(window.innerWidth/window.innerHeight),this.postProcessing=new w0(this.renderer,this.scene,this.cameraSystem.camera),this.setupLighting(),window.addEventListener("resize",this.onWindowResize.bind(this))}setupLighting(){const t=window.innerWidth<=900||"ontouchstart"in window,e=new u0(4674921,.4);e.name="AmbientLight",this.scene.add(e);const i=new oa(14412542,1.15);i.position.set(45,75,40),i.castShadow=!0,i.shadow.mapSize.width=t?512:1024,i.shadow.mapSize.height=t?512:1024,i.shadow.camera.near=.5,i.shadow.camera.far=160;const n=55;i.shadow.camera.left=-n,i.shadow.camera.right=n,i.shadow.camera.top=n,i.shadow.camera.bottom=-n,i.shadow.bias=-5e-4,i.name="MainDirectionalLight",this.scene.add(i);const r=new oa(6333946,.55);r.position.set(-35,25,-30),r.name="PlatformRimLight",this.scene.add(r);const a=new o0(16777215,4478276,1.8);a.name="MainHemisphereLight",this.scene.add(a);const o=new oa(16777215,2.2);o.position.set(15,25,35),o.name="FrontCameraLight",this.scene.add(o)}setBlackout(t){const e=this.scene.getObjectByName("AmbientLight"),i=this.scene.getObjectByName("MainDirectionalLight"),n=this.scene.getObjectByName("PlatformRimLight"),r=this.scene.getObjectByName("MainHemisphereLight"),a=this.scene.getObjectByName("FrontCameraLight");t?(e&&(e.intensity=.15),i&&(i.intensity=.2),n&&(n.intensity=.1),r&&(r.intensity=.4),a&&(a.intensity=.4)):(e&&(e.intensity=.4),i&&(i.intensity=1.15),n&&(n.intensity=.55),r&&(r.intensity=1.8),a&&(a.intensity=2.2))}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.cameraSystem.onResize(t/e),this.renderer.setSize(t,e),this.postProcessing.setSize(t,e)}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.loop())}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}onUpdate(t){this.updateCallbacks.push(t)}}const Ke={GRAVITY:940,JETPACK_THRUST:1950,MAX_ASCEND_SPEED:-480,GROUND_ACCEL:2800,AIR_ACCEL:1500,MAX_RUN_SPEED:320,GROUND_FRICTION:.82,AIR_DRAG:.965,STICK_MAX_RADIUS:68,DEADZONE:.1,FIRE_THRESHOLD:.3,THRUST_Y_THRESHOLD:-.25,WORLD_SCALE:9.8/320};class R0{constructor(t){M(this,"leftStick",this.createEmptyStick());M(this,"rightStick",this.createEmptyStick());M(this,"moveX",0);M(this,"isThrusting",!1);M(this,"isSlamming",!1);M(this,"aimAngle",0);M(this,"facingDir",1);M(this,"isFiring",!1);M(this,"triggerMelee",!1);M(this,"triggerRig",!1);M(this,"triggerBoom",!1);M(this,"triggerSwap",!1);M(this,"triggerReload",!1);M(this,"usingTouch",!1);M(this,"keys",new Set);M(this,"mousePos",{x:0,y:0});M(this,"mouseDown",!1);this.canvas=t,this.bindEvents()}createEmptyStick(){return{active:!1,touchId:null,originX:0,originY:0,currX:0,currY:0,normX:0,normY:0,magnitude:0,touchStartTime:0}}bindEvents(){this.canvas.style.touchAction="none",this.canvas.style.userSelect="none",("ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024)&&(this.usingTouch=!0),window.addEventListener("touchstart",e=>{this.usingTouch=!0;const i=window.innerWidth*.5;for(let n=0;n<e.changedTouches.length;n++){const r=e.changedTouches[n],a=r.target;if(a&&(a.closest(".touch-btn")||a.closest("#ui-overlay")||a.tagName==="BUTTON"||a.tagName==="INPUT"))continue;const o=r.clientX,l=r.clientY;o<i&&this.leftStick.touchId===null?(this.leftStick.active=!0,this.leftStick.touchId=r.identifier,this.leftStick.originX=o,this.leftStick.originY=l,this.leftStick.currX=o,this.leftStick.currY=l,this.leftStick.touchStartTime=performance.now()):o>=i&&this.rightStick.touchId===null&&(this.rightStick.active=!0,this.rightStick.touchId=r.identifier,this.rightStick.originX=o,this.rightStick.originY=l,this.rightStick.currX=o,this.rightStick.currY=l,this.rightStick.touchStartTime=performance.now())}},{passive:!1}),window.addEventListener("touchmove",e=>{for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches[i],r=n.clientX,a=n.clientY;n.identifier===this.leftStick.touchId?this.updateStickMath(this.leftStick,r,a):n.identifier===this.rightStick.touchId&&this.updateStickMath(this.rightStick,r,a)}},{passive:!1});const t=e=>{for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches[i];n.identifier===this.leftStick.touchId?this.resetStick(this.leftStick):n.identifier===this.rightStick.touchId&&this.resetStick(this.rightStick)}};window.addEventListener("touchend",t,{passive:!1}),window.addEventListener("touchcancel",t,{passive:!1}),window.addEventListener("keydown",e=>{this.usingTouch=!1,this.keys.add(e.code),e.code==="ShiftLeft"&&(this.triggerRig=!0),e.code==="KeyE"&&(this.triggerBoom=!0),(e.code==="KeyF"||e.code==="KeyV")&&(this.triggerMelee=!0),e.code==="KeyQ"&&(this.triggerSwap=!0),e.code==="KeyR"&&(this.triggerReload=!0)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{this.usingTouch=!1,this.mousePos.x=e.clientX,this.mousePos.y=e.clientY}),window.addEventListener("mousedown",e=>{e.button===0&&(this.mouseDown=!0),e.button===2&&(this.triggerRig=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault())}updateStickMath(t,e,i){const n=e-t.originX,r=i-t.originY,a=Math.hypot(n,r),o=Ke.STICK_MAX_RADIUS,l=Math.min(a,o),c=Math.atan2(r,n);t.currX=t.originX+Math.cos(c)*l,t.currY=t.originY+Math.sin(c)*l,t.magnitude=l/o,t.normX=l/o*Math.cos(c),t.normY=l/o*Math.sin(c)}resetStick(t){t.active=!1,t.touchId=null,t.normX=0,t.normY=0,t.magnitude=0}updateInputs(t,e){if(this.usingTouch)this.moveX=Math.abs(this.leftStick.normX)>Ke.DEADZONE?this.leftStick.normX:0,this.isThrusting=this.leftStick.active&&this.leftStick.normY<Ke.THRUST_Y_THRESHOLD,this.isSlamming=!1,this.rightStick.active&&this.rightStick.magnitude>Ke.DEADZONE?(this.aimAngle=Math.atan2(-this.rightStick.normY,this.rightStick.normX),this.facingDir=Math.abs(this.aimAngle)>Math.PI*.5?-1:1,this.isFiring=this.rightStick.magnitude>=Ke.FIRE_THRESHOLD):this.isFiring=!1;else{const i=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?-1:0,n=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0;this.moveX=i+n,this.isThrusting=this.keys.has("KeyW")||this.keys.has("Space")||this.keys.has("ArrowUp"),this.isSlamming=!1,this.aimAngle=Math.atan2(-(this.mousePos.y-e),this.mousePos.x-t),this.facingDir=Math.abs(this.aimAngle)>Math.PI*.5?-1:1,this.isFiring=this.mouseDown}}resetOneShotTriggers(){this.triggerMelee=!1,this.triggerRig=!1,this.triggerBoom=!1,this.triggerSwap=!1,this.triggerReload=!1}}class C0{constructor(t,e){M(this,"state",{moveX:0,jump:!1,groundSlam:!1,rig:!1,aimAngle:0,aiming:!1,firing:!1,melee:!1,throwBoom:!1,swapWeapon:!1,reload:!1,isTouch:!1,flyIntensity:0});M(this,"hasRequestedFullscreen",!1);M(this,"camera");M(this,"canvas");M(this,"raycaster",new p0);M(this,"mousePos",new Mt);M(this,"planeZ0",new ji(new I(0,0,1),0));M(this,"playerWorldPos",new I(40,25,0));M(this,"mouseWorldPos",new I(40,25,0));M(this,"mmController");M(this,"isHoldingFlyButton",!1);M(this,"isHoldingFireButton",!1);M(this,"keys",{});this.canvas=t,this.camera=e,this.state.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024,this.mmController=new R0(t),this.setupDesktopListeners(),this.setupHTMLButtonListeners()}get isLeftActive(){return this.mmController.leftStick.active}get leftTouchStart(){return new Mt(this.mmController.leftStick.originX,this.mmController.leftStick.originY)}get leftTouchCurrent(){return new Mt(this.mmController.leftStick.currX,this.mmController.leftStick.currY)}get isRightActive(){return this.mmController.rightStick.active}get rightTouchStart(){return new Mt(this.mmController.rightStick.originX,this.mmController.rightStick.originY)}get rightTouchCurrent(){return new Mt(this.mmController.rightStick.currX,this.mmController.rightStick.currY)}setupDesktopListeners(){window.addEventListener("keydown",t=>{this.state.isTouch=!1,this.keys[t.code]=!0,t.code==="KeyQ"&&(this.state.swapWeapon=!0),t.code==="KeyR"&&(this.state.reload=!0),t.code==="KeyE"&&(this.state.throwBoom=!0),(t.code==="KeyF"||t.code==="KeyV")&&(this.state.melee=!0),t.code==="ShiftLeft"&&(this.state.rig=!0),(t.code==="KeyS"||t.code==="ArrowDown")&&!t.repeat&&(this.state.groundSlam=!1),["Space","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("mousemove",t=>{this.state.isTouch=!1,this.mousePos.x=t.clientX/window.innerWidth*2-1,this.mousePos.y=-(t.clientY/window.innerHeight)*2+1,this.calculateMouseAim()}),window.addEventListener("mousedown",t=>{this.state.isTouch=!1,t.button===0?this.state.firing=!0:t.button===1?this.state.throwBoom=!0:t.button===2&&(t.preventDefault(),this.state.rig=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.state.firing=!1)}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("wheel",t=>{Math.abs(t.deltaY)>20&&(this.state.swapWeapon=!0)})}calculateMouseAim(){if(this.raycaster.setFromCamera(this.mousePos,this.camera),this.raycaster.ray.intersectPlane(this.planeZ0,this.mouseWorldPos)){const e=this.mouseWorldPos.x-this.playerWorldPos.x,i=this.mouseWorldPos.y-(this.playerWorldPos.y+.95);Math.sqrt(e*e+i*i)>.35&&(this.state.aimAngle=Math.atan2(i,e),this.state.aiming=!0)}}setupHTMLButtonListeners(){const t=(e,i,n)=>{const r=document.getElementById(e);if(!r)return;const a=l=>{l.preventDefault(),l.stopPropagation(),this.state.isTouch=!0,this.mmController.usingTouch=!0;try{l.pointerId&&r.setPointerCapture(l.pointerId)}catch{}i()},o=l=>{l.preventDefault(),l.stopPropagation();try{l.pointerId&&r.releasePointerCapture(l.pointerId)}catch{}n&&n()};r.addEventListener("pointerdown",a),r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("touchstart",a,{passive:!1}),r.addEventListener("touchend",o,{passive:!1}),r.addEventListener("touchcancel",o,{passive:!1})};t("btn-touch-fly",()=>{this.isHoldingFlyButton=!0,this.state.jump=!0,this.triggerHaptic(20)},()=>{this.isHoldingFlyButton=!1,this.state.jump=!1}),t("btn-touch-fire",()=>{this.isHoldingFireButton=!0,this.state.firing=!0,this.triggerHaptic(15)},()=>{this.isHoldingFireButton=!1,this.isRightActive||(this.state.firing=!1)}),t("btn-touch-rig",()=>{this.state.rig=!0,this.triggerHaptic(25)}),t("btn-touch-c4",()=>{this.state.throwBoom=!0,this.triggerHaptic(25)}),t("btn-touch-melee",()=>{this.state.melee=!0,this.triggerHaptic(30)}),t("btn-touch-swap",()=>{this.state.swapWeapon=!0,this.triggerHaptic(20)}),t("btn-touch-reload",()=>{this.state.reload=!0,this.triggerHaptic(20)}),t("btn-touch-fullscreen",()=>{this.requestFullscreen(),this.triggerHaptic(25)})}requestFullscreen(){const t=document,e=document.documentElement;if(!(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)){const a=e.requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen;a&&a.call(e).catch(()=>{})}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}window.scrollTo(0,1);const n=document.getElementById("hud-canvas");n&&(n.width=window.innerWidth,n.height=window.innerHeight);const r=document.getElementById("webgl-canvas");if(r){const a=r.querySelector("canvas");a&&(a.width=window.innerWidth,a.height=window.innerHeight)}window.dispatchEvent(new Event("resize")),setTimeout(()=>{window.scrollTo(0,1),window.dispatchEvent(new Event("resize"))},120),setTimeout(()=>{window.scrollTo(0,1),window.dispatchEvent(new Event("resize"))},350)}setupTouchListeners(){window.addEventListener("touchstart",()=>{this.hasRequestedFullscreen||(this.hasRequestedFullscreen=!0,this.requestFullscreen())},{passive:!0})}triggerHaptic(t=25){if(typeof navigator<"u"&&"vibrate"in navigator)try{navigator.vibrate(t)}catch{}}update(){const t=this.playerWorldPos.clone().project(this.camera),e=(t.x+1)*.5*window.innerWidth,i=(-t.y+1)*.5*window.innerHeight;if(this.mmController.updateInputs(e,i),this.mmController.usingTouch)this.state.isTouch=!0,this.state.moveX=this.mmController.moveX,this.state.jump=this.mmController.isThrusting||this.isHoldingFlyButton,this.state.groundSlam=!1,this.state.aimAngle=this.mmController.aimAngle,this.state.aiming=this.mmController.rightStick.active||this.isHoldingFireButton,this.state.firing=this.mmController.isFiring||this.isHoldingFireButton,this.mmController.triggerMelee&&(this.state.melee=!0,this.triggerHaptic(30)),this.mmController.triggerRig&&(this.state.rig=!0,this.triggerHaptic(25)),this.mmController.triggerBoom&&(this.state.throwBoom=!0,this.triggerHaptic(25)),this.mmController.triggerSwap&&(this.state.swapWeapon=!0,this.triggerHaptic(20)),this.mmController.triggerReload&&(this.state.reload=!0,this.triggerHaptic(20)),this.state.flyIntensity=Math.min(1,Math.abs(this.mmController.leftStick.normY)),this.mmController.resetOneShotTriggers();else{this.state.isTouch=!1;let n=0;(this.keys.KeyA||this.keys.ArrowLeft)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(n+=1),this.state.moveX=n,this.state.jump=!!(this.keys.KeyW||this.keys.Space||this.keys.ArrowUp)||this.isHoldingFlyButton,this.state.flyIntensity=this.state.jump?1:0,this.isHoldingFireButton&&(this.state.firing=!0),this.calculateMouseAim()}}resetOneShotFlags(){this.state.groundSlam=!1,this.state.rig=!1,this.state.melee=!1,this.state.throwBoom=!1,this.state.swapWeapon=!1,this.state.reload=!1}}class P0{constructor(){M(this,"ctx",null);M(this,"masterGain",null);M(this,"isMuted",!1);M(this,"noiseBuffer",null);const t=()=>{this.ensureContext(),window.removeEventListener("click",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("click",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(t){this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const e=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const i=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1}}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),!!this.ctx&&!this.isMuted}playGunshot(t){if(!this.ensureContext()||!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type=t==="shotgun"?"lowpass":"bandpass",n.frequency.setValueAtTime(t==="sniper"?1200:2400,e),n.frequency.exponentialRampToValueAtTime(150,e+.12);const r=this.ctx.createGain(),a=t==="shotgun"||t==="sniper"?.9:.55;r.gain.setValueAtTime(a,e),r.gain.exponentialRampToValueAtTime(.001,e+.14),i.connect(n),n.connect(r),r.connect(this.masterGain),i.start(e),i.stop(e+.15);const o=this.ctx.createOscillator(),l=this.ctx.createGain(),c=t==="sniper"?180:t==="shotgun"?140:220;o.frequency.setValueAtTime(c,e),o.frequency.exponentialRampToValueAtTime(30,e+.1),l.gain.setValueAtTime(.6,e),l.gain.exponentialRampToValueAtTime(.001,e+.1),o.connect(l),l.connect(this.masterGain),o.start(e),o.stop(e+.11)}playExplosion(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(65,t),e.frequency.exponentialRampToValueAtTime(18,t+.85),i.gain.setValueAtTime(1,t),i.gain.exponentialRampToValueAtTime(.001,t+.9),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.92);const n=this.ctx.sampleRate*.8,r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<n;h++)a[h]=(Math.random()*2-1)*(1-h/n);const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(800,t),l.frequency.exponentialRampToValueAtTime(60,t+.7);const c=this.ctx.createGain();c.gain.setValueAtTime(.85,t),c.gain.exponentialRampToValueAtTime(.001,t+.75),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(t),o.stop(t+.8)}playSonarPing(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1250,t),e.frequency.exponentialRampToValueAtTime(800,t+.35),i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.36)}playMeleeSwish(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(380,t),e.frequency.exponentialRampToValueAtTime(90,t+.18),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.19)}playThrusterWhoosh(){if(!this.ensureContext()||!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(1600,t+.15),i.frequency.exponentialRampToValueAtTime(200,t+.28);const n=this.ctx.createGain();n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.3)}playCashPickup(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((i,n)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=t+n*.055;r.type="sine",r.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.12),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.13)})}playC4Beep(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1800,t),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.07)}playUIHover(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1400,t),i.gain.setValueAtTime(.04,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.025),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.03)}playUISelect(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(1320,t+.06),i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.09)}playUIDeploy(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(80,t),e.frequency.exponentialRampToValueAtTime(220,t+.25),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.36)}}class I0{constructor(t,e=Mi.GRID_WIDTH,i=Mi.GRID_HEIGHT){M(this,"width");M(this,"height");M(this,"tiles");M(this,"tileHp");M(this,"maxHp");M(this,"scene");M(this,"group");M(this,"tileMeshes");M(this,"concreteMaterial");M(this,"concreteDamagedMaterial");M(this,"woodMaterial");M(this,"glassMaterial");M(this,"steelMaterial");M(this,"transformerMaterial");M(this,"sharedBoxGeometry");M(this,"woodGeometry");M(this,"debrisGroup");M(this,"activeDebris",[]);M(this,"debrisGeometries",[]);M(this,"onBlackoutTriggered");M(this,"currentMapId",ce.BIRNIN_KANO);M(this,"concreteDamagedLightMaterial");M(this,"concreteDamagedHeavyMaterial");M(this,"decorGroup",new Kt);M(this,"aviationLights",[]);M(this,"animTimer",0);this.scene=t,this.width=e,this.height=i,this.tiles=new Uint8Array(e*i),this.tileHp=new Float32Array(e*i),this.maxHp=new Float32Array(e*i),this.tileMeshes=new Array(e*i).fill(null),this.group=new Kt,this.group.add(this.decorGroup),this.scene.add(this.group),this.debrisGroup=new Kt,this.scene.add(this.debrisGroup),this.initProceduralMaterials(),this.initDebrisGeometries()}setMapTheme(t){for(this.currentMapId=t;this.decorGroup.children.length>0;)this.decorGroup.remove(this.decorGroup.children[0]);this.aviationLights=[],t===ce.BIRNIN_KANO?this.initKanoMaterials():this.initLagosMaterials()}initKanoMaterials(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#a16207"),i.addColorStop(.5,"#854d0e"),i.addColorStop(1,"#713f12"),e.fillStyle=i,e.fillRect(0,0,256,256),e.strokeStyle="#582e0c",e.lineWidth=3;const n=32;for(let g=30;g<256;g+=n){e.beginPath(),e.moveTo(0,g),e.lineTo(256,g),e.stroke();const v=Math.floor(g/n)%2*32;for(let m=v;m<256;m+=64)e.beginPath(),e.moveTo(m,g),e.lineTo(m,g+n),e.stroke()}e.fillStyle="rgba(202, 138, 4, 0.25)";for(let g=0;g<300;g++)e.fillRect(Math.random()*256,Math.random()*256,2,2);e.fillStyle="rgba(67, 20, 7, 0.35)";for(let g=0;g<200;g++)e.fillRect(Math.random()*256,Math.random()*256,3,2);e.strokeStyle="rgba(250, 204, 21, 0.85)",e.lineWidth=2.5,e.shadowColor="#facc15",e.shadowBlur=8;for(let g=32;g<256;g+=64)e.beginPath(),e.moveTo(g,100),e.lineTo(g+16,128),e.lineTo(g,156),e.lineTo(g-16,128),e.closePath(),e.stroke(),e.strokeRect(g-6,122,12,12);e.shadowBlur=0,e.fillStyle="#ca8a04",e.fillRect(0,0,256,22),e.fillStyle="#fef08a",e.fillRect(0,22,256,4),e.fillStyle="#f59e0b",e.shadowColor="#fbbf24",e.shadowBlur=12,e.fillRect(0,0,256,6),e.shadowBlur=0;const r=new Re(t);r.wrapS=_n,r.wrapT=_n,this.concreteMaterial=new Nt({map:r,roughness:.9,metalness:.05,emissive:4528643,emissiveIntensity:.25});const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.drawImage(t,0,0),o.strokeStyle="#3e1a06",o.lineWidth=4,o.beginPath(),o.moveTo(40,26),o.lineTo(90,110),o.lineTo(150,150),o.lineTo(210,230),o.moveTo(100,115),o.lineTo(60,190),o.stroke(),this.concreteDamagedLightMaterial=new Nt({map:new Re(a),roughness:.95,metalness:.05,emissive:7877903,emissiveIntensity:.35});const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.drawImage(a,0,0),c.fillStyle="#270c04",c.beginPath(),c.arc(128,128,42,0,Math.PI*2),c.fill(),c.strokeStyle="#ef4444",c.lineWidth=5,c.shadowColor="#f97316",c.shadowBlur=15,c.strokeRect(6,6,244,244);for(let g=0;g<Math.PI*2;g+=Math.PI/3)c.beginPath(),c.moveTo(128,128),c.lineTo(128+Math.cos(g)*90,128+Math.sin(g)*90),c.stroke();c.shadowBlur=0,this.concreteDamagedHeavyMaterial=new Nt({map:new Re(l),roughness:.98,metalness:.08,emissive:15680580,emissiveIntensity:.65}),this.concreteDamagedMaterial=this.concreteDamagedLightMaterial;const h=document.createElement("canvas");h.width=256,h.height=128;const d=h.getContext("2d");d.fillStyle="#451a03",d.fillRect(0,0,256,128),d.fillStyle="#78350f";for(let g=10;g<128;g+=22)d.fillRect(4,g,248,14);d.fillStyle="#d97706",d.fillRect(16,0,16,128),d.fillRect(224,0,16,128),d.fillStyle="#f59e0b",d.shadowColor="#f59e0b",d.shadowBlur=8,d.fillRect(0,0,256,8),d.shadowBlur=0,this.woodMaterial=new Nt({map:new Re(h),roughness:.85,metalness:.05,emissive:4528643,emissiveIntensity:.3});const u=document.createElement("canvas");u.width=256,u.height=256;const p=u.getContext("2d");p.fillStyle="#1c1917",p.fillRect(0,0,256,256),p.strokeStyle="#d97706",p.lineWidth=12,p.strokeRect(6,6,244,244),p.strokeStyle="#facc15",p.lineWidth=6,p.beginPath(),p.moveTo(128,40),p.lineTo(216,128),p.lineTo(128,216),p.lineTo(40,128),p.closePath(),p.stroke(),p.fillStyle="#f59e0b";for(let g=32;g<256;g+=64)for(let v=32;v<256;v+=64)p.beginPath(),p.arc(g,v,7,0,Math.PI*2),p.fill();this.steelMaterial=new Nt({map:new Re(u),roughness:.45,metalness:.15,emissive:7877903,emissiveIntensity:.35})}initLagosMaterials(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#0f172a",e.fillRect(0,0,256,256);for(let g=0;g<256;g+=32)e.fillStyle="#1e293b",e.fillRect(g,40,16,216),e.fillStyle="#334155",e.fillRect(g+12,40,4,216);e.fillStyle="#475569",e.fillRect(0,36,36,36),e.fillRect(220,36,36,36),e.fillRect(0,220,36,36),e.fillRect(220,220,36,36),e.fillStyle="#94a3b8",[[14,50],[242,50],[14,238],[242,238]].forEach(([g,v])=>{e.beginPath(),e.arc(g,v,4,0,Math.PI*2),e.fill()}),e.fillStyle="#94a3b8",e.font="bold 12px monospace",e.fillText("LOS-234 // APAPA SEC",48,80),e.fillText("MAX PAYLOAD 32,500 KG",48,100),e.fillStyle="#1e293b",e.fillRect(0,0,256,36),e.fillStyle="#f8fafc",e.fillRect(20,14,45,6),e.fillRect(100,14,45,6),e.fillRect(180,14,45,6);for(let g=0;g<256;g+=24)e.fillStyle="#eab308",e.beginPath(),e.moveTo(g,30),e.lineTo(g+12,30),e.lineTo(g+4,38),e.lineTo(g-8,38),e.closePath(),e.fill();const i=new Re(t);i.wrapS=_n,i.wrapT=_n,this.concreteMaterial=new Nt({map:i,roughness:.55,metalness:.15,emissive:988970,emissiveIntensity:.25});const n=document.createElement("canvas");n.width=256,n.height=256;const r=n.getContext("2d");r.drawImage(t,0,0),r.strokeStyle="#020617",r.lineWidth=4,r.beginPath(),r.moveTo(50,15),r.lineTo(90,80),r.lineTo(160,140),r.lineTo(220,210),r.stroke(),this.concreteDamagedLightMaterial=new Nt({map:new Re(n),roughness:.75,metalness:.12,emissive:1976635,emissiveIntensity:.35});const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.drawImage(n,0,0),o.fillStyle="#020617",o.beginPath(),o.arc(128,128,48,0,Math.PI*2),o.fill(),o.strokeStyle="#f97316",o.lineWidth=6,o.shadowColor="#ef4444",o.shadowBlur=14,o.strokeRect(6,6,244,244),o.shadowBlur=0,this.concreteDamagedHeavyMaterial=new Nt({map:new Re(a),roughness:.85,metalness:.15,emissive:16347926,emissiveIntensity:.75}),this.concreteDamagedMaterial=this.concreteDamagedLightMaterial;const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.fillStyle="#1e293b",c.fillRect(0,0,256,256),c.fillStyle="#334155",c.fillRect(0,0,256,32),c.fillRect(0,224,256,32),c.fillStyle="#94a3b8";for(let g=16;g<256;g+=32)c.beginPath(),c.arc(g,16,5,0,Math.PI*2),c.arc(g,240,5,0,Math.PI*2),c.fill();c.strokeStyle="#475569",c.lineWidth=8,c.beginPath(),c.moveTo(0,32),c.lineTo(256,224),c.moveTo(256,32),c.lineTo(0,224),c.stroke(),this.steelMaterial=new Nt({map:new Re(l),roughness:.35,metalness:.15,emissive:1976635,emissiveIntensity:.35});const h=document.createElement("canvas");h.width=256,h.height=128;const d=h.getContext("2d");d.fillStyle="#0f172a",d.fillRect(0,0,256,128),d.strokeStyle="#38bdf8",d.lineWidth=1.5;for(let g=-128;g<384;g+=20)d.beginPath(),d.moveTo(g,0),d.lineTo(g+128,128),d.moveTo(g+128,0),d.lineTo(g,128),d.stroke();d.fillStyle="#06b6d4",d.fillRect(0,0,256,8),this.woodMaterial=new Nt({map:new Re(h),roughness:.45,metalness:.15,emissive:165063,emissiveIntensity:.3});const u=document.createElement("canvas");u.width=256,u.height=256;const p=u.getContext("2d");p.fillStyle="#15803d",p.fillRect(0,0,256,256),p.fillStyle="#0f172a";for(let g=60;g<190;g+=14)p.fillRect(30,g,196,7);p.fillStyle="#eab308",p.fillRect(20,20,216,24),p.fillStyle="#0f172a",p.font="bold 13px monospace",p.fillText("MIKANO POWER // 415V HIGH YIELD",28,37),p.fillStyle="#22c55e",p.font="bold 14px monospace",p.fillText("OUTPUT: 240V 50Hz [ONLINE]",30,225),this.transformerMaterial=new Nt({map:new Re(u),roughness:.4,metalness:.12,emissive:1409085,emissiveIntensity:.45})}initProceduralMaterials(){this.initKanoMaterials(),this.glassMaterial=new Uc({color:8246268,transparent:!0,opacity:.35,transmission:.9,roughness:.1,metalness:.05}),this.transformerMaterial=new Nt({color:13273604,roughness:.45,metalness:.1,emissive:13273604,emissiveIntensity:.3}),this.sharedBoxGeometry=new it(Mi.TILE_SIZE,Mi.TILE_SIZE,Mi.TILE_DEPTH),this.woodGeometry=new it(Mi.TILE_SIZE,.35,Mi.TILE_DEPTH)}initDebrisGeometries(){this.debrisGeometries.push(new So(.2)),this.debrisGeometries.push(new Eo(.25)),this.debrisGeometries.push(new it(.22,.22,.22))}setTile(t,e,i){if(t<0||t>=this.width||e<0||e>=this.height)return;const n=e*this.width+t;this.tiles[n]=i;let r=0;switch(i){case Z.WOOD_SCAFFOLD:r=40;break;case Z.GLASS_WINDOW:r=15;break;case Z.BRICK_CONCRETE:r=160;break;case Z.STEEL_GIRDER:r=999999;break;case Z.POWER_TRANSFORMER:r=100;break;default:r=0;break}if(this.tileHp[n]=r,this.maxHp[n]=r,this.tileMeshes[n]&&(this.group.remove(this.tileMeshes[n]),this.tileMeshes[n]=null),i===Z.EMPTY)return;let a=this.concreteMaterial,o=this.sharedBoxGeometry,l=0;i===Z.WOOD_SCAFFOLD?(a=this.woodMaterial,o=this.woodGeometry,l=.325):i===Z.GLASS_WINDOW?a=this.glassMaterial:i===Z.STEEL_GIRDER?a=this.steelMaterial:i===Z.POWER_TRANSFORMER&&(a=this.transformerMaterial);const c=new G(o,a);c.position.set(t+.5,e+.5+l,0),c.castShadow=i!==Z.GLASS_WINDOW,c.receiveShadow=!0,this.group.add(c),this.tileMeshes[n]=c}getTile(t,e){return t<0||t>=this.width||e<0?Z.STEEL_GIRDER:e>=this.height?Z.EMPTY:this.tiles[e*this.width+t]}isSolid(t,e){const i=this.getTile(t,e);return i===Z.BRICK_CONCRETE||i===Z.STEEL_GIRDER||i===Z.POWER_TRANSFORMER}isOneWayPlatform(t,e){return this.getTile(t,e)===Z.WOOD_SCAFFOLD}damageTile(t,e,i){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const n=e*this.width+t,r=this.tiles[n];if(r===Z.EMPTY||r===Z.STEEL_GIRDER)return!1;if(this.tileHp[n]-=i,r===Z.BRICK_CONCRETE&&this.tileMeshes[n]){const a=this.tileHp[n]/this.maxHp[n];a<.35?this.tileMeshes[n].material=this.concreteDamagedHeavyMaterial:a<.7&&(this.tileMeshes[n].material=this.concreteDamagedLightMaterial)}return this.tileHp[n]<=0?(this.destroyTile(t,e),!0):!1}destroyTile(t,e){if(t<0||t>=this.width||e<0||e>=this.height)return;const i=e*this.width+t,n=this.tiles[i];n===Z.EMPTY||n===Z.STEEL_GIRDER||(n===Z.POWER_TRANSFORMER&&this.onBlackoutTriggered&&this.onBlackoutTriggered(),this.spawnDebrisBurst(t+.5,e+.5,n),this.tiles[i]=Z.EMPTY,this.tileHp[i]=0,this.tileMeshes[i]&&(this.group.remove(this.tileMeshes[i]),this.tileMeshes[i]=null))}clear(){for(let t=0;t<this.tileMeshes.length;t++)this.tileMeshes[t]&&(this.group.remove(this.tileMeshes[t]),this.tileMeshes[t]=null);this.tiles.fill(Z.EMPTY),this.tileHp.fill(0),this.maxHp.fill(0);for(let t=0;t<this.activeDebris.length;t++)this.debrisGroup.remove(this.activeDebris[t].mesh);for(this.activeDebris=[];this.decorGroup.children.length>0;)this.decorGroup.remove(this.decorGroup.children[0]);this.aviationLights=[]}addPillar(t,e,i){const n=i-e;if(n<=0)return;const r=new it(.55,n,.85),a=this.steelMaterial,o=new G(r,a);o.position.set(t+.5,e+n*.5,-.15),o.castShadow=!0,o.receiveShadow=!0,this.decorGroup.add(o);const l=new it(.85,.25,1.1),c=new G(l,a);c.position.set(t+.5,e+.12,-.15),c.castShadow=!0,this.decorGroup.add(c);const h=new G(l,a);h.position.set(t+.5,i-.12,-.15),h.castShadow=!0,this.decorGroup.add(h)}addAviationLight(t,e){const i=new qt(.06,.08,.7,6),n=new Nt({color:3359061,metalness:.2,roughness:.5}),r=new G(i,n);r.position.set(t+.5,e+.35,.1),r.castShadow=!0,this.decorGroup.add(r);const a=new Hi(.16,8,8),o=new jt({color:15680580,transparent:!0,opacity:1}),l=new G(a,o);l.position.set(t+.5,e+.75,.1),this.decorGroup.add(l),this.aviationLights.push(l)}addNeonSign(t,e,i,n=3718648){const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle="#050806",a.fillRect(0,0,256,64),a.strokeStyle="#22c55e",a.lineWidth=3,a.strokeRect(2,2,252,60),a.fillStyle="#ffffff",a.font="bold 20px monospace",a.textAlign="center",a.textBaseline="middle",a.fillText(i,128,32);const o=new Re(r),l=new ri(3.2,.8),c=new jt({map:o,transparent:!0,opacity:.9}),h=new G(l,c);h.position.set(t,e,-.55),this.decorGroup.add(h)}spawnDebrisBurst(t,e,i){const n=12+Math.floor(Math.random()*6);let r=this.concreteMaterial;i===Z.WOOD_SCAFFOLD?r=this.woodMaterial:i===Z.GLASS_WINDOW?r=this.glassMaterial:i===Z.POWER_TRANSFORMER&&(r=this.transformerMaterial);for(let a=0;a<n;a++){const o=this.debrisGeometries[Math.floor(Math.random()*this.debrisGeometries.length)],l=new G(o,r);l.position.set(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,(Math.random()-.5)*1.2);const c=Math.random()*Math.PI*2,h=4+Math.random()*10,d=3+Math.random()*12;l.castShadow=!0,this.debrisGroup.add(l),this.activeDebris.push({mesh:l,vx:Math.cos(c)*h,vy:Math.sin(c)*h+3,vz:d,rx:(Math.random()-.5)*15,ry:(Math.random()-.5)*15,rz:(Math.random()-.5)*15,life:0,maxLife:1.8+Math.random()*.8})}}updateDebris(t){for(let i=this.activeDebris.length-1;i>=0;i--){const n=this.activeDebris[i];if(n.life+=t,n.vy+=-30*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.vx*=.98,n.vz*=.97,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t,n.mesh.rotation.z+=n.rz*t,n.life>n.maxLife*.7){const r=Math.max(0,1-(n.life-n.maxLife*.7)/(n.maxLife*.3));n.mesh.scale.set(r,r,r)}n.life>=n.maxLife&&(this.debrisGroup.remove(n.mesh),this.activeDebris.splice(i,1))}}update(t){if(this.updateDebris(t),this.animTimer+=t,this.aviationLights.length>0){const e=Math.sin(this.animTimer*5.5)>.15;for(let i=0;i<this.aviationLights.length;i++)this.aviationLights[i].material.opacity=e?1:.12}}}class L0{constructor(t){M(this,"group");M(this,"clouds",[]);M(this,"rainStreaks");M(this,"dustMotes");M(this,"lightningMesh");M(this,"lightningTimer",5);M(this,"lightningDuration",0);M(this,"bridgeHeadlights",[]);M(this,"aviationLights",[]);M(this,"currentTheme",ce.BIRNIN_KANO);M(this,"scene");M(this,"animTime",0);this.scene=t,this.group=new Kt,this.group.name="SkylineBackground",t.add(this.group),this.setTheme(ce.BIRNIN_KANO)}setTheme(t){for(this.currentTheme=t;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}this.clouds=[],this.bridgeHeadlights=[],this.aviationLights=[],this.rainStreaks=void 0,this.dustMotes=void 0,this.lightningMesh=void 0,this.lightningTimer=4+Math.random()*6,this.lightningDuration=0,t===ce.BIRNIN_KANO?(this.createKanoSahelSky(),this.createKanoMegaWallsAndSpires(),this.createTudunDalaHorizon(),this.createKanoDustClouds(),this.createKanoFloatingDustMotes()):(this.createLagosMidnightSky(),this.createThirdMainlandBridgeHorizon(),this.createLagosRainStreaks(),this.createLagosLightningOverlay())}createKanoSahelSky(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1c0d02"),i.addColorStop(.25,"#451a03"),i.addColorStop(.55,"#78350f"),i.addColorStop(.78,"#b45309"),i.addColorStop(.92,"#ea580c"),i.addColorStop(1,"#f59e0b"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=e.createRadialGradient(380,110,8,380,110,110);n.addColorStop(0,"rgba(254, 240, 138, 0.98)"),n.addColorStop(.25,"rgba(251, 191, 36, 0.75)"),n.addColorStop(.65,"rgba(234, 88, 12, 0.35)"),n.addColorStop(1,"rgba(180, 83, 9, 0.0)"),e.fillStyle=n,e.beginPath(),e.arc(380,110,110,0,Math.PI*2),e.fill();const r=new Re(t),a=new ri(320,160),o=new jt({map:r,depthWrite:!1}),l=new G(a,o);l.position.set(40,25,-60),this.group.add(l)}createKanoMegaWallsAndSpires(){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.clearRect(0,0,512,160),e.fillStyle="#451a03",e.beginPath(),e.moveTo(0,160),e.lineTo(0,80),[[30,75],[60,60],[100,60],[130,85],[170,70],[220,50],[270,50],[310,75],[370,65],[420,55],[470,55],[512,80]].forEach(([c,h])=>{e.lineTo(c,h)}),e.lineTo(512,160),e.closePath(),e.fill(),e.strokeStyle="#facc15",e.lineWidth=2,e.shadowColor="#facc15",e.shadowBlur=12,[80,245,445].forEach(c=>{e.beginPath(),e.moveTo(c-12,60),e.lineTo(c,12),e.lineTo(c+12,60),e.stroke(),[24,36,48].forEach(h=>{e.beginPath(),e.ellipse(c,h,8,3,0,0,Math.PI*2),e.stroke()}),e.fillStyle="#fef08a",e.beginPath(),e.arc(c,12,4,0,Math.PI*2),e.fill()}),e.shadowBlur=0;const r=new Re(t),a=new ri(310,65),o=new jt({map:r,transparent:!0,depthWrite:!1}),l=new G(a,o);l.position.set(40,18,-48),this.group.add(l)}createTudunDalaHorizon(){const t=document.createElement("canvas");t.width=512,t.height=140;const e=t.getContext("2d");e.clearRect(0,0,512,140),e.fillStyle="#2e1005",e.beginPath(),e.moveTo(0,140),e.lineTo(0,95),e.quadraticCurveTo(80,65,160,45),e.lineTo(240,42),e.quadraticCurveTo(320,55,390,85),e.lineTo(512,90),e.lineTo(512,140),e.closePath(),e.fill(),e.fillStyle="#1c0903",[40,90,150,310,360,430,470].forEach(l=>{e.fillRect(l,70,3,20);for(let c=-.8;c<=.8;c+=.4)e.beginPath(),e.arc(l+Math.sin(c)*8,70-Math.cos(c)*4,6,0,Math.PI*2),e.fill()});const n=new Re(t),r=new ri(300,55),a=new jt({map:n,transparent:!0,depthWrite:!1}),o=new G(r,a);o.position.set(40,14,-38),this.group.add(o)}createKanoDustClouds(){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d");e.fillStyle="rgba(180, 83, 9, 0.28)";for(let r=0;r<5;r++)e.beginPath(),e.arc(60+r*35,64,35,0,Math.PI*2),e.fill();const i=new Re(t),n=new jt({map:i,transparent:!0,depthWrite:!1});for(let r=0;r<6;r++){const a=new ri(48,20),o=new G(a,n);o.position.set(r*35-15,26+r%2*6,-32),o.speed=.6+r%3*.4,this.group.add(o),this.clouds.push(o)}}createKanoFloatingDustMotes(){const e=new we,i=new Float32Array(900*3);for(let r=0;r<900;r++)i[r*3+0]=Math.random()*120-15,i[r*3+1]=Math.random()*55,i[r*3+2]=-5+(Math.random()-.5)*35;e.setAttribute("position",new ti(i,3));const n=new Za({color:16436245,size:.35,transparent:!0,opacity:.65,blending:Ts});this.dustMotes=new Fl(e,n),this.group.add(this.dustMotes)}createLagosMidnightSky(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#040706"),i.addColorStop(.4,"#090f0c"),i.addColorStop(.75,"#0f172a"),i.addColorStop(1,"#1e293b"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=new Re(t),r=new ri(320,160),a=new jt({map:n,depthWrite:!1}),o=new G(r,a);o.position.set(40,25,-60),this.group.add(o)}createThirdMainlandBridgeHorizon(){const t=document.createElement("canvas");t.width=512,t.height=140;const e=t.getContext("2d");e.clearRect(0,0,512,140),e.fillStyle="#060b08",e.fillRect(0,75,512,65),[[20,48,26],[65,38,32],[130,28,48],[195,45,35],[260,32,28],[340,30,44],[430,42,32]].forEach(([l,c,h])=>{e.fillRect(l,75-c,h,c)}),e.strokeStyle="#008751",e.lineWidth=2,[90,230,390].forEach(l=>{e.beginPath(),e.moveTo(l,75),e.lineTo(l,20),e.stroke(),e.beginPath(),e.moveTo(l,25),e.lineTo(l-50,75),e.moveTo(l,25),e.lineTo(l+50,75),e.stroke()}),e.fillStyle="rgba(56, 189, 248, 0.85)",e.fillRect(140,40,42,14),e.fillStyle="#ffffff",e.font="bold 7px monospace",e.fillText("EKO TOLL",144,50),e.fillStyle="rgba(34, 197, 94, 0.85)",e.fillRect(350,42,48,14),e.fillStyle="#ffffff",e.fillText("SECTOR 234",354,52);for(let l=8;l<500;l+=14)e.fillStyle="#f59e0b",e.fillRect(l,76,5,2),e.fillStyle="#ef4444",e.fillRect(l+6,79,4,2);const n=new Re(t),r=new ri(300,50),a=new jt({map:n,transparent:!0,depthWrite:!1}),o=new G(r,a);o.position.set(40,14,-40),this.group.add(o),[90,230,390].forEach(l=>{const c=new Hi(.25,6,6),h=new jt({color:15680580,transparent:!0,opacity:1}),d=new G(c,h),u=40+(l-256)/512*300;d.position.set(u,23.5,-39.5),this.group.add(d),this.aviationLights.push(d)})}createLagosRainStreaks(){const e=new we,i=new Float32Array(650*3);for(let r=0;r<650;r++)i[r*3+0]=(Math.random()-.2)*130,i[r*3+1]=Math.random()*65,i[r*3+2]=-12+(Math.random()-.5)*30;e.setAttribute("position",new ti(i,3));const n=new Za({color:3718648,size:.32,transparent:!0,opacity:.65});this.rainStreaks=new Fl(e,n),this.group.add(this.rainStreaks)}createLagosLightningOverlay(){const t=new ri(340,170),e=new jt({color:9684477,transparent:!0,opacity:0,depthWrite:!1});this.lightningMesh=new G(t,e),this.lightningMesh.position.set(40,25,-54),this.group.add(this.lightningMesh)}update(t){this.animTime+=t;for(let e=0;e<this.clouds.length;e++){const i=this.clouds[e],n=i.speed||.8;i.position.x+=n*t,i.position.x>140&&(i.position.x=-60)}if(this.dustMotes){const e=this.dustMotes.geometry.attributes.position.array;for(let i=0;i<e.length/3;i++)e[i*3+0]+=(1.8+Math.sin(this.animTime*1.5+i))*t,e[i*3+1]+=Math.sin(this.animTime*2+i*.5)*.8*t,e[i*3+0]>110&&(e[i*3+0]=-15,e[i*3+1]=Math.random()*55);this.dustMotes.geometry.attributes.position.needsUpdate=!0}if(this.rainStreaks){const e=this.rainStreaks.geometry.attributes.position.array;for(let i=0;i<e.length/3;i++)e[i*3+1]-=48*t,e[i*3+0]-=15*t,e[i*3+1]<0&&(e[i*3+1]=60,e[i*3+0]=Math.random()*125-15);this.rainStreaks.geometry.attributes.position.needsUpdate=!0}if(this.aviationLights.length>0){const e=Math.sin(this.animTime*5)>.2;for(let i=0;i<this.aviationLights.length;i++)this.aviationLights[i].material.opacity=e?1:.15}if(this.currentTheme===ce.LAGOS_GOSLOW&&this.lightningMesh&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningDuration=.22,this.lightningTimer=8+Math.random()*8),this.lightningDuration>0)){this.lightningDuration-=t;const e=this.lightningMesh.material,i=Math.sin(this.lightningDuration*35);e.opacity=Math.max(0,i*.35*(this.lightningDuration/.22))}}}class bs{static generateBirninKano(t){t.setMapTheme(ce.BIRNIN_KANO);const e=t.width,i=t.height;for(let n=0;n<e;n++)t.setTile(n,0,Z.STEEL_GIRDER),t.setTile(n,1,Z.STEEL_GIRDER);for(let n=0;n<i;n++)t.setTile(0,n,Z.STEEL_GIRDER),t.setTile(e-1,n,Z.STEEL_GIRDER);for(let n=1;n<e-1;n++)t.setTile(n,2,Z.BRICK_CONCRETE);t.setTile(16,3,Z.WOOD_SCAFFOLD),t.setTile(17,3,Z.BRICK_CONCRETE),t.setTile(18,3,Z.BRICK_CONCRETE),t.setTile(19,3,Z.WOOD_SCAFFOLD),t.setTile(60,3,Z.WOOD_SCAFFOLD),t.setTile(61,3,Z.BRICK_CONCRETE),t.setTile(62,3,Z.BRICK_CONCRETE),t.setTile(63,3,Z.WOOD_SCAFFOLD);for(let n=0;n<5;n++)t.setTile(1+n,4+n*2,Z.WOOD_SCAFFOLD),t.setTile(e-2-n,4+n*2,Z.WOOD_SCAFFOLD);for(let n=32;n<=48;n++)t.setTile(n,7,Z.BRICK_CONCRETE);for(let n=3;n<=7;n++)t.setTile(32,n,Z.BRICK_CONCRETE),t.setTile(48,n,Z.BRICK_CONCRETE);t.addPillar(32,2,7),t.addPillar(40,2,7),t.addPillar(48,2,7);for(let n=6;n<=22;n++)t.setTile(n,12,Z.BRICK_CONCRETE);for(let n=8;n<=20;n++)t.setTile(n,22,Z.BRICK_CONCRETE);t.setTile(8,23,Z.BRICK_CONCRETE),t.setTile(20,23,Z.BRICK_CONCRETE),t.addPillar(8,2,12),t.addPillar(20,2,12),t.addPillar(14,12,22);for(let n=28;n<=52;n++)n>=32&&n<=34||n>=46&&n<=48?t.setTile(n,16,Z.WOOD_SCAFFOLD):t.setTile(n,16,Z.BRICK_CONCRETE);t.addPillar(28,7,16),t.addPillar(52,7,16);for(let n=34;n<=46;n++)t.setTile(n,26,Z.BRICK_CONCRETE);t.setTile(34,27,Z.BRICK_CONCRETE),t.setTile(46,27,Z.BRICK_CONCRETE),t.addPillar(40,16,26),t.setTile(23,13,Z.WOOD_SCAFFOLD),t.setTile(24,14,Z.WOOD_SCAFFOLD),t.setTile(25,15,Z.WOOD_SCAFFOLD),t.setTile(26,16,Z.WOOD_SCAFFOLD),t.setTile(27,16,Z.WOOD_SCAFFOLD);for(let n=58;n<=73;n++)t.setTile(n,13,Z.BRICK_CONCRETE);for(let n=60;n<=72;n++)t.setTile(n,24,Z.BRICK_CONCRETE);for(let n=62;n<=72;n++)t.setTile(n,33,Z.STEEL_GIRDER);for(let n=34;n<=46;n++)t.setTile(n,42,Z.STEEL_GIRDER);t.addPillar(60,2,13),t.addPillar(72,2,13),t.addPillar(66,13,24),t.addPillar(67,24,33),t.addAviationLight(67,33),t.addAviationLight(34,42),t.addAviationLight(46,42),t.addNeonSign(40,18.5,"GIDAN MAAJI // TREASURY",16436245),t.addNeonSign(66,28,"DALA BASTION",16096779),t.setTile(53,16,Z.WOOD_SCAFFOLD),t.setTile(54,15,Z.WOOD_SCAFFOLD),t.setTile(55,14,Z.WOOD_SCAFFOLD),t.setTile(56,13,Z.WOOD_SCAFFOLD),t.setTile(57,13,Z.WOOD_SCAFFOLD);for(let n=20;n<=28;n++)t.setTile(n,22,Z.WOOD_SCAFFOLD);for(let n=47;n<=58;n++)t.setTile(n,25,Z.WOOD_SCAFFOLD);t.setTile(62,25,Z.GLASS_WINDOW),t.setTile(72,25,Z.GLASS_WINDOW),t.setTile(12,13,Z.POWER_TRANSFORMER),t.setTile(66,25,Z.POWER_TRANSFORMER)}static generateLagosGoSlow(t){t.setMapTheme(ce.LAGOS_GOSLOW);const e=t.width,i=t.height;for(let a=0;a<e;a++)t.setTile(a,0,Z.STEEL_GIRDER),t.setTile(a,1,Z.STEEL_GIRDER);for(let a=0;a<i;a++)t.setTile(0,a,Z.STEEL_GIRDER),t.setTile(e-1,a,Z.STEEL_GIRDER);for(let a=1;a<e-1;a++)t.setTile(a,2,Z.BRICK_CONCRETE);const n=(a,o,l,c)=>{for(let h=a;h<a+l;h++){for(let d=o;d<o+c;d++)t.setTile(h,d,Z.BRICK_CONCRETE);t.setTile(h,o+c,Z.WOOD_SCAFFOLD)}};n(4,3,6,2),n(14,3,7,3),n(24,3,6,2),n(46,3,6,2),n(56,3,7,3),n(67,3,6,2),[10,11,21,22,52,53,63,64].forEach(a=>{t.setTile(a,4,Z.WOOD_SCAFFOLD)});for(let a=14;a<=66;a++)a%6===0?(t.setTile(a,18,Z.STEEL_GIRDER),t.setTile(a,19,Z.STEEL_GIRDER),t.setTile(a,20,Z.STEEL_GIRDER)):t.setTile(a,20,Z.BRICK_CONCRETE);t.addPillar(18,2,20),t.addPillar(30,2,20),t.addPillar(42,2,20),t.addPillar(54,2,20),t.addPillar(66,2,20),t.setTile(12,10,Z.WOOD_SCAFFOLD),t.setTile(13,14,Z.WOOD_SCAFFOLD),t.setTile(67,10,Z.WOOD_SCAFFOLD),t.setTile(68,14,Z.WOOD_SCAFFOLD);for(let a=5;a<=18;a++)t.setTile(a,10,Z.BRICK_CONCRETE),t.setTile(a,26,Z.BRICK_CONCRETE);for(let a=8;a<=16;a++)t.setTile(a,32,Z.STEEL_GIRDER);for(let a=62;a<=74;a++)t.setTile(a,10,Z.BRICK_CONCRETE),t.setTile(a,26,Z.BRICK_CONCRETE);for(let a=64;a<=72;a++)t.setTile(a,32,Z.STEEL_GIRDER);for(let a=32;a<=48;a++)t.setTile(a,36,Z.STEEL_GIRDER);for(let a=19;a<=31;a++)t.setTile(a,28,Z.WOOD_SCAFFOLD);for(let a=49;a<=61;a++)t.setTile(a,28,Z.WOOD_SCAFFOLD);t.addAviationLight(12,33),t.addAviationLight(68,33),t.addAviationLight(32,37),t.addAviationLight(48,37),t.addNeonSign(40,22.5,"THIRD MAINLAND // FLYOVER",3718648),t.addNeonSign(12,12.5,"LOS PORT TERMINAL",2278750),t.addNeonSign(68,12.5,"APAPA SEC 234",440020),t.setTile(3,3,Z.POWER_TRANSFORMER),t.setTile(76,3,Z.POWER_TRANSFORMER)}static generateOutpostArena(t){bs.generateBirninKano(t)}static generateApapaTerminal(t){bs.generateLagosGoSlow(t)}}class D0{constructor(t){M(this,"scene");M(this,"activeSonarRings",[]);M(this,"sonarMeshes",[]);M(this,"ringGeom");this.scene=t;const e=[],i=32;for(let n=0;n<=i;n++){const r=n/i*Math.PI*2;e.push(new I(Math.cos(r),Math.sin(r),0))}this.ringGeom=new we().setFromPoints(e)}emitSonarRing(t,e,i,n=7){const r=new Ar({color:16777215,transparent:!0,opacity:.9}),a=new r0(this.ringGeom,r);a.position.set(t,e,.2),this.scene.add(a),this.sonarMeshes.push(a),this.activeSonarRings.push({x:t,y:e,radius:.2,maxRadius:n,alpha:1,color:"#ffffff",sourceId:i})}checkPlayerOcclusion(t,e,i){const n=Math.floor(t.actor.position.x),r=Math.floor(t.actor.position.y+.95),a=Math.floor(e.actor.position.x),o=Math.floor(e.actor.position.y+.95),l=Math.abs(a-n),c=Math.abs(o-r),h=n<a?1:-1,d=r<o?1:-1;let u=l-c,p=n,g=r;for(;p!==a||g!==o;){if((p!==n||g!==r)&&(p!==a||g!==o)&&i.isSolid(p,g))return!0;const v=2*u;v>-c&&(u-=c,p+=h),v<l&&(u+=l,g+=d)}return!1}update(t){for(let e=this.activeSonarRings.length-1;e>=0;e--){const i=this.activeSonarRings[e],n=this.sonarMeshes[e];i.radius+=t*10,i.alpha=Math.max(0,1-i.radius/i.maxRadius),n.scale.set(i.radius,i.radius,1),n.material.opacity=i.alpha,i.radius>=i.maxRadius&&(this.scene.remove(n),n.material.dispose(),this.activeSonarRings.splice(e,1),this.sonarMeshes.splice(e,1))}}}class O0{constructor(t){M(this,"scene");M(this,"ziplines",[]);M(this,"isBlackoutActive",!1);M(this,"blackoutTimer",0);M(this,"transformerRepairTimer",0);M(this,"vaultDoorMesh",null);M(this,"isVaultOpen",!1);this.scene=t,this.createZipline(22,32,43,18.5),this.createZipline(48,40,64,26.5),this.createVaultDoor(40,2)}createZipline(t,e,i,n){const r=new we().setFromPoints([new I(t,e,0),new I(i,n,0)]),a=new Ar({color:16436245,linewidth:2}),o=new Mo(r,a);this.scene.add(o),this.ziplines.push({startX:t,startY:e,endX:i,endY:n,lineMesh:o})}createVaultDoor(t,e){const i=new it(4,5,1.2),n=new Nt({color:3359061,emissive:988970,roughness:.35,metalness:.15});this.vaultDoorMesh=new G(i,n),this.vaultDoorMesh.position.set(t,e+2.5,0),this.vaultDoorMesh.castShadow=!0,this.vaultDoorMesh.receiveShadow=!0,this.scene.add(this.vaultDoorMesh)}triggerBlackout(){this.isBlackoutActive=!0,this.blackoutTimer=12,this.transformerRepairTimer=35}checkZiplineInteraction(t){if(!(t.isJetFlying||t.actor.isJetFlying||t.stats.isDead))for(let e=0;e<this.ziplines.length;e++){const i=this.ziplines[e],n=t.actor.position.x,r=t.actor.position.y;if(n>=Math.min(i.startX,i.endX)+.5&&n<=Math.max(i.startX,i.endX)-1.2){const a=(n-i.startX)/(i.endX-i.startX),o=i.startY+a*(i.endY-i.startY);if(t.actor.velocity.y<-.3&&Math.abs(r-o)<.5){const l=i.endX>i.startX?1:-1;t.actor.velocity.x=l*16,t.actor.velocity.y=(i.endY-i.startY)*.35,t.mesh.triggerThrusterBurst(!0)}}}}update(t,e){this.isBlackoutActive&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&(this.isBlackoutActive=!1,e(!1))),this.transformerRepairTimer>0&&(this.transformerRepairTimer-=t)}}class U0{constructor(t){M(this,"group");M(this,"casings",[]);M(this,"sparks",[]);M(this,"shockwaves",[]);M(this,"smokePuffs",[]);M(this,"meleeSlashes",[]);M(this,"casingGeom");M(this,"casingMat");M(this,"sparkGeom");M(this,"sparkMat");M(this,"smokeGeom");M(this,"smokeMat");M(this,"shockwaveGeom");M(this,"slashGeom");M(this,"slashMat");this.group=new Kt,t.add(this.group),this.casingGeom=new qt(.025,.025,.1,8),this.casingMat=new Nt({color:16096779,roughness:.25,metalness:.1,emissive:14251782,emissiveIntensity:.5}),this.sparkGeom=new Hi(.06,6,6),this.sparkMat=new jt({color:16755200,transparent:!0,opacity:.95}),this.smokeGeom=new Hi(.22,7,7),this.smokeMat=new jt({color:14870768,transparent:!0,opacity:.65,depthWrite:!1}),this.shockwaveGeom=new Ei(.2,.5,24),this.slashGeom=new Ei(1.6,3.4,32,1,-Math.PI*.44,Math.PI*.88),this.slashMat=new jt({color:3718648,transparent:!0,opacity:.95,side:Ue,blending:Ts,depthWrite:!1})}spawnBrassCasing(t,e,i){const n=new G(this.casingGeom,this.casingMat);n.position.set(t,e,.15),this.group.add(n);const r=i?-1:1;this.casings.push({mesh:n,vx:r*(2.5+Math.random()*3),vy:5+Math.random()*4,vz:(Math.random()-.5)*3.5,rx:Math.random()*25,ry:Math.random()*25,rz:Math.random()*25,life:0})}spawnSparks(t,e,i,n,r=8){for(let a=0;a<r;a++){const o=new G(this.sparkGeom,this.sparkMat);o.position.set(t,e,(Math.random()-.5)*.4),this.group.add(o);const l=Math.atan2(n,i)+(Math.random()-.5)*1.5,c=5+Math.random()*12;this.sparks.push({mesh:o,vx:Math.cos(l)*c,vy:Math.sin(l)*c,vz:(Math.random()-.5)*7,life:0,maxLife:.28+Math.random()*.25})}}spawnExplosionShockwave(t,e){const i=new jt({color:16733440,transparent:!0,opacity:.9,side:Ue}),n=new G(this.shockwaveGeom,i);n.position.set(t,e,.1),this.group.add(n),this.shockwaves.push({mesh:n,radius:.5,maxRadius:5.5,alpha:1})}spawnJetpackSmoke(t,e,i=0,n=-2.5){if(this.smokePuffs.length>25){const a=this.smokePuffs.shift();a&&this.group.remove(a.mesh)}const r=new G(this.smokeGeom,this.smokeMat);r.position.set(t+(Math.random()-.5)*.25,e+(Math.random()-.5)*.15,-.1),this.group.add(r),this.smokePuffs.push({mesh:r,vx:i*.2+(Math.random()-.5)*1.5,vy:n+(Math.random()-.5)*1,life:0,maxLife:.38+Math.random()*.15})}spawnMeleeSlashArc(t,e,i,n=!1){const r=this.slashMat.clone();n&&r.color.setHex(16096779);const a=new G(this.slashGeom,r);a.position.set(t+Math.cos(i)*.7,e+.95+Math.sin(i)*.7,.25),a.rotation.z=i,a.scale.set(.65,.65,1),this.group.add(a),this.meleeSlashes.push({mesh:a,life:0,maxLife:.22,startScale:.65});const o=Math.cos(i),l=Math.sin(i);this.spawnSparks(t+o*2,e+.95+l*2,o,l,8)}update(t,e){for(let n=this.casings.length-1;n>=0;n--){const r=this.casings[n];r.life+=t,r.vy+=-30*t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t,r.mesh.position.z+=r.vz*t,r.mesh.rotation.x+=r.rx*t,r.mesh.rotation.y+=r.ry*t;const a=Math.floor(r.mesh.position.x),o=Math.floor(r.mesh.position.y);e.isSolid(a,o)&&r.vy<0&&(r.vy=-r.vy*.45,r.vx*=.6,r.vz*=.6),(r.life>1.5||this.casings.length>30)&&(this.group.remove(r.mesh),this.casings.splice(n,1))}for(let n=this.sparks.length-1;n>=0;n--){const r=this.sparks[n];r.life+=t,r.vy+=-30*.5*t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t,r.mesh.position.z+=r.vz*t;const a=Math.max(0,1-r.life/r.maxLife);r.mesh.scale.set(a,a,a),(r.life>=r.maxLife||this.sparks.length>35)&&(this.group.remove(r.mesh),this.sparks.splice(n,1))}for(let n=this.shockwaves.length-1;n>=0;n--){const r=this.shockwaves[n];r.radius+=t*16,r.alpha=Math.max(0,1-r.radius/r.maxRadius),r.mesh.scale.set(r.radius,r.radius,1),r.mesh.material.opacity=r.alpha,r.radius>=r.maxRadius&&(this.group.remove(r.mesh),r.mesh.material.dispose(),this.shockwaves.splice(n,1))}for(let n=this.smokePuffs.length-1;n>=0;n--){const r=this.smokePuffs[n];r.life+=t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t;const a=r.life/r.maxLife,o=Math.max(0,(1-a)*(.8+a*2.2));r.mesh.scale.set(o,o,o),r.life>=r.maxLife&&(this.group.remove(r.mesh),this.smokePuffs.splice(n,1))}for(let n=this.meleeSlashes.length-1;n>=0;n--){const r=this.meleeSlashes[n];r.life+=t;const a=r.life/r.maxLife,o=r.startScale+a*.75;r.mesh.scale.set(o,o,1),r.mesh.material.opacity=Math.max(0,(1-a)*.95),r.life>=r.maxLife&&(this.group.remove(r.mesh),r.mesh.material.dispose(),this.meleeSlashes.splice(n,1))}}}const be=class be{constructor(t,e,i,n,r,a,o=!1,l,c){M(this,"mesh");M(this,"vx");M(this,"vy");M(this,"weaponDef");M(this,"shooterId");M(this,"isDead",!1);M(this,"life",0);M(this,"maxLife",3);M(this,"bouncesLeft",0);M(this,"piercingLeft",0);M(this,"isBunkerRpg",!1);M(this,"embeddedTimer",-1);M(this,"originX");M(this,"originY");M(this,"isFirstFrame",!0);M(this,"hitPlayerIds",new Set);be.initSharedResources(),this.weaponDef=e,this.shooterId=i,this.bouncesLeft=e.bounces||0,this.piercingLeft=e.piercing||0,this.isBunkerRpg=e.id===z.BUNKER_RPG,this.originX=l,this.originY=c;const h=a+(Math.random()-.5)*e.spread;this.vx=Math.cos(h)*e.speed,this.vy=Math.sin(h)*e.speed;let d,u;e.id===z.RICOCHET_SAW?(d=be.sawGeom,u=be.sawMat):e.id===z.RAIL_SNIPER?(d=be.sniperGeom,u=be.sniperMat):e.id===z.BUNKER_RPG?(d=be.rpgGeom,u=be.rpgMat):(d=be.bulletGeom,u=o?be.enemyBulletMat:be.friendlyBulletMat),this.mesh=new G(d,u),this.mesh.position.set(n,r,.1),this.mesh.rotation.z=h,t.add(this.mesh)}static initSharedResources(){this.bulletGeom||(this.sawGeom=new qt(.32,.32,.06,12),this.sawGeom.rotateX(Math.PI*.5),this.sawMat=new Nt({color:3718648,emissive:165063,emissiveIntensity:4,metalness:.1}),this.sniperGeom=new qt(.06,.06,1.6,8),this.sniperGeom.rotateZ(Math.PI*.5),this.sniperMat=new Nt({color:16711748,emissive:16711748,emissiveIntensity:4.5}),this.rpgGeom=new Mn(.16,.6,10),this.rpgGeom.rotateZ(-Math.PI*.5),this.rpgMat=new Nt({color:16733440,emissive:16724736,emissiveIntensity:3.5}),this.bulletGeom=new qt(.045,.045,.5,6),this.bulletGeom.rotateZ(Math.PI*.5),this.friendlyBulletMat=new Nt({color:62206,emissive:62206,emissiveIntensity:3.5}),this.enemyBulletMat=new Nt({color:16719446,emissive:16719446,emissiveIntensity:3.5}))}update(t,e,i,n,r,a){if(this.isDead)return;if(this.life+=t,this.life>=this.maxLife){this.isDead=!0;return}if(this.embeddedTimer>0){this.embeddedTimer-=t,this.embeddedTimer<=0&&(a(this.mesh.position.x,this.mesh.position.y),this.isDead=!0);return}const o=this.mesh.position.x,l=this.mesh.position.y,c=this.isFirstFrame&&this.originX!==void 0?this.originX:o,h=this.isFirstFrame&&this.originY!==void 0?this.originY:l,d=this.isFirstFrame;this.isFirstFrame=!1;const u=o+this.vx*t,p=l+this.vy*t;this.mesh.position.x=u,this.mesh.position.y=p,this.weaponDef.id===z.RICOCHET_SAW&&(this.mesh.rotation.z+=t*30);const g=u-c,v=p-h,m=g*g+v*v;for(let L=0;L<i.length;L++){const P=i[L];if(P.stats.id===this.shooterId||P.stats.isDead||this.hitPlayerIds.has(P.stats.id))continue;const S=P.actor.position.x,R=P.actor.position.y+.95;let x=0;m>1e-4&&(x=((S-c)*g+(R-h)*v)/m,x=Math.max(0,Math.min(1,x)));const _=c+x*g,A=h+x*v,D=S-_,O=R-A;if(Math.abs(D)<.8&&Math.abs(O)<1.25)if(this.hitPlayerIds.add(P.stats.id),r(P,this.weaponDef.damage),this.isBunkerRpg&&a(_,A),this.piercingLeft>0)this.piercingLeft--;else{this.isDead=!0;return}}const f=u-o,T=p-l,w=f*f+T*T,y=Math.max(2,Math.ceil(Math.sqrt(w)));for(let L=1;L<=y;L++){const P=L/y,S=o+f*P,R=l+T*P,x=Math.floor(S),_=Math.floor(R);if(e.isSolid(x,_)){if(d&&this.originX!==void 0&&this.originY!==void 0&&Math.hypot(S-this.originX,R-this.originY)<.65)continue;const A=this.weaponDef.damage*this.weaponDef.wallDmgMultiplier;if(n(x,_,A),this.bouncesLeft>0){this.bouncesLeft--;const D=Math.floor(o),O=Math.floor(l);D!==x&&(this.vx=-this.vx),O!==_&&(this.vy=-this.vy);return}if(this.piercingLeft>0){this.piercingLeft--;return}if(this.isBunkerRpg&&this.embeddedTimer<0){this.vx=0,this.vy=0,this.embeddedTimer=.35;return}this.isDead=!0;return}}}destroy(t){t.remove(this.mesh)}};M(be,"sawGeom",null),M(be,"sawMat",null),M(be,"sniperGeom",null),M(be,"sniperMat",null),M(be,"rpgGeom",null),M(be,"rpgMat",null),M(be,"bulletGeom",null),M(be,"friendlyBulletMat",null),M(be,"enemyBulletMat",null);let Qa=be;const pi=class pi{constructor(t,e,i,n,r,a){M(this,"mesh");M(this,"ledLight");M(this,"type");M(this,"ownerId");M(this,"isStuck",!1);M(this,"isDetonated",!1);M(this,"vx",0);M(this,"vy",0);M(this,"timer",0);pi.initSharedResources(),this.type=e,this.ownerId=i;const o=28;this.vx=Math.cos(a)*o,this.vy=Math.sin(a)*o+6.5;const l=e==="c4"?pi.c4Mat:e==="emp"?pi.empMat:pi.teargasMat;this.mesh=new G(pi.sharedGeom,l),this.mesh.position.set(n,r,0),t.add(this.mesh);const c=e==="c4"?15680580:e==="emp"?3718648:2278750;this.ledLight=new h0(c,2,4),this.mesh.add(this.ledLight)}static initSharedResources(){this.sharedGeom||(this.sharedGeom=new it(.35,.22,.2),this.c4Mat=new Nt({color:4144966,roughness:.4}),this.empMat=new Nt({color:165063,roughness:.4}),this.teargasMat=new Nt({color:1409085,roughness:.4}))}update(t,e){if(this.isDetonated)return;this.timer+=t;const i=Math.sin(this.timer*16)>0;if(this.ledLight.intensity=i?3.5:.2,!this.isStuck){this.vy+=-24*t,this.mesh.position.x+=this.vx*t,this.mesh.position.y+=this.vy*t,this.mesh.rotation.z+=t*6;const n=Math.floor(this.mesh.position.x),r=Math.floor(this.mesh.position.y);e.isSolid(n,r)&&(this.isStuck=!0,this.vx=0,this.vy=0)}}detonate(t,e,i,n,r,a){if(this.isDetonated)return;this.isDetonated=!0,i();const o=this.mesh.position.x,l=this.mesh.position.y;if(this.type==="c4"){const c=Math.floor(o),h=Math.floor(l);for(let d=-2;d<=2;d++)for(let u=-2;u<=2;u++)t.destroyTile(c+u,h+d);r&&Math.hypot(o-40,l-3.5)<6.5&&r(450),e.forEach(d=>{const u=d.actor.position.distanceTo(this.mesh.position);if(u<10){if(n!=null&&n.stats.team&&d.stats.team&&n.stats.team===d.stats.team)return;const p=Math.round(240*(1-u/10));d.takeDamage(p,n)&&a&&a(d,n)}})}else this.type==="emp"&&e.forEach(c=>{c.actor.position.distanceTo(this.mesh.position)<8&&(c.stats.rigCooldownTimer=8)})}destroy(t){this.ledLight&&(this.mesh.remove(this.ledLight),this.ledLight.dispose()),t.remove(this.mesh)}};M(pi,"sharedGeom",null),M(pi,"c4Mat",null),M(pi,"empMat",null),M(pi,"teargasMat",null);let to=pi;class N0{constructor(t,e,i){M(this,"scene");M(this,"projectiles",[]);M(this,"throwables",[]);M(this,"particles");M(this,"audio");M(this,"onDamageDealt");M(this,"onVaultHit");this.scene=t,this.particles=e,this.audio=i}fireWeapon(t,e,i,n,r,a,o){if(t.stats.isDead||t.stats.isLocalPlayer&&(t.fireCooldown>0||t.reloadTimer>0))return!1;const l=Ye[t.stats.activeWeapon];if(l.id===z.CUTLASS)return t.fireCooldown=l.fireInterval,this.audio.playMeleeSwish(),this.particles.spawnMeleeSlashArc(t.actor.position.x,t.actor.position.y,e),t.performMeleeLunge(e,i,(f,T)=>{const w=f.takeDamage(T,t);this.audio.playGunshot("saw"),this.particles.spawnSparks(f.actor.position.x,f.actor.position.y+1,5,5,12),this.onDamageDealt&&this.onDamageDealt(f.actor.position.x,f.actor.position.y+1.5,`SLICED -${T}!`,"#f59e0b"),w&&(t.stats.cash+=5e4,this.onDamageDealt&&this.onDamageDealt(f.actor.position.x,f.actor.position.y+2,"BOUNTY STEAL! +₦50,000","#10b981"),n&&n(f,t))},r),Math.hypot(t.actor.position.x-40,t.actor.position.y-3.5)<4.8&&this.onVaultHit&&(this.onVaultHit(150),this.audio.playGunshot("saw"),this.particles.spawnSparks(40,3.5,0,1,15),this.onDamageDealt&&this.onDamageDealt(40,5,"VAULT MELEE BREACH -150!","#f59e0b")),!0;const c=t.stats.ammo[l.id]??0;if(t.stats.isLocalPlayer&&c<=0)return t.reloadWeapon(),!1;l.id!==z.PISTOL_XAG9&&t.stats.isLocalPlayer&&t.stats.ammo[l.id]--,t.fireCooldown=l.fireInterval,t.mesh.triggerRecoilKick(l.recoilKick);const h=Math.cos(e)>=0;this.particles.spawnBrassCasing(t.actor.position.x,t.actor.position.y+.95,h);const d=l.pellets||1,u=a!==void 0?a:t.actor.position.x,p=o!==void 0?o:t.actor.position.y+.95,g=u+Math.cos(e)*.25,v=p+Math.sin(e)*.25;for(let m=0;m<d;m++){const f=new Qa(this.scene,l,t.stats.id,g,v,e,t.stats.isBot,u,p);this.projectiles.push(f)}return l.id===z.SHOTGUN_AA12?this.audio.playGunshot("shotgun"):l.id===z.RAIL_SNIPER?this.audio.playGunshot("sniper"):l.id===z.RICOCHET_SAW?this.audio.playGunshot("saw"):l.id===z.VULCAN_MINIGUN?this.audio.playGunshot("minigun"):l.id===z.PISTOL_XAG9||l.id===z.REVOLVER_JUDGE?this.audio.playGunshot("pistol"):this.audio.playGunshot("rifle"),l.id===z.VULCAN_MINIGUN&&(t.actor.velocity.x-=Math.cos(e)*5,t.actor.velocity.y-=Math.sin(e)*5),!0}handleThrowable(t,e,i,n,r){const a=this.throwables.find(o=>o.ownerId===t.stats.id&&o.type==="c4"&&!o.isDetonated);if(a){a.detonate(i,n,()=>{this.audio.playExplosion(),this.particles.spawnExplosionShockwave(a.mesh.position.x,a.mesh.position.y),i.spawnDebrisBurst(a.mesh.position.x,a.mesh.position.y,Z.BRICK_CONCRETE),this.onDamageDealt&&this.onDamageDealt(a.mesh.position.x,a.mesh.position.y+1.5,"C4 DETONATED! 💥","#ef4444")},t,this.onVaultHit,r);return}if(t.stats.c4Count>0){t.stats.c4Count--;const o=new to(this.scene,"c4",t.stats.id,t.actor.position.x,t.actor.position.y+.95,e);this.throwables.push(o),this.audio.playC4Beep()}}update(t,e,i,n){for(let r=this.projectiles.length-1;r>=0;r--){const a=this.projectiles[r];if(this.onVaultHit&&!a.isDead&&Math.hypot(a.mesh.position.x-40,a.mesh.position.y-3.5)<4.5){const l=a.weaponDef.damage*a.weaponDef.wallDmgMultiplier;this.onVaultHit(l),this.particles.spawnSparks(a.mesh.position.x,a.mesh.position.y,-a.vx,-a.vy,8),a.isDead=!0,this.onDamageDealt&&this.onDamageDealt(40,5,`VAULT -${Math.round(l)}`,"#f59e0b")}a.update(t,e,i,(o,l,c)=>{const h=e.damageTile(o,l,c);if(this.particles.spawnSparks(o+.5,l+.5,-a.vx,-a.vy,5),h){const d=i.find(u=>u.stats.id===a.shooterId);d&&d.stats.wallsDestroyed++}},(o,l)=>{const c=i.find(d=>d.stats.id===a.shooterId);if(c&&c.stats.team&&o.stats.team&&c.stats.team===o.stats.team)return;const h=o.takeDamage(l,c);if(this.particles.spawnSparks(o.actor.position.x,o.actor.position.y+1,-a.vx,-a.vy,10),this.onDamageDealt){const d=l>50;this.onDamageDealt(o.actor.position.x,o.actor.position.y+1.4,d?`CRIT -${l}!`:`-${l}`,d?"#f59e0b":"#ef4444")}h&&(this.onDamageDealt&&c&&this.onDamageDealt(o.actor.position.x,o.actor.position.y+2,"ELIMINATED! +₦15,000","#10b981"),n(o,c))},(o,l)=>{this.audio.playExplosion(),this.particles.spawnExplosionShockwave(o,l),e.spawnDebrisBurst(o,l,Z.BRICK_CONCRETE),this.onVaultHit&&Math.hypot(o-40,l-3.5)<7&&(this.onVaultHit(400),this.onDamageDealt&&this.onDamageDealt(40,5.5,"VAULT BLAST -400!","#f97316")),i.forEach(c=>{const h=Math.hypot(c.actor.position.x-o,c.actor.position.y-l);if(h<6){const d=Math.round(120*(1-h/6)),u=c.takeDamage(d);this.onDamageDealt&&this.onDamageDealt(c.actor.position.x,c.actor.position.y+1.2,`-${d}`,"#f97316"),u&&n(c)}})}),a.isDead&&(a.destroy(this.scene),this.projectiles.splice(r,1))}for(let r=this.throwables.length-1;r>=0;r--){const a=this.throwables[r];a.update(t,e),a.isDetonated&&(a.destroy(this.scene),this.throwables.splice(r,1))}}}class F0{constructor(t){M(this,"scene");M(this,"anchorMesh",null);M(this,"glitchAnchorPos",null);M(this,"glitchAnchorTimer",0);this.scene=t,this.initGlitchBeacon()}initGlitchBeacon(){const t=new To(.35),e=new Nt({color:11032055,emissive:11032055,emissiveIntensity:3.5,wireframe:!0});this.anchorMesh=new G(t,e),this.anchorMesh.visible=!1,this.scene.add(this.anchorMesh)}activateRig(t,e,i,n,r){switch(t.stats.rigType){case gt.BREACH_BOOSTER:return this.activateBreachBooster(t,e,i,n,r);case gt.OVERDRIVE_SLIDE:return this.activateOverdriveSlide(t,i,n,r);case gt.PHASE_DASH:return this.activatePhaseDash(t,e,i,n,r);case gt.GLITCH_ANCHOR:return this.activateGlitchAnchor(t,r);default:return{activated:!1,popupText:""}}}activateBreachBooster(t,e,i,n,r){const a=t.mesh.rootGroup.scale.x>=0?1:-1,o=Math.abs(n)>.1?Math.sign(n):Math.abs(Math.cos(i))>.25?Math.sign(Math.cos(i)):a,l=t.actor.isGrounded?.35:Math.sin(i);t.actor.velocity.x=o*28,t.actor.velocity.y=Math.max(l*22,9),t.rigBoostTimer=.45,t.mesh.triggerThrusterBurst(!0),r&&r.triggerBreachZoom();const c=Math.round(t.actor.position.x+o*1.2),h=Math.round(t.actor.position.y);let d=!1;for(let u=0;u<4;u++){const p=c+Math.round(o*u),g=h,v=e.getTile(p,g);(v===Z.BRICK_CONCRETE||v===Z.WOOD_SCAFFOLD||v===Z.GLASS_WINDOW)&&(e.destroyTile(p,g),d=!0)}return d&&r&&r.addTrauma(.25),setTimeout(()=>{t.mesh.triggerThrusterBurst(!1)},450),{activated:!0,popupText:"⚡ BREACH BOOSTER!"}}activateOverdriveSlide(t,e,i,n){const r=t.mesh.rootGroup.scale.x>=0?1:-1,a=i!==0?Math.sign(i):Math.abs(Math.cos(e))>.2?Math.sign(Math.cos(e)):r;return t.actor.velocity.x=a*26,t.isSliding=!0,t.slideTimer=.6,t.rigBoostTimer=.45,t.mesh.triggerThrusterBurst(!0),n&&(n.triggerSlideZoom(!0),setTimeout(()=>{n.triggerSlideZoom(!1)},600)),setTimeout(()=>{t.mesh.triggerThrusterBurst(!1)},450),{activated:!0,popupText:"⚡ OVERDRIVE SLIDE!"}}activatePhaseDash(t,e,i,n,r){const a=t.mesh.rootGroup.scale.x>=0?1:-1,o=Math.abs(n)>.1?Math.sign(n):Math.abs(Math.cos(i))>.2?Math.sign(Math.cos(i)):a,l=t.actor.isGrounded?0:Math.sin(i),c=ni.clamp(t.actor.position.x+o*9,2,e.width-3),h=ni.clamp(t.actor.position.y+l*4.5,3,e.height-3);return t.actor.position.set(c,h,0),t.actor.velocity.set(o*14,6,0),t.actor.isPhasing=!0,t.rigBoostTimer=.35,r&&r.triggerPhaseSnap(c,h),t.mesh.rootGroup.traverse(d=>{if(d.material){const u=d.material;u.transparent=!0,u.opacity=.35}}),setTimeout(()=>{t.actor.isPhasing=!1,t.mesh.rootGroup.traverse(d=>{if(d.material){const u=d.material;u.opacity=1}})},1e3),{activated:!0,popupText:"⚡ PHASE DASH!"}}activateGlitchAnchor(t,e){return this.glitchAnchorPos?(t.actor.position.copy(this.glitchAnchorPos),t.actor.velocity.set(0,8,0),t.stats.hp=Math.min(t.stats.maxHp,t.stats.hp+40),this.glitchAnchorPos=null,this.anchorMesh&&(this.anchorMesh.visible=!1),e&&e.triggerAnchorSlingshot(),{activated:!0,popupText:"⏪ GLITCH RECALL (+40 HP)!"}):(this.glitchAnchorPos=t.actor.position.clone(),this.glitchAnchorTimer=10,this.anchorMesh&&(this.anchorMesh.position.copy(this.glitchAnchorPos),this.anchorMesh.visible=!0),{activated:!0,popupText:"⚓ ANCHOR PLACED!"})}triggerGroundSlam(t,e,i){if(t.isGrounded)return!1;t.velocity.y=Mi.GROUND_SLAM_VELOCITY,t.velocity.x=0,e.triggerThrusterBurst(!0);const n=Math.round(t.position.x),r=Math.floor(t.position.y-.5),a=i.getTile(n,r);return(a===Z.WOOD_SCAFFOLD||a===Z.GLASS_WINDOW)&&i.destroyTile(n,r),!0}update(t){this.anchorMesh&&this.anchorMesh.visible&&(this.anchorMesh.rotation.x+=t*2.5,this.anchorMesh.rotation.y+=t*3.5,this.glitchAnchorTimer-=t,this.glitchAnchorTimer<=0&&(this.glitchAnchorPos=null,this.anchorMesh.visible=!1))}}class B0{constructor(t,e){M(this,"position");M(this,"velocity");M(this,"width",.8);M(this,"height",1.8);M(this,"isGrounded",!1);M(this,"isTouchingWallLeft",!1);M(this,"isTouchingWallRight",!1);M(this,"isPhasing",!1);M(this,"isJetFlying",!1);M(this,"isDead",!1);M(this,"customPhysics",!1);this.position=new I(t,e,0),this.velocity=new I(0,0,0)}updatePhysics(t,e){if(this.isDead)return;if(!this.customPhysics&&!this.isJetFlying&&(this.velocity.y+=Mi.GRAVITY*t,this.velocity.y<-26&&(this.velocity.y=-26)),this.isPhasing){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.isGrounded=!1,this.isTouchingWallLeft=!1,this.isTouchingWallRight=!1;return}this.position.x+=this.velocity.x*t,this.isTouchingWallLeft=!1,this.isTouchingWallRight=!1,this.resolveCollisionsX(e);const i=this.position.y;this.position.y+=this.velocity.y*t,this.isGrounded=!1,this.resolveCollisionsY(e,i),this.resolveUnstuck(e),this.customPhysics||(this.isGrounded?this.velocity.x*=.88:this.velocity.x*=.96)}resolveCollisionsX(t){const e=this.width*.5,i=Math.floor(this.position.y+.15),n=Math.floor(this.position.y+this.height-.2);if(this.velocity.x>0){const r=Math.floor(this.position.x+e);let a=!1,o=-1;for(let l=i;l<=n;l++)t.isSolid(r,l)&&(a=!0,o===-1&&(o=l));if(a){const l=o+1,c=l-this.position.y;let h=!1;if(this.isGrounded&&c>.05&&c<=1.05){const d=Math.floor(l+this.height-.15);let u=!1;for(let p=o+1;p<=d;p++)if(t.isSolid(r,p)){u=!0;break}u||(h=!0)}h?(this.position.y=l,this.velocity.y=0,this.position.x+=.08,this.isGrounded=!0):(this.position.x=r-e-.005,this.velocity.x=0,this.isTouchingWallRight=!0)}}else if(this.velocity.x<0){const r=Math.floor(this.position.x-e);let a=!1,o=-1;for(let l=i;l<=n;l++)t.isSolid(r,l)&&(a=!0,o===-1&&(o=l));if(a){const l=o+1,c=l-this.position.y;let h=!1;if(this.isGrounded&&c>.05&&c<=1.05){const d=Math.floor(l+this.height-.15);let u=!1;for(let p=o+1;p<=d;p++)if(t.isSolid(r,p)){u=!0;break}u||(h=!0)}h?(this.position.y=l,this.velocity.y=0,this.position.x-=.08,this.isGrounded=!0):(this.position.x=r+1+e+.005,this.velocity.x=0,this.isTouchingWallLeft=!0)}}this.position.x-e<1?(this.position.x=1+e+.005,this.velocity.x=0,this.isTouchingWallLeft=!0):this.position.x+e>t.width-1&&(this.position.x=t.width-1-e-.005,this.velocity.x=0,this.isTouchingWallRight=!0)}resolveUnstuck(t){const e=Math.floor(this.position.x),i=Math.floor(this.position.y+.5),n=Math.floor(this.position.y+.1),r=this.width*.5;t.isSolid(e,i)&&t.isSolid(e,n)&&(t.isSolid(e,i+1)?t.isSolid(e+1,i)?t.isSolid(e-1,i)||(this.position.x=e-r-.05,this.velocity.x=0):(this.position.x=e+1+r+.05,this.velocity.x=0):(this.position.y=i+1,this.velocity.y=0))}resolveCollisionsY(t,e){const i=this.width*.5,n=Math.floor(this.position.x-i+.14),r=Math.floor(this.position.x+i-.14);if(this.velocity.y<=0){const a=Math.floor(e),o=Math.floor(this.position.y-.05);let l=!1;for(let c=Math.max(a,o);c>=Math.min(a,o);c--){for(let h=n;h<=r;h++)if(t.isSolid(h,c)){if(!t.isSolid(h,c+1)&&e>=c+1-.35){this.position.y=c+1,this.velocity.y=0,this.isGrounded=!0,l=!0;break}}else if(t.isOneWayPlatform(h,c)){const d=c+1;if(!this.isJetFlying&&e>=d-.15&&this.position.y<=d+.1){this.position.y=d,this.velocity.y=0,this.isGrounded=!0,l=!0;break}}if(l)break}!l&&this.position.y<=2&&(this.position.y=2,this.velocity.y=0,this.isGrounded=!0)}else if(this.velocity.y>0){const a=Math.floor(this.position.y+this.height);for(let o=n;o<=r;o++)if(t.isSolid(o,a)){this.position.y=a-this.height-.02,this.velocity.y=0;break}this.position.y>46&&(this.position.y=46,this.velocity.y=0)}}}class G0{constructor(t,e=!1,i="Operative"){M(this,"rootGroup");M(this,"isEnemy");M(this,"torsoGroup");M(this,"headGroup");M(this,"nvgLenses",[]);M(this,"thrusterGroup");M(this,"thrusterFlameL");M(this,"thrusterFlameR");M(this,"crownMesh");M(this,"shoulderGroup");M(this,"rightArm");M(this,"leftArm");M(this,"weaponMount");M(this,"weaponMeshMap",new Map);M(this,"activeWeaponId",z.RIFLE_XAG47);M(this,"weaponSpotLight");M(this,"weaponSpotTarget");M(this,"laserLine");M(this,"crosshairMesh");M(this,"leftLeg");M(this,"rightLeg");M(this,"statusSprite");M(this,"statusCanvas");M(this,"statusCtx");M(this,"statusTexture");M(this,"walkCycle",0);M(this,"recoilOffset",0);M(this,"slashAnimTimer",0);M(this,"isRagdoll",!1);M(this,"ragdollVelocity",new I);M(this,"ragdollAngVel",new I);this.isEnemy=e,this.rootGroup=new Kt,t.add(this.rootGroup);const n=new Nt({color:e?5395035:6583435,emissive:e?1579035:1976635,roughness:.6,metalness:.05}),r=new Nt({color:e?10033947:1483594,emissive:e?4524554:413243,roughness:.5,metalness:.1}),a=e?new jt({color:15680580}):new Nt({color:16317180,emissive:4674921,roughness:.4,metalness:.05}),o=new Nt({color:e?8736014:10576391,emissive:e?3018754:4005125,roughness:.7,metalness:.05}),l=new jt({color:e?15680580:4906624});this.torsoGroup=new Kt,this.torsoGroup.position.set(0,.95,0),this.rootGroup.add(this.torsoGroup);const c=new G(new it(.52,.62,.4),n);c.castShadow=!0,this.torsoGroup.add(c);const h=new G(new it(.58,.54,.46),r);h.castShadow=!0,this.torsoGroup.add(h);const d=new G(new it(.59,.1,.47),a);d.position.set(0,-.22,0),this.torsoGroup.add(d);for(let Wt=-1;Wt<=1;Wt++){const Rt=new G(new it(.13,.16,.08),r);Rt.position.set(Wt*.16,-.06,.25),this.torsoGroup.add(Rt)}const u=new G(new it(.18,.18,.24),r);u.position.set(-.33,.2,0),this.torsoGroup.add(u);const p=new G(new it(.2,.04,.25),a);p.position.set(-.33,.29,0),this.torsoGroup.add(p);const g=new G(new it(.18,.18,.24),r);g.position.set(.33,.2,0),this.torsoGroup.add(g);const v=new G(new it(.2,.04,.25),a);v.position.set(.33,.29,0),this.torsoGroup.add(v),this.thrusterGroup=new Kt,this.thrusterGroup.position.set(0,.05,-.26),this.torsoGroup.add(this.thrusterGroup);const m=new G(new it(.42,.44,.16),r);m.castShadow=!0,this.thrusterGroup.add(m);const f=new qt(.07,.1,.18,10),T=new Nt({color:9741240,emissive:1976635,metalness:.1,roughness:.3}),w=new G(f,T);w.position.set(-.13,-.24,0),this.thrusterGroup.add(w);const y=new G(f,T);y.position.set(.13,-.24,0),this.thrusterGroup.add(y);const L=new Mn(.11,.55,8);L.rotateX(Math.PI);const P=new jt({color:16755200,transparent:!0,opacity:0});this.thrusterFlameL=new G(L,P),this.thrusterFlameL.position.set(-.13,-.52,0),this.thrusterGroup.add(this.thrusterFlameL),this.thrusterFlameR=new G(L,P.clone()),this.thrusterFlameR.position.set(.13,-.52,0),this.thrusterGroup.add(this.thrusterFlameR),this.headGroup=new Kt,this.headGroup.position.set(0,.44,0),this.torsoGroup.add(this.headGroup);const S=new Hi(.24,16,14),R=new G(S,o);R.castShadow=!0,this.headGroup.add(R);const x=new Hi(.27,16,12,0,Math.PI*2,0,Math.PI*.58),_=new G(x,r);_.position.set(0,.03,0),_.castShadow=!0,this.headGroup.add(_);const A=new qt(.285,.285,.045,16,1,!1,0,Math.PI),D=new G(A,a);D.position.set(0,.04,.08),D.rotation.x=.2,this.headGroup.add(D);const O=new G(new it(.34,.09,.08),n);O.position.set(0,.12,.22),this.headGroup.add(O);const k=new G(new it(.3,.06,.04),l);k.position.set(0,.12,.26),this.headGroup.add(k),this.nvgLenses.push(k);const Y=new qt(.26,.18,.18,6),K=new Nt({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.12,roughness:.2});this.crownMesh=new G(Y,K),this.crownMesh.position.set(0,.44,0),this.crownMesh.visible=!1,this.headGroup.add(this.crownMesh),this.shoulderGroup=new Kt,this.shoulderGroup.position.set(0,.16,0),this.torsoGroup.add(this.shoulderGroup),this.rightArm=new Kt,this.leftArm=new Kt,this.shoulderGroup.add(this.rightArm),this.shoulderGroup.add(this.leftArm);const J=new it(.14,.44,.16),X=new G(J,n);X.position.set(.32,-.16,0),X.castShadow=!0,this.rightArm.add(X);const ot=new G(new it(.15,.12,.17),a);ot.position.set(.32,-.32,0),this.rightArm.add(ot);const ut=new G(J,n);ut.position.set(-.32,-.16,0),ut.castShadow=!0,this.leftArm.add(ut);const St=new G(new it(.15,.12,.17),a);St.position.set(-.32,-.32,0),this.leftArm.add(St),this.weaponMount=new Kt,this.weaponMount.position.set(.28,-.2,.38),this.shoulderGroup.add(this.weaponMount),this.buildProceduralWeapons(),this.weaponSpotLight=new Nc(16775917,.8,25,.4,.5,1.5),this.weaponSpotLight.castShadow=!1,this.weaponMount.add(this.weaponSpotLight),this.weaponSpotTarget=new Te,this.weaponSpotTarget.position.set(12,0,0),this.weaponMount.add(this.weaponSpotTarget),this.weaponSpotLight.target=this.weaponSpotTarget;const Ft=new we().setFromPoints([new I(0,0,0),new I(28,0,0)]),te=new Ar({color:16711748,transparent:!0,opacity:.85});this.laserLine=new Mo(Ft,te),this.weaponMount.add(this.laserLine);const $=new Ei(.12,.18,12),st=new jt({color:16711748,side:Ue,transparent:!0,opacity:.9});this.crosshairMesh=new G($,st),this.crosshairMesh.position.set(28,0,0),this.crosshairMesh.rotateY(Math.PI*.5),this.weaponMount.add(this.crosshairMesh),this.leftLeg=new Kt,this.rightLeg=new Kt,this.leftLeg.position.set(-.18,.65,0),this.rightLeg.position.set(.18,.65,0),this.rootGroup.add(this.leftLeg),this.rootGroup.add(this.rightLeg);const yt=new it(.18,.68,.2),lt=new G(yt,n);lt.position.set(0,-.34,0),lt.castShadow=!0,this.leftLeg.add(lt);const Ct=new G(new it(.2,.16,.08),r);Ct.position.set(0,-.32,.12),this.leftLeg.add(Ct);const Lt=new G(yt,n);Lt.position.set(0,-.34,0),Lt.castShadow=!0,this.rightLeg.add(Lt);const Ht=new G(new it(.2,.16,.08),r);Ht.position.set(0,-.32,.12),this.rightLeg.add(Ht);const fe=new it(.2,.2,.28),Xt=new G(fe,r);Xt.position.set(0,-.62,.04),this.leftLeg.add(Xt);const ye=new G(new it(.21,.05,.29),a);ye.position.set(0,-.72,.04),this.leftLeg.add(ye);const F=new G(fe,r);F.position.set(0,-.62,.04),this.rightLeg.add(F);const ke=new G(new it(.21,.05,.29),a);ke.position.set(0,-.72,.04),this.rightLeg.add(ke),this.statusCanvas=document.createElement("canvas"),this.statusCanvas.width=256,this.statusCanvas.height=96,this.statusCtx=this.statusCanvas.getContext("2d"),this.statusTexture=new Re(this.statusCanvas),this.statusTexture.minFilter=Qe;const Yt=new br({map:this.statusTexture,transparent:!0,depthTest:!1});this.statusSprite=new xo(Yt),this.statusSprite.position.set(0,2.2,0),this.statusSprite.scale.set(1.8,.68,1),this.rootGroup.add(this.statusSprite),this.updateStatusBillboard(100,100,50,50,i,!1)}updateStatusBillboard(t,e,i,n,r,a){const o=this.statusCtx;o.clearRect(0,0,256,96),o.fillStyle="rgba(5, 8, 6, 0.90)",o.strokeStyle=this.isEnemy?"rgba(239, 68, 68, 0.85)":"rgba(34, 197, 94, 0.85)",o.lineWidth=3,o.beginPath(),o.roundRect(8,8,240,80,10),o.fill(),o.stroke(),o.fillStyle=a?"#22c55e":"#ffffff",o.font='bold 22px "Chakra Petch", "JetBrains Mono", sans-serif',o.textAlign="center",o.fillText(`${r} ${a?"[◆]":""}`,128,34);const l=Math.max(0,t/e);o.fillStyle="#1c2b22",o.fillRect(24,44,208,16),o.fillStyle=this.isEnemy?"#ef4444":"#22c55e",o.fillRect(24,44,208*l,16);const c=Math.max(0,i/n);o.fillStyle="#0f172a",o.fillRect(24,64,208,8),o.fillStyle="#38bdf8",o.fillRect(24,64,208*c,8),this.statusTexture.needsUpdate=!0}buildProceduralWeapons(){const t=new Nt({color:13358561,emissive:3359061,metalness:.1,roughness:.4}),e=new Nt({color:9741240,emissive:1976635,metalness:.1,roughness:.4}),i=new Nt({color:1409085,emissive:413243,metalness:.08,roughness:.5}),n=new Nt({color:14251782,emissive:4528643,metalness:.08,roughness:.5}),r=new jt({color:2278750}),a=new jt({color:15680580}),o=new jt({color:3718648}),l=new jt({color:16347926}),c=new Nt({color:15857145,emissive:4674921,metalness:.12,roughness:.2}),h=S=>(S.scale.set(1.35,1.35,1.35),S),d=()=>{const S=new Kt,R=new G(new it(.85,.08,.03),c);R.position.set(.48,.02,0),S.add(R);const x=new G(new Mn(.045,.16,4),c);x.rotateZ(-Math.PI*.5),x.position.set(.96,.02,0),S.add(x);const _=new G(new it(.7,.02,.035),o);_.position.set(.44,.05,0),S.add(_);const A=new G(new it(.06,.28,.08),n);A.position.set(.05,.02,0),S.add(A);const D=new G(new qt(.03,.035,.22,8),i);return D.rotateZ(Math.PI*.5),D.position.set(-.06,.02,0),S.add(D),h(S)},u=()=>{const S=new Kt,R=new G(new it(.34,.1,.08),t);R.position.set(.08,.05,0),S.add(R);const x=new G(new qt(.028,.028,.1,8),e);x.rotateZ(Math.PI*.5),x.position.set(.28,.05,0),S.add(x);const _=new G(new Ei(.015,.032,8),r);_.rotateY(Math.PI*.5),_.position.set(.33,.05,0),S.add(_);const A=new G(new it(.09,.22,.075),i);A.position.set(-.05,-.12,0),A.rotateZ(-.25),S.add(A);const D=new G(new it(.26,.018,.085),r);return D.position.set(.08,.07,0),S.add(D),h(S)},p=()=>{const S=new Kt,R=(x,_)=>{const A=new Kt,D=new G(new it(.34,.12,.08),t);D.position.set(x+.04,.02,_),A.add(D);const O=new G(new qt(.03,.03,.16,8),e);O.rotateZ(Math.PI*.5),O.position.set(x+.27,.02,_),A.add(O);const k=new G(new qt(.04,.04,.05,8),r);k.rotateZ(Math.PI*.5),k.position.set(x+.35,.02,_),A.add(k);const Y=new G(new it(.08,.2,.07),i);Y.position.set(x-.03,-.12,_),Y.rotateZ(-.25),A.add(Y);const K=new G(new it(.06,.24,.06),n);K.position.set(x-.05,-.27,_),K.rotateZ(-.25),A.add(K);const J=new G(new it(.24,.015,.085),r);return J.position.set(x+.04,.05,_),A.add(J),A};return S.add(R(.05,.16)),S.add(R(-.05,-.16)),h(S)},g=()=>{const S=new Kt,R=new G(new it(.55,.16,.13),t);R.position.set(.08,.04,0),S.add(R);const x=new G(new qt(.055,.055,.46,10),e);x.rotateZ(Math.PI*.5),x.position.set(.5,.06,0),S.add(x);const _=new G(new qt(.065,.065,.08,10),a);_.rotateZ(Math.PI*.5),_.position.set(.74,.06,0),S.add(_);const A=new G(new it(.32,.15,.11),i);A.position.set(-.32,.01,0),S.add(A);const D=new G(new it(.09,.22,.08),i);D.position.set(-.06,-.14,0),D.rotateZ(-.25),S.add(D);const O=new G(new qt(.16,.16,.13,16),n);O.rotateX(Math.PI*.5),O.position.set(.12,-.16,0),S.add(O);const k=new G(new it(.45,.02,.135),a);return k.position.set(.08,.09,0),S.add(k),h(S)},v=()=>{const S=new Kt,R=new G(new it(.32,.14,.07),t);R.position.set(.06,.04,0),S.add(R);const x=new G(new qt(.085,.085,.17,12),e);x.rotateZ(Math.PI*.5),x.position.set(.06,.04,0),S.add(x);const _=new G(new qt(.042,.042,.4,10),e);_.rotateZ(Math.PI*.5),_.position.set(.38,.07,0),S.add(_);const A=new G(new it(.1,.22,.08),n);A.position.set(-.08,-.12,0),A.rotateZ(-.25),S.add(A);const D=new G(new it(.36,.03,.04),o);return D.position.set(.36,.11,0),S.add(D),h(S)},m=()=>{const S=new Kt,R=new G(new it(.44,.14,.11),t);R.position.set(.02,.04,0),S.add(R);const x=new G(new qt(.035,.035,.48,8),e);x.rotateZ(Math.PI*.5),x.position.set(.66,.03,0),S.add(x);const _=new G(new qt(.045,.04,.08,8),r);_.rotateZ(Math.PI*.5),_.position.set(.91,.03,0),S.add(_);const A=new G(new it(.34,.13,.085),n);A.position.set(-.33,-.02,0),A.rotateZ(-.1),S.add(A);const D=new G(new it(.09,.22,.08),n);D.position.set(-.06,-.15,0),D.rotateZ(-.25),S.add(D);const O=new G(new it(.1,.15,.075),n);O.position.set(.12,-.1,0),O.rotateZ(-.25),S.add(O);const k=new G(new it(.09,.15,.075),n);k.position.set(.17,-.22,0),k.rotateZ(.2),S.add(k);const Y=new G(new it(.36,.018,.115),r);return Y.position.set(.02,.08,0),S.add(Y),h(S)},f=()=>{const S=new Kt,R=new G(new it(.36,.12,.09),t);R.position.set(.04,.04,0),S.add(R);const x=new G(new qt(.06,.06,.52,12),e);x.rotateZ(Math.PI*.5),x.position.set(.45,.04,0),S.add(x);const _=new G(new it(.09,.2,.07),i);_.position.set(-.06,-.14,0),_.rotateZ(-.25),S.add(_);const A=new G(new it(.07,.22,.06),n);A.position.set(.12,-.15,0),A.rotateZ(.2),S.add(A);const D=new G(new it(.14,.07,.07),e);D.position.set(.04,.13,0),S.add(D);const O=new G(new Hi(.025,6,6),r);O.position.set(.11,.13,0),S.add(O);const k=new G(new it(.28,.016,.095),r);return k.position.set(.04,.06,0),S.add(k),h(S)},T=()=>{const S=new Kt,R=new G(new it(.46,.18,.14),t);R.position.set(.04,.03,0),S.add(R);const x=new G(new qt(.18,.18,.03),c);x.rotateX(Math.PI*.5),x.position.set(.42,.04,0),S.add(x);const _=new G(new it(.32,.04,.06),e);_.position.set(.4,.23,0),S.add(_);const A=new G(new it(.1,.22,.08),i);A.position.set(-.08,-.15,0),A.rotateZ(-.25),S.add(A);const D=new G(new qt(.07,.07,.04),a);D.rotateX(Math.PI*.5),D.position.set(.42,.04,0),S.add(D);const O=new G(new it(.36,.02,.145),l);return O.position.set(.04,.1,0),S.add(O),h(S)},w=()=>{const S=new Kt,R=new G(new it(.7,.17,.12),t);R.position.set(.05,.03,0),S.add(R);const x=new G(new qt(.045,.05,.92,10),e);x.rotateZ(Math.PI*.5),x.position.set(.82,.05,0),S.add(x);const _=new G(new it(.16,.09,.09),e);_.position.set(1.3,.05,0),S.add(_);const A=new G(new it(.38,.16,.08),i);A.position.set(-.4,-.01,0),S.add(A);const D=new G(new it(.1,.22,.08),i);D.position.set(-.08,-.16,0),D.rotateZ(-.25),S.add(D);const O=new G(new it(.14,.26,.08),n);O.position.set(.16,-.16,0),O.rotateZ(-.25),S.add(O);const k=new G(new qt(.04,.04,.44,12),e);k.rotateZ(Math.PI*.5),k.position.set(.16,.18,0),S.add(k);const Y=new G(new yo(.055,12),o);Y.rotateY(Math.PI*.5),Y.position.set(.44,.18,0),S.add(Y);const K=new G(new it(.96,.022,.125),o);return K.position.set(.5,.1,0),S.add(K),h(S)},y=()=>{const S=new Kt,R=new G(new qt(.065,.065,1.15,12),t);R.rotateZ(Math.PI*.5),R.position.set(.12,.04,0),S.add(R);const x=new G(new Mn(.13,.22,12),e);x.rotateZ(Math.PI*.5),x.position.set(-.52,.04,0),S.add(x);const _=new G(new qt(.085,.085,.44,12),n);_.rotateZ(Math.PI*.5),_.position.set(-.06,.04,0),S.add(_);const A=new G(new it(.08,.22,.06),i);A.position.set(.18,-.13,0),A.rotateZ(-.25),S.add(A);const D=new G(new Mn(.14,.28,12),i);D.rotateZ(-Math.PI*.5),D.position.set(.92,.04,0),S.add(D);const O=new G(new qt(.025,.025,.12,8),l);O.rotateZ(Math.PI*.5),O.position.set(1.1,.04,0),S.add(O);const k=new G(new it(.6,.02,.09),a);return k.position.set(.2,.11,0),S.add(k),h(S)},L=()=>{const S=new Kt,R=new G(new it(.52,.16,.12),t);R.position.set(.06,.03,0),S.add(R);const x=new G(new it(.38,.035,.035),e);x.position.set(.48,.11,0),x.rotateZ(-.1),S.add(x);const _=new G(new it(.38,.035,.035),e);_.position.set(.48,-.05,0),_.rotateZ(.1),S.add(_);const A=new G(new it(.09,.2,.07),i);A.position.set(-.06,-.14,0),A.rotateZ(-.25),S.add(A),[.26,.36,.46].forEach(O=>{const k=new G(new Mr(.065,.02,8,16),o);k.rotateY(Math.PI*.5),k.position.set(O,.03,0),S.add(k)});const D=new G(new it(.24,.06,.13),o);return D.position.set(.06,.08,0),S.add(D),h(S)},P=()=>{const S=new Kt,R=new G(new qt(.14,.14,.34,12),t);R.rotateZ(Math.PI*.5),R.position.set(.12,.04,0),S.add(R);const x=6,_=.072;for(let k=0;k<x;k++){const Y=k*(Math.PI*2/x),K=.04+Math.sin(Y)*_,J=Math.cos(Y)*_,X=new G(new qt(.022,.022,.74,8),e);X.rotateZ(Math.PI*.5),X.position.set(.55,K,J),S.add(X)}const A=new G(new qt(.18,.18,.16,16),i);A.rotateX(Math.PI*.5),A.position.set(-.06,-.18,0),S.add(A);const D=new G(new it(.12,.16,.08),n);D.position.set(.06,-.1,0),S.add(D);const O=new G(new it(.24,.04,.08),n);return O.position.set(.1,.22,0),S.add(O),[.45,.88].forEach(k=>{const Y=new G(new Mr(.085,.022,8,16),o);Y.rotateY(Math.PI*.5),Y.position.set(k,.04,0),S.add(Y)}),h(S)};this.weaponMeshMap.set(z.CUTLASS,d()),this.weaponMeshMap.set(z.PISTOL_XAG9,u()),this.weaponMeshMap.set(z.AKIMBO_UZIS,p()),this.weaponMeshMap.set(z.SHOTGUN_AA12,g()),this.weaponMeshMap.set(z.REVOLVER_JUDGE,v()),this.weaponMeshMap.set(z.RIFLE_XAG47,m()),this.weaponMeshMap.set(z.GHOST_SMG,f()),this.weaponMeshMap.set(z.RICOCHET_SAW,T()),this.weaponMeshMap.set(z.RAIL_SNIPER,w()),this.weaponMeshMap.set(z.BUNKER_RPG,y()),this.weaponMeshMap.set(z.SHOCK_ARC,L()),this.weaponMeshMap.set(z.VULCAN_MINIGUN,P()),this.weaponMeshMap.forEach((S,R)=>{S.visible=R===this.activeWeaponId,this.weaponMount.add(S)})}setWeapon(t){this.activeWeaponId=t,this.weaponMeshMap.forEach((e,i)=>{e.visible=i===t})}setOdogwuCrown(t){this.crownMesh.visible=t}setSarkiCrown(t){this.crownMesh.visible=t}triggerRecoilKick(t){this.recoilOffset=Math.min(this.recoilOffset+t,.45)}triggerSlashAnim(){this.slashAnimTimer=.22}triggerThrusterBurst(t){const e=t?.95:0;if(this.thrusterFlameL.material.opacity=e,this.thrusterFlameR.material.opacity=e,t){const i=.8+Math.random()*.5;this.thrusterFlameL.scale.set(i,i*1.3,i),this.thrusterFlameR.scale.set(i,i*1.3,i)}}triggerRagdoll(t,e){this.isRagdoll=!0,this.statusSprite.visible=!1,this.ragdollVelocity.set(t,e,(Math.random()-.5)*8),this.ragdollAngVel.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*18)}update(t,e,i,n,r,a,o,l=!1,c){if(this.isRagdoll){this.ragdollVelocity.y+=-34*t,this.rootGroup.position.addScaledVector(this.ragdollVelocity,t),this.rootGroup.rotation.x+=this.ragdollAngVel.x*t,this.rootGroup.rotation.y+=this.ragdollAngVel.y*t,this.rootGroup.rotation.z+=this.ragdollAngVel.z*t,this.rootGroup.position.y<1&&(this.rootGroup.position.y=1,this.ragdollVelocity.y*=-.3,this.ragdollVelocity.x*=.7);return}this.rootGroup.position.set(e,i,0);const h=Math.cos(o)>=0;this.rootGroup.scale.x=h?1:-1;let u=(h?ni.clamp(o,-1.45,1.45):ni.clamp(Math.atan2(Math.sin(o),-Math.cos(o)),-1.45,1.45))-this.shoulderGroup.rotation.z;for(;u<-Math.PI;)u+=Math.PI*2;for(;u>Math.PI;)u-=Math.PI*2;if(this.shoulderGroup.rotation.z+=u*Math.min(t*30,1),this.headGroup.rotation.z=this.shoulderGroup.rotation.z*.45,this.isEnemy)this.laserLine.visible=!1,this.crosshairMesh.visible=!1;else{let p=26;if(c){const g=Math.cos(o),v=Math.sin(o),m=e+(h?.3:-.3),f=i+.95;for(let T=.6;T<=26;T+=.5){const w=Math.floor(m+g*T),y=Math.floor(f+v*T);if(c.isSolid(w,y)){p=Math.max(.6,T);break}}}this.laserLine.scale.x=p/28,this.crosshairMesh.position.x=p,this.laserLine.visible=!0,this.crosshairMesh.visible=!0}if(this.slashAnimTimer>0){const p=1-this.slashAnimTimer/.22;this.weaponMount.rotation.z=Math.sin(p*Math.PI)*-1.35,this.weaponMount.position.x=.28+Math.sin(p*Math.PI)*.25,this.slashAnimTimer=Math.max(0,this.slashAnimTimer-t)}else this.weaponMount.rotation.z=0,this.recoilOffset>0?(this.weaponMount.position.x=.28-this.recoilOffset,this.recoilOffset=Math.max(0,this.recoilOffset-t*2.8)):this.weaponMount.position.x=.28;if(this.crownMesh.visible&&(this.crownMesh.rotation.y+=t*3.5),l)this.torsoGroup.position.y=.42,this.torsoGroup.rotation.z=h?-.75:.75,this.leftLeg.rotation.z=-1.25,this.rightLeg.rotation.z=-1.15;else if(this.torsoGroup.position.y=.95,this.torsoGroup.rotation.z=0,!a)this.leftLeg.rotation.z=-.55,this.rightLeg.rotation.z=.45;else if(Math.abs(n)>.5){this.walkCycle+=t*15;const p=Math.sin(this.walkCycle)*.7;this.leftLeg.rotation.z=p,this.rightLeg.rotation.z=-p}else this.leftLeg.rotation.z=0,this.rightLeg.rotation.z=0}destroy(t){this.statusTexture&&this.statusTexture.dispose(),this.rootGroup.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const i=e.material;Array.isArray(i)?i.forEach(n=>n.dispose()):i.dispose()}}),t.remove(this.rootGroup)}}class _s{constructor(t,e,i,n,r,a=!1,o=gt.BREACH_BOOSTER){M(this,"stats");M(this,"actor");M(this,"mesh");M(this,"scene");M(this,"jetFuel",100);M(this,"maxJetFuel",100);M(this,"fuelDelayTimer",0);M(this,"isJetFlying",!1);M(this,"respawnTimer",0);M(this,"isSliding",!1);M(this,"slideTimer",0);M(this,"rigBoostTimer",0);M(this,"canWallKick",!1);M(this,"fireCooldown",0);M(this,"reloadTimer",0);M(this,"meleeTimer",0);M(this,"healthRegenDelay",0);M(this,"c4RegenTimer",0);M(this,"lastDamageTakenTime",0);this.scene=t,this.actor=new B0(n,r),this.actor.customPhysics=!0,this.mesh=new G0(t,!a,i),this.stats={id:e,name:i,isBot:!a,isLocalPlayer:a,hp:100,maxHp:100,armor:50,maxArmor:50,cash:1e5,kills:0,deaths:0,wallsDestroyed:0,rigType:o,primaryWeapon:z.RIFLE_XAG47,secondaryWeapon:z.PISTOL_XAG9,activeWeapon:z.RIFLE_XAG47,ammo:{[z.CUTLASS]:999,[z.PISTOL_XAG9]:15,[z.AKIMBO_UZIS]:64,[z.SHOTGUN_AA12]:20,[z.REVOLVER_JUDGE]:6,[z.RIFLE_XAG47]:30,[z.GHOST_SMG]:32,[z.RICOCHET_SAW]:10,[z.RAIL_SNIPER]:4,[z.BUNKER_RPG]:2,[z.SHOCK_ARC]:8,[z.VULCAN_MINIGUN]:150},c4Count:4,empCount:1,tearGasCount:1,rigCooldownTimer:0,isExtracted:!1,isDead:!1},this.mesh.setWeapon(this.stats.activeWeapon),this.syncStatusBillboard()}syncStatusBillboard(){this.mesh.updateStatusBillboard(this.stats.hp,this.stats.maxHp,this.stats.armor,this.stats.maxArmor,this.stats.name,!!this.mesh.crownMesh.visible)}takeDamage(t,e){if(this.stats.isDead)return!1;if(e&&e.stats.isBot&&this.stats.isLocalPlayer&&(t*=.55),this.stats.armor>0){const i=Math.min(this.stats.armor,t*.65);this.stats.armor-=i,t-=i}return this.stats.hp=Math.max(0,this.stats.hp-t),this.healthRegenDelay=3.5,this.lastDamageTakenTime=performance.now(),this.syncStatusBillboard(),this.stats.hp<=0?(this.eliminate(e),!0):!1}heal(t){this.stats.isDead||(this.stats.hp=Math.min(this.stats.maxHp,this.stats.hp+t),this.syncStatusBillboard())}eliminate(t){if(this.stats.isDead)return;this.stats.isDead=!0,this.actor.isDead=!0,this.respawnTimer=3.5,this.stats.deaths++;const e=t?(this.actor.position.x-t.actor.position.x)*10:(Math.random()-.5)*18,i=14+Math.random()*8;this.mesh.triggerRagdoll(e,i),t&&t.stats.kills++}respawn(t,e){this.actor.position.set(t,e,0),this.actor.velocity.set(0,0,0),this.actor.isDead=!1,this.stats.isDead=!1,this.respawnTimer=0,this.healthRegenDelay=0,this.stats.hp=this.stats.maxHp,this.stats.armor=this.stats.maxArmor,this.stats.c4Count=4,this.c4RegenTimer=0,this.jetFuel=this.maxJetFuel,this.mesh.isRagdoll=!1,this.mesh.statusSprite.visible=!0,this.mesh.rootGroup.rotation.set(0,0,0),this.mesh.rootGroup.position.set(t,e,0),this.syncStatusBillboard()}swapWeapon(){this.stats.activeWeapon===this.stats.primaryWeapon?this.stats.activeWeapon=this.stats.secondaryWeapon:this.stats.activeWeapon=this.stats.primaryWeapon,this.reloadTimer=0,this.fireCooldown=.12,this.mesh.setWeapon(this.stats.activeWeapon)}reloadWeapon(){const t=Ye[this.stats.activeWeapon];this.stats.activeWeapon!==z.CUTLASS&&(this.reloadTimer>0||this.stats.ammo[this.stats.activeWeapon]===t.magSize||(this.reloadTimer=t.reloadTime))}updateMiniMilitiaMovement(t,e,i,n,r=1){if(this.stats.isDead)return;const a=this.stats.activeWeapon===z.CUTLASS,o=a?1.25:1,l=Ke.WORLD_SCALE,c=Ke.MAX_RUN_SPEED*l*o,h=Ke.GROUND_ACCEL*l*o,d=Ke.AIR_ACCEL*l*o,u=Ke.JETPACK_THRUST*l*o,p=Ke.GRAVITY*l,g=Math.abs(Ke.MAX_ASCEND_SPEED)*l*(a?1.2:1);if(this.rigBoostTimer<=0){const v=this.actor.isGrounded?h:d;if(e!==0)this.actor.velocity.x+=e*v*t,Math.abs(this.actor.velocity.x)>c&&(this.actor.velocity.x=Math.sign(this.actor.velocity.x)*c);else{const m=this.actor.isGrounded?Ke.GROUND_FRICTION:Ke.AIR_DRAG;this.actor.velocity.x*=Math.pow(m,t*60),Math.abs(this.actor.velocity.x)<.15&&(this.actor.velocity.x=0)}}if(this.jetFuel=this.maxJetFuel,i){this.isJetFlying=!0,this.actor.isJetFlying=!0;const v=Math.max(.65,r);this.actor.velocity.y+=u*v*t,this.actor.isGrounded=!1,this.mesh.triggerThrusterBurst(!0)}else this.isJetFlying=!1,this.actor.isJetFlying=!1,this.isSliding||this.mesh.triggerThrusterBurst(!1);n&&!this.actor.isGrounded&&(this.actor.velocity.y-=p*.5*t),this.actor.velocity.y-=p*t,this.actor.velocity.y>g&&(this.actor.velocity.y=g),this.actor.velocity.y<-20.212500000000002&&(this.actor.velocity.y=-20.212500000000002)}handleJumpOrJetpack(t,e,i,n=1){this.updateMiniMilitiaMovement(t,0,i,!1,n)}performMeleeLunge(t,e,i,n){if(this.meleeTimer>0)return;this.meleeTimer=.28;const r=Math.cos(t),a=Math.sin(t);if(this.actor.velocity.x+=r*16,this.actor.velocity.y+=Math.max(a*12,4),this.mesh.setWeapon(z.CUTLASS),this.mesh.triggerRecoilKick(.45),this.mesh.triggerSlashAnim(),e)for(const o of e){if(o.stats.id===this.stats.id||o.stats.isDead||this.stats.team&&o.stats.team&&this.stats.team===o.stats.team)continue;const l=o.actor.position.x-this.actor.position.x,c=o.actor.position.y+.95-(this.actor.position.y+.95),h=Math.sqrt(l*l+c*c),d=(l*r+c*a)/(h||1);if(h<=3.8&&d>-.2){o.actor.velocity.x+=r*18,o.actor.velocity.y+=8,i&&i(o,90);break}}if(n){const o=Math.round(this.actor.position.x+r*1.5),l=Math.round(this.actor.position.y+.95+a*1.5),c=n.getTile(o,l);c===Z.WOOD_SCAFFOLD||c===Z.GLASS_WINDOW?n.destroyTile(o,l):c===Z.BRICK_CONCRETE&&n.damageTile(o,l,80)}setTimeout(()=>{this.stats.activeWeapon!==z.CUTLASS&&this.mesh.setWeapon(this.stats.activeWeapon)},280)}update(t,e,i,n){if(this.stats.isDead){this.mesh.update(t,this.actor.position.x,this.actor.position.y,0,0,!1,0);return}if(this.actor.isGrounded&&this.jetFuel<this.maxJetFuel&&(this.jetFuel=Math.min(this.maxJetFuel,this.jetFuel+t*45)),this.healthRegenDelay>0)this.healthRegenDelay-=t;else if(this.stats.hp<this.stats.maxHp){const r=this.stats.hp;this.stats.hp=Math.min(this.stats.maxHp,this.stats.hp+t*18),Math.floor(r)!==Math.floor(this.stats.hp)&&this.syncStatusBillboard()}if(this.stats.c4Count<4?(this.c4RegenTimer+=t,this.c4RegenTimer>=14&&(this.stats.c4Count++,this.c4RegenTimer=0)):this.c4RegenTimer=0,this.stats.rigCooldownTimer>0&&(this.stats.rigCooldownTimer-=t),this.rigBoostTimer>0&&(this.rigBoostTimer-=t),this.fireCooldown>0&&(this.fireCooldown-=t),this.meleeTimer>0&&(this.meleeTimer-=t),this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0)){const r=Ye[this.stats.activeWeapon];this.stats.ammo[this.stats.activeWeapon]=r.magSize}this.isSliding&&(this.slideTimer-=t,this.slideTimer<=0&&(this.isSliding=!1)),this.actor.updatePhysics(t,e),this.mesh.update(t,this.actor.position.x,this.actor.position.y,this.actor.velocity.x,this.actor.velocity.y,this.actor.isGrounded,n,this.isSliding,e)}destroy(){this.mesh.destroy(this.scene)}}class la{constructor(t,e,i,n,r=25e3,a,o=!1){M(this,"mesh");M(this,"type");M(this,"value");M(this,"weaponId");M(this,"isCollected",!1);M(this,"canRespawn",!1);M(this,"respawnTimer",0);M(this,"floatTime",Math.random()*Math.PI*2);if(this.type=e,this.value=r,this.weaponId=a,this.canRespawn=o,this.mesh=new Kt,this.mesh.position.set(i,n,0),t.add(this.mesh),e==="cash"){const p=new it(.7,.35,.45),g=new Nt({color:1096065,emissive:366185,emissiveIntensity:2.5,roughness:.3,metalness:.05}),v=new G(p,g);this.mesh.add(v);const m=new it(.18,.36,.46),f=new jt({color:16777215}),T=new G(m,f);this.mesh.add(T);const w=new Ei(.4,.65,16),y=new jt({color:1096065,side:Ue,transparent:!0,opacity:.75}),L=new G(w,y);L.rotation.x=Math.PI*.5,L.position.y=-.22,this.mesh.add(L)}else if(e==="weapon"){const p=new it(.85,.45,.55),g=new Nt({color:14251782,emissive:11817737,emissiveIntensity:2.2,roughness:.4,metalness:.1}),v=new G(p,g);this.mesh.add(v);const m=new Ei(.45,.75,16),f=new jt({color:16096779,side:Ue,transparent:!0,opacity:.75}),T=new G(m,f);T.rotation.x=Math.PI*.5,T.position.y=-.25,this.mesh.add(T)}else{const p=new it(.55,.42,.38),g=new Nt({color:14427686,emissive:10033947,emissiveIntensity:1.8,roughness:.3,metalness:.05}),v=new G(p,g);this.mesh.add(v);const m=new jt({color:16777215}),f=new G(new it(.32,.1,.4),m);this.mesh.add(f);const T=new G(new it(.1,.32,.4),m);this.mesh.add(T);const w=new Ei(.45,.72,16),y=new jt({color:15680580,side:Ue,transparent:!0,opacity:.75}),L=new G(w,y);L.rotation.x=Math.PI*.5,L.position.y=-.24,this.mesh.add(L)}const l=document.createElement("canvas");l.width=160,l.height=48;const c=l.getContext("2d");c.fillStyle=e==="cash"?"#10b981":e==="weapon"?"#f59e0b":"#ef4444",c.font='bold 22px "Chakra Petch", sans-serif',c.textAlign="center",c.textBaseline="middle",c.shadowColor="#000000",c.shadowBlur=8,c.fillText(e==="cash"?"₦ CASH":e==="weapon"?"📦 WEAPON":"❤️ +50 HP",80,24);const h=new Re(l),d=new br({map:h,transparent:!0,opacity:.95}),u=new xo(d);u.position.set(0,.8,0),u.scale.set(1.5,.5,1),this.mesh.add(u)}update(t){if(this.isCollected){this.canRespawn&&this.respawnTimer>0&&(this.respawnTimer-=t,this.respawnTimer<=0&&(this.isCollected=!1,this.mesh.visible=!0));return}this.floatTime+=t*3,this.mesh.rotation.y+=t*2.2,this.mesh.position.y+=Math.sin(this.floatTime)*t*.4}destroy(t){this.mesh.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const i=e.material;Array.isArray(i)?i.forEach(n=>{n.map&&n.map.dispose(),n.dispose()}):(i.map&&i.map.dispose(),i.dispose())}}),t.remove(this.mesh)}}class Yl{constructor(t){M(this,"player");M(this,"changeDecisionTimer",0);M(this,"targetPlayer",null);M(this,"targetPickup",null);M(this,"aimAngle",0);M(this,"facingDir",1);M(this,"jetpackFlightTimer",0);M(this,"jetpackCooldownTimer",0);M(this,"reactionTimer",.4);M(this,"burstFiringTimer",.45);M(this,"burstCooldownTimer",.8);M(this,"lastTargetId",null);this.player=t,this.changeDecisionTimer=Math.random()*1.5}hasLineOfSight(t,e,i,n,r){const a=Math.floor(t),o=Math.floor(e),l=Math.floor(i),c=Math.floor(n),h=Math.abs(l-a),d=Math.abs(c-o),u=a<l?1:-1,p=o<c?1:-1;let g=h-d,v=a,m=o;for(;v!==l||m!==c;){if((v!==a||m!==o)&&(v!==l||m!==c)&&r.isSolid(v,m))return!1;const f=2*g;f>-d&&(g-=d,v+=u),f<h&&(g+=h,m+=p)}return!0}update(t,e,i,n,r,a,o,l){if(this.player.stats.isDead){this.player.update(t,n,a,0);return}if(this.player.jetFuel<this.player.maxJetFuel&&(this.player.jetFuel=Math.min(this.player.maxJetFuel,this.player.jetFuel+t*45)),this.changeDecisionTimer-=t,this.jetpackCooldownTimer>0&&(this.jetpackCooldownTimer-=t),this.changeDecisionTimer<=0)if(this.changeDecisionTimer=.9+Math.random()*.7,o&&Math.random()>.35)this.targetPlayer=null,this.targetPickup=null;else{let P=null,S=14;for(let _=0;_<i.length;_++){const A=i[_];if(A.isCollected)continue;const D=this.player.actor.position.distanceTo(A.mesh.position);D<S&&(S=D,P=A)}this.targetPickup=P;let R=null,x=999;for(let _=0;_<e.length;_++){const A=e[_];if(A.stats.id===this.player.stats.id||A.stats.isDead)continue;const D=this.player.actor.position.distanceTo(A.actor.position),O=A.mesh.crownMesh.visible?.45:1,k=D*O;k<x&&(x=k,R=A)}R&&R.stats.id!==this.lastTargetId&&(this.lastTargetId=R.stats.id,this.reactionTimer=.35+Math.random()*.25),this.targetPlayer=R}let c=this.player.actor.position.x,h=this.player.actor.position.y;o&&!this.player.stats.isExtracted?(c=l.x,h=l.y):this.targetPickup?(c=this.targetPickup.mesh.position.x,h=this.targetPickup.mesh.position.y):this.targetPlayer&&(c=this.targetPlayer.actor.position.x,h=this.targetPlayer.actor.position.y);const d=c-this.player.actor.position.x,u=h-this.player.actor.position.y;Math.abs(d)>1.2&&(this.facingDir=d>0?1:-1);let p=0;Math.abs(d)>1.5&&(p=this.facingDir);const g=Math.floor(this.player.actor.position.x),v=Math.floor(this.player.actor.position.y+2.05),m=n.isSolid(g,v),f=Math.floor(this.player.actor.position.x+this.facingDir*.95),T=Math.floor(this.player.actor.position.y+.2),w=Math.floor(this.player.actor.position.y+1.1),y=n.isSolid(f,T)&&n.isSolid(f,w);let L=!1;if(m||(y||u>1.6)&&this.jetpackCooldownTimer<=0&&this.jetpackFlightTimer<=0&&(this.jetpackFlightTimer=.8+Math.random()*.5,this.jetpackCooldownTimer=1.2),this.jetpackFlightTimer>0&&(this.jetpackFlightTimer-=t,this.player.actor.position.y>=h+.5?this.jetpackFlightTimer=0:m||(L=!0)),this.player.updateMiniMilitiaMovement(t,p,L,!1,1),this.targetPlayer&&!this.targetPlayer.stats.isDead){const P=this.targetPlayer.actor.position.x-this.player.actor.position.x,S=this.targetPlayer.actor.position.y+.95-(this.player.actor.position.y+.95),R=Math.sqrt(P*P+S*S),x=Math.sin(performance.now()*.005+this.player.actor.position.x)*.16;this.aimAngle=Math.atan2(S,P)+x,this.facingDir=Math.cos(this.aimAngle)>=0?1:-1,R<18&&this.hasLineOfSight(this.player.actor.position.x,this.player.actor.position.y+.95,this.targetPlayer.actor.position.x,this.targetPlayer.actor.position.y+.95,n)?this.reactionTimer>0?this.reactionTimer-=t:this.burstCooldownTimer>0?this.burstCooldownTimer-=t:(this.burstFiringTimer-=t,r.fireWeapon(this.player,this.aimAngle),this.burstFiringTimer<=0&&(this.burstCooldownTimer=.65+Math.random()*.45,this.burstFiringTimer=.35+Math.random()*.25)):this.burstCooldownTimer=.4,R<2.2&&Math.random()<.03&&this.player.performMeleeLunge(this.aimAngle,e,(A,D)=>{A.takeDamage(D,this.player)}),R<6.5&&this.player.stats.rigCooldownTimer<=0&&Math.random()<.02&&(a.activateRig(this.player,n,this.aimAngle,this.facingDir),this.player.stats.rigCooldownTimer=5)}else this.aimAngle=this.facingDir>0?0:Math.PI;this.player.update(t,n,a,this.aimAngle)}}class Kl{constructor(t){M(this,"matchDuration",180);M(this,"matchTimeRemaining",180);M(this,"zoneShiftTimer",45);M(this,"activeZoneIndex",0);M(this,"zonePositions",[new I(12,10,0),new I(40,16,0),new I(68,10,0)]);M(this,"zoneMesh");M(this,"controllingPlayerId",null);const e=new qt(4,4,.4,24),i=new jt({color:16096779,transparent:!0,opacity:.45});this.zoneMesh=new G(e,i),this.zoneMesh.position.copy(this.zonePositions[0]),t.add(this.zoneMesh)}update(t,e){this.matchTimeRemaining>0&&(this.matchTimeRemaining-=t),this.zoneShiftTimer-=t,this.zoneShiftTimer<=0&&(this.zoneShiftTimer=45,this.activeZoneIndex=(this.activeZoneIndex+1)%this.zonePositions.length,this.zoneMesh.position.copy(this.zonePositions[this.activeZoneIndex]));const i=this.zonePositions[this.activeZoneIndex];let n=null;if(e.forEach(r=>{!r.stats.isDead&&r.actor.position.distanceTo(i)<4.2&&(n=r)}),n){this.controllingPlayerId=n.stats.id;const r=this.matchTimeRemaining<=30?2:1;n.stats.cash+=Math.round(1e4*r*t)}else this.controllingPlayerId=null}destroy(t){this.zoneMesh&&(this.zoneMesh.geometry&&this.zoneMesh.geometry.dispose(),this.zoneMesh.material&&this.zoneMesh.material.dispose(),t.remove(this.zoneMesh))}}const pn=class pn{constructor(){M(this,"bannerContainer");M(this,"audioCtx");M(this,"queue",[]);M(this,"isDisplaying",!1);M(this,"voiceLines",{[Oe.MATCH_START]:{banner:"OPERATION LIVE!",sub:"ALL OPERATIVES INFILTRATE THE ARENA",voice:"Yane Operatives! Target locked. Secure the Kudi!",color:"#06b6d4"},[Oe.FIRST_BLOOD]:{banner:"FIRST BLOOD!",sub:"FIRST CASUALTY CONFIRMED",voice:"First Blood! Aiki ya fara — the hunt begins!",color:"#ef4444"},[Oe.DOUBLE_KILL]:{banner:"DOUBLE ELIMINATION!",sub:"RAPID TAKEDOWN CONFIRMED",voice:"Double Elimination! Biyu a kasa — two down!",color:"#f97316"},[Oe.KILL_STREAK]:{banner:"SARKIN YAKI RAMPAGE!",sub:"UNSTOPPABLE COMBAT STREAK",voice:"Sarkin Yaki! Nobody can stop this operative!",color:"#eab308"},[Oe.VAULT_BREACHED]:{banner:"VAULT BREACHED!",sub:"MASTER BOUNTY CASE RELEASED",voice:"Vault Cracked! Ga Kudi nan — grab the master case!",color:"#f59e0b"},[Oe.CARRIER_MARKED]:{banner:"TARGET MARKED [👑]",sub:"SARKI BOUNTY CARRIER IDENTIFIED",voice:"Bounty Target Marked! Hunt down the carrier!",color:"#facc15"},[Oe.CHOPPER_ARRIVED]:{banner:"EXTRACTION LIVE!",sub:"ARMORED EXTRACTION GUNSHIP HAS ARRIVED",voice:"Gunship inbound! Ku taho — move to the extraction zone!",color:"#10b981"},[Oe.CLEAN_EVAC]:{banner:"HEIST COMPLETED!",sub:"100% CLEAN EXTRACTION SECURED",voice:"Gaskiya! Full payout secured. Mission complete!",color:"#22c55e"}});let t=document.getElementById("hype-announcer-banner");t||(t=document.createElement("div"),t.id="hype-announcer-banner",t.style.position="fixed",t.style.top="14px",t.style.left="50%",t.style.transform="translateX(-50%) translateY(-120%)",t.style.zIndex="9999",t.style.pointerEvents="none",t.style.transition="transform 0.28s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.25s ease",t.style.opacity="0",document.body.appendChild(t)),this.bannerContainer=t;const e=()=>{if(!this.audioCtx){const i=window.AudioContext||window.webkitAudioContext;i&&(this.audioCtx=new i)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()};window.addEventListener("pointerdown",e,{once:!1}),window.addEventListener("keydown",e,{once:!1})}static getInstance(){return pn.instance||(pn.instance=new pn),pn.instance}announce(t){const e=this.voiceLines[t];e&&(this.queue.push({event:t,bannerTitle:e.banner,bannerSubtitle:e.sub,voiceText:e.voice,color:e.color}),this.isDisplaying||this.processQueue())}processQueue(){if(this.queue.length===0){this.isDisplaying=!1;return}this.isDisplaying=!0;const t=this.queue.shift();this.playRadioFX(),this.playVoiceLine(t.voiceText),this.showBanner(t),setTimeout(()=>{this.hideBanner(),setTimeout(()=>{this.processQueue()},200)},1800)}showBanner(t){this.bannerContainer.innerHTML=`
      <div style="
        max-width: 290px;
        background: rgba(5, 8, 6, 0.94);
        border: 1px solid ${t.color};
        box-shadow: 0 4px 18px rgba(0,0,0,0.7);
        border-radius: 4px;
        padding: 5px 14px;
        text-align: center;
        backdrop-filter: blur(6px);
        font-family: 'JetBrains Mono', 'Chakra Petch', monospace;
      ">
        <div style="
          color: ${t.color};
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
          line-height: 1.2;
        ">
          ${t.bannerTitle}
        </div>
        <div style="
          color: #94a3b8;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-top: 1px;
        ">
          ${t.bannerSubtitle}
        </div>
      </div>
    `,this.bannerContainer.style.transform="translateX(-50%) translateY(0)",this.bannerContainer.style.opacity="1"}hideBanner(){this.bannerContainer.style.transform="translateX(-50%) translateY(-120%)",this.bannerContainer.style.opacity="0"}playRadioFX(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}if(this.audioCtx)try{const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),i=this.audioCtx.createGain(),n=this.audioCtx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1400,t),n.Q.setValueAtTime(4,t),e.type="sawtooth",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(2400,t+.08),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.01,t+.09),e.connect(n),n.connect(i),i.connect(this.audioCtx.destination),e.start(t),e.stop(t+.1);const r=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();r.type="sine",r.frequency.setValueAtTime(85,t),r.frequency.exponentialRampToValueAtTime(28,t+.35),a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.01,t+.38),r.connect(a),a.connect(this.audioCtx.destination),r.start(t),r.stop(t+.4)}catch(t){console.warn("[HypeAnnouncer] Radio FX failed:",t)}}playVoiceLine(t){if("speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}};M(pn,"instance");let eo=pn;const Hn={},ql="xag_operative_profile_v2",mn=class mn{constructor(){M(this,"currentProfile");M(this,"supabaseUrl",(Hn==null?void 0:Hn.VITE_SUPABASE_URL)||"");M(this,"supabaseAnonKey",(Hn==null?void 0:Hn.VITE_SUPABASE_ANON_KEY)||"");this.currentProfile=this.loadOrCreateProfile()}static getInstance(){return mn.instance||(mn.instance=new mn),mn.instance}loadOrCreateProfile(){try{const i=localStorage.getItem(ql);if(i){const n=JSON.parse(i);if(n&&n.call_sign)return n}}catch(i){console.warn("[OperativeService] Local storage read error:",i)}const t=Math.floor(1e3+Math.random()*9e3),e={id:`guest_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,call_sign:`GUEST_234_${t}`,clan_tag:"XAG",rank:1,cash_balance:1e5,unlocked_weapons:[z.RIFLE_XAG47,z.PISTOL_XAG9,z.CUTLASS],selected_rig:gt.BREACH_BOOSTER,selected_class:Vn.VANGUARD,is_claimed:!1};return this.saveToStorage(e),e}getProfile(){return this.currentProfile}saveToStorage(t){this.currentProfile=t;try{localStorage.setItem(ql,JSON.stringify(t))}catch(e){console.warn("[OperativeService] Local storage write error:",e)}}async syncWithCloud(){if(!(!this.supabaseUrl||!this.supabaseAnonKey))try{const t=await fetch(`${this.supabaseUrl}/rest/v1/operatives`,{method:"POST",headers:{apikey:this.supabaseAnonKey,Authorization:`Bearer ${this.supabaseAnonKey}`,"Content-Type":"application/json",Prefer:"resolution=merge-duplicates"},body:JSON.stringify({id:this.currentProfile.id,call_sign:this.currentProfile.call_sign,clan_tag:this.currentProfile.clan_tag,rank:this.currentProfile.rank,cash_balance:this.currentProfile.cash_balance,unlocked_weapons:this.currentProfile.unlocked_weapons,selected_class:this.currentProfile.selected_class,updated_at:new Date().toISOString()})});t.ok||console.warn("[OperativeService] Cloud sync response not ok:",t.status)}catch(t){console.warn("[OperativeService] Cloud sync offline fallback:",t)}}async claimAccount(t,e,i="XAG"){const n=t.trim().toUpperCase()||this.currentProfile.call_sign,r=i.trim().toUpperCase()||"XAG",a=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",a),c=Array.from(new Uint8Array(o)).map(h=>h.toString(16).padStart(2,"0")).join("");this.currentProfile.call_sign=n,this.currentProfile.clan_tag=r,this.currentProfile.is_claimed=!0,this.saveToStorage(this.currentProfile);try{localStorage.setItem("xag_claimed_hash",c)}catch{}return await this.syncWithCloud(),!0}bankMatchCash(t){return t>0&&(this.currentProfile.cash_balance+=t,this.currentProfile.rank=Math.max(1,Math.floor(this.currentProfile.cash_balance/5e5)+1),this.saveToStorage(this.currentProfile),this.syncWithCloud()),this.currentProfile.cash_balance}unlockWeapon(t,e){return this.currentProfile.unlocked_weapons.includes(t)?!0:this.currentProfile.cash_balance>=e?(this.currentProfile.cash_balance-=e,this.currentProfile.unlocked_weapons.push(t),this.saveToStorage(this.currentProfile),this.syncWithCloud(),!0):!1}isWeaponUnlocked(t){return this.currentProfile.unlocked_weapons.includes(t)}setClass(t){switch(this.currentProfile.selected_class=t,t){case Vn.VANGUARD:this.currentProfile.selected_rig=gt.BREACH_BOOSTER;break;case Vn.STRIKER:this.currentProfile.selected_rig=gt.OVERDRIVE_SLIDE;break;case Vn.SPECTER:this.currentProfile.selected_rig=gt.PHASE_DASH;break;case Vn.CHRONOS:this.currentProfile.selected_rig=gt.GLITCH_ANCHOR;break}this.saveToStorage(this.currentProfile)}};M(mn,"instance");let Ui=mn;class $l{constructor(t,e=ce.BIRNIN_KANO){M(this,"scene");M(this,"matchDuration",240);M(this,"matchTimeRemaining",240);M(this,"currentAct",Ae.ACT_1_BREACH);M(this,"mapId",ce.BIRNIN_KANO);M(this,"vaultPos",new I(40,3.5,0));M(this,"vaultHP",1500);M(this,"maxVaultHP",1500);M(this,"vaultMesh");M(this,"vaultDoorL");M(this,"vaultDoorR");M(this,"vaultHealthBarMesh");M(this,"vaultHealthCtx");M(this,"vaultHealthTexture");M(this,"isVaultBreached",!1);M(this,"masterCaseMesh");M(this,"masterCaseLightPillar");M(this,"masterCasePos",new I(40,3.5,0));M(this,"carrierId",null);M(this,"isCaseSpawned",!1);M(this,"passiveDripTimer",0);M(this,"extractionPadPos",new I(40,38,0));M(this,"chopperGroup");M(this,"chopperRotor");M(this,"extractionRingMesh");M(this,"extractionProgress",new Map);M(this,"isExtractionContested",!1);M(this,"contestedWarningTime",0);M(this,"announcer");M(this,"totalLobbyKills",0);M(this,"killStreaks",new Map);M(this,"lastKillTimestamp",new Map);this.scene=t,this.mapId=e,this.announcer=eo.getInstance(),e===ce.LAGOS_GOSLOW?(this.extractionPadPos.set(40,36,0),this.vaultPos.set(40,3.5,0)):(this.extractionPadPos.set(40,42,0),this.vaultPos.set(40,3.5,0)),this.vaultMesh=new Kt,this.vaultMesh.position.copy(this.vaultPos);const i=new Nt({color:4674921,emissive:1976635,roughness:.5,metalness:.1}),n=new G(new it(5.2,5,1.2),i);this.vaultMesh.add(n);const r=new Nt({color:14251782,emissive:7877903,emissiveIntensity:.8,roughness:.35,metalness:.1});this.vaultDoorL=new G(new it(2.1,4.4,.4),r),this.vaultDoorL.position.set(-1.15,0,.45),this.vaultMesh.add(this.vaultDoorL),this.vaultDoorR=new G(new it(2.1,4.4,.4),r),this.vaultDoorR.position.set(1.15,0,.45),this.vaultMesh.add(this.vaultDoorR);const a=document.createElement("canvas");a.width=256,a.height=64,this.vaultHealthCtx=a.getContext("2d"),this.vaultHealthTexture=new Re(a),this.vaultHealthBarMesh=new xo(new br({map:this.vaultHealthTexture,depthTest:!1})),this.vaultHealthBarMesh.position.set(0,3.6,0),this.vaultHealthBarMesh.scale.set(4.5,1.1,1),this.vaultMesh.add(this.vaultHealthBarMesh),this.updateVaultHealthBar(),t.add(this.vaultMesh),this.masterCaseMesh=new Kt;const o=new it(.9,.65,.35),l=new Nt({color:16096779,emissive:14251782,emissiveIntensity:1.5,metalness:.1,roughness:.1}),c=new G(o,l);this.masterCaseMesh.add(c);const h=new qt(.35,.35,40,16);h.translate(0,20,0);const d=new jt({color:16436245,transparent:!0,opacity:.35,side:Ue});this.masterCaseLightPillar=new G(h,d),this.masterCaseMesh.add(this.masterCaseLightPillar),this.masterCaseMesh.position.copy(this.masterCasePos),this.masterCaseMesh.visible=!1,t.add(this.masterCaseMesh),this.chopperGroup=new Kt,this.chopperGroup.position.set(this.extractionPadPos.x,this.extractionPadPos.y+4.5,0);const u=new Nt({color:3359061,emissive:988970,roughness:.4,metalness:.1}),p=new G(new it(5.5,1.8,1.6),u);this.chopperGroup.add(p);const g=new Uc({color:3718648,roughness:.1,metalness:.1,transparent:!0,opacity:.7}),v=new G(new it(1.6,1.2,1.4),g);v.position.set(2.2,.1,0),this.chopperGroup.add(v);const m=new jt({color:988970});this.chopperRotor=new G(new it(8.5,.08,.35),m),this.chopperRotor.position.set(.2,1.2,0),this.chopperGroup.add(this.chopperRotor);const f=new Nc(1096065,6,30,Math.PI*.25,.6);f.position.set(0,0,0),f.target.position.set(0,-15,0),this.chopperGroup.add(f),this.chopperGroup.add(f.target),this.chopperGroup.visible=!1,t.add(this.chopperGroup);const T=new Ei(.2,3.5,32);T.rotateX(-Math.PI/2);const w=new jt({color:1096065,transparent:!0,opacity:.45,side:Ue});this.extractionRingMesh=new G(T,w),this.extractionRingMesh.position.copy(this.extractionPadPos),this.extractionRingMesh.visible=!1,t.add(this.extractionRingMesh),setTimeout(()=>{this.announcer.announce(Oe.MATCH_START)},600)}updateVaultHealthBar(){const t=this.vaultHealthCtx;t.clearRect(0,0,256,64);const e=Math.max(0,this.vaultHP/this.maxVaultHP);t.fillStyle="rgba(15, 23, 42, 0.88)",t.strokeStyle="#e2e8f0",t.lineWidth=3,t.fillRect(4,4,248,56),t.strokeRect(4,4,248,56),t.font='800 14px "JetBrains Mono", monospace',t.fillStyle="#f59e0b",t.textAlign="center",t.fillText(`CENTRAL VAULT: ${Math.round(this.vaultHP)} HP`,128,22),t.fillStyle="#334155",t.fillRect(16,32,224,20),t.fillStyle=e>.4?"#22c55e":e>.2?"#f59e0b":"#ef4444",t.fillRect(16,32,224*e,20),this.vaultHealthTexture.needsUpdate=!0}damageVault(t,e,i){this.isVaultBreached||this.vaultHP<=0||(this.vaultHP-=t,this.updateVaultHealthBar(),this.vaultHP<=0&&this.breachVault(i))}breachVault(t){this.isVaultBreached||(this.isVaultBreached=!0,this.vaultHP=0,this.updateVaultHealthBar(),this.vaultDoorL.position.x-=4,this.vaultDoorL.position.z-=2,this.vaultDoorL.rotation.y=-.9,this.vaultDoorR.position.x+=4,this.vaultDoorR.position.z-=2,this.vaultDoorR.rotation.y=.9,t&&(t.spawnExplosionShockwave(this.vaultPos.x,this.vaultPos.y),t.spawnSparks(this.vaultPos.x,this.vaultPos.y,0,1,30)),this.announcer.announce(Oe.VAULT_BREACHED),this.transitionToAct(Ae.ACT_2_CARRIER))}transitionToAct(t){this.currentAct=t,t===Ae.ACT_2_CARRIER?(this.isCaseSpawned=!0,this.masterCaseMesh.visible=!0,this.masterCaseMesh.position.copy(this.vaultPos)):t===Ae.ACT_3_EXTRACTION&&(this.chopperGroup.visible=!0,this.extractionRingMesh.visible=!0,this.announcer.announce(Oe.CHOPPER_ARRIVED))}handleKill(t,e){this.totalLobbyKills++;const i=Date.now();this.totalLobbyKills===1&&this.announcer.announce(Oe.FIRST_BLOOD);const n=this.lastKillTimestamp.get(t.stats.id)||0;i-n<=4e3&&this.announcer.announce(Oe.DOUBLE_KILL),this.lastKillTimestamp.set(t.stats.id,i);const r=(this.killStreaks.get(t.stats.id)||0)+1;this.killStreaks.set(t.stats.id,r),this.killStreaks.set(e.stats.id,0),r>=3&&r%3===0&&this.announcer.announce(Oe.KILL_STREAK),this.carrierId===e.stats.id&&(this.dropMasterCase(e.actor.position.x,e.actor.position.y),e.mesh.setOdogwuCrown(!1))}dropMasterCase(t,e){this.carrierId=null,this.masterCaseMesh.visible=!0,this.masterCaseMesh.position.set(t,e+.5,0)}update(t,e,i,n){if(this.currentAct!==Ae.MATCH_OVER){if(this.matchTimeRemaining-=t,this.currentAct===Ae.ACT_1_BREACH&&(this.matchTimeRemaining<=150||this.vaultHP<=0)&&this.breachVault(i),this.currentAct===Ae.ACT_2_CARRIER&&this.matchTimeRemaining<=60&&this.transitionToAct(Ae.ACT_3_EXTRACTION),this.masterCaseMesh.visible&&(this.masterCaseMesh.rotation.y+=t*3),this.currentAct===Ae.ACT_2_CARRIER||this.currentAct===Ae.ACT_3_EXTRACTION){if(this.carrierId){const r=e.find(a=>a.stats.id===this.carrierId);r&&!r.stats.isDead?(this.masterCaseMesh.visible=!1,r.mesh.setOdogwuCrown(!0),this.passiveDripTimer+=t,this.passiveDripTimer>=1&&(r.stats.cash+=1e4,this.passiveDripTimer=0)):this.carrierId=null}else if(this.isCaseSpawned&&this.masterCaseMesh.visible){for(const r of e)if(!r.stats.isDead&&r.actor.position.distanceTo(this.masterCaseMesh.position)<2){this.carrierId=r.stats.id,r.mesh.setOdogwuCrown(!0),this.announcer.announce(Oe.CARRIER_MARKED);break}}}if(this.currentAct===Ae.ACT_3_EXTRACTION){this.chopperRotor.rotation.y+=t*30;const r=[];if(e.forEach(a=>{!a.stats.isDead&&a.actor.position.distanceTo(this.extractionPadPos)<=3.5&&r.push(a)}),r.length===1){this.isExtractionContested=!1;const a=r[0],o=(this.extractionProgress.get(a.stats.id)||0)+t;this.extractionProgress.set(a.stats.id,o),o>=5&&this.handleCleanEvac(a)}else r.length>1?(this.isExtractionContested=!0,this.contestedWarningTime=1):this.isExtractionContested=!1}this.matchTimeRemaining<=0&&this.handleTimeout(e)}}handleCleanEvac(t){this.currentAct=Ae.MATCH_OVER,t.stats.isExtracted=!0;const e=t.stats.cash+25e4;Ui.getInstance().bankMatchCash(e),this.announcer.announce(Oe.CLEAN_EVAC)}handleTimeout(t){this.currentAct=Ae.MATCH_OVER;const e=t.find(i=>i.stats.isLocalPlayer);if(e&&!e.stats.isDead&&!e.stats.isExtracted){const i=Math.floor(e.stats.cash*.5);Ui.getInstance().bankMatchCash(i)}}destroy(t){t.remove(this.vaultMesh),t.remove(this.masterCaseMesh),t.remove(this.chopperGroup),t.remove(this.extractionRingMesh)}}class k0{constructor(t,e){M(this,"player");M(this,"particles");M(this,"targetX");M(this,"targetY");M(this,"targetVx");M(this,"targetVy");M(this,"targetAimAngle");M(this,"currentAimAngle");M(this,"targetFacingRight");M(this,"targetIsJetFlying");M(this,"targetIsGrounded");M(this,"targetIsSliding");M(this,"lastDamageTime",0);this.player=t,this.particles=e,this.targetX=t.actor.position.x,this.targetY=t.actor.position.y,this.targetVx=0,this.targetVy=0,this.targetAimAngle=0,this.currentAimAngle=0,this.targetFacingRight=!0,this.targetIsJetFlying=!1,this.targetIsGrounded=!0,this.targetIsSliding=!1}applySnapshot(t){const e=performance.now();this.targetX=t.x,this.targetY=t.y,this.targetVx=t.vx,this.targetVy=t.vy,this.targetAimAngle=t.aimAngle,this.targetFacingRight=t.facingRight,this.targetIsJetFlying=t.isJetFlying,this.targetIsGrounded=t.isGrounded,this.targetIsSliding=t.isSliding,(!(e-this.lastDamageTime<600)||t.hp<=this.player.stats.hp)&&(this.player.stats.hp=t.hp),this.player.stats.armor=t.armor,this.player.jetFuel=t.fuel,this.player.stats.isDead=t.isDead,this.player.syncStatusBillboard(),this.player.stats.activeWeapon!==t.activeWeapon&&(this.player.stats.activeWeapon=t.activeWeapon,this.player.mesh.setWeapon(t.activeWeapon))}notifyLocalDamageDealt(){this.lastDamageTime=performance.now()}update(t){if(this.player.stats.isDead)return;this.targetX+=this.targetVx*t,this.targetY+=this.targetVy*t,!this.targetIsGrounded&&!this.targetIsJetFlying&&(this.targetVy-=28*t);const e=this.targetX-this.player.actor.position.x,i=this.targetY-this.player.actor.position.y,n=e*e+i*i;if(n>36)this.player.actor.position.x=this.targetX,this.player.actor.position.y=this.targetY;else{const a=n>1.5?26:16,o=Math.min(1,t*a);this.player.actor.position.x+=e*o,this.player.actor.position.y+=i*o}this.player.actor.velocity.x=this.targetVx,this.player.actor.velocity.y=this.targetVy;let r=this.targetAimAngle-this.currentAimAngle;for(;r<-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;this.currentAimAngle+=r*Math.min(1,t*25),this.player.mesh.update(t,this.player.actor.position.x,this.player.actor.position.y,this.targetVx,this.targetVy,this.targetIsGrounded,this.currentAimAngle,this.targetIsSliding),this.targetIsJetFlying&&Math.random()<.6&&this.particles.spawnJetpackSmoke(this.player.actor.position.x+(this.targetFacingRight?-.2:.2),this.player.actor.position.y+.35,this.targetVx*.5,-3.5)}}class Zl{constructor(t,e=3){M(this,"teamScores",{blue:0,red:0});M(this,"targetScore",25);M(this,"matchTimeRemaining",600);M(this,"isMatchOver",!1);M(this,"winningTeam",null);M(this,"scene");this.scene=t,this.targetScore=e>=5?40:25}get blueScore(){return this.teamScores.blue}get redScore(){return this.teamScores.red}update(t){this.isMatchOver||(this.matchTimeRemaining=Math.max(0,this.matchTimeRemaining-t),this.matchTimeRemaining<=0&&(this.isMatchOver=!0,this.teamScores.blue>this.teamScores.red?this.winningTeam="blue":this.teamScores.red>this.teamScores.blue?this.winningTeam="red":this.winningTeam="draw"))}recordKill(t,e){if(!this.isMatchOver){if(e&&e.stats.team&&t.stats.team){if(e.stats.team===t.stats.team)return;e.stats.team==="blue"?this.teamScores.blue++:e.stats.team==="red"&&this.teamScores.red++}this.teamScores.blue>=this.targetScore?(this.isMatchOver=!0,this.winningTeam="blue"):this.teamScores.red>=this.targetScore&&(this.isMatchOver=!0,this.winningTeam="red")}}isFriendlyFire(t,e){return!t.stats.team||!e.stats.team?!1:t.stats.team===e.stats.team}}class jl{constructor(t,e=20){M(this,"targetKills",20);M(this,"matchTimeRemaining",600);M(this,"isMatchOver",!1);M(this,"winnerId",null);M(this,"scene");this.scene=t,this.targetKills=e}update(t,e){if(!this.isMatchOver){this.matchTimeRemaining=Math.max(0,this.matchTimeRemaining-t);for(const i of e)if(i.stats.kills>=this.targetKills){this.isMatchOver=!0,this.winnerId=i.stats.id;break}if(this.matchTimeRemaining<=0){this.isMatchOver=!0;let i=-1,n=null;for(const r of e)r.stats.kills>i&&(i=r.stats.kills,n=r.stats.id);this.winnerId=n}}}recordKill(t,e){this.isMatchOver||e&&(e.stats.kills++,e.stats.kills>=this.targetKills&&(this.isMatchOver=!0,this.winnerId=e.stats.id))}}class H0{constructor(t){M(this,"currentMode",Me.ODOGWU_STASH);M(this,"currentMap",ce.BIRNIN_KANO);M(this,"tdmMode");M(this,"ffaMode");M(this,"heistMode");M(this,"odogwuMode");M(this,"vaultMode");M(this,"apapaMode");M(this,"players",[]);M(this,"bots",[]);M(this,"remoteControllers",new Map);M(this,"pickups",[]);M(this,"isMatchOver",!1);M(this,"scene");M(this,"respawnTimeouts",[]);this.scene=t}cleanup(){for(const t of this.respawnTimeouts)clearTimeout(t);this.respawnTimeouts=[];for(const t of this.players)t.destroy();this.players=[],this.bots=[],this.remoteControllers.clear();for(const t of this.pickups)t.destroy(this.scene);this.pickups=[],this.heistMode&&(this.heistMode.destroy(this.scene),this.heistMode=void 0),this.tdmMode=void 0,this.ffaMode=void 0,this.odogwuMode&&(this.odogwuMode.destroy(this.scene),this.odogwuMode=void 0),this.vaultMode&&(this.vaultMode.destroy(this.scene),this.vaultMode=void 0),this.apapaMode&&(this.apapaMode.destroy(this.scene),this.apapaMode=void 0)}initMatch(t,e,i,n=ce.BIRNIN_KANO,r=!0,a=3){this.cleanup(),this.currentMode=t,this.currentMap=n,this.isMatchOver=!1,t===Me.TEAM_DEATHMATCH?this.tdmMode=new Zl(this.scene,a):t===Me.FREE_FOR_ALL?this.ffaMode=new jl(this.scene,20):t===Me.ODOGWU_STASH||t===Me.VAULT_HEIST?this.heistMode=new $l(this.scene,n):this.apapaMode=new Kl(this.scene);const o=n===ce.LAGOS_GOSLOW?{x:16,y:6.5}:{x:14,y:14.5},l=new _s(this.scene,"player_local",e||"Operative_01",o.x,o.y,!0,i);if(t===Me.TEAM_DEATHMATCH?l.stats.team="blue":l.stats.team="none",this.players.push(l),r){const h=[{id:"bot_sarki",name:"Sarkin_Kano",rig:gt.BREACH_BOOSTER,weapon:z.RIFLE_XAG47,x:26,y:18.5},{id:"bot_arewa",name:"Arewa_Sniper",rig:gt.PHASE_DASH,weapon:z.RAIL_SNIPER,x:62,y:34.5},{id:"bot_danauta",name:"Dan_auta_234",rig:gt.OVERDRIVE_SLIDE,weapon:z.AKIMBO_UZIS,x:42,y:18.5},{id:"bot_ghost",name:"Ghost_Lagos",rig:gt.PHASE_DASH,weapon:z.GHOST_SMG,x:52,y:26.5},{id:"bot_ekoviper",name:"Eko_Viper",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12,x:20,y:24.5},{id:"bot_delta",name:"Delta_Kano",rig:gt.BREACH_BOOSTER,weapon:z.VULCAN_MINIGUN,x:34,y:18.5},{id:"bot_zaria",name:"Zaria_Fox",rig:gt.PHASE_DASH,weapon:z.BUNKER_RPG,x:48,y:18.5},{id:"bot_ibadan",name:"Ibadan_Heavy",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12,x:58,y:26.5},{id:"bot_kaduna",name:"Kaduna_Strike",rig:gt.OVERDRIVE_SLIDE,weapon:z.RIFLE_XAG47,x:18,y:14.5}],d=[{id:"bot_sarki",name:"Sarkin_Kano",rig:gt.BREACH_BOOSTER,weapon:z.RIFLE_XAG47,x:24,y:6.5},{id:"bot_arewa",name:"Arewa_Sniper",rig:gt.PHASE_DASH,weapon:z.RAIL_SNIPER,x:64,y:28.5},{id:"bot_danauta",name:"Dan_auta_234",rig:gt.OVERDRIVE_SLIDE,weapon:z.AKIMBO_UZIS,x:56,y:6.5},{id:"bot_ghost",name:"Ghost_Lagos",rig:gt.PHASE_DASH,weapon:z.GHOST_SMG,x:38,y:22.5},{id:"bot_ekoviper",name:"Eko_Viper",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12,x:12,y:24.5},{id:"bot_delta",name:"Delta_Kano",rig:gt.BREACH_BOOSTER,weapon:z.VULCAN_MINIGUN,x:30,y:6.5},{id:"bot_zaria",name:"Zaria_Fox",rig:gt.PHASE_DASH,weapon:z.BUNKER_RPG,x:46,y:22.5},{id:"bot_ibadan",name:"Ibadan_Heavy",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12,x:68,y:6.5},{id:"bot_kaduna",name:"Kaduna_Strike",rig:gt.OVERDRIVE_SLIDE,weapon:z.RIFLE_XAG47,x:18,y:24.5}],u=n===ce.LAGOS_GOSLOW?d:h,p=t===Me.TEAM_DEATHMATCH?a*2-1:5;for(let g=0;g<p;g++){const v=u[g%u.length],m=new _s(this.scene,`${v.id}_${g}`,v.name,v.x+(g>4?(g-4)*2:0),v.y,!1,v.rig);m.stats.primaryWeapon=v.weapon,m.stats.activeWeapon=v.weapon,m.mesh.setWeapon(v.weapon),t===Me.TEAM_DEATHMATCH?m.stats.team=g<a-1?"blue":"red":m.stats.team="none",this.players.push(m);const f=new Yl(m);this.bots.push(f)}}return(n===ce.LAGOS_GOSLOW?[{x:8,y:6.5,type:"cash",respawn:!1},{x:22,y:6.5,type:"cash",respawn:!1},{x:38,y:22.5,type:"cash",respawn:!1},{x:54,y:6.5,type:"cash",respawn:!1},{x:70,y:6.5,type:"cash",respawn:!1},{x:14,y:28.5,type:"cash",respawn:!1},{x:26,y:22.5,type:"weapon",wId:z.SHOTGUN_AA12,respawn:!0},{x:50,y:22.5,type:"weapon",wId:z.BUNKER_RPG,respawn:!0},{x:12,y:3.5,type:"health",respawn:!0},{x:64,y:3.5,type:"health",respawn:!0},{x:28,y:7.5,type:"health",respawn:!0},{x:44,y:22.5,type:"health",respawn:!0},{x:16,y:29.5,type:"health",respawn:!0}]:[{x:10,y:13.5,type:"cash",respawn:!1},{x:25,y:3.5,type:"cash",respawn:!1},{x:24,y:17.5,type:"cash",respawn:!1},{x:40,y:17.5,type:"cash",respawn:!1},{x:55,y:17.5,type:"cash",respawn:!1},{x:65,y:3.5,type:"cash",respawn:!1},{x:40,y:27.5,type:"cash",respawn:!1},{x:18,y:13.5,type:"weapon",wId:z.BUNKER_RPG,respawn:!0},{x:62,y:25.5,type:"weapon",wId:z.VULCAN_MINIGUN,respawn:!0},{x:14,y:3.5,type:"health",respawn:!0},{x:66,y:3.5,type:"health",respawn:!0},{x:10,y:13.5,type:"health",respawn:!0},{x:40,y:17.5,type:"health",respawn:!0},{x:64,y:14.5,type:"health",respawn:!0},{x:40,y:27.5,type:"health",respawn:!0}]).forEach(h=>{const d=new la(this.scene,h.type,h.x,h.y,25e3,h.wId,h.respawn);this.pickups.push(d)}),l}initMultiplayerMatch(t,e,i,n,r,a,o,l=!0,c=3){this.cleanup(),this.currentMode=t,this.currentMap=r,this.isMatchOver=!1,t===Me.TEAM_DEATHMATCH?this.tdmMode=new Zl(this.scene,c):t===Me.FREE_FOR_ALL?this.ffaMode=new jl(this.scene,20):t===Me.ODOGWU_STASH||t===Me.VAULT_HEIST?this.heistMode=new $l(this.scene,r):this.apapaMode=new Kl(this.scene);const h=r===ce.LAGOS_GOSLOW?[{x:16,y:6.5},{x:24,y:6.5},{x:38,y:22.5},{x:56,y:6.5},{x:64,y:28.5},{x:12,y:24.5}]:[{x:14,y:14.5},{x:26,y:18.5},{x:42,y:18.5},{x:52,y:26.5},{x:62,y:34.5},{x:20,y:24.5}];let d=0;const u=h[d++],p=new _s(this.scene,e,i||"Operative_01",u.x,u.y,!0,n);if(this.players.push(p),this.remoteControllers.clear(),a.forEach(v=>{if(v.id===e)return;const m=h[d%h.length];d++;const f=new _s(this.scene,v.id,v.name,m.x,m.y,!1,v.rig);f.stats.primaryWeapon=v.primaryWeapon,f.stats.activeWeapon=v.primaryWeapon,f.mesh.setWeapon(v.primaryWeapon),this.players.push(f);const T=new k0(f,o);this.remoteControllers.set(v.id,T)}),l){const v=Math.max(0,6-this.players.length),m=r===ce.LAGOS_GOSLOW?[{id:"bot_sarki",name:"Sarkin_Kano",rig:gt.BREACH_BOOSTER,weapon:z.RIFLE_XAG47},{id:"bot_arewa",name:"Arewa_Sniper",rig:gt.PHASE_DASH,weapon:z.RAIL_SNIPER},{id:"bot_danauta",name:"Dan_auta_234",rig:gt.OVERDRIVE_SLIDE,weapon:z.AKIMBO_UZIS},{id:"bot_ghost",name:"Ghost_Lagos",rig:gt.PHASE_DASH,weapon:z.GHOST_SMG},{id:"bot_ekoviper",name:"Eko_Viper",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12}]:[{id:"bot_sarki",name:"Sarkin_Kano",rig:gt.BREACH_BOOSTER,weapon:z.RIFLE_XAG47},{id:"bot_arewa",name:"Arewa_Sniper",rig:gt.PHASE_DASH,weapon:z.RAIL_SNIPER},{id:"bot_danauta",name:"Dan_auta_234",rig:gt.OVERDRIVE_SLIDE,weapon:z.AKIMBO_UZIS},{id:"bot_ghost",name:"Ghost_Lagos",rig:gt.PHASE_DASH,weapon:z.GHOST_SMG},{id:"bot_ekoviper",name:"Eko_Viper",rig:gt.GLITCH_ANCHOR,weapon:z.SHOTGUN_AA12}];for(let f=0;f<v;f++){const T=m[f%m.length],w=h[d%h.length];d++;const y=new _s(this.scene,T.id,T.name,w.x,w.y,!1,T.rig);y.stats.primaryWeapon=T.weapon,y.stats.activeWeapon=T.weapon,y.mesh.setWeapon(T.weapon),this.players.push(y);const L=new Yl(y);this.bots.push(L)}}return(r===ce.LAGOS_GOSLOW?[{x:8,y:6.5,type:"cash",respawn:!1},{x:22,y:6.5,type:"cash",respawn:!1},{x:38,y:22.5,type:"cash",respawn:!1},{x:54,y:6.5,type:"cash",respawn:!1},{x:70,y:6.5,type:"cash",respawn:!1},{x:14,y:28.5,type:"cash",respawn:!1},{x:26,y:22.5,type:"weapon",wId:z.SHOTGUN_AA12,respawn:!0},{x:50,y:22.5,type:"weapon",wId:z.BUNKER_RPG,respawn:!0},{x:12,y:3.5,type:"health",respawn:!0},{x:64,y:3.5,type:"health",respawn:!0},{x:28,y:7.5,type:"health",respawn:!0},{x:44,y:22.5,type:"health",respawn:!0},{x:16,y:29.5,type:"health",respawn:!0}]:[{x:10,y:13.5,type:"cash",respawn:!1},{x:25,y:3.5,type:"cash",respawn:!1},{x:24,y:17.5,type:"cash",respawn:!1},{x:40,y:17.5,type:"cash",respawn:!1},{x:55,y:17.5,type:"cash",respawn:!1},{x:65,y:3.5,type:"cash",respawn:!1},{x:40,y:27.5,type:"cash",respawn:!1},{x:18,y:13.5,type:"weapon",wId:z.BUNKER_RPG,respawn:!0},{x:62,y:25.5,type:"weapon",wId:z.VULCAN_MINIGUN,respawn:!0},{x:14,y:3.5,type:"health",respawn:!0},{x:66,y:3.5,type:"health",respawn:!0},{x:10,y:13.5,type:"health",respawn:!0},{x:40,y:17.5,type:"health",respawn:!0},{x:64,y:14.5,type:"health",respawn:!0},{x:40,y:27.5,type:"health",respawn:!0}]).forEach(v=>{const m=new la(this.scene,v.type,v.x,v.y,25e3,v.wId,v.respawn);this.pickups.push(m)}),p}getTimeRemaining(){return this.heistMode?this.heistMode.matchTimeRemaining:this.odogwuMode?this.odogwuMode.matchTimeRemaining:this.vaultMode?this.vaultMode.matchTimeRemaining:this.apapaMode?this.apapaMode.matchTimeRemaining:0}getExtractionPos(){var t;return this.heistMode?this.heistMode.extractionPadPos:((t=this.odogwuMode)==null?void 0:t.extractionPosition)||new I(40,41,0)}isExtractionActive(){var t;return this.heistMode?this.heistMode.currentAct===Ae.ACT_3_EXTRACTION:!!((t=this.odogwuMode)!=null&&t.isExtractionActive())}handlePlayerElimination(t,e){this.tdmMode?this.tdmMode.recordKill(t,e):this.ffaMode&&this.ffaMode.recordKill(t,e),e&&this.heistMode&&this.heistMode.handleKill(e,t),this.odogwuMode&&this.odogwuMode.handlePlayerElimination(t,e,this.scene,this.pickups);const i=new la(this.scene,"cash",t.actor.position.x,t.actor.position.y+.8,5e4);this.pickups.push(i),t.respawnTimer=3.5}checkPickupCollisions(t,e){if(!t.stats.isDead)for(let i=0;i<this.pickups.length;i++){const n=this.pickups[i];if(n.isCollected)continue;if(t.actor.position.distanceTo(n.mesh.position)<2){if(n.type==="health"){if(t.stats.hp>=t.stats.maxHp)continue;t.heal(50),n.isCollected=!0,n.mesh.visible=!1,n.respawnTimer=20,e()}else if(n.type==="cash")n.isCollected=!0,t.stats.cash+=n.value,n.destroy(this.scene),e();else if(n.type==="weapon"&&n.weaponId){n.isCollected=!0,n.mesh.visible=!1,n.respawnTimer=25;const a=t.stats.activeWeapon,o=Ye[a];o&&(t.stats.ammo[a]=o.magSize,t.reloadTimer=0),t.stats.cash+=15e3,e()}}}}update(t,e,i,n,r,a){if(this.isMatchOver)return;this.tdmMode?(this.tdmMode.update(t),this.tdmMode.isMatchOver&&(this.isMatchOver=!0)):this.ffaMode?(this.ffaMode.update(t,this.players),this.ffaMode.isMatchOver&&(this.isMatchOver=!0)):this.heistMode?(this.heistMode.update(t,this.players,a,e),this.heistMode.currentAct===Ae.MATCH_OVER&&(this.isMatchOver=!0)):this.odogwuMode?(this.odogwuMode.update(t,this.players),this.odogwuMode.matchTimeRemaining<=0&&(this.isMatchOver=!0)):this.vaultMode?(this.vaultMode.update(t,this.players),this.vaultMode.matchTimeRemaining<=0&&(this.isMatchOver=!0)):this.apapaMode&&(this.apapaMode.update(t,this.players),this.apapaMode.matchTimeRemaining<=0&&(this.isMatchOver=!0));for(let u=this.pickups.length-1;u>=0;u--){const p=this.pickups[u];p.update(t),p.isCollected&&!p.canRespawn&&this.pickups.splice(u,1)}this.players.forEach(u=>{this.checkPickupCollisions(u,r)}),this.remoteControllers.forEach(u=>{u.update(t)});const o=this.isExtractionActive(),l=this.getExtractionPos();this.bots.forEach(u=>{u.update(t,this.players,this.pickups,e,i,n,o,l),this.heistMode&&this.heistMode.currentAct===Ae.ACT_1_BREACH&&u.player.actor.position.distanceTo(this.heistMode.vaultPos)<14&&Math.random()<.15&&this.heistMode.damageVault(15,e,a)});const c=[{x:14,y:14},{x:34,y:18},{x:48,y:18},{x:65,y:26},{x:25,y:5},{x:55,y:5}],h=[{x:8,y:6.5},{x:22,y:6.5},{x:38,y:22},{x:54,y:6.5},{x:16,y:28},{x:66,y:28}],d=this.currentMap===ce.LAGOS_GOSLOW?h:c;this.players.forEach(u=>{if(u.stats.isDead&&u.respawnTimer>0&&(u.respawnTimer-=t,u.respawnTimer<=0)){const p=d[Math.floor(Math.random()*d.length)];u.respawn(p.x,p.y)}}),this.resolvePlayerSeparation(e)}resolvePlayerSeparation(t){const e=this.players.filter(i=>!i.stats.isDead);for(let i=0;i<e.length;i++)for(let n=i+1;n<e.length;n++){const r=e[i],a=e[n],o=a.actor.position.x-r.actor.position.x,l=a.actor.position.y+.9-(r.actor.position.y+.9),c=.95;if(Math.abs(o)<c&&Math.abs(l)<1.6){const d=c-Math.abs(o),u=o===0?i<n?-1:1:Math.sign(o),p=.4,g=r.actor.position.x-u*(d*.5),v=Math.floor(r.actor.position.y+.3),m=Math.floor(r.actor.position.y+1.4),f=Math.floor(g+(u<0?p:-p)),T=t.isSolid(f,v)||t.isSolid(f,m),w=a.actor.position.x+u*(d*.5),y=Math.floor(a.actor.position.y+.3),L=Math.floor(a.actor.position.y+1.4),P=Math.floor(w+(u>0?p:-p)),S=t.isSolid(P,y)||t.isSolid(P,L);!T&&!S?(r.actor.position.x-=u*(d*.5),a.actor.position.x+=u*(d*.5)):!T&&S?r.actor.position.x-=u*d:T&&!S&&(a.actor.position.x+=u*d);const R=(r.actor.velocity.x+a.actor.velocity.x)*.5;r.actor.velocity.x=R-u*1.5,a.actor.velocity.x=R+u*1.5}}}getScoreboard(){const t=this.players.map(e=>{var i,n;return{id:e.stats.id,name:e.stats.name,cash:e.stats.cash,kills:e.stats.kills,deaths:e.stats.deaths,wallsDestroyed:e.stats.wallsDestroyed,isSarki:((i=this.heistMode)==null?void 0:i.carrierId)===e.stats.id||!!e.mesh.crownMesh.visible,isOdogwu:((n=this.heistMode)==null?void 0:n.carrierId)===e.stats.id||!!e.mesh.crownMesh.visible,isLocal:e.stats.isLocalPlayer}});return t.sort((e,i)=>i.cash-e.cash),t}}class z0{constructor(t,e){M(this,"canvas");M(this,"ctx");M(this,"camera");M(this,"floatingTexts",[]);M(this,"projVec",new I);const i=document.getElementById(t);if(!i)throw new Error(`HUD Canvas ${t} not found`);this.canvas=i,this.ctx=this.canvas.getContext("2d"),this.camera=e,this.resize(),window.addEventListener("resize",this.resize.bind(this))}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addDamagePopup(t,e,i,n="#ff3366",r=22){this.projVec.set(t,e,0).project(this.camera);const a=(this.projVec.x*.5+.5)*this.canvas.width,o=(-(this.projVec.y*.5)+.5)*this.canvas.height;this.floatingTexts.push({text:i,x:a,y:o,color:n,size:r,alpha:1,life:0})}render(t,e,i,n,r=.016){const a=this.ctx,o=this.canvas.width,l=this.canvas.height;a.clearRect(0,0,o,l),this.renderTopBar(a,o,l,t,i),this.renderEdgeIndicators(a,o,l,t,i),this.renderFloatingTexts(a,r),this.updateHTMLControls(t,e),this.renderVisualSticks(a,o,l,e,t),this.renderRigCooldown(a,o,l,t,e.state.isTouch),t.stats.isDead&&this.renderDeathScreen(a,o,l,t)}renderTopBar(t,e,i,n,r){var S;const a=e<900,o=a?200:280,l=a?30:34;t.fillStyle="rgba(15, 23, 42, 0.45)",t.strokeStyle="rgba(56, 189, 248, 0.35)",t.lineWidth=1.5,t.beginPath(),t.roundRect(e*.5-o*.5,8,o,l,8),t.fill(),t.stroke();const c=Math.max(0,Math.floor(r.getTimeRemaining())),h=Math.floor(c/60),d=c%60,u=`${h}:${d<10?"0":""}${d}`;let p=r.currentMode.replace("_"," ");if(r.heistMode?r.heistMode.currentAct===Ae.ACT_1_BREACH?p=`ACT I: VAULT (${Math.round(r.heistMode.vaultHP)} HP)`:r.heistMode.currentAct===Ae.ACT_2_CARRIER?p="ACT II: SARKI CARRIER":r.heistMode.currentAct===Ae.ACT_3_EXTRACTION&&(p=r.heistMode.isExtractionContested?"⚠️ LZ CONTESTED!":"ACT III: CHOPPER EVAC"):r.tdmMode?p=`TEAM DEATHMATCH (TARGET: ${r.tdmMode.targetScore})`:r.ffaMode&&(p=`FREE FOR ALL (FIRST TO ${r.ffaMode.targetKills})`),t.fillStyle=(S=r.heistMode)!=null&&S.isExtractionContested?"#ef4444":"#f59e0b",t.font=`800 ${a?8.5:9.5}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(p,e*.5,a?15:17),r.tdmMode){const R=r.tdmMode.blueScore,x=r.tdmMode.redScore;t.font=`900 ${a?13:15}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillStyle="#38bdf8",t.fillText(`BLUE: ${R}`,e*.5-45,a?29:32),t.fillStyle="#64748b",t.fillText("-",e*.5,a?29:32),t.fillStyle="#f87171",t.fillText(`RED: ${x}`,e*.5+45,a?29:32)}else r.ffaMode?(t.fillStyle=c<=30?"#ef4444":"#f8fafc",t.font=`800 ${a?13:15}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(`${u}  •  KILLS: ${n.stats.kills}/${r.ffaMode.targetKills}`,e*.5,a?29:32)):(t.fillStyle=c<=30?"#ef4444":"#f8fafc",t.font=`800 ${a?14:16}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(u,e*.5,a?29:32));t.fillStyle="#cbd5e1",t.font=`700 ${a?9:10}px "JetBrains Mono", monospace`,t.textAlign="right",t.fillText(`K:${n.stats.kills} D:${n.stats.deaths}`,e*.5+o*.5-8,a?29:32);const g=a?130:155,v=a?26:28,m=Math.max(16,e*.5-o*.5-g-10),f=8;t.fillStyle="rgba(6, 78, 59, 0.70)",t.strokeStyle="#10b981",t.lineWidth=1.5,t.beginPath(),t.roundRect(m,f,g,v,8),t.fill(),t.stroke(),t.fillStyle="#34d399",t.font=`800 ${a?12:13.5}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(`💰 ₦${n.stats.cash.toLocaleString()}`,m+g*.5,f+(a?17:19));const T=16,w=a?42:46,y=a?110:145;t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,w,y,9);const L=Math.max(0,n.stats.hp/n.stats.maxHp);t.fillStyle=L>.35?"#10b981":"#ef4444",t.fillRect(T,w,y*L,9),t.strokeStyle="rgba(255, 255, 255, 0.2)",t.strokeRect(T,w,y,9),t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,w+11,y,4);const P=Math.max(0,n.stats.armor/n.stats.maxArmor);t.fillStyle="#38bdf8",t.fillRect(T,w+11,y*P,4),t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,w+17,y,5),t.fillStyle="#f59e0b",t.fillRect(T,w+17,y,5),t.strokeStyle="rgba(251, 191, 36, 0.55)",t.strokeRect(T,w+17,y,5),t.fillStyle="#fbbf24",t.font='800 8.5px "JetBrains Mono", monospace',t.textAlign="left",t.fillText("⚡ UNLIMITED NITRO",T,w+32)}updateHTMLControls(t,e){const i=document.getElementById("btn-touch-swap");if(i){const l=Ye[t.stats.activeWeapon],c=t.stats.ammo[t.stats.activeWeapon];t.reloadTimer>0?i.innerText=`⚡ RLD ${t.reloadTimer.toFixed(1)}s`:i.innerText=`🔄 ${l.name.split(" ")[0]} [${c}]`}const n=document.getElementById("btn-touch-fire");n&&(t.reloadTimer>0?(n.innerText=`RLD ${t.reloadTimer.toFixed(1)}s`,n.style.opacity="0.5"):(n.innerText="🎯 FIRE",n.style.opacity=e.state.firing?"1.0":"0.85"));const r=document.getElementById("btn-touch-rig");if(r)if(t.stats.rigCooldownTimer>0)r.innerText=`${t.stats.rigCooldownTimer.toFixed(1)}s`,r.style.opacity="0.45";else{const l={BREACH_BOOSTER:"🚀 BOOST",OVERDRIVE_SLIDE:"⚡ SLIDE",PHASE_DASH:"✨ PHASE",GLITCH_ANCHOR:"⚓ RECALL"};r.innerText=l[t.stats.rigType]||"⚡ RIG",r.style.opacity="0.9"}const a=document.getElementById("btn-touch-c4");a&&(a.innerText=`💣 C4 [${t.stats.c4Count}]`);const o=document.getElementById("btn-touch-fly");o&&(o.style.opacity=t.isJetFlying?"1.0":"0.85")}renderVisualSticks(t,e,i,n,r){if(!(n.state.isTouch||"ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024))return;const o=n.isLeftActive?n.leftTouchStart.x:95,l=n.isLeftActive?n.leftTouchStart.y:i-95,c=n.isLeftActive?n.leftTouchCurrent.x:o,h=n.isLeftActive?n.leftTouchCurrent.y:l,d=56;t.beginPath(),t.arc(o,l,d,0,Math.PI*2),t.fillStyle="rgba(15, 23, 42, 0.45)",t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.18)",t.lineWidth=1.5,t.stroke();const u=Math.max(0,Math.min(1,r.jetFuel/r.maxJetFuel)),p=Math.PI*.75,g=Math.PI*1.5,v=p+g*u;t.beginPath(),t.arc(o,l,d+4,p,p+g),t.strokeStyle="rgba(56, 189, 248, 0.15)",t.lineWidth=4,t.stroke(),u>.01&&(t.save(),t.beginPath(),t.arc(o,l,d+4,p,v),t.strokeStyle=u>.25?"#06b6d4":"#ef4444",t.lineWidth=4.5,t.shadowColor=u>.25?"#06b6d4":"#ef4444",t.shadowBlur=10,t.stroke(),t.restore()),t.beginPath(),t.arc(c,h,22,0,Math.PI*2),t.fillStyle=r.isJetFlying?"rgba(6, 182, 212, 0.55)":"rgba(56, 189, 248, 0.35)",t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.7)",t.lineWidth=1.5,t.stroke();const m=n.isRightActive?n.rightTouchStart.x:e-95,f=n.isRightActive?n.rightTouchStart.y:i-95,T=n.isRightActive?n.rightTouchCurrent.x:m,w=n.isRightActive?n.rightTouchCurrent.y:f,y=Math.hypot(T-m,w-f),L=68,P=L*.35,S=y>=P||n.state.firing;t.beginPath(),t.arc(m,f,L,0,Math.PI*2),t.fillStyle=S?"rgba(239, 68, 68, 0.16)":"rgba(15, 23, 42, 0.45)",t.fill(),t.save(),t.setLineDash([4,4]),t.beginPath(),t.arc(m,f,P,0,Math.PI*2),t.strokeStyle=S?"rgba(239, 68, 68, 0.6)":"rgba(255, 255, 255, 0.45)",t.lineWidth=1.5,t.stroke(),t.restore(),t.save(),t.beginPath(),t.arc(m,f,L,0,Math.PI*2),S?(t.strokeStyle="#ef4444",t.lineWidth=3,t.shadowColor="#ef4444",t.shadowBlur=16):(t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=1.5),t.stroke(),t.restore(),t.save(),t.beginPath(),t.arc(T,w,22,0,Math.PI*2),S?(t.fillStyle="rgba(239, 68, 68, 0.85)",t.shadowColor="#ef4444",t.shadowBlur=14):t.fillStyle="rgba(255, 255, 255, 0.35)",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.5,t.stroke(),t.beginPath(),t.arc(T,w,3,0,Math.PI*2),t.fillStyle="#ffffff",t.fill(),t.restore()}renderEdgeIndicators(t,e,i,n,r){var u;const a=e*.5,o=i*.5,l=(p,g,v,m,f)=>{const T=p-n.actor.position.x,w=g-n.actor.position.y,y=Math.round(Math.hypot(T,w));this.projVec.set(p,g,0).project(this.camera);const L=(this.projVec.x*.5+.5)*e,P=(-(this.projVec.y*.5)+.5)*i,S=this.projVec.z>1,R=48,x=!S&&L>=R&&L<=e-R&&P>=R&&P<=i-R;if(t.save(),x){t.strokeStyle=m,t.lineWidth=1.5,t.shadowColor=m,t.shadowBlur=8;const _=14;t.strokeRect(L-_,P-_,_*2,_*2),t.fillStyle="rgba(9, 13, 22, 0.85)",t.fillRect(L-44,P+_+4,88,18),t.strokeRect(L-44,P+_+4,88,18),t.fillStyle=m,t.font='800 10.5px "JetBrains Mono", monospace',t.textAlign="center",t.fillText(`${f} ${y}m`,L,P+_+17)}else{const _=S?Math.atan2(-w,-T):Math.atan2(w,T),A=e*.5-R,D=i*.5-R,O=a+Math.cos(_)*A,k=o-Math.sin(_)*D;t.fillStyle=m,t.shadowColor=m,t.shadowBlur=10,t.beginPath();const Y=O+Math.cos(_)*12,K=k-Math.sin(_)*12,J=O+Math.cos(_+2.5)*8,X=k-Math.sin(_+2.5)*8,ot=O+Math.cos(_-2.5)*8,ut=k-Math.sin(_-2.5)*8;t.moveTo(Y,K),t.lineTo(J,X),t.lineTo(ot,ut),t.closePath(),t.fill();const St=`${f} ${v} [${y}m]`;t.font='800 11px "JetBrains Mono", monospace';const Ft=t.measureText(St).width+16,te=O-Ft*.5,$=k+14;t.fillStyle="rgba(9, 13, 22, 0.88)",t.strokeStyle=m,t.lineWidth=1.2,t.beginPath(),t.roundRect(te,$,Ft,20,4),t.fill(),t.stroke(),t.fillStyle="#f8fafc",t.textAlign="center",t.fillText(St,O,$+14)}t.restore()};if(r.heistMode&&!r.heistMode.isVaultBreached){const p=Math.round(r.heistMode.vaultHP);l(40,3.5,`VAULT (${p}HP)`,"#f59e0b","🏢")}const c=r.players.find(p=>p.mesh.crownMesh.visible&&p.stats.id!==n.stats.id);if(c&&!c.stats.isDead&&l(c.actor.position.x,c.actor.position.y+.95,"ODOGWU","#eab308","👑"),r.isExtractionActive()){const p=r.getExtractionPos(),g=(u=r.heistMode)==null?void 0:u.isExtractionContested;l(p.x,p.y,g?"CONTESTED EVAC":"EXTRACTION",g?"#ef4444":"#10b981","🚁")}let h=null,d=45;for(let p=0;p<r.pickups.length;p++){const g=r.pickups[p];if(g.isCollected||g.type!=="cash")continue;const v=n.actor.position.distanceTo(g.mesh.position);v<d&&v>8&&(d=v,h=g)}h&&l(h.mesh.position.x,h.mesh.position.y,"CASH","#34d399","💰")}renderRigCooldown(t,e,i,n,r){const o={[gt.BREACH_BOOSTER]:2.5,[gt.OVERDRIVE_SLIDE]:1.5,[gt.PHASE_DASH]:3,[gt.GLITCH_ANCHOR]:4}[n.stats.rigType]||2.5,l=Math.max(0,n.stats.rigCooldownTimer),c=Math.min(1,Math.max(0,1-l/o)),h=l<=0,u={[gt.BREACH_BOOSTER]:"#06b6d4",[gt.OVERDRIVE_SLIDE]:"#f59e0b",[gt.PHASE_DASH]:"#a855f7",[gt.GLITCH_ANCHOR]:"#ec4899"}[n.stats.rigType]||"#06b6d4",p=document.getElementById("btn-touch-rig");if(p&&p.offsetParent!==null){const g=p.getBoundingClientRect(),v=g.left+g.width*.5,m=g.top+g.height*.5,f=g.width*.5+4;if(t.save(),t.beginPath(),t.arc(v,m,f,0,Math.PI*2),t.strokeStyle="rgba(15, 23, 42, 0.55)",t.lineWidth=3.5,t.stroke(),h){const T=.6+Math.sin(performance.now()*.008)*.35;t.beginPath(),t.arc(v,m,f,0,Math.PI*2),t.strokeStyle=u,t.lineWidth=3,t.shadowColor=u,t.shadowBlur=12*T,t.globalAlpha=T,t.stroke()}else{const T=-Math.PI*.5,w=T+c*Math.PI*2;t.beginPath(),t.arc(v,m,f,T,w),t.strokeStyle=u,t.lineWidth=4,t.shadowColor=u,t.shadowBlur=8,t.stroke()}t.restore()}if(!r||e>=900){const m=e*.5-92.5,f=i-38;t.save(),t.fillStyle="rgba(9, 13, 22, 0.85)",t.strokeStyle=h?u:"rgba(148, 163, 184, 0.3)",t.lineWidth=1.2,t.beginPath(),t.roundRect(m,f,185,24,4),t.fill(),t.stroke(),h||(t.fillStyle=u,t.globalAlpha=.5,t.fillRect(m+2,f+2,181*c,20),t.globalAlpha=1),t.fillStyle=h?"#f8fafc":"#94a3b8",t.font='800 10.5px "JetBrains Mono", monospace',t.textAlign="center";const w={[gt.BREACH_BOOSTER]:"BREACH BOOSTER",[gt.OVERDRIVE_SLIDE]:"OVERDRIVE SLIDE",[gt.PHASE_DASH]:"PHASE DASH",[gt.GLITCH_ANCHOR]:"GLITCH ANCHOR"}[n.stats.rigType]||"TACTICAL RIG",y=h?`⚡ [SHIFT] ${w} [READY]`:`⚡ ${w} [${l.toFixed(1)}s]`;t.fillText(y,m+185*.5,f+16),t.restore()}}renderFloatingTexts(t,e){for(let i=this.floatingTexts.length-1;i>=0;i--){const n=this.floatingTexts[i];n.life+=e,n.y-=e*45,n.alpha=Math.max(0,1-n.life/.85),t.save(),t.globalAlpha=n.alpha,t.fillStyle=n.color,t.font=`900 ${n.size}px "JetBrains Mono", monospace`,t.textAlign="center",t.shadowColor="#000000",t.shadowBlur=6,t.fillText(n.text,n.x,n.y),t.restore(),n.life>=.85&&this.floatingTexts.splice(i,1)}}renderDeathScreen(t,e,i,n){t.strokeStyle="rgba(239, 68, 68, 0.35)",t.lineWidth=4,t.strokeRect(2,2,e-4,i-4);const r=Math.max(0,Math.ceil(n.respawnTimer)),a=270,o=30,l=e*.5-a*.5,c=48;t.fillStyle="rgba(10, 16, 13, 0.92)",t.strokeStyle="#ef4444",t.lineWidth=1.2,t.beginPath(),t.roundRect(l,c,a,o,4),t.fill(),t.stroke(),t.fillStyle="#ef4444",t.beginPath(),t.arc(l+16,c+o*.5,4,0,Math.PI*2),t.fill(),t.fillStyle="#f8fafc",t.font='800 11px "JetBrains Mono", monospace',t.textAlign="left",t.fillText(r>0?`[▲] ELIMINATED // RESPAWN: ${r}s`:"[●] REDEPLOYING TO SECTOR...",l+28,c+19)}}class V0{static generateReceiptPNG(t,e,i,n){const r=document.createElement("canvas");r.width=460,r.height=760;const a=r.getContext("2d");a.fillStyle="#fafaf9",a.fillRect(0,0,r.width,r.height),a.strokeStyle="#18181b",a.lineWidth=3,a.strokeRect(8,8,r.width-16,r.height-16),a.fillStyle="#09090b",a.font='800 18px "JetBrains Mono", monospace',a.textAlign="center";let o=46;a.fillText("====================================",230,o),o+=24,a.fillText("STUDIO XAG // PROTOCOL ZERO",230,o),o+=22,a.font='700 13px "JetBrains Mono", monospace',a.fillText("AFTER-ACTION FINANCIAL REPORT",230,o),o+=18,a.font='500 11px "JetBrains Mono", monospace',a.fillText(new Date().toUTCString(),230,o),o+=16,a.fillText(`ARENA MODE: ${e}`,230,o),o+=20,a.fillText("------------------------------------",230,o),o+=30;const l=t[0]||{name:"Unknown",cash:0,kills:0,deaths:0};a.font='800 15px "JetBrains Mono", monospace',a.fillText("👑 THE SARKI (1ST PLACE):",230,o),o+=22,a.font='900 24px "JetBrains Mono", monospace',a.fillText(`${l.name.toUpperCase()}`,230,o),o+=26,a.font='800 20px "JetBrains Mono", monospace',a.fillText(`NET WORTH: ₦${l.cash.toLocaleString()}`,230,o),o+=24,a.fillText("------------------------------------",230,o),o+=26;let c=[...t].sort((p,g)=>g.deaths-p.deaths)[0]||l;a.font='800 13px "JetBrains Mono", monospace',a.fillText("💀 MAI RASHIN SA'A (MOST CASUALTIES):",230,o),o+=20,a.font='700 15px "JetBrains Mono", monospace',a.fillText(`${c.name} (${c.deaths} Deaths)`,230,o),o+=18,a.font='italic 11px "JetBrains Mono", monospace',a.fillText('"Babu gudu, babu ja da baya!"',230,o),o+=22,a.fillText("------------------------------------",230,o),o+=26;let h=[...t].sort((p,g)=>g.wallsDestroyed-p.wallsDestroyed)[0]||l;a.font='800 13px "JetBrains Mono", monospace',a.fillText("💥 MAI RUSHEWA (DEMOLITION CHAMPION):",230,o),o+=20,a.font='700 14px "JetBrains Mono", monospace',a.fillText(`${h.name} (${h.wallsDestroyed} 3D Blocks Smashed)`,230,o),o+=22,a.fillText("------------------------------------",230,o),o+=26;const d=t.find(p=>p.isLocal)||l;a.font='800 14px "JetBrains Mono", monospace',a.fillText("PERSONAL AUDIT SUMMARY:",230,o),o+=22,a.textAlign="left",a.font='700 12px "JetBrains Mono", monospace';const u=d.deaths>0?(d.kills/d.deaths).toFixed(2):d.kills.toString();return a.fillText(`• FINAL BALANCE: ₦${d.cash.toLocaleString()}`,40,o),o+=20,a.fillText(`• ELIMINATIONS:  ${d.kills} KILLS`,40,o),o+=20,a.fillText(`• DEATH COUNT:   ${d.deaths} CASUALTIES`,40,o),o+=20,a.fillText(`• COMBAT K/D:    ${u}`,40,o),o+=20,a.fillText(`• RIG UTILIZED:  ${i}`,40,o),o+=20,a.fillText(`• LOADOUT:       ${n}`,40,o),o+=28,a.textAlign="center",a.font='800 12px "JetBrains Mono", monospace',a.fillText("||| | ||||| || |||||| | ||||| |||",230,o),o+=18,a.font='700 11px "JetBrains Mono", monospace',a.fillText("* VERIFIED BY STUDIO XAG HQ KANO // AREWA TACTICAL COMMAND *",230,o),r.toDataURL("image/png")}static downloadReceiptPNG(t,e,i,n){const r=this.generateReceiptPNG(t,e,i,n),a=document.createElement("a");a.download=`XAG_ROAST_RECEIPT_${Date.now()}.png`,a.href=r,a.click()}}var ge=(s=>(s.JOIN_ROOM="JOIN_ROOM",s.ROOM_STATE="ROOM_STATE",s.SET_READY="SET_READY",s.TOGGLE_BOTS="TOGGLE_BOTS",s.START_MATCH="START_MATCH",s.MATCH_STARTING="MATCH_STARTING",s.PLAYER_LEFT="PLAYER_LEFT",s.ERROR="ERROR",s.CLIENT_TICK="CLIENT_TICK",s.SERVER_SNAPSHOT="SERVER_SNAPSHOT",s.FIRE_WEAPON="FIRE_WEAPON",s.RIG_TRIGGER="RIG_TRIGGER",s.GROUND_SLAM="GROUND_SLAM",s.DAMAGE_EVENT="DAMAGE_EVENT",s.PLAYER_DIED="PLAYER_DIED",s.RESPAWN="RESPAWN",s.TILE_DESTROY="TILE_DESTROY",s.PICKUP_CLAIM="PICKUP_CLAIM",s.PING="PING",s.PONG="PONG",s))(ge||{});const ca={},gn=class gn{constructor(){M(this,"ws",null);M(this,"isConnected",!1);M(this,"currentRoomId",null);M(this,"localPlayerId",null);M(this,"isHost",!1);M(this,"ping",0);M(this,"cachedLobbyPlayers",[]);M(this,"serverUrl");M(this,"onRoomState");M(this,"onMatchStarting");M(this,"onSnapshot");M(this,"onFireWeapon");M(this,"onRigTrigger");M(this,"onGroundSlam");M(this,"onDamageEvent");M(this,"onTileDestroy");M(this,"onPickupClaim");M(this,"onPlayerLeft");M(this,"onError");M(this,"pingInterval",null);const t=(ca==null?void 0:ca.VITE_WS_URL)||window.__XAG_WS_URL__;t?this.serverUrl=t:window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?this.serverUrl="ws://localhost:8080":this.serverUrl="wss://sector-234-production.up.railway.app"}static getInstance(){return gn.instance||(gn.instance=new gn),gn.instance}connect(){return new Promise(t=>{if(this.isConnected&&this.ws&&this.ws.readyState===WebSocket.OPEN){t(!0);return}console.log(`[NET-CLIENT] Connecting to game server at ${this.serverUrl}...`);let e=!1;const i=r=>{e||(e=!0,clearTimeout(n),t(r))},n=setTimeout(()=>{if(!e){if(console.warn("[NET-CLIENT] Connection attempt timed out."),this.serverUrl.includes("localhost")){this.serverUrl="wss://sector-234-production.up.railway.app",this.connect().then(i);return}i(!1)}},7e3);try{this.ws=new WebSocket(this.serverUrl)}catch(r){if(console.error("[NET-CLIENT] WebSocket instantiation failed:",r),this.serverUrl!=="wss://sector-234-production.up.railway.app"){this.serverUrl="wss://sector-234-production.up.railway.app",this.connect().then(i);return}i(!1);return}this.ws.onopen=()=>{console.log("[NET-CLIENT] Connected to server successfully!"),this.isConnected=!0,this.startPingLoop(),i(!0)},this.ws.onclose=()=>{console.warn("[NET-CLIENT] Disconnected from game server."),this.isConnected=!1,this.stopPingLoop()},this.ws.onerror=r=>{if(console.error("[NET-CLIENT] WebSocket error:",r),this.serverUrl.includes("localhost")&&this.serverUrl!=="wss://sector-234-production.up.railway.app"){console.log("[NET-CLIENT] Local server unavailable. Seamlessly switching to live Railway cloud server..."),this.serverUrl="wss://sector-234-production.up.railway.app",this.connect().then(i);return}this.isConnected=!1,i(!1)},this.ws.onmessage=r=>{try{const a=JSON.parse(r.data);this.handleIncomingMessage(a)}catch(a){console.error("[NET-CLIENT] Error parsing server message:",a)}}})}createRoom(t,e,i,n=ce.BIRNIN_KANO,r=Me.ODOGWU_STASH,a=!0){const o={roomId:"",playerName:t,rig:e,weapon:i,mapId:n,mode:r,fillBots:a};this.send(ge.JOIN_ROOM,o)}joinRoom(t,e,i,n){const r={roomId:t,playerName:e,rig:i,weapon:n,mapId:ce.BIRNIN_KANO,mode:Me.ODOGWU_STASH};this.send(ge.JOIN_ROOM,r)}setReady(t){this.send(ge.SET_READY,{ready:t})}toggleBots(t){this.send(ge.TOGGLE_BOTS,{fillBots:t})}startMatch(){this.send(ge.START_MATCH,{})}sendTick(t){if(!this.isConnected)return;const e={state:t};this.send(ge.CLIENT_TICK,e)}sendFire(t){this.send(ge.FIRE_WEAPON,t)}sendRigTrigger(t){this.send(ge.RIG_TRIGGER,t)}sendGroundSlam(t){this.send(ge.GROUND_SLAM,t)}sendDamage(t){this.send(ge.DAMAGE_EVENT,t)}sendTileDestroy(t,e,i){const n={tileX:t,tileY:e,playerId:i};this.send(ge.TILE_DESTROY,n)}sendPickupClaim(t,e){const i={pickupId:t,collectorId:e};this.send(ge.PICKUP_CLAIM,i)}handleIncomingMessage(t){var e,i,n;switch(t.type){case ge.ROOM_STATE:{const r=t.payload;this.currentRoomId=r.roomId,this.localPlayerId=r.yourPlayerId,this.isHost=r.isHost,this.cachedLobbyPlayers=r.players,this.onRoomState&&this.onRoomState(r);break}case ge.MATCH_STARTING:{const r=t.payload;this.onMatchStarting&&this.onMatchStarting(r);break}case ge.SERVER_SNAPSHOT:{const r=t.payload;this.onSnapshot&&this.onSnapshot(r);break}case ge.FIRE_WEAPON:{const r=t.payload;this.onFireWeapon&&this.onFireWeapon(r);break}case ge.RIG_TRIGGER:{const r=t.payload;this.onRigTrigger&&this.onRigTrigger(r);break}case ge.GROUND_SLAM:{const r=t.payload;this.onGroundSlam&&this.onGroundSlam(r);break}case ge.DAMAGE_EVENT:{const r=t.payload;this.onDamageEvent&&this.onDamageEvent(r);break}case ge.TILE_DESTROY:{const r=t.payload;this.onTileDestroy&&this.onTileDestroy(r);break}case ge.PICKUP_CLAIM:{const r=t.payload;this.onPickupClaim&&this.onPickupClaim(r);break}case ge.PLAYER_LEFT:{const r=(e=t.payload)==null?void 0:e.playerId;r&&this.onPlayerLeft&&this.onPlayerLeft(r);break}case ge.ERROR:{const r=((i=t.payload)==null?void 0:i.message)||"Server error";this.onError&&this.onError(r);break}case ge.PONG:{const r=((n=t.payload)==null?void 0:n.clientTimestamp)||Date.now();this.ping=Math.max(1,Math.round((Date.now()-r)*.5));break}}}send(t,e){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:t,payload:e}))}startPingLoop(){this.stopPingLoop(),this.pingInterval=setInterval(()=>{this.send(ge.PING,{timestamp:Date.now()})},2e3)}stopPingLoop(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}};M(gn,"instance",null);let yr=gn;const zn=[z.RIFLE_XAG47,z.SHOTGUN_AA12,z.RAIL_SNIPER,z.VULCAN_MINIGUN,z.AKIMBO_UZIS,z.BUNKER_RPG,z.GHOST_SMG,z.CUTLASS,z.PISTOL_XAG9];class W0{constructor(t,e){M(this,"container");M(this,"audio");M(this,"onStartGameCallback");M(this,"onRematchCallback");M(this,"selectedGamerTag","XAG_001");M(this,"selectedRig",gt.BREACH_BOOSTER);M(this,"selectedMode",Me.TEAM_DEATHMATCH);M(this,"selectedMap",ce.BIRNIN_KANO);M(this,"selectedWeapon",z.RIFLE_XAG47);M(this,"selectedSecondaryWeapon",z.SHOTGUN_AA12);M(this,"fillBots",!0);M(this,"teamSize",3);M(this,"radarAnimId",null);const i=document.getElementById(t);if(!i)throw new Error(`UI container ${t} not found`);this.container=i,this.audio=e;const n=Ui.getInstance().getProfile();this.selectedGamerTag=n.call_sign||"XAG_001",this.selectedRig=n.selected_rig||gt.BREACH_BOOSTER,n.unlocked_weapons&&n.unlocked_weapons.length>0&&(this.selectedWeapon=n.unlocked_weapons[0])}showMainMenu(t){var f,T,w,y,L,P,S,R;this.onStartGameCallback=t;const e=document.getElementById("touch-controls");e&&(e.style.display="none");const i=Ui.getInstance().getProfile();this.selectedGamerTag=i.call_sign||"XAG_001",this.radarAnimId!==null&&(cancelAnimationFrame(this.radarAnimId),this.radarAnimId=null);const n=Ye[this.selectedWeapon]||Ye[z.RIFLE_XAG47],r=Ye[this.selectedSecondaryWeapon]||Ye[z.SHOTGUN_AA12];this.container.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700;800;900&family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap');

        @keyframes subtlePulseGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.45); }
          50% { box-shadow: 0 0 45px rgba(34, 197, 94, 0.8); }
        }
        @keyframes cyanPulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.35); }
          50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.7); }
        }

        .xag-menu-root {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 25%, #0f1724 0%, #080d14 70%, #030508 100%);
          display: flex;
          flex-direction: column;
          z-index: 100;
          padding: 16px 24px;
          pointer-events: auto;
          box-sizing: border-box;
          overflow-y: auto;
          font-family: 'Inter', -apple-system, sans-serif;
          color: #f1f5f9;
          user-select: none;
        }

        /* Top Header Navigation */
        .xag-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 10px 20px;
          margin-bottom: 16px;
          flex-shrink: 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .xag-nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-nav-logo {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #ffffff 30%, #4ade80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .xag-nav-pill {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid #22c55e;
          color: #4ade80;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          letter-spacing: 1px;
        }

        .xag-profile-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: 20px;
        }
        .xag-callsign-display {
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 800;
          outline: none;
          width: 100px;
          letter-spacing: 0.5px;
        }
        .xag-callsign-display:focus {
          border-bottom: 1px solid #38bdf8;
        }

        .xag-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-cash-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .xag-cash-chip:hover {
          background: rgba(16, 185, 129, 0.3);
          transform: translateY(-1px);
        }
        .xag-cash-val {
          color: #34d399;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          font-size: 13px;
        }

        .xag-server-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #4ade80;
        }
        .xag-led-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        /* Center Hub Content */
        .xag-center-hub {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          flex: 1;
        }

        /* Section Headers */
        .xag-section-title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #94a3b8;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        /* Mode Selection Grid */
        .xag-mode-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .xag-mode-card {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .xag-mode-card:hover {
          border-color: rgba(56, 189, 248, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
        }
        .xag-mode-card.active {
          background: linear-gradient(145deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 2px solid #22c55e;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.35);
        }

        .xag-mode-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .xag-mode-icon {
          font-size: 26px;
        }
        .xag-mode-badge {
          font-size: 9px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .xag-badge-blue { background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); }
        .xag-badge-purple { background: rgba(192, 132, 252, 0.2); color: #c084fc; border: 1px solid rgba(192, 132, 252, 0.4); }
        .xag-badge-red { background: rgba(248, 113, 113, 0.2); color: #f87171; border: 1px solid rgba(248, 113, 113, 0.4); }
        .xag-badge-gold { background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.4); }

        .xag-mode-title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .xag-mode-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.4;
          flex: 1;
        }
        .xag-mode-status {
          margin-top: 12px;
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .xag-mode-card.active .xag-mode-status {
          color: #22c55e;
        }

        /* Match Settings Bar (Bots & Map) */
        .xag-settings-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .xag-settings-box {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .xag-toggle-btn {
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #94a3b8;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .xag-toggle-btn.active {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          color: #4ade80;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }

        .xag-map-selector {
          display: flex;
          gap: 8px;
        }
        .xag-map-pill {
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .xag-map-pill.active {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }

        /* Action Launch Buttons */
        .xag-actions-row {
          display: grid;
          grid-template-columns: 1.6fr 1.2fr;
          gap: 14px;
          margin-top: 4px;
        }

        .xag-btn-play {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: #ffffff;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 2px;
          padding: 16px 24px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.2s;
          animation: subtlePulseGlow 2.5s infinite ease-in-out;
        }
        .xag-btn-play:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }
        .xag-btn-play:active {
          transform: translateY(1px);
        }

        .xag-btn-online {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border: 1.5px solid #38bdf8;
          color: #ffffff;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 16px 20px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.2s;
          animation: cyanPulseGlow 3s infinite ease-in-out;
        }
        .xag-btn-online:hover {
          filter: brightness(1.2);
          transform: translateY(-2px);
        }
        .xag-btn-online:active {
          transform: translateY(1px);
        }

        /* Bottom Loadout Dock */
        .xag-loadout-dock {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr auto;
          gap: 16px;
          align-items: center;
          margin-top: 4px;
        }

        .xag-loadout-item {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .xag-loadout-item:hover {
          border-color: #38bdf8;
          background: rgba(30, 41, 59, 0.8);
        }
        .xag-swap-badge {
          background: #334155;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .xag-rig-selector {
          display: flex;
          gap: 6px;
        }
        .xag-rig-pill {
          flex: 1;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 6px;
          text-align: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .xag-rig-pill:hover {
          border-color: #38bdf8;
        }
        .xag-rig-pill.active {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.3);
        }
        .xag-rig-pill-name {
          font-size: 11px;
          font-weight: 800;
          color: #ffffff;
        }
        .xag-rig-pill.active .xag-rig-pill-name {
          color: #4ade80;
        }

        .xag-armory-btn {
          background: rgba(251, 191, 36, 0.15);
          border: 1px solid #fbbf24;
          color: #fde047;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s;
        }
        .xag-armory-btn:hover {
          background: rgba(251, 191, 36, 0.3);
        }

        /* Mobile Adjustments (< 860px) */
        @media screen and (max-width: 860px) {
          .xag-menu-root {
            padding: 10px;
          }
          .xag-nav-header {
            padding: 8px 12px;
            margin-bottom: 10px;
          }
          .xag-mode-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .xag-settings-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-actions-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-loadout-dock {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-rig-selector {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
        }
      </style>

      <div class="xag-menu-root">
        <!-- Top Navigation Header -->
        <header class="xag-nav-header">
          <div class="xag-nav-brand">
            <span class="xag-nav-logo">SECTOR 234</span>
            <span class="xag-nav-pill">PROTOCOL ZERO</span>
          </div>

          <div class="xag-profile-chip" title="Click to edit your operative callsign">
            <span style="font-size: 12px; color: #94a3b8;">CALLSIGN:</span>
            <input id="xag-callsign-input" class="xag-callsign-display" type="text" maxlength="14" value="${this.selectedGamerTag}" spellcheck="false" />
            <span style="font-size: 10px; background: rgba(56, 189, 248, 0.2); color: #38bdf8; font-weight: 800; padding: 2px 6px; border-radius: 4px;">RANK ${i.rank}</span>
          </div>

          <div class="xag-nav-right">
            <div id="btn-top-vault" class="xag-cash-chip" title="Open Syndicate Offshore Vault">
              <span>💰</span>
              <span class="xag-cash-val">₦${i.cash_balance.toLocaleString()}</span>
            </div>
            <div class="xag-server-chip">
              <div class="xag-led-dot"></div>
              <span>ONLINE</span>
            </div>
          </div>
        </header>

        <!-- Center Battle Hub -->
        <main class="xag-center-hub">

          <!-- 1. Mode Selection Grid -->
          <section>
            <div class="xag-section-title">
              <span>⚔️ SELECT GAME MODE</span>
            </div>
            <div class="xag-mode-grid">

              <!-- 3v3 Team Deathmatch -->
              <div class="xag-mode-card ${this.selectedMode===Me.TEAM_DEATHMATCH&&this.teamSize===3?"active":""}" data-mode="TEAM_DEATHMATCH" data-teamsize="3">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">👥</span>
                  <span class="xag-mode-badge xag-badge-blue">COMPETITIVE</span>
                </div>
                <div class="xag-mode-title">3v3 TEAM DEATHMATCH</div>
                <div class="xag-mode-desc">Blue vs Red tactical showdown. First team to 25 eliminations wins.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode===Me.TEAM_DEATHMATCH&&this.teamSize===3?"✓ SELECTED":"○ CLICK TO SELECT"}</span>
                </div>
              </div>

              <!-- 5v5 Team Deathmatch -->
              <div class="xag-mode-card ${this.selectedMode===Me.TEAM_DEATHMATCH&&this.teamSize===5?"active":""}" data-mode="TEAM_DEATHMATCH" data-teamsize="5">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">⚔️</span>
                  <span class="xag-mode-badge xag-badge-purple">10-PLAYER WAR</span>
                </div>
                <div class="xag-mode-title">5v5 TEAM DEATHMATCH</div>
                <div class="xag-mode-desc">Full squad battleground. First team to 40 eliminations claims the sector.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode===Me.TEAM_DEATHMATCH&&this.teamSize===5?"✓ SELECTED":"○ CLICK TO SELECT"}</span>
                </div>
              </div>

              <!-- Free For All -->
              <div class="xag-mode-card ${this.selectedMode===Me.FREE_FOR_ALL?"active":""}" data-mode="FREE_FOR_ALL" data-teamsize="1">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">💀</span>
                  <span class="xag-mode-badge xag-badge-red">DEATHMATCH</span>
                </div>
                <div class="xag-mode-title">FREE FOR ALL (SOLO)</div>
                <div class="xag-mode-desc">Every operative for themselves. Eliminate everyone. First to 20 kills wins.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode===Me.FREE_FOR_ALL?"✓ SELECTED":"○ CLICK TO SELECT"}</span>
                </div>
              </div>

              <!-- Odogwu Heist -->
              <div class="xag-mode-card ${this.selectedMode===Me.ODOGWU_STASH?"active":""}" data-mode="ODOGWU_STASH" data-teamsize="3">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">💰</span>
                  <span class="xag-mode-badge xag-badge-gold">HEIST OBJECTIVE</span>
                </div>
                <div class="xag-mode-title">ODOGWU HEIST</div>
                <div class="xag-mode-desc">Breach the mud/concrete central vault, grab the cash bag & evac on the chopper.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode===Me.ODOGWU_STASH?"✓ SELECTED":"○ CLICK TO SELECT"}</span>
                </div>
              </div>

            </div>
          </section>

          <!-- 2. Match Settings (Bot Configuration & Map) -->
          <section class="xag-settings-row">
            <!-- Bot Fill Toggle -->
            <div class="xag-settings-box">
              <div>
                <div style="font-weight: 800; font-size: 13px; color: #ffffff; margin-bottom: 2px;">🤖 PLAY WITH BOTS</div>
                <div style="font-size: 11px; color: #94a3b8;">Fill empty slots with tactical AI bots</div>
              </div>
              <button id="btn-toggle-bots" type="button" class="xag-toggle-btn ${this.fillBots?"active":""}">
                <span id="bot-toggle-text">${this.fillBots?"✓ BOTS: ON":"✕ BOTS: OFF"}</span>
              </button>
            </div>

            <!-- Map Selection -->
            <div class="xag-settings-box">
              <div>
                <div style="font-weight: 800; font-size: 13px; color: #ffffff; margin-bottom: 2px;">🗺️ SECTOR MAP</div>
                <div style="font-size: 11px; color: #94a3b8;">Select your battle theater</div>
              </div>
              <div class="xag-map-selector">
                <button type="button" class="xag-map-pill ${this.selectedMap===ce.BIRNIN_KANO?"active":""}" data-map="BIRNIN_KANO">
                  🏰 BIRNIN KANO
                </button>
                <button type="button" class="xag-map-pill ${this.selectedMap===ce.LAGOS_GOSLOW?"active":""}" data-map="LAGOS_GOSLOW">
                  🚗 LAGOS GO-SLOW
                </button>
              </div>
            </div>
          </section>

          <!-- 3. Primary Actions (Play Solo/Bots vs Multiplayer Lobby) -->
          <section class="xag-actions-row">
            <button id="menu-deploy-btn" type="button" class="xag-btn-play">
              <span style="font-size: 22px;">▶</span>
              <span>PLAY MATCH (SOLO / BOTS)</span>
            </button>
            <button id="menu-online-btn" type="button" class="xag-btn-online">
              <span style="font-size: 20px;">⚡</span>
              <span>MULTIPLAYER LOBBY (PLAY ONLINE)</span>
            </button>
          </section>

          <!-- 4. Loadout Dock -->
          <section>
            <div class="xag-section-title">
              <span>🎯 OPERATIVE LOADOUT</span>
            </div>
            <div class="xag-loadout-dock">
              <!-- Primary Weapon -->
              <div id="weapon-select-card" class="xag-loadout-item" title="Click to swap weapon">
                <div>
                  <div style="font-size: 9px; color: #94a3b8; font-weight: 700;">PRIMARY WEAPON</div>
                  <div id="weapon-name-display" style="font-size: 12px; font-weight: 800; color: #ffffff;">${n.name}</div>
                </div>
                <span id="btn-cycle-weapon" class="xag-swap-badge">SWAP</span>
              </div>

              <!-- Secondary Weapon -->
              <div id="sec-weapon-select-card" class="xag-loadout-item" title="Click to swap secondary">
                <div>
                  <div style="font-size: 9px; color: #94a3b8; font-weight: 700;">SECONDARY WEAPON</div>
                  <div id="sec-weapon-name-display" style="font-size: 12px; font-weight: 800; color: #ffffff;">${r.name}</div>
                </div>
                <span id="btn-cycle-sec-weapon" class="xag-swap-badge">SWAP</span>
              </div>

              <!-- Mobility Rig Selector -->
              <div class="xag-rig-selector">
                <div class="xag-rig-pill ${this.selectedRig===gt.PHASE_DASH?"active":""}" data-rig="${gt.PHASE_DASH}" title="Specter: Phase Dash through thin cover">
                  <div style="font-size: 14px;">⚡</div>
                  <div class="xag-rig-pill-name">SPECTER</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig===gt.BREACH_BOOSTER?"active":""}" data-rig="${gt.BREACH_BOOSTER}" title="Vanguard: Smashes mud/concrete walls">
                  <div style="font-size: 14px;">🛡️</div>
                  <div class="xag-rig-pill-name">VANGUARD</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig===gt.GLITCH_ANCHOR?"active":""}" data-rig="${gt.GLITCH_ANCHOR}" title="Chronos: Snap-back teleport beacon">
                  <div style="font-size: 14px;">⏱️</div>
                  <div class="xag-rig-pill-name">CHRONOS</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig===gt.OVERDRIVE_SLIDE?"active":""}" data-rig="${gt.OVERDRIVE_SLIDE}" title="Striker: Kinetic slide and wall kick">
                  <div style="font-size: 14px;">🚀</div>
                  <div class="xag-rig-pill-name">STRIKER</div>
                </div>
              </div>

              <!-- Armory & Vault -->
              <button id="btn-open-dossier" type="button" class="xag-armory-btn">
                <span>🛒 ARMORY & SHOP</span>
              </button>
            </div>
          </section>

        </main>
      </div>
    `;const a=this.container.querySelectorAll(".xag-mode-card");a.forEach(x=>{x.addEventListener("click",()=>{var D;a.forEach(O=>{O.classList.remove("active");const k=O.querySelector(".xag-mode-status span");k&&(k.textContent="○ CLICK TO SELECT")}),x.classList.add("active");const _=x.querySelector(".xag-mode-status span");_&&(_.textContent="✓ SELECTED"),this.selectedMode=x.getAttribute("data-mode");const A=x.getAttribute("data-teamsize");this.teamSize=A?parseInt(A,10):3,(D=this.audio)==null||D.playUISelect()})});const o=document.getElementById("btn-toggle-bots"),l=document.getElementById("bot-toggle-text");o&&o.addEventListener("click",()=>{var x;this.fillBots=!this.fillBots,o.classList.toggle("active",this.fillBots),l&&(l.textContent=this.fillBots?"✓ BOTS: ON":"✕ BOTS: OFF"),(x=this.audio)==null||x.playUISelect()});const c=this.container.querySelectorAll(".xag-map-pill");c.forEach(x=>{x.addEventListener("click",()=>{var _;c.forEach(A=>A.classList.remove("active")),x.classList.add("active"),this.selectedMap=x.getAttribute("data-map"),(_=this.audio)==null||_.playUISelect()})});const h=this.container.querySelectorAll(".xag-rig-pill");h.forEach(x=>{x.addEventListener("click",()=>{var _;h.forEach(A=>A.classList.remove("active")),x.classList.add("active"),this.selectedRig=x.getAttribute("data-rig"),(_=this.audio)==null||_.playUISelect()})});const d=document.getElementById("xag-callsign-input");d&&(d.addEventListener("input",()=>{this.selectedGamerTag=d.value.trim()||"XAG_001"}),d.addEventListener("change",()=>{var _,A;const x=Ui.getInstance().getProfile();x.call_sign=this.selectedGamerTag,(A=(_=Ui.getInstance()).saveToStorage)==null||A.call(_,x)}));const u=()=>{const x=Ye[this.selectedWeapon]||Ye[z.RIFLE_XAG47],_=document.getElementById("weapon-name-display");_&&(_.innerText=x.name)},p=x=>{var D;x.stopPropagation();const A=(zn.indexOf(this.selectedWeapon)+1)%zn.length;this.selectedWeapon=zn[A],u(),(D=this.audio)==null||D.playUISelect()};(f=document.getElementById("weapon-select-card"))==null||f.addEventListener("click",p),(T=document.getElementById("btn-cycle-weapon"))==null||T.addEventListener("click",p);const g=()=>{const x=Ye[this.selectedSecondaryWeapon]||Ye[z.SHOTGUN_AA12],_=document.getElementById("sec-weapon-name-display");_&&(_.innerText=x.name)},v=x=>{var D;x.stopPropagation();const A=(zn.indexOf(this.selectedSecondaryWeapon)+1)%zn.length;this.selectedSecondaryWeapon=zn[A],g(),(D=this.audio)==null||D.playUISelect()};(w=document.getElementById("sec-weapon-select-card"))==null||w.addEventListener("click",v),(y=document.getElementById("btn-cycle-sec-weapon"))==null||y.addEventListener("click",v);const m=x=>{var _;x.stopPropagation(),(_=this.audio)==null||_.playCashPickup(),this.showDossierModal()};(L=document.getElementById("btn-open-dossier"))==null||L.addEventListener("click",m),(P=document.getElementById("btn-top-vault"))==null||P.addEventListener("click",m),(S=document.getElementById("menu-deploy-btn"))==null||S.addEventListener("click",x=>{x.stopPropagation(),this.executeDeploy(!1)}),(R=document.getElementById("menu-online-btn"))==null||R.addEventListener("click",x=>{x.stopPropagation(),this.openMultiplayerLobby()})}executeDeploy(t=!1,e,i){var c;(c=this.audio)==null||c.playUIDeploy(),this.radarAnimId!==null&&(cancelAnimationFrame(this.radarAnimId),this.radarAnimId=null);const n=document,r=document.documentElement;if(!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){const h=r.requestFullscreen||r.webkitRequestFullscreen||r.mozRequestFullScreen||r.msRequestFullscreen;h&&h.call(r).catch(()=>{})}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}window.scrollTo(0,1),this.container.innerHTML="";const o=document.getElementById("touch-controls");o&&(o.style.display="block");const l=i!==void 0?i:this.fillBots;this.onStartGameCallback&&this.onStartGameCallback({gamerTag:this.selectedGamerTag,rigType:this.selectedRig,modeType:this.selectedMode,mapId:this.selectedMap,primaryWeapon:this.selectedWeapon,secondaryWeapon:this.selectedSecondaryWeapon,isMultiplayer:t,roomId:e,fillBots:l,teamSize:this.teamSize})}openMultiplayerLobby(){const t=yr.getInstance(),e=document.getElementById("xag-lobby-overlay");e&&e.remove();const i=document.createElement("div");i.id="xag-lobby-overlay",i.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 18, 0.88);
      backdrop-filter: blur(8px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-family: 'Chakra Petch', 'JetBrains Mono', monospace;
      color: #f8fafc;
    `,document.body.appendChild(i);const n=(r,a)=>{var o,l,c,h,d,u,p,g,v;if(r&&r.roomId){const m=r.isHost,f=r.players.find(w=>w.id===r.yourPlayerId),T=f?f.isReady:!1;i.innerHTML=`
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 580px; width: 100%; border-radius: 8px; overflow: hidden; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 16px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ LIVE TACTICAL ROOM</div>
                <div style="font-size: 24px; font-weight: 900; letter-spacing: 4px; color: #ffffff;">CODE: <span style="color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);">${r.roomId}</span></div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button id="lobby-copy-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 4px; font-family: inherit;">📋 COPY CODE</button>
                <div style="font-size: 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; padding: 4px 8px; border-radius: 4px;">🟢 ${t.ping||20}ms</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; font-size: 11px; color: #94a3b8; margin-bottom: 16px; background: #0f172a; padding: 8px 12px; border-radius: 4px; border: 1px solid #1e293b; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 12px; align-items: center;">
                <div>MAP: <span style="color: #ffffff; font-weight: 700;">${this.selectedMap===ce.LAGOS_GOSLOW?"LAGOS GO-SLOW":"BIRNIN KANO"}</span></div>
                <div>MODE: <span style="color: #ffffff; font-weight: 700;">${this.selectedMode}</span></div>
                <div>OPERATIVES: <span style="color: #38bdf8; font-weight: 700;">${r.players.length} / 6</span></div>
              </div>
              <div>
                ${m?`
                  <button id="lobby-bot-btn" type="button" style="background: ${r.fillBots?"rgba(34, 197, 94, 0.2)":"rgba(239, 68, 68, 0.2)"}; border: 1px solid ${r.fillBots?"#22c55e":"#ef4444"}; color: ${r.fillBots?"#4ade80":"#f87171"}; padding: 4px 10px; font-size: 11px; font-weight: 800; cursor: pointer; border-radius: 4px; font-family: inherit;">
                    ${r.fillBots?"🤖 BOTS: ON":"✕ BOTS: OFF"}
                  </button>
                `:`
                  <div style="font-size: 11px; color: ${r.fillBots?"#4ade80":"#f87171"}; font-weight: 800; background: ${r.fillBots?"rgba(34, 197, 94, 0.15)":"rgba(239, 68, 68, 0.15)"}; border: 1px solid ${r.fillBots?"#22c55e":"#ef4444"}; padding: 4px 8px; border-radius: 4px;">
                    ${r.fillBots?"🤖 BOTS: ON":"✕ BOTS: OFF"}
                  </div>
                `}
              </div>
            </div>

            <!-- Player Roster -->
            <div style="margin-bottom: 20px;">
              <div style="font-size: 10px; font-weight: 700; color: #64748b; letter-spacing: 2px; margin-bottom: 8px;">CONNECTED OPERATIVES:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; max-height: 200px; overflow-y: auto;">
                ${r.players.map(w=>`
                  <div style="display: flex; align-items: center; justify-content: space-between; background: ${w.id===r.yourPlayerId?"rgba(6, 182, 212, 0.12)":"#0f172a"}; border: 1px solid ${w.id===r.yourPlayerId?"#06b6d4":"#1e293b"}; padding: 8px 12px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 800; color: ${w.id===r.yourPlayerId?"#38bdf8":"#ffffff"}; font-size: 13px;">${w.name} ${w.isHost?'<span style="color: #eab308; font-size: 10px;">[HOST]</span>':""}</span>
                      <span style="font-size: 10px; background: #1e293b; color: #94a3b8; padding: 2px 6px; border-radius: 3px;">${w.rig}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 10px; color: ${w.isReady?"#4ade80":"#f59e0b"}; font-weight: 800; background: ${w.isReady?"rgba(34, 197, 94, 0.15)":"rgba(245, 158, 11, 0.15)"}; padding: 3px 8px; border-radius: 3px; border: 1px solid ${w.isReady?"#22c55e":"#f59e0b"};">
                        ${w.isReady?"✓ READY":"⏳ PREPARING"}
                      </span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px;">
              <button id="lobby-ready-btn" style="flex: 1; background: ${T?"#1e293b":"linear-gradient(135deg, #0284c7, #0369a1)"}; border: 1px solid #38bdf8; color: #ffffff; padding: 12px; font-weight: 800; font-size: 13px; cursor: pointer; border-radius: 4px; font-family: inherit;">
                ${T?"CANCEL READY":"⚡ READY UP"}
              </button>
              ${m?`
                <button id="lobby-start-btn" style="flex: 2; background: repeating-linear-gradient(-45deg, #008751, #008751 14px, #007345 14px, #007345 28px); border: 1px solid #4ade80; color: #ffffff; padding: 12px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit;">
                  LAUNCH MATCH
                </button>
              `:`
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #94a3b8; background: #0f172a; border: 1px solid #1e293b; border-radius: 4px;">
                  Waiting for host to launch...
                </div>
              `}
              <button id="lobby-leave-btn" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171; padding: 12px 16px; font-weight: 700; font-size: 12px; cursor: pointer; border-radius: 4px; font-family: inherit;">LEAVE</button>
            </div>
          </div>
        `,(o=document.getElementById("lobby-copy-btn"))==null||o.addEventListener("click",()=>{navigator.clipboard.writeText(r.roomId).then(()=>{const w=document.getElementById("lobby-copy-btn");w&&(w.innerText="COPIED!"),setTimeout(()=>{w&&(w.innerText="📋 COPY CODE")},1500)})}),(l=document.getElementById("lobby-ready-btn"))==null||l.addEventListener("click",()=>{t.setReady(!T)}),(c=document.getElementById("lobby-bot-btn"))==null||c.addEventListener("click",()=>{t.toggleBots(!r.fillBots)}),(h=document.getElementById("lobby-start-btn"))==null||h.addEventListener("click",()=>{t.startMatch()}),(d=document.getElementById("lobby-leave-btn"))==null||d.addEventListener("click",()=>{i.remove()})}else i.innerHTML=`
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 480px; width: 100%; border-radius: 8px; overflow: hidden; padding: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 20px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ MULTIPLAYER ARENA</div>
                <div style="font-size: 20px; font-weight: 900; letter-spacing: 3px; color: #ffffff;">ONLINE LOBBY</div>
              </div>
              <button id="lobby-close-btn" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;">✕</button>
            </div>

            ${a?`
              <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px 14px; font-size: 11px; border-radius: 6px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between;">
                <span>⚠️ ${a}</span>
                <button id="btn-lobby-retry" style="background: #ef4444; border: none; color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: 800; cursor: pointer; font-family: inherit;">RETRY</button>
              </div>
            `:""}

            <div style="margin-bottom: 20px;">
              <button id="lobby-create-btn" style="width: 100%; background: linear-gradient(135deg, #0284c7, #0369a1); border: 1px solid #38bdf8; color: #ffffff; padding: 14px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit; transition: transform 0.1s;">
                CREATE NEW ARENA ROOM
              </button>
            </div>

            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #64748b; font-size: 11px;">
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
              <span>OR JOIN WITH CODE</span>
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 14px;">
              <input id="lobby-code-input" placeholder="4-LETTER CODE" maxlength="4" style="flex: 1; background: #0f172a; border: 1px solid #334155; color: #38bdf8; font-size: 18px; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; padding: 10px 14px; border-radius: 4px; text-align: center; font-family: inherit; outline: none;" />
              <button id="lobby-join-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; font-weight: 800; font-size: 13px; padding: 10px 20px; cursor: pointer; border-radius: 4px; font-family: inherit;">JOIN</button>
            </div>

            <div style="font-size: 11px; color: #64748b; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22c55e;"></span>
              <span>Live Railway Cloud Multiplayer (wss://sector-234-production.up.railway.app)</span>
            </div>
          </div>
        `,(u=document.getElementById("lobby-close-btn"))==null||u.addEventListener("click",()=>{i.remove()}),(p=document.getElementById("btn-lobby-retry"))==null||p.addEventListener("click",()=>{n(),t.connect().then(m=>{m||n(void 0,`Unable to reach live arena server (${t.serverUrl}).`)})}),(g=document.getElementById("lobby-create-btn"))==null||g.addEventListener("click",()=>{t.createRoom(this.selectedGamerTag,this.selectedRig,this.selectedWeapon,this.selectedMap,this.selectedMode,this.fillBots)}),(v=document.getElementById("lobby-join-btn"))==null||v.addEventListener("click",()=>{const m=document.getElementById("lobby-code-input"),f=((m==null?void 0:m.value)||"").trim().toUpperCase();f&&t.joinRoom(f,this.selectedGamerTag,this.selectedRig,this.selectedWeapon)})};n(),t.connect().then(r=>{r||n(void 0,`Unable to reach live arena server (${t.serverUrl}). Tap RETRY to reconnect.`)}),t.onRoomState=r=>{n(r)},t.onError=r=>{n(void 0,r)},t.onMatchStarting=r=>{let a=r.countdownSec||3;i.innerHTML=`
        <div style="background: #090d16; border: 2px solid #22c55e; box-shadow: 0 0 50px rgba(34, 197, 94, 0.5); padding: 40px; text-align: center; border-radius: 8px;">
          <div style="font-size: 13px; font-weight: 800; color: #22c55e; letter-spacing: 3px; margin-bottom: 10px;">OPERATIVES SYNCHRONIZED</div>
          <div style="font-size: 32px; font-weight: 900; color: #ffffff; letter-spacing: 4px; margin-bottom: 20px;">DEPLOYING TO SECTOR 234</div>
          <div id="lobby-countdown-num" style="font-size: 72px; font-weight: 900; color: #38bdf8; text-shadow: 0 0 20px #38bdf8;">${a}</div>
        </div>
      `;const o=setInterval(()=>{a--;const l=document.getElementById("lobby-countdown-num");l&&(l.innerText=`${a}`),a<=0&&(clearInterval(o),i.remove(),this.executeDeploy(!0,t.currentRoomId||void 0,r.fillBots))},1e3)}}startRadarAnimation(){const t=document.getElementById("radar-canvas-kano"),e=document.getElementById("radar-canvas-lagos");if(!t&&!e)return;let i=0,n=0;const r=()=>{if(i+=.04,n=(n+2)%30,t){const a=t.getContext("2d");if(a){const o=t.width,l=t.height,c=o*.5,h=l*.5;a.fillStyle="#040705",a.fillRect(0,0,o,l),a.strokeStyle="rgba(0, 135, 81, 0.2)",a.lineWidth=1;for(let u=0;u<o;u+=24)a.beginPath(),a.moveTo(u,0),a.lineTo(u,l),a.stroke();for(let u=0;u<l;u+=20)a.beginPath(),a.moveTo(0,u),a.lineTo(o,u),a.stroke();a.strokeStyle="rgba(34, 197, 94, 0.35)",[20,36,54].forEach(u=>{a.beginPath(),a.arc(c,h,u,0,Math.PI*2),a.stroke()}),a.save(),a.translate(c,h),a.rotate(i);const d=a.createLinearGradient(0,0,70,0);d.addColorStop(0,"rgba(34, 197, 94, 0.65)"),d.addColorStop(.5,"rgba(0, 135, 81, 0.3)"),d.addColorStop(1,"rgba(0, 135, 81, 0)"),a.fillStyle=d,a.beginPath(),a.moveTo(0,0),a.arc(0,0,70,0,.4),a.closePath(),a.fill(),a.restore(),a.fillStyle="#22c55e",a.beginPath(),a.arc(c,h,3,0,Math.PI*2),a.fill(),a.font="bold 8px monospace",a.fillStyle="#ffffff",a.fillText("[◆] VAULT",c+6,h+3),a.fillStyle="#22c55e",a.fillRect(c-32,h-14,3,3),a.fillRect(c+42,h+18,3,3),a.fillStyle="#ffffff",a.fillRect(c+28,h-22,3,3)}}if(e){const a=e.getContext("2d");if(a){const o=e.width,l=e.height;a.fillStyle="#040705",a.fillRect(0,0,o,l),a.strokeStyle="#008751",a.lineWidth=1.5,a.beginPath(),a.moveTo(0,24),a.lineTo(o,24),a.moveTo(0,56),a.lineTo(o,56),a.stroke(),a.strokeStyle="rgba(34, 197, 94, 0.4)",a.setLineDash([8,8]),a.beginPath(),a.moveTo(0,40),a.lineTo(o,40),a.stroke(),a.setLineDash([]),a.strokeStyle="rgba(34, 197, 94, 0.22)",a.lineWidth=1;for(let d=10;d<o;d+=28){const u=(d*1.5+n*3)%l;a.beginPath(),a.moveTo(d,u),a.lineTo(d-6,u+12),a.stroke()}const c=i*40%(o+40)-20,h=(i*25+100)%(o+40)-20;a.fillStyle="#22c55e",a.fillRect(c,36,12,7),a.fillRect(h,36,12,7),a.fillStyle="#ffffff",a.fillRect(c+2,38,8,3),a.fillRect(h+2,38,8,3),a.font="bold 8px monospace",a.fillStyle="#22c55e",a.fillText("[▲] 3RD MAINLAND // NIGHT-VISION RADAR",10,14)}}this.radarAnimId=requestAnimationFrame(r)};r()}showDossierModal(){const t=Ui.getInstance(),e=document.createElement("div");e.id="dossier-modal",e.style.position="fixed",e.style.inset="0",e.style.background="rgba(5, 8, 6, 0.95)",e.style.backdropFilter="blur(12px)",e.style.zIndex="1000",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.padding="14px";const i=()=>{const n=t.getProfile(),r=[{id:z.SHOTGUN_AA12,cost:25e4},{id:z.AKIMBO_UZIS,cost:3e5},{id:z.RAIL_SNIPER,cost:55e4},{id:z.VULCAN_MINIGUN,cost:8e5},{id:z.BUNKER_RPG,cost:95e4}];e.innerHTML=`
        <div style="width: 100%; max-width: 620px; max-height: 90vh; overflow-y: auto; background: #0a100d; border: 2px solid #008751; border-radius: 6px; padding: 22px; font-family: 'JetBrains Mono', monospace; color: #f4f4f5; box-shadow: 0 0 50px rgba(0, 135, 81, 0.35);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1c2b22; padding-bottom: 10px; margin-bottom: 16px;">
            <div>
              <div style="color: #22c55e; font-size: 11px; font-weight: 800; letter-spacing: 2px;">[XAG] SPEC-OPS CONTRACTOR DOSSIER</div>
              <h2 style="font-size: 20px; font-weight: 900; margin: 2px 0 0 0; color: #ffffff;">${n.call_sign}</h2>
            </div>
            <button id="close-dossier" style="background: rgba(255, 255, 255, 0.08); border: 1px solid #1c2b22; color: #9ca3af; padding: 6px 14px; border-radius: 3px; cursor: pointer; font-weight: 800;">[X] CLOSE</button>
          </div>

          <!-- Balance & Rank Card -->
          <div style="background: #050806; border: 1px solid #1c2b22; padding: 14px; border-radius: 4px; margin-bottom: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <div style="color: #9ca3af; font-size: 10px; font-weight: 700;">PERMANENT OFFSHORE VAULT</div>
              <div style="color: #22c55e; font-size: 22px; font-weight: 900;">₦${n.cash_balance.toLocaleString()}</div>
            </div>
            <div>
              <div style="color: #9ca3af; font-size: 10px; font-weight: 700;">SYNDICATE CLEARANCE RANK</div>
              <div style="color: #ffffff; font-size: 22px; font-weight: 900;">RANK ${n.rank}</div>
            </div>
          </div>

          <!-- Account Claim Form -->
          ${n.is_claimed?`
            <div style="background: rgba(0, 135, 81, 0.12); border: 1px solid #008751; border-radius: 4px; padding: 10px 14px; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
              <span style="color: #22c55e; font-size: 16px;">[✓]</span>
              <span style="color: #22c55e; font-size: 11px; font-weight: 800;">CONTRACTOR PROFILE VERIFIED & CLOUD-SECURED</span>
            </div>
          `:`
            <div style="background: rgba(0, 135, 81, 0.1); border: 1px dashed #008751; border-radius: 4px; padding: 14px; margin-bottom: 18px;">
              <div style="color: #22c55e; font-size: 12px; font-weight: 800; margin-bottom: 4px;">CLAIM CONTRACTOR IDENTITY (CLOUD SYNC)</div>
              <p style="color: #9ca3af; font-size: 11px; margin: 0 0 10px 0;">Secure your permanent offshore bank balance with a password. Zero email confirmations needed.</p>
              <div style="display: flex; gap: 8px;">
                <input id="claim-password" type="password" placeholder="Create Secret Password" style="flex: 1; background: #050806; border: 1px solid #1c2b22; color: #fff; padding: 8px 12px; border-radius: 4px; font-size: 12px; outline: none;" />
                <button id="btn-submit-claim" style="background: #008751; color: #ffffff; border: none; font-weight: 800; padding: 8px 14px; border-radius: 4px; cursor: pointer;">CLAIM</button>
              </div>
            </div>
          `}

          <!-- Black-Market Armory Unlocks -->
          <div>
            <div style="color: #22c55e; font-size: 12px; font-weight: 800; margin-bottom: 10px; letter-spacing: 1px;">SPEC-OPS ARMORY UNLOCKS</div>
            <div style="display: grid; gap: 8px;">
              ${r.map(c=>{const h=Ye[c.id],d=t.isWeaponUnlocked(c.id);return`
                  <div style="background: #050806; border: 1px solid ${d?"#008751":"#1c2b22"}; padding: 10px 14px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="font-size: 13px; font-weight: 800; color: ${d?"#22c55e":"#ffffff"};">${h.name}</div>
                      <div style="font-size: 10px; color: #9ca3af;">${h.description}</div>
                    </div>
                    ${d?'<span style="color: #22c55e; font-size: 11px; font-weight: 800;">[UNLOCKED]</span>':`<button class="btn-unlock-weapon" data-id="${c.id}" data-cost="${c.cost}" style="background: #008751; border: 1px solid rgba(255,255,255,0.2); color: #ffffff; font-size: 11px; font-weight: 800; padding: 6px 12px; border-radius: 4px; cursor: pointer;">BUY ₦${c.cost.toLocaleString()}</button>`}
                  </div>
                `}).join("")}
            </div>
          </div>
        </div>
      `;const a=e.querySelector("#close-dossier");a&&a.addEventListener("click",()=>e.remove());const o=e.querySelector("#btn-submit-claim");o&&o.addEventListener("click",async()=>{var h;const c=(h=e.querySelector("#claim-password"))==null?void 0:h.value;c&&(await t.claimAccount(n.call_sign,c),i())}),e.querySelectorAll(".btn-unlock-weapon").forEach(c=>{c.addEventListener("click",()=>{var u;const h=c.getAttribute("data-id"),d=parseInt(c.getAttribute("data-cost")||"0",10);if(t.unlockWeapon(h,d)){(u=this.audio)==null||u.playCashPickup(),i();const p=document.querySelector(".xag-vault-val");p&&(p.textContent=`₦${t.getProfile().cash_balance.toLocaleString()}`)}else alert("Insufficient balance in Offshore Vault!")})})};i(),document.body.appendChild(e)}showMatchSummary(t,e){this.onRematchCallback=e;const i=t[0];let n="";t.forEach((o,l)=>{n+=`
        <tr style="border-bottom: 1px solid #1c2b22; color: ${o.isLocal?"#22c55e":"#e4e4e7"};">
          <td style="padding: 10px; font-weight: 800;">#${l+1}</td>
          <td style="padding: 10px;">${o.name} ${o.isSarki||o.isOdogwu?"[◆]":""}</td>
          <td style="padding: 10px; font-family: 'JetBrains Mono', monospace; color: #22c55e; font-weight: 800;">₦${o.cash.toLocaleString()}</td>
          <td style="padding: 10px; text-align: center;">${o.kills}</td>
          <td style="padding: 10px; text-align: center;">${o.deaths}</td>
          <td style="padding: 10px; text-align: center;">${o.wallsDestroyed}</td>
        </tr>
      `}),this.container.innerHTML=`
      <div style="position: absolute; inset: 0; background: rgba(5, 8, 6, 0.95); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 12px; pointer-events: auto;">
        <div style="width: 100%; max-width: 640px; max-height: 94vh; overflow-y: auto; background: #0a100d; border: 1.5px solid #008751; box-shadow: 0 0 50px rgba(0, 135, 81, 0.3); padding: 20px 24px; border-radius: 6px;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="color: #22c55e; font-size: 11px; font-weight: 800; letter-spacing: 2px;">STUDIO XAG // AFTER-ACTION REPORT</div>
            <h2 style="color: #ffffff; font-size: 22px; font-weight: 900; margin-top: 4px;">[◆] THE SARKI: ${i.name.toUpperCase()} (₦${i.cash.toLocaleString()})</h2>
          </div>

          <!-- Scoreboard Table -->
          <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 12px; margin-bottom: 20px;">
            <thead>
              <tr style="border-bottom: 1px solid #1c2b22; color: #9ca3af; text-align: left;">
                <th style="padding: 8px;">RANK</th>
                <th style="padding: 8px;">OPERATIVE</th>
                <th style="padding: 8px;">NET WORTH</th>
                <th style="padding: 8px; text-align: center;">KILLS</th>
                <th style="padding: 8px; text-align: center;">DEATHS</th>
                <th style="padding: 8px; text-align: center;">BREACHES</th>
              </tr>
            </thead>
            <tbody>
              ${n}
            </tbody>
          </table>

          <!-- Actions -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <button id="summary-receipt-btn" style="background: #050806; border: 1.5px solid #22c55e; color: #22c55e; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 800; padding: 12px; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
              DOWNLOAD RECEIPT (PNG)
            </button>
            <button id="summary-rematch-btn" style="background: #008751; color: #ffffff; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 900; padding: 12px; border: none; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
              NEXT CONTRACT [REMATCH]
            </button>
          </div>
        </div>
      </div>
    `;const r=document.getElementById("summary-rematch-btn");r&&r.addEventListener("click",()=>{this.container.innerHTML="",this.onRematchCallback&&this.onRematchCallback()});const a=document.getElementById("summary-receipt-btn");a&&a.addEventListener("click",()=>{V0.downloadReceiptPNG(t,"SARKI HEIST",this.selectedRig,z.RIFLE_XAG47)})}}console.log("[STUDIO XAG: PROTOCOL ZERO] Initializing Tactical Arena Engine...");const oe=new A0("webgl-canvas"),mi=new P0,De=new I0(oe.scene),Bc=new L0(oe.scene),lr=new D0(oe.scene),io=new O0(oe.scene),gi=new U0(oe.scene),vs=new F0(oe.scene),Oi=new N0(oe.scene,gi,mi),ne=new H0(oe.scene);De.onBlackoutTriggered=()=>{console.log("[ALERT] Transformer destroyed! 12-second Blackout active."),io.triggerBlackout(),oe.setBlackout(!0)};Oi.onVaultHit=s=>{ne.heistMode&&ne.heistMode.currentAct===Ae.ACT_1_BREACH&&ne.heistMode.damageVault(s,De,gi)};const re=new C0(document.getElementById("webgl-canvas"),oe.cameraSystem.camera),Si=new z0("hud-canvas",oe.cameraSystem.camera),no=new W0("ui-overlay",mi);Oi.onDamageDealt=(s,t,e,i)=>{Si.addDamagePopup(s,t,e,i)};let at=null;gt.BREACH_BOOSTER;Me.ODOGWU_STASH;let en=!1,Jl=0;const Se=yr.getInstance();Se.onSnapshot=s=>{if(!(!en||!at))for(const t of s.players){if(t.id===at.stats.id)continue;const e=ne.remoteControllers.get(t.id);e&&e.applySnapshot(t)}};Se.onFireWeapon=s=>{if(!en||!at||s.playerId===at.stats.id)return;const t=ne.players.find(e=>e.stats.id===s.playerId);t&&Oi.fireWeapon(t,s.aimAngle,ne.players,(e,i)=>ne.handlePlayerElimination(e,i),De,s.originX,s.originY)};Se.onRigTrigger=s=>{if(!en||!at||s.playerId===at.stats.id)return;const t=ne.players.find(e=>e.stats.id===s.playerId);t&&(mi.playThrusterWhoosh(),Si.addDamagePopup(t.actor.position.x,t.actor.position.y+1.8,s.popupText,"#06b6d4",22))};Se.onGroundSlam=s=>{!en||!at||s.playerId===at.stats.id||(mi.playThrusterWhoosh(),gi.spawnSparks(s.x,s.y,0,4,18))};Se.onDamageEvent=s=>{if(!en)return;const t=ne.players.find(e=>e.stats.id===s.targetId);t&&(t.stats.hp=s.newHp,Si.addDamagePopup(s.x,s.y,`-${s.damage}`,s.isHeadshot?"#f59e0b":"#ef4444"))};Se.onTileDestroy=s=>{De.damageTile(s.tileX,s.tileY,999),gi.spawnSparks(s.tileX+.5,s.tileY+.5,0,3,8)};Se.onPlayerLeft=s=>{const t=ne.players.findIndex(e=>e.stats.id===s);if(t!==-1){const e=ne.players[t];Si.addDamagePopup(e.actor.position.x,e.actor.position.y+1.5,`${e.stats.name} LEFT MATCH`,"#ef4444",16),e.destroy(),ne.players.splice(t,1),ne.remoteControllers.delete(s)}};const Gc=s=>{s.rigType,s.modeType,De.clear(),Bc.setTheme(s.mapId),s.mapId===ce.LAGOS_GOSLOW?bs.generateLagosGoSlow(De):bs.generateBirninKano(De);const t=s.fillBots!==void 0?s.fillBots:!0,e=s.teamSize||3;s.isMultiplayer&&Se.isConnected&&Se.cachedLobbyPlayers.length>0?at=ne.initMultiplayerMatch(s.modeType,Se.localPlayerId||"player_local",s.gamerTag,s.rigType,s.mapId,Se.cachedLobbyPlayers,gi,t,e):at=ne.initMatch(s.modeType,s.gamerTag,s.rigType,s.mapId,t,e),at&&(s.primaryWeapon&&(at.stats.primaryWeapon=s.primaryWeapon,at.stats.activeWeapon=s.primaryWeapon,at.mesh.setWeapon(s.primaryWeapon)),s.secondaryWeapon&&(at.stats.secondaryWeapon=s.secondaryWeapon),oe.cameraSystem.setWeaponProfile(at.stats.activeWeapon)),en=!0};no.showMainMenu(Gc);oe.onUpdate(s=>{if(Bc.update(s),De.update(s),gi.update(s,De),lr.update(s),vs.update(s),io.update(s,n=>oe.setBlackout(n)),!en||!at)return;re.update(),re.playerWorldPos.copy(at.actor.position);let t=re.state.aimAngle;if(!at.stats.isDead){if(at.updateMiniMilitiaMovement(s,re.state.moveX,re.state.jump,re.state.groundSlam,re.state.flyIntensity),at.isJetFlying&&Math.random()<.65&&gi.spawnJetpackSmoke(at.actor.position.x+(at.actor.velocity.x>0?-.2:.2),at.actor.position.y+.35,at.actor.velocity.x,-4),re.state.groundSlam&&vs.triggerGroundSlam(at.actor,at.mesh,De)&&(Se.isConnected&&Se.currentRoomId&&Se.sendGroundSlam({playerId:at.stats.id,x:at.actor.position.x,y:at.actor.position.y}),oe.cameraSystem.addTrauma(.2),mi.playThrusterWhoosh()),re.state.rig&&at.stats.rigCooldownTimer<=0){const n=vs.activateRig(at,De,t,re.state.moveX,oe.cameraSystem);if(n.activated){Se.isConnected&&Se.currentRoomId&&Se.sendRigTrigger({playerId:at.stats.id,rigType:at.stats.rigType,angle:t,popupText:n.popupText}),mi.playThrusterWhoosh(),oe.cameraSystem.addTrauma(.35),Si.addDamagePopup(at.actor.position.x,at.actor.position.y+1.8,n.popupText,"#06b6d4",22);const r={[gt.BREACH_BOOSTER]:2.5,[gt.OVERDRIVE_SLIDE]:1.5,[gt.PHASE_DASH]:3,[gt.GLITCH_ANCHOR]:4};at.stats.rigCooldownTimer=r[at.stats.rigType]}}if(t=re.state.aimAngle,re.state.aiming||re.state.isTouch){let n=null,r=.35,a=18;for(let o=0;o<ne.players.length;o++){const l=ne.players[o];if(l.stats.id===at.stats.id||l.stats.isDead)continue;const c=l.actor.position.x-at.actor.position.x,h=l.actor.position.y+.95-(at.actor.position.y+.95),d=Math.sqrt(c*c+h*h);if(d<a){const u=Math.atan2(h,c);let p=u-t;for(;p<-Math.PI;)p+=Math.PI*2;for(;p>Math.PI;)p-=Math.PI*2;Math.abs(p)<r&&(r=Math.abs(p),n=u,a=d)}}if(n!==null){let o=n-t;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;const l=re.state.isTouch?.45:.2;t+=o*l}}if(re.state.melee){const n=at;gi.spawnMeleeSlashArc(at.actor.position.x,at.actor.position.y,t),at.performMeleeLunge(t,ne.players,(a,o)=>{const l=a.takeDamage(o,n);mi.playGunshot("saw"),gi.spawnSparks(a.actor.position.x,a.actor.position.y+1,5,5,12),Si.addDamagePopup(a.actor.position.x,a.actor.position.y+1.5,`SLICED -${o}!`,"#f59e0b",22),oe.cameraSystem.addTrauma(.18),l&&(n.stats.cash+=5e4,Si.addDamagePopup(a.actor.position.x,a.actor.position.y+2,"BOUNTY STEAL! +₦50,000","#10b981",24),ne.handlePlayerElimination(a,n))},De),Math.hypot(at.actor.position.x-40,at.actor.position.y-3.5)<4.8&&Oi.onVaultHit&&(Oi.onVaultHit(150),mi.playGunshot("saw"),gi.spawnSparks(40,3.5,0,1,15),Si.addDamagePopup(40,5,"VAULT MELEE BREACH -150!","#f59e0b",22),oe.cameraSystem.addTrauma(.12)),mi.playMeleeSwish()}if(re.state.firing&&Oi.fireWeapon(at,t,ne.players,(r,a)=>ne.handlePlayerElimination(r,a),De)){Se.isConnected&&Se.currentRoomId&&Se.sendFire({playerId:at.stats.id,weaponId:at.stats.activeWeapon,originX:at.actor.position.x,originY:at.actor.position.y+.95,aimAngle:t});const r=at.stats.activeWeapon;r===z.SHOTGUN_AA12||r===z.RAIL_SNIPER?oe.cameraSystem.addTrauma(.03):r===z.BUNKER_RPG&&oe.cameraSystem.addTrauma(.12)}re.state.throwBoom&&Oi.handleThrowable(at,t,De,ne.players,(n,r)=>ne.handlePlayerElimination(n,r)),re.state.swapWeapon&&(at.swapWeapon(),oe.cameraSystem.setWeaponProfile(at.stats.activeWeapon)),re.state.reload&&at.reloadWeapon(),io.checkZiplineInteraction(at)}if(at.update(s,De,vs,t),Se.isConnected&&Se.currentRoomId){const n=performance.now();n-Jl>=28&&(Jl=n,Se.sendTick({id:at.stats.id,x:at.actor.position.x,y:at.actor.position.y,vx:at.actor.velocity.x,vy:at.actor.velocity.y,aimAngle:t,facingRight:Math.cos(t)>=0,isJetFlying:at.isJetFlying,isGrounded:at.actor.isGrounded,isSliding:at.isSliding,hp:at.stats.hp,armor:at.stats.armor,fuel:at.jetFuel,activeWeapon:at.stats.activeWeapon,isDead:at.stats.isDead,timestamp:Date.now()}))}Oi.update(s,De,ne.players,(n,r)=>{ne.handlePlayerElimination(n,r),n.stats.isLocalPlayer?oe.cameraSystem.addTrauma(.35):r&&r.stats.isLocalPlayer&&oe.cameraSystem.addTrauma(.12)}),ne.update(s,De,Oi,vs,()=>{mi.playCashPickup(),Si.addDamagePopup(at.actor.position.x,at.actor.position.y+1.8,"+₦25,000","#10b981",20)},gi),ne.players.forEach(n=>{if(n.stats.id===at.stats.id||n.stats.isDead)return;lr.checkPlayerOcclusion(at,n,De)&&(Math.abs(n.actor.velocity.x)>8||n.actor.velocity.y>6||n.fireCooldown>0)&&Math.random()<.04&&(lr.emitSonarRing(n.actor.position.x,n.actor.position.y+.95,n.stats.id),mi.playSonarPing())}),oe.cameraSystem.setWeaponProfile(at.stats.activeWeapon),oe.cameraSystem.setFollowTarget(at.actor.position.x,at.actor.position.y+.95);let e=1;if(re.state.isTouch){const n=re.rightTouchCurrent.distanceTo(re.rightTouchStart);e=Math.min(1,Math.max(0,(n-15)/35))}else{const n=re.mouseWorldPos.x-at.actor.position.x,r=re.mouseWorldPos.y-(at.actor.position.y+.95),a=Math.sqrt(n*n+r*r);e=Math.min(1,Math.max(0,(a-1.2)/2.3))}oe.cameraSystem.setAimShift(Math.cos(re.state.aimAngle)*e,Math.sin(re.state.aimAngle)*e);const i=Math.abs(at.actor.velocity.x);if(oe.cameraSystem.setSpeedZoom(i>16?(i-16)/10:0),Si.render(at,re,ne,lr,s),ne.isMatchOver){en=!1;const n=ne.getScoreboard();no.showMatchSummary(n,()=>{no.showMainMenu(Gc)})}re.resetOneShotFlags()});oe.start();const kc=()=>{re.requestFullscreen()};window.addEventListener("touchstart",kc,{once:!0});window.addEventListener("click",kc,{once:!0});console.log("[STUDIO XAG: PROTOCOL ZERO] Arena Shooter Fully Active.");
