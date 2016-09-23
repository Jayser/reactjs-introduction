import './index.scss';

import React, {PropTypes} from 'react';

class AutocompleteList extends React.Component {
    constructor (props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler ({target}) {
        console.log(target);
    }
    render () {
        return (<ul className="autocomplete-list">
        { 
            this.props.list.map(function (item, idx) {
                return (<li key={idx} data-lat={item.geometry.location.lat} data-lng={item.geometry.location.lng}>
                    <span onClick={this.clickHandler}>{item.formatted_address}</span>
                </li>)
            }.bind(this))
        }
        </ul>);
    }
}

AutocompleteList.propTypes = {
    list: PropTypes.array.isRequired
}

export default AutocompleteList;
