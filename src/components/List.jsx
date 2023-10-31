/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

const List = ({todolist,setTodoList}) =>{
    const Items = todolist.map((item,index)=><Item item={item} todolist={todolist} setTodoList={setTodoList} key={item.id} index={index}/>)
    return(
        <React.Fragment>
            {Items}
        </React.Fragment>
    )
}
export default List;