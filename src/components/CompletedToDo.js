import React, { Component } from 'react';
import Checkbox from "@material-ui/core/Checkbox";
class CompletedToDo extends Component {

    state = {
        dataSource : this.props.completedTodo
    }


    removeCompletedTodo = (item,index) => {

        let temp = this.state.dataSource

        temp.splice(index, 1);

        this.setState({ dataSource : temp})

        this.props.addCompletedTodoBack(item)

    }



    showCompletedTodos=()=>{
        return this.state.dataSource.map((item,i)=>{

            return(
                <div style= {{marginTop : 5,padding:10,flexDirection:'row'}}className="card" key = {i}>
                     <Checkbox         
                checked = {false}     
              onChange = {()=>this.removeCompletedTodo(item.item,i)}
            />
                    <button className="btn btn-light" onClick = {()=>this.removeCompletedTodo(item.item,i)} style={{textDecorationLine: 'line-through'}}>{item.item}</button>
                  
                </div>
            )
        })
    }


    render() {
        return (
            <div style={this.props.style}>                
                <p style = {{fontWeight : 'bold'}}>Completed</p>       

                {this.showCompletedTodos()}         
            </div>
        );
    }
}

export default CompletedToDo;