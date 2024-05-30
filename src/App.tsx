import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[] | null>();

  useEffect(() => {
    setTodos(["테스트1", "테스트2", "테스트3"]);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>To Do List</h1>
        <div className="input block">
          <input placeholder="할 일을 입력해주세요." />
          <button>추가</button>
        </div>
      </header>
      <section>
        <div className="todo-list">
          {todos?.map((todo) => {
            return (
              <div className="todo-item block">
                <input type="checkbox" />
                <label>{todo}</label>
                <button>제거</button>
              </div>
            );
          })}
        </div>
        <nav className="block">
          <span className="nav-item">0 개</span>
          <div className="nav-item">
            <button>모두</button>
            <button>진행중</button>
            <button>완료</button>
          </div>
          <div className="nav-item">
            <button>완료된 할 일 제거하기</button>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default App;
