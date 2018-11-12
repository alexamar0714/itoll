import React, { Component } from 'react';
import './style.css';
import QrReader from 'react-qr-reader';
import { BrowserRouter } from 'react-router-dom';

class Scanner extends Component {

	
    constructor(props) {
		super(props);
		this.state = {
		  delay: 300,
		  result: "No result",
		  api_result: "No result",
		  counter: 0
		};
		this.handleScan = this.handleScan.bind(this);
    }
      
	handleScan(data) {
        if (data) {
            this.setState({
			result: data
			});
			this.getTransaction(data);
		if(!(this.state.api_result === "No result")){
			localStorage.setItem("transaction", JSON.stringify(this.state.api_result))
			this.props.history.push("/itoll/transaction")
		}
		}
	}

	getTransaction(url) {
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ api_result: data }));
		console.log(this.state.api_result);
	}

    handleError(err) {
        console.error(err);
	}

    render(){
        return (
            <div className="scanner">
                <QrReader
			delay={this.state.delay}
			onError={this.handleError}
			onScan={this.handleScan}
			style={{ width: "100%" }}
		/>
            </div>
        );
    }

}

export default Scanner;

