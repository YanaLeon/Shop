import { readData } from "./productsSlice.js";

import $ from 'jquery'; 
export function productsLoad (dispatch) {

let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let products = 'LEONOVICH_SHOP_PRODUCTS';

function restoreInfo() {
    $.ajax({
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'READ', n : products },
        success : readReady, error : errorHandler
    });
}
restoreInfo();
function readReady(callresult) {
    if ( callresult.error != undefined ) {
        console.log(callresult.error);
    } else if ( callresult.result != "" ) {
        let data = JSON.parse(callresult.result);
        dispatch( readData(data) );
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    console.log(statusStr+' '+errorStr);
}

};