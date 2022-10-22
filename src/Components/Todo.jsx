import React from 'react'
import { useState } from 'react'
import todoimg from '../images/todoimg.jpg'
import './todo.css'
const Todo = () => {
    const [inputdata, setinputdata] = useState('');
    let inputHandler = (e)=>{
        setinputdata(e.target.value);
    }
    const [saveData, setSaveData] = useState([]);
    let addItem = ()=>{
        if(!inputdata){
            alert('Field is empty')
        }else {
            setSaveData([...saveData, inputdata]);
            setinputdata('');
        }
        
    }
    let classupdate ={
        
    }
    let removeItem = (id)=>{
        setSaveData((prevData)=>{
            return prevData.filter((arrayElem, index)=>{
                return !index == id
            })
        });
    }
    let [getid, setid] = useState('');
    let [show, setShow] = useState(false);
    let editItem=(value,id)=>{
        setinputdata(value);
        setid(id);
        setShow(true);
        
    }
    let updateItem = ()=>{
        if(!inputdata){
            alert('Please edit first !');
        }else{
            saveData[getid]= inputdata; 
            setinputdata('');
            setShow(false);    
        }
        
    }
    
    let removeAll=()=>{
        setSaveData([]);
    }
    
  return (
    <React.Fragment>
    <div className='main-div'>
    <div className='child-div'>
    <figure>
      <img src={todoimg} width= '90' alt="image" />
      <figcaption>Add your list here ✌️</figcaption>
    </figure>
    <div className='addItems'>
        <input type="text" placeholder='✍️ Add items...' value={inputdata} onChange={inputHandler}  />
        {
            show && inputdata ? <i className='fa fa-solid fa-pen-to-square' onClick={updateItem} style={{marginRight: '-16px'}}></i>: <i className="fa fa-solid fa-plus add-btn" onClick={addItem}  title='Add Item'></i>
        }
        
        
        
    </div>
    
            {
                saveData.map((itemValue, index)=>{
                    return (
                    <React.Fragment>
                    <div className='showItems' key={index}>
                    <div className='eachItem'>
                    <h3>{itemValue}</h3>
                    <div className='d-flex'>
                    <i class="fa color  marginN fa-solid fa-pen" onClick={()=> editItem(itemValue,index)}></i>
                    <i className="fa color fa-solid fa-trash-can" onClick={()=>removeItem(index)} title='Remove Item'></i>
                    </div>
                    
                    </div>
                    </div>
                    </React.Fragment>
                    )
                })
            }
            
      
    <div className='showItems'>
        <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}><span> CHECK LIST </span></button>
    </div>

    </div>
    </div>
    </React.Fragment>
  )
}

export default Todo