import React, {PropTypes} from 'react';

class ListTitle extends React.Component {
    
    render () {
        let text = this.props.storedData;
        return(<p>{text}</p>)
    }
}

ListTitle.propTypes = {
    storedData: PropTypes.string
}

export default ListTitle;