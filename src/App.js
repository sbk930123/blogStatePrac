/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const post = 'ReactBlog';

  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [월, 월변경] = useState([2, 2, 2]);
  let [일, 일변경] = useState([17, 17, 17]);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=> {
        let 글제목정렬 = [...글제목].sort();
        글제목변경(글제목정렬);
      }}>가나다순 정렬</button>

      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글제목변경</button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>  
      </div>
      <div className='list'>
        <h4 onClick={() => {setModal(e => !e);}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={(e) => {
                e.stopPropagation();
                setModal(true);
                setTitle(i);
              }}>{글제목[i]} <span className='like' onClick={(e)=> {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i]++
                따봉변경(copy);
              }}> 👍 </span>{따봉[i]}</h4>
              <p>{월[i]}월 {일[i]}일 발행 <button onClick={()=> {
                let copy = [...글제목]
                copy.splice(i, 1);
                글제목변경(copy);
                let 따봉copy = [...따봉]
                따봉copy.splice(i, 1);
                따봉변경(따봉copy);
              }}>삭제버튼</button></p>
            </div>
          );
        })
      }

      <input onChange={(e)=> {
        입력값변경(e.target.value);
      }}></input><button onClick={() => {
        입력값 == '' ? alert('글을입력하세요') : (() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          let 따봉copy = [...따봉];
          따봉copy.unshift(0);
          따봉변경(따봉copy);
          글제목변경(copy);
          let 월copy = [...월];
          월copy.unshift(month);
          월변경(월copy);
          let 일copy = [...일];
          일copy.unshift(day);
          일변경(일copy);
        })();
      }}>글발행</button>

      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }
      
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {/* 하단 버튼을 누르면 첫번째 글 제목이 여자코트 추천으로 변경된다. */}
        <button>글제목변경</button>
      </div>
    </div>
  );
}

// 교육 항목 20230326

export default App;
