// JavaScript source code
import React, { Component } from 'react';
//import { Box, Grommet } from 'grommet';
import './Situation.css';
import './Pro.css';
import List from "./List";
import { Linking } from 'react';
//import { PermissionsAndroid } from 'react-native';
//import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Contacts from 'react-native-contacts';
  

//RNImmediatePhoneCall.immediatePhoneCall('9686194463');

export default class Situations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.storeContacts = this.storeContacts.bind(this);
    }
    

    addItem(e) {
     
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            var i;
            this.setState((prevState) => {

                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
            
            //localStorage.setItem("newItem", "");
        }
            console.log(this.state.items[0]);

        e.preventDefault();
        localStorage.setItem('situations', JSON.stringify(this.state.items));
       // this.storeContacts();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });

        //this.storeContacts();
        localStorage.setItem('situations', JSON.stringify(filteredItems));
    }

    componentDidMount() {
        this.storeContacts();
    }

   
    storeContacts() {
        // for all items in state
        //for (let key in this.state) {
            if (localStorage.hasOwnProperty('situations')) {
                //alert('YES')
                // get the key's value from localStorage
                let value = localStorage.getItem('situations');
                console.log(value);
                // parse the localStorage string and setState
                try {
                    //alert("IN try")
                    value = JSON.parse(value);
                    this.setState({ items: value });
                } catch (e) {
                    // handle empty string
                    alert("IN CATCH")
                    console.log(value)
                    this.setState({ items: [''] });
                }
            }
        //}

     }

  
        render() {
            
        return (
            <div className="profile">
                <br/>
                <h2>Situations</h2>
                <br />
                <p>Add situations in which you want the application to call the contacts added into it. Register a voice intent for every situation.</p>
                <p>Start by filling the text box and clicking on 'Add Situation' button.</p>
                <p>You can delete Contacts and Situations by pressing 'Delete'.</p>
                <div className="todoListMain " >
                   
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <input ref={(a) => this._inputElement = a}></input>
                            <button type="submit" style={{ alignSelf: 'center' }}>Add Situation</button> 
                            </form>
                        </div>

                    <center>
                        <List
                            entries={this.state.items}
                            delete={this.deleteItem}
                        />
                    </center>
                    
                </div>
            </div>
        )
    }
}
