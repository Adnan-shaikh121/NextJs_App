import { useState } from 'react';
import { supabase } from '../supabase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                console.error('Error logging in:', error.message);
            } else {
                // Login successful
                console.log('Login successful');
                // Redirect or navigate to the desired page
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
