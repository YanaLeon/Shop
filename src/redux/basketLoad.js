import { readDataBasket } from "./basketSlice.js";

import $ from 'jquery'; 

export function basketLoad (dispatch) {

    const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
    const basketName = 'LEONOVICH_SHOP';

    console.log('render')
    
   
        $.ajax({
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : basketName },
            success : readReady, error : errorHandler
        });
 
    function readReady(callresult) {
        if ( callresult.error !== undefined ) {
            console.log(callresult.error);
        } else if ( callresult.result !== "" ) {
            let data = JSON.parse(callresult.result);
            dispatch( readDataBasket({basket: data.basket, quantityOrder: data.quantityOrder}) );
        }
    }
    
    function errorHandler(jqXHR,statusStr,errorStr) {
        console.log(statusStr+' '+errorStr);
    }
};