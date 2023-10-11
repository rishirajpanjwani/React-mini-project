import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const styles = {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    },
    header: { color: '#444', textTransform: 'uppercase', fontSize: '36px' },
    styledTable: {
      borderCollapse: 'collapse',
      margin: '25px 0',
      fontSize: '0.9em',
      fontFamily: 'sans-serif',
      minWidth: '400px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
    },
    tableRow: { borderBottom: '1px solid #dddddd' },
    tableHeader: {
      backgroundColor: '#980044',
      color: '#ffffff',
      textAlign: 'left',
    },
    tableData: { padding: '12px 15px' },
  };

  return (
    <div id="users" style={styles.center}>
      <h2 style={styles.header}>Users</h2>
      <table style={styles.styledTable}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableData}>ID</th>
            <th style={styles.tableData}>Name</th>
            <th style={styles.tableData}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={styles.tableRow}>
              <td style={styles.tableData}>{user.id}</td>
              <td style={styles.tableData}>{user.name}</td>
              <td style={styles.tableData}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
