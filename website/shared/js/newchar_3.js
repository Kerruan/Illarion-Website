function selectStartpack(){var a=url+"/community/account/xml_startpack.php?startpack="+$("startpack").value;a+="&language="+(cur_lang=="de"?"de":"us");a+="&server="+$("serverId").value;$("loading").setStyle({display:"inline"});new Ajax.Request(a,{method:"get",onSuccess:function(e){var o=$("startpack_area");var c=o.childNodes.length;for(var g=0;g<c;g++){o.removeChild(o.firstChild)}var l=e.responseXML.firstChild;while(l.nodeName!="pack"&&l.nextSibling!=null){l=l.nextSibling}$("sel_pack").value=getAttributeValue(l.attributes,"id");var h=$("submit_button");h.disabled=false;h.className="";var m=false;var n;for(var f=0;f<l.childNodes.length;f++){if(l.childNodes[f].nodeName=="skills"){var k=l.childNodes[f].childNodes;for(var g=0;g<k.length;g++){if(!m){n=document.createElement("h3");n.appendChild(document.createTextNode("Skills"));o.appendChild(n);n=document.createElement("ul");m=true}var b=document.createElement("li");b.appendChild(document.createTextNode(getAttributeValue(k[g].attributes,"name")));b=Element.extend(b);b.setStyle({cssFloat:"left",width:"33%"});n.appendChild(b)}if(m){o.appendChild(n);n=document.createElement("div");n.className="clr";o.appendChild(n)}}else{if(l.childNodes[f].nodeName=="items"){var m=false;var d=l.childNodes[1].childNodes;for(var g=0;g<d.length;g++){if(d[g].attributes.getNamedItem("id").nodeValue!=0){if(!m){n=document.createElement("h3");n.appendChild(document.createTextNode((cur_lang=="de"?"Gegenstände":"Items")));o.appendChild(n);m=true}n=document.createElement("img");n.src=url+"/shared/pics/items/"+getAttributeValue(d[g].attributes,"id")+".png";n.alt=document.createTextNode(getAttributeValue(d[g].attributes,"name"));n=Element.extend(n);n.setStyle({margin:"5px"});o.appendChild(n)}}}}}$("loading").setStyle({display:"none"})}})}function getAttributeValue(a,c){if(a.length<=0){return null}else{for(var b=0;b<a.length;b++){if(a[b].nodeName==c){return a[b].nodeValue}}}return null};