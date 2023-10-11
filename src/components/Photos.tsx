import React, { useEffect, useState } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 10)));
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
    <div id="photos" style={styles.center}>
      <h2 style={styles.header}>Photos</h2>
      <table style={styles.styledTable}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableData}>ID</th>
            <th style={styles.tableData}>Title</th>
            <th style={styles.tableData}>URL</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id} style={styles.tableRow}>
              <td style={styles.tableData}>{photo.id}</td>
              <td style={styles.tableData}>{photo.title}</td>
              <td style={styles.tableData}>
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                  View Photo
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Photos;
