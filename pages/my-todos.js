import React, { useEffect, useState } from "react";

const mytodos = () => {
    const [myTodos, setmyTodos] = useState([]);

    useEffect(() => {
        let storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setmyTodos(JSON.parse(storedTodos));
        }
    }, []);

    const deleteTodo = (title) => {
        let newmyTodos = myTodos.filter((item) => {
            return item.title !== title;
        });
        localStorage.setItem("todos", JSON.stringify(newmyTodos));
        setmyTodos(newmyTodos);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">YOUR TODOS</h1>
                    </div>

                    {myTodos && myTodos.map((item, index) => (
                        <div className="flex flex-wrap -m-2" key={index}>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">{item.title}</h2>
                                        <p className="text-gray-500">{item.description}</p>
                                        <button className="text-gray-500 cursor-pointer" onClick={() => deleteTodo(item.title)}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default mytodos;
