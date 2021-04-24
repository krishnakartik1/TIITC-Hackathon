function display (height, standeye, standelbow, siteye, sitelbow, seat, difference) {
// document.getElementById('height').value=height;
document.getElementById('standeye').innerHTML=standeye;
document.getElementById('standelbow').innerHTML=standelbow;
document.getElementById('siteye').innerHTML=siteye;
document.getElementById('sitelbow').innerHTML=sitelbow;
document.getElementById('seat').innerHTML=seat;
document.getElementById('difference').innerHTML=difference;
}
function showProd1() {
    var h = document.getElementById('product');
    var x = document.getElementById('product1');
    var y = document.getElementById('product2');
    var z = document.getElementById('product3');
    var p = document.getElementById('prodTitle');
        h.style.visibility = 'visible';
        x.style.display = 'block';
        x.classList.add('prodBoxShow');
        y.style.display = 'none';
        z.style.display = 'none';
        p.classList.add('prodTitle');
}
function showProd2() {
    var h = document.getElementById('product');
    var x = document.getElementById('product1');
    var y = document.getElementById('product2');
    var z = document.getElementById('product3');
    var p = document.getElementById('prodTitle');
        h.style.visibility = 'visible';
        x.style.display = 'none';
        y.style.display = 'block';
        y.classList.add('prodBoxShow');
        z.style.display = 'none';
        p.classList.add('prodTitle');
}
function showProd3() {
    var h = document.getElementById('product');
    var x = document.getElementById('product1');
    var y = document.getElementById('product2');
    var z = document.getElementById('product3');
    var p = document.getElementById('prodTitle');
        h.style.visibility = 'visible';
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
        z.classList.add('prodBoxShow');
        p.classList.add('prodTitle');
}
function instruction() {
	 alert('This field is read-only. Click your height above to see results here.');
}
function check(){
    console.log("check")
}
function displayMeasurements(heightSelect){
    // console.log(heightSelect.value)
    // console.log(document.getElementById('standelbow').innerHTML)
    if (heightSelect.value == "5"){
        display('60\'\'','57\'\'','39\'\'','43\'\'','23\'\'','16\'\'','16\'\'');
    }else if (heightSelect.value == "51"){
        display('61\'\'','58\'\'','39\'\'','44\'\'','23\'\'','16\'\'','16\'\'');
    }else if (heightSelect.value == "52"){
        display('62\'\'','59\'\'','40\'\'','44\'\'','24\'\'','16\'\'','16\'\'');
    }else if (heightSelect.value == "53"){
        display('63\'\'','60\'\'','40\'\'','45\'\'','24\'\'','16\'\'','16\'\'');
    }else if (heightSelect.value == "54"){
        display('64\'\'','61\'\'','41\'\'','46\'\'','25\'\'','16\'\'','16\'\'');
    }else if (heightSelect.value == "55"){
        display('65\'\'','62\'\'','42\'\'','47\'\'','25\'\'','17\'\'','17\'\'');
    }else if (heightSelect.value == "56"){
        display('66\'\'','63\'\'','43\'\'','47\'\'','26\'\'','17\'\'','17\'\'');
    }else if (heightSelect.value == "57"){
        display('67\'\'','64\'\'','43\'\'','48\'\'','26\'\'','17\'\'','17\'\'');
    }else if (heightSelect.value == "58"){
        display('68\'\'','65\'\'','44\'\'','49\'\'','26\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "59"){
        display('69\'\'','66\'\'','45\'\'','50\'\'','27\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "510"){
        display('70\'\'','67\'\'','45\'\'','50\'\'','27\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "511"){
        display('71\'\'','68\'\'','46\'\'','51\'\'','28\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "6"){
        display('72\'\'','69\'\'','47\'\'','52\'\'','28\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "61"){
        display('73\'\'','69\'\'','47\'\'','52\'\'','29\'\'','18\'\'','18\'\'');
    }else if (heightSelect.value == "62"){
        display('74\'\'','70\'\'','48\'\'','53\'\'','29\'\'','19\'\'','19\'\'');
    }else if (heightSelect.value == "63"){
        display('75\'\'','71\'\'','49\'\'','54\'\'','29\'\'','20\'\'','19\'\'');
    }else if (heightSelect.value == "64"){
        display('76\'\'','72\'\'','50\'\'','55\'\'','30\'\'','20\'\'','19\'\'');
    }
}