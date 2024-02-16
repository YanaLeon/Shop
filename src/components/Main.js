import React from 'react';

import $ from 'jquery';

import './Main.css';

class Main extends React.PureComponent {

    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      this.loadData();
    }
  
    state = {
      clients: null,
    };

    fetchSuccess = (loadedData) => {
        this.setState({clients:loadedData});
      };
      
    loadData = () => {
  
        const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
        const main = 'LEONOVICH_SHOP_MAIN';
        
        $.ajax({
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : main },
            success : this.readReadyMain, error : this.errorHandler
        });
    };
  
    readReadyMain =  (callresult) => {
        if ( callresult.error != undefined ) {
            console.log(callresult.error);
        } else if ( callresult.result != "" ) {
            let data = JSON.parse(callresult.result);
            this.fetchSuccess(data);
        }
    }
    
    errorHandler = (jqXHR,statusStr,errorStr) => {
        console.log(statusStr+' '+errorStr);
    }

  
    render() {
        
        let clientsCode;
        if(this.state.clients) {
            clientsCode = this.state.clients.map((element) => {
            return (
            <div className="Main-artical" key={element.id}>
                <img className="Main-img" src = {"/Shop/image/" + element.img}/>
                <p className="Main-text">{element.discription}</p>
            </div>
            )
        })
      }
  console.log(clientsCode, 1)
      return (
        <div>
            <div className="Main-text-title">Ideas for your interior</div>
            <div className="Main">
            {clientsCode}
          </div>
        </div>
      );
    }
  
  }
  export default Main;

