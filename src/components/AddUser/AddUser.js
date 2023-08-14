import './AddUser.css';
import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';

const AddUser = (props) => {

    const [usernameEntered, setUsername] = useState('');
    const [ageEntered, setAge] = useState('');
    const [isError, setError] = useState();

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'username'){
            setUsername(value);
        } else  {
            setAge(value);
        } 
    } 

    const submitHandler = (event) => {
        event.preventDefault();
        if (usernameEntered.trim().length === 0){
            setError({
                title: 'Invalid username',
                message: 'Please enter a valid username'
            });
            return;
        }
        if (ageEntered.trim().length === 0 || +ageEntered < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            });
            return;
        } 
        const userData = {
            id: Math.random().toString(),
            username: usernameEntered,
            age: ageEntered
        };
        props.onSaveUser(userData);
        setUsername('');
        setAge('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {isError && <ErrorModal title={isError.title} message={isError.message} onClick={errorHandler}></ErrorModal>}
            <Card className=''>
                <form onSubmit={submitHandler}>
                    <div className='add-user_control'>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" value={usernameEntered} onChange={(event)=>inputChangeHandler('username',event.target.value)}></input>
                    </div>
                    <div className='add-user_control'>
                        <label htmlFor='age'>Age (Years)</label>
                        <input id="age" type="number" value={ageEntered} onChange={(event)=>inputChangeHandler('age',event.target.value)}></input>
                    </div>
                    <Button type="submit" className="">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
 
export default AddUser;