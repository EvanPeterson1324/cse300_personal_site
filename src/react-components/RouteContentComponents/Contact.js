import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromEmail: '',
            subject: '',
            body: ''
        }
    }

    // Update the state of email text field
    handleEmailChange = (value) => { this.setState({ fromEmail: value }) }

    // Update the state of subject text field
    handleSubjectChange = (value) => { this.setState({ subject: value }) }

    // Update the state of the body text area
    handleBodyChange = (value) => { this.setState({ body: value }) }

    // Check that the fields are valid, then send an email to yourself
    handleSendEmail = () => {
        const { fromEmail, subject, body } = this.state;
        const subject2 = subject.trim();
        if (this.emailIsValid()) {
            if (!subject2 || !body) {
                alert('fields must not be empty!'); 
                return;
            }
            // Need to use AWS SES to send emails. Remember that we only have 1000 inbound msgs per month
            return;
        }
        alert('Email format is invaild.  Please try again.');
    }

    sendEmail = () => {

    }

    emailIsValid = () => {
        return true;
    }

    render() {
        const { fromEmail, subject, body } = this.state;
        return (
            <div>
                <h2>Contact</h2>
                <label> Email </label> <br />
                <input 
                    type="text" 
                    className="sender-email" 
                    value={fromEmail}
                    onChange={(e) => this.handleEmailChange(e.target.value)}
                /> <br/>
    
                <label> Subject </label> 
                <br />
                <input 
                    type="text" 
                    className="sender-subject"
                    value={subject}
                    onChange={(e) => this.handleSubjectChange(e.target.value)} 
                    /> 
                <br />
                <label> Body </label> 
                <br />
                <textarea 
                    className="sender-body"
                    value={body}
                    onChange={(e) => this.handleBodyChange(e.target.value)}> 
                    { body } 
                </textarea> 
                <br />
            <button onClick={this.handleSendEmail}> Send </button>
            </div>
        );
    }
};

export default Contact;
