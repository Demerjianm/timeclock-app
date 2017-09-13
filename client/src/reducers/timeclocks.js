//action must have a type {type:'DELETE_NOTE', id: ''}


const timeclocks = ( state = [], action ) => {
    switch (action.type) {
      case 'TIMECLOCKS':
        return action.timeclocks
      case 'ADD_TIMECLOCK':
        return [ action.timeclock, ...state ]
      case 'UPDATE_TIMECLOCK':
        return state.map( timeclock => {
          if (timeclock._id === action.timeclock._id)
            return action.timeclock;
          return timeclock;
        })
      case 'DELETE_TIMECLOCK':
        return state.filter( timeclock => timeclock !== action.id )
      default:
        return state;
    }
  }
  
  export default timeclocks;