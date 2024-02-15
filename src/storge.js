// работа с AJAXStringStorage2
import jsonFile from "./products.json";

let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
let products = 'LEONOVICH_SHOP_PRODUCTS';

// отправляем данные о продуктах
function send () {
    updatePassword = Math.random();
    $.ajax({
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'LOCKGET', n : products, p : updatePassword },
        success : lockGetReady, error : errorHandler
    });
}

send()
function lockGetReady(callresult) {
    if ( callresult.error != undefined )
        console.log(callresult.error);
    else {
        let info = {jsonFile};
        $.ajax({
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'UPDATE', n : stringNameSave,
            v : JSON.stringify(info), p : updatePassword },
            success : updateReady, error : errorHandler
        });
    }
}

function updateReady(callresult) {
    if ( callresult.error != undefined ) {
        console.log(callresult.error);
    }
}

// читаем данные
function restoreInfo() {
    $.ajax({
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'READ', n : products },
        success : readReady, error : errorHandler
    });
}
function readReady(callresult) {
    if ( callresult.error != undefined ) {
        console.log(callresult.error);
    } else if ( callresult.result != "" ) {
        let info = JSON.parse(callresult.result);
        console.log(info);
    }
}