import React from 'react';
import ReactDOM from 'react-dom';

class ModalContainer extends React.Component{
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('modal-container')
        )
    }
}
export default ModalContainer;