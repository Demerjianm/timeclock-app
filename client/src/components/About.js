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
    defaults = { timeclock1: '', timeclock2: '' }
    state = { ...this.defaults}
    build = (timeclock1) => {
        var doc = new jsPDF()
        doc.text('Timeclock: ' + timeclock1 , 10, 10)
        doc.save('DACT.pdf')
        console.log(timeclock1)
        }

    setValue = (e) => {
        let { target: { value } } = e;
        this.setState({ timeclock1: value });
      }
    
    render() {
       let { timeclock1, timeclock2 } = this.state
        return(
            <Container>
                <Form
                    ref={ n => this.form = n }
                    onSubmit={ e => {
                        e.preventDefault();
                        this.setState({ ...this.defaults });
                        this.build(timeclock1)
                        }}
                     >
                <Form.Field>
                    <label>
                    Pick your Timeclock:
                    <select value={timeclock1} onChange={this.setValue}>
                        <option value=" ">-- choose --</option>
                        <option value="handtrack">handtrack</option>
                        <option value="biometric">biometric</option>
                        <option value="transys">transys</option>
                        <option value="handpunch">handpunch</option>
                    </select>
                     </label>
                    <input ref={ n => this.timeclock1 = n } defaultValue={timeclock1} />
                </Form.Field>         
                     <Button basic color='green' content='Save' icon='save' labelPosition='left'/>
                </Form>
            </Container>
        
        )
    }   
}

export default withRouter(connect()(About))