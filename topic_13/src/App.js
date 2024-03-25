import React, { useRef } from "react";
import useSWR from "swr";
import "./App.css";

const todosEndpoint = "http://localhost:3500/todos";

function App() {
    const [title, setTitle] = React.useState('');
    // const [data, setData] = React.useState([]);
    const inputRef = useRef(null);
    const fetcher = async () => {
        try {
            console.log('revalidateIfStale');
            const response = await fetch(todosEndpoint);
            const data = await response.json();
            // setData(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    // const fetcherCallback = useCallback(fetcher, []);

    const { data, error, isLoading, mutate } = useSWR(todosEndpoint, fetcher, {
        revalidateOnFocus: false, // cập nhật lại khi focus vào trang đó
        revalidateIfStale: true, // cập nhật lại khi dữ liệu cũ 
    });

    // useEffect(() => {
    //     fetcherCallback();
    // }, [])

    const addTodo = async () => {
        try {
            const response = await fetch(todosEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: title, description: 'Description', done: false }),
            });
            const newData = await response.json();
            mutate([...data, newData], false)
            setTitle('');
            inputRef.current.focus();
        } catch (err) {
            console.log(err);
        }
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <div className="container">
            <div>
                {data?.map((todo, index) => {
                    return (
                        <div key={index}>
                            <h1>{todo.title}</h1>
                        </div>
                    );
                })}
            </div>

            <div className="add-todo">
                <input ref={inputRef} className="input" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={addTodo} className="btn btnAdd">Add new todo</button>
            </div>
        </div>
    );
}

export default App;
