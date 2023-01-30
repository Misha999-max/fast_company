import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import api from '../api'

const Users = () => {
    const [users,setUsers] = useState(api.users.fetchAll())
    const titleBGColor = users.length !== 0 ? 'bg-primary p-2' : "bg-danger" 
    console.log(users)
    const handeDelet = (id) => {
        setUsers(prevState=>prevState.filter(user=>user._id !== id))
    }
    const renderUserRow = () => {
        return users.length !== 0 ? users.map(user => (
            <tr key={user._id}>
                <th key={user.name} scope="row">{user.name}</th>
                <th key={user.qualities._id}>{user.qualities.map(index => (
                    <span key={index._id} className={"badge bg-" + index.color + " m-2 p-2"}>{index.name}</span>
                ))}</th>
                <th key={user.profession.name}>{user.profession.name}</th>
                <th key={user.completedMeetings}>{user.completedMeetings}</th>
                <th key={user.rate}>{user.rate}</th>
                <th key={user._id}>
                 <button key={Date.now()} onClick={() => handeDelet(user._id)}  className="btn btn-danger">DELETE</button>
                </th>
            </tr>
        )) :

        <div className="badge m-10 bg-warning">Что-то ни кто не хочет тусить</div>
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
            {renderUserRow()}
        </tbody>
      </table>
    </>
    )
}


export default Users