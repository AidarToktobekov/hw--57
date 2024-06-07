import { useState } from "react";
import { User } from "../../types";

interface Props{
    onSubmit: (user: User)=>void;
}

const Userform:React.FC<Props> =({onSubmit})=>{

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        activity: false,
        role: 'User',
    })

    const userChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        console.log(e.target.name, e.target.value);
        setNewUser((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const checkboxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.name, e.target.checked);
        setNewUser((prev)=>({
            ...prev,
            [e.target.name]: e.target.checked,
        }))
    }
    


    return(
        <>
            <form>
                <h2>
                  Add new user  
                </h2>
                
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input 
                        required
                        onChange={userChange}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        required
                        onChange={userChange}
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"    
                    />
                </div>
                <div className="form-group mt-2">
                    <input 
                        onChange={checkboxChange}
                        type="checkbox"
                        name="activity"
                        id="activity"
                        className="form-check-input" 
                    />
                    <label className="form-check-label ms-2" >
                        Activity
                    </label>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="role">
                        Role -
                    </label>
                    <select className="ms-2" name="role" id="role" onChange={userChange}>
                        <option value="Adnim">User</option>
                        <option value="User">Adnim</option>
                        <option value="Editor">Editor</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-dark mt-2">Create</button>
            </form>
        </>
    )
}

export default Userform