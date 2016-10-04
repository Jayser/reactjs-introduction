import React, {PropTypes} from 'react';

class AutocompleteInput extends React.Component {
    
    render () {
        return(<input id="autocomplete-input" className="controls"
            onInput={this.props.setHandlerOnChange} type="text"
            placeholder="Enter a location"/>)
    }
}

AutocompleteInput.propTypes = {
    setHandlerOnChange: PropTypes.func
}

export default AutocompleteInput;