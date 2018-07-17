import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountriesList, changeSelectedCountry } from './actions';
import { bindActionCreators } from 'redux';
import DropDown from './components/DropDown/DropDown';
import DropDownItem from './components/DropDown/DropDownItem';

class Container extends Component {
    constructor(props) {
        super(props);
        this.onSelectedValueChanged = this.onSelectedValueChanged.bind(this);
    }

    onSelectedValueChanged(name){
        return (item) => {
            this.props.changeSelectedCountry({
                value: item.value,
                name
            });
        }
    }

    getNameById({countries, selectedCountryId}) {
        const selectedCountries = countries.filter(country => country.id === selectedCountryId);
        return selectedCountries[0] ? selectedCountries[0].name : 'Select country';
    }

    renderDropdown(data, name) {
        const title = this.getNameById(data);
        return (
            <DropDown
                title={title}
                onSelectedValueChanged={this.onSelectedValueChanged(name)}
            >
                {data.countries.map(item =>
                    (
                        <DropDownItem
                            key={item.id}
                            text={item.name}
                            value={item.id}
                            isSelected={this.getNameById(data) === item.name}
                        />
                    )
                )}
            </DropDown>
        )
    }

    render() {
        const { billing, shipping } = this.props;
        return (
            <Fragment>
                {this.renderDropdown(billing, 'billing')}
                {this.renderDropdown(shipping, 'shipping')}
            </Fragment>
        );
    }
}

Container.propTypes = {
    billing: PropTypes.object.isRequired,
    shipping: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return {
        billing: state.countriesDataHandle['billing'],
        shipping: state.countriesDataHandle['shipping']
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountriesList: bindActionCreators(getCountriesList, dispatch),
        changeSelectedCountry: bindActionCreators(changeSelectedCountry, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);