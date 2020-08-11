import React from 'react';


// creating a formfield that can be reuse, just create state of the form and pass it through fromField,
// check out enroll 
const FormFields = ({formDataEmail,id,change}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        // switch passing formData from class enroll state of config to create email input 
        switch(formDataEmail.element){
            case ('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formDataEmail.config}
                            value = {formDataEmail.value}
                            onChange = {(event)=> change(event,id)}
                        />
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormFields;