import React from 'react';
import { fakeUserData } from '../APIs/fakeAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, clearUsers } from '../store/slices/UserSlice'; // Assuming this is the correct import path

export default function UserDetails() {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.warn("Payload ==> ", payload);
        dispatch(addUser(payload)); // Uncomment this line to dispatch the addUser action
    }

    // Display User
    const userDsiplay = useSelector((state) => state.users);

    return (
        <>
            <div className="container-fluid">
                <div className="card bg-dark mt-5 p-5">
                    <div className="card-body">
                        <h3 className='text-info'>Manage Users</h3>
                        <div className="row my-3">
                            <div className="col-md-6 d-flex flex-nowrap align-items-center gap-2">
                                <button className='btn btn-info text-white rounded-0 text-nowrap' onClick={() => addNewUser(fakeUserData())}>ADD NEW</button>
                                <button className='btn btn-warning text-white rounded-0 text-nowrap' onClick={() => dispatch(clearUsers())}>REMOVE ALL</button>
                            </div>
                        </div>


                        <div className='row'>
                            {
                                userDsiplay.map((item, index) => {
                                    const isEven = index % 2 === 0;

                                    return (
                                        <div className={`${isEven ? 'text-white' : 'text-info'} col-md-6 border m-1 d-flex flex-nowrap align-items-center`} key={item}>{item} <button className='ms-auto btn btn-sm btn-danger rounded-0' onClick={() => dispatch(removeUser(index))}>Delete</button></div>
                                    )
                                })

                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
