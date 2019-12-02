import React, { PropTypes, Component } from 'react';
import FlipMove from "react-flip-move";
import Contacts from './Contacts';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conts: []
        };
        this.addCont = this.addCont.bind(this);
        this.del = this.del.bind(this);
        this.createTasks = this.createTasks.bind(this);

    }

    delete(key) {
        this.props.delete(key);
    }

    addCont(e) {
        var m = /^\+[0-9][0-9][1-9][0-9]{9}$/;
        //alert(this._inputElement.value)
        if (this._inputElement.value !== "" && m.test(this._inputElement.value) == true) {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    conts: prevState.conts.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        else {
            alert('Please enter a 10+2 digit phone number of the form +911010101010.');

        }
        console.log(this.state.conts);

        e.preventDefault();
        
    }

    del(key) {
        var filteredItems = this.state.conts.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            conts: filteredItems
        });
    }

 
    createTasks(item) {

         return <div className="header"> <li key={item.key}>{item.text}  <button onClick={() => this.delete(item.key)}>Delete</button>
             <form action="/settings">             
                <button type="submit" style={{ alignSelf: 'center' }}>Intent</button>
             </form>
                <form onSubmit={this.addCont}>
                    <input ref={(a) => this._inputElement = a}></input>
                    <button type="submit" style={{ alignSelf: 'center' }}>Add Contact</button>
                </form>
            <Contacts entries={this.state.conts}
                delete={this.del}
            /></li></div>
    }
    render() {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
         return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
    )}
}

export default List;