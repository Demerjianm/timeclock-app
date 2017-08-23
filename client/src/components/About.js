import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Button, Container, Input, Form } from 'semantic-ui-react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { imgData, signature } from './Variables.js'

var moment = require('moment');
const jsPDF = require('jspdf')
moment().format()



class About extends React.Component {
    defaults = { companyName: '', timeclock1: '', timeclock2: '', timeclock3: '', 
                 quantity1: '', quantity2: '', quantity3: '', discount1: '', discount2: '', 
                 discount3: '', x: '', y: '', z: ''
                }
    state = { ...this.defaults}
    //make a good looking document
    build = (companyName, timeclock1, timeclock2, timeclock3, quantity1, quantity2, quantity3, discount1, discount2, discount3, x, y, z) => {
        
       
        var doc = new jsPDF()
        const total1 = (timeclock1 * quantity1) - discount1
        const total2 = (timeclock2 * quantity2) - discount2
        const total3 = (timeclock3 * quantity3) - discount3

        const combinedTotal = total1 + total2 + total3
        
        const totalDecimal1 = total1.toFixed(2)
        const totalDecimal2 = total2.toFixed(2)
        const totalDecimal3 = total3.toFixed(2)

        if(timeclock1 == 1000){
            x = 'Synel 715'
        } else if (timeclock1 == 1143.75) {
            x = 'Synel 765'
        } else if (timeclock1 == 394) {
            x = 'ZK T4'
        } else if (timeclock1 == 1700) {
            x = 'HandPunch 1000'
        } else if (timeclock1 == 2450) {
            x = 'HandPunch 3000'
        } else if (timeclock1 == 2976) {
            x = 'HandPunch 4000'
        } else if (timeclock1 == 2042.50) {
            x = 'ATS Prodigy'
        } else if (timeclock1 == 1701.25) {
            x = 'ATS Maximus'
        } else if (timeclock1 == 1.5) {
            x = 'ATS Maximus Severe Duty'
        } else if (timeclock1 == 762) {
            x = 'MacSema BC3100'
        } else if (timeclock1 == 588) {
            x = 'SST'
        } else if (timeclock1 == 270) {
            x = 'TRANZ 380'
        } else if (timeclock1 == 1) {
            x = 'Telephony'
        }

        if(timeclock2 == 1000){
            y = 'Synel 715'
        } else if (timeclock2 == 1143.75) {
            y = 'Synel 765'
        } else if (timeclock2 == 394) {
            y = 'ZK T4'
        } else if (timeclock2 == 1700) {
            y = 'HandPunch 1000'
        } else if (timeclock2 == 2450) {
            y = 'HandPunch 3000'
        } else if (timeclock2 == 2976) {
            y = 'HandPunch 4000'
        } else if (timeclock2 == 2042.50) {
            y = 'ATS Prodigy'
        } else if (timeclock2 == 1701.25) {
            y = 'ATS Maximus'
        } else if (timeclock2 == 1.5) {
            y = 'ATS Maximus Severe Duty'
        } else if (timeclock2 == 762) {
            y = 'MacSema BC3100'
        } else if (timeclock2 == 588) {
            y = 'SST'
        } else if (timeclock2 == 270) {
            y = 'TRANZ 380'
        } else if (timeclock2 == 1) {
            y = 'Telephony'
        } else { 
            y = ' ' 
        }

        if(timeclock3 == 1000){
            z = 'Synel 715'
        } else if (timeclock3 == 1143.75) {
            z = 'Synel 765'
        } else if (timeclock3 == 394) {
            z = 'ZK T4'
        } else if (timeclock3 == 1700) {
            z = 'HandPunch 1000'
        } else if (timeclock3 == 2450) {
            z = 'HandPunch 3000'
        } else if (timeclock3 == 2976) {
            z = 'HandPunch 4000'
        } else if (timeclock3 == 2042.50) {
            z = 'ATS Prodigy'
        } else if (timeclock3 == 1701.25) {
            z = 'ATS Maximus'
        } else if (timeclock3 == 1.5) {
            z = 'ATS Maximus Severe Duty'
        } else if (timeclock3 == 762) {
            z = 'MacSema BC3100'
        } else if (timeclock3 == 588) {
            z = 'SST'
        } else if (timeclock3 == 270) {
            z = 'TRANZ 380'
        } else if (timeclock3 == 1) {
            z = 'Telephony'
        } else { 
            z = ' ' 
        }

        
        
        
        doc.addImage(imgData, 'JPEG', 130, 0, 90, 52);
        doc.setFontSize(15);
        doc.text(moment().format('MM-DD-YYYY'), 5, 10)
        doc.text('This proposal has been developed for:', 5, 25)
        doc.setFontSize(20)
        doc.text(companyName, 5, 38)
        doc.setDrawColor(0)
        doc.setFillColor(124,252,0)
        doc.rect(0, 60, 210, 9, 'FD')
        doc.setFontType("bold");
        doc.text('Hardware', 6, 67.5)
        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(x, 10, 80)
        doc.text(quantity1 + ' clock @ ' + timeclock1 + ' per', 100, 80)
        doc.text(' $ ' + totalDecimal1 , 175, 80)
        if(quantity2 !== '') {
            doc.text(y, 10, 90)
            doc.text(quantity2 + ' clock @ ' + timeclock2 + ' per', 100, 90)
            doc.text(' $ ' + totalDecimal2, 175, 90) 
        }
        if(quantity3 !== '') {
            doc.text(z, 10, 100)
            doc.text(quantity3 + ' clock @ ' + timeclock3 + ' per', 100, 100)
            doc.text(' $ ' + totalDecimal3, 175, 100)
        }
     
        //doc.rect(148, 98, 57, 10)
        doc.setFontSize(14);
        doc.text('Total: $ '+combinedTotal, 150, 110 )
        doc.setFontSize(14);
        doc.text('Agreed to and Accepted By: ', 15, 200)
        doc.text('Name:_______________________', 15, 210)
        doc.text('Company Name:_____________________', 100, 210)
        doc.text('Date Signed:______________________', 105, 230)
        doc.text('Title:________________________', 15, 220)
        doc.text('Signature:____________________', 15, 230)
        doc.save('DACT.pdf')
       
        }

