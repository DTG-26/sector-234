var Nd=Object.defineProperty;var kd=s=>{throw TypeError(s)};var Fd=(s,t,e)=>t in s?Nd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var x=(s,t,e)=>Fd(s,typeof t!="symbol"?t+"":t,e);var Ss=(s,t,e)=>t.has(s)?kd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);function Bd(s,t){for(var e=0;e<t.length;e++){const i=t[e];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in s)){const r=Object.getOwnPropertyDescriptor(i,n);r&&Object.defineProperty(s,n,r.get?r:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="170",Gd=0,wc=1,Hd=2,zd=0,th=1,Vd=2,Hi=3,dn=0,ii=1,ke=2,$i=0,ns=1,Gs=2,Cc=3,Rc=4,Wd=5,Mn=100,Xd=101,$d=102,Yd=103,Kd=104,qd=200,jd=201,Zd=202,Jd=203,Fa=204,Ba=205,Qd=206,tu=207,eu=208,iu=209,nu=210,su=211,ru=212,au=213,ou=214,Ga=0,Ha=1,za=2,os=3,Va=4,Wa=5,Xa=6,$a=7,eh=0,cu=1,lu=2,ln=0,ih=1,nh=2,sh=3,$o=4,hu=5,rh=6,ah=7,oh=300,cs=301,ls=302,Ya=303,Ka=304,Kr=306,Vi=1e3,wn=1001,qa=1002,bi=1003,du=1004,Js=1005,ai=1006,ia=1007,Cn=1008,ji=1009,ch=1010,lh=1011,Hs=1012,Yo=1013,Pn=1014,Wi=1015,Li=1016,Ko=1017,qo=1018,hs=1020,hh=35902,dh=1021,uh=1022,pi=1023,fh=1024,ph=1025,ss=1026,ds=1027,mh=1028,jo=1029,gh=1030,Zo=1031,Jo=1033,wr=33776,Cr=33777,Rr=33778,Pr=33779,ja=35840,Za=35841,Ja=35842,Qa=35843,to=36196,eo=37492,io=37496,no=37808,so=37809,ro=37810,ao=37811,oo=37812,co=37813,lo=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,Ir=36492,vo=36494,xo=36495,_h=36283,yo=36284,So=36285,Mo=36286,uu=3200,fu=3201,vh=0,pu=1,on="",di="srgb",ms="srgb-linear",qr="linear",ue="srgb",Un=7680,Pc=519,mu=512,gu=513,_u=514,xh=515,vu=516,xu=517,yu=518,Su=519,To=35044,Ic="300 es",Xi=2e3,Br=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const Ns=Math.PI/180,us=180/Math.PI;function Yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function Qo(s,t){return(s%t+t)%t}function Mu(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Tu(s,t,e){return s!==t?(e-s)/(t-s):0}function ks(s,t,e){return(1-e)*s+e*t}function bu(s,t,e,i){return ks(s,t,1-Math.exp(-e*i))}function Eu(s,t=1){return t-Math.abs(Qo(s,t*2)-t)}function Au(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function wu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Cu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ru(s,t){return s+Math.random()*(t-s)}function Pu(s){return s*(.5-Math.random())}function Iu(s){s!==void 0&&(Lc=s);let t=Lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(s){return s*Ns}function Du(s){return s*us}function Ou(s){return(s&s-1)===0&&s!==0}function Uu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Nu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ku(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hi={DEG2RAD:Ns,RAD2DEG:us,generateUUID:Yi,clamp:Ve,euclideanModulo:Qo,mapLinear:Mu,inverseLerp:Tu,lerp:ks,damp:bu,pingpong:Eu,smoothstep:Au,smootherstep:wu,randInt:Cu,randFloat:Ru,randFloatSpread:Pu,seededRandom:Iu,degToRad:Lu,radToDeg:Du,isPowerOfTwo:Ou,ceilPowerOfTwo:Uu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:ku,normalize:fe,denormalize:Ti};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,n,r,a,o,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],T=n[1],S=n[4],M=n[7],I=n[2],C=n[5],R=n[8];return r[0]=a*v+o*T+c*I,r[3]=a*m+o*S+c*C,r[6]=a*p+o*M+c*R,r[1]=l*v+h*T+d*I,r[4]=l*m+h*S+d*C,r[7]=l*p+h*M+d*R,r[2]=u*v+f*T+g*I,r[5]=u*m+f*S+g*C,r[8]=u*p+f*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*l-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*c)*v,t[5]=(n*r-o*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new $t;function yh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fu(){const s=Gr("canvas");return s.style.display="block",s}const Dc={};function Ds(s){s in Dc||(Dc[s]=!0,console.warn(s))}function Bu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Gu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===on?qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Oc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Nc=[.3127,.329],kc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ms]:{primaries:Oc,whitePoint:Nc,transfer:qr,toXYZ:kc,fromXYZ:Fc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:Oc,whitePoint:Nc,transfer:ue,toXYZ:kc,fromXYZ:Fc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:di}}});let Nn;class zu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nn===void 0&&(Nn=Gr("canvas")),Nn.width=t.width,Nn.height=t.height;const i=Nn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Nn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vu=0;class Sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(sa(n[a].image)):r.push(sa(n[a]))}else r=sa(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class Ke extends gs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=wn,n=wn,r=ai,a=Cn,o=pi,c=ji,l=Ke.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Yi(),this.name="",this.source=new Sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=oh;Ke.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,M=(f+1)/2,I=(p+1)/2,C=(h+u)/4,R=(d+v)/4,P=(g+m)/4;return S>M&&S>I?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=C/i,r=R/i):M>I?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=C/n,r=P/n):I<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(I),i=R/r,n=P/r),this.set(i,n,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends gs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ke(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Xu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mh extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=bi,this.minFilter=bi,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=bi,this.minFilter=bi,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*v,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),C=Math.atan2(I,p*T);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const M=o*T;if(c=c*m+u*M,l=l*m+f*M,h=h*m+g*M,d=d*m+v*M,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(r/2),u=c(i/2),f=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=n+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new L,Bc=new Xs;class $s{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),tr.subVectors(this.max,Ms),kn.subVectors(t.a,Ms),Fn.subVectors(t.b,Ms),Bn.subVectors(t.c,Ms),Qi.subVectors(Fn,kn),tn.subVectors(Bn,Fn),mn.subVectors(kn,Bn);let e=[0,-Qi.z,Qi.y,0,-tn.z,tn.y,0,-mn.z,mn.y,Qi.z,0,-Qi.x,tn.z,0,-tn.x,mn.z,0,-mn.x,-Qi.y,Qi.x,0,-tn.y,tn.x,0,-mn.y,mn.x,0];return!aa(e,kn,Fn,Bn,tr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,kn,Fn,Bn,tr))?!1:(er.crossVectors(Qi,tn),e=[er.x,er.y,er.z],aa(e,kn,Fn,Bn,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,Qs=new $s,kn=new L,Fn=new L,Bn=new L,Qi=new L,tn=new L,mn=new L,Ms=new L,tr=new L,er=new L,gn=new L;function aa(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){gn.fromArray(s,r);const o=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),c=t.dot(gn),l=e.dot(gn),h=i.dot(gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Yu=new $s,Ts=new L,oa=new L;class Ys{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ts,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(oa)),this.expandByPoint(Ts.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new L,ca=new L,ir=new L,en=new L,la=new L,nr=new L,ha=new L;class jr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ca.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),en.copy(this.origin).sub(ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=en.dot(this.direction),c=-en.dot(ir),l=en.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ca).addScaledVector(ir,u),f}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),n=ki.dot(ki)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,n,r){la.subVectors(e,t),nr.subVectors(i,t),ha.crossVectors(la,nr);let a=this.direction.dot(ha),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;en.subVectors(this.origin,t);const c=o*this.direction.dot(nr.crossVectors(en,nr));if(c<0)return null;const l=o*this.direction.dot(la.cross(en));if(l<0||c+l>a)return null;const h=-o*en.dot(ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,n,r,a,o,c,l,h,d,u,f,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,v,m)}set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Gn.setFromMatrixColumn(t,0).length(),r=1/Gn.setFromMatrixColumn(t,1).length(),a=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,qu)}lookAt(t,e,i){const n=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),nn.crossVectors(i,si),nn.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),nn.crossVectors(i,si)),nn.normalize(),sr.crossVectors(si,nn),n[0]=nn.x,n[4]=sr.x,n[8]=si.x,n[1]=nn.y,n[5]=sr.y,n[9]=si.y,n[2]=nn.z,n[6]=sr.z,n[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],S=i[7],M=i[11],I=i[15],C=n[0],R=n[4],P=n[8],_=n[12],y=n[1],A=n[5],O=n[9],D=n[13],G=n[2],X=n[6],z=n[10],K=n[14],H=n[3],st=n[7],q=n[11],J=n[15];return r[0]=a*C+o*y+c*G+l*H,r[4]=a*R+o*A+c*X+l*st,r[8]=a*P+o*O+c*z+l*q,r[12]=a*_+o*D+c*K+l*J,r[1]=h*C+d*y+u*G+f*H,r[5]=h*R+d*A+u*X+f*st,r[9]=h*P+d*O+u*z+f*q,r[13]=h*_+d*D+u*K+f*J,r[2]=g*C+v*y+m*G+p*H,r[6]=g*R+v*A+m*X+p*st,r[10]=g*P+v*O+m*z+p*q,r[14]=g*_+v*D+m*K+p*J,r[3]=T*C+S*y+M*G+I*H,r[7]=T*R+S*A+M*X+I*st,r[11]=T*P+S*O+M*z+I*q,r[15]=T*_+S*D+M*K+I*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*d-n*l*d-r*o*u+i*l*u+n*o*f-i*c*f)+v*(+e*c*f-e*l*u+r*a*u-n*a*f+n*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+i*a*f+r*o*h-i*l*h)+p*(-n*o*h-e*c*d+e*o*u+n*a*d-i*a*u+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=d*m*l-v*u*l+v*c*f-o*m*f-d*c*p+o*u*p,S=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,M=h*v*l-g*d*l+g*o*f-a*v*f-h*o*p+a*d*p,I=g*d*c-h*v*c-g*o*u+a*v*u+h*o*m-a*d*m,C=e*T+i*S+n*M+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=T*R,t[1]=(v*u*r-d*m*r-v*n*f+i*m*f+d*n*p-i*u*p)*R,t[2]=(o*m*r-v*c*r+v*n*l-i*m*l-o*n*p+i*c*p)*R,t[3]=(d*c*r-o*u*r-d*n*l+i*u*l+o*n*f-i*c*f)*R,t[4]=S*R,t[5]=(h*m*r-g*u*r+g*n*f-e*m*f-h*n*p+e*u*p)*R,t[6]=(g*c*r-a*m*r-g*n*l+e*m*l+a*n*p-e*c*p)*R,t[7]=(a*u*r-h*c*r+h*n*l-e*u*l-a*n*f+e*c*f)*R,t[8]=M*R,t[9]=(g*d*r-h*v*r-g*i*f+e*v*f+h*i*p-e*d*p)*R,t[10]=(a*v*r-g*o*r+g*i*l-e*v*l-a*i*p+e*o*p)*R,t[11]=(h*o*r-a*d*r-h*i*l+e*d*l+a*i*f-e*o*f)*R,t[12]=I*R,t[13]=(h*v*n-g*d*n+g*i*u-e*v*u-h*i*m+e*d*m)*R,t[14]=(g*o*n-a*v*n-g*i*c+e*v*c+a*i*m-e*o*m)*R,t[15]=(a*d*n-h*o*n+h*i*c-e*d*c-a*i*u+e*o*u)*R,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,T=c*l,S=c*h,M=c*d,I=i.x,C=i.y,R=i.z;return n[0]=(1-(v+p))*I,n[1]=(f+M)*I,n[2]=(g-S)*I,n[3]=0,n[4]=(f-M)*C,n[5]=(1-(u+p))*C,n[6]=(m+T)*C,n[7]=0,n[8]=(g+S)*R,n[9]=(m-T)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Gn.set(n[0],n[1],n[2]).length();const a=Gn.set(n[4],n[5],n[6]).length(),o=Gn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],xi.copy(this);const l=1/r,h=1/a,d=1/o;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,e.setFromRotationMatrix(xi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Xi){const c=this.elements,l=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n);let f,g;if(o===Xi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Br)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Xi){const c=this.elements,l=1/(e-t),h=1/(i-n),d=1/(a-r),u=(e+t)*l,f=(i+n)*h;let g,v;if(o===Xi)g=(a+r)*d,v=-2*d;else if(o===Br)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gn=new L,xi=new _e,Ku=new L(0,0,0),qu=new L(1,1,1),nn=new L,sr=new L,si=new L,Gc=new _e,Hc=new Xs;class Di{constructor(t=0,e=0,i=0,n=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const zc=new L,Hn=new Xs,Fi=new _e,rr=new L,bs=new L,Zu=new L,Ju=new Xs,Vc=new L(1,0,0),Wc=new L(0,1,0),Xc=new L(0,0,1),$c={type:"added"},Qu={type:"removed"},zn={type:"childadded",child:null},da={type:"childremoved",child:null};class Ee extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new L,e=new Di,i=new Xs,n=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?rr.copy(t):rr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(bs,rr,this.up):Fi.lookAt(rr,bs,this.up),this.quaternion.setFromRotationMatrix(Fi),n&&(Fi.extractRotation(n.matrixWorld),Hn.setFromRotationMatrix(Fi),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),zn.child=t,this.dispatchEvent(zn),zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qu),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),zn.child=t,this.dispatchEvent(zn),zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ee.DEFAULT_UP=new L(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new L,Bi=new L,ua=new L,Gi=new L,Vn=new L,Wn=new L,Yc=new L,fa=new L,pa=new L,ma=new L,ga=new me,_a=new me,va=new me;class fi{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),yi.subVectors(t,e),n.cross(yi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){yi.subVectors(n,e),Bi.subVectors(i,e),ua.subVectors(t,e);const a=yi.dot(yi),o=yi.dot(Bi),c=yi.dot(ua),l=Bi.dot(Bi),h=Bi.dot(ua),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,i),va.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(t,e,i,n){return yi.subVectors(i,e),Bi.subVectors(t,e),yi.cross(Bi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),yi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return fi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Vn.subVectors(n,i),Wn.subVectors(r,i),fa.subVectors(t,i);const c=Vn.dot(fa),l=Wn.dot(fa);if(c<=0&&l<=0)return e.copy(i);pa.subVectors(t,n);const h=Vn.dot(pa),d=Wn.dot(pa);if(h>=0&&d<=h)return e.copy(n);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Vn,a);ma.subVectors(t,r);const f=Vn.dot(ma),g=Wn.dot(ma);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Wn,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Yc.subVectors(r,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(Yc,o);const p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(Vn,a).addScaledVector(Wn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=Qo(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=xa(a,r,t+1/3),this.g=xa(a,r,t),this.b=xa(a,r,t-1/3)}return ie.toWorkingColorSpace(this,n),this}setStyle(t,e=di){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=di){const i=Th[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return ie.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ve(Ge.r*255,0,255))*65536+Math.round(Ve(Ge.g*255,0,255))*256+Math.round(Ve(Ge.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,n=Ge.g,r=Ge.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-i)/d+2;break;case r:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=di){ie.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,n=Ge.b;return t!==di?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(sn),this.setHSL(sn.h+t,sn.s+e,sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(ar);const i=ks(sn.h,ar.h,e),n=ks(sn.s,ar.s,e),r=ks(sn.l,ar.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Ht;Ht.NAMES=Th;let tf=0;class fn extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Yi(),this.name="",this.blending=ns,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Un&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Un&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Un&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jt extends fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new L,or=new bt;class oi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=To,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}}class bh extends oi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Eh extends oi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ge extends oi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ef=0;const li=new _e,ya=new Ee,Xn=new L,ri=new $s,Es=new $s,Ue=new L;class we extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?Eh:bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(ri.min,Es.min),ri.expandByPoint(Ue),Ue.addVectors(ri.max,Es.max),ri.expandByPoint(Ue)):(ri.expandByPoint(Es.min),ri.expandByPoint(Es.max))}ri.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(Xn.fromBufferAttribute(t,l),Ue.add(Xn)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new L,c[P]=new L;const l=new L,h=new L,d=new L,u=new bt,f=new bt,g=new bt,v=new L,m=new L;function p(P,_,y){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,_),d.fromBufferAttribute(i,y),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),o[P].add(v),o[_].add(v),o[y].add(v),c[P].add(m),c[_].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,_=T.length;P<_;++P){const y=T[P],A=y.start,O=y.count;for(let D=A,G=A+O;D<G;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const S=new L,M=new L,I=new L,C=new L;function R(P){I.fromBufferAttribute(n,P),C.copy(I);const _=o[P];S.copy(_),S.sub(I.multiplyScalar(I.dot(_))).normalize(),M.crossVectors(C,_);const A=M.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,A)}for(let P=0,_=T.length;P<_;++P){const y=T[P],A=y.start,O=y.count;for(let D=A,G=A+O;D<G;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new oi(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new _e,_n=new jr,cr=new Ys,qc=new L,lr=new L,hr=new L,dr=new L,Sa=new L,ur=new L,jc=new L,fr=new L;class U extends Ee{constructor(t=new we,e=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Sa.fromBufferAttribute(d,t),a?ur.addScaledVector(Sa,h):ur.addScaledVector(Sa.sub(e),h))}e.add(ur)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(r),_n.copy(t.ray).recast(t.near),!(cr.containsPoint(_n.origin)===!1&&(_n.intersectSphere(cr,qc)===null||_n.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),_n.copy(t.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,I=S;M<I;M+=3){const C=o.getX(M),R=o.getX(M+1),P=o.getX(M+2);n=pr(this,p,t,i,l,h,d,C,R,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);n=pr(this,a,t,i,l,h,d,T,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,I=S;M<I;M+=3){const C=M,R=M+1,P=M+2;n=pr(this,p,t,i,l,h,d,C,R,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,S=m+1,M=m+2;n=pr(this,a,t,i,l,h,d,T,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function nf(s,t,e,i,n,r,a,o){let c;if(t.side===ii?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===dn,o),c===null)return null;fr.copy(o),fr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(fr);return l<e.near||l>e.far?null:{distance:l,point:fr.clone(),object:s}}function pr(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,lr),s.getVertexPosition(c,hr),s.getVertexPosition(l,dr);const h=nf(s,t,e,i,lr,hr,dr,jc);if(h){const d=new L;fi.getBarycoord(jc,lr,hr,dr,d),n&&(h.uv=fi.getInterpolatedAttribute(n,o,c,l,d,new bt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,c,l,d,new bt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};fi.getNormal(lr,hr,dr,u.normal),h.face=u,h.barycoord=d}return h}class it extends we{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(v,m,p,T,S,M,I,C,R,P,_){const y=M/R,A=I/P,O=M/2,D=I/2,G=C/2,X=R+1,z=P+1;let K=0,H=0;const st=new L;for(let q=0;q<z;q++){const J=q*A-D;for(let ct=0;ct<X;ct++){const Et=ct*y-O;st[v]=Et*T,st[m]=J*S,st[p]=G,l.push(st.x,st.y,st.z),st[v]=0,st[m]=0,st[p]=C>0?1:-1,h.push(st.x,st.y,st.z),d.push(ct/R),d.push(1-q/P),K+=1}}for(let q=0;q<P;q++)for(let J=0;J<R;J++){const ct=u+J+X*q,Et=u+J+X*(q+1),j=u+(J+1)+X*(q+1),at=u+(J+1)+X*q;c.push(ct,Et,at),c.push(Et,j,at),H+=6}o.addGroup(f,H,_),f+=H,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function $e(s){const t={};for(let e=0;e<s.length;e++){const i=fs(s[e]);for(const n in i)t[n]=i[n]}return t}function sf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ah(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const zs={clone:fs,merge:$e};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rn=new L,Zc=new bt,Jc=new bt;class ei extends wh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rn.x,rn.y).multiplyScalar(-t/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rn.x,rn.y).multiplyScalar(-t/rn.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Jc),e.subVectors(Jc,Zc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,Yn=1;class of extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ei($n,Yn,t,e);n.layers=this.layers,this.add(n);const r=new ei($n,Yn,t,e);r.layers=this.layers,this.add(r);const a=new ei($n,Yn,t,e);a.layers=this.layers,this.add(a);const o=new ei($n,Yn,t,e);o.layers=this.layers,this.add(o);const c=new ei($n,Yn,t,e);c.layers=this.layers,this.add(c);const l=new ei($n,Yn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ch extends Ke{constructor(t,e,i,n,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ch(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new it(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:$i});r.uniforms.tEquirect.value=e;const a=new U(n,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=ai),new of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Ma=new L,lf=new L,hf=new $t;class an{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ma.subVectors(i,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ma),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||hf.getNormalMatrix(t),n=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vn=new Ys,mr=new L;class ec{constructor(t=new an,e=new an,i=new an,n=new an,r=new an,a=new an){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],c=n[3],l=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],T=n[13],S=n[14],M=n[15];if(i[0].setComponents(c-r,u-l,m-f,M-p).normalize(),i[1].setComponents(c+r,u+l,m+f,M+p).normalize(),i[2].setComponents(c+a,u+h,m+g,M+T).normalize(),i[3].setComponents(c-a,u-h,m-g,M-T).normalize(),i[4].setComponents(c-o,u-d,m-v,M-S).normalize(),e===Xi)i[5].setComponents(c+o,u+d,m+v,M+S).normalize();else if(e===Br)i[5].setComponents(o,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vn)}intersectsSprite(t){return vn.center.set(0,0,0),vn.radius=.7071067811865476,vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(vn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(mr.x=n.normal.x>0?t.max.x:t.min.x,mr.y=n.normal.y>0?t.max.y:t.min.y,mr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function df(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}class ti extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*u-a;for(let S=0;S<l;S++){const M=S*d-r;g.push(M,-T,0),v.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const S=T+l*p,M=T+l*(p+1),I=T+1+l*(p+1),C=T+1+l*p;f.push(S,M,C),f.push(M,I,C)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:uf,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:Sf,begin_vertex:Mf,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:Ef,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Of,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Bf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:zf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:$f,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:Kf,fog_vertex:qf,fog_pars_vertex:jf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:ip,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:cp,lights_physical_fragment:lp,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:up,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:Ap,morphtarget_pars_vertex:wp,morphtarget_vertex:Cp,normal_fragment_begin:Rp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:Gp,premultiplied_alpha_fragment:Hp,project_vertex:zp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:qp,shadowmask_pars_fragment:jp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:im,tonemapping_fragment:nm,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:dm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:Tm,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:Am,meshlambert_vert:wm,meshlambert_frag:Cm,meshmatcap_vert:Rm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Om,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:km,meshtoon_frag:Fm,points_vert:Bm,points_frag:Gm,shadow_vert:Hm,shadow_frag:zm,sprite_vert:Vm,sprite_frag:Wm},ut={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ci={basic:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:$e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:$e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:$e([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:$e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:$e([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:$e([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:$e([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:$e([ut.lights,ut.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Ci.physical={uniforms:$e([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const gr={r:0,b:0,g:0},xn=new Di,Xm=new _e;function $m(s,t,e,i,n,r,a){const o=new Ht(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function v(T){let S=!1;const M=g(T);M===null?p(o,c):M&&M.isColor&&(p(M,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===Kr)?(h===void 0&&(h=new U(new it(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:fs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),xn.copy(S.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(xn)),h.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new U(new ti(2,2),new Ye({name:"BackgroundMaterial",uniforms:fs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,S){T.getRGB(gr,Ah(s)),i.buffers.color.setClear(gr.r,gr.g,gr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:v,addToRenderList:m}}function Ym(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(y,A,O,D,G){let X=!1;const z=d(D,O,A);r!==z&&(r=z,l(r.object)),X=f(y,D,O,G),X&&g(y,D,O,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(y,A,O,D),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,A,O){const D=O.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let X=G[A.id];X===void 0&&(X={},G[A.id]=X);let z=X[D];return z===void 0&&(z=u(c()),X[D]=z),z}function u(y){const A=[],O=[],D=[];for(let G=0;G<e;G++)A[G]=0,O[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,A,O,D){const G=r.attributes,X=A.attributes;let z=0;const K=O.getAttributes();for(const H in K)if(K[H].location>=0){const q=G[H];let J=X[H];if(J===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),q===void 0||q.attribute!==J||J&&q.data!==J.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(y,A,O,D){const G={},X=A.attributes;let z=0;const K=O.getAttributes();for(const H in K)if(K[H].location>=0){let q=X[H];q===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const J={};J.attribute=q,q&&q.data&&(J.data=q.data),G[H]=J,z++}r.attributes=G,r.attributesNum=z,r.index=D}function v(){const y=r.newAttributes;for(let A=0,O=y.length;A<O;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){const O=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;O[y]=1,D[y]===0&&(s.enableVertexAttribArray(y),D[y]=1),G[y]!==A&&(s.vertexAttribDivisor(y,A),G[y]=A)}function T(){const y=r.newAttributes,A=r.enabledAttributes;for(let O=0,D=A.length;O<D;O++)A[O]!==y[O]&&(s.disableVertexAttribArray(O),A[O]=0)}function S(y,A,O,D,G,X,z){z===!0?s.vertexAttribIPointer(y,A,O,G,X):s.vertexAttribPointer(y,A,O,D,G,X)}function M(y,A,O,D){v();const G=D.attributes,X=O.getAttributes(),z=A.defaultAttributeValues;for(const K in X){const H=X[K];if(H.location>=0){let st=G[K];if(st===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const q=st.normalized,J=st.itemSize,ct=t.get(st);if(ct===void 0)continue;const Et=ct.buffer,j=ct.type,at=ct.bytesPerElement,vt=j===s.INT||j===s.UNSIGNED_INT||st.gpuType===Yo;if(st.isInterleavedBufferAttribute){const dt=st.data,Ot=dt.stride,Ft=st.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<H.locationSize;Yt++)p(H.location+Yt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<H.locationSize;Yt++)m(H.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Yt=0;Yt<H.locationSize;Yt++)S(H.location+Yt,J/H.locationSize,j,q,Ot*at,(Ft+J/H.locationSize*Yt)*at,vt)}else{if(st.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt,st.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let dt=0;dt<H.locationSize;dt++)S(H.location+dt,J/H.locationSize,j,q,J*at,J/H.locationSize*dt*at,vt)}}else if(z!==void 0){const q=z[K];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(H.location,q);break;case 3:s.vertexAttrib3fv(H.location,q);break;case 4:s.vertexAttrib4fv(H.location,q);break;default:s.vertexAttrib1fv(H.location,q)}}}}T()}function I(){P();for(const y in i){const A=i[y];for(const O in A){const D=A[O];for(const G in D)h(D[G].object),delete D[G];delete A[O]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const O in A){const D=A[O];for(const G in D)h(D[G].object),delete D[G];delete A[O]}delete i[y.id]}function R(y){for(const A in i){const O=i[A];if(O[y.id]===void 0)continue;const D=O[y.id];for(const G in D)h(D[G].object),delete D[G];delete O[y.id]}}function P(){_(),a=!0,r!==n&&(r=n,l(r.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:_,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Km(s,t,e){let i;function n(l){i=l}function r(l,h){s.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==pi&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ji&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wi&&!P)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:I,maxSamples:C}}function jm(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new an,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:i,S=T*4;let M=p.clippingState||null;c.value=M,M=h(g,u,S,f);for(let I=0;I!==S;++I)M[I]=e[I];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==v;++S,M+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Zm(s){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=cs:o===Ka&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===Ka)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new cf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ic extends wh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const is=4,Qc=[.125,.215,.35,.446,.526,.582],Tn=20,Ta=new ic,tl=new Ht;let ba=null,Ea=0,Aa=0,wa=!1;const Sn=(1+Math.sqrt(5))/2,Kn=1/Sn,el=[new L(-Sn,Kn,0),new L(Sn,Kn,0),new L(-Kn,0,Sn),new L(Kn,0,Sn),new L(0,Sn,-Kn),new L(0,Sn,Kn),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ea,Aa),this._renderer.xr.enabled=wa,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Li,format:pi,colorSpace:ms,depthBuffer:!1},n=nl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Qm(r,t,e)}return n}_compileMaterial(t){const e=new U(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,n){const o=new ei(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=ln,h.autoClear=!1;const f=new jt({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),g=new U(new it,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;_r(n,T*S,p>2?S:0,S,S),h.setRenderTarget(n),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cs||t.mapping===ls;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new U(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=el[(n-r-1)%el.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new U(this._lodPlanes[n],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Tn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Tn;m>Tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tn}`);const p=[];let T=0;for(let R=0;R<Tn;++R){const P=R/v,_=Math.exp(-P*P/2);p.push(_),R===0?T+=_:R<m&&(T+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const M=this._sizeLods[n],I=3*M*(n>S-is?n-S+is:0),C=4*(this._cubeSize-M);_r(e,I,C,3*M,2*M),c.setRenderTarget(e),c.render(d,Ta)}}function Jm(s){const t=[],e=[],i=[];let n=s;const r=s-is+1+Qc.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let c=1/o;a>s-is?c=Qc[a-s+is-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,P=C>2?0:-1,_=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];T.set(_,v*g*C),S.set(u,m*g*C);const y=[C,C,C,C,C,C];M.set(y,p*g*C)}const I=new we;I.setAttribute("position",new oi(T,v)),I.setAttribute("uv",new oi(S,m)),I.setAttribute("faceIndex",new oi(M,p)),t.push(I),n>is&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nl(s,t,e){const i=new mi(s,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Qm(s,t,e){const i=new Float32Array(Tn),n=new L(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:nc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function sl(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function rl(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function t0(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ya||c===Ka,h=c===cs||c===ls;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new il(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new il(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function e0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Ds("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function i0(s,t,e,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete n[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let S=0,M=T.length;S<M;S+=3){const I=T[S+0],C=T[S+1],R=T[S+2];u.push(I,C,C,R,R,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let S=0,M=T.length/3-1;S<M;S+=3){const I=S+0,C=S+1,R=S+2;u.push(I,C,C,R,R,I)}}else return;const m=new(yh(u)?Eh:bh)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function n0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(i,f,r,u*a),e.update(f,i,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*a,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function s0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function r0(s,t,e){const i=new WeakMap,n=new me;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let I=o.attributes.position.count*M,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*C*4*d),P=new Mh(R,I,C,d);P.type=Wi,P.needsUpdate=!0;const _=M*4;for(let A=0;A<d;A++){const O=p[A],D=T[A],G=S[A],X=I*C*4*A;for(let z=0;z<O.count;z++){const K=z*_;g===!0&&(n.fromBufferAttribute(O,z),R[X+K+0]=n.x,R[X+K+1]=n.y,R[X+K+2]=n.z,R[X+K+3]=0),v===!0&&(n.fromBufferAttribute(D,z),R[X+K+4]=n.x,R[X+K+5]=n.y,R[X+K+6]=n.z,R[X+K+7]=0),m===!0&&(n.fromBufferAttribute(G,z),R[X+K+8]=n.x,R[X+K+9]=n.y,R[X+K+10]=n.z,R[X+K+11]=G.itemSize===4?n.w:1)}}u={count:d,texture:P,size:new bt(I,C)},i.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function a0(s,t,e,i){let n=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(n.get(d)!==l&&(t.update(d),n.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;n.get(u)!==l&&(u.update(),n.set(u,l))}return d}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ph extends Ke{constructor(t,e,i,n,r,a,o,c,l,h=ss){if(h!==ss&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ss&&(i=Pn),i===void 0&&h===ds&&(i=hs),super(null,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:bi,this.minFilter=c!==void 0?c:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ih=new Ke,al=new Ph(1,1),Lh=new Mh,Dh=new $u,Oh=new Ch,ol=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),dl=new Float32Array(4);function _s(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=ol[n];if(r===void 0&&(r=new Float32Array(n),ol[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Zr(s,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function o0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function d0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;dl.set(i),s.uniformMatrix2fv(this.addr,!1,dl),Oe(e,i)}}function u0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;hl.set(i),s.uniformMatrix3fv(this.addr,!1,hl),Oe(e,i)}}function f0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;ll.set(i),s.uniformMatrix4fv(this.addr,!1,ll),Oe(e,i)}}function p0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function g0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function _0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function v0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function x0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function M0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(al.compareFunction=xh,r=al):r=Ih,e.setTexture2D(t||r,n)}function T0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Dh,n)}function b0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Oh,n)}function E0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Lh,n)}function A0(s){switch(s){case 5126:return o0;case 35664:return c0;case 35665:return l0;case 35666:return h0;case 35674:return d0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(s,t){s.uniform1fv(this.addr,t)}function C0(s,t){const e=_s(t,this.size,2);s.uniform2fv(this.addr,e)}function R0(s,t){const e=_s(t,this.size,3);s.uniform3fv(this.addr,e)}function P0(s,t){const e=_s(t,this.size,4);s.uniform4fv(this.addr,e)}function I0(s,t){const e=_s(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function L0(s,t){const e=_s(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function D0(s,t){const e=_s(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function O0(s,t){s.uniform1iv(this.addr,t)}function U0(s,t){s.uniform2iv(this.addr,t)}function N0(s,t){s.uniform3iv(this.addr,t)}function k0(s,t){s.uniform4iv(this.addr,t)}function F0(s,t){s.uniform1uiv(this.addr,t)}function B0(s,t){s.uniform2uiv(this.addr,t)}function G0(s,t){s.uniform3uiv(this.addr,t)}function H0(s,t){s.uniform4uiv(this.addr,t)}function z0(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Ih,r[a])}function V0(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Dh,r[a])}function W0(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Oh,r[a])}function X0(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Lh,r[a])}function $0(s){switch(s){case 5126:return w0;case 35664:return C0;case 35665:return R0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return O0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return k0;case 5125:return F0;case 36294:return B0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class K0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function ul(s,t){s.seq.push(t),s.map[t.id]=t}function j0(s,t,e){const i=s.name,n=i.length;for(Ca.lastIndex=0;;){const r=Ca.exec(i),a=Ca.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){ul(e,l===void 0?new Y0(o,s,t):new K0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new q0(o),ul(e,d)),e=d}}}class Lr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);j0(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function fl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Z0=37297;let J0=0;function Q0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const pl=new $t;function tg(s){ie._getMatrix(pl,ie.workingColorSpace,s);const t=`mat3( ${pl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case qr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ml(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Q0(s.getShaderSource(t),a)}else return n}function eg(s,t){const e=tg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(s,t){let e;switch(t){case ih:e="Linear";break;case nh:e="Reinhard";break;case sh:e="Cineon";break;case $o:e="ACESFilmic";break;case rh:e="AgX";break;case ah:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new L;function ng(){ie.getLuminanceCoefficients(vr);const s=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function rg(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ag(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Os(s){return s!==""}function gl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(s){return s.replace(og,lg)}const cg=new Map;function lg(s,t){let e=qt[t];if(e===void 0){const i=cg.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(s){return s.replace(hg,dg)}function dg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function xl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ug(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case ls:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eh:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case lu:t="ENVMAP_BLENDING_ADD";break}return t}function gg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function _g(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ug(e),l=fg(e),h=pg(e),d=mg(e),u=gg(e),f=sg(e),g=rg(r),v=n.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?qt.tonemapping_pars_fragment:"",e.toneMapping!==ln?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=bo(a),a=gl(a,e),a=_l(a,e),o=bo(o),o=gl(o,e),o=_l(o,e),a=vl(a),o=vl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+a,M=T+p+o,I=fl(n,n.VERTEX_SHADER,S),C=fl(n,n.FRAGMENT_SHADER,M);n.attachShader(v,I),n.attachShader(v,C),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(A){if(s.debug.checkShaderErrors){const O=n.getProgramInfoLog(v).trim(),D=n.getShaderInfoLog(I).trim(),G=n.getShaderInfoLog(C).trim();let X=!0,z=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,I,C);else{const K=ml(n,I,"vertex"),H=ml(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+K+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||G==="")&&(z=!1);z&&(A.diagnostics={runnable:X,programLog:O,vertexShader:{log:D,prefix:m},fragmentShader:{log:G,prefix:p}})}n.deleteShader(I),n.deleteShader(C),P=new Lr(n,v),_=ag(n,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(v,Z0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let vg=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new yg(t),e.set(t,i)),i}}class yg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function Sg(s,t,e,i,n,r,a){const o=new tc,c=new xg,l=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,A,O,D){const G=O.fog,X=D.geometry,z=_.isMeshStandardMaterial?O.environment:null,K=(_.isMeshStandardMaterial?e:t).get(_.envMap||z),H=K&&K.mapping===Kr?K.image.height:null,st=g[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=q!==void 0?q.length:0;let ct=0;X.morphAttributes.position!==void 0&&(ct=1),X.morphAttributes.normal!==void 0&&(ct=2),X.morphAttributes.color!==void 0&&(ct=3);let Et,j,at,vt;if(st){const he=Ci[st];Et=he.vertexShader,j=he.fragmentShader}else Et=_.vertexShader,j=_.fragmentShader,c.update(_),at=c.getVertexShaderID(_),vt=c.getFragmentShaderID(_);const dt=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),Ft=D.isInstancedMesh===!0,Yt=D.isBatchedMesh===!0,ve=!!_.map,Zt=!!_.matcap,Te=!!K,F=!!_.aoMap,je=!!_.lightMap,kt=!!_.bumpMap,Nt=!!_.normalMap,Rt=!!_.displacementMap,re=!!_.emissiveMap,Lt=!!_.metalnessMap,w=!!_.roughnessMap,b=_.anisotropy>0,V=_.clearcoat>0,et=_.dispersion>0,rt=_.iridescence>0,tt=_.sheen>0,Pt=_.transmission>0,pt=b&&!!_.anisotropyMap,yt=V&&!!_.clearcoatMap,ne=V&&!!_.clearcoatNormalMap,lt=V&&!!_.clearcoatRoughnessMap,St=rt&&!!_.iridescenceMap,Ut=rt&&!!_.iridescenceThicknessMap,Bt=tt&&!!_.sheenColorMap,Mt=tt&&!!_.sheenRoughnessMap,te=!!_.specularMap,Kt=!!_.specularColorMap,xe=!!_.specularIntensityMap,N=Pt&&!!_.transmissionMap,ft=Pt&&!!_.thicknessMap,Z=!!_.gradientMap,nt=!!_.alphaMap,_t=_.alphaTest>0,mt=!!_.alphaHash,Wt=!!_.extensions;let Ae=ln;_.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Fe={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:j,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&D._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&D.instanceColor!==null,instancingMorph:Ft&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ms,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:Zt,envMap:Te,envMapMode:Te&&K.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:je,bumpMap:kt,normalMap:Nt,displacementMap:u&&Rt,emissiveMap:re,normalMapObjectSpace:Nt&&_.normalMapType===pu,normalMapTangentSpace:Nt&&_.normalMapType===vh,metalnessMap:Lt,roughnessMap:w,anisotropy:b,anisotropyMap:pt,clearcoat:V,clearcoatMap:yt,clearcoatNormalMap:ne,clearcoatRoughnessMap:lt,dispersion:et,iridescence:rt,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:tt,sheenColorMap:Bt,sheenRoughnessMap:Mt,specularMap:te,specularColorMap:Kt,specularIntensityMap:xe,transmission:Pt,transmissionMap:N,thicknessMap:ft,gradientMap:Z,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:mt,combine:_.combine,mapUv:ve&&v(_.map.channel),aoMapUv:F&&v(_.aoMap.channel),lightMapUv:je&&v(_.lightMap.channel),bumpMapUv:kt&&v(_.bumpMap.channel),normalMapUv:Nt&&v(_.normalMap.channel),displacementMapUv:Rt&&v(_.displacementMap.channel),emissiveMapUv:re&&v(_.emissiveMap.channel),metalnessMapUv:Lt&&v(_.metalnessMap.channel),roughnessMapUv:w&&v(_.roughnessMap.channel),anisotropyMapUv:pt&&v(_.anisotropyMap.channel),clearcoatMapUv:yt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(_.sheenRoughnessMap.channel),specularMapUv:te&&v(_.specularMap.channel),specularColorMapUv:Kt&&v(_.specularColorMap.channel),specularIntensityMapUv:xe&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:ft&&v(_.thicknessMap.channel),alphaMapUv:nt&&v(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Nt||b),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(ve||nt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ot,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:re&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ke,flipSided:_.side===ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)y.push(A),y.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(T(y,_),S(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function T(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){const y=g[_.type];let A;if(y){const O=Ci[y];A=zs.clone(O.uniforms)}else A=_.uniforms;return A}function I(_,y){let A;for(let O=0,D=h.length;O<D;O++){const G=h[O];if(G.cacheKey===y){A=G,++A.usedTimes;break}}return A===void 0&&(A=new _g(s,y,_,r),h.push(A)),A}function C(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function R(_){c.remove(_)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:P}}function Mg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Tg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d,u,f,g,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Tg),i.length>1&&i.sort(u||yl),n.length>1&&n.sort(u||yl)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:c,finish:h,sort:l}}function bg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Sl,s.set(i,[a])):n>=r.length?(a=new Sl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Eg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Ag(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wg=0;function Cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rg(s){const t=new Eg,e=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const n=new L,r=new _e,a=new _e;function o(l){let h=0,d=0,u=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,S=0,M=0,I=0,C=0,R=0;l.sort(Cg);for(let _=0,y=l.length;_<y;_++){const A=l[_],O=A.color,D=A.intensity,G=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*D,d+=O.g*D,u+=O.b*D;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],D);R++}else if(A.isDirectionalLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const K=A.shadow,H=e.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=A.shadow.matrix,T++}i.directional[f]=z,f++}else if(A.isSpotLight){const z=t.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(O).multiplyScalar(D),z.distance=G,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[v]=z;const K=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,K.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=K.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=X,M++}v++}else if(A.isRectAreaLight){const z=t.get(A);z.color.copy(O).multiplyScalar(D),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=z,m++}else if(A.isPointLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const K=A.shadow,H=e.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=z,g++}else if(A.isHemisphereLight){const z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(D),z.groundColor.copy(A.groundColor).multiplyScalar(D),i.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==I||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=I,P.numLightProbes=R,i.version=wg++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const S=l[p];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Ml(s){const t=new Rg(s),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Pg(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Ml(s),t.set(n,[o])):r>=a.length?(o=new Ml(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ig extends fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lg extends fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function Ug(s,t,e){let i=new ec;const n=new bt,r=new bt,a=new me,o=new Ig({depthPacking:fu}),c=new Lg,l={},h=e.maxTextureSize,d={[dn]:ii,[ii]:dn,[ke]:ke},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Dg,fragmentShader:Og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new U(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(C,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const _=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),O=s.state;O.setBlending($i),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=p!==Hi&&this.type===Hi,G=p===Hi&&this.type!==Hi;for(let X=0,z=C.length;X<z;X++){const K=C[X],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const st=H.getFrameExtents();if(n.multiply(st),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/st.x),n.x=r.x*st.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/st.y),n.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||D===!0||G===!0){const J=this.type!==Hi?{minFilter:bi,magFilter:bi}:{};H.map!==null&&H.map.dispose(),H.map=new mi(n.x,n.y,J),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const q=H.getViewportCount();for(let J=0;J<q;J++){const ct=H.getViewport(J);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),O.viewport(a),H.updateMatrices(K,J),i=H.getFrustum(),M(R,P,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Hi&&T(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(_,y,A)};function T(C,R){const P=t.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mi(n.x,n.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,P,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,P,f,v,null)}function S(C,R,P,_){let y=null;const A=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)y=A;else if(y=P.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=y.uuid,D=R.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let X=G[D];X===void 0&&(X=y.clone(),G[D]=X,R.addEventListener("dispose",I)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,_===Hi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=P}return y}function M(C,R,P,_,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const D=t.update(C),G=C.material;if(Array.isArray(G)){const X=D.groups;for(let z=0,K=X.length;z<K;z++){const H=X[z],st=G[H.materialIndex];if(st&&st.visible){const q=S(C,st,_,y);C.onBeforeShadow(s,C,R,P,D,q,H),s.renderBufferDirect(P,null,D,q,C,H),C.onAfterShadow(s,C,R,P,D,q,H)}}}else if(G.visible){const X=S(C,G,_,y);C.onBeforeShadow(s,C,R,P,D,X,null),s.renderBufferDirect(P,null,D,X,C,null),C.onAfterShadow(s,C,R,P,D,X,null)}}const O=C.children;for(let D=0,G=O.length;D<G;D++)M(O[D],R,P,_,y)}function I(C){C.target.removeEventListener("dispose",I);for(const P in l){const _=l[P],y=C.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}const Ng={[Ga]:Ha,[za]:Xa,[Va]:$a,[os]:Wa,[Ha]:Ga,[Xa]:za,[$a]:Va,[Wa]:os};function kg(s,t){function e(){let N=!1;const ft=new me;let Z=null;const nt=new me(0,0,0,0);return{setMask:function(_t){Z!==_t&&!N&&(s.colorMask(_t,_t,_t,_t),Z=_t)},setLocked:function(_t){N=_t},setClear:function(_t,mt,Wt,Ae,Fe){Fe===!0&&(_t*=Ae,mt*=Ae,Wt*=Ae),ft.set(_t,mt,Wt,Ae),nt.equals(ft)===!1&&(s.clearColor(_t,mt,Wt,Ae),nt.copy(ft))},reset:function(){N=!1,Z=null,nt.set(-1,0,0,0)}}}function i(){let N=!1,ft=!1,Z=null,nt=null,_t=null;return{setReversed:function(mt){if(ft!==mt){const Wt=t.get("EXT_clip_control");ft?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=_t;_t=null,this.setClear(Ae)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?dt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(mt){Z!==mt&&!N&&(s.depthMask(mt),Z=mt)},setFunc:function(mt){if(ft&&(mt=Ng[mt]),nt!==mt){switch(mt){case Ga:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case za:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case $a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=mt}},setLocked:function(mt){N=mt},setClear:function(mt){_t!==mt&&(ft&&(mt=1-mt),s.clearDepth(mt),_t=mt)},reset:function(){N=!1,Z=null,nt=null,_t=null,ft=!1}}}function n(){let N=!1,ft=null,Z=null,nt=null,_t=null,mt=null,Wt=null,Ae=null,Fe=null;return{setTest:function(he){N||(he?dt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(he){ft!==he&&!N&&(s.stencilMask(he),ft=he)},setFunc:function(he,gi,Oi){(Z!==he||nt!==gi||_t!==Oi)&&(s.stencilFunc(he,gi,Oi),Z=he,nt=gi,_t=Oi)},setOp:function(he,gi,Oi){(mt!==he||Wt!==gi||Ae!==Oi)&&(s.stencilOp(he,gi,Oi),mt=he,Wt=gi,Ae=Oi)},setLocked:function(he){N=he},setClear:function(he){Fe!==he&&(s.clearStencil(he),Fe=he)},reset:function(){N=!1,ft=null,Z=null,nt=null,_t=null,mt=null,Wt=null,Ae=null,Fe=null}}}const r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,S=null,M=null,I=null,C=null,R=new Ht(0,0,0),P=0,_=!1,y=null,A=null,O=null,D=null,G=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=K>=2);let st=null,q={};const J=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Et=new me().fromArray(J),j=new me().fromArray(ct);function at(N,ft,Z,nt){const _t=new Uint8Array(4),mt=s.createTexture();s.bindTexture(N,mt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Z;Wt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ft+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return mt}const vt={};vt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(os),kt(!1),Nt(wc),dt(s.CULL_FACE),F($i);function dt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ot(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ft(N,ft){return d[N]!==ft?(s.bindFramebuffer(N,ft),d[N]=ft,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ft),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Yt(N,ft){let Z=f,nt=!1;if(N){Z=u.get(ft),Z===void 0&&(Z=[],u.set(ft,Z));const _t=N.textures;if(Z.length!==_t.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Wt=_t.length;mt<Wt;mt++)Z[mt]=s.COLOR_ATTACHMENT0+mt;Z.length=_t.length,nt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,nt=!0);nt&&s.drawBuffers(Z)}function ve(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Zt={[Mn]:s.FUNC_ADD,[Xd]:s.FUNC_SUBTRACT,[$d]:s.FUNC_REVERSE_SUBTRACT};Zt[Yd]=s.MIN,Zt[Kd]=s.MAX;const Te={[qd]:s.ZERO,[jd]:s.ONE,[Zd]:s.SRC_COLOR,[Fa]:s.SRC_ALPHA,[nu]:s.SRC_ALPHA_SATURATE,[eu]:s.DST_COLOR,[Qd]:s.DST_ALPHA,[Jd]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[iu]:s.ONE_MINUS_DST_COLOR,[tu]:s.ONE_MINUS_DST_ALPHA,[su]:s.CONSTANT_COLOR,[ru]:s.ONE_MINUS_CONSTANT_COLOR,[au]:s.CONSTANT_ALPHA,[ou]:s.ONE_MINUS_CONSTANT_ALPHA};function F(N,ft,Z,nt,_t,mt,Wt,Ae,Fe,he){if(N===$i){v===!0&&(Ot(s.BLEND),v=!1);return}if(v===!1&&(dt(s.BLEND),v=!0),N!==Wd){if(N!==m||he!==_){if((p!==Mn||M!==Mn)&&(s.blendEquation(s.FUNC_ADD),p=Mn,M=Mn),he)switch(N){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gs:s.blendFunc(s.ONE,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,S=null,I=null,C=null,R.set(0,0,0),P=0,m=N,_=he}return}_t=_t||ft,mt=mt||Z,Wt=Wt||nt,(ft!==p||_t!==M)&&(s.blendEquationSeparate(Zt[ft],Zt[_t]),p=ft,M=_t),(Z!==T||nt!==S||mt!==I||Wt!==C)&&(s.blendFuncSeparate(Te[Z],Te[nt],Te[mt],Te[Wt]),T=Z,S=nt,I=mt,C=Wt),(Ae.equals(R)===!1||Fe!==P)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Fe),R.copy(Ae),P=Fe),m=N,_=!1}function je(N,ft){N.side===ke?Ot(s.CULL_FACE):dt(s.CULL_FACE);let Z=N.side===ii;ft&&(Z=!Z),kt(Z),N.blending===ns&&N.transparent===!1?F($i):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const nt=N.stencilWrite;o.setTest(nt),nt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function Nt(N){N!==Gd?(dt(s.CULL_FACE),N!==A&&(N===wc?s.cullFace(s.BACK):N===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),A=N}function Rt(N){N!==O&&(z&&s.lineWidth(N),O=N)}function re(N,ft,Z){N?(dt(s.POLYGON_OFFSET_FILL),(D!==ft||G!==Z)&&(s.polygonOffset(ft,Z),D=ft,G=Z)):Ot(s.POLYGON_OFFSET_FILL)}function Lt(N){N?dt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function w(N){N===void 0&&(N=s.TEXTURE0+X-1),st!==N&&(s.activeTexture(N),st=N)}function b(N,ft,Z){Z===void 0&&(st===null?Z=s.TEXTURE0+X-1:Z=st);let nt=q[Z];nt===void 0&&(nt={type:void 0,texture:void 0},q[Z]=nt),(nt.type!==N||nt.texture!==ft)&&(st!==Z&&(s.activeTexture(Z),st=Z),s.bindTexture(N,ft||vt[N]),nt.type=N,nt.texture=ft)}function V(){const N=q[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(N){Et.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function Mt(N){j.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function te(N,ft){let Z=l.get(ft);Z===void 0&&(Z=new WeakMap,l.set(ft,Z));let nt=Z.get(N);nt===void 0&&(nt=s.getUniformBlockIndex(ft,N.name),Z.set(N,nt))}function Kt(N,ft){const nt=l.get(ft).get(N);c.get(ft)!==nt&&(s.uniformBlockBinding(ft,nt,N.__bindingPointIndex),c.set(ft,nt))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,q={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,S=null,M=null,I=null,C=null,R=new Ht(0,0,0),P=0,_=!1,y=null,A=null,O=null,D=null,G=null,Et.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Ot,bindFramebuffer:Ft,drawBuffers:Yt,useProgram:ve,setBlending:F,setMaterial:je,setFlipSided:kt,setCullFace:Nt,setLineWidth:Rt,setPolygonOffset:re,setScissorTest:Lt,activeTexture:w,bindTexture:b,unbindTexture:V,compressedTexImage2D:et,compressedTexImage3D:rt,texImage2D:St,texImage3D:Ut,updateUBOMapping:te,uniformBlockBinding:Kt,texStorage2D:ne,texStorage3D:lt,texSubImage2D:tt,texSubImage3D:Pt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Bt,viewport:Mt,reset:xe}}function Tl(s,t,e,i){const n=Fg(i);switch(e){case dh:return s*t;case fh:return s*t;case ph:return s*t*2;case mh:return s*t/n.components*n.byteLength;case jo:return s*t/n.components*n.byteLength;case gh:return s*t*2/n.components*n.byteLength;case Zo:return s*t*2/n.components*n.byteLength;case uh:return s*t*3/n.components*n.byteLength;case pi:return s*t*4/n.components*n.byteLength;case Jo:return s*t*4/n.components*n.byteLength;case wr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case ja:case Ja:return Math.max(s,8)*Math.max(t,8)/2;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ir:case vo:case xo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _h:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case So:case Mo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fg(s){switch(s){case ji:case ch:return{byteLength:1,components:1};case Hs:case lh:case Li:return{byteLength:2,components:1};case Ko:case qo:return{byteLength:2,components:4};case Pn:case Yo:case Wi:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bg(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return f?new OffscreenCanvas(w,b):Gr("canvas")}function v(w,b,V){let et=1;const rt=Lt(w);if((rt.width>V||rt.height>V)&&(et=V/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(et*rt.width),Pt=Math.floor(et*rt.height);d===void 0&&(d=g(tt,Pt));const pt=b?g(tt,Pt):d;return pt.width=tt,pt.height=Pt,pt.getContext("2d").drawImage(w,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+Pt+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,b,V,et,rt=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=b;if(b===s.RED&&(V===s.FLOAT&&(tt=s.R32F),V===s.HALF_FLOAT&&(tt=s.R16F),V===s.UNSIGNED_BYTE&&(tt=s.R8)),b===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.R8UI),V===s.UNSIGNED_SHORT&&(tt=s.R16UI),V===s.UNSIGNED_INT&&(tt=s.R32UI),V===s.BYTE&&(tt=s.R8I),V===s.SHORT&&(tt=s.R16I),V===s.INT&&(tt=s.R32I)),b===s.RG&&(V===s.FLOAT&&(tt=s.RG32F),V===s.HALF_FLOAT&&(tt=s.RG16F),V===s.UNSIGNED_BYTE&&(tt=s.RG8)),b===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RG8UI),V===s.UNSIGNED_SHORT&&(tt=s.RG16UI),V===s.UNSIGNED_INT&&(tt=s.RG32UI),V===s.BYTE&&(tt=s.RG8I),V===s.SHORT&&(tt=s.RG16I),V===s.INT&&(tt=s.RG32I)),b===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),V===s.UNSIGNED_INT&&(tt=s.RGB32UI),V===s.BYTE&&(tt=s.RGB8I),V===s.SHORT&&(tt=s.RGB16I),V===s.INT&&(tt=s.RGB32I)),b===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),V===s.UNSIGNED_INT&&(tt=s.RGBA32UI),V===s.BYTE&&(tt=s.RGBA8I),V===s.SHORT&&(tt=s.RGBA16I),V===s.INT&&(tt=s.RGBA32I)),b===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),b===s.RGBA){const Pt=rt?qr:ie.getTransfer(et);V===s.FLOAT&&(tt=s.RGBA32F),V===s.HALF_FLOAT&&(tt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(tt=Pt===ue?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(w,b){let V;return w?b===null||b===Pn||b===hs?V=s.DEPTH24_STENCIL8:b===Wi?V=s.DEPTH32F_STENCIL8:b===Hs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pn||b===hs?V=s.DEPTH_COMPONENT24:b===Wi?V=s.DEPTH_COMPONENT32F:b===Hs&&(V=s.DEPTH_COMPONENT16),V}function I(w,b){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==bi&&w.minFilter!==ai?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function C(w){const b=w.target;b.removeEventListener("dispose",C),P(b),b.isVideoTexture&&h.delete(b)}function R(w){const b=w.target;b.removeEventListener("dispose",R),y(b)}function P(w){const b=i.get(w);if(b.__webglInit===void 0)return;const V=w.source,et=u.get(V);if(et){const rt=et[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&_(w),Object.keys(et).length===0&&u.delete(V)}i.remove(w)}function _(w){const b=i.get(w);s.deleteTexture(b.__webglTexture);const V=w.source,et=u.get(V);delete et[b.__cacheKey],a.memory.textures--}function y(w){const b=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let rt=0;rt<b.__webglFramebuffer[et].length;rt++)s.deleteFramebuffer(b.__webglFramebuffer[et][rt]);else s.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)s.deleteFramebuffer(b.__webglFramebuffer[et]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=w.textures;for(let et=0,rt=V.length;et<rt;et++){const tt=i.get(V[et]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),i.remove(V[et])}i.remove(w)}let A=0;function O(){A=0}function D(){const w=A;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),A+=1,w}function G(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function X(w,b){const V=i.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,w,b);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+b)}function z(w,b){const V=i.get(w);if(w.version>0&&V.__version!==w.version){j(V,w,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+b)}function K(w,b){const V=i.get(w);if(w.version>0&&V.__version!==w.version){j(V,w,b);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+b)}function H(w,b){const V=i.get(w);if(w.version>0&&V.__version!==w.version){at(V,w,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+b)}const st={[Vi]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},q={[bi]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[ia]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},J={[mu]:s.NEVER,[Su]:s.ALWAYS,[gu]:s.LESS,[xh]:s.LEQUAL,[_u]:s.EQUAL,[yu]:s.GEQUAL,[vu]:s.GREATER,[xu]:s.NOTEQUAL};function ct(w,b){if(b.type===Wi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ai||b.magFilter===ia||b.magFilter===Js||b.magFilter===Cn||b.minFilter===ai||b.minFilter===ia||b.minFilter===Js||b.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,st[b.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,q[b.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,q[b.minFilter]),b.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Js&&b.minFilter!==Cn||b.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Et(w,b){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));const et=b.source;let rt=u.get(et);rt===void 0&&(rt={},u.set(et,rt));const tt=G(b);if(tt!==w.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),rt[tt].usedTimes++;const Pt=rt[w.__cacheKey];Pt!==void 0&&(rt[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&_(b)),w.__cacheKey=tt,w.__webglTexture=rt[tt].texture}return V}function j(w,b,V){let et=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=s.TEXTURE_3D);const rt=Et(w,b),tt=b.source;e.bindTexture(et,w.__webglTexture,s.TEXTURE0+V);const Pt=i.get(tt);if(tt.version!==Pt.__version||rt===!0){e.activeTexture(s.TEXTURE0+V);const pt=ie.getPrimaries(ie.workingColorSpace),yt=b.colorSpace===on?null:ie.getPrimaries(b.colorSpace),ne=b.colorSpace===on||pt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let lt=v(b.image,!1,n.maxTextureSize);lt=re(b,lt);const St=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type);let Bt=S(b.internalFormat,St,Ut,b.colorSpace,b.isVideoTexture);ct(et,b);let Mt;const te=b.mipmaps,Kt=b.isVideoTexture!==!0,xe=Pt.__version===void 0||rt===!0,N=tt.dataReady,ft=I(b,lt);if(b.isDepthTexture)Bt=M(b.format===ds,b.type),xe&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,lt.width,lt.height,0,St,Ut,null));else if(b.isDataTexture)if(te.length>0){Kt&&xe&&e.texStorage2D(s.TEXTURE_2D,ft,Bt,te[0].width,te[0].height);for(let Z=0,nt=te.length;Z<nt;Z++)Mt=te[Z],Kt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,St,Ut,Mt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,Mt.width,Mt.height,0,St,Ut,Mt.data);b.generateMipmaps=!1}else Kt?(xe&&e.texStorage2D(s.TEXTURE_2D,ft,Bt,lt.width,lt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,St,Ut,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,lt.width,lt.height,0,St,Ut,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Kt&&xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Bt,te[0].width,te[0].height,lt.depth);for(let Z=0,nt=te.length;Z<nt;Z++)if(Mt=te[Z],b.format!==pi)if(St!==null)if(Kt){if(N)if(b.layerUpdates.size>0){const _t=Tl(Mt.width,Mt.height,b.format,b.type);for(const mt of b.layerUpdates){const Wt=Mt.data.subarray(mt*_t/Mt.data.BYTES_PER_ELEMENT,(mt+1)*_t/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,mt,Mt.width,Mt.height,1,St,Wt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,lt.depth,St,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,lt.depth,St,Ut,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Bt,Mt.width,Mt.height,lt.depth,0,St,Ut,Mt.data)}else{Kt&&xe&&e.texStorage2D(s.TEXTURE_2D,ft,Bt,te[0].width,te[0].height);for(let Z=0,nt=te.length;Z<nt;Z++)Mt=te[Z],b.format!==pi?St!==null?Kt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,St,Ut,Mt.data):e.texImage2D(s.TEXTURE_2D,Z,Bt,Mt.width,Mt.height,0,St,Ut,Mt.data)}else if(b.isDataArrayTexture)if(Kt){if(xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Bt,lt.width,lt.height,lt.depth),N)if(b.layerUpdates.size>0){const Z=Tl(lt.width,lt.height,b.format,b.type);for(const nt of b.layerUpdates){const _t=lt.data.subarray(nt*Z/lt.data.BYTES_PER_ELEMENT,(nt+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,St,Ut,_t)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,St,Ut,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,St,Ut,lt.data);else if(b.isData3DTexture)Kt?(xe&&e.texStorage3D(s.TEXTURE_3D,ft,Bt,lt.width,lt.height,lt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,St,Ut,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,St,Ut,lt.data);else if(b.isFramebufferTexture){if(xe)if(Kt)e.texStorage2D(s.TEXTURE_2D,ft,Bt,lt.width,lt.height);else{let Z=lt.width,nt=lt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,Bt,Z,nt,0,St,Ut,null),Z>>=1,nt>>=1}}else if(te.length>0){if(Kt&&xe){const Z=Lt(te[0]);e.texStorage2D(s.TEXTURE_2D,ft,Bt,Z.width,Z.height)}for(let Z=0,nt=te.length;Z<nt;Z++)Mt=te[Z],Kt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,St,Ut,Mt):e.texImage2D(s.TEXTURE_2D,Z,Bt,St,Ut,Mt);b.generateMipmaps=!1}else if(Kt){if(xe){const Z=Lt(lt);e.texStorage2D(s.TEXTURE_2D,ft,Bt,Z.width,Z.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ut,lt)}else e.texImage2D(s.TEXTURE_2D,0,Bt,St,Ut,lt);m(b)&&p(et),Pt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function at(w,b,V){if(b.image.length!==6)return;const et=Et(w,b),rt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);const tt=i.get(rt);if(rt.version!==tt.__version||et===!0){e.activeTexture(s.TEXTURE0+V);const Pt=ie.getPrimaries(ie.workingColorSpace),pt=b.colorSpace===on?null:ie.getPrimaries(b.colorSpace),yt=b.colorSpace===on||Pt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,St=[];for(let nt=0;nt<6;nt++)!ne&&!lt?St[nt]=v(b.image[nt],!0,n.maxCubemapSize):St[nt]=lt?b.image[nt].image:b.image[nt],St[nt]=re(b,St[nt]);const Ut=St[0],Bt=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),te=S(b.internalFormat,Bt,Mt,b.colorSpace),Kt=b.isVideoTexture!==!0,xe=tt.__version===void 0||et===!0,N=rt.dataReady;let ft=I(b,Ut);ct(s.TEXTURE_CUBE_MAP,b);let Z;if(ne){Kt&&xe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,Ut.width,Ut.height);for(let nt=0;nt<6;nt++){Z=St[nt].mipmaps;for(let _t=0;_t<Z.length;_t++){const mt=Z[_t];b.format!==pi?Bt!==null?Kt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,mt.width,mt.height,Bt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,te,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,mt.width,mt.height,Bt,Mt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,te,mt.width,mt.height,0,Bt,Mt,mt.data)}}}else{if(Z=b.mipmaps,Kt&&xe){Z.length>0&&ft++;const nt=Lt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){Kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,St[nt].width,St[nt].height,Bt,Mt,St[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,St[nt].width,St[nt].height,0,Bt,Mt,St[nt].data);for(let _t=0;_t<Z.length;_t++){const Wt=Z[_t].image[nt].image;Kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Wt.width,Wt.height,Bt,Mt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,te,Wt.width,Wt.height,0,Bt,Mt,Wt.data)}}else{Kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,Mt,St[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,Bt,Mt,St[nt]);for(let _t=0;_t<Z.length;_t++){const mt=Z[_t];Kt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Bt,Mt,mt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,te,Bt,Mt,mt.image[nt])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),tt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function vt(w,b,V,et,rt,tt){const Pt=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),yt=S(V.internalFormat,Pt,pt,V.colorSpace),ne=i.get(b),lt=i.get(V);if(lt.__renderTarget=b,!ne.__hasExternalTextures){const St=Math.max(1,b.width>>tt),Ut=Math.max(1,b.height>>tt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,yt,St,Ut,b.depth,0,Pt,pt,null):e.texImage2D(rt,tt,yt,St,Ut,0,Pt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Nt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,rt,lt.__webglTexture,0,kt(b)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,rt,lt.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(w,b,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),b.depthBuffer){const et=b.depthTexture,rt=et&&et.isDepthTexture?et.type:null,tt=M(b.stencilBuffer,rt),Pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=kt(b);Nt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,tt,b.width,b.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,w)}else{const et=b.textures;for(let rt=0;rt<et.length;rt++){const tt=et[rt],Pt=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),yt=S(tt.internalFormat,Pt,pt,tt.colorSpace),ne=kt(b);V&&Nt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,yt,b.width,b.height):Nt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,yt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,yt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(b.depthTexture);et.__renderTarget=b,(!et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const rt=et.__webglTexture,tt=kt(b);if(b.depthTexture.format===ss)Nt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(b.depthTexture.format===ds)Nt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ft(w){const b=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const et=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){const rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=et}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ot(b.__webglFramebuffer,w)}else if(V){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=s.createRenderbuffer(),dt(b.__webglDepthbuffer[et],w,!1);else{const rt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),dt(b.__webglDepthbuffer,w,!1);else{const et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(w,b,V){const et=i.get(w);b!==void 0&&vt(et.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ft(w)}function ve(w){const b=w.texture,V=i.get(w),et=i.get(b);w.addEventListener("dispose",R);const rt=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Pt=rt.length>1;if(Pt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=b.version,a.memory.textures++),tt){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)V.__webglFramebuffer[pt][yt]=s.createFramebuffer()}else V.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)V.__webglFramebuffer[pt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let pt=0,yt=rt.length;pt<yt;pt++){const ne=i.get(rt[pt]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Nt(w)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];V.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const ne=r.convert(yt.format,yt.colorSpace),lt=r.convert(yt.type),St=S(yt.internalFormat,ne,lt,yt.colorSpace,w.isXRRenderTarget===!0),Ut=kt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,St,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)vt(V.__webglFramebuffer[pt][yt],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else vt(V.__webglFramebuffer[pt],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let pt=0,yt=rt.length;pt<yt;pt++){const ne=rt[pt],lt=i.get(ne);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),ct(s.TEXTURE_2D,ne),vt(V.__webglFramebuffer,w,ne,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(ne)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,et.__webglTexture),ct(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)vt(V.__webglFramebuffer[yt],w,b,s.COLOR_ATTACHMENT0,pt,yt);else vt(V.__webglFramebuffer,w,b,s.COLOR_ATTACHMENT0,pt,0);m(b)&&p(pt),e.unbindTexture()}w.depthBuffer&&Ft(w)}function Zt(w){const b=w.textures;for(let V=0,et=b.length;V<et;V++){const rt=b[V];if(m(rt)){const tt=T(w),Pt=i.get(rt).__webglTexture;e.bindTexture(tt,Pt),p(tt),e.unbindTexture()}}}const Te=[],F=[];function je(w){if(w.samples>0){if(Nt(w)===!1){const b=w.textures,V=w.width,et=w.height;let rt=s.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=i.get(w),pt=b.length>1;if(pt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const ne=i.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,V,et,0,0,V,et,rt,s.NEAREST),c===!0&&(Te.length=0,F.length=0,Te.push(s.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Te.push(tt),F.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const ne=i.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,ne,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const b=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function kt(w){return Math.min(n.maxSamples,w.samples)}function Nt(w){const b=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(w){const b=a.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function re(w,b){const V=w.colorSpace,et=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==ms&&V!==on&&(ie.getTransfer(V)===ue?(et!==pi||rt!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Yt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Nt}function Gg(s,t){function e(i,n=on){let r;const a=ie.getTransfer(n);if(i===ji)return s.UNSIGNED_BYTE;if(i===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return s.BYTE;if(i===lh)return s.SHORT;if(i===Hs)return s.UNSIGNED_SHORT;if(i===Yo)return s.INT;if(i===Pn)return s.UNSIGNED_INT;if(i===Wi)return s.FLOAT;if(i===Li)return s.HALF_FLOAT;if(i===dh)return s.ALPHA;if(i===uh)return s.RGB;if(i===pi)return s.RGBA;if(i===fh)return s.LUMINANCE;if(i===ph)return s.LUMINANCE_ALPHA;if(i===ss)return s.DEPTH_COMPONENT;if(i===ds)return s.DEPTH_STENCIL;if(i===mh)return s.RED;if(i===jo)return s.RED_INTEGER;if(i===gh)return s.RG;if(i===Zo)return s.RG_INTEGER;if(i===Jo)return s.RGBA_INTEGER;if(i===wr||i===Cr||i===Rr||i===Pr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Za||i===Ja||i===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===to||i===eo||i===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===to||i===eo)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===no||i===so||i===ro||i===ao||i===oo||i===co||i===lo||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===po)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===vo||i===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ir)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===yo||i===So||i===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Hg extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ke,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ye({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new U(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends gs{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=new Xg,m=e.getContextAttributes();let p=null,T=null;const S=[],M=[],I=new bt;let C=null;const R=new ei;R.viewport=new me;const P=new ei;P.viewport=new me;const _=[R,P],y=new Hg;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=S[j];return at===void 0&&(at=new Ra,S[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=S[j];return at===void 0&&(at=new Ra,S[j]=at),at.getGripSpace()},this.getHand=function(j){let at=S[j];return at===void 0&&(at=new Ra,S[j]=at),at.getHandSpace()};function D(j){const at=M.indexOf(j.inputSource);if(at===-1)return;const vt=S[at];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||a),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",X);for(let j=0;j<S.length;j++){const at=M[j];at!==null&&(M[j]=null,S[j].disconnect(at))}A=null,O=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,n=null,T=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",G),n.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,at),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new mi(f.framebufferWidth,f.framebufferHeight,{format:pi,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,vt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ds:ss,vt=m.stencil?hs:Pn);const Ot={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Ot),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new mi(u.textureWidth,u.textureHeight,{format:pi,type:ji,depthTexture:new Ph(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Et.setContext(n),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let at=0;at<j.removed.length;at++){const vt=j.removed[at],dt=M.indexOf(vt);dt>=0&&(M[dt]=null,S[dt].disconnect(vt))}for(let at=0;at<j.added.length;at++){const vt=j.added[at];let dt=M.indexOf(vt);if(dt===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=M.length){M.push(vt),dt=Ft;break}else if(M[Ft]===null){M[Ft]=vt,dt=Ft;break}if(dt===-1)break}const Ot=S[dt];Ot&&Ot.connect(vt)}}const z=new L,K=new L;function H(j,at,vt){z.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(vt.matrixWorld);const dt=z.distanceTo(K),Ot=at.projectionMatrix.elements,Ft=vt.projectionMatrix.elements,Yt=Ot[14]/(Ot[10]-1),ve=Ot[14]/(Ot[10]+1),Zt=(Ot[9]+1)/Ot[5],Te=(Ot[9]-1)/Ot[5],F=(Ot[8]-1)/Ot[0],je=(Ft[8]+1)/Ft[0],kt=Yt*F,Nt=Yt*je,Rt=dt/(-F+je),re=Rt*-F;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Lt=Yt+Rt,w=ve+Rt,b=kt-re,V=Nt+(dt-re),et=Zt*ve/w*Lt,rt=Te*ve/w*Lt;j.projectionMatrix.makePerspective(b,V,et,rt,Lt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let at=j.near,vt=j.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),y.near=P.near=R.near=at,y.far=P.far=R.far=vt,(A!==y.near||O!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,O=y.far),R.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,y.layers.mask=R.layers.mask|P.layers.mask;const dt=j.parent,Ot=y.cameras;st(y,dt);for(let Ft=0;Ft<Ot.length;Ft++)st(Ot[Ft],dt);Ot.length===2?H(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),q(j,y,dt)};function q(j,at,vt){vt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let J=null;function ct(j,at){if(h=at.getViewerPose(l||a),g=at,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let dt=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let Ft=0;Ft<vt.length;Ft++){const Yt=vt[Ft];let ve=null;if(f!==null)ve=f.getViewport(Yt);else{const Te=d.getViewSubImage(u,Yt);ve=Te.viewport,Ft===0&&(t.setRenderTargetTextures(T,Te.colorTexture,u.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(T))}let Zt=_[Ft];Zt===void 0&&(Zt=new ei,Zt.layers.enable(Ft),Zt.viewport=new me,_[Ft]=Zt),Zt.matrix.fromArray(Yt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Yt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ve.x,ve.y,ve.width,ve.height),Ft===0&&(y.matrix.copy(Zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(Zt)}const Ot=n.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ft=d.getDepthInformation(vt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,n.renderState)}}for(let vt=0;vt<S.length;vt++){const dt=M[vt],Ot=S[vt];dt!==null&&Ot!==void 0&&Ot.update(dt,at,l||a)}J&&J(j,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const Et=new Rh;Et.setAnimationLoop(ct),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}const yn=new Di,Yg=new _e;function Kg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ah(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,T,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ii&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ii&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,M=T.envMapRotation;S&&(m.envMap.value=S,yn.copy(M),yn.x*=-1,yn.y*=-1,yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ii&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function qg(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const M=S.program;i.uniformBlockBinding(T,M)}function l(T,S){let M=n[T.id];M===void 0&&(g(T),M=h(T),n[T.id]=M,T.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(T,I);const C=t.render.frame;r[T.id]!==C&&(u(T),r[T.id]=C)}function h(T){const S=d();T.__bindingPointIndex=S;const M=s.createBuffer(),I=T.__size,C=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const S=n[T.id],M=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let C=0,R=M.length;C<R;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let _=0,y=P.length;_<y;_++){const A=P[_];if(f(A,C,_,I)===!0){const O=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let X=0;X<D.length;X++){const z=D[X],K=v(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,O+G,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,S,M,I){const C=T.value,R=S+"_"+M;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const P=I[R];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[R]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(T){const S=T.uniforms;let M=0;const I=16;for(let R=0,P=S.length;R<P;R++){const _=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,A=_.length;y<A;y++){const O=_[y],D=Array.isArray(O.value)?O.value:[O.value];for(let G=0,X=D.length;G<X;G++){const z=D[G],K=v(z),H=M%I,st=H%K.boundary,q=H+st;M+=st,q!==0&&I-q<K.storage&&(M+=I-q),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const C=M%I;return C>0&&(M+=I-C),T.__size=M,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(const T in n)s.deleteBuffer(n[T]);a=[],n={},r={}}return{bind:c,update:l,dispose:p}}class jg{constructor(t={}){const{canvas:e=Fu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=ln,this.toneMappingExposure=1;const M=this;let I=!1,C=0,R=0,P=null,_=-1,y=null;const A=new me,O=new me;let D=null;const G=new Ht(0);let X=0,z=e.width,K=e.height,H=1,st=null,q=null;const J=new me(0,0,z,K),ct=new me(0,0,z,K);let Et=!1;const j=new ec;let at=!1,vt=!1;const dt=new _e,Ot=new _e,Ft=new L,Yt=new me,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Te(){return P===null?H:1}let F=i;function je(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),F===null){const k="webgl2";if(F=je(k,E),F===null)throw je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,Nt,Rt,re,Lt,w,b,V,et,rt,tt,Pt,pt,yt,ne,lt,St,Ut,Bt,Mt,te,Kt,xe,N;function ft(){kt=new e0(F),kt.init(),Kt=new Gg(F,kt),Nt=new qm(F,kt,t,Kt),Rt=new kg(F,kt),Nt.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),re=new s0(F),Lt=new Mg,w=new Bg(F,kt,Rt,Lt,Nt,Kt,re),b=new Zm(M),V=new t0(M),et=new df(F),xe=new Ym(F,et),rt=new i0(F,et,re,xe),tt=new a0(F,rt,et,re),Bt=new r0(F,Nt,w),lt=new jm(Lt),Pt=new Sg(M,b,V,kt,Nt,xe,lt),pt=new Kg(M,Lt),yt=new bg,ne=new Pg(kt),Ut=new $m(M,b,V,Rt,tt,f,c),St=new Ug(M,tt,Nt),N=new qg(F,re,Nt,Rt),Mt=new Km(F,kt,re),te=new n0(F,kt,re),re.programs=Pt.programs,M.capabilities=Nt,M.extensions=kt,M.properties=Lt,M.renderLists=yt,M.shadowMap=St,M.state=Rt,M.info=re}ft();const Z=new $g(M,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(z,K,!1))},this.getSize=function(E){return E.set(z,K)},this.setSize=function(E,k,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,K=k,e.width=Math.floor(E*H),e.height=Math.floor(k*H),$===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(z*H,K*H).floor()},this.setDrawingBufferSize=function(E,k,$){z=E,K=k,H=$,e.width=Math.floor(E*$),e.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,k,$,Y){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,k,$,Y),Rt.viewport(A.copy(J).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,k,$,Y){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,k,$,Y),Rt.scissor(O.copy(ct).multiplyScalar(H).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(E){Rt.setScissorTest(Et=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(E=!0,k=!0,$=!0){let Y=0;if(E){let B=!1;if(P!==null){const ht=P.texture.format;B=ht===Jo||ht===Zo||ht===jo}if(B){const ht=P.texture.type,gt=ht===ji||ht===Pn||ht===Hs||ht===hs||ht===Ko||ht===qo,At=Ut.getClearColor(),wt=Ut.getClearAlpha(),Gt=At.r,Xt=At.g,Ct=At.b;gt?(g[0]=Gt,g[1]=Xt,g[2]=Ct,g[3]=wt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Gt,v[1]=Xt,v[2]=Ct,v[3]=wt,F.clearBufferiv(F.COLOR,0,v))}else Y|=F.COLOR_BUFFER_BIT}k&&(Y|=F.DEPTH_BUFFER_BIT),$&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),ne.dispose(),Lt.dispose(),b.dispose(),V.dispose(),tt.dispose(),xe.dispose(),N.dispose(),Pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",xc),Z.removeEventListener("sessionend",yc),pn.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=re.autoReset,k=St.enabled,$=St.autoUpdate,Y=St.needsUpdate,B=St.type;ft(),re.autoReset=E,St.enabled=k,St.autoUpdate=$,St.needsUpdate=Y,St.type=B}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const k=E.target;k.removeEventListener("dispose",Wt),Ae(k)}function Ae(E){Fe(E),Lt.remove(E)}function Fe(E){const k=Lt.get(E).programs;k!==void 0&&(k.forEach(function($){Pt.releaseProgram($)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,Y,B,ht){k===null&&(k=ve);const gt=B.isMesh&&B.matrixWorld.determinant()<0,At=Dd(E,k,$,Y,B);Rt.setMaterial(Y,gt);let wt=$.index,Gt=1;if(Y.wireframe===!0){if(wt=rt.getWireframeAttribute($),wt===void 0)return;Gt=2}const Xt=$.drawRange,Ct=$.attributes.position;let se=Xt.start*Gt,ye=(Xt.start+Xt.count)*Gt;ht!==null&&(se=Math.max(se,ht.start*Gt),ye=Math.min(ye,(ht.start+ht.count)*Gt)),wt!==null?(se=Math.max(se,0),ye=Math.min(ye,wt.count)):Ct!=null&&(se=Math.max(se,0),ye=Math.min(ye,Ct.count));const Se=ye-se;if(Se<0||Se===1/0)return;xe.setup(B,Y,At,$,wt);let Ze,oe=Mt;if(wt!==null&&(Ze=et.get(wt),oe=te,oe.setIndex(Ze)),B.isMesh)Y.wireframe===!0?(Rt.setLineWidth(Y.wireframeLinewidth*Te()),oe.setMode(F.LINES)):oe.setMode(F.TRIANGLES);else if(B.isLine){let It=Y.linewidth;It===void 0&&(It=1),Rt.setLineWidth(It*Te()),B.isLineSegments?oe.setMode(F.LINES):B.isLineLoop?oe.setMode(F.LINE_LOOP):oe.setMode(F.LINE_STRIP)}else B.isPoints?oe.setMode(F.POINTS):B.isSprite&&oe.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)oe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,Ui=B._multiDrawCounts,ce=B._multiDrawCount,_i=wt?et.get(wt).bytesPerElement:1,On=Lt.get(Y).currentProgram.getUniforms();for(let ni=0;ni<ce;ni++)On.setValue(F,"_gl_DrawID",ni),oe.render(It[ni]/_i,Ui[ni])}else if(B.isInstancedMesh)oe.renderInstances(se,Se,B.count);else if($.isInstancedBufferGeometry){const It=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ui=Math.min($.instanceCount,It);oe.renderInstances(se,Se,Ui)}else oe.render(se,Se)};function he(E,k,$){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=ii,E.needsUpdate=!0,Zs(E,k,$),E.side=dn,E.needsUpdate=!0,Zs(E,k,$),E.side=ke):Zs(E,k,$)}this.compile=function(E,k,$=null){$===null&&($=E),p=ne.get($),p.init(k),S.push(p),$.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==$&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const At=ht[gt];he(At,$,B),Y.add(At)}else he(ht,$,B),Y.add(ht)}),S.pop(),p=null,Y},this.compileAsync=function(E,k,$=null){const Y=this.compile(E,k,$);return new Promise(B=>{function ht(){if(Y.forEach(function(gt){Lt.get(gt).currentProgram.isReady()&&Y.delete(gt)}),Y.size===0){B(E);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let gi=null;function Oi(E){gi&&gi(E)}function xc(){pn.stop()}function yc(){pn.start()}const pn=new Rh;pn.setAnimationLoop(Oi),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(E){gi=E,Z.setAnimationLoop(E),E===null?pn.stop():pn.start()},Z.addEventListener("sessionstart",xc),Z.addEventListener("sessionend",yc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,P),p=ne.get(E,S.length),p.init(k),S.push(p),Ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ot),vt=this.localClippingEnabled,at=lt.init(this.clippingPlanes,vt),m=yt.get(E,T.length),m.init(),T.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ht=M.xr.getDepthSensingMesh();ht!==null&&ea(ht,k,-1/0,M.sortObjects)}ea(E,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,q),Zt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Zt&&Ut.addToRenderList(m,E),this.info.render.frame++,at===!0&&lt.beginShadows();const $=p.state.shadowsArray;St.render($,E,k),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ht=k.cameras;if(B.length>0)for(let gt=0,At=ht.length;gt<At;gt++){const wt=ht[gt];Mc(Y,B,E,wt)}Zt&&Ut.render(E);for(let gt=0,At=ht.length;gt<At;gt++){const wt=ht[gt];Sc(m,E,wt,wt.viewport)}}else B.length>0&&Mc(Y,B,E,k),Zt&&Ut.render(E),Sc(m,E,k);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,k),xe.resetDefaultState(),_=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],at===!0&&lt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ea(E,k,$,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){Y&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);const gt=tt.update(E),At=E.material;At.visible&&m.push(E,gt,At,$,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const gt=tt.update(E),At=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Yt.copy(gt.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(At)){const wt=gt.groups;for(let Gt=0,Xt=wt.length;Gt<Xt;Gt++){const Ct=wt[Gt],se=At[Ct.materialIndex];se&&se.visible&&m.push(E,gt,se,$,Yt.z,Ct)}}else At.visible&&m.push(E,gt,At,$,Yt.z,null)}}const ht=E.children;for(let gt=0,At=ht.length;gt<At;gt++)ea(ht[gt],k,$,Y)}function Sc(E,k,$,Y){const B=E.opaque,ht=E.transmissive,gt=E.transparent;p.setupLightsView($),at===!0&&lt.setGlobalState(M.clippingPlanes,$),Y&&Rt.viewport(A.copy(Y)),B.length>0&&js(B,k,$),ht.length>0&&js(ht,k,$),gt.length>0&&js(gt,k,$),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Mc(E,k,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new mi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Li:ji,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ht=p.state.transmissionRenderTarget[Y.id],gt=Y.viewport||A;ht.setSize(gt.z,gt.w);const At=M.getRenderTarget();M.setRenderTarget(ht),M.getClearColor(G),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Zt&&Ut.render($);const wt=M.toneMapping;M.toneMapping=ln;const Gt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),at===!0&&lt.setGlobalState(M.clippingPlanes,Y),js(E,$,Y),w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ct=0,se=k.length;Ct<se;Ct++){const ye=k[Ct],Se=ye.object,Ze=ye.geometry,oe=ye.material,It=ye.group;if(oe.side===ke&&Se.layers.test(Y.layers)){const Ui=oe.side;oe.side=ii,oe.needsUpdate=!0,Tc(Se,$,Y,Ze,oe,It),oe.side=Ui,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht))}M.setRenderTarget(At),M.setClearColor(G,X),Gt!==void 0&&(Y.viewport=Gt),M.toneMapping=wt}function js(E,k,$){const Y=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ht=E.length;B<ht;B++){const gt=E[B],At=gt.object,wt=gt.geometry,Gt=Y===null?gt.material:Y,Xt=gt.group;At.layers.test($.layers)&&Tc(At,k,$,wt,Gt,Xt)}}function Tc(E,k,$,Y,B,ht){E.onBeforeRender(M,k,$,Y,B,ht),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,k,$,Y,E,ht),B.transparent===!0&&B.side===ke&&B.forceSinglePass===!1?(B.side=ii,B.needsUpdate=!0,M.renderBufferDirect($,k,Y,B,E,ht),B.side=dn,B.needsUpdate=!0,M.renderBufferDirect($,k,Y,B,E,ht),B.side=ke):M.renderBufferDirect($,k,Y,B,E,ht),E.onAfterRender(M,k,$,Y,B,ht)}function Zs(E,k,$){k.isScene!==!0&&(k=ve);const Y=Lt.get(E),B=p.state.lights,ht=p.state.shadowsArray,gt=B.state.version,At=Pt.getParameters(E,B.state,ht,k,$),wt=Pt.getProgramCacheKey(At);let Gt=Y.programs;Y.environment=E.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(E.isMeshStandardMaterial?V:b).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Wt),Gt=new Map,Y.programs=Gt);let Xt=Gt.get(wt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===gt)return Ec(E,At),Xt}else At.uniforms=Pt.getUniforms(E),E.onBeforeCompile(At,M),Xt=Pt.acquireProgram(At,wt),Gt.set(wt,Xt),Y.uniforms=At.uniforms;const Ct=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=lt.uniform),Ec(E,At),Y.needsLights=Ud(E),Y.lightsStateVersion=gt,Y.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function bc(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Lr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ec(E,k){const $=Lt.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Dd(E,k,$,Y,B){k.isScene!==!0&&(k=ve),w.resetTextureUnits();const ht=k.fog,gt=Y.isMeshStandardMaterial?k.environment:null,At=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ms,wt=(Y.isMeshStandardMaterial?V:b).get(Y.envMap||gt),Gt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color;let Se=ln;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Se=M.toneMapping);const Ze=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Ze!==void 0?Ze.length:0,It=Lt.get(Y),Ui=p.state.lights;if(at===!0&&(vt===!0||E!==y)){const ci=E===y&&Y.id===_;lt.setState(Y,E,ci)}let ce=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ui.state.version||It.outputColorSpace!==At||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==wt||Y.fog===!0&&It.fog!==ht||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==Xt||It.morphTargets!==Ct||It.morphNormals!==se||It.morphColors!==ye||It.toneMapping!==Se||It.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,It.__version=Y.version);let _i=It.currentProgram;ce===!0&&(_i=Zs(Y,k,B));let On=!1,ni=!1,xs=!1;const Me=_i.getUniforms(),Ei=It.uniforms;if(Rt.useProgram(_i.program)&&(On=!0,ni=!0,xs=!0),Y.id!==_&&(_=Y.id,ni=!0),On||y!==E){Rt.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),Gu(dt),Hu(dt),Me.setValue(F,"projectionMatrix",dt)):Me.setValue(F,"projectionMatrix",E.projectionMatrix),Me.setValue(F,"viewMatrix",E.matrixWorldInverse);const Zi=Me.map.cameraPosition;Zi!==void 0&&Zi.setValue(F,Ft.setFromMatrixPosition(E.matrixWorld)),Nt.logarithmicDepthBuffer&&Me.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Me.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ni=!0,xs=!0)}if(B.isSkinnedMesh){Me.setOptional(F,B,"bindMatrix"),Me.setOptional(F,B,"bindMatrixInverse");const ci=B.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),Me.setValue(F,"boneTexture",ci.boneTexture,w))}B.isBatchedMesh&&(Me.setOptional(F,B,"batchingTexture"),Me.setValue(F,"batchingTexture",B._matricesTexture,w),Me.setOptional(F,B,"batchingIdTexture"),Me.setValue(F,"batchingIdTexture",B._indirectTexture,w),Me.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&Me.setValue(F,"batchingColorTexture",B._colorsTexture,w));const ys=$.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Bt.update(B,$,_i),(ni||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,Me.setValue(F,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ei.envMap.value=wt,Ei.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ei.envMapIntensity.value=k.environmentIntensity),ni&&(Me.setValue(F,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&Od(Ei,xs),ht&&Y.fog===!0&&pt.refreshFogUniforms(Ei,ht),pt.refreshMaterialUniforms(Ei,Y,H,K,p.state.transmissionRenderTarget[E.id]),Lr.upload(F,bc(It),Ei,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Lr.upload(F,bc(It),Ei,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Me.setValue(F,"center",B.center),Me.setValue(F,"modelViewMatrix",B.modelViewMatrix),Me.setValue(F,"normalMatrix",B.normalMatrix),Me.setValue(F,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ci=Y.uniformsGroups;for(let Zi=0,Ji=ci.length;Zi<Ji;Zi++){const Ac=ci[Zi];N.update(Ac,_i),N.bind(Ac,_i)}}return _i}function Od(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Ud(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,$){Lt.get(E.texture).__webglTexture=k,Lt.get(E.depthTexture).__webglTexture=$;const Y=Lt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const $=Lt.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){P=E,C=k,R=$;let Y=!0,B=null,ht=!1,gt=!1;if(E){const wt=Lt.get(E);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(wt.__hasExternalTextures)w.rebindTextures(E,Lt.get(E.texture).__webglTexture,Lt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(wt.__boundDepthTexture!==Ct){if(Ct!==null&&Lt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(gt=!0);const Xt=Lt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?B=Xt[k][$]:B=Xt[k],ht=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?B=Lt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?B=Xt[$]:B=Xt,A.copy(E.viewport),O.copy(E.scissor),D=E.scissorTest}else A.copy(J).multiplyScalar(H).floor(),O.copy(ct).multiplyScalar(H).floor(),D=Et;if(Rt.bindFramebuffer(F.FRAMEBUFFER,B)&&Y&&Rt.drawBuffers(E,B),Rt.viewport(A),Rt.scissor(O),Rt.setScissorTest(D),ht){const wt=Lt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,$)}else if(gt){const wt=Lt.get(E.texture),Gt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,$||0,Gt)}_=-1},this.readRenderTargetPixels=function(E,k,$,Y,B,ht,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){Rt.bindFramebuffer(F.FRAMEBUFFER,At);try{const wt=E.texture,Gt=wt.format,Xt=wt.type;if(!Nt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&$>=0&&$<=E.height-B&&F.readPixels(k,$,Y,B,Kt.convert(Gt),Kt.convert(Xt),ht)}finally{const wt=P!==null?Lt.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,Y,B,ht,gt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){const wt=E.texture,Gt=wt.format,Xt=wt.type;if(!Nt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-Y&&$>=0&&$<=E.height-B){Rt.bindFramebuffer(F.FRAMEBUFFER,At);const Ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(k,$,Y,B,Kt.convert(Gt),Kt.convert(Xt),0);const se=P!==null?Lt.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,se);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bu(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Ct),F.deleteSync(ye),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,$=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-$),B=Math.floor(E.image.width*Y),ht=Math.floor(E.image.height*Y),gt=k!==null?k.x:0,At=k!==null?k.y:0;w.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,gt,At,B,ht),Rt.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,Y=null,B=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],k=arguments[2],B=arguments[3]||0,$=null);let ht,gt,At,wt,Gt,Xt,Ct,se,ye;const Se=E.isCompressedTexture?E.mipmaps[B]:E.image;$!==null?(ht=$.max.x-$.min.x,gt=$.max.y-$.min.y,At=$.isBox3?$.max.z-$.min.z:1,wt=$.min.x,Gt=$.min.y,Xt=$.isBox3?$.min.z:0):(ht=Se.width,gt=Se.height,At=Se.depth||1,wt=0,Gt=0,Xt=0),Y!==null?(Ct=Y.x,se=Y.y,ye=Y.z):(Ct=0,se=0,ye=0);const Ze=Kt.convert(k.format),oe=Kt.convert(k.type);let It;k.isData3DTexture?(w.setTexture3D(k,0),It=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),It=F.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),It=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Ui=F.getParameter(F.UNPACK_ROW_LENGTH),ce=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_i=F.getParameter(F.UNPACK_SKIP_PIXELS),On=F.getParameter(F.UNPACK_SKIP_ROWS),ni=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const xs=E.isDataArrayTexture||E.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ei=Lt.get(E),ys=Lt.get(k),ci=Lt.get(Ei.__renderTarget),Zi=Lt.get(ys.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,ci.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ji=0;Ji<At;Ji++)xs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(E).__webglTexture,B,Xt+Ji),E.isDepthTexture?(Me&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(k).__webglTexture,B,ye+Ji),F.blitFramebuffer(wt,Gt,ht,gt,Ct,se,ht,gt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Me?F.copyTexSubImage3D(It,B,Ct,se,ye+Ji,wt,Gt,ht,gt):F.copyTexSubImage2D(It,B,Ct,se,ye+Ji,wt,Gt,ht,gt);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(It,B,Ct,se,ye,ht,gt,At,Ze,oe,Se.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(It,B,Ct,se,ye,ht,gt,At,Ze,Se.data):F.texSubImage3D(It,B,Ct,se,ye,ht,gt,At,Ze,oe,Se):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Ct,se,ht,gt,Ze,oe,Se.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Ct,se,Se.width,Se.height,Ze,Se.data):F.texSubImage2D(F.TEXTURE_2D,B,Ct,se,ht,gt,Ze,oe,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ui),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ce),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_i),F.pixelStorei(F.UNPACK_SKIP_ROWS,On),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ni),B===0&&k.generateMipmaps&&F.generateMipmap(It),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,$=null,Y=null,B=0){return E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],k=arguments[3],B=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,$,Y,B)},this.initRenderTarget=function(E){Lt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,Rt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=To,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new L;class Hr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new oi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jr extends fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qn;const As=new L,jn=new L,Zn=new L,Jn=new bt,ws=new bt,Uh=new _e,xr=new L,Cs=new L,yr=new L,bl=new bt,Pa=new bt,El=new bt;class rc extends Ee{constructor(t=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",qn===void 0){qn=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jg(e,5);qn.setIndex([0,1,2,0,2,3]),qn.setAttribute("position",new Hr(i,3,0,!1)),qn.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=qn,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Zn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Sr(xr.set(-.5,-.5,0),Zn,a,jn,n,r),Sr(Cs.set(.5,-.5,0),Zn,a,jn,n,r),Sr(yr.set(.5,.5,0),Zn,a,jn,n,r),bl.set(0,0),Pa.set(1,0),El.set(1,1);let o=t.ray.intersectTriangle(xr,Cs,yr,!1,As);if(o===null&&(Sr(Cs.set(-.5,.5,0),Zn,a,jn,n,r),Pa.set(0,1),o=t.ray.intersectTriangle(xr,yr,Cs,!1,As),o===null))return;const c=t.ray.origin.distanceTo(As);c<t.near||c>t.far||e.push({distance:c,point:As.clone(),uv:fi.getInterpolation(As,xr,Cs,yr,bl,Pa,El,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sr(s,t,e,i,n,r){Jn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ws.x=r*Jn.x-n*Jn.y,ws.y=n*Jn.x+r*Jn.y):ws.copy(Jn),s.copy(t),s.x+=ws.x,s.y+=ws.y,s.applyMatrix4(Uh)}class Qr extends fn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zr=new L,Vr=new L,Al=new _e,Rs=new jr,Mr=new Ys,Ia=new L,wl=new L;class ac extends Ee{constructor(t=new we,e=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)zr.fromBufferAttribute(e,n-1),Vr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=zr.distanceTo(Vr);t.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(n),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Al.copy(n).invert(),Rs.copy(t.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),T=h.getX(v+1),S=Tr(this,t,Rs,c,p,T);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Tr(this,t,Rs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Tr(this,t,Rs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Tr(this,t,Rs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tr(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(zr.fromBufferAttribute(a,n),Vr.fromBufferAttribute(a,r),e.distanceSqToSegment(zr,Vr,Ia,wl)>i)return;Ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ia);if(!(c<t.near||c>t.far))return{distance:c,point:wl.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class Qg extends ac{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Eo extends fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cl=new _e,Ao=new jr,br=new Ys,Er=new L;class Rl extends Ee{constructor(t=new we,e=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(n),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;Cl.copy(n).invert(),Ao.copy(t.ray).applyMatrix4(Cl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);Er.fromBufferAttribute(d,m),Pl(Er,m,c,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Er.fromBufferAttribute(d,g),Pl(Er,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pl(s,t,e,i,n,r,a){const o=Ao.distanceSqToPoint(s);if(o<e){const c=new L;Ao.closestPointToPoint(s,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class be extends Ke{constructor(t,e,i,n,r,a,o,c,l){super(t,e,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends we{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new bt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends we{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;T(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function T(){const M=new L,I=new L;let C=0;const R=(e-t)/i;for(let P=0;P<=r;P++){const _=[],y=P/r,A=y*(e-t)+t;for(let O=0;O<=n;O++){const D=O/n,G=D*c+o,X=Math.sin(G),z=Math.cos(G);I.x=A*X,I.y=-y*i+m,I.z=A*z,d.push(I.x,I.y,I.z),M.set(X,R,z).normalize(),u.push(M.x,M.y,M.z),f.push(D,1-y),_.push(g++)}v.push(_)}for(let P=0;P<n;P++)for(let _=0;_<r;_++){const y=v[_][P],A=v[_+1][P],O=v[_+1][P+1],D=v[_][P+1];(t>0||_!==0)&&(h.push(y,A,D),C+=3),(e>0||_!==r-1)&&(h.push(A,O,D),C+=3)}l.addGroup(p,C,0),p+=C}function S(M){const I=g,C=new bt,R=new L;let P=0;const _=M===!0?t:e,y=M===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const A=g;for(let O=0;O<=n;O++){const G=O/n*c+o,X=Math.cos(G),z=Math.sin(G);R.x=_*z,R.y=m*y,R.z=_*X,d.push(R.x,R.y,R.z),u.push(0,y,0),C.x=X*.5+.5,C.y=z*.5*y+.5,f.push(C.x,C.y),g++}for(let O=0;O<n;O++){const D=I+O,G=A+O;M===!0?h.push(G,G+1,D):h.push(G+1,G,D),P+=3}l.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn extends zt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ks extends we{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),l(i),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const S=new L,M=new L,I=new L;for(let C=0;C<e.length;C+=3)f(e[C+0],S),f(e[C+1],M),f(e[C+2],I),c(S,M,I,T)}function c(T,S,M,I){const C=I+1,R=[];for(let P=0;P<=C;P++){R[P]=[];const _=T.clone().lerp(M,P/C),y=S.clone().lerp(M,P/C),A=C-P;for(let O=0;O<=A;O++)O===0&&P===C?R[P][O]=_:R[P][O]=_.clone().lerp(y,O/A)}for(let P=0;P<C;P++)for(let _=0;_<2*(C-P)-1;_++){const y=Math.floor(_/2);_%2===0?(u(R[P][y+1]),u(R[P+1][y]),u(R[P][y])):(u(R[P][y+1]),u(R[P+1][y+1]),u(R[P+1][y]))}}function l(T){const S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(T),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){const T=new L;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const M=m(T)/2/Math.PI+.5,I=p(T)/Math.PI+.5;a.push(M,1-I)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const S=a[T+0],M=a[T+2],I=a[T+4],C=Math.max(S,M,I),R=Math.min(S,M,I);C>.9&&R<.1&&(S<.2&&(a[T+0]+=1),M<.2&&(a[T+2]+=1),I<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function f(T,S){const M=T*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const T=new L,S=new L,M=new L,I=new L,C=new bt,R=new bt,P=new bt;for(let _=0,y=0;_<r.length;_+=9,y+=6){T.set(r[_+0],r[_+1],r[_+2]),S.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),C.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),I.copy(T).add(S).add(M).divideScalar(3);const A=m(I);v(C,y+0,T,A),v(R,y+2,S,A),v(P,y+4,M,A)}}function v(T,S,M,I){I<0&&T.x===1&&(a[S]=T.x-1),M.x===0&&M.z===0&&(a[S]=I/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.vertices,t.indices,t.radius,t.details)}}class cc extends Ks{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cc(t.radius,t.detail)}}class lc extends Ks{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lc(t.radius,t.detail)}}class qi extends we{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/n,f=new L,g=new bt;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const T=p+m,S=T,M=T+i+1,I=T+i+2,C=T+1;o.push(S,M,C),o.push(M,I,C)}}this.setIndex(o),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ii extends we{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,u=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const T=[],S=p/i;let M=0;p===0&&a===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const C=I/e;d.x=-t*Math.cos(n+C*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(n+C*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+M,1-S),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){const S=h[p][T+1],M=h[p][T],I=h[p+1][T],C=h[p+1][T+1];(p!==0||a>0)&&f.push(S,M,C),(p!==i-1||c<Math.PI)&&f.push(M,I,C)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hc extends Ks{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hc(t.radius,t.detail)}}class dc extends we{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*r,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/n),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,T=(n+1)*f+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class t_ extends Ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Dt extends fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nh extends Dt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qs extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class e_ extends qs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const La=new _e,Il=new L,Ll=new L;class uc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i_ extends uc{constructor(){super(new ei(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=us*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kh extends qs{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new i_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Dl=new _e,Ps=new L,Da=new L;class n_ extends uc{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ps),Da.copy(i.position),Da.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Da),i.updateMatrixWorld(),n.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Dl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl)}}class s_ extends qs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class r_ extends uc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oa extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new r_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class a_ extends qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class o_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ol();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ol(){return performance.now()}const Ul=new _e;class c_{constructor(t,e,i=0,n=1/0){this.ray=new jr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ul.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(t,e=!0,i=[]){return wo(t,this,i,e),i.sort(Nl),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)wo(t[n],this,i,e);return i.sort(Nl),i}}function Nl(s,t){return s.distance-t.distance}function wo(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)wo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);const Fh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const l_=new ic(-1,1,1,-1,0,1);class h_ extends we{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const d_=new h_;class fc{constructor(t){this._mesh=new U(d_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class u_ extends vs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zs.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new fc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kl extends vs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class f_ extends vs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new bt);this._width=i.width,this._height=i.height,e=new mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new u_(Fh),this.copyPass.material.blending=$i,this.clock=new o_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}kl!==void 0&&(a instanceof kl?i=!0:a instanceof f_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m_ extends vs{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const g_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ps extends vs{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mi(r,a,{type:Li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new mi(r,a,{type:Li});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new mi(r,a,{type:Li});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=g_;this.highPassUniforms=zs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Fh;this.copyUniforms=zs.clone(h.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new fc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ps.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ps.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ps.BlurDirectionX=new bt(1,0);ps.BlurDirectionY=new bt(0,1);const __={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class v_ extends vs{constructor(){super();const t=__;this.uniforms=zs.clone(t.uniforms),this.material=new t_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new fc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ah&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class x_{constructor(t,e,i){x(this,"composer");x(this,"bloomPass");x(this,"renderPass");const n=window.innerWidth<=900||"ontouchstart"in window,r=new mi(window.innerWidth,window.innerHeight,{type:Li,format:pi,minFilter:ai,magFilter:ai,samples:0});this.composer=new p_(t,r),this.renderPass=new m_(e,i),this.composer.addPass(this.renderPass);const a=n?Math.floor(window.innerWidth*.5):window.innerWidth,o=n?Math.floor(window.innerHeight*.5):window.innerHeight,c=new bt(a,o);this.bloomPass=new ps(c,n?.35:.45,n?.2:.25,.82),this.composer.addPass(this.bloomPass);const l=new v_;this.composer.addPass(l)}setSize(t,e){const i=window.innerWidth<=900||"ontouchstart"in window;this.composer.setSize(t,e),i?this.bloomPass.resolution.set(Math.floor(t*.5),Math.floor(e*.5)):this.bloomPass.resolution.set(t,e)}render(){this.composer.render()}}var Q=(s=>(s[s.EMPTY=0]="EMPTY",s[s.WOOD_SCAFFOLD=1]="WOOD_SCAFFOLD",s[s.GLASS_WINDOW=2]="GLASS_WINDOW",s[s.BRICK_CONCRETE=3]="BRICK_CONCRETE",s[s.STEEL_GIRDER=4]="STEEL_GIRDER",s[s.POWER_TRANSFORMER=5]="POWER_TRANSFORMER",s))(Q||{}),xt=(s=>(s.BREACH_BOOSTER="BREACH_BOOSTER",s.OVERDRIVE_SLIDE="OVERDRIVE_SLIDE",s.PHASE_DASH="PHASE_DASH",s.GLITCH_ANCHOR="GLITCH_ANCHOR",s))(xt||{}),W=(s=>(s.CUTLASS="CUTLASS",s.PISTOL_XAG9="PISTOL_XAG9",s.AKIMBO_UZIS="AKIMBO_UZIS",s.SHOTGUN_AA12="SHOTGUN_AA12",s.REVOLVER_JUDGE="REVOLVER_JUDGE",s.RIFLE_XAG47="RIFLE_XAG47",s.GHOST_SMG="GHOST_SMG",s.RICOCHET_SAW="RICOCHET_SAW",s.RAIL_SNIPER="RAIL_SNIPER",s.BUNKER_RPG="BUNKER_RPG",s.SHOCK_ARC="SHOCK_ARC",s.VULCAN_MINIGUN="VULCAN_MINIGUN",s))(W||{}),Qt=(s=>(s.TEAM_DEATHMATCH="TEAM_DEATHMATCH",s.FREE_FOR_ALL="FREE_FOR_ALL",s.ODOGWU_STASH="ODOGWU_STASH",s.VAULT_HEIST="VAULT_HEIST",s.APAPA_LOCKDOWN="APAPA_LOCKDOWN",s))(Qt||{}),ae=(s=>(s.BIRNIN_KANO="BIRNIN_KANO",s.LAGOS_GOSLOW="LAGOS_GOSLOW",s))(ae||{}),Re=(s=>(s.ACT_1_BREACH="ACT_1_BREACH",s.ACT_2_CARRIER="ACT_2_CARRIER",s.ACT_3_EXTRACTION="ACT_3_EXTRACTION",s.MATCH_OVER="MATCH_OVER",s))(Re||{}),Ne=(s=>(s.MATCH_START="MATCH_START",s.FIRST_BLOOD="FIRST_BLOOD",s.DOUBLE_KILL="DOUBLE_KILL",s.KILL_STREAK="KILL_STREAK",s.VAULT_BREACHED="VAULT_BREACHED",s.CARRIER_MARKED="CARRIER_MARKED",s.CHOPPER_ARRIVED="CHOPPER_ARRIVED",s.CLEAN_EVAC="CLEAN_EVAC",s))(Ne||{}),ts=(s=>(s.SPECTER="SPECTER",s.VANGUARD="VANGUARD",s.CHRONOS="CHRONOS",s.STRIKER="STRIKER",s))(ts||{});const wi={GRID_WIDTH:80,GRID_HEIGHT:50,TILE_SIZE:1,TILE_DEPTH:3.5,CAMERA_FOV:50,GRAVITY:-32,GROUND_SLAM_VELOCITY:-40},He={[W.CUTLASS]:{id:W.CUTLASS,name:"Takobin Kano",category:"Melee",damage:90,fireInterval:.26,wallDmgMultiplier:1.5,magSize:999,reloadTime:0,range:3.8,speed:50,spread:0,recoilKick:.35,description:"Traditional Northern double-edged sword: +25% sprint/flight speed, kinetic lunge, steals +₦50,000 cash on kill"},[W.PISTOL_XAG9]:{id:W.PISTOL_XAG9,name:"XAG-9 Service Pistol",category:"Sidearm",damage:22,fireInterval:.16,wallDmgMultiplier:1,magSize:15,reloadTime:.9,range:35,speed:72,spread:.02,recoilKick:.18,description:"Reliable 9mm sidearm with fast draw and infinite reserve ammo"},[W.AKIMBO_UZIS]:{id:W.AKIMBO_UZIS,name:"Akimbo Micro-Uzis",category:"SMG",damage:13,fireInterval:.055,wallDmgMultiplier:1,magSize:64,reloadTime:1.3,range:28,speed:76,pellets:2,spread:.08,recoilKick:.14,description:"Dual-wielded spray shredding wood and glass at 0% movement penalty"},[W.SHOTGUN_AA12]:{id:W.SHOTGUN_AA12,name:'AA-12 "Bunker" Shotgun',category:"Shotgun",damage:11,fireInterval:.28,wallDmgMultiplier:4.5,magSize:20,reloadTime:1.6,range:24,speed:58,pellets:9,spread:.15,recoilKick:.5,description:"Drum-fed combat shotgun: 4.5x damage against vault doors and walls"},[W.REVOLVER_JUDGE]:{id:W.REVOLVER_JUDGE,name:'Kano "Zaki" .44 Revolver',category:"Sidearm",damage:58,fireInterval:.46,wallDmgMultiplier:2.2,magSize:6,reloadTime:1.4,range:42,speed:82,spread:.015,recoilKick:.65,description:"Heavy .44 hand cannon blasts enemies off rooftops and Danfo buses"},[W.RIFLE_XAG47]:{id:W.RIFLE_XAG47,name:"XAG-47 Kalashnikov",category:"Rifle",damage:28,fireInterval:.1,wallDmgMultiplier:1.6,magSize:30,reloadTime:1.2,range:48,speed:85,spread:.035,recoilKick:.25,description:"Iconic 7.62mm Nigerian assault rifle chipping through mud & concrete"},[W.GHOST_SMG]:{id:W.GHOST_SMG,name:'MP5-SD "Ghost" SMG',category:"SMG",damage:21,fireInterval:.075,wallDmgMultiplier:.8,magSize:32,reloadTime:1.1,range:34,speed:72,spread:.03,recoilKick:.15,description:"Silenced assassin: zero muzzle flash and zero sonar sound rings"},[W.RICOCHET_SAW]:{id:W.RICOCHET_SAW,name:"Harbi Tactical Launcher",category:"Tech",damage:52,fireInterval:.38,wallDmgMultiplier:.6,magSize:10,reloadTime:1.6,range:58,speed:48,bounces:4,spread:.01,recoilKick:.35,description:"Tactical ricochet projectile bouncing up to 4 times around corners"},[W.RAIL_SNIPER]:{id:W.RAIL_SNIPER,name:"Arewa .50 Cal Sniper",category:"Heavy",damage:120,fireInterval:1.05,wallDmgMultiplier:3.5,magSize:4,reloadTime:1.8,range:90,speed:200,piercing:2,spread:0,recoilKick:.85,description:"Anti-materiel sniper: zooms out 40%, red laser, pierces 2 walls"},[W.BUNKER_RPG]:{id:W.BUNKER_RPG,name:"RPG-7 Bunker Buster",category:"Heavy",damage:145,fireInterval:.42,wallDmgMultiplier:5.5,magSize:2,reloadTime:1.15,range:68,speed:54,spread:.01,recoilKick:.95,description:"Dual-tube shoulder rocket with rapid 1.15s reload and 3x3 wall breach"},[W.SHOCK_ARC]:{id:W.SHOCK_ARC,name:"Tactical EMP Arc",category:"Tech",damage:42,fireInterval:.6,wallDmgMultiplier:0,magSize:8,reloadTime:1.6,range:28,speed:60,spread:.04,recoilKick:.3,description:"High-voltage arc disables enemy Rigs for 4s and forces cash drops"},[W.VULCAN_MINIGUN]:{id:W.VULCAN_MINIGUN,name:"FN Heavy Support Gun",category:"Heavy",damage:18,fireInterval:.04,wallDmgMultiplier:3,magSize:150,reloadTime:2.8,range:65,speed:95,spread:.07,recoilKick:.32,description:"150-round drum heavy machine gun; recoil pushes shooter (aim down to fly!)"}};class y_{constructor(t){x(this,"camera");x(this,"targetPosition",new L(40,25,0));x(this,"currentPosition",new L(40,25,18));x(this,"aimOffset",new bt(0,0));x(this,"targetAimOffset",new bt(0,0));x(this,"speedZoom",0);x(this,"targetSpeedZoom",0);x(this,"isMobile",!1);x(this,"activeWeapon",W.RIFLE_XAG47);x(this,"weaponTargetZ",18);x(this,"weaponAimLead",4.5);x(this,"weaponSpeedZoomMult",1);x(this,"breachPullbackTimer",0);x(this,"isSlideActive",!1);x(this,"trauma",0);x(this,"shakeOffset",new L(0,0,0));x(this,"lookTarget",new L(40,25,0));this.isMobile=window.innerWidth<=900||"ontouchstart"in window,this.setWeaponProfile(W.RIFLE_XAG47);const e=this.getBaseZ();this.camera=new ei(wi.CAMERA_FOV,t,.1,250),this.camera.position.set(40,25,e),this.currentPosition.set(40,25,e),this.camera.lookAt(40,25,0)}setWeaponProfile(t){switch(this.activeWeapon=t,t){case W.CUTLASS:this.weaponTargetZ=this.isMobile?11.5:13.5,this.weaponAimLead=2.2,this.weaponSpeedZoomMult=1.25;break;case W.SHOTGUN_AA12:case W.AKIMBO_UZIS:case W.GHOST_SMG:this.weaponTargetZ=this.isMobile?14.5:16.5,this.weaponAimLead=3.6,this.weaponSpeedZoomMult=1.15;break;case W.RIFLE_XAG47:case W.REVOLVER_JUDGE:case W.PISTOL_XAG9:case W.SHOCK_ARC:this.weaponTargetZ=this.isMobile?15.5:18,this.weaponAimLead=4.5,this.weaponSpeedZoomMult=1;break;case W.BUNKER_RPG:case W.VULCAN_MINIGUN:case W.RICOCHET_SAW:this.weaponTargetZ=this.isMobile?17.5:20.5,this.weaponAimLead=5.2,this.weaponSpeedZoomMult=.85;break;case W.RAIL_SNIPER:this.weaponTargetZ=this.isMobile?22:25.5,this.weaponAimLead=7.5,this.weaponSpeedZoomMult=.7;break;default:this.weaponTargetZ=this.isMobile?15.5:18,this.weaponAimLead=4.5,this.weaponSpeedZoomMult=1;break}}triggerBreachZoom(){this.breachPullbackTimer=.45}triggerSlideZoom(t){this.isSlideActive=t}triggerPhaseSnap(t,e){this.currentPosition.x=t,this.currentPosition.y=e,this.addTrauma(.08)}triggerAnchorSlingshot(){this.addTrauma(.18)}getBaseZ(){return this.weaponTargetZ}onResize(t){this.isMobile=window.innerWidth<=900||"ontouchstart"in window,this.camera.aspect=t,this.camera.updateProjectionMatrix()}setFollowTarget(t,e){this.targetPosition.set(t,e,0)}setAimShift(t,e){const i=this.weaponAimLead,n=this.activeWeapon===W.BUNKER_RPG?.35:0;this.targetAimOffset.set(t*i,(e+n)*i*.72)}setSpeedZoom(t){this.targetSpeedZoom=hi.clamp(t*this.weaponSpeedZoomMult,0,1)}addTrauma(t){this.trauma=hi.clamp(this.trauma+t,0,1)}update(t){let e=this.getBaseZ(),i=0;this.breachPullbackTimer>0&&(this.breachPullbackTimer-=t,e=Math.max(e,this.isMobile?18.5:21.5)),this.isSlideActive&&(e=this.isMobile?12.5:14.5,i=-.65),this.aimOffset.lerp(this.targetAimOffset,Math.min(t*6,1)),this.speedZoom=hi.lerp(this.speedZoom,this.targetSpeedZoom,Math.min(t*3.5,1));const n=e+this.speedZoom*3.2,r=hi.clamp(this.targetPosition.x+this.aimOffset.x,5,75),a=hi.clamp(this.targetPosition.y+this.aimOffset.y+i,3.5,45);if(this.currentPosition.x=hi.lerp(this.currentPosition.x,r,Math.min(t*10,1)),this.currentPosition.y=hi.lerp(this.currentPosition.y,a,Math.min(t*10,1)),this.currentPosition.z=hi.lerp(this.currentPosition.z,n,Math.min(t*5.5,1)),this.trauma>0){const o=this.trauma*this.trauma,c=performance.now()*.04;this.shakeOffset.set((Math.sin(c*1.8)+Math.cos(c*3.3))*o*.22,(Math.cos(c*2.4)+Math.sin(c*2.8))*o*.22,Math.sin(c*1.5)*o*.1),this.trauma=Math.max(0,this.trauma-t*3.2)}else this.shakeOffset.set(0,0,0);this.camera.position.copy(this.currentPosition).add(this.shakeOffset),this.lookTarget.set(this.currentPosition.x,this.currentPosition.y,0),this.camera.lookAt(this.lookTarget)}}class S_{constructor(t){x(this,"renderer");x(this,"scene");x(this,"cameraSystem");x(this,"postProcessing");x(this,"isMobile",!1);x(this,"container");x(this,"isRunning",!1);x(this,"lastTime",0);x(this,"animationFrameId",null);x(this,"updateCallbacks",[]);x(this,"loop",()=>{if(!this.isRunning)return;const t=performance.now(),e=this.lastTime===0?.016:(t-this.lastTime)/1e3;this.lastTime=t;const i=Math.min(Math.max(e,.001),.033);for(let n=0;n<this.updateCallbacks.length;n++)this.updateCallbacks[n](i);this.cameraSystem.update(i),this.isMobile?this.renderer.render(this.scene,this.cameraSystem.camera):this.postProcessing.render(),this.animationFrameId=requestAnimationFrame(this.loop)});const e=document.getElementById(t);if(!e)throw new Error(`Container with ID ${t} not found`);this.container=e,this.isMobile=window.innerWidth<=900||"ontouchstart"in window||navigator.maxTouchPoints>0,this.renderer=new jg({antialias:!this.isMobile,powerPreference:"high-performance",alpha:!1,depth:!0,precision:this.isMobile?"mediump":"highp"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(this.isMobile?1:Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=$o,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!this.isMobile,this.renderer.shadowMap.type=zd,this.container.appendChild(this.renderer.domElement),this.scene=new Zg,this.scene.background=new Ht(724761),this.scene.fog=new sc(724761,35e-5),this.cameraSystem=new y_(window.innerWidth/window.innerHeight),this.postProcessing=new x_(this.renderer,this.scene,this.cameraSystem.camera),this.setupLighting(),window.addEventListener("resize",this.onWindowResize.bind(this))}setupLighting(){const t=window.innerWidth<=900||"ontouchstart"in window,e=new a_(4674921,.4);e.name="AmbientLight",this.scene.add(e);const i=new Oa(14412542,1.15);i.position.set(45,75,40),i.castShadow=!0,i.shadow.mapSize.width=t?512:1024,i.shadow.mapSize.height=t?512:1024,i.shadow.camera.near=.5,i.shadow.camera.far=160;const n=55;i.shadow.camera.left=-n,i.shadow.camera.right=n,i.shadow.camera.top=n,i.shadow.camera.bottom=-n,i.shadow.bias=-5e-4,i.name="MainDirectionalLight",this.scene.add(i);const r=new Oa(6333946,.55);r.position.set(-35,25,-30),r.name="PlatformRimLight",this.scene.add(r);const a=new e_(16777215,4478276,1.8);a.name="MainHemisphereLight",this.scene.add(a);const o=new Oa(16777215,2.2);o.position.set(15,25,35),o.name="FrontCameraLight",this.scene.add(o)}setBlackout(t){const e=this.scene.getObjectByName("AmbientLight"),i=this.scene.getObjectByName("MainDirectionalLight"),n=this.scene.getObjectByName("PlatformRimLight"),r=this.scene.getObjectByName("MainHemisphereLight"),a=this.scene.getObjectByName("FrontCameraLight");t?(e&&(e.intensity=.15),i&&(i.intensity=.2),n&&(n.intensity=.1),r&&(r.intensity=.4),a&&(a.intensity=.4)):(e&&(e.intensity=.4),i&&(i.intensity=1.15),n&&(n.intensity=.55),r&&(r.intensity=1.8),a&&(a.intensity=2.2))}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.cameraSystem.onResize(t/e),this.renderer.setSize(t,e),this.postProcessing.setSize(t,e)}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.loop())}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}onUpdate(t){this.updateCallbacks.push(t)}}const Qe={GRAVITY:940,JETPACK_THRUST:1950,MAX_ASCEND_SPEED:-480,GROUND_ACCEL:2800,AIR_ACCEL:1500,MAX_RUN_SPEED:320,GROUND_FRICTION:.82,AIR_DRAG:.965,STICK_MAX_RADIUS:68,DEADZONE:.1,FIRE_THRESHOLD:.3,THRUST_Y_THRESHOLD:-.25,WORLD_SCALE:9.8/320};class M_{constructor(t){x(this,"leftStick",this.createEmptyStick());x(this,"rightStick",this.createEmptyStick());x(this,"moveX",0);x(this,"isThrusting",!1);x(this,"isSlamming",!1);x(this,"aimAngle",0);x(this,"facingDir",1);x(this,"isFiring",!1);x(this,"triggerMelee",!1);x(this,"triggerRig",!1);x(this,"triggerBoom",!1);x(this,"triggerSwap",!1);x(this,"triggerReload",!1);x(this,"usingTouch",!1);x(this,"keys",new Set);x(this,"mousePos",{x:0,y:0});x(this,"mouseDown",!1);this.canvas=t,this.bindEvents()}createEmptyStick(){return{active:!1,touchId:null,originX:0,originY:0,currX:0,currY:0,normX:0,normY:0,magnitude:0,touchStartTime:0}}bindEvents(){this.canvas.style.touchAction="none",this.canvas.style.userSelect="none",("ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024)&&(this.usingTouch=!0),window.addEventListener("touchstart",e=>{this.usingTouch=!0;const i=window.innerWidth*.5;for(let n=0;n<e.changedTouches.length;n++){const r=e.changedTouches[n],a=r.target;if(a&&(a.closest(".touch-btn")||a.closest("#ui-overlay")||a.tagName==="BUTTON"||a.tagName==="INPUT"))continue;const o=r.clientX,c=r.clientY;o<i&&this.leftStick.touchId===null?(this.leftStick.active=!0,this.leftStick.touchId=r.identifier,this.leftStick.originX=o,this.leftStick.originY=c,this.leftStick.currX=o,this.leftStick.currY=c,this.leftStick.touchStartTime=performance.now()):o>=i&&this.rightStick.touchId===null&&(this.rightStick.active=!0,this.rightStick.touchId=r.identifier,this.rightStick.originX=o,this.rightStick.originY=c,this.rightStick.currX=o,this.rightStick.currY=c,this.rightStick.touchStartTime=performance.now())}},{passive:!1}),window.addEventListener("touchmove",e=>{for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches[i],r=n.clientX,a=n.clientY;n.identifier===this.leftStick.touchId?this.updateStickMath(this.leftStick,r,a):n.identifier===this.rightStick.touchId&&this.updateStickMath(this.rightStick,r,a)}},{passive:!1});const t=e=>{for(let i=0;i<e.changedTouches.length;i++){const n=e.changedTouches[i];n.identifier===this.leftStick.touchId?this.resetStick(this.leftStick):n.identifier===this.rightStick.touchId&&this.resetStick(this.rightStick)}};window.addEventListener("touchend",t,{passive:!1}),window.addEventListener("touchcancel",t,{passive:!1}),window.addEventListener("keydown",e=>{this.usingTouch=!1,this.keys.add(e.code),e.code==="ShiftLeft"&&(this.triggerRig=!0),e.code==="KeyE"&&(this.triggerBoom=!0),(e.code==="KeyF"||e.code==="KeyV")&&(this.triggerMelee=!0),e.code==="KeyQ"&&(this.triggerSwap=!0),e.code==="KeyR"&&(this.triggerReload=!0)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{this.usingTouch=!1,this.mousePos.x=e.clientX,this.mousePos.y=e.clientY}),window.addEventListener("mousedown",e=>{e.button===0&&(this.mouseDown=!0),e.button===2&&(this.triggerRig=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault())}updateStickMath(t,e,i){const n=e-t.originX,r=i-t.originY,a=Math.hypot(n,r),o=Qe.STICK_MAX_RADIUS,c=Math.min(a,o),l=Math.atan2(r,n);t.currX=t.originX+Math.cos(l)*c,t.currY=t.originY+Math.sin(l)*c,t.magnitude=c/o,t.normX=c/o*Math.cos(l),t.normY=c/o*Math.sin(l)}resetStick(t){t.active=!1,t.touchId=null,t.normX=0,t.normY=0,t.magnitude=0}updateInputs(t,e){if(this.usingTouch)this.moveX=Math.abs(this.leftStick.normX)>Qe.DEADZONE?this.leftStick.normX:0,this.isThrusting=this.leftStick.active&&this.leftStick.normY<Qe.THRUST_Y_THRESHOLD,this.isSlamming=!1,this.rightStick.active&&this.rightStick.magnitude>Qe.DEADZONE?(this.aimAngle=Math.atan2(-this.rightStick.normY,this.rightStick.normX),this.facingDir=Math.abs(this.aimAngle)>Math.PI*.5?-1:1,this.isFiring=this.rightStick.magnitude>=Qe.FIRE_THRESHOLD):this.isFiring=!1;else{const i=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?-1:0,n=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0;this.moveX=i+n,this.isThrusting=this.keys.has("KeyW")||this.keys.has("Space")||this.keys.has("ArrowUp"),this.isSlamming=!1,this.aimAngle=Math.atan2(-(this.mousePos.y-e),this.mousePos.x-t),this.facingDir=Math.abs(this.aimAngle)>Math.PI*.5?-1:1,this.isFiring=this.mouseDown}}resetOneShotTriggers(){this.triggerMelee=!1,this.triggerRig=!1,this.triggerBoom=!1,this.triggerSwap=!1,this.triggerReload=!1}}class T_{constructor(t,e){x(this,"state",{moveX:0,jump:!1,groundSlam:!1,rig:!1,aimAngle:0,aiming:!1,firing:!1,melee:!1,throwBoom:!1,swapWeapon:!1,reload:!1,isTouch:!1,flyIntensity:0});x(this,"hasRequestedFullscreen",!1);x(this,"camera");x(this,"canvas");x(this,"raycaster",new c_);x(this,"mousePos",new bt);x(this,"planeZ0",new an(new L(0,0,1),0));x(this,"playerWorldPos",new L(40,25,0));x(this,"mouseWorldPos",new L(40,25,0));x(this,"mmController");x(this,"isHoldingFlyButton",!1);x(this,"isHoldingFireButton",!1);x(this,"keys",{});this.canvas=t,this.camera=e,this.state.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024,this.mmController=new M_(t),this.setupDesktopListeners(),this.setupHTMLButtonListeners()}get isLeftActive(){return this.mmController.leftStick.active}get leftTouchStart(){return new bt(this.mmController.leftStick.originX,this.mmController.leftStick.originY)}get leftTouchCurrent(){return new bt(this.mmController.leftStick.currX,this.mmController.leftStick.currY)}get isRightActive(){return this.mmController.rightStick.active}get rightTouchStart(){return new bt(this.mmController.rightStick.originX,this.mmController.rightStick.originY)}get rightTouchCurrent(){return new bt(this.mmController.rightStick.currX,this.mmController.rightStick.currY)}setupDesktopListeners(){window.addEventListener("keydown",t=>{this.state.isTouch=!1,this.keys[t.code]=!0,t.code==="KeyQ"&&(this.state.swapWeapon=!0),t.code==="KeyR"&&(this.state.reload=!0),t.code==="KeyE"&&(this.state.throwBoom=!0),(t.code==="KeyF"||t.code==="KeyV")&&(this.state.melee=!0),t.code==="ShiftLeft"&&(this.state.rig=!0),(t.code==="KeyS"||t.code==="ArrowDown")&&!t.repeat&&(this.state.groundSlam=!1),["Space","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("mousemove",t=>{this.state.isTouch=!1,this.mousePos.x=t.clientX/window.innerWidth*2-1,this.mousePos.y=-(t.clientY/window.innerHeight)*2+1,this.calculateMouseAim()}),window.addEventListener("mousedown",t=>{this.state.isTouch=!1,t.button===0?this.state.firing=!0:t.button===1?this.state.throwBoom=!0:t.button===2&&(t.preventDefault(),this.state.rig=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.state.firing=!1)}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("wheel",t=>{Math.abs(t.deltaY)>20&&(this.state.swapWeapon=!0)})}calculateMouseAim(){if(this.raycaster.setFromCamera(this.mousePos,this.camera),this.raycaster.ray.intersectPlane(this.planeZ0,this.mouseWorldPos)){const e=this.mouseWorldPos.x-this.playerWorldPos.x,i=this.mouseWorldPos.y-(this.playerWorldPos.y+.95);Math.sqrt(e*e+i*i)>.35&&(this.state.aimAngle=Math.atan2(i,e),this.state.aiming=!0)}}setupHTMLButtonListeners(){const t=(e,i,n)=>{const r=document.getElementById(e);if(!r)return;const a=c=>{c.preventDefault(),c.stopPropagation(),this.state.isTouch=!0,this.mmController.usingTouch=!0;try{c.pointerId&&r.setPointerCapture(c.pointerId)}catch{}i()},o=c=>{c.preventDefault(),c.stopPropagation();try{c.pointerId&&r.releasePointerCapture(c.pointerId)}catch{}n&&n()};r.addEventListener("pointerdown",a),r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("touchstart",a,{passive:!1}),r.addEventListener("touchend",o,{passive:!1}),r.addEventListener("touchcancel",o,{passive:!1})};t("btn-touch-fly",()=>{this.isHoldingFlyButton=!0,this.state.jump=!0,this.triggerHaptic(20)},()=>{this.isHoldingFlyButton=!1,this.state.jump=!1}),t("btn-touch-fire",()=>{this.isHoldingFireButton=!0,this.state.firing=!0,this.triggerHaptic(15)},()=>{this.isHoldingFireButton=!1,this.isRightActive||(this.state.firing=!1)}),t("btn-touch-rig",()=>{this.state.rig=!0,this.triggerHaptic(25)}),t("btn-touch-c4",()=>{this.state.throwBoom=!0,this.triggerHaptic(25)}),t("btn-touch-melee",()=>{this.state.melee=!0,this.triggerHaptic(30)}),t("btn-touch-swap",()=>{this.state.swapWeapon=!0,this.triggerHaptic(20)}),t("btn-touch-reload",()=>{this.state.reload=!0,this.triggerHaptic(20)}),t("btn-touch-fullscreen",()=>{this.requestFullscreen(),this.triggerHaptic(25)})}requestFullscreen(){const t=document,e=document.documentElement;if(!(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)){const a=e.requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen;a&&a.call(e).catch(()=>{})}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}window.scrollTo(0,1);const n=document.getElementById("hud-canvas");n&&(n.width=window.innerWidth,n.height=window.innerHeight);const r=document.getElementById("webgl-canvas");if(r){const a=r.querySelector("canvas");a&&(a.width=window.innerWidth,a.height=window.innerHeight)}window.dispatchEvent(new Event("resize")),setTimeout(()=>{window.scrollTo(0,1),window.dispatchEvent(new Event("resize"))},120),setTimeout(()=>{window.scrollTo(0,1),window.dispatchEvent(new Event("resize"))},350)}setupTouchListeners(){window.addEventListener("touchstart",()=>{this.hasRequestedFullscreen||(this.hasRequestedFullscreen=!0,this.requestFullscreen())},{passive:!0})}triggerHaptic(t=25){if(typeof navigator<"u"&&"vibrate"in navigator)try{navigator.vibrate(t)}catch{}}update(){const t=this.playerWorldPos.clone().project(this.camera),e=(t.x+1)*.5*window.innerWidth,i=(-t.y+1)*.5*window.innerHeight;if(this.mmController.updateInputs(e,i),this.mmController.usingTouch)this.state.isTouch=!0,this.state.moveX=this.mmController.moveX,this.state.jump=this.mmController.isThrusting||this.isHoldingFlyButton,this.state.groundSlam=!1,this.state.aimAngle=this.mmController.aimAngle,this.state.aiming=this.mmController.rightStick.active||this.isHoldingFireButton,this.state.firing=this.mmController.isFiring||this.isHoldingFireButton,this.mmController.triggerMelee&&(this.state.melee=!0,this.triggerHaptic(30)),this.mmController.triggerRig&&(this.state.rig=!0,this.triggerHaptic(25)),this.mmController.triggerBoom&&(this.state.throwBoom=!0,this.triggerHaptic(25)),this.mmController.triggerSwap&&(this.state.swapWeapon=!0,this.triggerHaptic(20)),this.mmController.triggerReload&&(this.state.reload=!0,this.triggerHaptic(20)),this.state.flyIntensity=Math.min(1,Math.abs(this.mmController.leftStick.normY)),this.mmController.resetOneShotTriggers();else{this.state.isTouch=!1;let n=0;(this.keys.KeyA||this.keys.ArrowLeft)&&(n-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(n+=1),this.state.moveX=n,this.state.jump=!!(this.keys.KeyW||this.keys.Space||this.keys.ArrowUp)||this.isHoldingFlyButton,this.state.flyIntensity=this.state.jump?1:0,this.isHoldingFireButton&&(this.state.firing=!0),this.calculateMouseAim()}}resetOneShotFlags(){this.state.groundSlam=!1,this.state.rig=!1,this.state.melee=!1,this.state.throwBoom=!1,this.state.swapWeapon=!1,this.state.reload=!1}}class b_{constructor(){x(this,"ctx",null);x(this,"masterGain",null);x(this,"isMuted",!1);x(this,"noiseBuffer",null);const t=()=>{this.ensureContext(),window.removeEventListener("click",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("click",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(t){this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const e=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const i=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1}}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),!!this.ctx&&!this.isMuted}playGunshot(t){if(!this.ensureContext()||!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type=t==="shotgun"?"lowpass":"bandpass",n.frequency.setValueAtTime(t==="sniper"?1200:2400,e),n.frequency.exponentialRampToValueAtTime(150,e+.12);const r=this.ctx.createGain(),a=t==="shotgun"||t==="sniper"?.9:.55;r.gain.setValueAtTime(a,e),r.gain.exponentialRampToValueAtTime(.001,e+.14),i.connect(n),n.connect(r),r.connect(this.masterGain),i.start(e),i.stop(e+.15);const o=this.ctx.createOscillator(),c=this.ctx.createGain(),l=t==="sniper"?180:t==="shotgun"?140:220;o.frequency.setValueAtTime(l,e),o.frequency.exponentialRampToValueAtTime(30,e+.1),c.gain.setValueAtTime(.6,e),c.gain.exponentialRampToValueAtTime(.001,e+.1),o.connect(c),c.connect(this.masterGain),o.start(e),o.stop(e+.11)}playExplosion(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(65,t),e.frequency.exponentialRampToValueAtTime(18,t+.85),i.gain.setValueAtTime(1,t),i.gain.exponentialRampToValueAtTime(.001,t+.9),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.92);const n=this.ctx.sampleRate*.8,r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<n;h++)a[h]=(Math.random()*2-1)*(1-h/n);const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(800,t),c.frequency.exponentialRampToValueAtTime(60,t+.7);const l=this.ctx.createGain();l.gain.setValueAtTime(.85,t),l.gain.exponentialRampToValueAtTime(.001,t+.75),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(t),o.stop(t+.8)}playSonarPing(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1250,t),e.frequency.exponentialRampToValueAtTime(800,t+.35),i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.36)}playMeleeSwish(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(380,t),e.frequency.exponentialRampToValueAtTime(90,t+.18),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.19)}playThrusterWhoosh(){if(!this.ensureContext()||!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(1600,t+.15),i.frequency.exponentialRampToValueAtTime(200,t+.28);const n=this.ctx.createGain();n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.3)}playCashPickup(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((i,n)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=t+n*.055;r.type="sine",r.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.12),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.13)})}playC4Beep(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1800,t),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.07)}playUIHover(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1400,t),i.gain.setValueAtTime(.04,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.025),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.03)}playUISelect(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(1320,t+.06),i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.09)}playUIDeploy(){if(!this.ensureContext()||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(80,t),e.frequency.exponentialRampToValueAtTime(220,t+.25),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.36)}}class E_{constructor(t,e=wi.GRID_WIDTH,i=wi.GRID_HEIGHT){x(this,"width");x(this,"height");x(this,"tiles");x(this,"tileHp");x(this,"maxHp");x(this,"scene");x(this,"group");x(this,"tileMeshes");x(this,"concreteMaterial");x(this,"concreteDamagedMaterial");x(this,"woodMaterial");x(this,"glassMaterial");x(this,"steelMaterial");x(this,"transformerMaterial");x(this,"sharedBoxGeometry");x(this,"woodGeometry");x(this,"debrisGroup");x(this,"activeDebris",[]);x(this,"debrisGeometries",[]);x(this,"onBlackoutTriggered");x(this,"onTileDestroyed");x(this,"currentMapId",ae.BIRNIN_KANO);x(this,"concreteDamagedLightMaterial");x(this,"concreteDamagedHeavyMaterial");x(this,"decorGroup",new Jt);x(this,"aviationLights",[]);x(this,"animTimer",0);this.scene=t,this.width=e,this.height=i,this.tiles=new Uint8Array(e*i),this.tileHp=new Float32Array(e*i),this.maxHp=new Float32Array(e*i),this.tileMeshes=new Array(e*i).fill(null),this.group=new Jt,this.group.add(this.decorGroup),this.scene.add(this.group),this.debrisGroup=new Jt,this.scene.add(this.debrisGroup),this.initProceduralMaterials(),this.initDebrisGeometries()}setMapTheme(t){for(this.currentMapId=t;this.decorGroup.children.length>0;)this.decorGroup.remove(this.decorGroup.children[0]);this.aviationLights=[],t===ae.BIRNIN_KANO?this.initKanoMaterials():this.initLagosMaterials()}initKanoMaterials(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#a16207"),i.addColorStop(.5,"#854d0e"),i.addColorStop(1,"#713f12"),e.fillStyle=i,e.fillRect(0,0,256,256),e.strokeStyle="#582e0c",e.lineWidth=3;const n=32;for(let g=30;g<256;g+=n){e.beginPath(),e.moveTo(0,g),e.lineTo(256,g),e.stroke();const v=Math.floor(g/n)%2*32;for(let m=v;m<256;m+=64)e.beginPath(),e.moveTo(m,g),e.lineTo(m,g+n),e.stroke()}e.fillStyle="rgba(202, 138, 4, 0.25)";for(let g=0;g<300;g++)e.fillRect(Math.random()*256,Math.random()*256,2,2);e.fillStyle="rgba(67, 20, 7, 0.35)";for(let g=0;g<200;g++)e.fillRect(Math.random()*256,Math.random()*256,3,2);e.strokeStyle="rgba(250, 204, 21, 0.85)",e.lineWidth=2.5,e.shadowColor="#facc15",e.shadowBlur=8;for(let g=32;g<256;g+=64)e.beginPath(),e.moveTo(g,100),e.lineTo(g+16,128),e.lineTo(g,156),e.lineTo(g-16,128),e.closePath(),e.stroke(),e.strokeRect(g-6,122,12,12);e.shadowBlur=0,e.fillStyle="#ca8a04",e.fillRect(0,0,256,22),e.fillStyle="#fef08a",e.fillRect(0,22,256,4),e.fillStyle="#f59e0b",e.shadowColor="#fbbf24",e.shadowBlur=12,e.fillRect(0,0,256,6),e.shadowBlur=0;const r=new be(t);r.wrapS=Vi,r.wrapT=Vi,this.concreteMaterial=new Dt({map:r,roughness:.9,metalness:.05,emissive:4528643,emissiveIntensity:.25});const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.drawImage(t,0,0),o.strokeStyle="#3e1a06",o.lineWidth=4,o.beginPath(),o.moveTo(40,26),o.lineTo(90,110),o.lineTo(150,150),o.lineTo(210,230),o.moveTo(100,115),o.lineTo(60,190),o.stroke(),this.concreteDamagedLightMaterial=new Dt({map:new be(a),roughness:.95,metalness:.05,emissive:7877903,emissiveIntensity:.35});const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.drawImage(a,0,0),l.fillStyle="#270c04",l.beginPath(),l.arc(128,128,42,0,Math.PI*2),l.fill(),l.strokeStyle="#ef4444",l.lineWidth=5,l.shadowColor="#f97316",l.shadowBlur=15,l.strokeRect(6,6,244,244);for(let g=0;g<Math.PI*2;g+=Math.PI/3)l.beginPath(),l.moveTo(128,128),l.lineTo(128+Math.cos(g)*90,128+Math.sin(g)*90),l.stroke();l.shadowBlur=0,this.concreteDamagedHeavyMaterial=new Dt({map:new be(c),roughness:.98,metalness:.08,emissive:15680580,emissiveIntensity:.65}),this.concreteDamagedMaterial=this.concreteDamagedLightMaterial;const h=document.createElement("canvas");h.width=256,h.height=128;const d=h.getContext("2d");d.fillStyle="#451a03",d.fillRect(0,0,256,128),d.fillStyle="#78350f";for(let g=10;g<128;g+=22)d.fillRect(4,g,248,14);d.fillStyle="#d97706",d.fillRect(16,0,16,128),d.fillRect(224,0,16,128),d.fillStyle="#f59e0b",d.shadowColor="#f59e0b",d.shadowBlur=8,d.fillRect(0,0,256,8),d.shadowBlur=0,this.woodMaterial=new Dt({map:new be(h),roughness:.85,metalness:.05,emissive:4528643,emissiveIntensity:.3});const u=document.createElement("canvas");u.width=256,u.height=256;const f=u.getContext("2d");f.fillStyle="#1c1917",f.fillRect(0,0,256,256),f.strokeStyle="#d97706",f.lineWidth=12,f.strokeRect(6,6,244,244),f.strokeStyle="#facc15",f.lineWidth=6,f.beginPath(),f.moveTo(128,40),f.lineTo(216,128),f.lineTo(128,216),f.lineTo(40,128),f.closePath(),f.stroke(),f.fillStyle="#f59e0b";for(let g=32;g<256;g+=64)for(let v=32;v<256;v+=64)f.beginPath(),f.arc(g,v,7,0,Math.PI*2),f.fill();this.steelMaterial=new Dt({map:new be(u),roughness:.45,metalness:.15,emissive:7877903,emissiveIntensity:.35})}initLagosMaterials(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#0f172a",e.fillRect(0,0,256,256);for(let g=0;g<256;g+=32)e.fillStyle="#1e293b",e.fillRect(g,40,16,216),e.fillStyle="#334155",e.fillRect(g+12,40,4,216);e.fillStyle="#475569",e.fillRect(0,36,36,36),e.fillRect(220,36,36,36),e.fillRect(0,220,36,36),e.fillRect(220,220,36,36),e.fillStyle="#94a3b8",[[14,50],[242,50],[14,238],[242,238]].forEach(([g,v])=>{e.beginPath(),e.arc(g,v,4,0,Math.PI*2),e.fill()}),e.fillStyle="#94a3b8",e.font="bold 12px monospace",e.fillText("LOS-234 // APAPA SEC",48,80),e.fillText("MAX PAYLOAD 32,500 KG",48,100),e.fillStyle="#1e293b",e.fillRect(0,0,256,36),e.fillStyle="#f8fafc",e.fillRect(20,14,45,6),e.fillRect(100,14,45,6),e.fillRect(180,14,45,6);for(let g=0;g<256;g+=24)e.fillStyle="#eab308",e.beginPath(),e.moveTo(g,30),e.lineTo(g+12,30),e.lineTo(g+4,38),e.lineTo(g-8,38),e.closePath(),e.fill();const i=new be(t);i.wrapS=Vi,i.wrapT=Vi,this.concreteMaterial=new Dt({map:i,roughness:.55,metalness:.15,emissive:988970,emissiveIntensity:.25});const n=document.createElement("canvas");n.width=256,n.height=256;const r=n.getContext("2d");r.drawImage(t,0,0),r.strokeStyle="#020617",r.lineWidth=4,r.beginPath(),r.moveTo(50,15),r.lineTo(90,80),r.lineTo(160,140),r.lineTo(220,210),r.stroke(),this.concreteDamagedLightMaterial=new Dt({map:new be(n),roughness:.75,metalness:.12,emissive:1976635,emissiveIntensity:.35});const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d");o.drawImage(n,0,0),o.fillStyle="#020617",o.beginPath(),o.arc(128,128,48,0,Math.PI*2),o.fill(),o.strokeStyle="#f97316",o.lineWidth=6,o.shadowColor="#ef4444",o.shadowBlur=14,o.strokeRect(6,6,244,244),o.shadowBlur=0,this.concreteDamagedHeavyMaterial=new Dt({map:new be(a),roughness:.85,metalness:.15,emissive:16347926,emissiveIntensity:.75}),this.concreteDamagedMaterial=this.concreteDamagedLightMaterial;const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.fillStyle="#1e293b",l.fillRect(0,0,256,256),l.fillStyle="#334155",l.fillRect(0,0,256,32),l.fillRect(0,224,256,32),l.fillStyle="#94a3b8";for(let g=16;g<256;g+=32)l.beginPath(),l.arc(g,16,5,0,Math.PI*2),l.arc(g,240,5,0,Math.PI*2),l.fill();l.strokeStyle="#475569",l.lineWidth=8,l.beginPath(),l.moveTo(0,32),l.lineTo(256,224),l.moveTo(256,32),l.lineTo(0,224),l.stroke(),this.steelMaterial=new Dt({map:new be(c),roughness:.35,metalness:.15,emissive:1976635,emissiveIntensity:.35});const h=document.createElement("canvas");h.width=256,h.height=128;const d=h.getContext("2d");d.fillStyle="#0f172a",d.fillRect(0,0,256,128),d.strokeStyle="#38bdf8",d.lineWidth=1.5;for(let g=-128;g<384;g+=20)d.beginPath(),d.moveTo(g,0),d.lineTo(g+128,128),d.moveTo(g+128,0),d.lineTo(g,128),d.stroke();d.fillStyle="#06b6d4",d.fillRect(0,0,256,8),this.woodMaterial=new Dt({map:new be(h),roughness:.45,metalness:.15,emissive:165063,emissiveIntensity:.3});const u=document.createElement("canvas");u.width=256,u.height=256;const f=u.getContext("2d");f.fillStyle="#15803d",f.fillRect(0,0,256,256),f.fillStyle="#0f172a";for(let g=60;g<190;g+=14)f.fillRect(30,g,196,7);f.fillStyle="#eab308",f.fillRect(20,20,216,24),f.fillStyle="#0f172a",f.font="bold 13px monospace",f.fillText("MIKANO POWER // 415V HIGH YIELD",28,37),f.fillStyle="#22c55e",f.font="bold 14px monospace",f.fillText("OUTPUT: 240V 50Hz [ONLINE]",30,225),this.transformerMaterial=new Dt({map:new be(u),roughness:.4,metalness:.12,emissive:1409085,emissiveIntensity:.45})}initProceduralMaterials(){this.initKanoMaterials(),this.glassMaterial=new Nh({color:8246268,transparent:!0,opacity:.35,transmission:.9,roughness:.1,metalness:.05}),this.transformerMaterial=new Dt({color:13273604,roughness:.45,metalness:.1,emissive:13273604,emissiveIntensity:.3}),this.sharedBoxGeometry=new it(wi.TILE_SIZE,wi.TILE_SIZE,wi.TILE_DEPTH),this.woodGeometry=new it(wi.TILE_SIZE,.35,wi.TILE_DEPTH)}initDebrisGeometries(){this.debrisGeometries.push(new cc(.2)),this.debrisGeometries.push(new hc(.25)),this.debrisGeometries.push(new it(.22,.22,.22))}setTile(t,e,i){if(t<0||t>=this.width||e<0||e>=this.height)return;const n=e*this.width+t;this.tiles[n]=i;let r=0;switch(i){case Q.WOOD_SCAFFOLD:r=40;break;case Q.GLASS_WINDOW:r=15;break;case Q.BRICK_CONCRETE:r=160;break;case Q.STEEL_GIRDER:r=999999;break;case Q.POWER_TRANSFORMER:r=100;break;default:r=0;break}if(this.tileHp[n]=r,this.maxHp[n]=r,this.tileMeshes[n]&&(this.group.remove(this.tileMeshes[n]),this.tileMeshes[n]=null),i===Q.EMPTY)return;let a=this.concreteMaterial,o=this.sharedBoxGeometry,c=0;i===Q.WOOD_SCAFFOLD?(a=this.woodMaterial,o=this.woodGeometry,c=.325):i===Q.GLASS_WINDOW?a=this.glassMaterial:i===Q.STEEL_GIRDER?a=this.steelMaterial:i===Q.POWER_TRANSFORMER&&(a=this.transformerMaterial);const l=new U(o,a);l.position.set(t+.5,e+.5+c,0),l.castShadow=i!==Q.GLASS_WINDOW,l.receiveShadow=!0,this.group.add(l),this.tileMeshes[n]=l}getTile(t,e){return t<0||t>=this.width||e<0?Q.STEEL_GIRDER:e>=this.height?Q.EMPTY:this.tiles[e*this.width+t]}isSolid(t,e){const i=this.getTile(t,e);return i===Q.BRICK_CONCRETE||i===Q.STEEL_GIRDER||i===Q.POWER_TRANSFORMER}isOneWayPlatform(t,e){return this.getTile(t,e)===Q.WOOD_SCAFFOLD}damageTile(t,e,i){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const n=e*this.width+t,r=this.tiles[n];if(r===Q.EMPTY||r===Q.STEEL_GIRDER)return!1;if(this.tileHp[n]-=i,r===Q.BRICK_CONCRETE&&this.tileMeshes[n]){const a=this.tileHp[n]/this.maxHp[n];a<.35?this.tileMeshes[n].material=this.concreteDamagedHeavyMaterial:a<.7&&(this.tileMeshes[n].material=this.concreteDamagedLightMaterial)}return this.tileHp[n]<=0?(this.destroyTile(t,e),!0):!1}destroyTile(t,e){if(t<0||t>=this.width||e<0||e>=this.height)return;const i=e*this.width+t,n=this.tiles[i];n===Q.EMPTY||n===Q.STEEL_GIRDER||(n===Q.POWER_TRANSFORMER&&this.onBlackoutTriggered&&this.onBlackoutTriggered(),this.spawnDebrisBurst(t+.5,e+.5,n),this.tiles[i]=Q.EMPTY,this.tileHp[i]=0,this.tileMeshes[i]&&(this.group.remove(this.tileMeshes[i]),this.tileMeshes[i]=null),this.onTileDestroyed&&this.onTileDestroyed(t,e,n))}clear(){for(let t=0;t<this.tileMeshes.length;t++)this.tileMeshes[t]&&(this.group.remove(this.tileMeshes[t]),this.tileMeshes[t]=null);this.tiles.fill(Q.EMPTY),this.tileHp.fill(0),this.maxHp.fill(0);for(let t=0;t<this.activeDebris.length;t++)this.debrisGroup.remove(this.activeDebris[t].mesh);for(this.activeDebris=[];this.decorGroup.children.length>0;)this.decorGroup.remove(this.decorGroup.children[0]);this.aviationLights=[]}addPillar(t,e,i){const n=i-e;if(n<=0)return;const r=new it(.55,n,.85),a=this.steelMaterial,o=new U(r,a);o.position.set(t+.5,e+n*.5,-.15),o.castShadow=!0,o.receiveShadow=!0,this.decorGroup.add(o);const c=new it(.85,.25,1.1),l=new U(c,a);l.position.set(t+.5,e+.12,-.15),l.castShadow=!0,this.decorGroup.add(l);const h=new U(c,a);h.position.set(t+.5,i-.12,-.15),h.castShadow=!0,this.decorGroup.add(h)}addAviationLight(t,e){const i=new zt(.06,.08,.7,6),n=new Dt({color:3359061,metalness:.2,roughness:.5}),r=new U(i,n);r.position.set(t+.5,e+.35,.1),r.castShadow=!0,this.decorGroup.add(r);const a=new Ii(.16,8,8),o=new jt({color:15680580,transparent:!0,opacity:1}),c=new U(a,o);c.position.set(t+.5,e+.75,.1),this.decorGroup.add(c),this.aviationLights.push(c)}addNeonSign(t,e,i,n=3718648){const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle="#050806",a.fillRect(0,0,256,64),a.strokeStyle="#22c55e",a.lineWidth=3,a.strokeRect(2,2,252,60),a.fillStyle="#ffffff",a.font="bold 20px monospace",a.textAlign="center",a.textBaseline="middle",a.fillText(i,128,32);const o=new be(r),c=new ti(3.2,.8),l=new jt({map:o,transparent:!0,opacity:.9}),h=new U(c,l);h.position.set(t,e,-.55),this.decorGroup.add(h)}spawnDebrisBurst(t,e,i){const n=12+Math.floor(Math.random()*6);let r=this.concreteMaterial;i===Q.WOOD_SCAFFOLD?r=this.woodMaterial:i===Q.GLASS_WINDOW?r=this.glassMaterial:i===Q.POWER_TRANSFORMER&&(r=this.transformerMaterial);for(let a=0;a<n;a++){const o=this.debrisGeometries[Math.floor(Math.random()*this.debrisGeometries.length)],c=new U(o,r);c.position.set(t+(Math.random()-.5)*.6,e+(Math.random()-.5)*.6,(Math.random()-.5)*1.2);const l=Math.random()*Math.PI*2,h=4+Math.random()*10,d=3+Math.random()*12;c.castShadow=!0,this.debrisGroup.add(c),this.activeDebris.push({mesh:c,vx:Math.cos(l)*h,vy:Math.sin(l)*h+3,vz:d,rx:(Math.random()-.5)*15,ry:(Math.random()-.5)*15,rz:(Math.random()-.5)*15,life:0,maxLife:1.8+Math.random()*.8})}}updateDebris(t){for(let i=this.activeDebris.length-1;i>=0;i--){const n=this.activeDebris[i];if(n.life+=t,n.vy+=-30*t,n.mesh.position.x+=n.vx*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.vx*=.98,n.vz*=.97,n.mesh.rotation.x+=n.rx*t,n.mesh.rotation.y+=n.ry*t,n.mesh.rotation.z+=n.rz*t,n.life>n.maxLife*.7){const r=Math.max(0,1-(n.life-n.maxLife*.7)/(n.maxLife*.3));n.mesh.scale.set(r,r,r)}n.life>=n.maxLife&&(this.debrisGroup.remove(n.mesh),this.activeDebris.splice(i,1))}}update(t){if(this.updateDebris(t),this.animTimer+=t,this.aviationLights.length>0){const e=Math.sin(this.animTimer*5.5)>.15;for(let i=0;i<this.aviationLights.length;i++)this.aviationLights[i].material.opacity=e?1:.12}}}class A_{constructor(t){x(this,"group");x(this,"clouds",[]);x(this,"rainStreaks");x(this,"dustMotes");x(this,"lightningMesh");x(this,"lightningTimer",5);x(this,"lightningDuration",0);x(this,"bridgeHeadlights",[]);x(this,"aviationLights",[]);x(this,"currentTheme",ae.BIRNIN_KANO);x(this,"scene");x(this,"animTime",0);this.scene=t,this.group=new Jt,this.group.name="SkylineBackground",t.add(this.group),this.setTheme(ae.BIRNIN_KANO)}setTheme(t){for(this.currentTheme=t;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}this.clouds=[],this.bridgeHeadlights=[],this.aviationLights=[],this.rainStreaks=void 0,this.dustMotes=void 0,this.lightningMesh=void 0,this.lightningTimer=4+Math.random()*6,this.lightningDuration=0,t===ae.BIRNIN_KANO?(this.createKanoSahelSky(),this.createKanoMegaWallsAndSpires(),this.createTudunDalaHorizon(),this.createKanoDustClouds(),this.createKanoFloatingDustMotes()):(this.createLagosMidnightSky(),this.createThirdMainlandBridgeHorizon(),this.createLagosRainStreaks(),this.createLagosLightningOverlay())}createKanoSahelSky(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1c0d02"),i.addColorStop(.25,"#451a03"),i.addColorStop(.55,"#78350f"),i.addColorStop(.78,"#b45309"),i.addColorStop(.92,"#ea580c"),i.addColorStop(1,"#f59e0b"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=e.createRadialGradient(380,110,8,380,110,110);n.addColorStop(0,"rgba(254, 240, 138, 0.98)"),n.addColorStop(.25,"rgba(251, 191, 36, 0.75)"),n.addColorStop(.65,"rgba(234, 88, 12, 0.35)"),n.addColorStop(1,"rgba(180, 83, 9, 0.0)"),e.fillStyle=n,e.beginPath(),e.arc(380,110,110,0,Math.PI*2),e.fill();const r=new be(t),a=new ti(320,160),o=new jt({map:r,depthWrite:!1}),c=new U(a,o);c.position.set(40,25,-60),this.group.add(c)}createKanoMegaWallsAndSpires(){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.clearRect(0,0,512,160),e.fillStyle="#451a03",e.beginPath(),e.moveTo(0,160),e.lineTo(0,80),[[30,75],[60,60],[100,60],[130,85],[170,70],[220,50],[270,50],[310,75],[370,65],[420,55],[470,55],[512,80]].forEach(([l,h])=>{e.lineTo(l,h)}),e.lineTo(512,160),e.closePath(),e.fill(),e.strokeStyle="#facc15",e.lineWidth=2,e.shadowColor="#facc15",e.shadowBlur=12,[80,245,445].forEach(l=>{e.beginPath(),e.moveTo(l-12,60),e.lineTo(l,12),e.lineTo(l+12,60),e.stroke(),[24,36,48].forEach(h=>{e.beginPath(),e.ellipse(l,h,8,3,0,0,Math.PI*2),e.stroke()}),e.fillStyle="#fef08a",e.beginPath(),e.arc(l,12,4,0,Math.PI*2),e.fill()}),e.shadowBlur=0;const r=new be(t),a=new ti(310,65),o=new jt({map:r,transparent:!0,depthWrite:!1}),c=new U(a,o);c.position.set(40,18,-48),this.group.add(c)}createTudunDalaHorizon(){const t=document.createElement("canvas");t.width=512,t.height=140;const e=t.getContext("2d");e.clearRect(0,0,512,140),e.fillStyle="#2e1005",e.beginPath(),e.moveTo(0,140),e.lineTo(0,95),e.quadraticCurveTo(80,65,160,45),e.lineTo(240,42),e.quadraticCurveTo(320,55,390,85),e.lineTo(512,90),e.lineTo(512,140),e.closePath(),e.fill(),e.fillStyle="#1c0903",[40,90,150,310,360,430,470].forEach(c=>{e.fillRect(c,70,3,20);for(let l=-.8;l<=.8;l+=.4)e.beginPath(),e.arc(c+Math.sin(l)*8,70-Math.cos(l)*4,6,0,Math.PI*2),e.fill()});const n=new be(t),r=new ti(300,55),a=new jt({map:n,transparent:!0,depthWrite:!1}),o=new U(r,a);o.position.set(40,14,-38),this.group.add(o)}createKanoDustClouds(){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d");e.fillStyle="rgba(180, 83, 9, 0.28)";for(let r=0;r<5;r++)e.beginPath(),e.arc(60+r*35,64,35,0,Math.PI*2),e.fill();const i=new be(t),n=new jt({map:i,transparent:!0,depthWrite:!1});for(let r=0;r<6;r++){const a=new ti(48,20),o=new U(a,n);o.position.set(r*35-15,26+r%2*6,-32),o.speed=.6+r%3*.4,this.group.add(o),this.clouds.push(o)}}createKanoFloatingDustMotes(){const e=new we,i=new Float32Array(900*3);for(let r=0;r<900;r++)i[r*3+0]=Math.random()*120-15,i[r*3+1]=Math.random()*55,i[r*3+2]=-5+(Math.random()-.5)*35;e.setAttribute("position",new oi(i,3));const n=new Eo({color:16436245,size:.35,transparent:!0,opacity:.65,blending:Gs});this.dustMotes=new Rl(e,n),this.group.add(this.dustMotes)}createLagosMidnightSky(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#040706"),i.addColorStop(.4,"#090f0c"),i.addColorStop(.75,"#0f172a"),i.addColorStop(1,"#1e293b"),e.fillStyle=i,e.fillRect(0,0,512,512);const n=new be(t),r=new ti(320,160),a=new jt({map:n,depthWrite:!1}),o=new U(r,a);o.position.set(40,25,-60),this.group.add(o)}createThirdMainlandBridgeHorizon(){const t=document.createElement("canvas");t.width=512,t.height=140;const e=t.getContext("2d");e.clearRect(0,0,512,140),e.fillStyle="#060b08",e.fillRect(0,75,512,65),[[20,48,26],[65,38,32],[130,28,48],[195,45,35],[260,32,28],[340,30,44],[430,42,32]].forEach(([c,l,h])=>{e.fillRect(c,75-l,h,l)}),e.strokeStyle="#008751",e.lineWidth=2,[90,230,390].forEach(c=>{e.beginPath(),e.moveTo(c,75),e.lineTo(c,20),e.stroke(),e.beginPath(),e.moveTo(c,25),e.lineTo(c-50,75),e.moveTo(c,25),e.lineTo(c+50,75),e.stroke()}),e.fillStyle="rgba(56, 189, 248, 0.85)",e.fillRect(140,40,42,14),e.fillStyle="#ffffff",e.font="bold 7px monospace",e.fillText("EKO TOLL",144,50),e.fillStyle="rgba(34, 197, 94, 0.85)",e.fillRect(350,42,48,14),e.fillStyle="#ffffff",e.fillText("SECTOR 234",354,52);for(let c=8;c<500;c+=14)e.fillStyle="#f59e0b",e.fillRect(c,76,5,2),e.fillStyle="#ef4444",e.fillRect(c+6,79,4,2);const n=new be(t),r=new ti(300,50),a=new jt({map:n,transparent:!0,depthWrite:!1}),o=new U(r,a);o.position.set(40,14,-40),this.group.add(o),[90,230,390].forEach(c=>{const l=new Ii(.25,6,6),h=new jt({color:15680580,transparent:!0,opacity:1}),d=new U(l,h),u=40+(c-256)/512*300;d.position.set(u,23.5,-39.5),this.group.add(d),this.aviationLights.push(d)})}createLagosRainStreaks(){const e=new we,i=new Float32Array(650*3);for(let r=0;r<650;r++)i[r*3+0]=(Math.random()-.2)*130,i[r*3+1]=Math.random()*65,i[r*3+2]=-12+(Math.random()-.5)*30;e.setAttribute("position",new oi(i,3));const n=new Eo({color:3718648,size:.32,transparent:!0,opacity:.65});this.rainStreaks=new Rl(e,n),this.group.add(this.rainStreaks)}createLagosLightningOverlay(){const t=new ti(340,170),e=new jt({color:9684477,transparent:!0,opacity:0,depthWrite:!1});this.lightningMesh=new U(t,e),this.lightningMesh.position.set(40,25,-54),this.group.add(this.lightningMesh)}update(t){this.animTime+=t;for(let e=0;e<this.clouds.length;e++){const i=this.clouds[e],n=i.speed||.8;i.position.x+=n*t,i.position.x>140&&(i.position.x=-60)}if(this.dustMotes){const e=this.dustMotes.geometry.attributes.position.array;for(let i=0;i<e.length/3;i++)e[i*3+0]+=(1.8+Math.sin(this.animTime*1.5+i))*t,e[i*3+1]+=Math.sin(this.animTime*2+i*.5)*.8*t,e[i*3+0]>110&&(e[i*3+0]=-15,e[i*3+1]=Math.random()*55);this.dustMotes.geometry.attributes.position.needsUpdate=!0}if(this.rainStreaks){const e=this.rainStreaks.geometry.attributes.position.array;for(let i=0;i<e.length/3;i++)e[i*3+1]-=48*t,e[i*3+0]-=15*t,e[i*3+1]<0&&(e[i*3+1]=60,e[i*3+0]=Math.random()*125-15);this.rainStreaks.geometry.attributes.position.needsUpdate=!0}if(this.aviationLights.length>0){const e=Math.sin(this.animTime*5)>.2;for(let i=0;i<this.aviationLights.length;i++)this.aviationLights[i].material.opacity=e?1:.15}if(this.currentTheme===ae.LAGOS_GOSLOW&&this.lightningMesh&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningDuration=.22,this.lightningTimer=8+Math.random()*8),this.lightningDuration>0)){this.lightningDuration-=t;const e=this.lightningMesh.material,i=Math.sin(this.lightningDuration*35);e.opacity=Math.max(0,i*.35*(this.lightningDuration/.22))}}}class Vs{static generateBirninKano(t){t.setMapTheme(ae.BIRNIN_KANO);const e=t.width,i=t.height;for(let n=0;n<e;n++)t.setTile(n,0,Q.STEEL_GIRDER),t.setTile(n,1,Q.STEEL_GIRDER);for(let n=0;n<i;n++)t.setTile(0,n,Q.STEEL_GIRDER),t.setTile(e-1,n,Q.STEEL_GIRDER);for(let n=1;n<e-1;n++)t.setTile(n,2,Q.BRICK_CONCRETE);t.setTile(16,3,Q.WOOD_SCAFFOLD),t.setTile(17,3,Q.BRICK_CONCRETE),t.setTile(18,3,Q.BRICK_CONCRETE),t.setTile(19,3,Q.WOOD_SCAFFOLD),t.setTile(60,3,Q.WOOD_SCAFFOLD),t.setTile(61,3,Q.BRICK_CONCRETE),t.setTile(62,3,Q.BRICK_CONCRETE),t.setTile(63,3,Q.WOOD_SCAFFOLD);for(let n=0;n<5;n++)t.setTile(1+n,4+n*2,Q.WOOD_SCAFFOLD),t.setTile(e-2-n,4+n*2,Q.WOOD_SCAFFOLD);for(let n=32;n<=48;n++)t.setTile(n,7,Q.BRICK_CONCRETE);for(let n=3;n<=7;n++)t.setTile(32,n,Q.BRICK_CONCRETE),t.setTile(48,n,Q.BRICK_CONCRETE);t.addPillar(32,2,7),t.addPillar(40,2,7),t.addPillar(48,2,7);for(let n=6;n<=22;n++)t.setTile(n,12,Q.BRICK_CONCRETE);for(let n=8;n<=20;n++)t.setTile(n,22,Q.BRICK_CONCRETE);t.setTile(8,23,Q.BRICK_CONCRETE),t.setTile(20,23,Q.BRICK_CONCRETE),t.addPillar(8,2,12),t.addPillar(20,2,12),t.addPillar(14,12,22);for(let n=28;n<=52;n++)n>=32&&n<=34||n>=46&&n<=48?t.setTile(n,16,Q.WOOD_SCAFFOLD):t.setTile(n,16,Q.BRICK_CONCRETE);t.addPillar(28,7,16),t.addPillar(52,7,16);for(let n=34;n<=46;n++)t.setTile(n,26,Q.BRICK_CONCRETE);t.setTile(34,27,Q.BRICK_CONCRETE),t.setTile(46,27,Q.BRICK_CONCRETE),t.addPillar(40,16,26),t.setTile(23,13,Q.WOOD_SCAFFOLD),t.setTile(24,14,Q.WOOD_SCAFFOLD),t.setTile(25,15,Q.WOOD_SCAFFOLD),t.setTile(26,16,Q.WOOD_SCAFFOLD),t.setTile(27,16,Q.WOOD_SCAFFOLD);for(let n=58;n<=73;n++)t.setTile(n,13,Q.BRICK_CONCRETE);for(let n=60;n<=72;n++)t.setTile(n,24,Q.BRICK_CONCRETE);for(let n=62;n<=72;n++)t.setTile(n,33,Q.STEEL_GIRDER);for(let n=34;n<=46;n++)t.setTile(n,42,Q.STEEL_GIRDER);t.addPillar(60,2,13),t.addPillar(72,2,13),t.addPillar(66,13,24),t.addPillar(67,24,33),t.addAviationLight(67,33),t.addAviationLight(34,42),t.addAviationLight(46,42),t.addNeonSign(40,18.5,"GIDAN MAAJI // TREASURY",16436245),t.addNeonSign(66,28,"DALA BASTION",16096779),t.setTile(53,16,Q.WOOD_SCAFFOLD),t.setTile(54,15,Q.WOOD_SCAFFOLD),t.setTile(55,14,Q.WOOD_SCAFFOLD),t.setTile(56,13,Q.WOOD_SCAFFOLD),t.setTile(57,13,Q.WOOD_SCAFFOLD);for(let n=20;n<=28;n++)t.setTile(n,22,Q.WOOD_SCAFFOLD);for(let n=47;n<=58;n++)t.setTile(n,25,Q.WOOD_SCAFFOLD);t.setTile(62,25,Q.GLASS_WINDOW),t.setTile(72,25,Q.GLASS_WINDOW),t.setTile(12,13,Q.POWER_TRANSFORMER),t.setTile(66,25,Q.POWER_TRANSFORMER)}static generateLagosGoSlow(t){t.setMapTheme(ae.LAGOS_GOSLOW);const e=t.width,i=t.height;for(let a=0;a<e;a++)t.setTile(a,0,Q.STEEL_GIRDER),t.setTile(a,1,Q.STEEL_GIRDER);for(let a=0;a<i;a++)t.setTile(0,a,Q.STEEL_GIRDER),t.setTile(e-1,a,Q.STEEL_GIRDER);for(let a=1;a<e-1;a++)t.setTile(a,2,Q.BRICK_CONCRETE);const n=(a,o,c,l)=>{for(let h=a;h<a+c;h++){for(let d=o;d<o+l;d++)t.setTile(h,d,Q.BRICK_CONCRETE);t.setTile(h,o+l,Q.WOOD_SCAFFOLD)}};n(4,3,6,2),n(14,3,7,3),n(24,3,6,2),n(46,3,6,2),n(56,3,7,3),n(67,3,6,2),[10,11,21,22,52,53,63,64].forEach(a=>{t.setTile(a,4,Q.WOOD_SCAFFOLD)});for(let a=14;a<=66;a++)a%6===0?(t.setTile(a,18,Q.STEEL_GIRDER),t.setTile(a,19,Q.STEEL_GIRDER),t.setTile(a,20,Q.STEEL_GIRDER)):t.setTile(a,20,Q.BRICK_CONCRETE);t.addPillar(18,2,20),t.addPillar(30,2,20),t.addPillar(42,2,20),t.addPillar(54,2,20),t.addPillar(66,2,20),t.setTile(12,10,Q.WOOD_SCAFFOLD),t.setTile(13,14,Q.WOOD_SCAFFOLD),t.setTile(67,10,Q.WOOD_SCAFFOLD),t.setTile(68,14,Q.WOOD_SCAFFOLD);for(let a=5;a<=18;a++)t.setTile(a,10,Q.BRICK_CONCRETE),t.setTile(a,26,Q.BRICK_CONCRETE);for(let a=8;a<=16;a++)t.setTile(a,32,Q.STEEL_GIRDER);for(let a=62;a<=74;a++)t.setTile(a,10,Q.BRICK_CONCRETE),t.setTile(a,26,Q.BRICK_CONCRETE);for(let a=64;a<=72;a++)t.setTile(a,32,Q.STEEL_GIRDER);for(let a=32;a<=48;a++)t.setTile(a,36,Q.STEEL_GIRDER);for(let a=19;a<=31;a++)t.setTile(a,28,Q.WOOD_SCAFFOLD);for(let a=49;a<=61;a++)t.setTile(a,28,Q.WOOD_SCAFFOLD);t.addAviationLight(12,33),t.addAviationLight(68,33),t.addAviationLight(32,37),t.addAviationLight(48,37),t.addNeonSign(40,22.5,"THIRD MAINLAND // FLYOVER",3718648),t.addNeonSign(12,12.5,"LOS PORT TERMINAL",2278750),t.addNeonSign(68,12.5,"APAPA SEC 234",440020),t.setTile(3,3,Q.POWER_TRANSFORMER),t.setTile(76,3,Q.POWER_TRANSFORMER)}static generateOutpostArena(t){Vs.generateBirninKano(t)}static generateApapaTerminal(t){Vs.generateLagosGoSlow(t)}}class w_{constructor(t){x(this,"scene");x(this,"activeSonarRings",[]);x(this,"sonarMeshes",[]);x(this,"ringGeom");this.scene=t;const e=[],i=32;for(let n=0;n<=i;n++){const r=n/i*Math.PI*2;e.push(new L(Math.cos(r),Math.sin(r),0))}this.ringGeom=new we().setFromPoints(e)}emitSonarRing(t,e,i,n=7){const r=new Qr({color:16777215,transparent:!0,opacity:.9}),a=new Qg(this.ringGeom,r);a.position.set(t,e,.2),this.scene.add(a),this.sonarMeshes.push(a),this.activeSonarRings.push({x:t,y:e,radius:.2,maxRadius:n,alpha:1,color:"#ffffff",sourceId:i})}checkPlayerOcclusion(t,e,i){const n=Math.floor(t.actor.position.x),r=Math.floor(t.actor.position.y+.95),a=Math.floor(e.actor.position.x),o=Math.floor(e.actor.position.y+.95),c=Math.abs(a-n),l=Math.abs(o-r),h=n<a?1:-1,d=r<o?1:-1;let u=c-l,f=n,g=r;for(;f!==a||g!==o;){if((f!==n||g!==r)&&(f!==a||g!==o)&&i.isSolid(f,g))return!0;const v=2*u;v>-l&&(u-=l,f+=h),v<c&&(u+=c,g+=d)}return!1}update(t){for(let e=this.activeSonarRings.length-1;e>=0;e--){const i=this.activeSonarRings[e],n=this.sonarMeshes[e];i.radius+=t*10,i.alpha=Math.max(0,1-i.radius/i.maxRadius),n.scale.set(i.radius,i.radius,1),n.material.opacity=i.alpha,i.radius>=i.maxRadius&&(this.scene.remove(n),n.material.dispose(),this.activeSonarRings.splice(e,1),this.sonarMeshes.splice(e,1))}}}class C_{constructor(t){x(this,"scene");x(this,"ziplines",[]);x(this,"isBlackoutActive",!1);x(this,"blackoutTimer",0);x(this,"transformerRepairTimer",0);x(this,"vaultDoorMesh",null);x(this,"isVaultOpen",!1);this.scene=t,this.createZipline(22,32,43,18.5),this.createZipline(48,40,64,26.5),this.createVaultDoor(40,2)}createZipline(t,e,i,n){const r=new we().setFromPoints([new L(t,e,0),new L(i,n,0)]),a=new Qr({color:16436245,linewidth:2}),o=new ac(r,a);this.scene.add(o),this.ziplines.push({startX:t,startY:e,endX:i,endY:n,lineMesh:o})}createVaultDoor(t,e){const i=new it(4,5,1.2),n=new Dt({color:3359061,emissive:988970,roughness:.35,metalness:.15});this.vaultDoorMesh=new U(i,n),this.vaultDoorMesh.position.set(t,e+2.5,0),this.vaultDoorMesh.castShadow=!0,this.vaultDoorMesh.receiveShadow=!0,this.scene.add(this.vaultDoorMesh)}triggerBlackout(){this.isBlackoutActive=!0,this.blackoutTimer=12,this.transformerRepairTimer=35}checkZiplineInteraction(t){if(!(t.isJetFlying||t.actor.isJetFlying||t.stats.isDead))for(let e=0;e<this.ziplines.length;e++){const i=this.ziplines[e],n=t.actor.position.x,r=t.actor.position.y;if(n>=Math.min(i.startX,i.endX)+.5&&n<=Math.max(i.startX,i.endX)-1.2){const a=(n-i.startX)/(i.endX-i.startX),o=i.startY+a*(i.endY-i.startY);if(t.actor.velocity.y<-.3&&Math.abs(r-o)<.5){const c=i.endX>i.startX?1:-1;t.actor.velocity.x=c*16,t.actor.velocity.y=(i.endY-i.startY)*.35,t.mesh.triggerThrusterBurst(!0)}}}}update(t,e){this.isBlackoutActive&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&(this.isBlackoutActive=!1,e(!1))),this.transformerRepairTimer>0&&(this.transformerRepairTimer-=t)}}class R_{constructor(t){x(this,"group");x(this,"casings",[]);x(this,"sparks",[]);x(this,"shockwaves",[]);x(this,"smokePuffs",[]);x(this,"meleeSlashes",[]);x(this,"casingGeom");x(this,"casingMat");x(this,"sparkGeom");x(this,"sparkMat");x(this,"smokeGeom");x(this,"smokeMat");x(this,"shockwaveGeom");x(this,"slashGeom");x(this,"slashMat");this.group=new Jt,t.add(this.group),this.casingGeom=new zt(.025,.025,.1,8),this.casingMat=new Dt({color:16096779,roughness:.25,metalness:.1,emissive:14251782,emissiveIntensity:.5}),this.sparkGeom=new Ii(.06,6,6),this.sparkMat=new jt({color:16755200,transparent:!0,opacity:.95}),this.smokeGeom=new Ii(.22,7,7),this.smokeMat=new jt({color:14870768,transparent:!0,opacity:.65,depthWrite:!1}),this.shockwaveGeom=new qi(.2,.5,24),this.slashGeom=new qi(1.6,3.4,32,1,-Math.PI*.44,Math.PI*.88),this.slashMat=new jt({color:3718648,transparent:!0,opacity:.95,side:ke,blending:Gs,depthWrite:!1})}spawnBrassCasing(t,e,i){const n=new U(this.casingGeom,this.casingMat);n.position.set(t,e,.15),this.group.add(n);const r=i?-1:1;this.casings.push({mesh:n,vx:r*(2.5+Math.random()*3),vy:5+Math.random()*4,vz:(Math.random()-.5)*3.5,rx:Math.random()*25,ry:Math.random()*25,rz:Math.random()*25,life:0})}spawnSparks(t,e,i,n,r=8){for(let a=0;a<r;a++){const o=new U(this.sparkGeom,this.sparkMat);o.position.set(t,e,(Math.random()-.5)*.4),this.group.add(o);const c=Math.atan2(n,i)+(Math.random()-.5)*1.5,l=5+Math.random()*12;this.sparks.push({mesh:o,vx:Math.cos(c)*l,vy:Math.sin(c)*l,vz:(Math.random()-.5)*7,life:0,maxLife:.28+Math.random()*.25})}}spawnExplosionShockwave(t,e){const i=new jt({color:16733440,transparent:!0,opacity:.9,side:ke}),n=new U(this.shockwaveGeom,i);n.position.set(t,e,.1),this.group.add(n),this.shockwaves.push({mesh:n,radius:.5,maxRadius:5.5,alpha:1})}spawnJetpackSmoke(t,e,i=0,n=-2.5){if(this.smokePuffs.length>25){const a=this.smokePuffs.shift();a&&this.group.remove(a.mesh)}const r=new U(this.smokeGeom,this.smokeMat);r.position.set(t+(Math.random()-.5)*.25,e+(Math.random()-.5)*.15,-.1),this.group.add(r),this.smokePuffs.push({mesh:r,vx:i*.2+(Math.random()-.5)*1.5,vy:n+(Math.random()-.5)*1,life:0,maxLife:.38+Math.random()*.15})}spawnMeleeSlashArc(t,e,i,n=!1){const r=this.slashMat.clone();n&&r.color.setHex(16096779);const a=new U(this.slashGeom,r);a.position.set(t+Math.cos(i)*.7,e+.95+Math.sin(i)*.7,.25),a.rotation.z=i,a.scale.set(.65,.65,1),this.group.add(a),this.meleeSlashes.push({mesh:a,life:0,maxLife:.22,startScale:.65});const o=Math.cos(i),c=Math.sin(i);this.spawnSparks(t+o*2,e+.95+c*2,o,c,8)}update(t,e){for(let n=this.casings.length-1;n>=0;n--){const r=this.casings[n];r.life+=t,r.vy+=-30*t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t,r.mesh.position.z+=r.vz*t,r.mesh.rotation.x+=r.rx*t,r.mesh.rotation.y+=r.ry*t;const a=Math.floor(r.mesh.position.x),o=Math.floor(r.mesh.position.y);e.isSolid(a,o)&&r.vy<0&&(r.vy=-r.vy*.45,r.vx*=.6,r.vz*=.6),(r.life>1.5||this.casings.length>30)&&(this.group.remove(r.mesh),this.casings.splice(n,1))}for(let n=this.sparks.length-1;n>=0;n--){const r=this.sparks[n];r.life+=t,r.vy+=-30*.5*t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t,r.mesh.position.z+=r.vz*t;const a=Math.max(0,1-r.life/r.maxLife);r.mesh.scale.set(a,a,a),(r.life>=r.maxLife||this.sparks.length>35)&&(this.group.remove(r.mesh),this.sparks.splice(n,1))}for(let n=this.shockwaves.length-1;n>=0;n--){const r=this.shockwaves[n];r.radius+=t*16,r.alpha=Math.max(0,1-r.radius/r.maxRadius),r.mesh.scale.set(r.radius,r.radius,1),r.mesh.material.opacity=r.alpha,r.radius>=r.maxRadius&&(this.group.remove(r.mesh),r.mesh.material.dispose(),this.shockwaves.splice(n,1))}for(let n=this.smokePuffs.length-1;n>=0;n--){const r=this.smokePuffs[n];r.life+=t,r.mesh.position.x+=r.vx*t,r.mesh.position.y+=r.vy*t;const a=r.life/r.maxLife,o=Math.max(0,(1-a)*(.8+a*2.2));r.mesh.scale.set(o,o,o),r.life>=r.maxLife&&(this.group.remove(r.mesh),this.smokePuffs.splice(n,1))}for(let n=this.meleeSlashes.length-1;n>=0;n--){const r=this.meleeSlashes[n];r.life+=t;const a=r.life/r.maxLife,o=r.startScale+a*.75;r.mesh.scale.set(o,o,1),r.mesh.material.opacity=Math.max(0,(1-a)*.95),r.life>=r.maxLife&&(this.group.remove(r.mesh),r.mesh.material.dispose(),this.meleeSlashes.splice(n,1))}}}const Ce=class Ce{constructor(t,e,i,n,r,a,o=!1,c,l){x(this,"mesh");x(this,"vx");x(this,"vy");x(this,"weaponDef");x(this,"shooterId");x(this,"isDead",!1);x(this,"life",0);x(this,"maxLife",3);x(this,"bouncesLeft",0);x(this,"piercingLeft",0);x(this,"isBunkerRpg",!1);x(this,"embeddedTimer",-1);x(this,"originX");x(this,"originY");x(this,"isFirstFrame",!0);x(this,"hitPlayerIds",new Set);Ce.initSharedResources(),this.weaponDef=e,this.shooterId=i,this.bouncesLeft=e.bounces||0,this.piercingLeft=e.piercing||0,this.isBunkerRpg=e.id===W.BUNKER_RPG,this.originX=c,this.originY=l;const h=a+(Math.random()-.5)*e.spread;this.vx=Math.cos(h)*e.speed,this.vy=Math.sin(h)*e.speed;let d,u;e.id===W.RICOCHET_SAW?(d=Ce.sawGeom,u=Ce.sawMat):e.id===W.RAIL_SNIPER?(d=Ce.sniperGeom,u=Ce.sniperMat):e.id===W.BUNKER_RPG?(d=Ce.rpgGeom,u=Ce.rpgMat):(d=Ce.bulletGeom,u=o?Ce.enemyBulletMat:Ce.friendlyBulletMat),this.mesh=new U(d,u),this.mesh.position.set(n,r,.1),this.mesh.rotation.z=h,t.add(this.mesh)}static initSharedResources(){this.bulletGeom||(this.sawGeom=new zt(.32,.32,.06,12),this.sawGeom.rotateX(Math.PI*.5),this.sawMat=new Dt({color:3718648,emissive:165063,emissiveIntensity:4,metalness:.1}),this.sniperGeom=new zt(.06,.06,1.6,8),this.sniperGeom.rotateZ(Math.PI*.5),this.sniperMat=new Dt({color:16711748,emissive:16711748,emissiveIntensity:4.5}),this.rpgGeom=new Rn(.16,.6,10),this.rpgGeom.rotateZ(-Math.PI*.5),this.rpgMat=new Dt({color:16733440,emissive:16724736,emissiveIntensity:3.5}),this.bulletGeom=new zt(.045,.045,.5,6),this.bulletGeom.rotateZ(Math.PI*.5),this.friendlyBulletMat=new Dt({color:62206,emissive:62206,emissiveIntensity:3.5}),this.enemyBulletMat=new Dt({color:16719446,emissive:16719446,emissiveIntensity:3.5}))}update(t,e,i,n,r,a){if(this.isDead)return;if(this.life+=t,this.life>=this.maxLife){this.isDead=!0;return}if(this.embeddedTimer>0){this.embeddedTimer-=t,this.embeddedTimer<=0&&(a(this.mesh.position.x,this.mesh.position.y),this.isDead=!0);return}const o=this.mesh.position.x,c=this.mesh.position.y,l=this.isFirstFrame&&this.originX!==void 0?this.originX:o,h=this.isFirstFrame&&this.originY!==void 0?this.originY:c,d=this.isFirstFrame;this.isFirstFrame=!1;const u=o+this.vx*t,f=c+this.vy*t;this.mesh.position.x=u,this.mesh.position.y=f,this.weaponDef.id===W.RICOCHET_SAW&&(this.mesh.rotation.z+=t*30);const g=u-l,v=f-h,m=g*g+v*v;for(let I=0;I<i.length;I++){const C=i[I];if(C.stats.id===this.shooterId||C.stats.isDead||this.hitPlayerIds.has(C.stats.id))continue;const R=C.actor.position.x,P=C.actor.position.y+.95;let _=0;m>1e-4&&(_=((R-l)*g+(P-h)*v)/m,_=Math.max(0,Math.min(1,_)));const y=l+_*g,A=h+_*v,O=R-y,D=P-A;if(Math.abs(O)<.8&&Math.abs(D)<1.25)if(this.hitPlayerIds.add(C.stats.id),r(C,this.weaponDef.damage),this.isBunkerRpg&&a(y,A),this.piercingLeft>0)this.piercingLeft--;else{this.isDead=!0;return}}const p=u-o,T=f-c,S=p*p+T*T,M=Math.max(2,Math.ceil(Math.sqrt(S)));for(let I=1;I<=M;I++){const C=I/M,R=o+p*C,P=c+T*C,_=Math.floor(R),y=Math.floor(P);if(e.isSolid(_,y)){if(d&&this.originX!==void 0&&this.originY!==void 0&&Math.hypot(R-this.originX,P-this.originY)<.65)continue;const A=this.weaponDef.damage*this.weaponDef.wallDmgMultiplier;if(n(_,y,A),this.bouncesLeft>0){this.bouncesLeft--;const O=Math.floor(o),D=Math.floor(c);O!==_&&(this.vx=-this.vx),D!==y&&(this.vy=-this.vy);return}if(this.piercingLeft>0){this.piercingLeft--;return}if(this.isBunkerRpg&&this.embeddedTimer<0){this.vx=0,this.vy=0,this.embeddedTimer=.35;return}this.isDead=!0;return}}}destroy(t){t.remove(this.mesh)}};x(Ce,"sawGeom",null),x(Ce,"sawMat",null),x(Ce,"sniperGeom",null),x(Ce,"sniperMat",null),x(Ce,"rpgGeom",null),x(Ce,"rpgMat",null),x(Ce,"bulletGeom",null),x(Ce,"friendlyBulletMat",null),x(Ce,"enemyBulletMat",null);let Co=Ce;const Si=class Si{constructor(t,e,i,n,r,a){x(this,"mesh");x(this,"ledLight");x(this,"type");x(this,"ownerId");x(this,"isStuck",!1);x(this,"isDetonated",!1);x(this,"vx",0);x(this,"vy",0);x(this,"timer",0);Si.initSharedResources(),this.type=e,this.ownerId=i;const o=28;this.vx=Math.cos(a)*o,this.vy=Math.sin(a)*o+6.5;const c=e==="c4"?Si.c4Mat:e==="emp"?Si.empMat:Si.teargasMat;this.mesh=new U(Si.sharedGeom,c),this.mesh.position.set(n,r,0),t.add(this.mesh);const l=e==="c4"?15680580:e==="emp"?3718648:2278750;this.ledLight=new s_(l,2,4),this.mesh.add(this.ledLight)}static initSharedResources(){this.sharedGeom||(this.sharedGeom=new it(.35,.22,.2),this.c4Mat=new Dt({color:4144966,roughness:.4}),this.empMat=new Dt({color:165063,roughness:.4}),this.teargasMat=new Dt({color:1409085,roughness:.4}))}update(t,e){if(this.isDetonated)return;this.timer+=t;const i=Math.sin(this.timer*16)>0;if(this.ledLight.intensity=i?3.5:.2,!this.isStuck){this.vy+=-24*t,this.mesh.position.x+=this.vx*t,this.mesh.position.y+=this.vy*t,this.mesh.rotation.z+=t*6;const n=Math.floor(this.mesh.position.x),r=Math.floor(this.mesh.position.y);e.isSolid(n,r)&&(this.isStuck=!0,this.vx=0,this.vy=0)}}detonate(t,e,i,n,r,a){if(this.isDetonated)return;this.isDetonated=!0,i();const o=this.mesh.position.x,c=this.mesh.position.y;if(this.type==="c4"){const l=Math.floor(o),h=Math.floor(c);for(let d=-2;d<=2;d++)for(let u=-2;u<=2;u++)t.destroyTile(l+u,h+d);r&&Math.hypot(o-40,c-3.5)<6.5&&r(450),e.forEach(d=>{const u=d.actor.position.distanceTo(this.mesh.position);if(u<10){if(n!=null&&n.stats.team&&d.stats.team&&n.stats.team!=="none"&&d.stats.team!=="none"&&n.stats.team===d.stats.team)return;const f=Math.round(240*(1-u/10));d.takeDamage(f,n)&&a&&a(d,n)}})}else this.type==="emp"&&e.forEach(l=>{l.actor.position.distanceTo(this.mesh.position)<8&&(l.stats.rigCooldownTimer=8)})}destroy(t){this.ledLight&&(this.mesh.remove(this.ledLight),this.ledLight.dispose()),t.remove(this.mesh)}};x(Si,"sharedGeom",null),x(Si,"c4Mat",null),x(Si,"empMat",null),x(Si,"teargasMat",null);let Ro=Si;class P_{constructor(t,e,i){x(this,"scene");x(this,"projectiles",[]);x(this,"throwables",[]);x(this,"particles");x(this,"audio");x(this,"onDamageDealt");x(this,"onVaultHit");this.scene=t,this.particles=e,this.audio=i}fireWeapon(t,e,i,n,r,a,o){if(t.stats.isDead||t.stats.isLocalPlayer&&(t.fireCooldown>0||t.reloadTimer>0))return!1;const c=He[t.stats.activeWeapon];if(c.id===W.CUTLASS)return t.fireCooldown=c.fireInterval,this.audio.playMeleeSwish(),this.particles.spawnMeleeSlashArc(t.actor.position.x,t.actor.position.y,e),t.performMeleeLunge(e,i,(S,M)=>{const I=S.takeDamage(M,t);this.audio.playGunshot("saw"),this.particles.spawnSparks(S.actor.position.x,S.actor.position.y+1,5,5,12),this.onDamageDealt&&this.onDamageDealt(S.actor.position.x,S.actor.position.y+1.5,`SLICED -${M}!`,"#f59e0b"),I&&(t.stats.cash+=5e4,this.onDamageDealt&&this.onDamageDealt(S.actor.position.x,S.actor.position.y+2,"BOUNTY STEAL! +₦50,000","#10b981"),n&&n(S,t))},r),Math.hypot(t.actor.position.x-40,t.actor.position.y-3.5)<4.8&&this.onVaultHit&&(this.onVaultHit(150),this.audio.playGunshot("saw"),this.particles.spawnSparks(40,3.5,0,1,15),this.onDamageDealt&&this.onDamageDealt(40,5,"VAULT MELEE BREACH -150!","#f59e0b")),!0;const l=t.stats.ammo[c.id]??0;if(t.stats.isLocalPlayer&&l<=0)return t.reloadWeapon(),!1;c.id!==W.PISTOL_XAG9&&t.stats.isLocalPlayer&&t.stats.ammo[c.id]--,t.fireCooldown=c.fireInterval,t.mesh.triggerRecoilKick(c.recoilKick);const h=Math.cos(e)>=0;this.particles.spawnBrassCasing(t.actor.position.x,t.actor.position.y+.95,h);const d=c.pellets||1,u=a!==void 0?a:t.actor.position.x,f=o!==void 0?o:t.actor.position.y+.95,g=u+Math.cos(e)*.25,v=f+Math.sin(e)*.25,m=i==null?void 0:i.find(T=>T.stats.isLocalPlayer),p=m&&m.stats.team&&t.stats.team&&m.stats.team!=="none"&&t.stats.team!=="none"?m.stats.team!==t.stats.team:!t.stats.isLocalPlayer;for(let T=0;T<d;T++){const S=new Co(this.scene,c,t.stats.id,g,v,e,p,u,f);this.projectiles.push(S)}return c.id===W.SHOTGUN_AA12?this.audio.playGunshot("shotgun"):c.id===W.RAIL_SNIPER?this.audio.playGunshot("sniper"):c.id===W.RICOCHET_SAW?this.audio.playGunshot("saw"):c.id===W.VULCAN_MINIGUN?this.audio.playGunshot("minigun"):c.id===W.PISTOL_XAG9||c.id===W.REVOLVER_JUDGE?this.audio.playGunshot("pistol"):this.audio.playGunshot("rifle"),c.id===W.VULCAN_MINIGUN&&(t.actor.velocity.x-=Math.cos(e)*5,t.actor.velocity.y-=Math.sin(e)*5),!0}handleThrowable(t,e,i,n,r){const a=this.throwables.find(o=>o.ownerId===t.stats.id&&o.type==="c4"&&!o.isDetonated);if(a){a.detonate(i,n,()=>{this.audio.playExplosion(),this.particles.spawnExplosionShockwave(a.mesh.position.x,a.mesh.position.y),i.spawnDebrisBurst(a.mesh.position.x,a.mesh.position.y,Q.BRICK_CONCRETE),this.onDamageDealt&&this.onDamageDealt(a.mesh.position.x,a.mesh.position.y+1.5,"C4 DETONATED! 💥","#ef4444")},t,this.onVaultHit,r);return}if(t.stats.c4Count>0){t.stats.c4Count--;const o=new Ro(this.scene,"c4",t.stats.id,t.actor.position.x,t.actor.position.y+.95,e);this.throwables.push(o),this.audio.playC4Beep()}}update(t,e,i,n){for(let r=this.projectiles.length-1;r>=0;r--){const a=this.projectiles[r];if(this.onVaultHit&&!a.isDead&&Math.hypot(a.mesh.position.x-40,a.mesh.position.y-3.5)<4.5){const c=a.weaponDef.damage*a.weaponDef.wallDmgMultiplier;this.onVaultHit(c),this.particles.spawnSparks(a.mesh.position.x,a.mesh.position.y,-a.vx,-a.vy,8),a.isDead=!0,this.onDamageDealt&&this.onDamageDealt(40,5,`VAULT -${Math.round(c)}`,"#f59e0b")}a.update(t,e,i,(o,c,l)=>{const h=e.damageTile(o,c,l);if(this.particles.spawnSparks(o+.5,c+.5,-a.vx,-a.vy,5),h){const d=i.find(u=>u.stats.id===a.shooterId);d&&d.stats.wallsDestroyed++}},(o,c)=>{const l=i.find(d=>d.stats.id===a.shooterId);if(l&&l.stats.team&&o.stats.team&&l.stats.team!=="none"&&o.stats.team!=="none"&&l.stats.team===o.stats.team)return;const h=o.takeDamage(c,l);if(this.particles.spawnSparks(o.actor.position.x,o.actor.position.y+1,-a.vx,-a.vy,10),this.onDamageDealt){const d=c>50;this.onDamageDealt(o.actor.position.x,o.actor.position.y+1.4,d?`CRIT -${c}!`:`-${c}`,d?"#f59e0b":"#ef4444")}h&&(this.onDamageDealt&&l&&this.onDamageDealt(o.actor.position.x,o.actor.position.y+2,"ELIMINATED! +₦15,000","#10b981"),n(o,l))},(o,c)=>{this.audio.playExplosion(),this.particles.spawnExplosionShockwave(o,c),e.spawnDebrisBurst(o,c,Q.BRICK_CONCRETE),this.onVaultHit&&Math.hypot(o-40,c-3.5)<7&&(this.onVaultHit(400),this.onDamageDealt&&this.onDamageDealt(40,5.5,"VAULT BLAST -400!","#f97316")),i.forEach(l=>{const h=Math.hypot(l.actor.position.x-o,l.actor.position.y-c);if(h<6){const d=Math.round(120*(1-h/6)),u=l.takeDamage(d);this.onDamageDealt&&this.onDamageDealt(l.actor.position.x,l.actor.position.y+1.2,`-${d}`,"#f97316"),u&&n(l)}})}),a.isDead&&(a.destroy(this.scene),this.projectiles.splice(r,1))}for(let r=this.throwables.length-1;r>=0;r--){const a=this.throwables[r];a.update(t,e),a.isDetonated&&(a.destroy(this.scene),this.throwables.splice(r,1))}}}class I_{constructor(t){x(this,"scene");x(this,"anchorMesh",null);x(this,"glitchAnchorPos",null);x(this,"glitchAnchorTimer",0);this.scene=t,this.initGlitchBeacon()}initGlitchBeacon(){const t=new lc(.35),e=new Dt({color:11032055,emissive:11032055,emissiveIntensity:3.5,wireframe:!0});this.anchorMesh=new U(t,e),this.anchorMesh.visible=!1,this.scene.add(this.anchorMesh)}activateRig(t,e,i,n,r){switch(t.stats.rigType){case xt.BREACH_BOOSTER:return this.activateBreachBooster(t,e,i,n,r);case xt.OVERDRIVE_SLIDE:return this.activateOverdriveSlide(t,i,n,r);case xt.PHASE_DASH:return this.activatePhaseDash(t,e,i,n,r);case xt.GLITCH_ANCHOR:return this.activateGlitchAnchor(t,r);default:return{activated:!1,popupText:""}}}activateBreachBooster(t,e,i,n,r){const a=t.mesh.rootGroup.scale.x>=0?1:-1,o=Math.abs(n)>.1?Math.sign(n):Math.abs(Math.cos(i))>.25?Math.sign(Math.cos(i)):a,c=t.actor.isGrounded?.35:Math.sin(i);t.actor.velocity.x=o*28,t.actor.velocity.y=Math.max(c*22,9),t.rigBoostTimer=.45,t.mesh.triggerThrusterBurst(!0),r&&r.triggerBreachZoom();const l=Math.round(t.actor.position.x+o*1.2),h=Math.round(t.actor.position.y);let d=!1;for(let u=0;u<4;u++){const f=l+Math.round(o*u),g=h,v=e.getTile(f,g);(v===Q.BRICK_CONCRETE||v===Q.WOOD_SCAFFOLD||v===Q.GLASS_WINDOW)&&(e.destroyTile(f,g),d=!0)}return d&&r&&r.addTrauma(.25),setTimeout(()=>{t.mesh.triggerThrusterBurst(!1)},450),{activated:!0,popupText:"⚡ BREACH BOOSTER!"}}activateOverdriveSlide(t,e,i,n){const r=t.mesh.rootGroup.scale.x>=0?1:-1,a=i!==0?Math.sign(i):Math.abs(Math.cos(e))>.2?Math.sign(Math.cos(e)):r;return t.actor.velocity.x=a*26,t.isSliding=!0,t.slideTimer=.6,t.rigBoostTimer=.45,t.mesh.triggerThrusterBurst(!0),n&&(n.triggerSlideZoom(!0),setTimeout(()=>{n.triggerSlideZoom(!1)},600)),setTimeout(()=>{t.mesh.triggerThrusterBurst(!1)},450),{activated:!0,popupText:"⚡ OVERDRIVE SLIDE!"}}activatePhaseDash(t,e,i,n,r){const a=t.mesh.rootGroup.scale.x>=0?1:-1,o=Math.abs(n)>.1?Math.sign(n):Math.abs(Math.cos(i))>.2?Math.sign(Math.cos(i)):a,c=t.actor.isGrounded?0:Math.sin(i),l=hi.clamp(t.actor.position.x+o*9,2,e.width-3),h=hi.clamp(t.actor.position.y+c*4.5,3,e.height-3);return t.actor.position.set(l,h,0),t.actor.velocity.set(o*14,6,0),t.actor.isPhasing=!0,t.rigBoostTimer=.35,r&&r.triggerPhaseSnap(l,h),t.mesh.rootGroup.traverse(d=>{if(d.material){const u=d.material;u.transparent=!0,u.opacity=.35}}),setTimeout(()=>{t.actor.isPhasing=!1,t.mesh.rootGroup.traverse(d=>{if(d.material){const u=d.material;u.opacity=1}})},1e3),{activated:!0,popupText:"⚡ PHASE DASH!"}}activateGlitchAnchor(t,e){return this.glitchAnchorPos?(t.actor.position.copy(this.glitchAnchorPos),t.actor.velocity.set(0,8,0),t.stats.hp=Math.min(t.stats.maxHp,t.stats.hp+40),this.glitchAnchorPos=null,this.anchorMesh&&(this.anchorMesh.visible=!1),e&&e.triggerAnchorSlingshot(),{activated:!0,popupText:"⏪ GLITCH RECALL (+40 HP)!"}):(this.glitchAnchorPos=t.actor.position.clone(),this.glitchAnchorTimer=10,this.anchorMesh&&(this.anchorMesh.position.copy(this.glitchAnchorPos),this.anchorMesh.visible=!0),{activated:!0,popupText:"⚓ ANCHOR PLACED!"})}triggerGroundSlam(t,e,i){if(t.isGrounded)return!1;t.velocity.y=wi.GROUND_SLAM_VELOCITY,t.velocity.x=0,e.triggerThrusterBurst(!0);const n=Math.round(t.position.x),r=Math.floor(t.position.y-.5),a=i.getTile(n,r);return(a===Q.WOOD_SCAFFOLD||a===Q.GLASS_WINDOW)&&i.destroyTile(n,r),!0}update(t){this.anchorMesh&&this.anchorMesh.visible&&(this.anchorMesh.rotation.x+=t*2.5,this.anchorMesh.rotation.y+=t*3.5,this.glitchAnchorTimer-=t,this.glitchAnchorTimer<=0&&(this.glitchAnchorPos=null,this.anchorMesh.visible=!1))}}class L_{constructor(t,e){x(this,"position");x(this,"velocity");x(this,"width",.8);x(this,"height",1.8);x(this,"isGrounded",!1);x(this,"isTouchingWallLeft",!1);x(this,"isTouchingWallRight",!1);x(this,"isPhasing",!1);x(this,"isJetFlying",!1);x(this,"isDead",!1);x(this,"customPhysics",!1);this.position=new L(t,e,0),this.velocity=new L(0,0,0)}updatePhysics(t,e){if(this.isDead)return;if(!this.customPhysics&&!this.isJetFlying&&(this.velocity.y+=wi.GRAVITY*t,this.velocity.y<-26&&(this.velocity.y=-26)),this.isPhasing){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.isGrounded=!1,this.isTouchingWallLeft=!1,this.isTouchingWallRight=!1;return}this.position.x+=this.velocity.x*t,this.isTouchingWallLeft=!1,this.isTouchingWallRight=!1,this.resolveCollisionsX(e);const i=this.position.y;this.position.y+=this.velocity.y*t,this.isGrounded=!1,this.resolveCollisionsY(e,i),this.resolveUnstuck(e),this.customPhysics||(this.isGrounded?this.velocity.x*=.88:this.velocity.x*=.96)}resolveCollisionsX(t){const e=this.width*.5,i=Math.floor(this.position.y+.15),n=Math.floor(this.position.y+this.height-.2);if(this.velocity.x>0){const r=Math.floor(this.position.x+e);let a=!1,o=-1;for(let c=i;c<=n;c++)t.isSolid(r,c)&&(a=!0,o===-1&&(o=c));if(a){const c=o+1,l=c-this.position.y;let h=!1;if(this.isGrounded&&l>.05&&l<=1.05){const d=Math.floor(c+this.height-.15);let u=!1;for(let f=o+1;f<=d;f++)if(t.isSolid(r,f)){u=!0;break}u||(h=!0)}h?(this.position.y=c,this.velocity.y=0,this.position.x+=.08,this.isGrounded=!0):(this.position.x=r-e-.005,this.velocity.x=0,this.isTouchingWallRight=!0)}}else if(this.velocity.x<0){const r=Math.floor(this.position.x-e);let a=!1,o=-1;for(let c=i;c<=n;c++)t.isSolid(r,c)&&(a=!0,o===-1&&(o=c));if(a){const c=o+1,l=c-this.position.y;let h=!1;if(this.isGrounded&&l>.05&&l<=1.05){const d=Math.floor(c+this.height-.15);let u=!1;for(let f=o+1;f<=d;f++)if(t.isSolid(r,f)){u=!0;break}u||(h=!0)}h?(this.position.y=c,this.velocity.y=0,this.position.x-=.08,this.isGrounded=!0):(this.position.x=r+1+e+.005,this.velocity.x=0,this.isTouchingWallLeft=!0)}}this.position.x-e<1?(this.position.x=1+e+.005,this.velocity.x=0,this.isTouchingWallLeft=!0):this.position.x+e>t.width-1&&(this.position.x=t.width-1-e-.005,this.velocity.x=0,this.isTouchingWallRight=!0)}resolveUnstuck(t){const e=Math.floor(this.position.x),i=Math.floor(this.position.y+.5),n=Math.floor(this.position.y+.1),r=this.width*.5;t.isSolid(e,i)&&t.isSolid(e,n)&&(t.isSolid(e,i+1)?t.isSolid(e+1,i)?t.isSolid(e-1,i)||(this.position.x=e-r-.05,this.velocity.x=0):(this.position.x=e+1+r+.05,this.velocity.x=0):(this.position.y=i+1,this.velocity.y=0))}resolveCollisionsY(t,e){const i=this.width*.5,n=Math.floor(this.position.x-i+.14),r=Math.floor(this.position.x+i-.14);if(this.velocity.y<=0){const a=Math.floor(e),o=Math.floor(this.position.y-.05);let c=!1;for(let l=Math.max(a,o);l>=Math.min(a,o);l--){for(let h=n;h<=r;h++)if(t.isSolid(h,l)){if(!t.isSolid(h,l+1)&&e>=l+1-.35){this.position.y=l+1,this.velocity.y=0,this.isGrounded=!0,c=!0;break}}else if(t.isOneWayPlatform(h,l)){const d=l+1;if(!this.isJetFlying&&e>=d-.15&&this.position.y<=d+.1){this.position.y=d,this.velocity.y=0,this.isGrounded=!0,c=!0;break}}if(c)break}!c&&this.position.y<=2&&(this.position.y=2,this.velocity.y=0,this.isGrounded=!0)}else if(this.velocity.y>0){const a=Math.floor(this.position.y+this.height);for(let o=n;o<=r;o++)if(t.isSolid(o,a)){this.position.y=a-this.height-.02,this.velocity.y=0;break}this.position.y>46&&(this.position.y=46,this.velocity.y=0)}}}function D_(s){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle=s?"#1e293b":"#142914",e.fillRect(0,0,128,128);const i=s?["#0f172a","#334155","#475569","#7f1d1d"]:["#2e5328","#1b3b1e","#3d6b35","#4b5523"];for(let r=0;r<35;r++){e.fillStyle=i[r%i.length];const a=Math.floor(Math.random()*128),o=Math.floor(Math.random()*128),c=12+Math.floor(Math.random()*26),l=8+Math.floor(Math.random()*18);e.beginPath(),e.ellipse(a,o,c*.5,l*.5,Math.random()*Math.PI,0,Math.PI*2),e.fill()}const n=new be(t);return n.wrapS=Vi,n.wrapT=Vi,n.repeat.set(2,2),n}function O_(){const s=document.createElement("canvas");s.width=64,s.height=36;const t=s.getContext("2d");return t.fillStyle="#008751",t.fillRect(0,0,21,36),t.fillStyle="#ffffff",t.fillRect(21,0,22,36),t.fillStyle="#008751",t.fillRect(43,0,21,36),t.strokeStyle="#0f172a",t.lineWidth=2,t.strokeRect(1,1,62,34),new be(s)}class U_{constructor(t,e=!1,i="Operative"){x(this,"rootGroup");x(this,"isEnemy");x(this,"torsoGroup");x(this,"headGroup");x(this,"nvgLenses",[]);x(this,"thrusterGroup");x(this,"thrusterFlameL");x(this,"thrusterFlameR");x(this,"crownMesh");x(this,"shoulderGroup");x(this,"rightArm");x(this,"leftArm");x(this,"weaponMount");x(this,"weaponMeshMap",new Map);x(this,"activeWeaponId",W.RIFLE_XAG47);x(this,"weaponSpotLight");x(this,"weaponSpotTarget");x(this,"laserLine");x(this,"crosshairMesh");x(this,"leftLeg");x(this,"rightLeg");x(this,"statusSprite");x(this,"statusCanvas");x(this,"statusCtx");x(this,"statusTexture");x(this,"walkCycle",0);x(this,"recoilOffset",0);x(this,"slashAnimTimer",0);x(this,"isRagdoll",!1);x(this,"ragdollVelocity",new L);x(this,"ragdollAngVel",new L);x(this,"isAlly",!1);x(this,"team","none");x(this,"damageFlashTimer",0);x(this,"underSuitMat");x(this,"armorMat");x(this,"trimMat");x(this,"nvgMat");x(this,"defaultArmorEmissive",413243);this.isEnemy=e,this.isAlly=!e,this.rootGroup=new Jt,t.add(this.rootGroup);const n=D_(e),r=O_(),a=new jt({map:r}),o=new Dt({color:e?5395035:4020789,map:n,emissive:e?1579035:991247,roughness:.65,metalness:.05}),c=new Dt({color:e?10033947:1483594,map:n,emissive:e?4524554:413243,roughness:.5,metalness:.1}),l=e?new jt({color:15680580}):new Dt({color:16317180,emissive:4674921,roughness:.4,metalness:.05}),h=new Dt({color:e?8736014:10576391,emissive:e?3018754:4005125,roughness:.7,metalness:.05}),d=new jt({color:e?15680580:4906624});this.underSuitMat=o,this.armorMat=c,this.trimMat=l,this.nvgMat=d,this.defaultArmorEmissive=e?4524554:413243,this.torsoGroup=new Jt,this.torsoGroup.position.set(0,.95,0),this.rootGroup.add(this.torsoGroup);const u=new U(new it(.52,.62,.4),o);u.castShadow=!0,this.torsoGroup.add(u);const f=new U(new it(.58,.54,.46),c);if(f.castShadow=!0,this.torsoGroup.add(f),!e){const kt=new U(new ti(.18,.1),a);kt.position.set(0,.08,.24),this.torsoGroup.add(kt);const Nt=new U(new ti(.14,.08),a);Nt.position.set(-.34,.1,.12),Nt.rotation.y=-Math.PI*.35,this.torsoGroup.add(Nt)}const g=new U(new it(.08,.15,.07),o);g.position.set(-.2,.28,-.12),this.torsoGroup.add(g);const v=new U(new zt(.008,.008,.32,6),o);v.position.set(-.2,.45,-.12),this.torsoGroup.add(v);const m=new U(new it(.59,.1,.47),l);m.position.set(0,-.22,0),this.torsoGroup.add(m);for(let kt=-1;kt<=1;kt++){const Nt=new U(new it(.13,.16,.08),c);Nt.position.set(kt*.16,-.06,.25),this.torsoGroup.add(Nt)}const p=new U(new it(.18,.18,.24),c);p.position.set(-.33,.2,0),this.torsoGroup.add(p);const T=new U(new it(.2,.04,.25),l);T.position.set(-.33,.29,0),this.torsoGroup.add(T);const S=new U(new it(.18,.18,.24),c);S.position.set(.33,.2,0),this.torsoGroup.add(S);const M=new U(new it(.2,.04,.25),l);M.position.set(.33,.29,0),this.torsoGroup.add(M),this.thrusterGroup=new Jt,this.thrusterGroup.position.set(0,.05,-.26),this.torsoGroup.add(this.thrusterGroup);const I=new U(new it(.42,.44,.16),c);I.castShadow=!0,this.thrusterGroup.add(I);const C=new zt(.07,.1,.18,10),R=new Dt({color:9741240,emissive:1976635,metalness:.1,roughness:.3}),P=new U(C,R);P.position.set(-.13,-.24,0),this.thrusterGroup.add(P);const _=new U(C,R);_.position.set(.13,-.24,0),this.thrusterGroup.add(_);const y=new Rn(.11,.55,8);y.rotateX(Math.PI);const A=new jt({color:16755200,transparent:!0,opacity:0});this.thrusterFlameL=new U(y,A),this.thrusterFlameL.position.set(-.13,-.52,0),this.thrusterGroup.add(this.thrusterFlameL),this.thrusterFlameR=new U(y,A.clone()),this.thrusterFlameR.position.set(.13,-.52,0),this.thrusterGroup.add(this.thrusterFlameR),this.headGroup=new Jt,this.headGroup.position.set(0,.44,0),this.torsoGroup.add(this.headGroup);const O=new Ii(.24,16,14),D=new U(O,h);if(D.castShadow=!0,this.headGroup.add(D),e){const kt=new Ii(.27,16,12,0,Math.PI*2,0,Math.PI*.58),Nt=new U(kt,c);Nt.position.set(0,.03,0),Nt.castShadow=!0,this.headGroup.add(Nt);const Rt=new zt(.285,.285,.045,16,1,!1,0,Math.PI),re=new U(Rt,l);re.position.set(0,.04,.08),re.rotation.x=.2,this.headGroup.add(re);const Lt=new U(new it(.34,.09,.08),o);Lt.position.set(0,.12,.22),this.headGroup.add(Lt);const w=new U(new it(.3,.06,.04),d);w.position.set(0,.12,.26),this.headGroup.add(w),this.nvgLenses.push(w)}else{const kt=new zt(.26,.21,.11,16);kt.scale(1.15,.8,1.1);const Nt=new Dt({color:20526,roughness:.75,metalness:.05,emissive:9750,emissiveIntensity:.35}),Rt=new U(kt,Nt);Rt.position.set(.04,.16,.02),Rt.rotation.z=-.22,Rt.rotation.x=-.08,Rt.castShadow=!0,this.headGroup.add(Rt);const re=new it(.06,.08,.02),Lt=new Dt({color:16436245,metalness:.4,roughness:.3,emissive:8736014}),w=new U(re,Lt);w.position.set(-.14,.16,.18),w.rotation.y=-.3,this.headGroup.add(w);const b=new Dt({color:1976635,roughness:.5}),V=new U(new zt(.06,.06,.04,8),b);V.position.set(-.25,.02,0),V.rotation.z=Math.PI*.5,this.headGroup.add(V);const et=new U(new zt(.01,.01,.18,6),b);et.position.set(-.23,-.06,.1),et.rotation.x=.5,this.headGroup.add(et)}const G=new zt(.26,.18,.18,6),X=new Dt({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.12,roughness:.2});this.crownMesh=new U(G,X),this.crownMesh.position.set(0,.44,0),this.crownMesh.visible=!1,this.headGroup.add(this.crownMesh),this.shoulderGroup=new Jt,this.shoulderGroup.position.set(0,.16,0),this.torsoGroup.add(this.shoulderGroup),this.rightArm=new Jt,this.leftArm=new Jt,this.shoulderGroup.add(this.rightArm),this.shoulderGroup.add(this.leftArm);const z=new it(.14,.44,.16),K=new U(z,o);K.position.set(.32,-.16,0),K.castShadow=!0,this.rightArm.add(K);const H=new U(new it(.15,.12,.17),l);H.position.set(.32,-.32,0),this.rightArm.add(H);const st=new U(z,o);st.position.set(-.32,-.16,0),st.castShadow=!0,this.leftArm.add(st);const q=new U(new it(.15,.12,.17),l);q.position.set(-.32,-.32,0),this.leftArm.add(q),this.weaponMount=new Jt,this.weaponMount.position.set(.28,-.2,.38),this.shoulderGroup.add(this.weaponMount),this.buildProceduralWeapons(),this.weaponSpotLight=new kh(16775917,.8,25,.4,.5,1.5),this.weaponSpotLight.castShadow=!1,this.weaponMount.add(this.weaponSpotLight),this.weaponSpotTarget=new Ee,this.weaponSpotTarget.position.set(12,0,0),this.weaponMount.add(this.weaponSpotTarget),this.weaponSpotLight.target=this.weaponSpotTarget;const J=new we().setFromPoints([new L(0,0,0),new L(28,0,0)]),ct=new Qr({color:16711748,transparent:!0,opacity:.85});this.laserLine=new ac(J,ct),this.weaponMount.add(this.laserLine);const Et=new qi(.12,.18,12),j=new jt({color:16711748,side:ke,transparent:!0,opacity:.9});this.crosshairMesh=new U(Et,j),this.crosshairMesh.position.set(28,0,0),this.crosshairMesh.rotateY(Math.PI*.5),this.weaponMount.add(this.crosshairMesh),this.leftLeg=new Jt,this.rightLeg=new Jt,this.leftLeg.position.set(-.18,.65,0),this.rightLeg.position.set(.18,.65,0),this.rootGroup.add(this.leftLeg),this.rootGroup.add(this.rightLeg);const at=new it(.18,.68,.2),vt=new U(at,o);vt.position.set(0,-.34,0),vt.castShadow=!0,this.leftLeg.add(vt);const dt=new U(new it(.2,.16,.08),c);dt.position.set(0,-.32,.12),this.leftLeg.add(dt);const Ot=new U(at,o);Ot.position.set(0,-.34,0),Ot.castShadow=!0,this.rightLeg.add(Ot);const Ft=new U(new it(.2,.16,.08),c);Ft.position.set(0,-.32,.12),this.rightLeg.add(Ft);const Yt=new it(.2,.2,.28),ve=new U(Yt,c);ve.position.set(0,-.62,.04),this.leftLeg.add(ve);const Zt=new U(new it(.21,.05,.29),l);Zt.position.set(0,-.72,.04),this.leftLeg.add(Zt);const Te=new U(Yt,c);Te.position.set(0,-.62,.04),this.rightLeg.add(Te);const F=new U(new it(.21,.05,.29),l);F.position.set(0,-.72,.04),this.rightLeg.add(F),this.statusCanvas=document.createElement("canvas"),this.statusCanvas.width=256,this.statusCanvas.height=96,this.statusCtx=this.statusCanvas.getContext("2d"),this.statusTexture=new be(this.statusCanvas),this.statusTexture.minFilter=ai;const je=new Jr({map:this.statusTexture,transparent:!0,depthTest:!1});this.statusSprite=new rc(je),this.statusSprite.position.set(0,2.2,0),this.statusSprite.scale.set(1.8,.68,1),this.rootGroup.add(this.statusSprite),this.updateStatusBillboard(100,100,50,50,i,!1)}setTeam(t,e){this.team=t,this.isAlly=e,this.isEnemy=!e,t==="blue"?(this.armorMat.color.setHex(1920728),this.defaultArmorEmissive=1981066,this.armorMat.emissive.setHex(1981066),(this.trimMat instanceof jt||this.trimMat instanceof Dt)&&this.trimMat.color.setHex(3718648),this.nvgMat.color.setHex(3718648)):t==="red"?(this.armorMat.color.setHex(10033947),this.defaultArmorEmissive=4524554,this.armorMat.emissive.setHex(4524554),(this.trimMat instanceof jt||this.trimMat instanceof Dt)&&this.trimMat.color.setHex(15680580),this.nvgMat.color.setHex(15680580)):e?(this.armorMat.color.setHex(1483594),this.defaultArmorEmissive=413243,this.armorMat.emissive.setHex(413243),(this.trimMat instanceof jt||this.trimMat instanceof Dt)&&this.trimMat.color.setHex(16317180),this.nvgMat.color.setHex(4906624)):(this.armorMat.color.setHex(10033947),this.defaultArmorEmissive=4524554,this.armorMat.emissive.setHex(4524554),(this.trimMat instanceof jt||this.trimMat instanceof Dt)&&this.trimMat.color.setHex(15680580),this.nvgMat.color.setHex(15680580))}triggerDamageFlash(){this.damageFlashTimer=.12,this.armorMat.emissive.setHex(16777215),this.armorMat.emissiveIntensity=2}updateStatusBillboard(t,e,i,n,r,a){const o=this.statusCtx;o.clearRect(0,0,256,96),o.fillStyle="rgba(5, 8, 6, 0.90)";let c="rgba(239, 68, 68, 0.85)",l="#ef4444",h="";this.team==="blue"?(c="rgba(56, 189, 248, 0.90)",l="#38bdf8",h=this.isAlly?"[BLUE ALLY] ":"[BLUE] "):this.team==="red"?(c="rgba(239, 68, 68, 0.90)",l="#ef4444",h=this.isAlly?"[RED ALLY] ":"[RED] "):this.isAlly?(c="rgba(34, 197, 94, 0.90)",l="#22c55e"):(c="rgba(239, 68, 68, 0.90)",l="#ef4444"),o.strokeStyle=c,o.lineWidth=3,o.beginPath(),o.roundRect(8,8,240,80,10),o.fill(),o.stroke(),o.fillStyle=a?"#22c55e":this.team==="blue"?"#38bdf8":this.team==="red"?"#fca5a5":"#ffffff",o.font='bold 20px "Chakra Petch", "JetBrains Mono", sans-serif',o.textAlign="center",o.fillText(`${h}${r} ${a?"[◆]":""}`,128,34);const d=Math.max(0,t/e);o.fillStyle="#1c2b22",o.fillRect(24,44,208,16),o.fillStyle=l,o.fillRect(24,44,208*d,16);const u=Math.max(0,i/n);o.fillStyle="#0f172a",o.fillRect(24,64,208,8),o.fillStyle="#38bdf8",o.fillRect(24,64,208*u,8),this.statusTexture.needsUpdate=!0}buildProceduralWeapons(){const t=new Dt({color:2565930,emissive:592139,metalness:.85,roughness:.35}),e=new Dt({color:1579035,emissive:592139,metalness:.15,roughness:.7}),i=new Dt({color:4144966,emissive:1579035,metalness:.88,roughness:.28}),n=new Dt({color:7877903,roughness:.45,metalness:.05,emissive:4528643,emissiveIntensity:.25}),r=new Dt({color:7886394,emissive:3022354,metalness:.12,roughness:.6}),a=new Dt({color:15857145,emissive:3359061,metalness:.95,roughness:.18}),o=new jt({color:2278750}),c=new jt({color:15680580}),l=new Dt({color:165063,emissive:223649,roughness:.1,metalness:.9}),h=new Dt({color:14251782,emissive:7877903,metalness:.9,roughness:.22}),d=new Dt({color:3560212,emissive:1318920,metalness:.15,roughness:.65}),u=_=>(_.scale.set(1.35,1.35,1.35),_),f=()=>{const _=new Jt,y=new U(new it(.88,.07,.025),a);y.position.set(.5,.02,0),_.add(y);const A=new U(new Rn(.045,.18,4),a);A.rotateZ(-Math.PI*.5),A.position.set(.98,.02,0),_.add(A);const O=new U(new it(.72,.015,.028),t);O.position.set(.44,.02,0),_.add(O);const D=new U(new it(.05,.26,.06),h);D.position.set(.05,.02,0),_.add(D);const G=new U(new zt(.028,.032,.22,8),n);G.rotateZ(Math.PI*.5),G.position.set(-.06,.02,0),_.add(G);const X=new U(new Ii(.04,8,8),h);return X.position.set(-.18,.02,0),_.add(X),u(_)},g=()=>{const _=new Jt,y=new U(new it(.36,.09,.075),i);y.position.set(.09,.05,0),_.add(y);const A=new U(new it(.32,.06,.072),e);A.position.set(.07,0,0),_.add(A);const O=new U(new it(.08,.2,.07),e);O.position.set(-.04,-.11,0),O.rotateZ(-.25),_.add(O);const D=new U(new it(.12,.08,.02),e);D.position.set(.08,-.05,0),_.add(D);const G=new U(new zt(.022,.022,.08,8),t);G.rotateZ(Math.PI*.5),G.position.set(.29,.05,0),_.add(G);const X=new U(new it(.02,.03,.06),o);X.position.set(-.06,.1,0),_.add(X);const z=new U(new it(.02,.03,.02),o);return z.position.set(.24,.1,0),_.add(z),u(_)},v=()=>{const _=new Jt,y=(A,O)=>{const D=new Jt,G=new U(new it(.36,.11,.075),t);G.position.set(A+.04,.02,O),D.add(G);const X=new U(new it(.18,.02,.03),e);X.position.set(A+.04,.08,O),D.add(X);const z=new U(new zt(.036,.036,.05,8),t);z.rotateZ(Math.PI*.5),z.position.set(A+.23,.02,O),D.add(z);const K=new U(new zt(.024,.024,.14,8),i);K.rotateZ(Math.PI*.5),K.position.set(A+.29,.02,O),D.add(K);const H=new U(new it(.08,.18,.068),e);H.position.set(A-.02,-.1,O),H.rotateZ(-.25),D.add(H);const st=new U(new it(.06,.24,.055),t);st.position.set(A-.04,-.24,O),st.rotateZ(-.25),D.add(st);const q=new U(new it(.24,.015,.08),t);return q.position.set(A-.08,.06,O),D.add(q),D};return _.add(y(.05,.16)),_.add(y(-.05,-.16)),u(_)},m=()=>{const _=new Jt,y=new U(new it(.56,.15,.11),t);y.position.set(.08,.04,0),_.add(y);const A=new U(new zt(.052,.052,.44,10),t);A.rotateZ(Math.PI*.5),A.position.set(.48,.06,0),_.add(A);const O=new U(new zt(.038,.038,.16,8),i);O.rotateZ(Math.PI*.5),O.position.set(.72,.06,0),_.add(O);const D=new U(new it(.03,.05,.05),t);D.position.set(-.16,.13,0),_.add(D);const G=new U(new it(.02,.06,.02),c);G.position.set(.68,.12,0),_.add(G);const X=new U(new it(.34,.14,.09),e);X.position.set(-.32,0,0),_.add(X);const z=new U(new it(.03,.16,.095),e);z.position.set(-.5,0,0),_.add(z);const K=new U(new it(.08,.2,.075),e);K.position.set(-.06,-.14,0),K.rotateZ(-.25),_.add(K);const H=new U(new zt(.16,.16,.12,18),e);H.rotateX(Math.PI*.5),H.position.set(.12,-.16,0),_.add(H);const st=new U(new zt(.07,.07,.13,12),t);return st.rotateX(Math.PI*.5),st.position.set(.12,-.16,0),_.add(st),u(_)},p=()=>{const _=new Jt,y=new U(new it(.34,.13,.065),i);y.position.set(.06,.04,0),_.add(y);const A=new U(new zt(.082,.082,.16,12),t);A.rotateZ(Math.PI*.5),A.position.set(.06,.04,0),_.add(A);const O=new U(new zt(.042,.042,.42,10),i);O.rotateZ(Math.PI*.5),O.position.set(.38,.07,0),_.add(O);const D=new U(new it(.4,.04,.05),i);D.position.set(.38,.02,0),_.add(D);const G=new U(new it(.09,.22,.075),n);G.position.set(-.08,-.12,0),G.rotateZ(-.25),_.add(G);const X=new U(new it(.04,.05,.02),t);X.position.set(-.1,.1,0),_.add(X);const z=new U(new it(.03,.03,.02),c);return z.position.set(.56,.12,0),_.add(z),u(_)},T=()=>{const _=new Jt,y=new U(new it(.44,.14,.1),t);y.position.set(.02,.04,0),_.add(y);const A=new U(new zt(.05,.05,.42,8,1,!1,0,Math.PI),t);A.rotateZ(Math.PI*.5),A.position.set(.02,.11,0),_.add(A);const O=new U(new zt(.028,.028,.52,8),i);O.rotateZ(Math.PI*.5),O.position.set(.68,.03,0),_.add(O);const D=new U(new zt(.022,.022,.32,8),t);D.rotateZ(Math.PI*.5),D.position.set(.5,.07,0),_.add(D);const G=new U(new it(.28,.09,.09),n);G.position.set(.46,.04,0),_.add(G);const X=new U(new it(.03,.07,.03),t);X.position.set(.88,.08,0),_.add(X);const z=new U(new zt(.038,.034,.07,8),i);z.rotateZ(Math.PI*.5),z.position.set(.95,.03,0),_.add(z);const K=new U(new it(.34,.13,.08),n);K.position.set(-.33,-.02,0),K.rotateZ(-.1),_.add(K);const H=new U(new it(.02,.14,.085),t);H.position.set(-.5,-.04,0),H.rotateZ(-.1),_.add(H);const st=new U(new it(.08,.2,.07),n);st.position.set(-.06,-.14,0),st.rotateZ(-.25),_.add(st);const q=new U(new it(.09,.14,.07),t);q.position.set(.12,-.1,0),q.rotateZ(-.2),_.add(q);const J=new U(new it(.085,.14,.068),t);J.position.set(.16,-.22,0),J.rotateZ(.22),_.add(J);const ct=new U(new it(.36,.016,.105),o);return ct.position.set(.02,.08,0),_.add(ct),u(_)},S=()=>{const _=new Jt,y=new U(new it(.38,.12,.085),t);y.position.set(.04,.04,0),_.add(y);const A=new U(new zt(.065,.065,.54,12),e);A.rotateZ(Math.PI*.5),A.position.set(.46,.04,0),_.add(A),[.32,.44,.56].forEach(H=>{const st=new U(new zt(.07,.07,.025,12),t);st.rotateZ(Math.PI*.5),st.position.set(H,.04,0),_.add(st)});const O=new U(new it(.065,.24,.055),t);O.position.set(.12,-.16,0),O.rotateZ(.22),_.add(O);const D=new U(new it(.08,.2,.068),e);D.position.set(-.06,-.14,0),D.rotateZ(-.25),_.add(D);const G=new U(new it(.28,.015,.09),t);G.position.set(-.24,.02,0),_.add(G);const X=new U(new it(.03,.14,.085),e);X.position.set(-.38,0,0),_.add(X);const z=new U(new it(.12,.04,.05),t);z.position.set(.04,.12,0),_.add(z);const K=new U(new Ii(.018,6,6),o);return K.position.set(.09,.13,0),_.add(K),u(_)},M=()=>{const _=new Jt,y=new U(new it(.48,.18,.13),t);y.position.set(.04,.03,0),_.add(y);const A=new U(new zt(.18,.18,.03),a);A.rotateX(Math.PI*.5),A.position.set(.42,.04,0),_.add(A);const O=new U(new zt(.06,.06,.04),t);O.rotateX(Math.PI*.5),O.position.set(.42,.04,0),_.add(O);const D=new U(new it(.36,.04,.06),i);D.position.set(.4,.23,0),_.add(D);const G=new U(new it(.09,.22,.08),e);return G.position.set(-.08,-.15,0),G.rotateZ(-.25),_.add(G),u(_)},I=()=>{const _=new Jt,y=new U(new it(.72,.16,.11),t);y.position.set(.05,.03,0),_.add(y);const A=new U(new zt(.045,.048,.94,12),i);A.rotateZ(Math.PI*.5),A.position.set(.84,.05,0),_.add(A);const O=new U(new it(.16,.09,.085),t);O.position.set(1.34,.05,0),_.add(O);const D=new U(new it(.13,.24,.075),t);D.position.set(.14,-.15,0),D.rotateZ(-.2),_.add(D);const G=new U(new it(.38,.15,.08),e);G.position.set(-.4,-.01,0),_.add(G);const X=new U(new it(.18,.06,.085),r);X.position.set(-.35,.09,0),_.add(X);const z=new U(new it(.09,.22,.075),e);z.position.set(-.08,-.16,0),z.rotateZ(-.25),_.add(z);const K=new U(new zt(.045,.045,.46,12),t);K.rotateZ(Math.PI*.5),K.position.set(.16,.18,0),_.add(K);const H=new U(new it(.06,.06,.12),t);H.position.set(.16,.18,0),_.add(H);const st=new U(new oc(.052,12),l);return st.rotateY(Math.PI*.5),st.position.set(.4,.18,0),_.add(st),u(_)},C=()=>{const _=new Jt,y=new U(new zt(.06,.06,1.15,12),t);y.rotateZ(Math.PI*.5),y.position.set(.12,.04,0),_.add(y);const A=new U(new Rn(.13,.22,12),t);A.rotateZ(Math.PI*.5),A.position.set(-.54,.04,0),_.add(A);const O=new U(new zt(.082,.082,.44,12),n);O.rotateZ(Math.PI*.5),O.position.set(-.06,.04,0),_.add(O);const D=new U(new it(.08,.2,.06),n);D.position.set(.2,-.13,0),D.rotateZ(-.25),_.add(D);const G=new U(new it(.07,.18,.055),n);G.position.set(-.16,-.12,0),G.rotateZ(-.2),_.add(G);const X=new U(new it(.14,.1,.08),t);X.position.set(.14,.15,.06),_.add(X);const z=new U(new zt(.035,.035,.24,8),t);z.rotateZ(Math.PI*.5),z.position.set(.76,.04,0),_.add(z);const K=new U(new Rn(.13,.28,12),d);K.rotateZ(-Math.PI*.5),K.position.set(.96,.04,0),_.add(K);const H=new U(new zt(.02,.02,.1,8),t);return H.rotateZ(Math.PI*.5),H.position.set(1.14,.04,0),_.add(H),u(_)},R=()=>{const _=new Jt,y=new U(new it(.5,.16,.12),t);y.position.set(.06,.03,0),_.add(y);const A=new U(new it(.44,.03,.03),i);A.position.set(.48,.09,0),_.add(A);const O=new U(new it(.44,.03,.03),i);O.position.set(.48,-.03,0),_.add(O);const D=new U(new it(.08,.2,.07),e);D.position.set(-.06,-.14,0),D.rotateZ(-.25),_.add(D);const G=new U(new it(.28,.12,.08),e);return G.position.set(-.3,0,0),_.add(G),u(_)},P=()=>{const _=new Jt,y=new U(new zt(.13,.13,.36,12),t);y.rotateZ(Math.PI*.5),y.position.set(.1,.04,0),_.add(y);const A=6,O=.068;for(let K=0;K<A;K++){const H=K*(Math.PI*2/A),st=.04+Math.sin(H)*O,q=Math.cos(H)*O,J=new U(new zt(.02,.02,.74,8),i);J.rotateZ(Math.PI*.5),J.position.set(.55,st,q),_.add(J)}[.45,.85].forEach(K=>{const H=new U(new dc(.082,.016,8,16),t);H.rotateY(Math.PI*.5),H.position.set(K,.04,0),_.add(H)});const D=new U(new it(.26,.04,.06),e);D.position.set(.1,.2,0),_.add(D);const G=new U(new it(.24,.22,.16),d);G.position.set(-.06,-.16,.05),_.add(G);const X=new U(new it(.1,.12,.08),h);X.position.set(.08,-.06,.05),_.add(X);const z=new U(new it(.06,.18,.16),e);return z.position.set(-.16,.04,0),_.add(z),u(_)};this.weaponMeshMap.set(W.CUTLASS,f()),this.weaponMeshMap.set(W.PISTOL_XAG9,g()),this.weaponMeshMap.set(W.AKIMBO_UZIS,v()),this.weaponMeshMap.set(W.SHOTGUN_AA12,m()),this.weaponMeshMap.set(W.REVOLVER_JUDGE,p()),this.weaponMeshMap.set(W.RIFLE_XAG47,T()),this.weaponMeshMap.set(W.GHOST_SMG,S()),this.weaponMeshMap.set(W.RICOCHET_SAW,M()),this.weaponMeshMap.set(W.RAIL_SNIPER,I()),this.weaponMeshMap.set(W.BUNKER_RPG,C()),this.weaponMeshMap.set(W.SHOCK_ARC,R()),this.weaponMeshMap.set(W.VULCAN_MINIGUN,P()),this.weaponMeshMap.forEach((_,y)=>{_.visible=y===this.activeWeaponId,this.weaponMount.add(_)})}setWeapon(t){this.activeWeaponId=t,this.weaponMeshMap.forEach((e,i)=>{e.visible=i===t})}setOdogwuCrown(t){this.crownMesh.visible=t}setSarkiCrown(t){this.crownMesh.visible=t}triggerRecoilKick(t){this.recoilOffset=Math.min(this.recoilOffset+t,.45)}triggerSlashAnim(){this.slashAnimTimer=.22}triggerThrusterBurst(t){const e=t?.95:0;if(this.thrusterFlameL.material.opacity=e,this.thrusterFlameR.material.opacity=e,t){const i=.8+Math.random()*.5;this.thrusterFlameL.scale.set(i,i*1.3,i),this.thrusterFlameR.scale.set(i,i*1.3,i)}}triggerRagdoll(t,e){this.isRagdoll=!0,this.statusSprite.visible=!1,this.ragdollVelocity.set(t,e,(Math.random()-.5)*1),this.ragdollAngVel.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*18)}resetFromRagdoll(t,e){this.isRagdoll=!1,this.statusSprite.visible=!0,this.rootGroup.position.set(t,e,0),this.rootGroup.rotation.set(0,0,0),this.rootGroup.visible=!0}update(t,e,i,n,r,a,o,c=!1,l){if(this.isRagdoll){this.ragdollVelocity.y+=-34*t,this.rootGroup.position.addScaledVector(this.ragdollVelocity,t),this.rootGroup.rotation.x+=this.ragdollAngVel.x*t,this.rootGroup.rotation.y+=this.ragdollAngVel.y*t,this.rootGroup.rotation.z+=this.ragdollAngVel.z*t,this.rootGroup.position.y<1&&(this.rootGroup.position.y=1,this.ragdollVelocity.y*=-.3,this.ragdollVelocity.x*=.7);return}this.damageFlashTimer>0&&(this.damageFlashTimer-=t,this.damageFlashTimer<=0&&(this.armorMat.emissive.setHex(this.defaultArmorEmissive),this.armorMat.emissiveIntensity=1)),this.rootGroup.position.set(e,i,0);const h=Math.cos(o)>=0;this.rootGroup.scale.x=h?1:-1;let u=(h?hi.clamp(o,-1.45,1.45):hi.clamp(Math.atan2(Math.sin(o),-Math.cos(o)),-1.45,1.45))-this.shoulderGroup.rotation.z;for(;u<-Math.PI;)u+=Math.PI*2;for(;u>Math.PI;)u-=Math.PI*2;if(this.shoulderGroup.rotation.z+=u*Math.min(t*30,1),this.headGroup.rotation.z=this.shoulderGroup.rotation.z*.45,this.isEnemy)this.laserLine.visible=!1,this.crosshairMesh.visible=!1;else{let f=26;if(l){const g=Math.cos(o),v=Math.sin(o),m=e+(h?.3:-.3),p=i+.95;for(let T=.6;T<=26;T+=.5){const S=Math.floor(m+g*T),M=Math.floor(p+v*T);if(l.isSolid(S,M)){f=Math.max(.6,T);break}}}this.laserLine.scale.x=f/28,this.crosshairMesh.position.x=f,this.laserLine.visible=!0,this.crosshairMesh.visible=!0}if(this.slashAnimTimer>0){const f=1-this.slashAnimTimer/.22;this.weaponMount.rotation.z=Math.sin(f*Math.PI)*-1.35,this.weaponMount.position.x=.28+Math.sin(f*Math.PI)*.25,this.slashAnimTimer=Math.max(0,this.slashAnimTimer-t)}else this.weaponMount.rotation.z=0,this.recoilOffset>0?(this.weaponMount.position.x=.28-this.recoilOffset,this.recoilOffset=Math.max(0,this.recoilOffset-t*2.8)):this.weaponMount.position.x=.28;if(this.crownMesh.visible&&(this.crownMesh.rotation.y+=t*3.5),c)this.torsoGroup.position.y=.42,this.torsoGroup.rotation.z=h?-.75:.75,this.leftLeg.rotation.z=-1.25,this.rightLeg.rotation.z=-1.15;else if(this.torsoGroup.position.y=.95,this.torsoGroup.rotation.z=0,!a)this.leftLeg.rotation.z=-.55,this.rightLeg.rotation.z=.45;else if(Math.abs(n)>.5){this.walkCycle+=t*15;const f=Math.sin(this.walkCycle)*.7;this.leftLeg.rotation.z=f,this.rightLeg.rotation.z=-f}else this.leftLeg.rotation.z=0,this.rightLeg.rotation.z=0}destroy(t){this.statusTexture&&this.statusTexture.dispose(),this.rootGroup.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const i=e.material;Array.isArray(i)?i.forEach(n=>n.dispose()):i.dispose()}}),t.remove(this.rootGroup)}}class es{constructor(t,e,i,n,r,a=!1,o=xt.BREACH_BOOSTER){x(this,"stats");x(this,"actor");x(this,"mesh");x(this,"scene");x(this,"jetFuel",100);x(this,"maxJetFuel",100);x(this,"fuelDelayTimer",0);x(this,"isJetFlying",!1);x(this,"respawnTimer",0);x(this,"isSliding",!1);x(this,"slideTimer",0);x(this,"rigBoostTimer",0);x(this,"canWallKick",!1);x(this,"fireCooldown",0);x(this,"reloadTimer",0);x(this,"meleeTimer",0);x(this,"healthRegenDelay",0);x(this,"c4RegenTimer",0);x(this,"lastDamageTakenTime",0);x(this,"lastAimAngle",0);this.scene=t,this.actor=new L_(n,r),this.actor.customPhysics=!0,this.mesh=new U_(t,!a,i),this.stats={id:e,name:i,isBot:!a,isLocalPlayer:a,hp:100,maxHp:100,armor:50,maxArmor:50,cash:1e5,kills:0,deaths:0,wallsDestroyed:0,rigType:o,primaryWeapon:W.RIFLE_XAG47,secondaryWeapon:W.PISTOL_XAG9,activeWeapon:W.RIFLE_XAG47,ammo:{[W.CUTLASS]:999,[W.PISTOL_XAG9]:15,[W.AKIMBO_UZIS]:64,[W.SHOTGUN_AA12]:20,[W.REVOLVER_JUDGE]:6,[W.RIFLE_XAG47]:30,[W.GHOST_SMG]:32,[W.RICOCHET_SAW]:10,[W.RAIL_SNIPER]:4,[W.BUNKER_RPG]:2,[W.SHOCK_ARC]:8,[W.VULCAN_MINIGUN]:150},c4Count:4,empCount:1,tearGasCount:1,rigCooldownTimer:0,isExtracted:!1,isDead:!1},this.mesh.setWeapon(this.stats.activeWeapon),this.syncStatusBillboard()}setTeam(t,e){this.stats.team=t,this.mesh.setTeam(t,e),this.syncStatusBillboard()}syncStatusBillboard(){this.mesh.updateStatusBillboard(this.stats.hp,this.stats.maxHp,this.stats.armor,this.stats.maxArmor,this.stats.name,!!this.mesh.crownMesh.visible)}takeDamage(t,e){if(this.stats.isDead)return!1;if(e&&e.stats.isBot&&this.stats.isLocalPlayer&&(t*=.55),this.stats.armor>0){const i=Math.min(this.stats.armor,t*.65);this.stats.armor-=i,t-=i}return this.stats.hp=Math.max(0,this.stats.hp-t),this.healthRegenDelay=3.5,this.lastDamageTakenTime=performance.now(),this.mesh.triggerDamageFlash(),this.syncStatusBillboard(),this.stats.hp<=0?(this.eliminate(e),!0):!1}heal(t){this.stats.isDead||(this.stats.hp=Math.min(this.stats.maxHp,this.stats.hp+t),this.syncStatusBillboard())}eliminate(t){if(this.stats.isDead)return;this.stats.isDead=!0,this.actor.isDead=!0,this.respawnTimer=3.5,this.stats.deaths++,this.mesh.setOdogwuCrown(!1);const e=t?(this.actor.position.x-t.actor.position.x)*10:(Math.random()-.5)*18,i=14+Math.random()*8;this.mesh.triggerRagdoll(e,i),t&&t.stats.kills++}respawn(t,e){this.actor.position.set(t,e,0),this.actor.velocity.set(0,0,0),this.actor.isDead=!1,this.stats.isDead=!1,this.respawnTimer=0,this.healthRegenDelay=0,this.stats.hp=this.stats.maxHp,this.stats.armor=this.stats.maxArmor,this.stats.c4Count=4,this.c4RegenTimer=0,this.jetFuel=this.maxJetFuel,this.mesh.resetFromRagdoll(t,e),this.mesh.setOdogwuCrown(!1),this.syncStatusBillboard()}swapWeapon(){this.stats.activeWeapon===this.stats.primaryWeapon?this.stats.activeWeapon=this.stats.secondaryWeapon:this.stats.activeWeapon=this.stats.primaryWeapon,this.reloadTimer=0,this.fireCooldown=.12,this.mesh.setWeapon(this.stats.activeWeapon)}reloadWeapon(){const t=He[this.stats.activeWeapon];this.stats.activeWeapon!==W.CUTLASS&&(this.reloadTimer>0||this.stats.ammo[this.stats.activeWeapon]===t.magSize||(this.reloadTimer=t.reloadTime))}updateMiniMilitiaMovement(t,e,i,n,r=1){if(this.stats.isDead)return;const a=this.stats.activeWeapon===W.CUTLASS,o=a?1.25:1,c=Qe.WORLD_SCALE,l=Qe.MAX_RUN_SPEED*c*o,h=Qe.GROUND_ACCEL*c*o,d=Qe.AIR_ACCEL*c*o,u=Qe.JETPACK_THRUST*c*o,f=Qe.GRAVITY*c,g=Math.abs(Qe.MAX_ASCEND_SPEED)*c*(a?1.2:1);if(this.rigBoostTimer<=0){const v=this.actor.isGrounded?h:d;if(e!==0)this.actor.velocity.x+=e*v*t,Math.abs(this.actor.velocity.x)>l&&(this.actor.velocity.x=Math.sign(this.actor.velocity.x)*l);else{const m=this.actor.isGrounded?Qe.GROUND_FRICTION:Qe.AIR_DRAG;this.actor.velocity.x*=Math.pow(m,t*60),Math.abs(this.actor.velocity.x)<.15&&(this.actor.velocity.x=0)}}if(this.jetFuel=this.maxJetFuel,i){this.isJetFlying=!0,this.actor.isJetFlying=!0;const v=Math.max(.65,r);this.actor.velocity.y+=u*v*t,this.actor.isGrounded=!1,this.mesh.triggerThrusterBurst(!0)}else this.isJetFlying=!1,this.actor.isJetFlying=!1,this.isSliding||this.mesh.triggerThrusterBurst(!1);n&&!this.actor.isGrounded&&(this.actor.velocity.y-=f*.5*t),this.actor.velocity.y-=f*t,this.actor.velocity.y>g&&(this.actor.velocity.y=g),this.actor.velocity.y<-20.212500000000002&&(this.actor.velocity.y=-20.212500000000002)}handleJumpOrJetpack(t,e,i,n=1){this.updateMiniMilitiaMovement(t,0,i,!1,n)}performMeleeLunge(t,e,i,n){if(this.meleeTimer>0)return;this.meleeTimer=.28;const r=Math.cos(t),a=Math.sin(t);if(this.actor.velocity.x+=r*16,this.actor.velocity.y+=Math.max(a*12,4),this.mesh.setWeapon(W.CUTLASS),this.mesh.triggerRecoilKick(.45),this.mesh.triggerSlashAnim(),e)for(const o of e){if(o.stats.id===this.stats.id||o.stats.isDead||this.stats.team&&o.stats.team&&this.stats.team!=="none"&&o.stats.team!=="none"&&this.stats.team===o.stats.team)continue;const c=o.actor.position.x-this.actor.position.x,l=o.actor.position.y+.95-(this.actor.position.y+.95),h=Math.sqrt(c*c+l*l),d=(c*r+l*a)/(h||1);if(h<=3.8&&d>-.2){o.actor.velocity.x+=r*18,o.actor.velocity.y+=8,i&&i(o,90);break}}if(n){const o=Math.round(this.actor.position.x+r*1.5),c=Math.round(this.actor.position.y+.95+a*1.5),l=n.getTile(o,c);l===Q.WOOD_SCAFFOLD||l===Q.GLASS_WINDOW?n.destroyTile(o,c):l===Q.BRICK_CONCRETE&&n.damageTile(o,c,80)}setTimeout(()=>{this.stats.activeWeapon!==W.CUTLASS&&this.mesh.setWeapon(this.stats.activeWeapon)},280)}update(t,e,i,n){if(this.lastAimAngle=n,this.stats.isDead){this.mesh.update(t,this.actor.position.x,this.actor.position.y,0,0,!1,0);return}if(this.actor.isGrounded&&this.jetFuel<this.maxJetFuel&&(this.jetFuel=Math.min(this.maxJetFuel,this.jetFuel+t*45)),this.healthRegenDelay>0)this.healthRegenDelay-=t;else if(this.stats.hp<this.stats.maxHp){const r=this.stats.hp;this.stats.hp=Math.min(this.stats.maxHp,this.stats.hp+t*18),Math.floor(r)!==Math.floor(this.stats.hp)&&this.syncStatusBillboard()}if(this.stats.c4Count<4?(this.c4RegenTimer+=t,this.c4RegenTimer>=14&&(this.stats.c4Count++,this.c4RegenTimer=0)):this.c4RegenTimer=0,this.stats.rigCooldownTimer>0&&(this.stats.rigCooldownTimer-=t),this.rigBoostTimer>0&&(this.rigBoostTimer-=t),this.fireCooldown>0&&(this.fireCooldown-=t),this.meleeTimer>0&&(this.meleeTimer-=t),this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0)){const r=He[this.stats.activeWeapon];this.stats.ammo[this.stats.activeWeapon]=r.magSize}this.isSliding&&(this.slideTimer-=t,this.slideTimer<=0&&(this.isSliding=!1)),this.actor.updatePhysics(t,e),this.mesh.update(t,this.actor.position.x,this.actor.position.y,this.actor.velocity.x,this.actor.velocity.y,this.actor.isGrounded,n,this.isSliding,e)}destroy(){this.mesh.destroy(this.scene)}}class Ua{constructor(t,e,i,n,r=25e3,a,o=!1){x(this,"mesh");x(this,"type");x(this,"value");x(this,"weaponId");x(this,"isCollected",!1);x(this,"canRespawn",!1);x(this,"respawnTimer",0);x(this,"floatTime",Math.random()*Math.PI*2);if(this.type=e,this.value=r,this.weaponId=a,this.canRespawn=o,this.mesh=new Jt,this.mesh.position.set(i,n,0),t.add(this.mesh),e==="cash"){const f=new it(.7,.35,.45),g=new Dt({color:1096065,emissive:366185,emissiveIntensity:2.5,roughness:.3,metalness:.05}),v=new U(f,g);this.mesh.add(v);const m=new it(.18,.36,.46),p=new jt({color:16777215}),T=new U(m,p);this.mesh.add(T);const S=new qi(.4,.65,16),M=new jt({color:1096065,side:ke,transparent:!0,opacity:.75}),I=new U(S,M);I.rotation.x=Math.PI*.5,I.position.y=-.22,this.mesh.add(I)}else if(e==="weapon"){const f=new it(.85,.45,.55),g=new Dt({color:14251782,emissive:11817737,emissiveIntensity:2.2,roughness:.4,metalness:.1}),v=new U(f,g);this.mesh.add(v);const m=new qi(.45,.75,16),p=new jt({color:16096779,side:ke,transparent:!0,opacity:.75}),T=new U(m,p);T.rotation.x=Math.PI*.5,T.position.y=-.25,this.mesh.add(T)}else{const f=new it(.55,.42,.38),g=new Dt({color:14427686,emissive:10033947,emissiveIntensity:1.8,roughness:.3,metalness:.05}),v=new U(f,g);this.mesh.add(v);const m=new jt({color:16777215}),p=new U(new it(.32,.1,.4),m);this.mesh.add(p);const T=new U(new it(.1,.32,.4),m);this.mesh.add(T);const S=new qi(.45,.72,16),M=new jt({color:15680580,side:ke,transparent:!0,opacity:.75}),I=new U(S,M);I.rotation.x=Math.PI*.5,I.position.y=-.24,this.mesh.add(I)}const c=document.createElement("canvas");c.width=160,c.height=48;const l=c.getContext("2d");l.fillStyle=e==="cash"?"#10b981":e==="weapon"?"#f59e0b":"#ef4444",l.font='bold 22px "Chakra Petch", sans-serif',l.textAlign="center",l.textBaseline="middle",l.shadowColor="#000000",l.shadowBlur=8,l.fillText(e==="cash"?"₦ CASH":e==="weapon"?"📦 WEAPON":"❤️ +50 HP",80,24);const h=new be(c),d=new Jr({map:h,transparent:!0,opacity:.95}),u=new rc(d);u.position.set(0,.8,0),u.scale.set(1.5,.5,1),this.mesh.add(u)}update(t){if(this.isCollected){this.canRespawn&&this.respawnTimer>0&&(this.respawnTimer-=t,this.respawnTimer<=0&&(this.isCollected=!1,this.mesh.visible=!0));return}this.floatTime+=t*3,this.mesh.rotation.y+=t*2.2,this.mesh.position.y+=Math.sin(this.floatTime)*t*.4}destroy(t){this.mesh.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const i=e.material;Array.isArray(i)?i.forEach(n=>{n.map&&n.map.dispose(),n.dispose()}):(i.map&&i.map.dispose(),i.dispose())}}),t.remove(this.mesh)}}class Fl{constructor(t){x(this,"player");x(this,"changeDecisionTimer",0);x(this,"targetPlayer",null);x(this,"targetPickup",null);x(this,"aimAngle",0);x(this,"facingDir",1);x(this,"jetpackFlightTimer",0);x(this,"jetpackCooldownTimer",0);x(this,"reactionTimer",.4);x(this,"burstFiringTimer",.45);x(this,"burstCooldownTimer",.8);x(this,"lastTargetId",null);this.player=t,this.changeDecisionTimer=Math.random()*1.5}hasLineOfSight(t,e,i,n,r){const a=Math.floor(t),o=Math.floor(e),c=Math.floor(i),l=Math.floor(n),h=Math.abs(c-a),d=Math.abs(l-o),u=a<c?1:-1,f=o<l?1:-1;let g=h-d,v=a,m=o;for(;v!==c||m!==l;){if((v!==a||m!==o)&&(v!==c||m!==l)&&r.isSolid(v,m))return!1;const p=2*g;p>-d&&(g-=d,v+=u),p<h&&(g+=h,m+=f)}return!0}update(t,e,i,n,r,a,o,c){if(this.player.stats.isDead){this.player.update(t,n,a,0);return}if(this.player.jetFuel<this.player.maxJetFuel&&(this.player.jetFuel=Math.min(this.player.maxJetFuel,this.player.jetFuel+t*45)),this.changeDecisionTimer-=t,this.jetpackCooldownTimer>0&&(this.jetpackCooldownTimer-=t),this.changeDecisionTimer<=0)if(this.changeDecisionTimer=.9+Math.random()*.7,o&&Math.random()>.35)this.targetPlayer=null,this.targetPickup=null;else{let C=null,R=14;for(let y=0;y<i.length;y++){const A=i[y];if(A.isCollected)continue;const O=this.player.actor.position.distanceTo(A.mesh.position);O<R&&(R=O,C=A)}this.targetPickup=C;let P=null,_=999;for(let y=0;y<e.length;y++){const A=e[y];if(A.stats.id===this.player.stats.id||A.stats.isDead||this.player.stats.team&&A.stats.team&&this.player.stats.team!=="none"&&A.stats.team!=="none"&&this.player.stats.team===A.stats.team)continue;const O=this.player.actor.position.distanceTo(A.actor.position),D=A.mesh.crownMesh.visible?.45:1,G=O*D;G<_&&(_=G,P=A)}P&&P.stats.id!==this.lastTargetId&&(this.lastTargetId=P.stats.id,this.reactionTimer=.35+Math.random()*.25),this.targetPlayer=P}let l=this.player.actor.position.x,h=this.player.actor.position.y;o&&!this.player.stats.isExtracted?(l=c.x,h=c.y):this.targetPickup?(l=this.targetPickup.mesh.position.x,h=this.targetPickup.mesh.position.y):this.targetPlayer&&(l=this.targetPlayer.actor.position.x,h=this.targetPlayer.actor.position.y);const d=l-this.player.actor.position.x,u=h-this.player.actor.position.y;Math.abs(d)>1.2&&(this.facingDir=d>0?1:-1);let f=0;Math.abs(d)>1.5&&(f=this.facingDir);const g=Math.floor(this.player.actor.position.x),v=Math.floor(this.player.actor.position.y+2.05),m=n.isSolid(g,v),p=Math.floor(this.player.actor.position.x+this.facingDir*.95),T=Math.floor(this.player.actor.position.y+.2),S=Math.floor(this.player.actor.position.y+1.1),M=n.isSolid(p,T)&&n.isSolid(p,S);let I=!1;if(m||(M||u>1.6)&&this.jetpackCooldownTimer<=0&&this.jetpackFlightTimer<=0&&(this.jetpackFlightTimer=.8+Math.random()*.5,this.jetpackCooldownTimer=1.2),this.jetpackFlightTimer>0&&(this.jetpackFlightTimer-=t,this.player.actor.position.y>=h+.5?this.jetpackFlightTimer=0:m||(I=!0)),this.player.updateMiniMilitiaMovement(t,f,I,!1,1),this.targetPlayer&&!this.targetPlayer.stats.isDead){const C=this.targetPlayer.actor.position.x-this.player.actor.position.x,R=this.targetPlayer.actor.position.y+.95-(this.player.actor.position.y+.95),P=Math.sqrt(C*C+R*R),_=Math.sin(performance.now()*.005+this.player.actor.position.x)*.16;this.aimAngle=Math.atan2(R,C)+_,this.facingDir=Math.cos(this.aimAngle)>=0?1:-1,P<18&&this.hasLineOfSight(this.player.actor.position.x,this.player.actor.position.y+.95,this.targetPlayer.actor.position.x,this.targetPlayer.actor.position.y+.95,n)?this.reactionTimer>0?this.reactionTimer-=t:this.burstCooldownTimer>0?this.burstCooldownTimer-=t:(this.burstFiringTimer-=t,r.fireWeapon(this.player,this.aimAngle),this.burstFiringTimer<=0&&(this.burstCooldownTimer=.65+Math.random()*.45,this.burstFiringTimer=.35+Math.random()*.25)):this.burstCooldownTimer=.4,P<2.2&&Math.random()<.03&&this.player.performMeleeLunge(this.aimAngle,e,(A,O)=>{A.takeDamage(O,this.player)}),P<6.5&&this.player.stats.rigCooldownTimer<=0&&Math.random()<.02&&(a.activateRig(this.player,n,this.aimAngle,this.facingDir),this.player.stats.rigCooldownTimer=5)}else this.aimAngle=this.facingDir>0?0:Math.PI;this.player.update(t,n,a,this.aimAngle)}}class Bl{constructor(t){x(this,"matchDuration",180);x(this,"matchTimeRemaining",180);x(this,"zoneShiftTimer",45);x(this,"activeZoneIndex",0);x(this,"zonePositions",[new L(12,10,0),new L(40,16,0),new L(68,10,0)]);x(this,"zoneMesh");x(this,"controllingPlayerId",null);const e=new zt(4,4,.4,24),i=new jt({color:16096779,transparent:!0,opacity:.45});this.zoneMesh=new U(e,i),this.zoneMesh.position.copy(this.zonePositions[0]),t.add(this.zoneMesh)}update(t,e){this.matchTimeRemaining>0&&(this.matchTimeRemaining-=t),this.zoneShiftTimer-=t,this.zoneShiftTimer<=0&&(this.zoneShiftTimer=45,this.activeZoneIndex=(this.activeZoneIndex+1)%this.zonePositions.length,this.zoneMesh.position.copy(this.zonePositions[this.activeZoneIndex]));const i=this.zonePositions[this.activeZoneIndex];let n=null;if(e.forEach(r=>{!r.stats.isDead&&r.actor.position.distanceTo(i)<4.2&&(n=r)}),n){this.controllingPlayerId=n.stats.id;const r=this.matchTimeRemaining<=30?2:1;n.stats.cash+=Math.round(1e4*r*t)}else this.controllingPlayerId=null}destroy(t){this.zoneMesh&&(this.zoneMesh.geometry&&this.zoneMesh.geometry.dispose(),this.zoneMesh.material&&this.zoneMesh.material.dispose(),t.remove(this.zoneMesh))}}const bn=class bn{constructor(){x(this,"bannerContainer");x(this,"audioCtx");x(this,"queue",[]);x(this,"isDisplaying",!1);x(this,"voiceLines",{[Ne.MATCH_START]:{banner:"OPERATION LIVE!",sub:"ALL OPERATIVES INFILTRATE THE ARENA",voice:"Yane Operatives! Target locked. Secure the Kudi!",color:"#06b6d4"},[Ne.FIRST_BLOOD]:{banner:"FIRST BLOOD!",sub:"FIRST CASUALTY CONFIRMED",voice:"First Blood! Aiki ya fara — the hunt begins!",color:"#ef4444"},[Ne.DOUBLE_KILL]:{banner:"DOUBLE ELIMINATION!",sub:"RAPID TAKEDOWN CONFIRMED",voice:"Double Elimination! Biyu a kasa — two down!",color:"#f97316"},[Ne.KILL_STREAK]:{banner:"SARKIN YAKI RAMPAGE!",sub:"UNSTOPPABLE COMBAT STREAK",voice:"Sarkin Yaki! Nobody can stop this operative!",color:"#eab308"},[Ne.VAULT_BREACHED]:{banner:"VAULT BREACHED!",sub:"MASTER BOUNTY CASE RELEASED",voice:"Vault Cracked! Ga Kudi nan — grab the master case!",color:"#f59e0b"},[Ne.CARRIER_MARKED]:{banner:"TARGET MARKED [👑]",sub:"SARKI BOUNTY CARRIER IDENTIFIED",voice:"Bounty Target Marked! Hunt down the carrier!",color:"#facc15"},[Ne.CHOPPER_ARRIVED]:{banner:"EXTRACTION LIVE!",sub:"ARMORED EXTRACTION GUNSHIP HAS ARRIVED",voice:"Gunship inbound! Ku taho — move to the extraction zone!",color:"#10b981"},[Ne.CLEAN_EVAC]:{banner:"HEIST COMPLETED!",sub:"100% CLEAN EXTRACTION SECURED",voice:"Gaskiya! Full payout secured. Mission complete!",color:"#22c55e"}});let t=document.getElementById("hype-announcer-banner");t||(t=document.createElement("div"),t.id="hype-announcer-banner",t.style.position="fixed",t.style.top="14px",t.style.left="50%",t.style.transform="translateX(-50%) translateY(-120%)",t.style.zIndex="9999",t.style.pointerEvents="none",t.style.transition="transform 0.28s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.25s ease",t.style.opacity="0",document.body.appendChild(t)),this.bannerContainer=t;const e=()=>{if(!this.audioCtx){const i=window.AudioContext||window.webkitAudioContext;i&&(this.audioCtx=new i)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()};window.addEventListener("pointerdown",e,{once:!1}),window.addEventListener("keydown",e,{once:!1})}static getInstance(){return bn.instance||(bn.instance=new bn),bn.instance}announce(t){const e=this.voiceLines[t];e&&(this.queue.push({event:t,bannerTitle:e.banner,bannerSubtitle:e.sub,voiceText:e.voice,color:e.color}),this.isDisplaying||this.processQueue())}processQueue(){if(this.queue.length===0){this.isDisplaying=!1;return}this.isDisplaying=!0;const t=this.queue.shift();this.playRadioFX(),this.playVoiceLine(t.voiceText),this.showBanner(t),setTimeout(()=>{this.hideBanner(),setTimeout(()=>{this.processQueue()},200)},1800)}showBanner(t){this.bannerContainer.innerHTML=`
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
    `,this.bannerContainer.style.transform="translateX(-50%) translateY(0)",this.bannerContainer.style.opacity="1"}hideBanner(){this.bannerContainer.style.transform="translateX(-50%) translateY(-120%)",this.bannerContainer.style.opacity="0"}playRadioFX(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}if(this.audioCtx)try{const t=this.audioCtx.currentTime,e=this.audioCtx.createOscillator(),i=this.audioCtx.createGain(),n=this.audioCtx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1400,t),n.Q.setValueAtTime(4,t),e.type="sawtooth",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(2400,t+.08),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.01,t+.09),e.connect(n),n.connect(i),i.connect(this.audioCtx.destination),e.start(t),e.stop(t+.1);const r=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();r.type="sine",r.frequency.setValueAtTime(85,t),r.frequency.exponentialRampToValueAtTime(28,t+.35),a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.01,t+.38),r.connect(a),a.connect(this.audioCtx.destination),r.start(t),r.stop(t+.4)}catch(t){console.warn("[HypeAnnouncer] Radio FX failed:",t)}}playVoiceLine(t){if("speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}};x(bn,"instance");let Po=bn;const Qn={},Gl="xag_operative_profile_v2",En=class En{constructor(){x(this,"currentProfile");x(this,"supabaseUrl",(Qn==null?void 0:Qn.VITE_SUPABASE_URL)||"");x(this,"supabaseAnonKey",(Qn==null?void 0:Qn.VITE_SUPABASE_ANON_KEY)||"");this.currentProfile=this.loadOrCreateProfile()}static getInstance(){return En.instance||(En.instance=new En),En.instance}loadOrCreateProfile(){try{const i=localStorage.getItem(Gl);if(i){const n=JSON.parse(i);if(n&&n.call_sign)return n}}catch(i){console.warn("[OperativeService] Local storage read error:",i)}const t=Math.floor(1e3+Math.random()*9e3),e={id:`guest_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,call_sign:`GUEST_234_${t}`,clan_tag:"XAG",rank:1,cash_balance:1e5,unlocked_weapons:[W.RIFLE_XAG47,W.PISTOL_XAG9,W.CUTLASS],selected_rig:xt.BREACH_BOOSTER,selected_class:ts.VANGUARD,is_claimed:!1};return this.saveToStorage(e),e}getProfile(){return this.currentProfile}saveToStorage(t){this.currentProfile=t;try{localStorage.setItem(Gl,JSON.stringify(t))}catch(e){console.warn("[OperativeService] Local storage write error:",e)}}async syncWithCloud(){if(!(!this.supabaseUrl||!this.supabaseAnonKey))try{const t=await fetch(`${this.supabaseUrl}/rest/v1/operatives`,{method:"POST",headers:{apikey:this.supabaseAnonKey,Authorization:`Bearer ${this.supabaseAnonKey}`,"Content-Type":"application/json",Prefer:"resolution=merge-duplicates"},body:JSON.stringify({id:this.currentProfile.id,call_sign:this.currentProfile.call_sign,clan_tag:this.currentProfile.clan_tag,rank:this.currentProfile.rank,cash_balance:this.currentProfile.cash_balance,unlocked_weapons:this.currentProfile.unlocked_weapons,selected_class:this.currentProfile.selected_class,updated_at:new Date().toISOString()})});t.ok||console.warn("[OperativeService] Cloud sync response not ok:",t.status)}catch(t){console.warn("[OperativeService] Cloud sync offline fallback:",t)}}async claimAccount(t,e,i="XAG"){const n=t.trim().toUpperCase()||this.currentProfile.call_sign,r=i.trim().toUpperCase()||"XAG",a=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",a),l=Array.from(new Uint8Array(o)).map(h=>h.toString(16).padStart(2,"0")).join("");this.currentProfile.call_sign=n,this.currentProfile.clan_tag=r,this.currentProfile.is_claimed=!0,this.saveToStorage(this.currentProfile);try{localStorage.setItem("xag_claimed_hash",l)}catch{}return await this.syncWithCloud(),!0}bankMatchCash(t){return t>0&&(this.currentProfile.cash_balance+=t,this.currentProfile.rank=Math.max(1,Math.floor(this.currentProfile.cash_balance/5e5)+1),this.saveToStorage(this.currentProfile),this.syncWithCloud()),this.currentProfile.cash_balance}unlockWeapon(t,e){return this.currentProfile.unlocked_weapons.includes(t)?!0:this.currentProfile.cash_balance>=e?(this.currentProfile.cash_balance-=e,this.currentProfile.unlocked_weapons.push(t),this.saveToStorage(this.currentProfile),this.syncWithCloud(),!0):!1}isWeaponUnlocked(t){return this.currentProfile.unlocked_weapons.includes(t)}setClass(t){switch(this.currentProfile.selected_class=t,t){case ts.VANGUARD:this.currentProfile.selected_rig=xt.BREACH_BOOSTER;break;case ts.STRIKER:this.currentProfile.selected_rig=xt.OVERDRIVE_SLIDE;break;case ts.SPECTER:this.currentProfile.selected_rig=xt.PHASE_DASH;break;case ts.CHRONOS:this.currentProfile.selected_rig=xt.GLITCH_ANCHOR;break}this.saveToStorage(this.currentProfile)}};x(En,"instance");let Ri=En;class Hl{constructor(t,e=ae.BIRNIN_KANO){x(this,"scene");x(this,"matchDuration",240);x(this,"matchTimeRemaining",240);x(this,"currentAct",Re.ACT_1_BREACH);x(this,"mapId",ae.BIRNIN_KANO);x(this,"vaultPos",new L(40,3.5,0));x(this,"vaultHP",1500);x(this,"maxVaultHP",1500);x(this,"vaultMesh");x(this,"vaultDoorL");x(this,"vaultDoorR");x(this,"vaultHealthBarMesh");x(this,"vaultHealthCtx");x(this,"vaultHealthTexture");x(this,"isVaultBreached",!1);x(this,"masterCaseMesh");x(this,"masterCaseLightPillar");x(this,"masterCasePos",new L(40,3.5,0));x(this,"carrierId",null);x(this,"isCaseSpawned",!1);x(this,"passiveDripTimer",0);x(this,"extractionPadPos",new L(40,38,0));x(this,"chopperGroup");x(this,"chopperRotor");x(this,"extractionRingMesh");x(this,"extractionProgress",new Map);x(this,"isExtractionContested",!1);x(this,"contestedWarningTime",0);x(this,"announcer");x(this,"totalLobbyKills",0);x(this,"killStreaks",new Map);x(this,"lastKillTimestamp",new Map);this.scene=t,this.mapId=e,this.announcer=Po.getInstance(),e===ae.LAGOS_GOSLOW?(this.extractionPadPos.set(40,36,0),this.vaultPos.set(40,3.5,0)):(this.extractionPadPos.set(40,42,0),this.vaultPos.set(40,3.5,0)),this.vaultMesh=new Jt,this.vaultMesh.position.copy(this.vaultPos);const i=new Dt({color:4674921,emissive:1976635,roughness:.5,metalness:.1}),n=new U(new it(5.2,5,1.2),i);this.vaultMesh.add(n);const r=new Dt({color:14251782,emissive:7877903,emissiveIntensity:.8,roughness:.35,metalness:.1});this.vaultDoorL=new U(new it(2.1,4.4,.4),r),this.vaultDoorL.position.set(-1.15,0,.45),this.vaultMesh.add(this.vaultDoorL),this.vaultDoorR=new U(new it(2.1,4.4,.4),r),this.vaultDoorR.position.set(1.15,0,.45),this.vaultMesh.add(this.vaultDoorR);const a=document.createElement("canvas");a.width=256,a.height=64,this.vaultHealthCtx=a.getContext("2d"),this.vaultHealthTexture=new be(a),this.vaultHealthBarMesh=new rc(new Jr({map:this.vaultHealthTexture,depthTest:!1})),this.vaultHealthBarMesh.position.set(0,3.6,0),this.vaultHealthBarMesh.scale.set(4.5,1.1,1),this.vaultMesh.add(this.vaultHealthBarMesh),this.updateVaultHealthBar(),t.add(this.vaultMesh),this.masterCaseMesh=new Jt;const o=new it(.9,.65,.35),c=new Dt({color:16096779,emissive:14251782,emissiveIntensity:1.5,metalness:.1,roughness:.1}),l=new U(o,c);this.masterCaseMesh.add(l);const h=new zt(.35,.35,40,16);h.translate(0,20,0);const d=new jt({color:16436245,transparent:!0,opacity:.35,side:ke});this.masterCaseLightPillar=new U(h,d),this.masterCaseMesh.add(this.masterCaseLightPillar),this.masterCaseMesh.position.copy(this.masterCasePos),this.masterCaseMesh.visible=!1,t.add(this.masterCaseMesh),this.chopperGroup=new Jt,this.chopperGroup.position.set(this.extractionPadPos.x,this.extractionPadPos.y+4.5,0);const u=new Dt({color:3359061,emissive:988970,roughness:.4,metalness:.1}),f=new U(new it(5.5,1.8,1.6),u);this.chopperGroup.add(f);const g=new Nh({color:3718648,roughness:.1,metalness:.1,transparent:!0,opacity:.7}),v=new U(new it(1.6,1.2,1.4),g);v.position.set(2.2,.1,0),this.chopperGroup.add(v);const m=new jt({color:988970});this.chopperRotor=new U(new it(8.5,.08,.35),m),this.chopperRotor.position.set(.2,1.2,0),this.chopperGroup.add(this.chopperRotor);const p=new kh(1096065,6,30,Math.PI*.25,.6);p.position.set(0,0,0),p.target.position.set(0,-15,0),this.chopperGroup.add(p),this.chopperGroup.add(p.target),this.chopperGroup.visible=!1,t.add(this.chopperGroup);const T=new qi(.2,3.5,32);T.rotateX(-Math.PI/2);const S=new jt({color:1096065,transparent:!0,opacity:.45,side:ke});this.extractionRingMesh=new U(T,S),this.extractionRingMesh.position.copy(this.extractionPadPos),this.extractionRingMesh.visible=!1,t.add(this.extractionRingMesh),setTimeout(()=>{this.announcer.announce(Ne.MATCH_START)},600)}updateVaultHealthBar(){const t=this.vaultHealthCtx;t.clearRect(0,0,256,64);const e=Math.max(0,this.vaultHP/this.maxVaultHP);t.fillStyle="rgba(15, 23, 42, 0.88)",t.strokeStyle="#e2e8f0",t.lineWidth=3,t.fillRect(4,4,248,56),t.strokeRect(4,4,248,56),t.font='800 14px "JetBrains Mono", monospace',t.fillStyle="#f59e0b",t.textAlign="center",t.fillText(`CENTRAL VAULT: ${Math.round(this.vaultHP)} HP`,128,22),t.fillStyle="#334155",t.fillRect(16,32,224,20),t.fillStyle=e>.4?"#22c55e":e>.2?"#f59e0b":"#ef4444",t.fillRect(16,32,224*e,20),this.vaultHealthTexture.needsUpdate=!0}damageVault(t,e,i){this.isVaultBreached||this.vaultHP<=0||(this.vaultHP-=t,this.updateVaultHealthBar(),this.vaultHP<=0&&this.breachVault(i))}breachVault(t){this.isVaultBreached||(this.isVaultBreached=!0,this.vaultHP=0,this.updateVaultHealthBar(),this.vaultDoorL.position.x-=4,this.vaultDoorL.position.z-=2,this.vaultDoorL.rotation.y=-.9,this.vaultDoorR.position.x+=4,this.vaultDoorR.position.z-=2,this.vaultDoorR.rotation.y=.9,t&&(t.spawnExplosionShockwave(this.vaultPos.x,this.vaultPos.y),t.spawnSparks(this.vaultPos.x,this.vaultPos.y,0,1,30)),this.announcer.announce(Ne.VAULT_BREACHED),this.transitionToAct(Re.ACT_2_CARRIER))}transitionToAct(t){this.currentAct=t,t===Re.ACT_2_CARRIER?(this.isCaseSpawned=!0,this.masterCaseMesh.visible=!0,this.masterCaseMesh.position.copy(this.vaultPos)):t===Re.ACT_3_EXTRACTION&&(this.chopperGroup.visible=!0,this.extractionRingMesh.visible=!0,this.announcer.announce(Ne.CHOPPER_ARRIVED))}handleKill(t,e){this.totalLobbyKills++;const i=Date.now();this.totalLobbyKills===1&&this.announcer.announce(Ne.FIRST_BLOOD);const n=this.lastKillTimestamp.get(t.stats.id)||0;i-n<=4e3&&this.announcer.announce(Ne.DOUBLE_KILL),this.lastKillTimestamp.set(t.stats.id,i);const r=(this.killStreaks.get(t.stats.id)||0)+1;this.killStreaks.set(t.stats.id,r),this.killStreaks.set(e.stats.id,0),r>=3&&r%3===0&&this.announcer.announce(Ne.KILL_STREAK),this.handlePlayerDeath(e)}handlePlayerDeath(t){t.mesh.setOdogwuCrown(!1),this.carrierId===t.stats.id&&this.dropMasterCase(t.actor.position.x,t.actor.position.y)}dropMasterCase(t,e){this.carrierId=null,this.masterCaseMesh.visible=!0,this.masterCaseMesh.position.set(t,e+.5,0)}update(t,e,i,n){if(this.currentAct!==Re.MATCH_OVER){if(this.matchTimeRemaining-=t,this.currentAct===Re.ACT_1_BREACH&&(this.matchTimeRemaining<=150||this.vaultHP<=0)&&this.breachVault(i),this.currentAct===Re.ACT_2_CARRIER&&this.matchTimeRemaining<=60&&this.transitionToAct(Re.ACT_3_EXTRACTION),this.masterCaseMesh.visible&&(this.masterCaseMesh.rotation.y+=t*3),this.currentAct===Re.ACT_2_CARRIER||this.currentAct===Re.ACT_3_EXTRACTION){if(this.carrierId){const r=e.find(a=>a.stats.id===this.carrierId);r&&!r.stats.isDead?(this.masterCaseMesh.visible=!1,r.mesh.setOdogwuCrown(!0),this.passiveDripTimer+=t,this.passiveDripTimer>=1&&(r.stats.cash+=1e4,this.passiveDripTimer=0)):r?this.handlePlayerDeath(r):this.dropMasterCase(this.masterCasePos.x,this.masterCasePos.y)}else if(this.isCaseSpawned&&this.masterCaseMesh.visible){for(const r of e)if(!r.stats.isDead&&r.actor.position.distanceTo(this.masterCaseMesh.position)<2){this.carrierId=r.stats.id,r.mesh.setOdogwuCrown(!0),this.announcer.announce(Ne.CARRIER_MARKED);break}}}if(this.currentAct===Re.ACT_3_EXTRACTION){this.chopperRotor.rotation.y+=t*30;const r=[];if(e.forEach(a=>{!a.stats.isDead&&a.actor.position.distanceTo(this.extractionPadPos)<=3.5&&r.push(a)}),r.length===1){this.isExtractionContested=!1;const a=r[0],o=(this.extractionProgress.get(a.stats.id)||0)+t;this.extractionProgress.set(a.stats.id,o),o>=5&&this.handleCleanEvac(a,e)}else if(r.length>1)if(new Set(r.map(o=>o.stats.team).filter(o=>o!=="none")).size===1){this.isExtractionContested=!1;const o=r[0],c=(this.extractionProgress.get(o.stats.id)||0)+t;this.extractionProgress.set(o.stats.id,c),c>=5&&this.handleCleanEvac(o,e)}else this.isExtractionContested=!0,this.contestedWarningTime=1;else this.isExtractionContested=!1}this.matchTimeRemaining<=0&&this.handleTimeout(e)}}handleCleanEvac(t,e=[]){this.currentAct=Re.MATCH_OVER,t.stats.isExtracted=!0;const i=t.stats.cash+25e4;Ri.getInstance().bankMatchCash(i),t.stats.team!=="none"&&e.length>0&&e.forEach(n=>{n.stats.team===t.stats.team&&(n.stats.isExtracted=!0)}),this.announcer.announce(Ne.CLEAN_EVAC)}handleTimeout(t){this.currentAct=Re.MATCH_OVER;const e=t.find(i=>i.stats.isLocalPlayer);if(e&&!e.stats.isDead&&!e.stats.isExtracted){const i=Math.floor(e.stats.cash*.5);Ri.getInstance().bankMatchCash(i)}}destroy(t){t.remove(this.vaultMesh),t.remove(this.masterCaseMesh),t.remove(this.chopperGroup),t.remove(this.extractionRingMesh)}}class Bh{constructor(t,e){x(this,"player");x(this,"particles");x(this,"targetX");x(this,"targetY");x(this,"targetVx");x(this,"targetVy");x(this,"targetAimAngle");x(this,"currentAimAngle");x(this,"targetFacingRight");x(this,"targetIsJetFlying");x(this,"targetIsGrounded");x(this,"targetIsSliding");x(this,"lastDamageTime",0);x(this,"extrapolateTime",0);this.player=t,this.particles=e,this.targetX=t.actor.position.x,this.targetY=t.actor.position.y,this.targetVx=0,this.targetVy=0,this.targetAimAngle=0,this.currentAimAngle=0,this.targetFacingRight=!0,this.targetIsJetFlying=!1,this.targetIsGrounded=!0,this.targetIsSliding=!1}applySnapshot(t){const e=performance.now(),i=this.player.stats.isDead||this.player.mesh.isRagdoll;this.extrapolateTime=0,this.targetX=t.x,this.targetY=t.y,this.targetVx=t.vx,this.targetVy=t.vy,this.targetAimAngle=t.aimAngle,this.targetFacingRight=t.facingRight,this.targetIsJetFlying=t.isJetFlying,this.targetIsGrounded=t.isGrounded,this.targetIsSliding=t.isSliding,!t.isDead&&i?(this.player.stats.isDead=!1,this.player.actor.isDead=!1,this.player.mesh.isRagdoll=!1,this.player.actor.position.set(t.x,t.y,0),this.player.actor.velocity.set(t.vx,t.vy,0),this.player.mesh.rootGroup.position.set(t.x,t.y,0),this.player.mesh.rootGroup.rotation.set(0,0,0),this.player.mesh.rootGroup.visible=!0,this.player.mesh.statusSprite.visible=!0,this.player.respawn(t.x,t.y)):t.isDead&&!i&&(this.player.stats.isDead=!0,this.player.actor.isDead=!0,this.player.mesh.triggerRagdoll(t.vx*.5,8)),(!(e-this.lastDamageTime<600)||t.hp<=this.player.stats.hp)&&(this.player.stats.hp=t.hp),this.player.stats.armor=t.armor,this.player.jetFuel=t.fuel,this.player.stats.isDead=t.isDead,this.player.syncStatusBillboard(),this.player.stats.activeWeapon!==t.activeWeapon&&(this.player.stats.activeWeapon=t.activeWeapon,this.player.mesh.setWeapon(t.activeWeapon))}notifyLocalDamageDealt(){this.lastDamageTime=performance.now()}update(t){if(this.player.stats.isDead){this.player.mesh.isRagdoll&&this.player.mesh.update(t,this.player.actor.position.x,this.player.actor.position.y,0,0,!1,0);return}this.player.mesh.isRagdoll&&(this.player.mesh.isRagdoll=!1,this.player.mesh.rootGroup.rotation.set(0,0,0)),this.player.mesh.rootGroup.visible=!0,this.player.mesh.statusSprite.visible=!0,this.player.mesh.rootGroup.position.z=0,this.extrapolateTime+=t,this.extrapolateTime<.12&&(this.targetX+=this.targetVx*t,this.targetY+=this.targetVy*t,!this.targetIsGrounded&&!this.targetIsJetFlying&&(this.targetVy-=28*t));const e=this.targetX-this.player.actor.position.x,i=this.targetY-this.player.actor.position.y;if(e*e+i*i>36)this.player.actor.position.x=this.targetX,this.player.actor.position.y=this.targetY;else{const o=1-Math.exp(-22*t);this.player.actor.position.x+=(this.targetX-this.player.actor.position.x)*o,this.player.actor.position.y+=(this.targetY-this.player.actor.position.y)*o}this.player.actor.velocity.x=this.targetVx,this.player.actor.velocity.y=this.targetVy;let r=this.targetAimAngle-this.currentAimAngle;for(;r<-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;const a=1-Math.exp(-25*t);this.currentAimAngle+=r*a,this.player.mesh.update(t,this.player.actor.position.x,this.player.actor.position.y,this.targetVx,this.targetVy,this.targetIsGrounded,this.currentAimAngle,this.targetIsSliding),this.targetIsJetFlying&&Math.random()<.6&&this.particles.spawnJetpackSmoke(this.player.actor.position.x+(this.targetFacingRight?-.2:.2),this.player.actor.position.y+.35,this.targetVx*.5,-3.5)}}class zl{constructor(t,e=3){x(this,"teamScores",{blue:0,red:0});x(this,"targetScore",25);x(this,"matchTimeRemaining",600);x(this,"isMatchOver",!1);x(this,"winningTeam",null);x(this,"scene");this.scene=t,this.targetScore=e>=5?40:25}get blueScore(){return this.teamScores.blue}get redScore(){return this.teamScores.red}update(t){this.isMatchOver||(this.matchTimeRemaining=Math.max(0,this.matchTimeRemaining-t),this.matchTimeRemaining<=0&&(this.isMatchOver=!0,this.teamScores.blue>this.teamScores.red?this.winningTeam="blue":this.teamScores.red>this.teamScores.blue?this.winningTeam="red":this.winningTeam="draw"))}recordKill(t,e){if(!this.isMatchOver){if(e&&e.stats.team&&t.stats.team){if(e.stats.team===t.stats.team)return;e.stats.team==="blue"?this.teamScores.blue++:e.stats.team==="red"&&this.teamScores.red++}this.teamScores.blue>=this.targetScore?(this.isMatchOver=!0,this.winningTeam="blue"):this.teamScores.red>=this.targetScore&&(this.isMatchOver=!0,this.winningTeam="red")}}isFriendlyFire(t,e){return!t.stats.team||!e.stats.team||t.stats.team==="none"||e.stats.team==="none"?!1:t.stats.team===e.stats.team}}class Vl{constructor(t,e=20){x(this,"targetKills",20);x(this,"matchTimeRemaining",600);x(this,"isMatchOver",!1);x(this,"winnerId",null);x(this,"scene");this.scene=t,this.targetKills=e}update(t,e){if(!this.isMatchOver){this.matchTimeRemaining=Math.max(0,this.matchTimeRemaining-t);for(const i of e)if(i.stats.kills>=this.targetKills){this.isMatchOver=!0,this.winnerId=i.stats.id;break}if(this.matchTimeRemaining<=0){this.isMatchOver=!0;let i=-1,n=null;for(const r of e)r.stats.kills>i&&(i=r.stats.kills,n=r.stats.id);this.winnerId=n}}}recordKill(t,e){this.isMatchOver||e&&(e.stats.kills++,e.stats.kills>=this.targetKills&&(this.isMatchOver=!0,this.winnerId=e.stats.id))}}class N_{constructor(t){x(this,"currentMode",Qt.ODOGWU_STASH);x(this,"currentMap",ae.BIRNIN_KANO);x(this,"tdmMode");x(this,"ffaMode");x(this,"heistMode");x(this,"odogwuMode");x(this,"vaultMode");x(this,"apapaMode");x(this,"players",[]);x(this,"bots",[]);x(this,"remoteControllers",new Map);x(this,"pickups",[]);x(this,"isMatchOver",!1);x(this,"scene");x(this,"respawnTimeouts",[]);this.scene=t}cleanup(){for(const t of this.respawnTimeouts)clearTimeout(t);this.respawnTimeouts=[];for(const t of this.players)t.destroy();this.players=[],this.bots=[],this.remoteControllers.clear();for(const t of this.pickups)t.destroy(this.scene);this.pickups=[],this.heistMode&&(this.heistMode.destroy(this.scene),this.heistMode=void 0),this.tdmMode=void 0,this.ffaMode=void 0,this.odogwuMode&&(this.odogwuMode.destroy(this.scene),this.odogwuMode=void 0),this.vaultMode&&(this.vaultMode.destroy(this.scene),this.vaultMode=void 0),this.apapaMode&&(this.apapaMode.destroy(this.scene),this.apapaMode=void 0)}initMatch(t,e,i,n=ae.BIRNIN_KANO,r=!0,a=3){this.cleanup(),this.currentMode=t,this.currentMap=n,this.isMatchOver=!1,t===Qt.TEAM_DEATHMATCH?this.tdmMode=new zl(this.scene,a):t===Qt.FREE_FOR_ALL?this.ffaMode=new Vl(this.scene,20):t===Qt.ODOGWU_STASH||t===Qt.VAULT_HEIST?this.heistMode=new Hl(this.scene,n):this.apapaMode=new Bl(this.scene);const o=n===ae.LAGOS_GOSLOW?{x:16,y:6.5}:{x:14,y:14.5},c=new es(this.scene,"player_local",e||"Operative_01",o.x,o.y,!0,i),l=t===Qt.TEAM_DEATHMATCH||(t===Qt.ODOGWU_STASH||t===Qt.VAULT_HEIST)&&a>1;if(l?c.setTeam("blue",!0):c.setTeam("none",!0),this.players.push(c),r){const d=[{id:"bot_sarki",name:"Sarkin_Kano",rig:xt.BREACH_BOOSTER,weapon:W.RIFLE_XAG47,x:26,y:18.5},{id:"bot_arewa",name:"Arewa_Sniper",rig:xt.PHASE_DASH,weapon:W.RAIL_SNIPER,x:62,y:34.5},{id:"bot_danauta",name:"Dan_auta_234",rig:xt.OVERDRIVE_SLIDE,weapon:W.AKIMBO_UZIS,x:42,y:18.5},{id:"bot_ghost",name:"Ghost_Lagos",rig:xt.PHASE_DASH,weapon:W.GHOST_SMG,x:52,y:26.5},{id:"bot_ekoviper",name:"Eko_Viper",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12,x:20,y:24.5},{id:"bot_delta",name:"Delta_Kano",rig:xt.BREACH_BOOSTER,weapon:W.VULCAN_MINIGUN,x:34,y:18.5},{id:"bot_zaria",name:"Zaria_Fox",rig:xt.PHASE_DASH,weapon:W.BUNKER_RPG,x:48,y:18.5},{id:"bot_ibadan",name:"Ibadan_Heavy",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12,x:58,y:26.5},{id:"bot_kaduna",name:"Kaduna_Strike",rig:xt.OVERDRIVE_SLIDE,weapon:W.RIFLE_XAG47,x:18,y:14.5}],u=[{id:"bot_sarki",name:"Sarkin_Kano",rig:xt.BREACH_BOOSTER,weapon:W.RIFLE_XAG47,x:24,y:6.5},{id:"bot_arewa",name:"Arewa_Sniper",rig:xt.PHASE_DASH,weapon:W.RAIL_SNIPER,x:64,y:28.5},{id:"bot_danauta",name:"Dan_auta_234",rig:xt.OVERDRIVE_SLIDE,weapon:W.AKIMBO_UZIS,x:56,y:6.5},{id:"bot_ghost",name:"Ghost_Lagos",rig:xt.PHASE_DASH,weapon:W.GHOST_SMG,x:38,y:22.5},{id:"bot_ekoviper",name:"Eko_Viper",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12,x:12,y:24.5},{id:"bot_delta",name:"Delta_Kano",rig:xt.BREACH_BOOSTER,weapon:W.VULCAN_MINIGUN,x:30,y:6.5},{id:"bot_zaria",name:"Zaria_Fox",rig:xt.PHASE_DASH,weapon:W.BUNKER_RPG,x:46,y:22.5},{id:"bot_ibadan",name:"Ibadan_Heavy",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12,x:68,y:6.5},{id:"bot_kaduna",name:"Kaduna_Strike",rig:xt.OVERDRIVE_SLIDE,weapon:W.RIFLE_XAG47,x:18,y:24.5}],f=n===ae.LAGOS_GOSLOW?u:d,g=l?a*2-1:5;for(let v=0;v<g;v++){const m=f[v%f.length],p=new es(this.scene,`${m.id}_${v}`,m.name,m.x+(v>4?(v-4)*2:0),m.y,!1,m.rig);if(p.stats.primaryWeapon=m.weapon,p.stats.activeWeapon=m.weapon,p.mesh.setWeapon(m.weapon),l){const S=v<a-1;p.setTeam(S?"blue":"red",S)}else p.setTeam("none",!1);this.players.push(p);const T=new Fl(p);this.bots.push(T)}}return(n===ae.LAGOS_GOSLOW?[{x:8,y:6.5,type:"cash",respawn:!1},{x:22,y:6.5,type:"cash",respawn:!1},{x:38,y:22.5,type:"cash",respawn:!1},{x:54,y:6.5,type:"cash",respawn:!1},{x:70,y:6.5,type:"cash",respawn:!1},{x:14,y:28.5,type:"cash",respawn:!1},{x:26,y:22.5,type:"weapon",wId:W.SHOTGUN_AA12,respawn:!0},{x:50,y:22.5,type:"weapon",wId:W.BUNKER_RPG,respawn:!0},{x:12,y:3.5,type:"health",respawn:!0},{x:64,y:3.5,type:"health",respawn:!0},{x:28,y:7.5,type:"health",respawn:!0},{x:44,y:22.5,type:"health",respawn:!0},{x:16,y:29.5,type:"health",respawn:!0}]:[{x:10,y:13.5,type:"cash",respawn:!1},{x:25,y:3.5,type:"cash",respawn:!1},{x:24,y:17.5,type:"cash",respawn:!1},{x:40,y:17.5,type:"cash",respawn:!1},{x:55,y:17.5,type:"cash",respawn:!1},{x:65,y:3.5,type:"cash",respawn:!1},{x:40,y:27.5,type:"cash",respawn:!1},{x:18,y:13.5,type:"weapon",wId:W.BUNKER_RPG,respawn:!0},{x:62,y:25.5,type:"weapon",wId:W.VULCAN_MINIGUN,respawn:!0},{x:14,y:3.5,type:"health",respawn:!0},{x:66,y:3.5,type:"health",respawn:!0},{x:10,y:13.5,type:"health",respawn:!0},{x:40,y:17.5,type:"health",respawn:!0},{x:64,y:14.5,type:"health",respawn:!0},{x:40,y:27.5,type:"health",respawn:!0}]).forEach(d=>{const u=new Ua(this.scene,d.type,d.x,d.y,25e3,d.wId,d.respawn);this.pickups.push(u)}),c}initMultiplayerMatch(t,e,i,n,r,a,o,c=!0,l=3,h=!1){this.cleanup(),this.currentMode=t,this.currentMap=r,this.isMatchOver=!1,t===Qt.TEAM_DEATHMATCH?this.tdmMode=new zl(this.scene,l):t===Qt.FREE_FOR_ALL?this.ffaMode=new Vl(this.scene,20):t===Qt.ODOGWU_STASH||t===Qt.VAULT_HEIST?this.heistMode=new Hl(this.scene,r):this.apapaMode=new Bl(this.scene);const d=r===ae.LAGOS_GOSLOW?[{x:16,y:6.5},{x:24,y:6.5},{x:38,y:22.5},{x:56,y:6.5},{x:64,y:28.5},{x:12,y:24.5}]:[{x:14,y:14.5},{x:26,y:18.5},{x:42,y:18.5},{x:52,y:26.5},{x:62,y:34.5},{x:20,y:24.5}];let u=0;const f=d[u++],g=new es(this.scene,e,i||"Operative_01",f.x,f.y,!0,n),v=t===Qt.TEAM_DEATHMATCH||(t===Qt.ODOGWU_STASH||t===Qt.VAULT_HEIST)&&l>1;if(v?g.setTeam("blue",!0):g.setTeam("none",!0),this.players.push(g),this.remoteControllers.clear(),a.forEach(p=>{if(p.id===e)return;const T=d[u%d.length];u++;const S=new es(this.scene,p.id,p.name,T.x,T.y,!1,p.rig);if(S.stats.primaryWeapon=p.primaryWeapon,S.stats.activeWeapon=p.primaryWeapon,S.mesh.setWeapon(p.primaryWeapon),v){const C=this.players.filter(R=>R.stats.team==="blue").length<l;S.setTeam(C?"blue":"red",C)}else S.setTeam("none",!1);this.players.push(S);const M=new Bh(S,o);this.remoteControllers.set(p.id,M)}),c&&h){const p=v?l*2:6,T=Math.max(0,p-this.players.length),S=r===ae.LAGOS_GOSLOW?[{id:"bot_sarki",name:"Sarkin_Kano",rig:xt.BREACH_BOOSTER,weapon:W.RIFLE_XAG47},{id:"bot_arewa",name:"Arewa_Sniper",rig:xt.PHASE_DASH,weapon:W.RAIL_SNIPER},{id:"bot_danauta",name:"Dan_auta_234",rig:xt.OVERDRIVE_SLIDE,weapon:W.AKIMBO_UZIS},{id:"bot_ghost",name:"Ghost_Lagos",rig:xt.PHASE_DASH,weapon:W.GHOST_SMG},{id:"bot_ekoviper",name:"Eko_Viper",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12}]:[{id:"bot_sarki",name:"Sarkin_Kano",rig:xt.BREACH_BOOSTER,weapon:W.RIFLE_XAG47},{id:"bot_arewa",name:"Arewa_Sniper",rig:xt.PHASE_DASH,weapon:W.RAIL_SNIPER},{id:"bot_danauta",name:"Dan_auta_234",rig:xt.OVERDRIVE_SLIDE,weapon:W.AKIMBO_UZIS},{id:"bot_ghost",name:"Ghost_Lagos",rig:xt.PHASE_DASH,weapon:W.GHOST_SMG},{id:"bot_ekoviper",name:"Eko_Viper",rig:xt.GLITCH_ANCHOR,weapon:W.SHOTGUN_AA12}];for(let M=0;M<T;M++){const I=S[M%S.length],C=d[u%d.length];u++;const R=new es(this.scene,I.id,I.name,C.x,C.y,!1,I.rig);if(R.stats.primaryWeapon=I.weapon,R.stats.activeWeapon=I.weapon,R.mesh.setWeapon(I.weapon),v){const y=this.players.filter(A=>A.stats.team==="blue").length<l;R.setTeam(y?"blue":"red",y)}else R.setTeam("none",!1);this.players.push(R);const P=new Fl(R);this.bots.push(P)}}return(r===ae.LAGOS_GOSLOW?[{x:8,y:6.5,type:"cash",respawn:!1},{x:22,y:6.5,type:"cash",respawn:!1},{x:38,y:22.5,type:"cash",respawn:!1},{x:54,y:6.5,type:"cash",respawn:!1},{x:70,y:6.5,type:"cash",respawn:!1},{x:14,y:28.5,type:"cash",respawn:!1},{x:26,y:22.5,type:"weapon",wId:W.SHOTGUN_AA12,respawn:!0},{x:50,y:22.5,type:"weapon",wId:W.BUNKER_RPG,respawn:!0},{x:12,y:3.5,type:"health",respawn:!0},{x:64,y:3.5,type:"health",respawn:!0},{x:28,y:7.5,type:"health",respawn:!0},{x:44,y:22.5,type:"health",respawn:!0},{x:16,y:29.5,type:"health",respawn:!0}]:[{x:10,y:13.5,type:"cash",respawn:!1},{x:25,y:3.5,type:"cash",respawn:!1},{x:24,y:17.5,type:"cash",respawn:!1},{x:40,y:17.5,type:"cash",respawn:!1},{x:55,y:17.5,type:"cash",respawn:!1},{x:65,y:3.5,type:"cash",respawn:!1},{x:40,y:27.5,type:"cash",respawn:!1},{x:18,y:13.5,type:"weapon",wId:W.BUNKER_RPG,respawn:!0},{x:62,y:25.5,type:"weapon",wId:W.VULCAN_MINIGUN,respawn:!0},{x:14,y:3.5,type:"health",respawn:!0},{x:66,y:3.5,type:"health",respawn:!0},{x:10,y:13.5,type:"health",respawn:!0},{x:40,y:17.5,type:"health",respawn:!0},{x:64,y:14.5,type:"health",respawn:!0},{x:40,y:27.5,type:"health",respawn:!0}]).forEach(p=>{const T=new Ua(this.scene,p.type,p.x,p.y,25e3,p.wId,p.respawn);this.pickups.push(T)}),g}getTimeRemaining(){return this.heistMode?this.heistMode.matchTimeRemaining:this.odogwuMode?this.odogwuMode.matchTimeRemaining:this.vaultMode?this.vaultMode.matchTimeRemaining:this.apapaMode?this.apapaMode.matchTimeRemaining:0}getExtractionPos(){var t;return this.heistMode?this.heistMode.extractionPadPos:((t=this.odogwuMode)==null?void 0:t.extractionPosition)||new L(40,41,0)}isExtractionActive(){var t;return this.heistMode?this.heistMode.currentAct===Re.ACT_3_EXTRACTION:!!((t=this.odogwuMode)!=null&&t.isExtractionActive())}handlePlayerElimination(t,e){this.tdmMode?this.tdmMode.recordKill(t,e):this.ffaMode&&this.ffaMode.recordKill(t,e),this.heistMode&&(e?this.heistMode.handleKill(e,t):this.heistMode.handlePlayerDeath(t)),this.odogwuMode&&this.odogwuMode.handlePlayerElimination(t,e,this.scene,this.pickups),t.mesh.setOdogwuCrown(!1);const i=new Ua(this.scene,"cash",t.actor.position.x,t.actor.position.y+.8,5e4);this.pickups.push(i),t.respawnTimer=3.5}checkPickupCollisions(t,e){if(!t.stats.isDead)for(let i=0;i<this.pickups.length;i++){const n=this.pickups[i];if(n.isCollected)continue;if(t.actor.position.distanceTo(n.mesh.position)<2){if(n.type==="health"){if(t.stats.hp>=t.stats.maxHp)continue;t.heal(50),n.isCollected=!0,n.mesh.visible=!1,n.respawnTimer=20,e()}else if(n.type==="cash")n.isCollected=!0,t.stats.cash+=n.value,n.destroy(this.scene),e();else if(n.type==="weapon"&&n.weaponId){n.isCollected=!0,n.mesh.visible=!1,n.respawnTimer=25;const a=t.stats.activeWeapon,o=He[a];o&&(t.stats.ammo[a]=o.magSize,t.reloadTimer=0),t.stats.cash+=15e3,e()}}}}update(t,e,i,n,r,a){if(this.isMatchOver)return;this.tdmMode?(this.tdmMode.update(t),this.tdmMode.isMatchOver&&(this.isMatchOver=!0)):this.ffaMode?(this.ffaMode.update(t,this.players),this.ffaMode.isMatchOver&&(this.isMatchOver=!0)):this.heistMode?(this.heistMode.update(t,this.players,a,e),this.heistMode.currentAct===Re.MATCH_OVER&&(this.isMatchOver=!0)):this.odogwuMode?(this.odogwuMode.update(t,this.players),this.odogwuMode.matchTimeRemaining<=0&&(this.isMatchOver=!0)):this.vaultMode?(this.vaultMode.update(t,this.players),this.vaultMode.matchTimeRemaining<=0&&(this.isMatchOver=!0)):this.apapaMode&&(this.apapaMode.update(t,this.players),this.apapaMode.matchTimeRemaining<=0&&(this.isMatchOver=!0));for(let u=this.pickups.length-1;u>=0;u--){const f=this.pickups[u];f.update(t),f.isCollected&&!f.canRespawn&&this.pickups.splice(u,1)}this.players.forEach(u=>{this.checkPickupCollisions(u,r)}),this.remoteControllers.forEach(u=>{u.update(t)});const o=this.isExtractionActive(),c=this.getExtractionPos();this.bots.forEach(u=>{u.update(t,this.players,this.pickups,e,i,n,o,c),this.heistMode&&this.heistMode.currentAct===Re.ACT_1_BREACH&&u.player.actor.position.distanceTo(this.heistMode.vaultPos)<14&&Math.random()<.15&&this.heistMode.damageVault(15,e,a)});const l=[{x:14,y:14},{x:34,y:18},{x:48,y:18},{x:65,y:26},{x:25,y:5},{x:55,y:5}],h=[{x:8,y:6.5},{x:22,y:6.5},{x:38,y:22},{x:54,y:6.5},{x:16,y:28},{x:66,y:28}],d=this.currentMap===ae.LAGOS_GOSLOW?h:l;this.players.forEach(u=>{if(u.stats.isDead&&u.respawnTimer>0&&(u.respawnTimer-=t,u.respawnTimer<=0)){const f=d[Math.floor(Math.random()*d.length)];u.respawn(f.x,f.y)}}),this.resolvePlayerSeparation(e)}resolvePlayerSeparation(t){const e=this.players.filter(i=>!i.stats.isDead);for(let i=0;i<e.length;i++)for(let n=i+1;n<e.length;n++){const r=e[i],a=e[n],o=a.actor.position.x-r.actor.position.x,c=a.actor.position.y+.9-(r.actor.position.y+.9),l=.95;if(Math.abs(o)<l&&Math.abs(c)<1.6){const d=l-Math.abs(o),u=o===0?i<n?-1:1:Math.sign(o),f=.4,g=r.actor.position.x-u*(d*.5),v=Math.floor(r.actor.position.y+.3),m=Math.floor(r.actor.position.y+1.4),p=Math.floor(g+(u<0?f:-f)),T=t.isSolid(p,v)||t.isSolid(p,m),S=a.actor.position.x+u*(d*.5),M=Math.floor(a.actor.position.y+.3),I=Math.floor(a.actor.position.y+1.4),C=Math.floor(S+(u>0?f:-f)),R=t.isSolid(C,M)||t.isSolid(C,I);!T&&!R?(r.actor.position.x-=u*(d*.5),a.actor.position.x+=u*(d*.5)):!T&&R?r.actor.position.x-=u*d:T&&!R&&(a.actor.position.x+=u*d);const P=(r.actor.velocity.x+a.actor.velocity.x)*.5;r.actor.velocity.x=P-u*1.5,a.actor.velocity.x=P+u*1.5}}}getScoreboard(){const t=this.players.map(e=>{var i,n;return{id:e.stats.id,name:e.stats.name,cash:e.stats.cash,kills:e.stats.kills,deaths:e.stats.deaths,wallsDestroyed:e.stats.wallsDestroyed,isSarki:((i=this.heistMode)==null?void 0:i.carrierId)===e.stats.id||!!e.mesh.crownMesh.visible,isOdogwu:((n=this.heistMode)==null?void 0:n.carrierId)===e.stats.id||!!e.mesh.crownMesh.visible,isLocal:e.stats.isLocalPlayer}});return t.sort((e,i)=>i.cash-e.cash),t}}class k_{constructor(t,e){x(this,"canvas");x(this,"ctx");x(this,"camera");x(this,"floatingTexts",[]);x(this,"projVec",new L);const i=document.getElementById(t);if(!i)throw new Error(`HUD Canvas ${t} not found`);this.canvas=i,this.ctx=this.canvas.getContext("2d"),this.camera=e,this.resize(),window.addEventListener("resize",this.resize.bind(this))}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addDamagePopup(t,e,i,n="#ff3366",r=22){this.projVec.set(t,e,0).project(this.camera);const a=(this.projVec.x*.5+.5)*this.canvas.width,o=(-(this.projVec.y*.5)+.5)*this.canvas.height;this.floatingTexts.push({text:i,x:a,y:o,color:n,size:r,alpha:1,life:0})}render(t,e,i,n,r=.016){const a=this.ctx,o=this.canvas.width,c=this.canvas.height;a.clearRect(0,0,o,c),this.renderTopBar(a,o,c,t,i),this.renderEdgeIndicators(a,o,c,t,i),this.renderFloatingTexts(a,r),this.updateHTMLControls(t,e),this.renderVisualSticks(a,o,c,e,t),this.renderRigCooldown(a,o,c,t,e.state.isTouch),t.stats.isDead&&this.renderDeathScreen(a,o,c,t)}renderTopBar(t,e,i,n,r){var R;const a=e<900,o=a?200:280,c=a?30:34;t.fillStyle="rgba(15, 23, 42, 0.45)",t.strokeStyle="rgba(56, 189, 248, 0.35)",t.lineWidth=1.5,t.beginPath(),t.roundRect(e*.5-o*.5,8,o,c,8),t.fill(),t.stroke();const l=Math.max(0,Math.floor(r.getTimeRemaining())),h=Math.floor(l/60),d=l%60,u=`${h}:${d<10?"0":""}${d}`;let f=r.currentMode.replace("_"," ");if(r.heistMode){const P=!!(n.stats.team&&n.stats.team!=="none");if(r.heistMode.currentAct===Re.ACT_1_BREACH)f=P?`2v2 SQUAD HEIST: BREACH VAULT (${Math.round(r.heistMode.vaultHP)} HP)`:`ACT I: VAULT (${Math.round(r.heistMode.vaultHP)} HP)`;else if(r.heistMode.currentAct===Re.ACT_2_CARRIER){const _=r.players.find(y=>{var A;return y.stats.id===((A=r.heistMode)==null?void 0:A.carrierId)});_&&P?_.stats.id===n.stats.id?f="⭐ YOU HAVE THE ODOGWU STASH! EVAC!":_.stats.team===n.stats.team?f="🛡️ SQUADMATE HAS THE STASH! ESCORT!":f="⚠️ ENEMY SQUAD HAS THE STASH! INTERCEPT!":f="ACT II: SARKI CARRIER"}else r.heistMode.currentAct===Re.ACT_3_EXTRACTION&&(r.heistMode.isExtractionContested?f="⚠️ LZ CONTESTED BY ENEMY!":r.heistMode.extractionProgress.has(n.stats.id)?f="🚁 YOU ARE EXTRACTING! HOLD ZONE!":f=P?"ACT III: SQUAD CHOPPER EVAC":"ACT III: CHOPPER EVAC")}else r.tdmMode?f=`TEAM DEATHMATCH (TARGET: ${r.tdmMode.targetScore})`:r.ffaMode&&(f=`FREE FOR ALL (FIRST TO ${r.ffaMode.targetKills})`);if(t.fillStyle=(R=r.heistMode)!=null&&R.isExtractionContested?"#ef4444":"#f59e0b",t.font=`800 ${a?8.5:9.5}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(f,e*.5,a?15:17),r.tdmMode){const P=r.tdmMode.blueScore,_=r.tdmMode.redScore;t.font=`900 ${a?13:15}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillStyle="#38bdf8",t.fillText(`BLUE: ${P}`,e*.5-45,a?29:32),t.fillStyle="#64748b",t.fillText("-",e*.5,a?29:32),t.fillStyle="#f87171",t.fillText(`RED: ${_}`,e*.5+45,a?29:32)}else if(r.ffaMode)t.fillStyle=l<=30?"#ef4444":"#f8fafc",t.font=`800 ${a?13:15}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(`${u}  •  KILLS: ${n.stats.kills}/${r.ffaMode.targetKills}`,e*.5,a?29:32);else if(r.heistMode&&n.stats.team&&n.stats.team!=="none"){t.fillStyle=l<=30?"#ef4444":"#38bdf8",t.font=`800 ${a?12:14}px "JetBrains Mono", monospace`,t.textAlign="center";const P=(n.stats.team||"blue").toUpperCase();t.fillText(`${u}  •  [${P} SQUAD 2v2]`,e*.5,a?29:32)}else t.fillStyle=l<=30?"#ef4444":"#f8fafc",t.font=`800 ${a?14:16}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(u,e*.5,a?29:32);t.fillStyle="#cbd5e1",t.font=`700 ${a?9:10}px "JetBrains Mono", monospace`,t.textAlign="right",t.fillText(`K:${n.stats.kills} D:${n.stats.deaths}`,e*.5+o*.5-8,a?29:32);const g=a?130:155,v=a?26:28,m=Math.max(16,e*.5-o*.5-g-10),p=8;t.fillStyle="rgba(6, 78, 59, 0.70)",t.strokeStyle="#10b981",t.lineWidth=1.5,t.beginPath(),t.roundRect(m,p,g,v,8),t.fill(),t.stroke(),t.fillStyle="#34d399",t.font=`800 ${a?12:13.5}px "JetBrains Mono", monospace`,t.textAlign="center",t.fillText(`💰 ₦${n.stats.cash.toLocaleString()}`,m+g*.5,p+(a?17:19));const T=16,S=a?42:46,M=a?110:145;t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,S,M,9);const I=Math.max(0,n.stats.hp/n.stats.maxHp);t.fillStyle=I>.35?"#10b981":"#ef4444",t.fillRect(T,S,M*I,9),t.strokeStyle="rgba(255, 255, 255, 0.2)",t.strokeRect(T,S,M,9),t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,S+11,M,4);const C=Math.max(0,n.stats.armor/n.stats.maxArmor);t.fillStyle="#38bdf8",t.fillRect(T,S+11,M*C,4),t.fillStyle="rgba(15, 23, 42, 0.5)",t.fillRect(T,S+17,M,5),t.fillStyle="#f59e0b",t.fillRect(T,S+17,M,5),t.strokeStyle="rgba(251, 191, 36, 0.55)",t.strokeRect(T,S+17,M,5),t.fillStyle="#fbbf24",t.font='800 8.5px "JetBrains Mono", monospace',t.textAlign="left",t.fillText("⚡ UNLIMITED NITRO",T,S+32)}updateHTMLControls(t,e){const i=document.getElementById("btn-touch-swap");if(i){const c=He[t.stats.activeWeapon],l=t.stats.ammo[t.stats.activeWeapon];t.reloadTimer>0?i.innerText=`⚡ RLD ${t.reloadTimer.toFixed(1)}s`:i.innerText=`🔄 ${c.name.split(" ")[0]} [${l}]`}const n=document.getElementById("btn-touch-fire");n&&(t.reloadTimer>0?(n.innerText=`RLD ${t.reloadTimer.toFixed(1)}s`,n.style.opacity="0.5"):(n.innerText="🎯 FIRE",n.style.opacity=e.state.firing?"1.0":"0.85"));const r=document.getElementById("btn-touch-rig");if(r)if(t.stats.rigCooldownTimer>0)r.innerText=`${t.stats.rigCooldownTimer.toFixed(1)}s`,r.style.opacity="0.45";else{const c={BREACH_BOOSTER:"🚀 BOOST",OVERDRIVE_SLIDE:"⚡ SLIDE",PHASE_DASH:"✨ PHASE",GLITCH_ANCHOR:"⚓ RECALL"};r.innerText=c[t.stats.rigType]||"⚡ RIG",r.style.opacity="0.9"}const a=document.getElementById("btn-touch-c4");a&&(a.innerText=`💣 C4 [${t.stats.c4Count}]`);const o=document.getElementById("btn-touch-fly");o&&(o.style.opacity=t.isJetFlying?"1.0":"0.85")}renderVisualSticks(t,e,i,n,r){if(!(n.state.isTouch||"ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024))return;const o=n.isLeftActive?n.leftTouchStart.x:95,c=n.isLeftActive?n.leftTouchStart.y:i-95,l=n.isLeftActive?n.leftTouchCurrent.x:o,h=n.isLeftActive?n.leftTouchCurrent.y:c,d=56;t.beginPath(),t.arc(o,c,d,0,Math.PI*2),t.fillStyle="rgba(15, 23, 42, 0.45)",t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.18)",t.lineWidth=1.5,t.stroke();const u=Math.max(0,Math.min(1,r.jetFuel/r.maxJetFuel)),f=Math.PI*.75,g=Math.PI*1.5,v=f+g*u;t.beginPath(),t.arc(o,c,d+4,f,f+g),t.strokeStyle="rgba(56, 189, 248, 0.15)",t.lineWidth=4,t.stroke(),u>.01&&(t.save(),t.beginPath(),t.arc(o,c,d+4,f,v),t.strokeStyle=u>.25?"#06b6d4":"#ef4444",t.lineWidth=4.5,t.shadowColor=u>.25?"#06b6d4":"#ef4444",t.shadowBlur=10,t.stroke(),t.restore()),t.beginPath(),t.arc(l,h,22,0,Math.PI*2),t.fillStyle=r.isJetFlying?"rgba(6, 182, 212, 0.55)":"rgba(56, 189, 248, 0.35)",t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.7)",t.lineWidth=1.5,t.stroke();const m=n.isRightActive?n.rightTouchStart.x:e-95,p=n.isRightActive?n.rightTouchStart.y:i-95,T=n.isRightActive?n.rightTouchCurrent.x:m,S=n.isRightActive?n.rightTouchCurrent.y:p,M=Math.hypot(T-m,S-p),I=68,C=I*.35,R=M>=C||n.state.firing;t.beginPath(),t.arc(m,p,I,0,Math.PI*2),t.fillStyle=R?"rgba(239, 68, 68, 0.16)":"rgba(15, 23, 42, 0.45)",t.fill(),t.save(),t.setLineDash([4,4]),t.beginPath(),t.arc(m,p,C,0,Math.PI*2),t.strokeStyle=R?"rgba(239, 68, 68, 0.6)":"rgba(255, 255, 255, 0.45)",t.lineWidth=1.5,t.stroke(),t.restore(),t.save(),t.beginPath(),t.arc(m,p,I,0,Math.PI*2),R?(t.strokeStyle="#ef4444",t.lineWidth=3,t.shadowColor="#ef4444",t.shadowBlur=16):(t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=1.5),t.stroke(),t.restore(),t.save(),t.beginPath(),t.arc(T,S,22,0,Math.PI*2),R?(t.fillStyle="rgba(239, 68, 68, 0.85)",t.shadowColor="#ef4444",t.shadowBlur=14):t.fillStyle="rgba(255, 255, 255, 0.35)",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.5,t.stroke(),t.beginPath(),t.arc(T,S,3,0,Math.PI*2),t.fillStyle="#ffffff",t.fill(),t.restore()}renderEdgeIndicators(t,e,i,n,r){var u;const a=e*.5,o=i*.5,c=(f,g,v,m,p)=>{const T=f-n.actor.position.x,S=g-n.actor.position.y,M=Math.round(Math.hypot(T,S));this.projVec.set(f,g,0).project(this.camera);const I=(this.projVec.x*.5+.5)*e,C=(-(this.projVec.y*.5)+.5)*i,R=this.projVec.z>1,P=48,_=!R&&I>=P&&I<=e-P&&C>=P&&C<=i-P;if(t.save(),_){t.strokeStyle=m,t.lineWidth=1.5,t.shadowColor=m,t.shadowBlur=8;const y=14;t.strokeRect(I-y,C-y,y*2,y*2),t.fillStyle="rgba(9, 13, 22, 0.85)",t.fillRect(I-44,C+y+4,88,18),t.strokeRect(I-44,C+y+4,88,18),t.fillStyle=m,t.font='800 10.5px "JetBrains Mono", monospace',t.textAlign="center",t.fillText(`${p} ${M}m`,I,C+y+17)}else{const y=R?Math.atan2(-S,-T):Math.atan2(S,T),A=e*.5-P,O=i*.5-P,D=a+Math.cos(y)*A,G=o-Math.sin(y)*O;t.fillStyle=m,t.shadowColor=m,t.shadowBlur=10,t.beginPath();const X=D+Math.cos(y)*12,z=G-Math.sin(y)*12,K=D+Math.cos(y+2.5)*8,H=G-Math.sin(y+2.5)*8,st=D+Math.cos(y-2.5)*8,q=G-Math.sin(y-2.5)*8;t.moveTo(X,z),t.lineTo(K,H),t.lineTo(st,q),t.closePath(),t.fill();const J=`${p} ${v} [${M}m]`;t.font='800 11px "JetBrains Mono", monospace';const ct=t.measureText(J).width+16,Et=D-ct*.5,j=G+14;t.fillStyle="rgba(9, 13, 22, 0.88)",t.strokeStyle=m,t.lineWidth=1.2,t.beginPath(),t.roundRect(Et,j,ct,20,4),t.fill(),t.stroke(),t.fillStyle="#f8fafc",t.textAlign="center",t.fillText(J,D,j+14)}t.restore()};if(r.heistMode&&!r.heistMode.isVaultBreached){const f=Math.round(r.heistMode.vaultHP);c(40,3.5,`VAULT (${f}HP)`,"#f59e0b","🏢")}const l=r.players.find(f=>f.mesh.crownMesh.visible&&f.stats.id!==n.stats.id);if(l&&!l.stats.isDead&&c(l.actor.position.x,l.actor.position.y+.95,"ODOGWU","#eab308","👑"),r.isExtractionActive()){const f=r.getExtractionPos(),g=(u=r.heistMode)==null?void 0:u.isExtractionContested;c(f.x,f.y,g?"CONTESTED EVAC":"EXTRACTION",g?"#ef4444":"#10b981","🚁")}let h=null,d=45;for(let f=0;f<r.pickups.length;f++){const g=r.pickups[f];if(g.isCollected||g.type!=="cash")continue;const v=n.actor.position.distanceTo(g.mesh.position);v<d&&v>8&&(d=v,h=g)}h&&c(h.mesh.position.x,h.mesh.position.y,"CASH","#34d399","💰")}renderRigCooldown(t,e,i,n,r){const o={[xt.BREACH_BOOSTER]:2.5,[xt.OVERDRIVE_SLIDE]:1.5,[xt.PHASE_DASH]:3,[xt.GLITCH_ANCHOR]:4}[n.stats.rigType]||2.5,c=Math.max(0,n.stats.rigCooldownTimer),l=Math.min(1,Math.max(0,1-c/o)),h=c<=0,u={[xt.BREACH_BOOSTER]:"#06b6d4",[xt.OVERDRIVE_SLIDE]:"#f59e0b",[xt.PHASE_DASH]:"#a855f7",[xt.GLITCH_ANCHOR]:"#ec4899"}[n.stats.rigType]||"#06b6d4",f=document.getElementById("btn-touch-rig");if(f&&f.offsetParent!==null){const g=f.getBoundingClientRect(),v=g.left+g.width*.5,m=g.top+g.height*.5,p=g.width*.5+4;if(t.save(),t.beginPath(),t.arc(v,m,p,0,Math.PI*2),t.strokeStyle="rgba(15, 23, 42, 0.55)",t.lineWidth=3.5,t.stroke(),h){const T=.6+Math.sin(performance.now()*.008)*.35;t.beginPath(),t.arc(v,m,p,0,Math.PI*2),t.strokeStyle=u,t.lineWidth=3,t.shadowColor=u,t.shadowBlur=12*T,t.globalAlpha=T,t.stroke()}else{const T=-Math.PI*.5,S=T+l*Math.PI*2;t.beginPath(),t.arc(v,m,p,T,S),t.strokeStyle=u,t.lineWidth=4,t.shadowColor=u,t.shadowBlur=8,t.stroke()}t.restore()}if(!r||e>=900){const m=e*.5-92.5,p=i-38;t.save(),t.fillStyle="rgba(9, 13, 22, 0.85)",t.strokeStyle=h?u:"rgba(148, 163, 184, 0.3)",t.lineWidth=1.2,t.beginPath(),t.roundRect(m,p,185,24,4),t.fill(),t.stroke(),h||(t.fillStyle=u,t.globalAlpha=.5,t.fillRect(m+2,p+2,181*l,20),t.globalAlpha=1),t.fillStyle=h?"#f8fafc":"#94a3b8",t.font='800 10.5px "JetBrains Mono", monospace',t.textAlign="center";const S={[xt.BREACH_BOOSTER]:"BREACH BOOSTER",[xt.OVERDRIVE_SLIDE]:"OVERDRIVE SLIDE",[xt.PHASE_DASH]:"PHASE DASH",[xt.GLITCH_ANCHOR]:"GLITCH ANCHOR"}[n.stats.rigType]||"TACTICAL RIG",M=h?`⚡ [SHIFT] ${S} [READY]`:`⚡ ${S} [${c.toFixed(1)}s]`;t.fillText(M,m+185*.5,p+16),t.restore()}}renderFloatingTexts(t,e){for(let i=this.floatingTexts.length-1;i>=0;i--){const n=this.floatingTexts[i];n.life+=e,n.y-=e*45,n.alpha=Math.max(0,1-n.life/.85),t.save(),t.globalAlpha=n.alpha,t.fillStyle=n.color,t.font=`900 ${n.size}px "JetBrains Mono", monospace`,t.textAlign="center",t.shadowColor="#000000",t.shadowBlur=6,t.fillText(n.text,n.x,n.y),t.restore(),n.life>=.85&&this.floatingTexts.splice(i,1)}}renderDeathScreen(t,e,i,n){t.strokeStyle="rgba(239, 68, 68, 0.35)",t.lineWidth=4,t.strokeRect(2,2,e-4,i-4);const r=Math.max(0,Math.ceil(n.respawnTimer)),a=270,o=30,c=e*.5-a*.5,l=48;t.fillStyle="rgba(10, 16, 13, 0.92)",t.strokeStyle="#ef4444",t.lineWidth=1.2,t.beginPath(),t.roundRect(c,l,a,o,4),t.fill(),t.stroke(),t.fillStyle="#ef4444",t.beginPath(),t.arc(c+16,l+o*.5,4,0,Math.PI*2),t.fill(),t.fillStyle="#f8fafc",t.font='800 11px "JetBrains Mono", monospace',t.textAlign="left",t.fillText(r>0?`[▲] ELIMINATED // RESPAWN: ${r}s`:"[●] REDEPLOYING TO SECTOR...",c+28,l+19)}}function Gh(s,t){return s===Qt.ODOGWU_STASH&&t===2?"2v2 SQUAD HEIST":s===Qt.TEAM_DEATHMATCH&&t===2?"2v2 TDM":s===Qt.TEAM_DEATHMATCH&&t===3?"3v3 TDM":s===Qt.ODOGWU_STASH?"SOLO HEIST":"FREE FOR ALL"}function Hh(s){return s===ae.LAGOS_GOSLOW?"LAGOS GO-SLOW":"BIRNIN KANO"}function F_(s,t,e,i,n,r,a,o,c){const l=Gh(a,o),h=Hh(r);return`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700;800;900&family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap');

      @keyframes pulseGlowGreen {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.45), 0 4px 15px rgba(0, 0, 0, 0.6); }
        50% { box-shadow: 0 0 42px rgba(34, 197, 94, 0.85), 0 6px 20px rgba(0, 0, 0, 0.7); }
      }

      @keyframes modalSlideUp {
        from {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      /* Root Hangar Container - Full Touch Auto */
      .xag-hangar-root {
        position: absolute;
        inset: 0;
        background-color: #030712;
        background-image: 
          radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.0) 0%, rgba(3, 7, 18, 0.45) 60%, rgba(2, 6, 14, 0.96) 100%),
          url('/assets/hangar_hero.jpg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: max(12px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
        box-sizing: border-box;
        overflow: hidden;
        font-family: 'Inter', -apple-system, sans-serif;
        color: #f1f5f9;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        pointer-events: auto !important;
        z-index: 100;
      }

      /* Top Bar */
      .xag-top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 10px;
        z-index: 10;
        pointer-events: auto !important;
      }

      .xag-top-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .xag-contractor-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(9, 13, 22, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.45);
        padding: 5px 12px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .xag-flag-icon {
        font-size: 16px;
      }
      .xag-callsign-input {
        background: transparent;
        border: none;
        outline: none;
        color: #ffffff;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        width: 110px;
        padding: 0;
      }
      .xag-callsign-input:focus {
        border-bottom: 1.5px solid #22c55e;
      }
      .xag-rank-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 800;
        color: #eab308;
        background: rgba(234, 179, 8, 0.15);
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid rgba(234, 179, 8, 0.35);
      }

      .xag-top-center {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .xag-currency-pill {
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(9, 13, 22, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.45);
        padding: 6px 14px;
        border-radius: 20px;
        cursor: pointer;
        transition: transform 0.15s, background 0.15s;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .xag-currency-pill:hover, .xag-currency-pill:active {
        background: rgba(34, 197, 94, 0.25);
        border-color: #22c55e;
        transform: scale(1.02);
      }
      .xag-curr-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        background: #eab308;
        color: #0f172a;
        border-radius: 50%;
        font-weight: 900;
        font-size: 11px;
      }
      .xag-curr-amount {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 800;
        font-size: 13.5px;
        color: #4ade80;
      }

      .xag-top-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .xag-icon-btn {
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: #f8fafc;
        min-width: 42px;
        min-height: 42px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s ease;
      }
      .xag-icon-btn:hover, .xag-icon-btn:active {
        background: rgba(34, 197, 94, 0.25);
        border-color: #22c55e;
        color: #22c55e;
        transform: translateY(-1px);
      }

      /* Center Hero Staging - Completely Clear */
      .xag-center-stage {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        position: relative;
      }
      .xag-watermark {
        font-family: 'Chakra Petch', sans-serif;
        font-size: clamp(24px, 5vw, 48px);
        font-weight: 900;
        letter-spacing: 6px;
        color: rgba(255, 255, 255, 0.05);
        text-transform: uppercase;
        pointer-events: none;
        text-align: center;
      }

      /* Bottom Navigation Dock */
      .xag-bottom-dock {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        gap: 16px;
        z-index: 10;
        pointer-events: auto !important;
      }

      .xag-bottom-left-group {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      /* Navigation Glass Buttons */
      .xag-nav-btn {
        background: rgba(9, 13, 22, 0.88);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 255, 255, 0.16);
        color: #ffffff;
        padding: 10px 16px;
        border-radius: 8px;
        cursor: pointer;
        touch-action: manipulation;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.15s;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
        min-height: 48px;
      }
      .xag-nav-btn:hover, .xag-nav-btn:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.95);
        transform: translateY(-2px);
      }
      .xag-nav-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      .xag-nav-text {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .xag-nav-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
      }
      .xag-nav-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 700;
        color: #94a3b8;
        white-space: nowrap;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Bottom Right Launcher Group */
      .xag-bottom-right-group {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      /* Maps & Mode Selector Card Button */
      .xag-map-mode-card {
        background: rgba(9, 13, 22, 0.92);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1.5px solid rgba(56, 189, 248, 0.45);
        border-radius: 8px;
        padding: 8px 16px;
        cursor: pointer;
        touch-action: manipulation;
        display: flex;
        align-items: center;
        gap: 14px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.5);
        transition: all 0.15s;
        min-height: 56px;
      }
      .xag-map-mode-card:hover, .xag-map-mode-card:active {
        border-color: #38bdf8;
        background: rgba(14, 27, 49, 0.95);
        transform: translateY(-2px);
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
      }
      .xag-mmc-icon {
        font-size: 22px;
      }
      .xag-mmc-info {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .xag-mmc-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #38bdf8;
      }
      .xag-mmc-mode {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
        line-height: 1.1;
      }
      .xag-mmc-theater {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 700;
        color: #94a3b8;
      }
      .xag-mmc-arrow {
        color: #38bdf8;
        font-size: 14px;
        font-weight: 900;
      }

      /* Deploy Action Button */
      .xag-deploy-button {
        position: relative;
        background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
        border: 2px solid #4ade80;
        color: #030712;
        min-width: 180px;
        height: 56px;
        padding: 0 22px;
        border-radius: 8px;
        cursor: pointer;
        touch-action: manipulation;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 35px rgba(34, 197, 94, 0.55), 0 8px 24px rgba(0, 0, 0, 0.5);
        transition: transform 0.15s, box-shadow 0.15s;
        animation: pulseGlowGreen 2.4s infinite;
      }
      .xag-deploy-button:hover, .xag-deploy-button:active {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 0 50px rgba(34, 197, 94, 0.85);
      }
      .xag-hazard-stripe {
        position: absolute;
        left: 0;
        right: 0;
        height: 4px;
        background: repeating-linear-gradient(
          -45deg,
          #0f172a,
          #0f172a 8px,
          #22c55e 8px,
          #22c55e 16px
        );
      }
      .xag-hazard-stripe.top { top: 0; }
      .xag-hazard-stripe.bottom { bottom: 0; }

      .xag-deploy-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.1;
      }
      .xag-deploy-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #052e16;
      }
      .xag-deploy-main {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 18px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #022c12;
      }

      /* ========================================================
         MODAL OVERLAYS (Full-screen, Backdrop-blurred, Touch-safe)
         ======================================================== */
      .xag-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.88);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        z-index: 500;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        pointer-events: auto !important;
      }
      .xag-modal-backdrop.open {
        display: flex;
      }

      .xag-modal-dialog {
        background: #090d16;
        border: 1.5px solid #22c55e;
        box-shadow: 0 0 45px rgba(34, 197, 94, 0.35), 0 16px 40px rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        width: 100%;
        max-width: 680px;
        max-height: 90vh;
        max-height: 90dvh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: modalSlideUp 0.22s ease-out;
        pointer-events: auto !important;
      }

      .xag-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(15, 23, 42, 0.6);
      }
      .xag-modal-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #ffffff;
      }
      .xag-modal-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        color: #22c55e;
        letter-spacing: 1px;
      }
      .xag-modal-close-btn {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #94a3b8;
        font-size: 18px;
        font-weight: 900;
        min-width: 36px;
        min-height: 36px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-modal-close-btn:hover, .xag-modal-close-btn:active {
        background: rgba(239, 68, 68, 0.25);
        border-color: #ef4444;
        color: #f87171;
      }

      .xag-modal-scrollable {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .xag-modal-section-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #94a3b8;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* Arena Theater Selection Cards */
      .xag-theaters-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .xag-theater-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .xag-theater-card:hover, .xag-theater-card:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.9);
      }
      .xag-theater-card.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.12);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-radar-box {
        width: 100%;
        height: 75px;
        border-radius: 4px;
        background: #040807;
        border: 1px solid rgba(34, 197, 94, 0.3);
        overflow: hidden;
      }
      .xag-theater-meta {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .xag-theater-name {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-theater-desc {
        font-size: 10px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* Game Mode Selection Cards */
      .xag-modes-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .xag-mode-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 10px 12px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .xag-mode-card:hover, .xag-mode-card:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.9);
      }
      .xag-mode-card.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.14);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-mode-badge {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #22c55e;
      }
      .xag-mode-card.active .xag-mode-badge {
        color: #4ade80;
      }
      .xag-mode-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-mode-desc {
        font-size: 10px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* Infiltration Bots Toggle */
      .xag-toggle-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 12px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-toggle-card:hover, .xag-toggle-card:active {
        border-color: #38bdf8;
      }
      .xag-toggle-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .xag-toggle-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-toggle-sub {
        font-size: 10px;
        color: #94a3b8;
      }
      .xag-toggle-pill {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        font-weight: 900;
        padding: 6px 14px;
        border-radius: 20px;
        transition: all 0.15s;
      }
      .xag-toggle-pill.on {
        background: rgba(34, 197, 94, 0.2);
        border: 1px solid #22c55e;
        color: #4ade80;
      }
      .xag-toggle-pill.off {
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid #ef4444;
        color: #f87171;
      }

      .xag-modal-footer {
        padding: 12px 18px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: flex-end;
        background: rgba(15, 23, 42, 0.6);
      }
      .xag-confirm-btn {
        background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
        border: 1px solid #4ade80;
        color: #030712;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 1.5px;
        padding: 10px 24px;
        border-radius: 6px;
        cursor: pointer;
        touch-action: manipulation;
        transition: transform 0.15s;
      }
      .xag-confirm-btn:hover, .xag-confirm-btn:active {
        transform: scale(1.02);
      }

      /* Armory Tabs */
      .xag-armory-tabs {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 8px;
      }
      .xag-armory-tab {
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #94a3b8;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-armory-tab.active {
        background: rgba(34, 197, 94, 0.2);
        border-color: #22c55e;
        color: #ffffff;
      }

      /* Weapons Grid in Armory */
      .xag-weapons-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .xag-armory-card {
        background: rgba(15, 23, 42, 0.65);
        border: 1.5px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .xag-armory-card:hover, .xag-armory-card:active {
        border-color: #38bdf8;
      }
      .xag-armory-card.equipped {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.12);
      }
      .xag-w-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .xag-w-name {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-w-status {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 3px;
      }
      .xag-w-status.active {
        background: rgba(34, 197, 94, 0.2);
        color: #4ade80;
        border: 1px solid #22c55e;
      }
      .xag-w-status.unlocked {
        background: rgba(56, 189, 248, 0.15);
        color: #38bdf8;
      }
      .xag-w-status.locked {
        background: rgba(234, 179, 8, 0.15);
        color: #eab308;
      }
      .xag-w-desc {
        font-size: 9.5px;
        color: #94a3b8;
        line-height: 1.3;
      }
      .xag-w-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        font-size: 9px;
        color: #64748b;
        font-family: 'JetBrains Mono', monospace;
      }
      .xag-w-stats span b {
        color: #cbd5e1;
      }

      /* Rigs Grid in Armory */
      .xag-rigs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .xag-rig-card-full {
        background: rgba(15, 23, 42, 0.65);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 12px 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 6px;
      }
      .xag-rig-card-full:hover, .xag-rig-card-full:active {
        border-color: #38bdf8;
      }
      .xag-rig-card-full.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.15);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-rig-icon-lg {
        font-size: 26px;
      }
      .xag-rig-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
      }
      .xag-rig-desc {
        font-size: 9.5px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* ========================================================
         RESPONSIVE MEDIA QUERIES (Mobile Portrait & Landscape)
         ======================================================== */
      @media screen and (max-width: 768px) {
        .xag-hangar-root {
          padding: max(10px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left));
        }

        .xag-top-bar {
          gap: 6px;
        }
        .xag-contractor-pill {
          padding: 4px 8px;
        }
        .xag-callsign-input {
          font-size: 13px;
          width: 85px;
        }
        .xag-currency-pill {
          padding: 4px 10px;
        }
        .xag-curr-amount {
          font-size: 11.5px;
        }
        .xag-icon-btn {
          min-width: 36px;
          min-height: 36px;
        }

        /* Bottom Dock stacks cleanly on mobile */
        .xag-bottom-dock {
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
        }
        .xag-bottom-left-group {
          width: 100%;
        }
        .xag-nav-btn {
          flex: 1;
          justify-content: center;
          padding: 8px 10px;
          min-height: 44px;
        }
        .xag-bottom-right-group {
          width: 100%;
          flex-direction: column;
          gap: 8px;
        }
        .xag-map-mode-card {
          width: 100%;
          box-sizing: border-box;
          justify-content: space-between;
          padding: 8px 14px;
          min-height: 50px;
        }
        .xag-deploy-button {
          width: 100%;
          min-width: 0;
          height: 52px;
        }

        /* Modals in mobile portrait */
        .xag-theaters-grid, .xag-modes-grid, .xag-weapons-grid, .xag-rigs-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Mobile Landscape (e.g. 640x360, 800x380, 932x430) */
      @media screen and (max-height: 520px) {
        .xag-hangar-root {
          padding: max(6px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
        }
        .xag-top-bar {
          padding: 0;
        }
        .xag-bottom-dock {
          flex-direction: row;
          align-items: flex-end;
          gap: 12px;
        }
        .xag-bottom-left-group {
          width: auto;
        }
        .xag-nav-btn {
          padding: 6px 12px;
          min-height: 42px;
        }
        .xag-bottom-right-group {
          width: auto;
          flex-direction: row;
          gap: 8px;
        }
        .xag-map-mode-card {
          width: auto;
          padding: 6px 12px;
          min-height: 46px;
        }
        .xag-deploy-button {
          height: 48px;
          min-width: 150px;
        }

        /* Landscape Modal Grid */
        .xag-modal-dialog {
          max-height: 94vh;
          max-height: 94dvh;
        }
        .xag-theaters-grid, .xag-modes-grid, .xag-weapons-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    </style>

    <div class="xag-hangar-root">
      <!-- 1. Top Bar -->
      <div class="xag-top-bar">
        <div class="xag-top-left">
          <div class="xag-contractor-pill">
            <span class="xag-flag-icon">🇳🇬</span>
            <input id="xag-callsign-input" class="xag-callsign-input" value="${t}" placeholder="CALLSIGN" maxlength="12" />
            <span class="xag-rank-tag">★ R${s.rank||10}</span>
          </div>
        </div>

        <div class="xag-top-center">
          <div id="btn-top-vault" class="xag-currency-pill" title="Offshore Vault Cash">
            <span class="xag-curr-icon">₦</span>
            <span class="xag-curr-amount">₦${s.cash_balance.toLocaleString()}</span>
          </div>
        </div>

        <div class="xag-top-right">
          <button id="btn-audio-toggle" class="xag-icon-btn" title="Toggle SFX & Audio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </button>
          <button id="btn-open-settings" class="xag-icon-btn" title="Settings / Controls">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
        </div>
      </div>

      <!-- 2. Center Stage (Uncluttered character view) -->
      <div class="xag-center-stage">
        <div class="xag-watermark">SECTOR 234</div>
      </div>

      <!-- 3. Bottom Navigation Dock -->
      <div class="xag-bottom-dock">
        <!-- Left Group: Armory & Multiplayer -->
        <div class="xag-bottom-left-group">
          <button id="btn-open-armory" class="xag-nav-btn" title="Equip Weapons & Movement Rigs">
            <span class="xag-nav-icon">⚔️</span>
            <div class="xag-nav-text">
              <span class="xag-nav-title">ARMORY</span>
              <span id="nav-armory-sub" class="xag-nav-sub">${e.name}</span>
            </div>
          </button>

          <button id="btn-open-multiplayer" class="xag-nav-btn" title="WebRTC Direct P2P Hotspot">
            <span class="xag-nav-icon">👥</span>
            <div class="xag-nav-text">
              <span class="xag-nav-title">MULTIPLAYER</span>
              <span class="xag-nav-sub">P2P HOTSPOT</span>
            </div>
          </button>
        </div>

        <!-- Right Group: Map/Mode Card & Deploy Button -->
        <div class="xag-bottom-right-group">
          <!-- Tapping this opens the dedicated Maps & Mode Modal -->
          <div id="btn-open-maps-modal" class="xag-map-mode-card" title="Click to Select Mission Theater and Game Mode">
            <span class="xag-mmc-icon">🗺️</span>
            <div class="xag-mmc-info">
              <span class="xag-mmc-tag">MAP & MODE ▾</span>
              <span id="home-mode-display" class="xag-mmc-mode">${l}</span>
              <span id="home-map-display" class="xag-mmc-theater">${h} • ${c?"BOTS ON":"PVP ONLY"}</span>
            </div>
            <span class="xag-mmc-arrow">➔</span>
          </div>

          <!-- Deploy Button -->
          <button id="menu-deploy-btn" class="xag-deploy-button">
            <div class="xag-hazard-stripe top"></div>
            <div class="xag-deploy-content">
              <span class="xag-deploy-sub">DEPLOY TO</span>
              <span class="xag-deploy-main">SECTOR 234</span>
            </div>
            <div class="xag-hazard-stripe bottom"></div>
          </button>
        </div>
      </div>

      <!-- =======================================================
           DEDICATED MODAL 1: MAPS & GAME MODES SELECTOR
           ======================================================= -->
      <div id="xag-maps-modal" class="xag-modal-backdrop">
        <div class="xag-modal-dialog">
          <div class="xag-modal-header">
            <div>
              <div class="xag-modal-title">TACTICAL MISSION THEATER</div>
              <div class="xag-modal-sub">SELECT ARENA MAP AND ENGAGEMENT RULES</div>
            </div>
            <button id="btn-close-maps-modal" class="xag-modal-close-btn" title="Close">✕</button>
          </div>

          <div class="xag-modal-scrollable">
            <!-- 1. Arena Theaters (Maps) -->
            <div>
              <div class="xag-modal-section-title">
                <span>📍 ARENA THEATER (MAP)</span>
              </div>
              <div class="xag-theaters-grid">
                <!-- Birnin Kano -->
                <div class="xag-theater-card ${r===ae.BIRNIN_KANO?"active":""}" data-map="${ae.BIRNIN_KANO}">
                  <div class="xag-radar-box">
                    <canvas id="radar-canvas-kano" width="280" height="75" style="width: 100%; height: 100%; display: block;"></canvas>
                  </div>
                  <div class="xag-theater-meta">
                    <span class="xag-theater-name">BIRNIN KANO // CITADEL</span>
                    <span class="xag-theater-desc">Ancient mud-brick bastions, covered souk corridors, and fortified central treasury vault.</span>
                  </div>
                </div>

                <!-- Lagos Go-Slow -->
                <div class="xag-theater-card ${r===ae.LAGOS_GOSLOW?"active":""}" data-map="${ae.LAGOS_GOSLOW}">
                  <div class="xag-radar-box">
                    <canvas id="radar-canvas-lagos" width="280" height="75" style="width: 100%; height: 100%; display: block;"></canvas>
                  </div>
                  <div class="xag-theater-meta">
                    <span class="xag-theater-name">LAGOS GO-SLOW // 3RD MAINLAND</span>
                    <span class="xag-theater-desc">Coastal highway flyover, abandoned Danfo minibuses, shipping container chokepoints, night rain.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Game Mode Selection -->
            <div>
              <div class="xag-modal-section-title">
                <span>⚔️ RULES OF ENGAGEMENT (GAME MODE)</span>
              </div>
              <div class="xag-modes-grid">
                <div class="xag-mode-card ${a===Qt.ODOGWU_STASH&&o===2?"active":""}" data-mode="${Qt.ODOGWU_STASH}" data-teamsize="2">
                  <span class="xag-mode-badge">⭐ SQUAD CO-OP</span>
                  <span class="xag-mode-title">2v2 SQUAD HEIST</span>
                  <span class="xag-mode-desc">Partner with an ally. Breach the vault, crack the stash, revive downed teammates, and extract alive.</span>
                </div>

                <div class="xag-mode-card ${a===Qt.TEAM_DEATHMATCH&&o===2?"active":""}" data-mode="${Qt.TEAM_DEATHMATCH}" data-teamsize="2">
                  <span class="xag-mode-badge">TACTICAL DUOS</span>
                  <span class="xag-mode-title">2v2 TEAM DEATHMATCH</span>
                  <span class="xag-mode-desc">Fast-paced 2-operative tactical elimination shootout. First squad to score cap wins.</span>
                </div>

                <div class="xag-mode-card ${a===Qt.TEAM_DEATHMATCH&&o===3?"active":""}" data-mode="${Qt.TEAM_DEATHMATCH}" data-teamsize="3">
                  <span class="xag-mode-badge">SECTOR WARFARE</span>
                  <span class="xag-mode-title">3v3 TEAM DEATHMATCH</span>
                  <span class="xag-mode-desc">Full 6-operative squad clash across fortified choke lanes.</span>
                </div>

                <div class="xag-mode-card ${a===Qt.ODOGWU_STASH&&o===1?"active":""}" data-mode="${Qt.ODOGWU_STASH}" data-teamsize="1">
                  <span class="xag-mode-badge">SOLO INFILTRATION</span>
                  <span class="xag-mode-title">SOLO HEIST</span>
                  <span class="xag-mode-desc">Infiltrate alone, shatter the vault, steal the stash, and eliminate rival contractors.</span>
                </div>

                <div class="xag-mode-card ${a===Qt.FREE_FOR_ALL?"active":""}" data-mode="${Qt.FREE_FOR_ALL}" data-teamsize="1">
                  <span class="xag-mode-badge">PURE CHAOS</span>
                  <span class="xag-mode-title">FREE FOR ALL</span>
                  <span class="xag-mode-desc">No squads, no mercy. Eliminate every contractor in the arena.</span>
                </div>
              </div>
            </div>

            <!-- 3. Infiltration Bots Toggle -->
            <div>
              <div class="xag-modal-section-title">
                <span>🤖 INFILTRATION AI SUPPORT</span>
              </div>
              <div id="btn-toggle-bots" class="xag-toggle-card">
                <div class="xag-toggle-info">
                  <span class="xag-toggle-title">TACTICAL TRAINING BOTS</span>
                  <span class="xag-toggle-sub">Automatically fills empty operative slots with adaptive AI contractors.</span>
                </div>
                <div id="modal-bot-status-pill" class="xag-toggle-pill ${c?"on":"off"}">
                  ${c?"🤖 BOTS: ENABLED":"✕ PVP ONLY"}
                </div>
              </div>
            </div>
          </div>

          <div class="xag-modal-footer">
            <button id="btn-confirm-maps-modal" class="xag-confirm-btn">✓ CONFIRM SELECTION</button>
          </div>
        </div>
      </div>

      <!-- =======================================================
           DEDICATED MODAL 2: ARMORY & LOADOUT
           ======================================================= -->
      <div id="xag-armory-modal" class="xag-modal-backdrop">
        <div class="xag-modal-dialog">
          <div class="xag-modal-header">
            <div>
              <div class="xag-modal-title">SPEC-OPS ARMORY & RIGS</div>
              <div class="xag-modal-sub">VAULT BALANCE: ₦${s.cash_balance.toLocaleString()}</div>
            </div>
            <button id="btn-close-armory-modal" class="xag-modal-close-btn" title="Close">✕</button>
          </div>

          <div class="xag-modal-scrollable">
            <!-- Tabs -->
            <div class="xag-armory-tabs">
              <button id="tab-primary-btn" class="xag-armory-tab active">PRIMARY WEAPON</button>
              <button id="tab-secondary-btn" class="xag-armory-tab">SECONDARY WEAPON</button>
              <button id="tab-rigs-btn" class="xag-armory-tab">MOVEMENT RIGS</button>
            </div>

            <!-- Panel 1: Primary Weapons Grid -->
            <div id="armory-panel-primary" class="xag-weapons-grid">
              <!-- Dynamically rendered by MenuOverlay -->
            </div>

            <!-- Panel 2: Secondary Weapons Grid -->
            <div id="armory-panel-secondary" class="xag-weapons-grid" style="display: none;">
              <!-- Dynamically rendered by MenuOverlay -->
            </div>

            <!-- Panel 3: Movement Rigs Grid -->
            <div id="armory-panel-rigs" class="xag-rigs-grid" style="display: none;">
              <div class="xag-rig-card-full ${n===xt.BREACH_BOOSTER||n===xt.PHASE_DASH?"active":""}" data-rig="${xt.PHASE_DASH}">
                <span class="xag-rig-icon-lg">⚡</span>
                <span class="xag-rig-title">SPECTER</span>
                <span class="xag-rig-desc">Phase Dash + temporary invisibility cloaking for rapid flanks and stealth breaches.</span>
              </div>

              <div class="xag-rig-card-full ${n===xt.OVERDRIVE_SLIDE?"active":""}" data-rig="${xt.OVERDRIVE_SLIDE}">
                <span class="xag-rig-icon-lg">🛡️</span>
                <span class="xag-rig-title">VANGUARD</span>
                <span class="xag-rig-desc">Overdrive Slide + frontal ballistic barrier absorbs kinetic bullet impact.</span>
              </div>

              <div class="xag-rig-card-full ${n===xt.GLITCH_ANCHOR?"active":""}" data-rig="${xt.GLITCH_ANCHOR}">
                <span class="xag-rig-icon-lg">⏱️</span>
                <span class="xag-rig-title">CHRONOS</span>
                <span class="xag-rig-desc">Glitch Anchor rewinds operative position and partial HP 2.5 seconds into the past.</span>
              </div>
            </div>
          </div>

          <div class="xag-modal-footer">
            <button id="btn-save-armory-modal" class="xag-confirm-btn">✓ EQUIP & RETURN</button>
          </div>
        </div>
      </div>
    </div>
  `}class B_{static generateReceiptPNG(t,e,i,n){const r=document.createElement("canvas");r.width=460,r.height=760;const a=r.getContext("2d");a.fillStyle="#fafaf9",a.fillRect(0,0,r.width,r.height),a.strokeStyle="#18181b",a.lineWidth=3,a.strokeRect(8,8,r.width-16,r.height-16),a.fillStyle="#09090b",a.font='800 18px "JetBrains Mono", monospace',a.textAlign="center";let o=46;a.fillText("====================================",230,o),o+=24,a.fillText("STUDIO XAG // PROTOCOL ZERO",230,o),o+=22,a.font='700 13px "JetBrains Mono", monospace',a.fillText("AFTER-ACTION FINANCIAL REPORT",230,o),o+=18,a.font='500 11px "JetBrains Mono", monospace',a.fillText(new Date().toUTCString(),230,o),o+=16,a.fillText(`ARENA MODE: ${e}`,230,o),o+=20,a.fillText("------------------------------------",230,o),o+=30;const c=t[0]||{name:"Unknown",cash:0,kills:0,deaths:0};a.font='800 15px "JetBrains Mono", monospace',a.fillText("👑 THE SARKI (1ST PLACE):",230,o),o+=22,a.font='900 24px "JetBrains Mono", monospace',a.fillText(`${c.name.toUpperCase()}`,230,o),o+=26,a.font='800 20px "JetBrains Mono", monospace',a.fillText(`NET WORTH: ₦${c.cash.toLocaleString()}`,230,o),o+=24,a.fillText("------------------------------------",230,o),o+=26;let l=[...t].sort((f,g)=>g.deaths-f.deaths)[0]||c;a.font='800 13px "JetBrains Mono", monospace',a.fillText("💀 MAI RASHIN SA'A (MOST CASUALTIES):",230,o),o+=20,a.font='700 15px "JetBrains Mono", monospace',a.fillText(`${l.name} (${l.deaths} Deaths)`,230,o),o+=18,a.font='italic 11px "JetBrains Mono", monospace',a.fillText('"Babu gudu, babu ja da baya!"',230,o),o+=22,a.fillText("------------------------------------",230,o),o+=26;let h=[...t].sort((f,g)=>g.wallsDestroyed-f.wallsDestroyed)[0]||c;a.font='800 13px "JetBrains Mono", monospace',a.fillText("💥 MAI RUSHEWA (DEMOLITION CHAMPION):",230,o),o+=20,a.font='700 14px "JetBrains Mono", monospace',a.fillText(`${h.name} (${h.wallsDestroyed} 3D Blocks Smashed)`,230,o),o+=22,a.fillText("------------------------------------",230,o),o+=26;const d=t.find(f=>f.isLocal)||c;a.font='800 14px "JetBrains Mono", monospace',a.fillText("PERSONAL AUDIT SUMMARY:",230,o),o+=22,a.textAlign="left",a.font='700 12px "JetBrains Mono", monospace';const u=d.deaths>0?(d.kills/d.deaths).toFixed(2):d.kills.toString();return a.fillText(`• FINAL BALANCE: ₦${d.cash.toLocaleString()}`,40,o),o+=20,a.fillText(`• ELIMINATIONS:  ${d.kills} KILLS`,40,o),o+=20,a.fillText(`• DEATH COUNT:   ${d.deaths} CASUALTIES`,40,o),o+=20,a.fillText(`• COMBAT K/D:    ${u}`,40,o),o+=20,a.fillText(`• RIG UTILIZED:  ${i}`,40,o),o+=20,a.fillText(`• LOADOUT:       ${n}`,40,o),o+=28,a.textAlign="center",a.font='800 12px "JetBrains Mono", monospace',a.fillText("||| | ||||| || |||||| | ||||| |||",230,o),o+=18,a.font='700 11px "JetBrains Mono", monospace',a.fillText("* VERIFIED BY STUDIO XAG HQ KANO // AREWA TACTICAL COMMAND *",230,o),r.toDataURL("image/png")}static downloadReceiptPNG(t,e,i,n){const r=this.generateReceiptPNG(t,e,i,n),a=document.createElement("a");a.download=`XAG_ROAST_RECEIPT_${Date.now()}.png`,a.href=r,a.click()}}class G_{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(t){this.flush(),this._parts.push(t)}append(t){this._pieces.push(t)}flush(){if(this._pieces.length>0){const t=new Uint8Array(this._pieces);this._parts.push(t),this._pieces=[]}}toArrayBuffer(){const t=[];for(const e of this._parts)t.push(e);return H_(t).buffer}}function H_(s){let t=0;for(const n of s)t+=n.byteLength;const e=new Uint8Array(t);let i=0;for(const n of s){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);e.set(r,i),i+=n.byteLength}return e}function zh(s){return new z_(s).unpack()}function Vh(s){const t=new V_,e=t.pack(s);return e instanceof Promise?e.then(()=>t.getBuffer()):t.getBuffer()}class z_{constructor(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const t=this.unpack_uint8();if(t<128)return t;if((t^224)<32)return(t^224)-32;let e;if((e=t^160)<=15)return this.unpack_raw(e);if((e=t^176)<=15)return this.unpack_string(e);if((e=t^144)<=15)return this.unpack_array(e);if((e=t^128)<=15)return this.unpack_map(e);switch(t){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return e=this.unpack_uint16(),this.unpack_string(e);case 217:return e=this.unpack_uint32(),this.unpack_string(e);case 218:return e=this.unpack_uint16(),this.unpack_raw(e);case 219:return e=this.unpack_uint32(),this.unpack_raw(e);case 220:return e=this.unpack_uint16(),this.unpack_array(e);case 221:return e=this.unpack_uint32(),this.unpack_array(e);case 222:return e=this.unpack_uint16(),this.unpack_map(e);case 223:return e=this.unpack_uint32(),this.unpack_map(e)}}unpack_uint8(){const t=this.dataView[this.index]&255;return this.index++,t}unpack_uint16(){const t=this.read(2),e=(t[0]&255)*256+(t[1]&255);return this.index+=2,e}unpack_uint32(){const t=this.read(4),e=((t[0]*256+t[1])*256+t[2])*256+t[3];return this.index+=4,e}unpack_uint64(){const t=this.read(8),e=((((((t[0]*256+t[1])*256+t[2])*256+t[3])*256+t[4])*256+t[5])*256+t[6])*256+t[7];return this.index+=8,e}unpack_int8(){const t=this.unpack_uint8();return t<128?t:t-256}unpack_int16(){const t=this.unpack_uint16();return t<32768?t:t-65536}unpack_int32(){const t=this.unpack_uint32();return t<2**31?t:t-2**32}unpack_int64(){const t=this.unpack_uint64();return t<2**63?t:t-2**64}unpack_raw(t){if(this.length<this.index+t)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${t} ${this.length}`);const e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e}unpack_string(t){const e=this.read(t);let i=0,n="",r,a;for(;i<t;)r=e[i],r<160?(a=r,i++):(r^192)<32?(a=(r&31)<<6|e[i+1]&63,i+=2):(r^224)<16?(a=(r&15)<<12|(e[i+1]&63)<<6|e[i+2]&63,i+=3):(a=(r&7)<<18|(e[i+1]&63)<<12|(e[i+2]&63)<<6|e[i+3]&63,i+=4),n+=String.fromCodePoint(a);return this.index+=t,n}unpack_array(t){const e=new Array(t);for(let i=0;i<t;i++)e[i]=this.unpack();return e}unpack_map(t){const e={};for(let i=0;i<t;i++){const n=this.unpack();e[n]=this.unpack()}return e}unpack_float(){const t=this.unpack_uint32(),e=t>>31,i=(t>>23&255)-127,n=t&8388607|8388608;return(e===0?1:-1)*n*2**(i-23)}unpack_double(){const t=this.unpack_uint32(),e=this.unpack_uint32(),i=t>>31,n=(t>>20&2047)-1023,a=(t&1048575|1048576)*2**(n-20)+e*2**(n-52);return(i===0?1:-1)*a}read(t){const e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")}}class V_{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(t){if(typeof t=="string")this.pack_string(t);else if(typeof t=="number")Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if(typeof t=="boolean")t===!0?this._bufferBuilder.append(195):t===!1&&this._bufferBuilder.append(194);else if(t===void 0)this._bufferBuilder.append(192);else if(typeof t=="object")if(t===null)this._bufferBuilder.append(192);else{const e=t.constructor;if(t instanceof Array){const i=this.pack_array(t);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(t instanceof ArrayBuffer)this.pack_bin(new Uint8Array(t));else if("BYTES_PER_ELEMENT"in t){const i=t;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(t instanceof Date)this.pack_string(t.toString());else{if(t instanceof Blob)return t.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(e==Object||e.toString().startsWith("class")){const i=this.pack_object(t);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${e.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof t}" not yet supported`);this._bufferBuilder.flush()}pack_bin(t){const e=t.length;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this._bufferBuilder.append(218),this.pack_uint16(e);else if(e<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(e);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_string(t){const e=this._textEncoder.encode(t),i=e.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_array(t){const e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this._bufferBuilder.append(220),this.pack_uint16(e);else if(e<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(e);else throw new Error("Invalid length");const i=n=>{if(n<e){const r=this.pack(t[n]);return r instanceof Promise?r.then(()=>i(n+1)):i(n+1)}};return i(0)}pack_integer(t){if(t>=-32&&t<=127)this._bufferBuilder.append(t&255);else if(t>=0&&t<=255)this._bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this._bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this._bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this._bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this._bufferBuilder.append(210),this.pack_int32(t);else if(t>=-9223372036854776e3&&t<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(t);else if(t>=0&&t<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(t);else throw new Error("Invalid integer")}pack_double(t){let e=0;t<0&&(e=1,t=-t);const i=Math.floor(Math.log(t)/Math.LN2),n=t/2**i-1,r=Math.floor(n*2**52),a=2**32,o=e<<31|i+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(t){const e=Object.keys(t),i=e.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const n=r=>{if(r<e.length){const a=e[r];if(t.hasOwnProperty(a)){this.pack(a);const o=this.pack(t[a]);if(o instanceof Promise)return o.then(()=>n(r+1))}return n(r+1)}};return n(0)}pack_uint8(t){this._bufferBuilder.append(t)}pack_uint16(t){this._bufferBuilder.append(t>>8),this._bufferBuilder.append(t&255)}pack_uint32(t){const e=t&4294967295;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_uint64(t){const e=t/4294967296,i=t%2**32;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(t){this._bufferBuilder.append(t&255)}pack_int16(t){this._bufferBuilder.append((t&65280)>>8),this._bufferBuilder.append(t&255)}pack_int32(t){this._bufferBuilder.append(t>>>24&255),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_int64(t){const e=Math.floor(t/4294967296),i=t%2**32;this._bufferBuilder.append((e&4278190080)>>>24),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new G_,this._textEncoder=new TextEncoder}}let Wh=!0,Xh=!0;function Us(s,t,e){const i=s.match(t);return i&&i.length>=e&&parseFloat(i[e],10)}function In(s,t,e){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){pc("Unable to polyfill events");return}const n=s.RTCPeerConnection.prototype,r=n.addEventListener;n.addEventListener=function(o,c){if(o!==t)return r.apply(this,arguments);const l=h=>{const d=e(h);d&&(c.handleEvent?c.handleEvent(d):c(d))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(c,l),r.apply(this,[o,l])};const a=n.removeEventListener;n.removeEventListener=function(o,c){if(o!==t||!this._eventMap||!this._eventMap[t])return a.apply(this,arguments);if(!this._eventMap[t].has(c))return a.apply(this,arguments);const l=this._eventMap[t].get(c);return this._eventMap[t].delete(c),this._eventMap[t].size===0&&delete this._eventMap[t],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(n,"on"+t,{get(){return this["_on"+t]},set(o){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),o&&this.addEventListener(t,this["_on"+t]=o)},enumerable:!0,configurable:!0})}function W_(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Wh=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function X_(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Xh=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function pc(){if(typeof window=="object"){if(Wh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function mc(s,t){Xh&&console.warn(s+" is deprecated, please use "+t+" instead.")}function $_(s){const t={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return t.browser="Not a browser.",t;const{navigator:e}=s;if(e.userAgentData&&e.userAgentData.brands){const i=e.userAgentData.brands.find(n=>n.brand==="Chromium");if(i){const n=parseInt(i.version,10);if(n>=90)return{browser:"chrome",version:n}}}if(e.mozGetUserMedia)t.browser="firefox",t.version=parseInt(Us(e.userAgent,/Firefox\/(\d+)\./,1));else if(e.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)t.browser="chrome",t.version=parseInt(Us(e.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&e.userAgent.match(/AppleWebKit\/(\d+)\./))t.browser="safari",t.version=parseInt(Us(e.userAgent,/AppleWebKit\/(\d+)\./,1)),t.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,t._safariVersion=Us(e.userAgent,/Version\/(\d+(\.?\d+))/,1);else return t.browser="Not a supported browser.",t;return t}function Wl(s){return Object.prototype.toString.call(s)==="[object Object]"}function $h(s){return Wl(s)?Object.keys(s).reduce(function(t,e){const i=Wl(s[e]),n=i?$h(s[e]):s[e],r=i&&!Object.keys(n).length;return n===void 0||r?t:Object.assign(t,{[e]:n})},{}):s}function Io(s,t,e){!t||e.has(t.id)||(e.set(t.id,t),Object.keys(t).forEach(i=>{i.endsWith("Id")?Io(s,s.get(t[i]),e):i.endsWith("Ids")&&t[i].forEach(n=>{Io(s,s.get(n),e)})}))}function Xl(s,t,e){const i=e?"outbound-rtp":"inbound-rtp",n=new Map;if(t===null)return n;const r=[];return s.forEach(a=>{a.type==="track"&&a.trackIdentifier===t.id&&r.push(a)}),r.forEach(a=>{s.forEach(o=>{o.type===i&&o.trackId===a.id&&Io(s,o,n)})}),n}const $l=pc;function Yh(s,t){if(t.version>=64)return;const e=s&&s.navigator;if(!e.mediaDevices)return;const i=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const d=function(u,f){return u?u+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let u={};typeof h.ideal=="number"?(u[d("min",l)]=h.ideal,c.optional.push(u),u={},u[d("max",l)]=h.ideal,c.optional.push(u)):(u[d("",l)]=h.ideal,c.optional.push(u))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[d("",l)]=h.exact):["min","max"].forEach(u=>{h[u]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[d(u,l)]=h[u])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},n=function(o,c){if(t.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,d,u){d in h&&!(u in h)&&(h[u]=h[d],delete h[d])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=i(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=t.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(e.mediaDevices.getSupportedConstraints&&e.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let d;if(l.exact==="environment"||l.ideal==="environment"?d=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(d=["front"]),d)return e.mediaDevices.enumerateDevices().then(u=>{u=u.filter(g=>g.kind==="videoinput");let f=u.find(g=>d.some(v=>g.label.toLowerCase().includes(v)));return!f&&u.length&&d.includes("back")&&(f=u[u.length-1]),f&&(o.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=i(o.video),$l("chrome: "+JSON.stringify(o)),c(o)})}o.video=i(o.video)}return $l("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return t.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){n(o,h=>{e.webkitGetUserMedia(h,c,d=>{l&&l(r(d))})})};if(e.getUserMedia=a.bind(e),e.mediaDevices.getUserMedia){const o=e.mediaDevices.getUserMedia.bind(e.mediaDevices);e.mediaDevices.getUserMedia=function(c){return n(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Kh(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function qh(s,t){if(!(t.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",r=>{let a;s.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[n.stream],this.dispatchEvent(o)}),n.stream.getTracks().forEach(r=>{let a;s.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[n.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else In(s,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function jh(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const t=function(n,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=n.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:n}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const n=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,c){let l=n.apply(this,arguments);return l||(l=t(this,o),this._senders.push(l)),l};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const e=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],e.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(t(this,a))})};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],i.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const t=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const i=t.apply(this,[]);return i.forEach(n=>n._pc=this),i},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Zh(s,t){if(t.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const i=s.RTCPeerConnection.prototype.getSenders;i&&(s.RTCPeerConnection.prototype.getSenders=function(){const a=i.apply(this,[]);return a.forEach(o=>o._pc=this),a});const n=s.RTCPeerConnection.prototype.addTrack;n&&(s.RTCPeerConnection.prototype.addTrack=function(){const a=n.apply(this,arguments);return a._pc=this,a}),s.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>Xl(o,a.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const i=s.RTCPeerConnection.prototype.getReceivers;i&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=i.apply(this,[]);return r.forEach(a=>a._pc=this),r}),In(s,"track",n=>(n.receiver._pc=n.srcElement,n)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>Xl(a,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const e=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const n=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===n&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===n&&(a?o=!0:a=c),c.track===n)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function Jh(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const t=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=t.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const e=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(d=>d.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();e.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],i.apply(this,arguments)};const n=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),n.apply(this,arguments)}}function Qh(s,t){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&t.version>=65)return Jh(s);const e=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const h=e.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(d=>this._reverseStreams[d.id])};const i=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(d=>{if(this.getSenders().find(f=>f.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const d=new s.MediaStream(h.getTracks());this._streams[h.id]=d,this._reverseStreams[d.id]=h,h=d}i.apply(this,[h])};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},n.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},s.RTCPeerConnection.prototype.addTrack=function(h,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const u=[].slice.call(arguments,1);if(u.length!==1||!u[0].getTracks().find(v=>v===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[d.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new s.MediaStream([h]);this._streams[d.id]=v,this._reverseStreams[v.id]=d,this.addStream(v)}return this.getSenders().find(v=>v.track===h)};function r(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const f=l._reverseStreams[u],g=l._streams[f.id];d=d.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:d})}function a(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const f=l._reverseStreams[u],g=l._streams[f.id];d=d.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:d})}["createOffer","createAnswer"].forEach(function(l){const h=s.RTCPeerConnection.prototype[l],d={[l](){const u=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const v=r(this,g);u[0].apply(null,[v])},g=>{u[1]&&u[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};s.RTCPeerConnection.prototype[l]=d[l]});const o=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),s.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let u;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(v=>h.track===v)&&(u=this._streams[f])}),u&&(u.getTracks().length===1?this.removeStream(this._reverseStreams[u.id]):u.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Lo(s,t){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){const i=s.RTCPeerConnection.prototype[e],n={[e](){return arguments[0]=new(e==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[e]=n[e]})}function td(s,t){t.version>102||In(s,"negotiationneeded",e=>{const i=e.target;if(!((t.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return e})}const Yl=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:td,shimAddTrackRemoveTrack:Qh,shimAddTrackRemoveTrackWithNative:Jh,shimGetSendersWithDtmf:jh,shimGetUserMedia:Yh,shimMediaStream:Kh,shimOnTrack:qh,shimPeerConnection:Lo,shimSenderReceiverGetStats:Zh},Symbol.toStringTag,{value:"Module"}));function ed(s,t){const e=s&&s.navigator;if(!e.mediaDevices)return;const i=s&&s.MediaStreamTrack;if(e.getUserMedia=function(n,r,a){mc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),e.mediaDevices.getUserMedia(n).then(r,a)},!(t.version>55&&"autoGainControl"in e.mediaDevices.getSupportedConstraints())){const n=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=e.mediaDevices.getUserMedia.bind(e.mediaDevices);if(e.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),n(a.audio,"autoGainControl","mozAutoGainControl"),n(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},i&&i.prototype.getSettings){const a=i.prototype.getSettings;i.prototype.getSettings=function(){const o=a.apply(this,arguments);return n(o,"mozAutoGainControl","autoGainControl"),n(o,"mozNoiseSuppression","noiseSuppression"),o}}if(i&&i.prototype.applyConstraints){const a=i.prototype.applyConstraints;i.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),n(o,"autoGainControl","mozAutoGainControl"),n(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Y_(s,t){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const n=new DOMException("getDisplayMedia without video constraints is undefined");return n.name="NotFoundError",n.code=8,Promise.reject(n)}return i.video===!0?i.video={mediaSource:t}:i.video.mediaSource=t,s.navigator.mediaDevices.getUserMedia(i)}))}function id(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Do(s,t){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){const i=s.RTCPeerConnection.prototype[e],n={[e](){return arguments[0]=new(e==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[e]=n[e]}))}function nd(s,t){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||t.version>=151)return;const e={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[r||null]).then(c=>{if(t.version<53&&!a)try{c.forEach(l=>{l.type=e[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,d)=>{c.set(d,Object.assign({},h,{type:e[h.type]||h.type}))})}return c}).then(a,o)}}function sd(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const t=s.RTCPeerConnection.prototype.getSenders;t&&(s.RTCPeerConnection.prototype.getSenders=function(){const n=t.apply(this,[]);return n.forEach(r=>r._pc=this),n});const e=s.RTCPeerConnection.prototype.addTrack;e&&(s.RTCPeerConnection.prototype.addTrack=function(){const n=e.apply(this,arguments);return n._pc=this,n}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function rd(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const t=s.RTCPeerConnection.prototype.getReceivers;t&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=t.apply(this,[]);return i.forEach(n=>n._pc=this),i}),In(s,"track",e=>(e.receiver._pc=e.srcElement,e)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function ad(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(e){mc("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&e.getTracks().includes(i.track)&&this.removeTrack(i)})})}function od(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function cd(s,t){if(!(typeof s=="object"&&s.RTCPeerConnection)||t.version>=110)return;const e=s.RTCPeerConnection.prototype.addTransceiver;e&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const r=n.length>0;r&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=e.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function ld(s,t){if(!(typeof s=="object"&&s.RTCRtpSender)||t.version>=110)return;const e=s.RTCRtpSender.prototype.getParameters;e&&(s.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function hd(s,t){if(!(typeof s=="object"&&s.RTCPeerConnection)||t.version>=110)return;const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function dd(s,t){if(!(typeof s=="object"&&s.RTCPeerConnection)||t.version>=110)return;const e=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Kl=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:cd,shimCreateAnswer:dd,shimCreateOffer:hd,shimGetDisplayMedia:Y_,shimGetParameters:ld,shimGetStats:nd,shimGetUserMedia:ed,shimOnTrack:id,shimPeerConnection:Do,shimRTCDataChannel:od,shimReceiverGetStats:rd,shimRemoveStream:ad,shimSenderGetStats:sd},Symbol.toStringTag,{value:"Module"}));function ud(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const t=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(n=>t.call(this,n,i)),i.getVideoTracks().forEach(n=>t.call(this,n,i))},s.RTCPeerConnection.prototype.addTrack=function(i,...n){return n&&n.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),t.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(e);if(i===-1)return;this._localStreams.splice(i,1);const n=e.getTracks();this.getSenders().forEach(r=>{n.includes(r.track)&&this.removeTrack(r)})})}}function fd(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(n=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(n))return;this._remoteStreams.push(n);const r=new Event("addstream");r.stream=n,this.dispatchEvent(r)})})}});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(n){n.streams.forEach(r=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(r)>=0)return;i._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,i.dispatchEvent(a)})}),t.apply(i,arguments)}}}function pd(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const t=s.RTCPeerConnection.prototype,e=t.createOffer,i=t.createAnswer,n=t.setLocalDescription,r=t.setRemoteDescription,a=t.addIceCandidate;t.createOffer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],u=e.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u},t.createAnswer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],u=i.apply(this,[d]);return h?(u.then(l,h),Promise.resolve()):u};let o=function(c,l,h){const d=n.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d};t.setLocalDescription=o,o=function(c,l,h){const d=r.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},t.setRemoteDescription=o,o=function(c,l,h){const d=a.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},t.addIceCandidate=o}function md(s){const t=s&&s.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){const e=t.mediaDevices,i=e.getUserMedia.bind(e);t.mediaDevices.getUserMedia=n=>i(gd(n))}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=(function(i,n,r){t.mediaDevices.getUserMedia(i).then(n,r)}).bind(t))}function gd(s){return s&&s.video!==void 0?Object.assign({},s,{video:$h(s.video)}):s}function _d(s){if(!s.RTCPeerConnection)return;const t=s.RTCPeerConnection;s.RTCPeerConnection=function(i,n){if(i&&i.iceServers){const r=[];for(let a=0;a<i.iceServers.length;a++){let o=i.iceServers[a];o.urls===void 0&&o.url?(mc("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(i.iceServers[a])}i.iceServers=r}return new t(i,n)},s.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in t&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return t.generateCertificate}})}function vd(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function xd(s){const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const n=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&n?n.direction==="sendrecv"?n.setDirection?n.setDirection("sendonly"):n.direction="sendonly":n.direction==="recvonly"&&(n.setDirection?n.setDirection("inactive"):n.direction="inactive"):i.offerToReceiveAudio===!0&&!n&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return t.apply(this,arguments)}}function yd(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const ql=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:yd,shimCallbacksAPI:pd,shimConstraints:gd,shimCreateOfferLegacy:xd,shimGetUserMedia:md,shimLocalStreamsAPI:ud,shimRTCIceServerUrls:_d,shimRemoteStreamsAPI:fd,shimTrackEventTransceiver:vd},Symbol.toStringTag,{value:"Module"}));function K_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sd={exports:{}};(function(s){const t={};t.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},t.localCName=t.generateIdentifier(),t.splitLines=function(e){return e.trim().split(`
`).map(i=>i.trim())},t.splitSections=function(e){return e.split(`
m=`).map((n,r)=>(r>0?"m="+n:n).trim()+`\r
`)},t.getDescription=function(e){const i=t.splitSections(e);return i&&i[0]},t.getMediaSections=function(e){const i=t.splitSections(e);return i.shift(),i},t.matchPrefix=function(e,i){return t.splitLines(e).filter(n=>n.indexOf(i)===0)},t.parseCandidate=function(e){let i;e.indexOf("a=candidate:")===0?i=e.substring(12).split(" "):i=e.substring(10).split(" ");const n={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let r=8;r<i.length;r+=2)switch(i[r]){case"raddr":n.relatedAddress=i[r+1];break;case"rport":n.relatedPort=parseInt(i[r+1],10);break;case"tcptype":n.tcpType=i[r+1];break;case"ufrag":n.ufrag=i[r+1],n.usernameFragment=i[r+1];break;default:n[i[r]]===void 0&&(n[i[r]]=i[r+1]);break}return n},t.writeCandidate=function(e){const i=[];i.push(e.foundation);const n=e.component;n==="rtp"?i.push(1):n==="rtcp"?i.push(2):i.push(n),i.push(e.protocol.toUpperCase()),i.push(e.priority),i.push(e.address||e.ip),i.push(e.port);const r=e.type;return i.push("typ"),i.push(r),r!=="host"&&e.relatedAddress&&e.relatedPort!==void 0&&(i.push("raddr"),i.push(e.relatedAddress),i.push("rport"),i.push(e.relatedPort)),e.tcpType&&e.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(i.push("ufrag"),i.push(e.usernameFragment||e.ufrag)),"candidate:"+i.join(" ")},t.parseIceOptions=function(e){return e.substring(14).split(" ")},t.parseRtpMap=function(e){let i=e.substring(9).split(" ");const n={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),n.name=i[0],n.clockRate=parseInt(i[1],10),n.channels=i.length===3?parseInt(i[2],10):1,n.numChannels=n.channels,n},t.writeRtpMap=function(e){let i=e.payloadType;e.preferredPayloadType!==void 0&&(i=e.preferredPayloadType);const n=e.channels||e.numChannels||1;return"a=rtpmap:"+i+" "+e.name+"/"+e.clockRate+(n!==1?"/"+n:"")+`\r
`},t.parseExtmap=function(e){const i=e.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},t.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&e.direction!=="sendrecv"?"/"+e.direction:"")+" "+e.uri+(e.attributes?" "+e.attributes:"")+`\r
`},t.parseFmtp=function(e){const i={};let n;const r=e.substring(e.indexOf(" ")+1).split(";");for(let a=0;a<r.length;a++)n=r[a].trim().split("="),i[n[0].trim()]=n[1];return i},t.writeFmtp=function(e){let i="",n=e.payloadType;if(e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){const r=[];Object.keys(e.parameters).forEach(a=>{e.parameters[a]!==void 0?r.push(a+"="+e.parameters[a]):r.push(a)}),i+="a=fmtp:"+n+" "+r.join(";")+`\r
`}return i},t.parseRtcpFb=function(e){const i=e.substring(e.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},t.writeRtcpFb=function(e){let i="",n=e.payloadType;return e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(r=>{i+="a=rtcp-fb:"+n+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),i},t.parseSsrcMedia=function(e){const i=e.indexOf(" "),n={ssrc:parseInt(e.substring(7,i),10)},r=e.indexOf(":",i);return r>-1?(n.attribute=e.substring(i+1,r),n.value=e.substring(r+1)):n.attribute=e.substring(i+1),n},t.parseSsrcGroup=function(e){const i=e.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(n=>parseInt(n,10))}},t.getMid=function(e){const i=t.matchPrefix(e,"a=mid:")[0];if(i)return i.substring(6)},t.parseFingerprint=function(e){const i=e.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},t.getDtlsParameters=function(e,i){return{role:"auto",fingerprints:t.matchPrefix(e+i,"a=fingerprint:").map(t.parseFingerprint)}},t.writeDtlsParameters=function(e,i){let n="a=setup:"+i+`\r
`;return e.fingerprints.forEach(r=>{n+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),n},t.parseCryptoLine=function(e){const i=e.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},t.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+(typeof e.keyParams=="object"?t.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+`\r
`},t.parseCryptoKeyParams=function(e){if(e.indexOf("inline:")!==0)return null;const i=e.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},t.writeCryptoKeyParams=function(e){return e.keyMethod+":"+e.keySalt+(e.lifeTime?"|"+e.lifeTime:"")+(e.mkiValue&&e.mkiLength?"|"+e.mkiValue+":"+e.mkiLength:"")},t.getCryptoParameters=function(e,i){return t.matchPrefix(e+i,"a=crypto:").map(t.parseCryptoLine)},t.getIceParameters=function(e,i){const n=t.matchPrefix(e+i,"a=ice-ufrag:")[0],r=t.matchPrefix(e+i,"a=ice-pwd:")[0];return n&&r?{usernameFragment:n.substring(12),password:r.substring(10)}:null},t.writeIceParameters=function(e){let i="a=ice-ufrag:"+e.usernameFragment+`\r
a=ice-pwd:`+e.password+`\r
`;return e.iceLite&&(i+=`a=ice-lite\r
`),i},t.parseRtpParameters=function(e){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=t.splitLines(e)[0].split(" ");i.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=t.matchPrefix(e,"a=rtpmap:"+c+" ")[0];if(l){const h=t.parseRtpMap(l),d=t.matchPrefix(e,"a=fmtp:"+c+" ");switch(h.parameters=d.length?t.parseFmtp(d[0]):{},h.rtcpFeedback=t.matchPrefix(e,"a=rtcp-fb:"+c+" ").map(t.parseRtcpFb),i.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(h.name.toUpperCase());break}}}t.matchPrefix(e,"a=extmap:").forEach(o=>{i.headerExtensions.push(t.parseExtmap(o))});const a=t.matchPrefix(e,"a=rtcp-fb:* ").map(t.parseRtcpFb);return i.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),i},t.writeRtpDescription=function(e,i){let n="";n+="m="+e+" ",n+=i.codecs.length>0?"9":"0",n+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",n+=i.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,n+=`c=IN IP4 0.0.0.0\r
`,n+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(a=>{n+=t.writeRtpMap(a),n+=t.writeFmtp(a),n+=t.writeRtcpFb(a)});let r=0;return i.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(n+="a=maxptime:"+r+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(a=>{n+=t.writeExtmap(a)}),n},t.parseRtpEncodingParameters=function(e){const i=[],n=t.parseRtpParameters(e),r=n.fecMechanisms.indexOf("RED")!==-1,a=n.fecMechanisms.indexOf("ULPFEC")!==-1,o=t.matchPrefix(e,"a=ssrc:").map(u=>t.parseSsrcMedia(u)).filter(u=>u.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=t.matchPrefix(e,"a=ssrc-group:FID").map(u=>u.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),n.codecs.forEach(u=>{if(u.name.toUpperCase()==="RTX"&&u.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(u.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),i.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},i.push(f))}}),i.length===0&&c&&i.push({ssrc:c});let d=t.matchPrefix(e,"b=");return d.length&&(d[0].indexOf("b=TIAS:")===0?d=parseInt(d[0].substring(7),10):d[0].indexOf("b=AS:")===0?d=parseInt(d[0].substring(5),10)*1e3*.95-50*40*8:d=void 0,i.forEach(u=>{u.maxBitrate=d})),i},t.parseRtcpParameters=function(e){const i={},n=t.matchPrefix(e,"a=ssrc:").map(o=>t.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];n&&(i.cname=n.value,i.ssrc=n.ssrc);const r=t.matchPrefix(e,"a=rtcp-rsize");i.reducedSize=r.length>0,i.compound=r.length===0;const a=t.matchPrefix(e,"a=rtcp-mux");return i.mux=a.length>0,i},t.writeRtcpParameters=function(e){let i="";return e.reducedSize&&(i+=`a=rtcp-rsize\r
`),e.mux&&(i+=`a=rtcp-mux\r
`),e.ssrc!==void 0&&e.cname&&(i+="a=ssrc:"+e.ssrc+" cname:"+e.cname+`\r
`),i},t.parseMsid=function(e){let i;const n=t.matchPrefix(e,"a=msid:");if(n.length===1)return i=n[0].substring(7).split(" "),{stream:i[0],track:i[1]};const r=t.matchPrefix(e,"a=ssrc:").map(a=>t.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return i=r[0].value.split(" "),{stream:i[0],track:i[1]}},t.parseSctpDescription=function(e){const i=t.parseMLine(e),n=t.matchPrefix(e,"a=max-message-size:");let r;n.length>0&&(r=parseInt(n[0].substring(19),10)),isNaN(r)&&(r=65536);const a=t.matchPrefix(e,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:i.fmt,maxMessageSize:r};const o=t.matchPrefix(e,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},t.writeSctpDescription=function(e,i){let n=[];return e.protocol!=="DTLS/SCTP"?n=["m="+e.kind+" 9 "+e.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:n=["m="+e.kind+" 9 "+e.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&n.push("a=max-message-size:"+i.maxMessageSize+`\r
`),n.join("")},t.generateSessionId=function(){return Math.random().toString().substr(2,22)},t.writeSessionBoilerplate=function(e,i,n){let r;const a=i!==void 0?i:2;return e?r=e:r=t.generateSessionId(),`v=0\r
o=`+(n||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},t.getDirection=function(e,i){const n=t.splitLines(e);for(let r=0;r<n.length;r++)switch(n[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[r].substring(2)}return i?t.getDirection(i):"sendrecv"},t.getKind=function(e){return t.splitLines(e)[0].split(" ")[0].substring(2)},t.isRejected=function(e){return e.split(" ",2)[1]==="0"},t.parseMLine=function(e){const n=t.splitLines(e)[0].substring(2).split(" ");return{kind:n[0],port:parseInt(n[1],10),protocol:n[2],fmt:n.slice(3).join(" ")}},t.parseOLine=function(e){const n=t.matchPrefix(e,"o=")[0].substring(2).split(" ");return{username:n[0],sessionId:n[1],sessionVersion:parseInt(n[2],10),netType:n[3],addressType:n[4],address:n[5]}},t.isValidSDP=function(e){if(typeof e!="string"||e.length===0)return!1;const i=t.splitLines(e);for(let n=0;n<i.length;n++)if(i[n].length<2||i[n].charAt(1)!=="=")return!1;return!0},s.exports=t})(Sd);var Md=Sd.exports;const as=K_(Md),q_=Bd({__proto__:null,default:as},[Md]);function Dr(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const t=s.RTCIceCandidate;s.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const n=new t(i),r=as.parseCandidate(i.candidate);for(const a in r)a in n||Object.defineProperty(n,a,{value:r[a]});return n.toJSON=function(){return{candidate:n.candidate,sdpMid:n.sdpMid,sdpMLineIndex:n.sdpMLineIndex,usernameFragment:n.usernameFragment}},n}return new t(i)},s.RTCIceCandidate.prototype=t.prototype,In(s,"icecandidate",e=>(e.candidate&&Object.defineProperty(e,"candidate",{value:new s.RTCIceCandidate(e.candidate),writable:"false"}),e))}function Oo(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||In(s,"icecandidate",t=>{if(t.candidate){const e=as.parseCandidate(t.candidate.candidate);e.type==="relay"&&(t.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[e.priority>>24])}return t})}function Or(s,t){if(!s.RTCPeerConnection||t.browser==="chrome"&&t.version>102||t.browser==="firefox"&&t.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const e=function(o){if(!o||!o.sdp)return!1;const c=as.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=as.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},i=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},n=function(o){let c=65536;return t.browser==="firefox"&&(t.version<57?o===-1?c=16384:c=2147483637:t.version<60?c=t.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;t.browser==="firefox"&&t.version===57&&(l=65535);const h=as.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):t.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,t.browser==="chrome"&&t.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(e(arguments[0])){const c=i(arguments[0]),l=n(c),h=r(arguments[0],c);let d;l===0&&h===0?d=Number.POSITIVE_INFINITY:l===0||h===0?d=Math.max(l,h):d=Math.min(l,h);const u={};Object.defineProperty(u,"maxMessageSize",{get(){return d}}),this._sctp=u}return a.apply(this,arguments)}}function Ur(s,t){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||t.browser==="chrome"&&t.version>=149||t.browser==="firefox"&&t.version>60)return;function e(n,r){const a=n.send;n.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(n.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(n,arguments)}}const i=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=i.apply(this,arguments);return e(r,this),r},In(s,"datachannel",n=>(e(n.channel,n.target),n))}function Uo(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const t=s.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(e=>{const i=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=n=>{const r=n.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",n);r.dispatchEvent(a)}return n},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function No(s,t){if(!s.RTCPeerConnection||t.browser==="chrome"&&t.version>=71||t.browser==="safari"&&t._safariVersion>=13.1)return;const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(n){if(n&&n.sdp&&n.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=n.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&n instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:n.type,sdp:r}):n.sdp=r}return e.apply(this,arguments)}}function Nr(s,t){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const e=s.RTCPeerConnection.prototype.addIceCandidate;!e||e.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(t.browser==="chrome"&&t.version<78||t.browser==="firefox"&&t.version<68||t.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():e.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function kr(s,t){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const e=s.RTCPeerConnection.prototype.setLocalDescription;!e||e.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let n=arguments[0]||{};if(typeof n!="object"||n.type&&n.sdp)return e.apply(this,arguments);if(n={type:n.type,sdp:n.sdp},!n.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":n.type="offer";break;default:n.type="answer";break}return n.sdp||n.type!=="offer"&&n.type!=="answer"?e.apply(this,[n]):(n.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>e.apply(this,[a]))})}const j_=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:No,shimAddIceCandidateNullOrEmpty:Nr,shimConnectionState:Uo,shimMaxMessageSize:Or,shimParameterlessSetLocalDescription:kr,shimRTCIceCandidate:Dr,shimRTCIceCandidateRelayProtocol:Oo,shimSendThrowTypeError:Ur},Symbol.toStringTag,{value:"Module"}));function Z_({window:s}={},t={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const e=pc,i=$_(s),n={browserDetails:i,commonShim:j_,extractVersion:Us,disableLog:W_,disableWarnings:X_,sdp:q_};switch(i.browser){case"chrome":if(!Yl||!Lo||!t.shimChrome)return e("Chrome shim is not included in this adapter release."),n;if(i.version===null)return e("Chrome shim can not determine version, not shimming."),n;e("adapter.js shimming chrome."),n.browserShim=Yl,Nr(s,i),kr(s),Yh(s,i),Kh(s),Lo(s,i),qh(s,i),Qh(s,i),jh(s),Zh(s,i),td(s,i),Dr(s),Oo(s),Uo(s),Or(s,i),Ur(s,i),No(s,i);break;case"firefox":if(!Kl||!Do||!t.shimFirefox)return e("Firefox shim is not included in this adapter release."),n;e("adapter.js shimming firefox."),n.browserShim=Kl,Nr(s,i),kr(s),ed(s,i),Do(s,i),nd(s,i),id(s),ad(s),sd(s),rd(s),od(s),cd(s,i),ld(s,i),hd(s,i),dd(s,i),Dr(s),Uo(s),Or(s,i),Ur(s,i);break;case"safari":if(!ql||!t.shimSafari)return e("Safari shim is not included in this adapter release."),n;e("adapter.js shimming safari."),n.browserShim=ql,Nr(s,i),kr(s),_d(s),xd(s),pd(s),ud(s),fd(s),vd(s),md(s),yd(s),Dr(s),Oo(s),Or(s,i),Ur(s,i),No(s,i);break;default:e("Unsupported browser!");break}return n}const jl=Z_({window:typeof window>"u"?void 0:window});function Ln(s,t,e,i){Object.defineProperty(s,t,{get:e,set:i,enumerable:!0,configurable:!0})}class Td{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=t=>{const e=[],i=t.byteLength,n=Math.ceil(i/this.chunkedMTU);let r=0,a=0;for(;a<i;){const o=Math.min(i,a+this.chunkedMTU),c=t.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:n};e.push(l),a=o,r++}return this._dataCount++,e}}}function J_(s){let t=0;for(const n of s)t+=n.byteLength;const e=new Uint8Array(t);let i=0;for(const n of s)e.set(n,i),i+=n.byteLength;return e}const Na=jl.default||jl,Is=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),t=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?t>=this.minChromeVersion:s==="firefox"?t>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&t>=this.minSafariVersion:!1:!1}getBrowser(){return Na.browserDetails.browser}getVersion(){return Na.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),t=Na.browserDetails.version||0;if(s==="chrome"&&t<this.minChromeVersion)return!1;if(s==="firefox"&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let e,i=!1;try{e=new RTCPeerConnection,e.addTransceiver("audio"),i=!0}catch{}finally{e&&e.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Q_=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),bd=()=>Math.random().toString(36).slice(2),Zl={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class tv extends Td{noop(){}blobToArrayBuffer(t,e){const i=new FileReader;return i.onload=function(n){n.target&&e(n.target.result)},i.readAsArrayBuffer(t),i}binaryStringToArrayBuffer(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i)&255;return e.buffer}isSecure(){return location.protocol==="https:"}constructor(...t){super(...t),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Zl,this.browser=Is.getBrowser(),this.browserVersion=Is.getVersion(),this.pack=Vh,this.unpack=zh,this.supports=function(){const e={browser:Is.isBrowserSupported(),webRTC:Is.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let i;try{i=new RTCPeerConnection(Zl),e.audioVideo=!0;let n;try{n=i.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!n.ordered;try{n.binaryType="blob",e.binaryBlob=!Is.isIOS}catch{}}catch{}finally{n&&n.close()}}catch{}finally{i&&i.close()}return e}(),this.validateId=Q_,this.randomToken=bd}}const Je=new tv,ev="PeerJS: ";class iv{get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t}log(...t){this._logLevel>=3&&this._print(3,...t)}warn(...t){this._logLevel>=2&&this._print(2,...t)}error(...t){this._logLevel>=1&&this._print(1,...t)}setLogFunction(t){this._print=t}_print(t,...e){const i=[ev,...e];for(const n in i)i[n]instanceof Error&&(i[n]="("+i[n].name+") "+i[n].message);t>=3?console.log(...i):t>=2?console.warn("WARNING",...i):t>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var Tt=new iv,gc={},nv=Object.prototype.hasOwnProperty,qe="~";function Ws(){}Object.create&&(Ws.prototype=Object.create(null),new Ws().__proto__||(qe=!1));function sv(s,t,e){this.fn=s,this.context=t,this.once=e||!1}function Ed(s,t,e,i,n){if(typeof e!="function")throw new TypeError("The listener must be a function");var r=new sv(e,i||s,n),a=qe?qe+t:t;return s._events[a]?s._events[a].fn?s._events[a]=[s._events[a],r]:s._events[a].push(r):(s._events[a]=r,s._eventsCount++),s}function Fr(s,t){--s._eventsCount===0?s._events=new Ws:delete s._events[t]}function We(){this._events=new Ws,this._eventsCount=0}We.prototype.eventNames=function(){var t=[],e,i;if(this._eventsCount===0)return t;for(i in e=this._events)nv.call(e,i)&&t.push(qe?i.slice(1):i);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t};We.prototype.listeners=function(t){var e=qe?qe+t:t,i=this._events[e];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,r=i.length,a=new Array(r);n<r;n++)a[n]=i[n].fn;return a};We.prototype.listenerCount=function(t){var e=qe?qe+t:t,i=this._events[e];return i?i.fn?1:i.length:0};We.prototype.emit=function(t,e,i,n,r,a){var o=qe?qe+t:t;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,d;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,i),!0;case 4:return c.fn.call(c.context,e,i,n),!0;case 5:return c.fn.call(c.context,e,i,n,r),!0;case 6:return c.fn.call(c.context,e,i,n,r,a),!0}for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c.fn.apply(c.context,h)}else{var u=c.length,f;for(d=0;d<u;d++)switch(c[d].once&&this.removeListener(t,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,e);break;case 3:c[d].fn.call(c[d].context,e,i);break;case 4:c[d].fn.call(c[d].context,e,i,n);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[d].fn.apply(c[d].context,h)}}return!0};We.prototype.on=function(t,e,i){return Ed(this,t,e,i,!1)};We.prototype.once=function(t,e,i){return Ed(this,t,e,i,!0)};We.prototype.removeListener=function(t,e,i,n){var r=qe?qe+t:t;if(!this._events[r])return this;if(!e)return Fr(this,r),this;var a=this._events[r];if(a.fn)a.fn===e&&(!n||a.once)&&(!i||a.context===i)&&Fr(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==e||n&&!a[o].once||i&&a[o].context!==i)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Fr(this,r)}return this};We.prototype.removeAllListeners=function(t){var e;return t?(e=qe?qe+t:t,this._events[e]&&Fr(this,e)):(this._events=new Ws,this._eventsCount=0),this};We.prototype.off=We.prototype.removeListener;We.prototype.addListener=We.prototype.on;We.prefixed=qe;We.EventEmitter=We;gc=We;var Dn={};Ln(Dn,"ConnectionType",()=>hn);Ln(Dn,"PeerErrorType",()=>Ie);Ln(Dn,"BaseConnectionErrorType",()=>ko);Ln(Dn,"DataConnectionErrorType",()=>_c);Ln(Dn,"SerializationType",()=>ta);Ln(Dn,"SocketEventType",()=>cn);Ln(Dn,"ServerMessageType",()=>ze);var hn=function(s){return s.Data="data",s.Media="media",s}({}),Ie=function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s}({}),ko=function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s}({}),_c=function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s}({}),ta=function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s}({}),cn=function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s}({}),ze=function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s}({});const Ad="1.5.5";class rv extends gc.EventEmitter{constructor(t,e,i,n,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=t?"wss://":"ws://";this._baseUrl=o+e+":"+i+n+"peerjs?key="+r}start(t,e){this._id=t;const i=`${this._baseUrl}&id=${t}&token=${e}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Ad),this._disconnected=!1,this._socket.onmessage=n=>{let r;try{r=JSON.parse(n.data),Tt.log("Server message received:",r)}catch{Tt.log("Invalid server message",n.data);return}this.emit(cn.Message,r)},this._socket.onclose=n=>{this._disconnected||(Tt.log("Socket closed.",n),this._cleanup(),this._disconnected=!0,this.emit(cn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Tt.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Tt.log("Cannot send heartbeat, because socket closed");return}const t=JSON.stringify({type:ze.Heartbeat});this._socket.send(t),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const t=[...this._messagesQueue];this._messagesQueue=[];for(const e of t)this.send(e)}send(t){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(t);return}if(!t.type){this.emit(cn.Error,"Invalid message");return}if(!this._wsOpen())return;const e=JSON.stringify(t);this._socket.send(e)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class wd{constructor(t){this.connection=t}startConnection(t){const e=this._startPeerConnection();if(this.connection.peerConnection=e,this.connection.type===hn.Media&&t._stream&&this._addTracksToConnection(t._stream,e),t.originator){const i=this.connection,n={ordered:!!t.reliable},r=e.createDataChannel(i.label,n);i._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",t.sdp)}_startPeerConnection(){Tt.log("Creating RTCPeerConnection.");const t=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(t),t}_setupListeners(t){const e=this.connection.peer,i=this.connection.connectionId,n=this.connection.type,r=this.connection.provider;Tt.log("Listening for ICE candidates."),t.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Tt.log(`Received ICE candidates for ${e}:`,a.candidate),r.socket.send({type:ze.Candidate,payload:{candidate:a.candidate,type:n,connectionId:i},dst:e}))},t.oniceconnectionstatechange=()=>{switch(t.iceConnectionState){case"failed":Tt.log("iceConnectionState is failed, closing connections to "+e),this.connection.emitError(ko.NegotiationFailed,"Negotiation of connection to "+e+" failed."),this.connection.close();break;case"closed":Tt.log("iceConnectionState is closed, closing connections to "+e),this.connection.emitError(ko.ConnectionClosed,"Connection to "+e+" closed."),this.connection.close();break;case"disconnected":Tt.log("iceConnectionState changed to disconnected on the connection with "+e);break;case"completed":t.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",t.iceConnectionState)},Tt.log("Listening for data channel"),t.ondatachannel=a=>{Tt.log("Received data channel");const o=a.channel;r.getConnection(e,i)._initializeDataChannel(o)},Tt.log("Listening for remote stream"),t.ontrack=a=>{Tt.log("Received remote stream");const o=a.streams[0],c=r.getConnection(e,i);if(c.type===hn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Tt.log("Cleaning up PeerConnection to "+this.connection.peer);const t=this.connection.peerConnection;if(!t)return;this.connection.peerConnection=null,t.onicecandidate=t.oniceconnectionstatechange=t.ondatachannel=t.ontrack=()=>{};const e=t.signalingState!=="closed";let i=!1;const n=this.connection.dataChannel;n&&(i=!!n.readyState&&n.readyState!=="closed"),(e||i)&&t.close()}async _makeOffer(){const t=this.connection.peerConnection,e=this.connection.provider;try{const i=await t.createOffer(this.connection.options.constraints);Tt.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await t.setLocalDescription(i),Tt.log("Set localDescription:",i,`for:${this.connection.peer}`);let n={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===hn.Data){const r=this.connection;n={...n,label:r.label,reliable:r.reliable,serialization:r.serialization}}e.socket.send({type:ze.Offer,payload:n,dst:this.connection.peer})}catch(n){n!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(e.emitError(Ie.WebRTC,n),Tt.log("Failed to setLocalDescription, ",n))}}catch(i){e.emitError(Ie.WebRTC,i),Tt.log("Failed to createOffer, ",i)}}async _makeAnswer(){const t=this.connection.peerConnection,e=this.connection.provider;try{const i=await t.createAnswer();Tt.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await t.setLocalDescription(i),Tt.log("Set localDescription:",i,`for:${this.connection.peer}`),e.socket.send({type:ze.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(n){e.emitError(Ie.WebRTC,n),Tt.log("Failed to setLocalDescription, ",n)}}catch(i){e.emitError(Ie.WebRTC,i),Tt.log("Failed to create answer, ",i)}}async handleSDP(t,e){e=new RTCSessionDescription(e);const i=this.connection.peerConnection,n=this.connection.provider;Tt.log("Setting remote description",e);const r=this;try{await i.setRemoteDescription(e),Tt.log(`Set remoteDescription:${t} for:${this.connection.peer}`),t==="OFFER"&&await r._makeAnswer()}catch(a){n.emitError(Ie.WebRTC,a),Tt.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(t){Tt.log("handleCandidate:",t);try{await this.connection.peerConnection.addIceCandidate(t),Tt.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){this.connection.provider.emitError(Ie.WebRTC,e),Tt.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(t,e){if(Tt.log(`add tracks from stream ${t.id} to peer connection`),!e.addTrack)return Tt.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");t.getTracks().forEach(i=>{e.addTrack(i,t)})}_addStreamToMediaConnection(t,e){Tt.log(`add stream ${t.id} to media connection ${e.connectionId}`),e.addStream(t)}}class Cd extends gc.EventEmitter{emitError(t,e){Tt.error("Error:",e),this.emit("error",new av(`${t}`,e))}}class av extends Error{constructor(t,e){typeof e=="string"?super(e):(super(),Object.assign(this,e)),this.type=t}}class Rd extends Cd{get open(){return this._open}constructor(t,e,i){super(),this.peer=t,this.provider=e,this.options=i,this._open=!1,this.metadata=i.metadata}}var Ho;const Fs=class Fs extends Rd{get type(){return hn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(t,e,i){super(t,e,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Fs.ID_PREFIX+Je.randomToken(),this._negotiator=new wd(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(t){this.dataChannel=t,this.dataChannel.onopen=()=>{Tt.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Tt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(t){Tt.log("Receiving stream",t),this._remoteStream=t,super.emit("stream",t)}handleMessage(t){const e=t.type,i=t.payload;switch(t.type){case ze.Answer:this._negotiator.handleSDP(e,i.sdp),this._open=!0;break;case ze.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Tt.warn(`Unrecognized message type:${e} from peer:${this.peer}`);break}}answer(t,e={}){if(this._localStream){Tt.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=t,e&&e.sdpTransform&&(this.options.sdpTransform=e.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:t});const i=this.provider._getMessages(this.connectionId);for(const n of i)this.handleMessage(n);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Ho=new WeakMap,Ss(Fs,Ho,Fs.ID_PREFIX="mc_");let Wr=Fs;class ov{constructor(t){this._options=t}_buildRequest(t){const e=this._options.secure?"https":"http",{host:i,port:n,path:r,key:a}=this._options,o=new URL(`${e}://${i}:${n}${r}${a}/${t}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Ad),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const t=await this._buildRequest("id");if(t.status!==200)throw new Error(`Error. Status:${t.status}`);return t.text()}catch(t){Tt.error("Error retrieving ID",t);let e="";throw this._options.path==="/"&&this._options.host!==Je.CLOUD_HOST&&(e=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+e)}}async listAllPeers(){try{const t=await this._buildRequest("peers");if(t.status!==200){if(t.status===401){let e="";throw this._options.host===Je.CLOUD_HOST?e="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":e="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+e)}throw new Error(`Error. Status:${t.status}`)}return t.json()}catch(t){throw Tt.error("Error retrieving list peers",t),new Error("Could not get list peers from the server."+t)}}}var zo,Vo;const An=class An extends Rd{get type(){return hn.Data}constructor(t,e,i){super(t,e,i),this.connectionId=this.options.connectionId||An.ID_PREFIX+bd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new wd(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(t){this.dataChannel=t,this.dataChannel.onopen=()=>{Tt.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=e=>{Tt.log(`DC#${this.connectionId} dc onmessage:`,e.data)},this.dataChannel.onclose=()=>{Tt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(t){if(t!=null&&t.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(t,e=!1){if(!this.open){this.emitError(_c.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(t,e)}async handleMessage(t){const e=t.payload;switch(t.type){case ze.Answer:await this._negotiator.handleSDP(t.type,e.sdp);break;case ze.Candidate:await this._negotiator.handleCandidate(e.candidate);break;default:Tt.warn("Unrecognized message type:",t.type,"from peer:",this.peer);break}}};zo=new WeakMap,Vo=new WeakMap,Ss(An,zo,An.ID_PREFIX="dc_"),Ss(An,Vo,An.MAX_BUFFERED_AMOUNT=8388608);let Xr=An;class vc extends Xr{get bufferSize(){return this._bufferSize}_initializeDataChannel(t){super._initializeDataChannel(t),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",e=>this._handleDataMessage(e))}_bufferedSend(t){(this._buffering||!this._trySend(t))&&(this._buffer.push(t),this._bufferSize=this._buffer.length)}_trySend(t){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Xr.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(t)}catch(e){return Tt.error(`DC#:${this.connectionId} Error when sending:`,e),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const t=this._buffer[0];this._trySend(t)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(t){if(t!=null&&t.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...t){super(...t),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class ka extends vc{close(t){super.close(t),this._chunkedData={}}constructor(t,e,i){super(t,e,i),this.chunker=new Td,this.serialization=ta.Binary,this._chunkedData={}}_handleDataMessage({data:t}){const e=zh(t),i=e.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(e);return}this.emit("data",e)}_handleChunk(t){const e=t.__peerData,i=this._chunkedData[e]||{data:[],count:0,total:t.total};if(i.data[t.n]=new Uint8Array(t.data),i.count++,this._chunkedData[e]=i,i.total===i.count){delete this._chunkedData[e];const n=J_(i.data);this._handleDataMessage({data:n})}}_send(t,e){const i=Vh(t);if(i instanceof Promise)return this._send_blob(i);if(!e&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(t){const e=await t;if(e.byteLength>this.chunker.chunkedMTU){this._sendChunks(e);return}this._bufferedSend(e)}_sendChunks(t){const e=this.chunker.chunk(t);Tt.log(`DC#${this.connectionId} Try to send ${e.length} chunks...`);for(const i of e)this.send(i,!0)}}class cv extends vc{_handleDataMessage({data:t}){super.emit("data",t)}_send(t,e){this._bufferedSend(t)}constructor(...t){super(...t),this.serialization=ta.None}}class lv extends vc{_handleDataMessage({data:t}){const e=this.parse(this.decoder.decode(t)),i=e.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",e)}_send(t,e){const i=this.encoder.encode(this.stringify(t));if(i.byteLength>=Je.chunkedMTU){this.emitError(_c.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...t){super(...t),this.serialization=ta.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Wo;const Bs=class Bs extends Cd{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const t=Object.create(null);for(const[e,i]of this._connections)t[e]=i;return t}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(t,e){super(),this._serializers={raw:cv,json:lv,binary:ka,"binary-utf8":ka,default:ka},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(t&&t.constructor==Object?e=t:t&&(i=t.toString()),e={debug:0,host:Je.CLOUD_HOST,port:Je.CLOUD_PORT,path:"/",key:Bs.DEFAULT_KEY,token:Je.randomToken(),config:Je.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...e},this._options=e,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Je.CLOUD_HOST?this._options.secure=Je.isSecure():this._options.host==Je.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Tt.setLogFunction(this._options.logFunction),Tt.logLevel=this._options.debug||0,this._api=new ov(e),this._socket=this._createServerConnection(),!Je.supports.audioVideo&&!Je.supports.data){this._delayedAbort(Ie.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Je.validateId(i)){this._delayedAbort(Ie.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(n=>this._initialize(n)).catch(n=>this._abort(Ie.ServerError,n))}_createServerConnection(){const t=new rv(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(cn.Message,e=>{this._handleMessage(e)}),t.on(cn.Error,e=>{this._abort(Ie.SocketError,e)}),t.on(cn.Disconnected,()=>{this.disconnected||(this.emitError(Ie.Network,"Lost connection to server."),this.disconnect())}),t.on(cn.Close,()=>{this.disconnected||this._abort(Ie.SocketClosed,"Underlying socket is already closed.")}),t}_initialize(t){this._id=t,this.socket.start(t,this._options.token)}_handleMessage(t){const e=t.type,i=t.payload,n=t.src;switch(e){case ze.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ze.Error:this._abort(Ie.ServerError,i.msg);break;case ze.IdTaken:this._abort(Ie.UnavailableID,`ID "${this.id}" is taken`);break;case ze.InvalidKey:this._abort(Ie.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ze.Leave:Tt.log(`Received leave message from ${n}`),this._cleanupPeer(n),this._connections.delete(n);break;case ze.Expire:this.emitError(Ie.PeerUnavailable,`Could not connect to peer ${n}`);break;case ze.Offer:{const r=i.connectionId;let a=this.getConnection(n,r);if(a&&(a.close(),Tt.warn(`Offer received for existing Connection ID:${r}`)),i.type===hn.Media){const c=new Wr(n,this,{connectionId:r,_payload:i,metadata:i.metadata});a=c,this._addConnection(n,a),this.emit("call",c)}else if(i.type===hn.Data){const c=new this._serializers[i.serialization](n,this,{connectionId:r,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});a=c,this._addConnection(n,a),this.emit("connection",c)}else{Tt.warn(`Received malformed connection type:${i.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!i){Tt.warn(`You received a malformed message from ${n} of type ${e}`);return}const r=i.connectionId,a=this.getConnection(n,r);a&&a.peerConnection?a.handleMessage(t):r?this._storeMessage(r,t):Tt.warn("You received an unrecognized message:",t);break}}}_storeMessage(t,e){this._lostMessages.has(t)||this._lostMessages.set(t,[]),this._lostMessages.get(t).push(e)}_getMessages(t){const e=this._lostMessages.get(t);return e?(this._lostMessages.delete(t),e):[]}connect(t,e={}){if(e={serialization:"default",...e},this.disconnected){Tt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ie.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[e.serialization](t,this,e);return this._addConnection(t,i),i}call(t,e,i={}){if(this.disconnected){Tt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ie.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!e){Tt.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const n=new Wr(t,this,{...i,_stream:e});return this._addConnection(t,n),n}_addConnection(t,e){Tt.log(`add connection ${e.type}:${e.connectionId} to peerId:${t}`),this._connections.has(t)||this._connections.set(t,[]),this._connections.get(t).push(e)}_removeConnection(t){const e=this._connections.get(t.peer);if(e){const i=e.indexOf(t);i!==-1&&e.splice(i,1)}this._lostMessages.delete(t.connectionId)}getConnection(t,e){const i=this._connections.get(t);if(!i)return null;for(const n of i)if(n.connectionId===e)return n;return null}_delayedAbort(t,e){setTimeout(()=>{this._abort(t,e)},0)}_abort(t,e){Tt.error("Aborting!"),this.emitError(t,e),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Tt.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const t of this._connections.keys())this._cleanupPeer(t),this._connections.delete(t);this.socket.removeAllListeners()}_cleanupPeer(t){const e=this._connections.get(t);if(e)for(const i of e)i.close()}disconnect(){if(this.disconnected)return;const t=this.id;Tt.log(`Disconnect peer with ID:${t}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=t,this._id=null,this.emit("disconnected",t)}reconnect(){if(this.disconnected&&!this.destroyed)Tt.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Tt.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(t=e=>{}){this._api.listAllPeers().then(e=>t(e)).catch(e=>this._abort(Ie.ServerError,e))}};Wo=new WeakMap,Ss(Bs,Wo,Bs.DEFAULT_KEY="peerjs");let $r=Bs;var Vt=(s=>(s.JOIN_ROOM="JOIN_ROOM",s.ROOM_STATE="ROOM_STATE",s.SET_READY="SET_READY",s.TOGGLE_BOTS="TOGGLE_BOTS",s.START_MATCH="START_MATCH",s.MATCH_STARTING="MATCH_STARTING",s.PLAYER_LEFT="PLAYER_LEFT",s.ERROR="ERROR",s.CLIENT_TICK="CLIENT_TICK",s.SERVER_SNAPSHOT="SERVER_SNAPSHOT",s.FIRE_WEAPON="FIRE_WEAPON",s.RIG_TRIGGER="RIG_TRIGGER",s.GROUND_SLAM="GROUND_SLAM",s.DAMAGE_EVENT="DAMAGE_EVENT",s.PLAYER_DIED="PLAYER_DIED",s.RESPAWN="RESPAWN",s.TILE_DESTROY="TILE_DESTROY",s.PICKUP_CLAIM="PICKUP_CLAIM",s.PING="PING",s.PONG="PONG",s))(Vt||{});const Ai=class Ai{constructor(){x(this,"peer",null);x(this,"hostConnection",null);x(this,"clientConnections",new Map);x(this,"isHost",!1);x(this,"isConnected",!1);x(this,"currentRoomId",null);x(this,"localPlayerId","player_local");x(this,"localPlayerName","Operative_01");x(this,"ping",0);x(this,"isLocalHotspot",!1);x(this,"cachedLobbyPlayers",[]);x(this,"mapId",ae.BIRNIN_KANO);x(this,"mode",Qt.TEAM_DEATHMATCH);x(this,"fillBots",!0);x(this,"teamSize",3);x(this,"isMatchRunning",!1);x(this,"hostSnapshotInterval",null);x(this,"pingInterval",null);x(this,"clientTickStates",new Map);x(this,"hostPlayerState",null);x(this,"snapshotTick",0);x(this,"destroyedTilesHistory",[]);x(this,"onRoomState");x(this,"onMatchStarting");x(this,"onSnapshot");x(this,"onFireWeapon");x(this,"onRigTrigger");x(this,"onGroundSlam");x(this,"onDamageEvent");x(this,"onTileDestroy");x(this,"onPickupClaim");x(this,"onPlayerLeft");x(this,"onError");x(this,"onPingUpdate")}static getInstance(){return Ai.instance||(Ai.instance=new Ai),Ai.instance}static generateRoomCode(){return Math.floor(1e3+Math.random()*9e3).toString()}static getFullPeerId(t){return`xag-sector234-room-${t}`}getPeerConfig(){return{config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"}],sdpSemantics:"unified-plan"}}}hostMatch(t,e,i,n,r,a=!0,o=3){return new Promise((c,l)=>{this.leaveRoom();const h=Ai.generateRoomCode(),d=Ai.getFullPeerId(h);this.isHost=!0,this.currentRoomId=h,this.localPlayerId=`host_${Math.random().toString(36).substring(2,7)}`,this.localPlayerName=t||"Commander_Host",this.mapId=n,this.mode=r,this.fillBots=a,this.teamSize=o,this.cachedLobbyPlayers=[{id:this.localPlayerId,name:this.localPlayerName,rig:e,primaryWeapon:i,isHost:!0,isReady:!0,ping:0}];try{this.peer=new $r(d,this.getPeerConfig())}catch(u){console.error("[P2P] Peer creation failed:",u),l(u);return}this.peer.on("open",u=>{console.log(`[P2P HOST] Arena Host online with ID: ${u} (Code: ${h})`),this.isConnected=!0,this.broadcastRoomState(),c(h)}),this.peer.on("connection",u=>{console.log(`[P2P HOST] Inbound client connection from: ${u.peer}`),this.setupHostConnection(u)}),this.peer.on("error",u=>{if(console.error("[P2P HOST] Peer error:",u),u.type==="unavailable-id"){this.hostMatch(t,e,i,n,r,a,o).then(c).catch(l);return}this.onError&&this.onError(u.message||"Host connection error"),l(u)})})}setupHostConnection(t){t.on("open",()=>{console.log(`[P2P HOST] Data channel established with ${t.peer}`),this.clientConnections.set(t.peer,t),t.send({type:Vt.ROOM_STATE,payload:this.getRoomStatePayload(t.peer)}),this.destroyedTilesHistory.length>0&&this.destroyedTilesHistory.forEach(e=>{t.send({type:Vt.TILE_DESTROY,payload:e})})}),t.on("data",e=>{this.handleHostReceivedData(t,e)}),t.on("close",()=>{console.log(`[P2P HOST] Client disconnected: ${t.peer}`),this.clientConnections.delete(t.peer);const e=this.cachedLobbyPlayers.findIndex(i=>i.id===t.peer);e!==-1&&this.cachedLobbyPlayers.splice(e,1),this.clientTickStates.delete(t.peer),this.onPlayerLeft&&this.onPlayerLeft(t.peer),this.broadcastRoomState()}),t.on("error",e=>{console.warn(`[P2P HOST] Connection error with ${t.peer}:`,e)})}joinMatch(t,e,i,n){return new Promise(r=>{this.leaveRoom();const a=t.trim().replace(/\D/g,"").substring(0,4);if(a.length!==4){this.onError&&this.onError("Please enter a valid 4-digit room code"),r(!1);return}this.isHost=!1,this.currentRoomId=a,this.localPlayerId=`client_${Math.random().toString(36).substring(2,7)}`,this.localPlayerName=e||"Operative";const o=Ai.getFullPeerId(a),c=`xag-client-${this.localPlayerId}`;try{this.peer=new $r(c,this.getPeerConfig())}catch(h){console.error("[P2P CLIENT] Peer creation failed:",h),r(!1);return}let l=setTimeout(()=>{this.isConnected||(console.warn("[P2P CLIENT] Connection timeout trying to reach host:",o),this.onError&&this.onError(`Could not reach Host room ${a}. Check code or same Wi-Fi.`),r(!1))},9e3);this.peer.on("open",h=>{console.log(`[P2P CLIENT] Peer ready (${h}), connecting to host: ${o}...`);const d=this.peer.connect(o,{reliable:!1,serialization:"binary"});this.hostConnection=d,d.on("open",()=>{clearTimeout(l),console.log(`[P2P CLIENT] Connected directly to host: ${o}!`),this.isConnected=!0,d.send({type:Vt.JOIN_ROOM,payload:{playerName:this.localPlayerName,rig:i,weapon:n,mapId:this.mapId,mode:this.mode}}),this.startPingMeasurement(),r(!0)}),d.on("data",u=>{this.handleClientReceivedData(u)}),d.on("close",()=>{console.log("[P2P CLIENT] Disconnected from host"),this.isConnected=!1,this.onError&&this.onError("Host ended the match or closed the room")}),d.on("error",u=>{console.error("[P2P CLIENT] Connection error:",u),this.onError&&this.onError(`Connection failed: ${u}`)})}),this.peer.on("error",h=>{console.error("[P2P CLIENT] Peer error:",h),clearTimeout(l),this.onError&&this.onError(`Connection error: ${h.type||h}`),r(!1)})})}handleHostReceivedData(t,e){var n,r;if(!e)return;if(Array.isArray(e)&&e[0]===3){this.unpackClientTick(e);return}const i=e;if(i.type===Vt.PING){t.send({type:Vt.PONG,payload:{time:((n=i.payload)==null?void 0:n.time)||Date.now()}});return}if(i.type===Vt.JOIN_ROOM){const a=i.payload;this.cachedLobbyPlayers.find(c=>c.id===t.peer)||this.cachedLobbyPlayers.push({id:t.peer,name:a.playerName||"Operative",rig:a.rig,primaryWeapon:a.weapon,isHost:!1,isReady:!1,ping:10}),this.broadcastRoomState();return}if(i.type===Vt.SET_READY){const a=this.cachedLobbyPlayers.find(o=>o.id===t.peer);a&&(a.isReady=!!((r=i.payload)!=null&&r.isReady),this.broadcastRoomState());return}if(i.type===Vt.CLIENT_TICK){const a=i.payload;a&&a.state&&this.clientTickStates.set(a.state.id,a.state);return}if(i.type===Vt.FIRE_WEAPON){const a=i.payload;this.onFireWeapon&&this.onFireWeapon(a),this.broadcastExcept(t.peer,i);return}if(i.type===Vt.RIG_TRIGGER){const a=i.payload;this.onRigTrigger&&this.onRigTrigger(a),this.broadcastExcept(t.peer,i);return}if(i.type===Vt.GROUND_SLAM){const a=i.payload;this.onGroundSlam&&this.onGroundSlam(a),this.broadcastExcept(t.peer,i);return}if(i.type===Vt.DAMAGE_EVENT){const a=i.payload;this.onDamageEvent&&this.onDamageEvent(a),this.broadcastExcept(t.peer,i);return}if(i.type===Vt.TILE_DESTROY){const a=i.payload;this.destroyedTilesHistory.push(a),this.onTileDestroy&&this.onTileDestroy(a),this.broadcastExcept(t.peer,i);return}if(i.type===Vt.PICKUP_CLAIM){const a=i.payload;this.onPickupClaim&&this.onPickupClaim(a),this.broadcastExcept(t.peer,i);return}}handleClientReceivedData(t){var i,n;if(!t)return;if(Array.isArray(t)&&t[0]===4){this.unpackServerSnapshot(t);return}const e=t;if(e.type===Vt.PONG){const r=((i=e.payload)==null?void 0:i.time)||Date.now(),a=Math.max(1,Date.now()-r);this.ping=a,this.isLocalHotspot=a<=15,this.onPingUpdate&&this.onPingUpdate(this.ping,this.isLocalHotspot);return}if(e.type===Vt.ROOM_STATE){const r=e.payload;this.cachedLobbyPlayers=r.players||[],this.mapId=r.mapId,this.mode=r.mode,this.fillBots=r.fillBots,this.onRoomState&&this.onRoomState(r);return}if(e.type===Vt.MATCH_STARTING){const r=e.payload;this.isMatchRunning=!0,this.onMatchStarting&&this.onMatchStarting(r);return}if(e.type===Vt.SERVER_SNAPSHOT){const r=e.payload;this.onSnapshot&&this.onSnapshot(r);return}if(e.type===Vt.FIRE_WEAPON){const r=e.payload;this.onFireWeapon&&this.onFireWeapon(r);return}if(e.type===Vt.RIG_TRIGGER){const r=e.payload;this.onRigTrigger&&this.onRigTrigger(r);return}if(e.type===Vt.GROUND_SLAM){const r=e.payload;this.onGroundSlam&&this.onGroundSlam(r);return}if(e.type===Vt.DAMAGE_EVENT){const r=e.payload;this.onDamageEvent&&this.onDamageEvent(r);return}if(e.type===Vt.TILE_DESTROY){const r=e.payload;this.onTileDestroy&&this.onTileDestroy(r);return}if(e.type===Vt.PICKUP_CLAIM){const r=e.payload;this.onPickupClaim&&this.onPickupClaim(r);return}if(e.type===Vt.PLAYER_LEFT){const r=(n=e.payload)==null?void 0:n.playerId;r&&this.onPlayerLeft&&this.onPlayerLeft(r);return}}packPlayerState(t){const e=(t.isJetFlying?1:0)|(t.isGrounded?2:0)|(t.isSliding?4:0)|(t.isDead?8:0)|(t.facingRight?16:0),i=t.team==="blue"?1:t.team==="red"?2:0;return[t.id,Math.round(t.x*100)/100,Math.round(t.y*100)/100,Math.round(t.vx*10)/10,Math.round(t.vy*10)/10,Number(t.aimAngle.toFixed(2)),e,t.activeWeapon,Math.round(t.hp),Math.round(t.armor),Math.round(t.fuel),i]}unpackPlayerState(t){const e=t[6]||0,i=t[11]||0,n=i===1?"blue":i===2?"red":"none";return{id:t[0],x:t[1],y:t[2],vx:t[3],vy:t[4],aimAngle:t[5],facingRight:(e&16)!==0,isJetFlying:(e&1)!==0,isGrounded:(e&2)!==0,isSliding:(e&4)!==0,isDead:(e&8)!==0,activeWeapon:t[7],hp:t[8],armor:t[9],fuel:t[10],team:n,timestamp:Date.now()}}unpackClientTick(t){const e=t.slice(1),i=this.unpackPlayerState(e);this.clientTickStates.set(i.id,i),this.onSnapshot&&this.onSnapshot({tick:this.snapshotTick,timestamp:Date.now(),players:[i]})}unpackServerSnapshot(t){const e=t[1],i=t[2],r=t[3].map(a=>this.unpackPlayerState(a));this.onSnapshot&&this.onSnapshot({tick:e,timestamp:i,players:r})}sendTick(t){if(this.isHost){this.hostPlayerState=t;return}if(!this.isConnected||!this.hostConnection||!this.hostConnection.open)return;const e=this.packPlayerState(t);this.hostConnection.send([3,...e])}broadcastHostSnapshot(t){if(!this.isHost||this.clientConnections.size===0)return;this.snapshotTick++;const e=t.map(n=>this.packPlayerState(n)),i=[4,this.snapshotTick,Date.now(),e];this.clientConnections.forEach(n=>{n.open&&n.send(i)})}startHostBroadcastLoop(){this.hostSnapshotInterval&&clearInterval(this.hostSnapshotInterval),this.snapshotTick=0,this.hostSnapshotInterval=setInterval(()=>{if(!this.isHost||!this.isMatchRunning)return;this.snapshotTick++;const t=[];this.hostPlayerState&&t.push(this.hostPlayerState),this.clientTickStates.forEach(n=>{t.push(n)});const e=t.map(n=>this.packPlayerState(n)),i=[4,this.snapshotTick,Date.now(),e];this.clientConnections.forEach(n=>{n.open&&n.send(i)})},33)}sendFire(t){this.isHost?(this.broadcastAll({type:Vt.FIRE_WEAPON,payload:t}),this.onFireWeapon&&this.onFireWeapon(t)):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.FIRE_WEAPON,payload:t})}sendRig(t){this.isHost?(this.broadcastAll({type:Vt.RIG_TRIGGER,payload:t}),this.onRigTrigger&&this.onRigTrigger(t)):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.RIG_TRIGGER,payload:t})}sendRigTrigger(t){this.sendRig(t)}sendGroundSlam(t){this.isHost?(this.broadcastAll({type:Vt.GROUND_SLAM,payload:t}),this.onGroundSlam&&this.onGroundSlam(t)):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.GROUND_SLAM,payload:t})}sendDamage(t){this.isHost?(this.broadcastAll({type:Vt.DAMAGE_EVENT,payload:t}),this.onDamageEvent&&this.onDamageEvent(t)):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.DAMAGE_EVENT,payload:t})}sendTileDestroy(t){this.isHost?(this.destroyedTilesHistory.push(t),this.broadcastAll({type:Vt.TILE_DESTROY,payload:t})):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.TILE_DESTROY,payload:t})}sendPickupClaim(t){this.isHost?(this.broadcastAll({type:Vt.PICKUP_CLAIM,payload:t}),this.onPickupClaim&&this.onPickupClaim(t)):this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.PICKUP_CLAIM,payload:t})}setReady(t){if(this.isHost){const e=this.cachedLobbyPlayers.find(i=>i.isHost);e&&(e.isReady=t),this.broadcastRoomState()}else this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.SET_READY,payload:{isReady:t}})}toggleBots(t){this.isHost&&(this.fillBots=t,this.broadcastRoomState())}startMatch(){if(!this.isHost)return;this.isMatchRunning=!0;const t={countdownSec:0,mapId:this.mapId,mode:this.mode,seed:Math.floor(Math.random()*1e5),fillBots:this.fillBots,teamSize:this.teamSize};this.broadcastAll({type:Vt.MATCH_STARTING,payload:t}),this.onMatchStarting&&this.onMatchStarting(t),this.startHostBroadcastLoop()}broadcastAll(t){this.clientConnections.forEach(e=>{e.open&&e.send(t)})}broadcastExcept(t,e){this.clientConnections.forEach((i,n)=>{n!==t&&i.open&&i.send(e)})}getRoomStatePayload(t){return{roomId:this.currentRoomId||"2340",yourPlayerId:t||this.localPlayerId,isHost:this.isHost,mapId:this.mapId,mode:this.mode,players:this.cachedLobbyPlayers,matchActive:this.isMatchRunning,fillBots:this.fillBots,teamSize:this.teamSize}}broadcastRoomState(){this.isHost&&(this.clientConnections.forEach((t,e)=>{t.open&&t.send({type:Vt.ROOM_STATE,payload:this.getRoomStatePayload(e)})}),this.onRoomState&&this.onRoomState(this.getRoomStatePayload(this.localPlayerId)))}startPingMeasurement(){this.pingInterval&&clearInterval(this.pingInterval),this.pingInterval=setInterval(()=>{this.hostConnection&&this.hostConnection.open&&this.hostConnection.send({type:Vt.PING,payload:{time:Date.now()}})},1200)}leaveRoom(){if(this.isMatchRunning=!1,this.isConnected=!1,this.isHost=!1,this.currentRoomId=null,this.hostSnapshotInterval&&(clearInterval(this.hostSnapshotInterval),this.hostSnapshotInterval=null),this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null),this.hostConnection){try{this.hostConnection.close()}catch{}this.hostConnection=null}if(this.clientConnections.forEach(t=>{try{t.close()}catch{}}),this.clientConnections.clear(),this.clientTickStates.clear(),this.hostPlayerState=null,this.peer){try{this.peer.destroy()}catch{}this.peer=null}}};x(Ai,"instance",null);let Yr=Ai;const Jl=[W.RIFLE_XAG47,W.SHOTGUN_AA12,W.RAIL_SNIPER,W.VULCAN_MINIGUN,W.AKIMBO_UZIS,W.BUNKER_RPG,W.GHOST_SMG,W.CUTLASS,W.PISTOL_XAG9];class hv{constructor(t,e){x(this,"container");x(this,"audio");x(this,"onStartGameCallback");x(this,"onRematchCallback");x(this,"selectedGamerTag","XAG_001");x(this,"selectedRig",xt.BREACH_BOOSTER);x(this,"selectedMode",Qt.ODOGWU_STASH);x(this,"selectedMap",ae.BIRNIN_KANO);x(this,"selectedWeapon",W.RIFLE_XAG47);x(this,"selectedSecondaryWeapon",W.SHOTGUN_AA12);x(this,"fillBots",!0);x(this,"teamSize",2);x(this,"radarAnimId",null);const i=document.getElementById(t);if(!i)throw new Error(`UI container ${t} not found`);this.container=i,this.audio=e;const n=Ri.getInstance().getProfile();this.selectedGamerTag=n.call_sign||"XAG_001",this.selectedRig=n.selected_rig||xt.BREACH_BOOSTER,n.unlocked_weapons&&n.unlocked_weapons.length>0&&(this.selectedWeapon=n.unlocked_weapons[0])}showMainMenu(t){var _,y,A,O,D,G,X,z,K,H,st;this.onStartGameCallback=t,document.body.classList.remove("in-match");const e=document.getElementById("touch-controls");e&&(e.style.display="none");const i=Ri.getInstance().getProfile();this.selectedGamerTag=i.call_sign||"XAG_001",this.radarAnimId!==null&&(cancelAnimationFrame(this.radarAnimId),this.radarAnimId=null);const n=He[this.selectedWeapon]||He[W.RIFLE_XAG47],r=He[this.selectedSecondaryWeapon]||He[W.SHOTGUN_AA12];this.container.innerHTML=F_(i,this.selectedGamerTag,n,r,this.selectedRig,this.selectedMap,this.selectedMode,this.teamSize,this.fillBots);const a=()=>{const q=document.getElementById("home-mode-display");q&&(q.innerText=Gh(this.selectedMode,this.teamSize));const J=document.getElementById("home-map-display");J&&(J.innerText=`${Hh(this.selectedMap)} • ${this.fillBots?"BOTS ON":"PVP ONLY"}`);const ct=document.getElementById("nav-armory-sub"),Et=He[this.selectedWeapon]||He[W.RIFLE_XAG47];ct&&Et&&(ct.innerText=Et.name)},o=document.getElementById("xag-callsign-input");o&&(o.addEventListener("input",()=>{this.selectedGamerTag=o.value.trim()||"XAG_001"}),o.addEventListener("change",()=>{var J,ct;const q=Ri.getInstance().getProfile();q.call_sign=this.selectedGamerTag,(ct=(J=Ri.getInstance()).saveToStorage)==null||ct.call(J,q)})),(_=document.getElementById("btn-audio-toggle"))==null||_.addEventListener("click",q=>{var J;q.stopPropagation(),(J=this.audio)==null||J.playUISelect()}),(y=document.getElementById("btn-open-settings"))==null||y.addEventListener("click",q=>{var J;q.stopPropagation(),(J=this.audio)==null||J.playUISelect(),this.showDossierModal()});const c=document.getElementById("xag-maps-modal"),l=q=>{var J;q.stopPropagation(),(J=this.audio)==null||J.playUISelect(),c&&c.classList.add("open"),this.startRadarAnimation()},h=q=>{var J;q&&q.stopPropagation(),(J=this.audio)==null||J.playUISelect(),c&&c.classList.remove("open"),a()};(A=document.getElementById("btn-open-maps-modal"))==null||A.addEventListener("click",l),(O=document.getElementById("btn-close-maps-modal"))==null||O.addEventListener("click",h),(D=document.getElementById("btn-confirm-maps-modal"))==null||D.addEventListener("click",h),c==null||c.addEventListener("click",q=>{q.target===c&&h()});const d=this.container.querySelectorAll(".xag-theater-card");d.forEach(q=>{q.addEventListener("click",J=>{var ct;J.stopPropagation(),d.forEach(Et=>Et.classList.remove("active")),q.classList.add("active"),this.selectedMap=q.getAttribute("data-map"),(ct=this.audio)==null||ct.playUISelect(),a()})});const u=this.container.querySelectorAll(".xag-mode-card");u.forEach(q=>{q.addEventListener("click",J=>{var ct;J.stopPropagation(),u.forEach(Et=>Et.classList.remove("active")),q.classList.add("active"),this.selectedMode=q.getAttribute("data-mode"),this.teamSize=parseInt(q.getAttribute("data-teamsize")||"2",10),(ct=this.audio)==null||ct.playUISelect(),a()})});const f=document.getElementById("btn-toggle-bots");f==null||f.addEventListener("click",q=>{var ct;q.stopPropagation(),this.fillBots=!this.fillBots;const J=document.getElementById("modal-bot-status-pill");J&&(J.innerText=this.fillBots?"🤖 BOTS: ENABLED":"✕ PVP ONLY",J.className=`xag-toggle-pill ${this.fillBots?"on":"off"}`),(ct=this.audio)==null||ct.playUISelect(),a()});const g=document.getElementById("xag-armory-modal"),v=q=>{var J;q.stopPropagation(),(J=this.audio)==null||J.playCashPickup(),g&&g.classList.add("open"),P()},m=q=>{var J;q&&q.stopPropagation(),(J=this.audio)==null||J.playUISelect(),g&&g.classList.remove("open"),a()};(G=document.getElementById("btn-open-armory"))==null||G.addEventListener("click",v),(X=document.getElementById("btn-top-vault"))==null||X.addEventListener("click",v),(z=document.getElementById("btn-close-armory-modal"))==null||z.addEventListener("click",m),(K=document.getElementById("btn-save-armory-modal"))==null||K.addEventListener("click",m),g==null||g.addEventListener("click",q=>{q.target===g&&m()});const p=document.getElementById("tab-primary-btn"),T=document.getElementById("tab-secondary-btn"),S=document.getElementById("tab-rigs-btn"),M=document.getElementById("armory-panel-primary"),I=document.getElementById("armory-panel-secondary"),C=document.getElementById("armory-panel-rigs"),R=q=>{var J;[p,T,S].forEach(ct=>ct==null?void 0:ct.classList.remove("active")),M&&(M.style.display=q==="primary"?"grid":"none"),I&&(I.style.display=q==="secondary"?"grid":"none"),C&&(C.style.display=q==="rigs"?"grid":"none"),q==="primary"&&(p==null||p.classList.add("active")),q==="secondary"&&(T==null||T.classList.add("active")),q==="rigs"&&(S==null||S.classList.add("active")),(J=this.audio)==null||J.playUISelect()};p==null||p.addEventListener("click",()=>R("primary")),T==null||T.addEventListener("click",()=>R("secondary")),S==null||S.addEventListener("click",()=>R("rigs"));const P=()=>{const q=Ri.getInstance();M&&(M.innerHTML=Jl.map(J=>{const ct=He[J],Et=this.selectedWeapon===J,j=q.isWeaponUnlocked(J);return`
            <div class="xag-armory-card ${Et?"equipped":""}" data-armory-weapon="${J}" data-slot="primary">
              <div class="xag-w-header">
                <span class="xag-w-name">${ct.name}</span>
                <span class="xag-w-status ${Et?"active":j?"unlocked":"locked"}">
                  ${Et?"EQUIPPED":j?"EQUIP":"BUY ₦"+(ct.damage*1e4).toLocaleString()}
                </span>
              </div>
              <div class="xag-w-desc">${ct.description}</div>
              <div class="xag-w-stats">
                <span>DMG: <b>${ct.damage}</b></span>
                <span>RATE: <b>${(1/ct.fireInterval).toFixed(1)}/s</b></span>
                <span>MAG: <b>${ct.magSize}</b></span>
                <span>WALL: <b>${ct.wallDmgMultiplier}x</b></span>
              </div>
            </div>
          `}).join(""),M.querySelectorAll(".xag-armory-card").forEach(J=>{J.addEventListener("click",ct=>{var at,vt;ct.stopPropagation();const Et=J.getAttribute("data-armory-weapon"),j=He[Et];if(q.isWeaponUnlocked(Et))this.selectedWeapon=Et,(vt=this.audio)==null||vt.playUISelect(),P(),a();else{const dt=j.damage*1e4;q.unlockWeapon(Et,dt)?((at=this.audio)==null||at.playCashPickup(),this.selectedWeapon=Et,P(),a()):alert("Insufficient Offshore Vault balance!")}})})),I&&(I.innerHTML=Jl.map(J=>{const ct=He[J],Et=this.selectedSecondaryWeapon===J,j=q.isWeaponUnlocked(J);return`
            <div class="xag-armory-card ${Et?"equipped":""}" data-armory-weapon="${J}" data-slot="secondary">
              <div class="xag-w-header">
                <span class="xag-w-name">${ct.name}</span>
                <span class="xag-w-status ${Et?"active":j?"unlocked":"locked"}">
                  ${Et?"EQUIPPED":j?"EQUIP":"BUY ₦"+(ct.damage*1e4).toLocaleString()}
                </span>
              </div>
              <div class="xag-w-desc">${ct.description}</div>
              <div class="xag-w-stats">
                <span>DMG: <b>${ct.damage}</b></span>
                <span>RATE: <b>${(1/ct.fireInterval).toFixed(1)}/s</b></span>
                <span>MAG: <b>${ct.magSize}</b></span>
                <span>WALL: <b>${ct.wallDmgMultiplier}x</b></span>
              </div>
            </div>
          `}).join(""),I.querySelectorAll(".xag-armory-card").forEach(J=>{J.addEventListener("click",ct=>{var at,vt;ct.stopPropagation();const Et=J.getAttribute("data-armory-weapon"),j=He[Et];if(q.isWeaponUnlocked(Et))this.selectedSecondaryWeapon=Et,(vt=this.audio)==null||vt.playUISelect(),P();else{const dt=j.damage*1e4;q.unlockWeapon(Et,dt)?((at=this.audio)==null||at.playCashPickup(),this.selectedSecondaryWeapon=Et,P()):alert("Insufficient Offshore Vault balance!")}})})),C==null||C.querySelectorAll(".xag-rig-card-full").forEach(J=>{J.addEventListener("click",ct=>{var Et;ct.stopPropagation(),C.querySelectorAll(".xag-rig-card-full").forEach(j=>j.classList.remove("active")),J.classList.add("active"),this.selectedRig=J.getAttribute("data-rig"),(Et=this.audio)==null||Et.playUISelect()})})};(H=document.getElementById("btn-open-multiplayer"))==null||H.addEventListener("click",q=>{q.stopPropagation(),this.openMultiplayerLobby()}),(st=document.getElementById("menu-deploy-btn"))==null||st.addEventListener("click",q=>{q.stopPropagation(),this.executeDeploy(!1)}),this.startRadarAnimation()}executeDeploy(t=!1,e,i){var l;(l=this.audio)==null||l.playUIDeploy(),this.radarAnimId!==null&&(cancelAnimationFrame(this.radarAnimId),this.radarAnimId=null);const n=document,r=document.documentElement;if(!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){const h=r.requestFullscreen||r.webkitRequestFullscreen||r.mozRequestFullScreen||r.msRequestFullscreen;h&&h.call(r).catch(()=>{})}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}window.scrollTo(0,1),document.body.classList.add("in-match"),this.container.innerHTML="";const o=document.getElementById("touch-controls");o&&(o.style.display="block");const c=i!==void 0?i:this.fillBots;this.onStartGameCallback&&this.onStartGameCallback({gamerTag:this.selectedGamerTag,rigType:this.selectedRig,modeType:this.selectedMode,mapId:this.selectedMap,primaryWeapon:this.selectedWeapon,secondaryWeapon:this.selectedSecondaryWeapon,isMultiplayer:t,roomId:e,fillBots:c,teamSize:this.teamSize})}openMultiplayerLobby(){const t=Yr.getInstance(),e=document.getElementById("xag-lobby-overlay");e&&e.remove();const i=document.createElement("div");i.id="xag-lobby-overlay",i.style.cssText=`
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
    `,document.body.appendChild(i);const n=(r,a)=>{var o,c,l,h,d,u,f,g;if(r&&r.roomId){const v=r.isHost,m=r.players.find(S=>S.id===r.yourPlayerId),p=m?m.isReady:!1,T=t.isHost?"👑 HOST (0ms LAG)":t.isLocalHotspot?"🟢 <5ms (HOTSPOT)":`🟡 ${t.ping||18}ms (P2P)`;i.innerHTML=`
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 580px; width: 100%; border-radius: 8px; overflow: hidden; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 16px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ P2P HOTSPOT ARENA</div>
                <div style="font-size: 24px; font-weight: 900; letter-spacing: 4px; color: #ffffff;">ROOM CODE: <span style="color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);">${r.roomId}</span></div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button id="lobby-copy-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 4px; font-family: inherit;">📋 COPY CODE</button>
                <div style="font-size: 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; padding: 4px 8px; border-radius: 4px;">${T}</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; font-size: 11px; color: #94a3b8; margin-bottom: 16px; background: #0f172a; padding: 8px 12px; border-radius: 4px; border: 1px solid #1e293b; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                <div>MAP: <span style="color: #ffffff; font-weight: 700;">${this.selectedMap===ae.LAGOS_GOSLOW?"LAGOS GO-SLOW":"BIRNIN KANO"}</span></div>
                <div>MODE: <span style="color: #38bdf8; font-weight: 800;">${this.selectedMode===Qt.ODOGWU_STASH&&this.teamSize===2?"2v2 SQUAD HEIST":this.selectedMode===Qt.TEAM_DEATHMATCH&&this.teamSize===2?"2v2 TDM":this.selectedMode===Qt.ODOGWU_STASH?"SOLO HEIST":this.selectedMode.replace("_"," ")}</span></div>
                <div>OPERATIVES: <span style="color: #4ade80; font-weight: 700;">${r.players.length} / ${this.teamSize===2?4:6}</span></div>
              </div>
              <div>
                ${v?`
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
                ${r.players.map(S=>`
                  <div style="display: flex; align-items: center; justify-content: space-between; background: ${S.id===r.yourPlayerId?"rgba(6, 182, 212, 0.12)":"#0f172a"}; border: 1px solid ${S.id===r.yourPlayerId?"#06b6d4":"#1e293b"}; padding: 8px 12px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 800; color: ${S.id===r.yourPlayerId?"#38bdf8":"#ffffff"}; font-size: 13px;">${S.name} ${S.isHost?'<span style="color: #eab308; font-size: 10px;">[HOST]</span>':""}</span>
                      <span style="font-size: 10px; background: #1e293b; color: #94a3b8; padding: 2px 6px; border-radius: 3px;">${S.rig}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 10px; color: ${S.isReady?"#4ade80":"#f59e0b"}; font-weight: 800; background: ${S.isReady?"rgba(34, 197, 94, 0.15)":"rgba(245, 158, 11, 0.15)"}; padding: 3px 8px; border-radius: 3px; border: 1px solid ${S.isReady?"#22c55e":"#f59e0b"};">
                        ${S.isReady?"✓ READY":"⏳ PREPARING"}
                      </span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px;">
              <button id="lobby-ready-btn" style="flex: 1; background: ${p?"#1e293b":"linear-gradient(135deg, #0284c7, #0369a1)"}; border: 1px solid #38bdf8; color: #ffffff; padding: 12px; font-weight: 800; font-size: 13px; cursor: pointer; border-radius: 4px; font-family: inherit;">
                ${p?"CANCEL READY":"⚡ READY UP"}
              </button>
              ${v?`
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
        `,(o=document.getElementById("lobby-copy-btn"))==null||o.addEventListener("click",()=>{navigator.clipboard.writeText(r.roomId).then(()=>{const S=document.getElementById("lobby-copy-btn");S&&(S.innerText="COPIED!"),setTimeout(()=>{S&&(S.innerText="📋 COPY CODE")},1500)})}),(c=document.getElementById("lobby-ready-btn"))==null||c.addEventListener("click",()=>{t.setReady(!p)}),(l=document.getElementById("lobby-bot-btn"))==null||l.addEventListener("click",()=>{t.toggleBots(!r.fillBots)}),(h=document.getElementById("lobby-start-btn"))==null||h.addEventListener("click",()=>{t.startMatch()}),(d=document.getElementById("lobby-leave-btn"))==null||d.addEventListener("click",()=>{t.leaveRoom(),i.remove()})}else i.innerHTML=`
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 480px; width: 100%; border-radius: 8px; overflow: hidden; padding: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 20px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ WEBRTC DIRECT P2P</div>
                <div style="font-size: 20px; font-weight: 900; letter-spacing: 3px; color: #ffffff;">HOTSPOT ARENA</div>
              </div>
              <button id="lobby-close-btn" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;">✕</button>
            </div>

            ${a?`
              <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px 14px; font-size: 11px; border-radius: 6px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between;">
                <span>⚠️ ${a}</span>
              </div>
            `:""}

            <div style="margin-bottom: 20px;">
              <button id="lobby-create-btn" style="width: 100%; background: linear-gradient(135deg, #0284c7, #0369a1); border: 1px solid #38bdf8; color: #ffffff; padding: 14px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit; transition: transform 0.1s;">
                ⚡ HOST ARENA MATCH (0ms LAG)
              </button>
              <div style="font-size: 10px; color: #94a3b8; margin-top: 6px; text-align: center;">Host runs authoritative simulation locally. Friends connect directly.</div>
            </div>

            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #64748b; font-size: 11px;">
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
              <span>OR JOIN WITH 4-DIGIT CODE</span>
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 14px;">
              <input id="lobby-code-input" placeholder="4-DIGIT CODE (e.g. 2349)" maxlength="4" style="flex: 1; background: #0f172a; border: 1px solid #334155; color: #38bdf8; font-size: 18px; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; padding: 10px 14px; border-radius: 4px; text-align: center; font-family: inherit; outline: none;" />
              <button id="lobby-join-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; font-weight: 800; font-size: 13px; padding: 10px 20px; cursor: pointer; border-radius: 4px; font-family: inherit;">JOIN</button>
            </div>

            <div style="font-size: 11px; color: #64748b; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22c55e;"></span>
              <span>Direct WebRTC UDP-style DataChannels (<5ms local Wi-Fi / Hotspot)</span>
            </div>
          </div>
        `,(u=document.getElementById("lobby-close-btn"))==null||u.addEventListener("click",()=>{i.remove()}),(f=document.getElementById("lobby-create-btn"))==null||f.addEventListener("click",()=>{const v=document.getElementById("lobby-create-btn");v&&(v.disabled=!0,v.innerText="INITIALIZING HOST..."),t.hostMatch(this.selectedGamerTag,this.selectedRig,this.selectedWeapon,this.selectedMap,this.selectedMode,this.fillBots,this.teamSize).catch(m=>{n(void 0,`Failed to initialize host: ${m.message||m}`)})}),(g=document.getElementById("lobby-join-btn"))==null||g.addEventListener("click",()=>{const v=document.getElementById("lobby-code-input"),m=((v==null?void 0:v.value)||"").trim();if(!m||m.length!==4){n(void 0,"Please enter a 4-digit room code from the host.");return}const p=document.getElementById("lobby-join-btn");p&&(p.disabled=!0,p.innerText="CONNECTING..."),t.joinMatch(m,this.selectedGamerTag,this.selectedRig,this.selectedWeapon).then(T=>{T||n(void 0,`Could not connect to room ${m}. Verify 4-digit code or ensure both devices are on the same Wi-Fi / Mobile Hotspot.`)})})};n(),t.onRoomState=r=>{r.mode&&(this.selectedMode=r.mode),r.mapId&&(this.selectedMap=r.mapId),r.teamSize!==void 0&&(this.teamSize=r.teamSize),r.fillBots!==void 0&&(this.fillBots=r.fillBots),n(r)},t.onError=r=>{n(void 0,r)},t.onMatchStarting=r=>{r.mode&&(this.selectedMode=r.mode),r.mapId&&(this.selectedMap=r.mapId),r.teamSize!==void 0&&(this.teamSize=r.teamSize),r.fillBots!==void 0&&(this.fillBots=r.fillBots);let a=r.countdownSec||3;i.innerHTML=`
        <div style="background: #090d16; border: 2px solid #22c55e; box-shadow: 0 0 50px rgba(34, 197, 94, 0.5); padding: 40px; text-align: center; border-radius: 8px;">
          <div style="font-size: 13px; font-weight: 800; color: #22c55e; letter-spacing: 3px; margin-bottom: 10px;">OPERATIVES SYNCHRONIZED</div>
          <div style="font-size: 32px; font-weight: 900; color: #ffffff; letter-spacing: 4px; margin-bottom: 20px;">DEPLOYING TO SECTOR 234</div>
          <div id="lobby-countdown-num" style="font-size: 72px; font-weight: 900; color: #38bdf8; text-shadow: 0 0 20px #38bdf8;">${a}</div>
        </div>
      `;const o=setInterval(()=>{a--;const c=document.getElementById("lobby-countdown-num");c&&(c.innerText=`${a}`),a<=0&&(clearInterval(o),i.remove(),this.executeDeploy(!0,t.currentRoomId||void 0,r.fillBots))},1e3)}}startRadarAnimation(){const t=document.getElementById("radar-canvas-theater"),e=document.getElementById("radar-canvas-kano"),i=document.getElementById("radar-canvas-lagos");if(!t&&!e&&!i)return;let n=0,r=0;const a=()=>{if(n+=.04,r=(r+2)%30,t){const o=t.getContext("2d");if(o){const c=t.width,l=t.height,h=c*.5,d=l*.5;if(o.fillStyle="#030705",o.fillRect(0,0,c,l),this.selectedMap===ae.BIRNIN_KANO){o.strokeStyle="rgba(34, 197, 94, 0.2)",o.lineWidth=1;for(let f=0;f<c;f+=22)o.beginPath(),o.moveTo(f,0),o.lineTo(f,l),o.stroke();[18,32,48].forEach(f=>{o.beginPath(),o.arc(h,d,f,0,Math.PI*2),o.stroke()}),o.save(),o.translate(h,d),o.rotate(n);const u=o.createLinearGradient(0,0,50,0);u.addColorStop(0,"rgba(34, 197, 94, 0.6)"),u.addColorStop(1,"rgba(0, 135, 81, 0)"),o.fillStyle=u,o.beginPath(),o.moveTo(0,0),o.arc(0,0,50,0,.45),o.closePath(),o.fill(),o.restore(),o.fillStyle="#facc15",o.beginPath(),o.arc(h,d,3,0,Math.PI*2),o.fill(),o.font="bold 8px monospace",o.fillText("VAULT",h+6,d+3),o.fillStyle="#22c55e",o.fillRect(h-30,d-12,3,3),o.fillRect(h+38,d+14,3,3)}else{o.strokeStyle="#008751",o.lineWidth=1.5,o.beginPath(),o.moveTo(0,20),o.lineTo(c,20),o.moveTo(0,50),o.lineTo(c,50),o.stroke(),o.strokeStyle="rgba(34, 197, 94, 0.4)",o.setLineDash([8,8]),o.beginPath(),o.moveTo(0,35),o.lineTo(c,35),o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(56, 189, 248, 0.2)";for(let f=10;f<c;f+=25){const g=(f*1.5+r*3)%l;o.beginPath(),o.moveTo(f,g),o.lineTo(f-5,g+10),o.stroke()}const u=n*40%(c+40)-20;o.fillStyle="#22c55e",o.fillRect(u,32,12,6),o.font="bold 8px monospace",o.fillText("3RD MAINLAND CONVOY",10,12)}}}if(e){const o=e.getContext("2d");if(o){const c=e.width,l=e.height,h=c*.5,d=l*.5;o.fillStyle="#040705",o.fillRect(0,0,c,l),o.strokeStyle="rgba(0, 135, 81, 0.2)",o.lineWidth=1;for(let f=0;f<c;f+=24)o.beginPath(),o.moveTo(f,0),o.lineTo(f,l),o.stroke();for(let f=0;f<l;f+=20)o.beginPath(),o.moveTo(0,f),o.lineTo(c,f),o.stroke();o.strokeStyle="rgba(34, 197, 94, 0.35)",[20,36,54].forEach(f=>{o.beginPath(),o.arc(h,d,f,0,Math.PI*2),o.stroke()}),o.save(),o.translate(h,d),o.rotate(n);const u=o.createLinearGradient(0,0,70,0);u.addColorStop(0,"rgba(34, 197, 94, 0.65)"),u.addColorStop(.5,"rgba(0, 135, 81, 0.3)"),u.addColorStop(1,"rgba(0, 135, 81, 0)"),o.fillStyle=u,o.beginPath(),o.moveTo(0,0),o.arc(0,0,70,0,.4),o.closePath(),o.fill(),o.restore(),o.fillStyle="#22c55e",o.beginPath(),o.arc(h,d,3,0,Math.PI*2),o.fill(),o.font="bold 8px monospace",o.fillStyle="#ffffff",o.fillText("[◆] VAULT",h+6,d+3),o.fillStyle="#22c55e",o.fillRect(h-32,d-14,3,3),o.fillRect(h+42,d+18,3,3),o.fillStyle="#ffffff",o.fillRect(h+28,d-22,3,3)}}if(i){const o=i.getContext("2d");if(o){const c=i.width,l=i.height;o.fillStyle="#040705",o.fillRect(0,0,c,l),o.strokeStyle="#008751",o.lineWidth=1.5,o.beginPath(),o.moveTo(0,24),o.lineTo(c,24),o.moveTo(0,56),o.lineTo(c,56),o.stroke(),o.strokeStyle="rgba(34, 197, 94, 0.4)",o.setLineDash([8,8]),o.beginPath(),o.moveTo(0,40),o.lineTo(c,40),o.stroke(),o.setLineDash([]),o.strokeStyle="rgba(34, 197, 94, 0.22)",o.lineWidth=1;for(let u=10;u<c;u+=28){const f=(u*1.5+r*3)%l;o.beginPath(),o.moveTo(u,f),o.lineTo(u-6,f+12),o.stroke()}const h=n*40%(c+40)-20,d=(n*25+100)%(c+40)-20;o.fillStyle="#22c55e",o.fillRect(h,36,12,7),o.fillRect(d,36,12,7),o.fillStyle="#ffffff",o.fillRect(h+2,38,8,3),o.fillRect(d+2,38,8,3),o.font="bold 8px monospace",o.fillStyle="#22c55e",o.fillText("[▲] 3RD MAINLAND // NIGHT-VISION RADAR",10,14)}}this.radarAnimId=requestAnimationFrame(a)};a()}showDossierModal(){const t=Ri.getInstance(),e=document.createElement("div");e.id="dossier-modal",e.style.position="fixed",e.style.inset="0",e.style.background="rgba(5, 8, 6, 0.95)",e.style.backdropFilter="blur(12px)",e.style.zIndex="1000",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.padding="14px";const i=()=>{const n=t.getProfile(),r=[{id:W.SHOTGUN_AA12,cost:25e4},{id:W.AKIMBO_UZIS,cost:3e5},{id:W.RAIL_SNIPER,cost:55e4},{id:W.VULCAN_MINIGUN,cost:8e5},{id:W.BUNKER_RPG,cost:95e4}];e.innerHTML=`
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
              ${r.map(l=>{const h=He[l.id],d=t.isWeaponUnlocked(l.id);return`
                  <div style="background: #050806; border: 1px solid ${d?"#008751":"#1c2b22"}; padding: 10px 14px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="font-size: 13px; font-weight: 800; color: ${d?"#22c55e":"#ffffff"};">${h.name}</div>
                      <div style="font-size: 10px; color: #9ca3af;">${h.description}</div>
                    </div>
                    ${d?'<span style="color: #22c55e; font-size: 11px; font-weight: 800;">[UNLOCKED]</span>':`<button class="btn-unlock-weapon" data-id="${l.id}" data-cost="${l.cost}" style="background: #008751; border: 1px solid rgba(255,255,255,0.2); color: #ffffff; font-size: 11px; font-weight: 800; padding: 6px 12px; border-radius: 4px; cursor: pointer;">BUY ₦${l.cost.toLocaleString()}</button>`}
                  </div>
                `}).join("")}
            </div>
          </div>
        </div>
      `;const a=e.querySelector("#close-dossier");a&&a.addEventListener("click",()=>e.remove());const o=e.querySelector("#btn-submit-claim");o&&o.addEventListener("click",async()=>{var h;const l=(h=e.querySelector("#claim-password"))==null?void 0:h.value;l&&(await t.claimAccount(n.call_sign,l),i())}),e.querySelectorAll(".btn-unlock-weapon").forEach(l=>{l.addEventListener("click",()=>{var u;const h=l.getAttribute("data-id"),d=parseInt(l.getAttribute("data-cost")||"0",10);if(t.unlockWeapon(h,d)){(u=this.audio)==null||u.playCashPickup(),i();const f=document.querySelector(".xag-vault-val");f&&(f.textContent=`₦${t.getProfile().cash_balance.toLocaleString()}`)}else alert("Insufficient balance in Offshore Vault!")})})};i(),document.body.appendChild(e)}showMatchSummary(t,e){this.onRematchCallback=e;const i=t[0];let n="";t.forEach((o,c)=>{n+=`
        <tr style="border-bottom: 1px solid #1c2b22; color: ${o.isLocal?"#22c55e":"#e4e4e7"};">
          <td style="padding: 10px; font-weight: 800;">#${c+1}</td>
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
    `;const r=document.getElementById("summary-rematch-btn");r&&r.addEventListener("click",()=>{this.container.innerHTML="",this.onRematchCallback&&this.onRematchCallback()});const a=document.getElementById("summary-receipt-btn");a&&a.addEventListener("click",()=>{B_.downloadReceiptPNG(t,"SARKI HEIST",this.selectedRig,W.RIFLE_XAG47)})}}console.log("[STUDIO XAG: PROTOCOL ZERO] Initializing Tactical Arena Engine...");const le=new S_("webgl-canvas"),Mi=new b_,Le=new E_(le.scene),Pd=new A_(le.scene),Ar=new w_(le.scene),Fo=new C_(le.scene),ui=new R_(le.scene),Ls=new I_(le.scene),zi=new P_(le.scene,ui,Mi),ee=new N_(le.scene);Le.onBlackoutTriggered=()=>{console.log("[ALERT] Transformer destroyed! 12-second Blackout active."),Fo.triggerBlackout(),le.setBlackout(!0)};zi.onVaultHit=s=>{ee.heistMode&&ee.heistMode.currentAct===Re.ACT_1_BREACH&&ee.heistMode.damageVault(s,Le,ui)};const de=new T_(document.getElementById("webgl-canvas"),le.cameraSystem.camera),Pi=new k_("hud-canvas",le.cameraSystem.camera),Bo=new hv("ui-overlay",Mi);zi.onDamageDealt=(s,t,e,i)=>{Pi.addDamagePopup(s,t,e,i)};let ot=null;xt.BREACH_BOOSTER;Qt.ODOGWU_STASH;let un=!1,Ql=0;const pe=Yr.getInstance();pe.onSnapshot=s=>{if(!(!un||!ot))for(const t of s.players){if(t.id===ot.stats.id)continue;let e=ee.remoteControllers.get(t.id),i=ee.players.find(n=>n.stats.id===t.id);if(!e){if(!i){const r=t.id.startsWith("bot_")?t.id.replace("bot_","Operative_"):"Operative";if(i=new es(le.scene,t.id,r,t.x,t.y,!1),i.stats.activeWeapon=t.activeWeapon,i.mesh.setWeapon(t.activeWeapon),t.team){const a=t.team!=="none"&&t.team===ot.stats.team;i.setTeam(t.team,a)}ee.players.push(i)}e=new Bh(i,ui),ee.remoteControllers.set(t.id,e)}if(i&&t.team&&i.stats.team!==t.team){const n=t.team!=="none"&&t.team===ot.stats.team;i.setTeam(t.team,n)}e.applySnapshot(t)}};pe.onFireWeapon=s=>{if(!un||!ot||s.playerId===ot.stats.id)return;const t=ee.players.find(e=>e.stats.id===s.playerId);t&&zi.fireWeapon(t,s.aimAngle,ee.players,(e,i)=>ee.handlePlayerElimination(e,i),Le,s.originX,s.originY)};pe.onRigTrigger=s=>{if(!un||!ot||s.playerId===ot.stats.id)return;const t=ee.players.find(e=>e.stats.id===s.playerId);t&&(Mi.playThrusterWhoosh(),Pi.addDamagePopup(t.actor.position.x,t.actor.position.y+1.8,s.popupText,"#06b6d4",22))};pe.onGroundSlam=s=>{!un||!ot||s.playerId===ot.stats.id||(Mi.playThrusterWhoosh(),ui.spawnSparks(s.x,s.y,0,4,18))};pe.onDamageEvent=s=>{if(!un)return;const t=ee.players.find(e=>e.stats.id===s.targetId);t&&(t.stats.hp=s.newHp,Pi.addDamagePopup(s.x,s.y,`-${s.damage}`,s.isHeadshot?"#f59e0b":"#ef4444"))};let Go=!1;Le.onTileDestroyed=(s,t)=>{Go||pe.isConnected&&pe.sendTileDestroy({tileX:s,tileY:t,playerId:ot?ot.stats.id:"local"})};pe.onTileDestroy=s=>{Go=!0,Le.destroyTile(s.tileX,s.tileY),ui.spawnSparks(s.tileX+.5,s.tileY+.5,0,3,8),Go=!1};pe.onPlayerLeft=s=>{const t=ee.players.findIndex(e=>e.stats.id===s);if(t!==-1){const e=ee.players[t];Pi.addDamagePopup(e.actor.position.x,e.actor.position.y+1.5,`${e.stats.name} LEFT MATCH`,"#ef4444",16),e.destroy(),ee.players.splice(t,1),ee.remoteControllers.delete(s)}};const Id=s=>{s.rigType,s.modeType,Le.clear(),Pd.setTheme(s.mapId),s.mapId===ae.LAGOS_GOSLOW?Vs.generateLagosGoSlow(Le):Vs.generateBirninKano(Le);const t=s.fillBots!==void 0?s.fillBots:!0,e=s.teamSize||3;s.isMultiplayer&&pe.isConnected&&pe.cachedLobbyPlayers.length>0?ot=ee.initMultiplayerMatch(s.modeType,pe.localPlayerId||"player_local",s.gamerTag,s.rigType,s.mapId,pe.cachedLobbyPlayers,ui,t,e,pe.isHost):ot=ee.initMatch(s.modeType,s.gamerTag,s.rigType,s.mapId,t,e),ot&&(s.primaryWeapon&&(ot.stats.primaryWeapon=s.primaryWeapon,ot.stats.activeWeapon=s.primaryWeapon,ot.mesh.setWeapon(s.primaryWeapon)),s.secondaryWeapon&&(ot.stats.secondaryWeapon=s.secondaryWeapon),le.cameraSystem.setWeaponProfile(ot.stats.activeWeapon)),un=!0};Bo.showMainMenu(Id);le.onUpdate(s=>{if(Pd.update(s),Le.update(s),ui.update(s,Le),Ar.update(s),Ls.update(s),Fo.update(s,n=>le.setBlackout(n)),!un||!ot)return;de.update(),de.playerWorldPos.copy(ot.actor.position);let t=de.state.aimAngle;if(!ot.stats.isDead){if(ot.updateMiniMilitiaMovement(s,de.state.moveX,de.state.jump,de.state.groundSlam,de.state.flyIntensity),ot.isJetFlying&&Math.random()<.65&&ui.spawnJetpackSmoke(ot.actor.position.x+(ot.actor.velocity.x>0?-.2:.2),ot.actor.position.y+.35,ot.actor.velocity.x,-4),de.state.groundSlam&&Ls.triggerGroundSlam(ot.actor,ot.mesh,Le)&&(pe.isConnected&&pe.currentRoomId&&pe.sendGroundSlam({playerId:ot.stats.id,x:ot.actor.position.x,y:ot.actor.position.y}),le.cameraSystem.addTrauma(.2),Mi.playThrusterWhoosh()),de.state.rig&&ot.stats.rigCooldownTimer<=0){const n=Ls.activateRig(ot,Le,t,de.state.moveX,le.cameraSystem);if(n.activated){pe.isConnected&&pe.currentRoomId&&pe.sendRigTrigger({playerId:ot.stats.id,rigType:ot.stats.rigType,angle:t,popupText:n.popupText}),Mi.playThrusterWhoosh(),le.cameraSystem.addTrauma(.35),Pi.addDamagePopup(ot.actor.position.x,ot.actor.position.y+1.8,n.popupText,"#06b6d4",22);const r={[xt.BREACH_BOOSTER]:2.5,[xt.OVERDRIVE_SLIDE]:1.5,[xt.PHASE_DASH]:3,[xt.GLITCH_ANCHOR]:4};ot.stats.rigCooldownTimer=r[ot.stats.rigType]}}if(t=de.state.aimAngle,de.state.aiming||de.state.isTouch){let n=null,r=.35,a=18;for(let o=0;o<ee.players.length;o++){const c=ee.players[o];if(c.stats.id===ot.stats.id||c.stats.isDead||ot.stats.team&&c.stats.team&&ot.stats.team!=="none"&&c.stats.team!=="none"&&ot.stats.team===c.stats.team)continue;const l=c.actor.position.x-ot.actor.position.x,h=c.actor.position.y+.95-(ot.actor.position.y+.95),d=Math.sqrt(l*l+h*h);if(d<a){const u=Math.atan2(h,l);let f=u-t;for(;f<-Math.PI;)f+=Math.PI*2;for(;f>Math.PI;)f-=Math.PI*2;Math.abs(f)<r&&(r=Math.abs(f),n=u,a=d)}}if(n!==null){let o=n-t;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;const c=de.state.isTouch?.45:.2;t+=o*c}}if(de.state.melee){const n=ot;ui.spawnMeleeSlashArc(ot.actor.position.x,ot.actor.position.y,t),ot.performMeleeLunge(t,ee.players,(a,o)=>{const c=a.takeDamage(o,n);Mi.playGunshot("saw"),ui.spawnSparks(a.actor.position.x,a.actor.position.y+1,5,5,12),Pi.addDamagePopup(a.actor.position.x,a.actor.position.y+1.5,`SLICED -${o}!`,"#f59e0b",22),le.cameraSystem.addTrauma(.18),c&&(n.stats.cash+=5e4,Pi.addDamagePopup(a.actor.position.x,a.actor.position.y+2,"BOUNTY STEAL! +₦50,000","#10b981",24),ee.handlePlayerElimination(a,n))},Le),Math.hypot(ot.actor.position.x-40,ot.actor.position.y-3.5)<4.8&&zi.onVaultHit&&(zi.onVaultHit(150),Mi.playGunshot("saw"),ui.spawnSparks(40,3.5,0,1,15),Pi.addDamagePopup(40,5,"VAULT MELEE BREACH -150!","#f59e0b",22),le.cameraSystem.addTrauma(.12)),Mi.playMeleeSwish()}if(de.state.firing&&zi.fireWeapon(ot,t,ee.players,(r,a)=>ee.handlePlayerElimination(r,a),Le)){pe.isConnected&&pe.currentRoomId&&pe.sendFire({playerId:ot.stats.id,weaponId:ot.stats.activeWeapon,originX:ot.actor.position.x,originY:ot.actor.position.y+.95,aimAngle:t});const r=ot.stats.activeWeapon;r===W.SHOTGUN_AA12||r===W.RAIL_SNIPER?le.cameraSystem.addTrauma(.03):r===W.BUNKER_RPG&&le.cameraSystem.addTrauma(.12)}de.state.throwBoom&&zi.handleThrowable(ot,t,Le,ee.players,(n,r)=>ee.handlePlayerElimination(n,r)),de.state.swapWeapon&&(ot.swapWeapon(),le.cameraSystem.setWeaponProfile(ot.stats.activeWeapon)),de.state.reload&&ot.reloadWeapon(),Fo.checkZiplineInteraction(ot)}if(ot.update(s,Le,Ls,t),pe.isConnected&&pe.currentRoomId){const n=performance.now();if(n-Ql>=33)if(Ql=n,pe.isHost){const r=ee.players.map(a=>({id:a.stats.id,x:a.actor.position.x,y:a.actor.position.y,vx:a.actor.velocity.x,vy:a.actor.velocity.y,aimAngle:a.lastAimAngle,facingRight:a.mesh.rootGroup.scale.x>=0,isJetFlying:a.isJetFlying||a.actor.isJetFlying,isGrounded:a.actor.isGrounded,isSliding:a.isSliding,hp:a.stats.hp,armor:a.stats.armor,fuel:a.jetFuel,activeWeapon:a.stats.activeWeapon,isDead:a.stats.isDead,team:a.stats.team,timestamp:Date.now()}));pe.broadcastHostSnapshot(r)}else pe.sendTick({id:ot.stats.id,x:ot.actor.position.x,y:ot.actor.position.y,vx:ot.actor.velocity.x,vy:ot.actor.velocity.y,aimAngle:t,facingRight:Math.cos(t)>=0,isJetFlying:ot.isJetFlying,isGrounded:ot.actor.isGrounded,isSliding:ot.isSliding,hp:ot.stats.hp,armor:ot.stats.armor,fuel:ot.jetFuel,activeWeapon:ot.stats.activeWeapon,isDead:ot.stats.isDead,team:ot.stats.team,timestamp:Date.now()})}zi.update(s,Le,ee.players,(n,r)=>{ee.handlePlayerElimination(n,r),n.stats.isLocalPlayer?le.cameraSystem.addTrauma(.35):r&&r.stats.isLocalPlayer&&le.cameraSystem.addTrauma(.12)}),ee.update(s,Le,zi,Ls,()=>{Mi.playCashPickup(),Pi.addDamagePopup(ot.actor.position.x,ot.actor.position.y+1.8,"+₦25,000","#10b981",20)},ui),ee.players.forEach(n=>{if(n.stats.id===ot.stats.id||n.stats.isDead)return;Ar.checkPlayerOcclusion(ot,n,Le)&&(Math.abs(n.actor.velocity.x)>8||n.actor.velocity.y>6||n.fireCooldown>0)&&Math.random()<.04&&(Ar.emitSonarRing(n.actor.position.x,n.actor.position.y+.95,n.stats.id),Mi.playSonarPing())}),le.cameraSystem.setWeaponProfile(ot.stats.activeWeapon),le.cameraSystem.setFollowTarget(ot.actor.position.x,ot.actor.position.y+.95);let e=1;if(de.state.isTouch){const n=de.rightTouchCurrent.distanceTo(de.rightTouchStart);e=Math.min(1,Math.max(0,(n-15)/35))}else{const n=de.mouseWorldPos.x-ot.actor.position.x,r=de.mouseWorldPos.y-(ot.actor.position.y+.95),a=Math.sqrt(n*n+r*r);e=Math.min(1,Math.max(0,(a-1.2)/2.3))}le.cameraSystem.setAimShift(Math.cos(de.state.aimAngle)*e,Math.sin(de.state.aimAngle)*e);const i=Math.abs(ot.actor.velocity.x);if(le.cameraSystem.setSpeedZoom(i>16?(i-16)/10:0),Pi.render(ot,de,ee,Ar,s),ee.isMatchOver){un=!1;const n=ee.getScoreboard();Bo.showMatchSummary(n,()=>{Bo.showMainMenu(Id)})}de.resetOneShotFlags()});le.start();const Ld=()=>{de.requestFullscreen()};window.addEventListener("touchstart",Ld,{once:!0});window.addEventListener("click",Ld,{once:!0});console.log("[STUDIO XAG: PROTOCOL ZERO] Arena Shooter Fully Active.");
