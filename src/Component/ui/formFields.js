import React from 'react';


// creating a formfield that can be reuse, just create state of the form and pass it through fromField,
// check out enroll 
const FormFields = ({formData,id,change}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        // switch passing formData from class enroll state of config to create email input 
        switch(formData.element){
            case ('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formData.config}
                            value = {formData.value}
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