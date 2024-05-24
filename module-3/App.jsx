import React from 'react';

const ListView = () => {
  const items = ['Use Array.map', 'not a for loop', 'give each iteam a unique key','Avoied using array index as the key'];

  return (
    <div style={{textAlign: 'center', background: 'yellow', width: '500px',aligncontent:'center', margin: 'auto' }}>
      <h3>the "React way" of render a list </h3>
      <ul style={{padding:'20px'}}>
        {items.map((item, index) => (
          <p key={index} style={{background:'white'}}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
