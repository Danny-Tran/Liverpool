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

    updateForm = (element) => {
        console.log(element)
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
                            {/* passing formData.email to FormFiel */}
                            <FormFields
                                id={'email'}
                                formData={this.state.formData.email}
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