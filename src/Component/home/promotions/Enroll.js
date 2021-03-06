import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/formFields'

class Enroll extends Component {
//  creating a enroll form your customer to enter their email all amintain through state

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Eneter your email to win!'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''

            }
        }
    }

    // setting formData to newFormData 
    updateForm = (element) => {
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}

        newElement.value = element.event.target.value;
        newFormData[element.id] = newElement;

        this.setState({
            formData : newFormData
        })
    }

    submitForm = () => {

    }

    render() {
        return (
            <Fade>
                <div className='enroll_wrapper'>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className='enroll_title'>
                            Enter your Email
                        </div>

                        {/* formfields are from ui reuseable component  */}
                        <div className='enroll_input'>
                            {/* passing formData.email to formDataEmail */}
                            <FormFields
                                id={'email'}
                                formDataEmail={this.state.formData.email}
                                change = {(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>

                </div>
            </Fade>
            
        );
    }
}
export default Enroll;