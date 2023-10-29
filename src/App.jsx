import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import Modal from './Modal';
import SearchIcon from './icons/SearchIcon';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (str) => {
    fetch(`http://[::1]:3000?term=${str}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
    console.log(user.name);
  };

  useEffect(() => {
    handleSearch(search);
  }, []);

  return (
    <div className="wrapper">
      {modalOpen && selectedUser && <Modal user={selectedUser} close={() => setModalOpen(false)} />}
      <form className="searchInput" onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChangeInput} />
        <SearchIcon onClick={() => handleSearch(search)} />
      </form>
      {users &&
        users.map((user, i) => (
          <UserCard key={i} user={user} onClick={() => handleCardClick(user)} />
        ))}
    </div>
  );
};

export default App;
