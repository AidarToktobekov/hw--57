import { useState } from "react"
import Userform from "./components/User-form/UserForm"
import Users from "./components/Users/Users"
import {User} from "./types"

const App=()=> {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Aidar', email: 'myEmail@gmail.com', activity: true, role: 'Admin'},
    {id: '2', name: 'Dima', email: 'myEmail@gmail.com', activity: false, role: 'Editor'},
  ])

  const addUser =(user: User)=>{
    setUsers(prev => [...prev, user]);
  }

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2 justify-content-center">
          <div className="col-4">
            <Userform onSubmit={addUser}></Userform>
          </div>
          <div className="col-4">
            <Users></Users>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
