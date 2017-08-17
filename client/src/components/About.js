import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Button, Container, Input, Form } from 'semantic-ui-react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const jsPDF = require('jspdf')
var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ];

class About extends React.Component {
    defaults = { timeclock1: '', timeclock2: '', amount: '' }
    state = { ...this.defaults}
    //make a good looking document
    build = (timeclock1, amount) => {
       // var doc = new jsPDF()
       // doc.text('Timeclock: ' + timeclock1 , 10, 10)
        //doc.save('DACT.pdf')
        const total = timeclock1 * amount
        console.log(timeclock1)
        console.log(amount)
        console.log(total)
        }

    setValue = (e) => {
        let { target: { value } } = e;
        this.setState({ [e.target.name]: e.target.value });
      }
    
    render() {
       let { timeclock1, timeclock2, amount } = this.state
       
       //Fill in all the time clocks
       //create a input for amount of timeclocks
       //create a input for amount off
        return(
            <Container>
                <Form
                    ref={ n => this.form = n }
                    onSubmit={ e => {
                        e.preventDefault();
                        this.setState({ ...this.defaults });
                        this.build(timeclock1, amount)
                        }}
                     >
                <Form.Field>
                    <label>
                    Pick your Timeclock:
                    <select value={timeclock1} name='timeclock1' onChange={this.setValue}>
                        <option value=" ">-- choose --</option>
                        <option value='1000'>Synel 715</option>
                        <option value='1143.75'>Synel 765</option>
                        <option value='394'>ZK T4</option>
                        <option value="1700">HandPunch 1000</option>
                        <option value="2450">HandPunch 3000</option>
                        <option value="2976">HandPunch 4000</option>
                        <option value="2042.50">ATS Prodigy</option>
                        <option value="1701.25">ATS Maximus</option>
                        <option value="1">ATS Maximus Severe Duty</option>
                        <option value="762">MacSema BC3100</option>
                        <option value="588">SST</option>
                        <option value="270">TRANZ 380</option>
                        <option value="1">Telephony</option>
                    </select>
                     </label>
                    
                </Form.Field>
                <Form.Field>  
                <Input type='text' value={amount} name='amount'onChange={this.setValue} />       
                </Form.Field> 
                     <Button basic color='green' content='Save' icon='save' labelPosition='left'/>
                </Form>
            </Container>
        
        )
    }   
}

export default withRouter(connect()(About))