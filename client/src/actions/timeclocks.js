//GET ALL notes

export const getTimeclocks = () => {
    //return(dispatch){} - is called redux thunk
    //anytime we have a async action(in action file) like fetch, and we are using dispatch, we need a THUNK
    // returns the dispatch
    return(dispatch) => {
      fetch('/api/timeclocks')
        .then( res => res.json() )
        .then( timeclocks => dispatch({ type: 'TIMECLOCKS', timeclocks }))
    }
  
  }
  
  //ADD a note
  //XCOs?XEO? to replace fetch
  export const addTimeclock = ( vendor, model, wholesale, retailPrice, description ) => {
    return(dispatch) => {
      fetch('/api/timeclocks', {
        method: 'POST',
        headers:{
          'ACCEPT': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vendor, model, wholesale, retailPrice, description })
      }).then( res => res.json() )
        .then( timeclock => dispatch({type: 'ADD_TIMECLOCK', timeclock }))
    }
  
  }
  
  // Update a note
  
  export const updateTimeclock = (id, vendor, model, wholesale, retailPrice, description) => {
    return(dispatch) => {
      fetch(`/api/timeclocks/${id}`, {
        method: 'PUT',
        headers:{
          'ACCEPT': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vendor, model, wholesale, retailPrice, description })
      }).then( res => res.json() )
        .then( timeclock => dispatch({type: 'UPDATE_TIMECLOCK', timeclock}));
    }
  
  }
  
  // delete a note
  export const deleteTimeclock = (id, itemToDelete) => {
    return (dispatch) => {
      fetch(`/api/timeclocks/${id}`, {
        method: 'DELETE'
      }).then( () => dispatch({ type: 'DELETE_TIMECLOCK', id }) )
    }
  }
  