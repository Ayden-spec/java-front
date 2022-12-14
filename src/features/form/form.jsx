import { useMemo } from 'react';
import { useState } from 'react'
import { createData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'

export default function Form() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const memoDisabled = useMemo(() => {
        return (!name || !pass);
    }, [name, pass])

    const handleSubmit = (e) => {
        e.preventDefault();
        createData({
            name: name,
            pass: pass,
        })
    }

    return (
        <form className="container_form" onSubmit={handleSubmit}>
            <Input label='Name' change={(e) => setName(e.value)} />
            <Input label='Password' change={(e) => setPass(e.value)} />
            <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Submit</button>
        </form>
    )
}