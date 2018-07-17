import React, { Component } from 'react';
import classnames from 'classnames';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.dropdown = React.createRef();
        this.state = {
            isOpen: false
        };
        this.toggleHandle = this.toggleHandle.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.dropdown && !this.dropdown.current.contains(event.target)) {
            this.setState({ isOpen: false })
        }
    }

    toggleHandle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleItemClick = child => () => {
        this.props.onSelectedValueChanged(child);
        this.setState({ isOpen: false })
    };


    render(){
        const { title, children } = this.props;
        const { isOpen } = this.state;
        const items = React.Children.map(children, child => {
            return React.cloneElement(child, {
                onClick: this.handleItemClick(child.props)
            });
        });
        return (
            <div
                className="dropdown"
                ref={this.dropdown}
            >
                <div
                    className="dropdown--select"
                    onClick={this.toggleHandle}
                >
                    <span>{title}</span>
                    <i
                        className={classnames('fas', {
                            'fa-caret-down' : !isOpen,
                            'fa-caret-up' : isOpen
                        })}
                    />
                </div>
                <div
                    className={classnames('dropdown--inner', {
                        'dropdown-is-opened' : isOpen
                    })}
                >
                    {items}
                </div>
            </div>
        );
    }
}

export default DropDown;