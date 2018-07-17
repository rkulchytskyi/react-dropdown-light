import React, { Component } from 'react';
import classnames from "classnames";

class DropDownItem extends Component {
    render(){
        const { text, isSelected } = this.props;
        return (
            <div
                className={classnames('dropdown--item', {
                    'dropdown--item-is-selected' : isSelected
                })}
                onClick={this.props.onClick}
            >
                {text}
            </div>
        )
    }
}

export default DropDownItem;