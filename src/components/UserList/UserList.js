import './UserList.css';
import Card from '../../UI/Card';

const UserList = (props) => {

    return ( 
        <Card className="">
            {props.onDisplayList.map((userData) => { 
                return (
                    <div className='user' key={+userData.id}>
                        {`${userData.username} (${userData.age} years old)`}
                    </div>

                )
            })}
        </Card>
    );
}
 
export default UserList;