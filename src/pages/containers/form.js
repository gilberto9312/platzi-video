import React from 'react';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/componets/modal.js';
import FormContacto from '../components/form.js';

class FormContainer extends React.Component(){
    render(){
        return(
            <div>
                <ModalContainer>
                    <Modal>
                        <FormContacto />
                    </Modal>                    
                </ModalContainer>                
            </div>
        )
    }
}
export default FormContainer;