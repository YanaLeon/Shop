import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteBasket, load } from "../redux/basketSlice.js";
import $ from 'jquery'; 

import './Modal.css'

export default function ModalDelete() {

    const basket = useSelector( state => state.basket );
    const deleteBasketBul = useSelector( state => state.basket.deleteBasketBul );
    const loaded = useSelector( state => state.basket.loaded );
    const dispatch = useDispatch();

    useEffect(() => {
        basketUpdateDelete();
    }, []);

    function basketUpdateDelete() {
    
        const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
        const basketName = 'LEONOVICH_SHOP';
        let updatePassword = Math.random();
        
        $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : basketName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        });

        function lockGetReady(callresult) {
            if ( callresult.error!=undefined ) {
                console.log (callresult.error);
            } else {
                $.ajax( {
                    url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                    data : { f : 'UPDATE', n : basketName,
                    v : JSON.stringify(basket), p : updatePassword },
                    success : updateReady, error : errorHandler
                });
            }
        }
        
        function updateReady(callresult) {
            if ( callresult.error!=undefined ) {
                console.log(callresult.error);
            } else {
                 dispatch(load(true))
             }    
        }

        function errorHandler(jqXHR,statusStr,error) {
            console.log(statusStr+' '+error);
        }
    };

    function closeModal () {
        dispatch( deleteBasket(false));
        dispatch( load (false))
    }

    function modalWindowClick(eo) {
        eo.stopPropagation();
    }

  return (
    <div className={loaded?"SModalGlassGet":"SModalGlass"}>
        <div className="SModalWindow" onClick={modalWindowClick}>
            <p className="SModalText">{loaded?"Product deleted successfully":"не успешно"}</p>
            <input type="button" className="SModalInput" defaultValue={"Continue"} onClick={closeModal}/>
            </div>
    </div>
  )
}
