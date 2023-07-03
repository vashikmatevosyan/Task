import React, {useEffect, useState} from 'react';
import _ from "lodash";
import {deleteUserData, setListData, updateUserData} from "./store/actions/user";
import {connect} from "react-redux";

function App(props) {


    const [value, setValue] = useState('')
    const [id, setId] = useState('')
    const [flag, setFlag] = useState(false)
    const [userName, setUserName] = useState('')
    let {listData} = props
    const handleAdd = () => {
        const data = {
            name: value,
            id: _.uniqueId(),
            status: 'pending',
        }
        props.setListData(data);
        setValue('')
    }

    const handleDelete = (id) => {
        const data = listData.filter(user => {
            return user.id !== id
        })
        props.deleteUserData(data)
    }
    const inputOpen = (id) => {
        if (flag){
            setUserName('')
        }
        setId(id)
        setFlag(true)
    }
    const handleUpdate = (userName, id) => {
        listData.map((user) => {
            if (id === user.id) {
                user.name = userName;
            }
        })
        props.updateUserData(listData)
        setFlag(false)
        setUserName('')
    }


    return (
        <div>
            <div>
                <input value={value} type="text"
                       onChange={(ev) => setValue(ev.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            {listData.map(user => (
                <ul key={user.id}>
                    <li>
                        {user.name}
                    </li>
                    <button onClick={() => handleDelete(user.id)}>delete</button>
                    <button onClick={() => inputOpen(user.id)}>update</button>
                    {user.id === id && flag ? (
                        <>
                            <input value={userName} type={'text'} onChange={(ev) => setUserName(ev.target.value)}/>
                            <button onClick={() => handleUpdate(userName, user.id)}>Done</button>
                        </>
                    ) : null}
                </ul>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    listData: state.listData
})

const mapDispatchToProps = {
    deleteUserData,
    setListData,
    updateUserData
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Container;
