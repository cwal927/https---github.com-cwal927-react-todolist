import React,{useState} from 'react';
import './TodoList.css';


function TotoList(){

    const [List,setList] = useState([{
        id:0,
        text:'',
        state:true
    }]
    );
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

    const mapList = List.map(item =>
                                <li key={item.id}> 
                                    <input type="checkbox" key={item.id}/>
                                    <label for={item.id}><span></span>{item.text} </label> 
                                    <button onClick={()=>deleteListEvent(item.id)}>삭제</button>
                                </li>)


    return(
        <div className='wrap'>
            <div className='todoListDiv'>
                <div>
                    <h1>일정관리22</h1>
                </div>
                <div>
                    <input className="todoListInput" type='text' id='contents' name='contents' value={inputText} onChange={inputChangeEvent}></input>
                    <button value="" className="todoListButton" onClick={addInputTextEvent}>추가</button>
                </div>
                <div>
                    <ul id='list'>
                        {mapList}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default TotoList;