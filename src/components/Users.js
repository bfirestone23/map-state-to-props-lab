import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    // debugger;
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(u => <li key={u.username}>{u.username} from {u.hometown}</li>)}
          <br></br>
          User Count: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
