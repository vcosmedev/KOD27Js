import UserItem from '../../Components/UserItem';

const UsersListPage = ({ usersList }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <h2>Users List</h2>
                <ul className='list-group'>
                    {usersList.map((user) => {
                        // const { name, login, picture } = user;
                        return <UserItem userData={user} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default UsersListPage;
