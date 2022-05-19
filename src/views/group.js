import React, { useState,useEffect,useLayoutEffect } from 'react';
import axios from 'axios';

export default function GroupData({pname})  {

   const [users, setData] = useState('');
   const [names, setNames] = useState('');

        useLayoutEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/Groups').then((response)=>{  
            setData(response.data);
            })
        },[]);

  const name = [];

        const  GetData = ()=>{
                for (let index = 0; index < users.length; index++) {
                let GroupName = "Group"+index;
                
                users[index][GroupName].forEach(element => {
                    name.push(
                    <tr >
                        <td>{element.first_name+' '+element.last_name}</td>
                        <td>{element.email}</td>
                        <td>Team {index + 1}</td>
                        <td>{element.contact}</td>
                        <td>{element.gender}</td>
                    </tr>
                    );
                });
                
                }

        setNames(name);
        }

    return (
    <div className="App"> 
    <h1>{pname}</h1>
    <button type="button" onClick={GetData}>Get Data</button>
    
        {names}
    </div>
    );
}
