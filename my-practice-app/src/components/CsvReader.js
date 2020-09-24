import React, {Component} from 'react';
import CSVReader from "react-csv-reader";

export default class CsvReader extends Component {

    handleFileLoaded(data){
        let obj = {};
        let array = [];
        let keyArray = [];
        
        for (let i = 0; i < data.length; i++) {
          array[i] = data.map((val) => val[i]);
          keyArray[i] = data.map((val) => val[i]);
        }; 

        for (let i = 0; i < data.length; i++) {
          array = array.filter((val) => val[i] !== undefined);
          keyArray = array.filter((val) => val[i] !== undefined);
        };  

        for (let i = 0; i < keyArray.length; i++) {
          keyArray[i] = keyArray[[i][0]].shift();
        };
       
        for (let i = 0; i < array.length; i++) {
          obj[keyArray[i]] =  array[i];   
        };
        this.props.csvUpdater.emit('update', obj);
    }

    render(){
        return(
            <div className="container">
                <CSVReader
                 cssClass="react-csv-input"
                 label="Select CSV with your data"
                 onFileLoaded={this.handleFileLoaded.bind(this)}
                />
            </div>
        );
    }
}