import './AdminPage.css'
// import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


function AdminPage() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ email: '', password: '', role: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/getUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/deleteUsers/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(`http://localhost:8080/api/editUsers/${editingUser._id}`, editingUser);
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleAddUser = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/addUsers', newUser);
            setUsers([...users, response.data]);
            setNewUser({ email: '', password: '', role: '' });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };




    return (
        <main>
            <div className="container">
            <div>
            <h2 className='title-admin'>Управление пользователями</h2>
            <div className="form-section">
                <h3>Добавить нового пользователя</h3>
                <input
                    type="email"
                    placeholder="Почта"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Пароль"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Роль"
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                />
                <button onClick={handleAddUser}>Добавить пользователя</button>
            </div>

            <div className='users-section' >
                <h3>Список пользователей</h3>
                <ul className="users-list">
                    {users.map(user => (
                        <li key={user._id}>
                            <p className='users-list__info'> Почта: {user.email} </p>
                            <p className='users-list__info'>  Пароль: {user.password} </p>
                            <p className='users-list__info'>  Роль: {user.role} </p>
                              
                            <button className="edit-btn" onClick={() => handleEdit(user)}>Изменить</button>
                         <button onClick={() => handleDelete(user._id)}>Удалить</button>
                         
                        </li>
                         
                    ))}
                   
                </ul>
            </div>
            <br />
            {editingUser && (
                <div className='form-editing'>
                    <h3>Изменить пользователя</h3>
                    <input
                        type="email"
                        placeholder="Почта"
                        className='editing-change'
                        size={60}
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Пароль"
                        className='editing-change'
                        size={60}
                        value={editingUser.password}
                        onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Роль"
                        className='editing-change'
                        size={60}
                        value={editingUser.role}
                        onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                    />
                    <button className='edit-change__btn' onClick={handleSaveEdit}>Сохранить</button>
                    <br />
                    <br />
                </div>
            )}
        </div>
            </div>
        </main>
    )
}

export default AdminPage;