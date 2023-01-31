import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import api from '../api'

const Users = () => {
    const [users,setUsers] = useState(api.users.fetchAll())
    const titleBGColor = users.length !== 0 ? 'bg-primary p-2' : "bg-danger p-2" 
    console.log(users)
    const handeDelet = (id) => {
        setUsers(prevState=>prevState.filter(user=>user._id !== id))
    }
    
    return (
    <>
    
      <h1 className={titleBGColor}>{users.length} тусанет с тобой сегодня </h1>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Имя </th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            
       {users.length !== 0 ? users.map(user => (
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <th>{user.qualities.map(qual => (
                    <span className={"badge bg-" + qual.color + " m-2 p-2"}>{qual.name}</span>
                ))}</th>
                <th>{user.profession.name}</th>
                <th>{user.completedMeetings}</th>
                <th>{user.rate}</th>
                <th>
                 <button onClick={() => handeDelet(user._id)}  className="btn btn-danger">DELETE</button>
                </th>
            </tr>
        )) :

          <div className="badge m-10 bg-warning">Что-то ни кто не хочет тусить</div>
        }
        </tbody>
      </table>
    </>
    )
}


export default Users