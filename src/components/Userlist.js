import React, { useEffect, useState } from 'react'

const Userlist = () => {

    const[users, setUsers] = useState([])


    const getUserData = async() =>{
        let result = await fetch("http://localhost:5000/users-list")
        result = await result.json()
        setUsers(result)
     
    }

    // deleting record on the basis of select id / or the id where use click
const deleteRecord = async(id) =>{
    console.log(id)
    let result = await fetch(`http://localhost:5000/users-list/${id}`,{
        method: 'delete'
    })
    result = await result.json()    

    if(result){
        getUserData()
    }


}


    useEffect(()=>{
        getUserData()
    },[])


  return (
    <div>
      <h3 className='my-4 text-center text-success'>--USERS LISTS--</h3>
      <div className='container'>
      <table class="table">
            <thead>
                <tr className='bg-primary text-light'>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((ele, i)=>{
                    return(
                        <tr>
                        <th scope="row">{i+1}</th>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.password}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.address}</td>
                        <td>
                            <a className='btn btn-success btn-sm me-2'>                                
                                <i class="fas fa-edit"></i>     

                            </a>
                            <a onClick={()=>deleteRecord(ele._id)} className='btn btn-danger btn-sm'>
                                <i class="fa-solid fa-trash"></i>                                
                            </a>
                        </td>
                    </tr>
                    )
                })
               }

            </tbody>
    </table>
      </div>
    </div>
  )
}

export default Userlist