    setValue = (e) => {
        let { target: { value } } = e;
        this.setState({ [e.target.name]: e.target.value });
      }
    
    render() {
       let { companyName,
             timeclock1, 
             timeclock2, 
             timeclock3, 
             quantity1, 
             quantity2, 
             quantity3, 
             discount1,
             discount2,
             discount3, 
             x,
             y,
             z
            } = this.state

       
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
                        this.build(companyName, timeclock1, timeclock2, timeclock3, quantity1, quantity2, quantity3, discount1, discount2, discount3, x, y, z)
                        }}
                     >
                <Form.Field>  
                <label>
                    Company Name:
                <Input type='text' value={companyName} name='companyName' onChange={this.setValue} />
                </label>       
                </Form.Field>     
                <Form.Field>
                    <label>
                    Pick your Timeclock:
                    <select value={timeclock1} name='timeclock1' onChange={this.setValue}>
                        <option value=" ">-- choose --</option>
                        <option value='1000.00'>Synel 715</option>
                        <option value='1143.75'>Synel 765</option>
                        <option value='394.00'>ZK T4</option>
                        <option value="1700.00">HandPunch 1000</option>
                        <option value="2450.00">HandPunch 3000</option>
                        <option value="2976.00">HandPunch 4000</option>
                        <option value="2042.50">ATS Prodigy</option>
                        <option value="1701.25">ATS Maximus</option>
                        <option value="1.50">ATS Maximus Severe Duty</option>
                        <option value="762.00">MacSema BC3100</option>
                        <option value="588.00">SST</option>
                        <option value="270.00">TRANZ 380</option>
                        <option value="1.00">Telephony</option>
                    </select>
                     </label>
                    
                </Form.Field>
                <Form.Field>  
                <label>
                    How many:
                <Input type='text' value={quantity1} name='quantity1' onChange={this.setValue} />
                </label>       
                </Form.Field>
                <Form.Field>
                <label>
                    Discount:
                <Input type='text' value={discount1} name='discount1' onChange={this.setValue} />
                </label>
                </Form.Field> 
                <Form.Field>
                    <label>
                    Pick your Timeclock:
                    <select value={timeclock2} name='timeclock2' onChange={this.setValue}>
                        <option value=" ">-- choose --</option>
                        <option value='1000.00'>Synel 715</option>
                        <option value='1143.75'>Synel 765</option>
                        <option value='394.00'>ZK T4</option>
                        <option value="1700.00">HandPunch 1000</option>
                        <option value="2450.00">HandPunch 3000</option>
                        <option value="2976.00">HandPunch 4000</option>
                        <option value="2042.50">ATS Prodigy</option>
                        <option value="1701.25">ATS Maximus</option>
                        <option value="1.00">ATS Maximus Severe Duty</option>
                        <option value="762.00">MacSema BC3100</option>
                        <option value="588.00">SST</option>
                        <option value="270.00">TRANZ 380</option>
                        <option value="1.00">Telephony</option>
                    </select>
                     </label>
                    
                </Form.Field>
                <Form.Field>  
                <label>
                    How many:
                <Input type='text' value={quantity2} name='quantity2' onChange={this.setValue} />
                </label>       
                </Form.Field>
                <Form.Field>
                <label>
                    Discount:
                <Input type='text' value={discount2} name='discount2' onChange={this.setValue} />
                </label>
                </Form.Field> 
                <Form.Field>
                    <label>
                    Pick your Timeclock:
                    <select value={timeclock3} name='timeclock3' onChange={this.setValue}>
                        <option value=" ">-- choose --</option>
                        <option value='1000.00'>Synel 715</option>
                        <option value='1143.75'>Synel 765</option>
                        <option value='394.00'>ZK T4</option>
                        <option value="1700.00">HandPunch 1000</option>
                        <option value="2450.00">HandPunch 3000</option>
                        <option value="2976.00">HandPunch 4000</option>
                        <option value="2042.50">ATS Prodigy</option>
                        <option value="1701.25">ATS Maximus</option>
                        <option value="1.00">ATS Maximus Severe Duty</option>
                        <option value="762.00">MacSema BC3100</option>
                        <option value="588.00">SST</option>
                        <option value="270.00">TRANZ 380</option>
                        <option value="1.00">Telephony</option>
                    </select>
                     </label>
                    
                </Form.Field>
                <Form.Field>  
                <label>
                    How many:
                <Input type='text' value={quantity3} name='quantity3' onChange={this.setValue} />
                </label>       
                </Form.Field>
                <Form.Field>
                <label>
                    Discount:
                <Input type='text' value={discount3} name='discount3' onChange={this.setValue} />
                </label>
                </Form.Field> 
                     <Button basic color='green' content='Save' icon='save' labelPosition='left'/>
                </Form>
            </Container>
        
        )
    }   
}

export default withRouter(connect()(About))