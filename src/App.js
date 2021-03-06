import {useState} from 'react';
import Gugudan from './component/Gugudan';
import WordRelay from './component/WordRelay';
import './App.css';
import NumberBaseball from "./component/NumberBaseball";

function App() {
    let [title, changeTitle] = useState(['1', '2', '3']);
    let [like, changeLike] = useState(0);

    function titleChange() {
        let newArray = [...title];
        newArray[0] = '글제목1 변경';
        changeTitle(newArray);
    }

    function sort() {
        let newArray = [...title];
        newArray.sort((a, b) => {
            return b - a;
        })
        changeTitle(newArray);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>
                    개발 Blog
                </div>
            </div>
            <button onClick={titleChange}>글제목변경</button>
            <button onClick={sort}>순서변경</button>
            <div className="list">
                
                <div>
                    {title[0]}
                </div>
                <span onClick={() => changeLike(like + 1)}>좋아요버튼</span> {like}
            </div>
            <div className="list">
                <div>
                    {title[1]}
                </div>
            </div>
            <div className="list">
                <div>
                    {title[2]}
                </div>
            </div>
            <Gugudan/>
            <WordRelay/>
            <NumberBaseball/>
        </div>
    );
}

export default App;
