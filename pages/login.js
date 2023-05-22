import { Inter } from 'next/font/google'
import { useState } from 'react'
import { supabase } from '@/supabase';

export default function Home() {
    const [email, setemail] = useState({ email: "", password: "" })


    const addEmail = async () => {
        try {
            const { data, error } = await supabase
                .from('auth_users')
                .insert([email])
            alert("email Added");

            if (error) {
                console.error('Error adding email:', error.message);
            } else {
                console.log('email added successfully');
            }
        } catch (error) {
            console.error('Error adding email:', error.message);
        }
    };



    const onChange = (e) => {
        setemail({ ...email, [e.target.name]: e.target.value })
        console.log(email)
    }
    return (
        <div className='my-2 text-4xl'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-wrap items-center">

                    <div class=" bg-gray-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium email-font mb-5">Add email</h2>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">EMAIL</label>
                            <input onChange={onChange} value={email.email} type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">PASSWORD</label>
                            <input onChange={onChange} value={email.password} type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-20 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={addEmail} class="text-white bg-indigo-500 border-0 py-2 px-8 w-fit focus:outline-none hover:bg-indigo-600 rounded text-lg">Add email</button>
                        <p class="text-xs text-gray-500 mt-3">your auth_users will add on</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

