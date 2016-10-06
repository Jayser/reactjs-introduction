import React, {PropTypes} from 'react';

class ListTitle extends React.Component {
    
    render () {
        return(<p>{this.props.children}</p>)
    }
}

ListTitle.propTypes = {
    children: PropTypes.node
}

export default ListTitle;