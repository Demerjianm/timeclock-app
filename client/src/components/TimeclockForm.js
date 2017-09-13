import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Header, Button, Container, Input, Form, List, Icon } from 'semantic-ui-react'
import { addTimeclock, getTimeclocks, deleteTimeclock } from '../actions/timeclocks';

class TimeclockForm extends React.Component {

  componentDidMount = () => {
    let { _id } = this.props;
    this.props.dispatch(getTimeclocks(_id));
  }
/*
  displayTimeclock = () => {
    let { timeclocks } = this.props;
    console.log(timeclocks.vendor)
    return this.props.timeclocks.map( (timeclock, index) => {
      return (
        <List.Content key={index}>
          { timeclock }
          <Icon
            corner
            color="red"
            name="remove"
            onClick={ () => this.handleDelete(timeclock) }
          />
        </List.Content>
      )
    })
  }
*/
  displayTimeclocks = () => {
    let timeclocks = this.props
    return this.props.timeclocks.map( timeclock => {
     return (
       <li key={timeclock._id} className="collection-item">
         <div>
           <text>Vendor: </text>
            { timeclock.vendor }
           <text>,  Model: </text>
            { timeclock.model }
           <text>,  Wholesale: </text>
            { timeclock.wholesale }
           <text>,  Retail Price: </text>
            { timeclock.retailPrice }
            <div style={{ cursor: 'pointer' }}>
           <Icon
            corner
            color="red"
            name="remove"
            onClick={ () => this.handleDelete(timeclock)}

          />
           </div>
         </div>
       </li>
     )
   });
 }

 deleteTimeclock = () => {
  let { dispatch, timeclock, history } = this.props;
  let id = this.props._id 
  dispatch(deleteTimeclock(timeclock._id));
  history.push('/timeclocks');
 }

  handleDelete = (timeclock) => {
    let { timeclocks } = this.props;
    let id = timeclock._id;
    let filteredList = timeclocks.filter( item => item !== id);
    this.props.dispatch(deleteTimeclock(id));
    this.componentDidMount()
  }
    
//n in ref stands for node, setting a variable equal to the entire input element
render() {
    let vendor, model, wholesale, retailPrice, description, form 
  return(

    <div>
      <h5 className="center">Add A Timeclock</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          if (vendor.value){
          this.props.dispatch(addTimeclock(    
                vendor.value,
                model.value,
                wholesale.value,
                retailPrice.value,
                description.value
                             ))
          }
          form.reset()
        }}
      >
        <input ref={ n => vendor = n } placeholder="Vendor" />
        <br />
        <input ref={ n => model = n } placeholder="Model" />
        <input ref={ n => wholesale = n }  placeholder="Wholesale" />
        <input ref={ n => retailPrice = n } placeholder="Retail Price" />
        <input ref={ n => description = n } placeholder="Description" />

        <button className="btn">Save</button>
      </form>
      <ul>
          { this.displayTimeclocks() }
      </ul>
    </div>
  )
}
}

const mapStateToProps = (state, props) => {
  return { timeclocks: state.timeclocks }
}

// MSTP - grabs state out of store, pass in as a prop

export default withRouter(connect(mapStateToProps)(TimeclockForm));