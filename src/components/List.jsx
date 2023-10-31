/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';
import CompletedItem from './CompletedItem';
import Label from './Label';    
import AlertLabel from './AlertLabel';

const List = ({todolist,setTodoList,completedList,setCompletedList}) =>{
    const Items = 
        todolist.length!=0 ? 
        todolist.map((item, index) => (
            <Item
            item={item}
            key={index}
            todolist={todolist}
            setTodoList={setTodoList}
            completedList={completedList}
            setCompletedList={setCompletedList}
            index={index}
        />
        )) : <AlertLabel value="No tasks to display" />;
    const CompletedItems =
        completedList.length!=0 ?
        completedList.map((item,index) => (
        <CompletedItem 
            item={item} 
            key={index}    
            completedList={completedList} 
            setCompletedList={setCompletedList} 
            index={index} />
        )):<AlertLabel value="No tasks to display" />;
    return (
      <React.Fragment>
        <Label value="Tasks" />
        {Items}
        <br />
        <Label value="Completed" />
        {CompletedItems}
      </React.Fragment>
    );
}
export default List;