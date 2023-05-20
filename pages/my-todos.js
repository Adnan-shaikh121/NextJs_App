import React, { useEffect, useState } from 'react';
import { supabase } from '@/supabase';

const MyTodos = () => {
    const [myTodos, setMyTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const { data, error } = await supabase
                    .from('todos')
                    .select('*');

                if (error) {
                    console.error('Error fetching todos:', error.message);
                } else {
                    setMyTodos(data);
                }
            } catch (error) {
                console.error('Error fetching todos:', error.message);
            }
        };

        fetchTodos();
    }, []);

    const deleteTodo = async (title) => {
        try {
            const { data, error } = await supabase
                .from('todos')
                .delete()
                .eq('title', title);

            if (error) {
                console.error('Error deleting todo:', error.message);
            } else {
                // Remove the deleted todo from the local state
                const updatedTodos = myTodos.filter((todo) => todo.title !== title);
                setMyTodos(updatedTodos);
            }
        } catch (error) {
            console.error('Error deleting todo:', error.message);
        }
    };


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">YOUR TODOS</h1>
                    </div>

                    {myTodos &&
                        myTodos.map((item, index) => (
                            <div className="flex flex-wrap -m-2" key={index}>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">{item.title}</h2>
                                            <p className="text-gray-500">{item.description}</p>
                                            <button className="text-gray-500 cursor-pointer" onClick={() => deleteTodo(item.title)}>
                                                DELETE
                                            </button>
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

export default MyTodos;
