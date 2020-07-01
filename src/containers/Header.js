import { connect } from 'react-redux'
import Header from '../components/Header'
// import {} from '../actions'

const mapStateToProps = state => {
    
    // console.log(state)
    return ({
    // todosCount: state.todos.length,
    user:state.user
    // completedCount: getCompletedTodoCount(state)
  })}

export default connect(mapStateToProps, {  })(Header)
