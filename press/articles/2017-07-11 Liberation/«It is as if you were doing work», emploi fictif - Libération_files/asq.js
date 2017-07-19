/* ASQ */

function apnxsAsync(frameid) {
  if (typeof(desactive_asq)=='undefined' || desactive_asq !=1){
    var apnxsiframe = document.getElementById(frameid);
    if (apnxsiframe.hasAttribute('data-placementid') && apnxsiframe.hasAttribute('data-sizes')) {
      var apnxsid = apnxsiframe.getAttribute('data-placementid');
      var apnxsizes = apnxsiframe.getAttribute('data-sizes').split(',');
      var apnxsmain = apnxsizes.shift();
      var apnxspromo = (apnxsizes.length > 0 ? '&promo_sizes='+apnxsizes.join(): '');
      apnxsiframe = (apnxsiframe.contentWindow) ? apnxsiframe.contentWindow : (apnxsiframe.contentDocument.document) ? apnxsiframe.contentDocument.document : apnxsiframe.contentDocument;
      apnxsiframe.document.open();
      apnxsiframe.document.write('<scr'+'ipt>var asq_empty_response=false;</scr'+'ipt>');
      apnxsiframe.document.write('<scr'+'ipt src="http://ib.adnxs.com/ttj?id='+apnxsid+'&size='+apnxsmain+apnxspromo+'&referrer='+window.location.hostname+'&cb='+Math.floor(Math.random()*9999999999)+'"></scr'+'ipt>');
      apnxsiframe.document.write('<scr'+'ipt>(function() {if (asq_empty_response) window.frameElement.style.display="none"; else window.frameElement.style.display="block"})()</scr'+'ipt>');
      apnxsiframe.document.close();
    }
  }
}
