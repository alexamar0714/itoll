import React, { Component } from 'react';
import './style.css';

class Transaction extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
            api_result: "No result",
            test_json: { 
                "id_number": "0",
                "license_plate": "AAA000",
                "date": "2018-10-30T15:17:21.198799+02:00",
                "amount_to_pay": "2500",
                "reference_number": "1",
                "currency": "NOK",
                "products": [
                    {
                        "product": "dog",
                        "value": "10000",
                        "amount": "1",
                        "unit": "pieces",
                        "fee": "0",
                        "contacted_NFSA": true,
                        "vat": "25",
                        "currency": "NOK"
                    }
                ]
            }
        
		};
		this.getTransactionItem = this.getTransactionItem.bind(this);
	this.createProductList = this.createProductList.bind(this)
    }


    getTransactionItem(key) {
        return JSON.parse(localStorage.getItem("transaction"))[key];
        //return this.state.test_json[key];
    }

	createProductList() {
		var dict = {
           		"true": "Yes",
            		"false": "No"
        	};
        	var dict2 = {
           		"true": "EU",
           		"false": "Non-EU"
       		};

        	var src = this.getTransactionItem("products");
        	var products = [];
		for (var i = 0; i < src.length; i++) {
            		var product = [];
			product.push(<li className="productName">Product: {src[i]["product"]}</li>)
	                if (src[i]["name"] != ""){
            			product.push(<li>Name: {src[i]["name"]}</li>);
           		}
			product.push(<li>Value: {src[i]["value"]} {src[i]["currency"]}</li>);
		        product.push(<li>Amount: {src[i]["amount"]} {src[i]["unit"]}</li>);
            		product.push(<li>Fee: {src[i]["fee"]}</li>);
            		product.push(<li>VAT: {src[i]["vat"]}%</li>);
	                if (src[i]["breed"] != ""){
            			product.push(<li>Breed: {src[i]["breed"]}</li>);
           		}
            		if (src[i]["contacted_NFSA"] != null){
                		product.push(<li>Contacted NFSA: {dict[src[i]["contacted_NFSA"].toString()]}</li>);
            		}
            		if (src[i]["registered_NFSA"] != null){
                		product.push(<li>Registered NFSA: {dict[src[i]["registered_NFSA"].toString()]}</li>);
            		}
            		if (src[i]["of_EU_origin"] != null){
                		product.push(<li>Origin: {dict2[src[i]["of_EU_origin"].toString()]}</li>);
            		}

            		products.push(product);
            
       		}
        		return products;
	}
	
	render() {
		return (
			<div className="transaction">
		        <h2 className="transactionTitle">Declaration</h2>
			<ul className="transactionDetails">
			<li>Date: {(this.getTransactionItem("date")).substring(0,10)}</li>
			<li>License plate: {this.getTransactionItem("license_plate")}</li>
			<li>Amount paid: {this.getTransactionItem("amount_to_pay")} {this.getTransactionItem("currency")}</li>
			</ul>
			<h2 className="productsTitle">Products</h2>
			<ul className="productDetails">
			{ this.createProductList() }
			</ul>
			</div>
		);
	}
}

export default Transaction;

