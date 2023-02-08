import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import api from '../api'
import SearchStatus from "./searchStatus"
import User from "./user"

const Users = () => {
    const [users,setUsers] = useState(api.users.fetchAll())

    const handleChangeBookmarkStatus = (id) => {
      const newArrayBookmakChange = [...users]
      let bookmarkcheck = newArrayBookmakChange.find(user => user._id === id)
      bookmarkcheck.bookmark = bookmarkcheck.bookmark ? false : true
      newArrayBookmakChange.bookmark = bookmarkcheck.bookmark
      setUsers(newArrayBookmakChange)
      
    }

    const handeDelet = (id) => {
        setUsers(prevState=>prevState.filter(user=>user._id !== id))
    }
    
    return (
    <>
    
      <SearchStatus user={users}/>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Имя </th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            
       {users.length !== 0 ? users.map(user => (
          <User user={user} handeDelet={handeDelet} handleChangeBookmarkStatus={handleChangeBookmarkStatus}/>
        )) :

          <div className="badge m-10 bg-warning">Что-то ни кто не хочет тусить</div>
        }
        </tbody>
      </table>
    </>
    )
}


export default Users