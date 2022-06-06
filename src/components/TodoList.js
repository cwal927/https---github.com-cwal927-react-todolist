import React,{useState} from 'react';
import './TodoList.css';


function TotoList(){

    const [List,setList] = useState([]);
    const [nextId, setNextId] = useState(List.length+1);
    const [inputText,setInputText] = useState('');
    const addInputTextEvent = () => {
        const newStrMap = List.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setList(newStrMap);
        setInputText('');
    }

    const inputChangeEvent = (e) => {
        setInputText(e.target.value);
    }

    const deleteListEvent = (id) => {
        const newStrMap = List.filter(str=>str.id!==id);
        setList(newStrMap);
    }

    /*체크 하면 style 주기*/
    const checkHandler = ({target}) => {
        checkedItemHandler(target.parentNode, target.value,target.checked);
    }

    const checkedItemHandler = (box,id,isChecked) => {
        if(isChecked){
            box.style.textDecoration="line-through";
            box.style.color="gray";
        }else {
            box.style.textDecoration="none";
            box.style.color="black";
        }
    }

    const mapList = List.map(item =>
                                <li key={item.id}> 
                                    <input type="checkbox" key={item.id} onChange={checkHandler}/>
                                    <label for={item.id}><span></span>{item.text} </label> 
                                    <button onClick={()=>deleteListEvent(item.id)}>삭제</button>
                                </li>)
    return(
        <div>
            <input className="todoListInput" type='text' id='contents' name='contents' placeholder="할일을 입력해 주세요." value={inputText} onChange={inputChangeEvent}></input>
            <button value="" className="todoListButton" onClick={addInputTextEvent}>+</button>
            <ul>
                {mapList}
            </ul>
        </div>
    )
}


export default TotoList;