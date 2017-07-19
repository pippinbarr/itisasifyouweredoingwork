function getCookie(name,defaultvalue){name+="=";if(document.cookie.length>0){offset=document.cookie.indexOf(name);if(offset!=-1){offset+=name.length;end=document.cookie.indexOf(";",offset);return unescape(document.cookie.substring(offset,(end!=-1)?end:document.cookie.length));}}
return(defaultvalue);}
function setCookie(name,value,domain,duration,expire,path){var cookie;if(!expire){var today=new Date();expire=new Date();if(!duration){duration=1000*60*60*24*365-1;}
expire.setTime(today.getTime()+duration);}
if(!path){path='/';}
cookie=encodeURIComponent(name)+"="+encodeURIComponent(value);if(duration!=='session'){cookie+="; expires="+expire.toUTCString();}
cookie+="; path="+path;if(domain){cookie+="; domain="+domain;}
document.cookie=cookie;}