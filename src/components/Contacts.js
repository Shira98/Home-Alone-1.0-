import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class Contacts extends Component {
    constructor(props) {
        super(props);
      
        this.create = this.create.bind(this);
    }


    delete(key) {
        this.props.delete(key);
    }

    create(item) {
        return <li key={item.key}>{item.text} <br /> <button onClick={() => this.delete(item.key)}>Delete</button>
            </li>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.create);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}

                </FlipMove>
            </ul>
        )
    }
}

export default Contacts;