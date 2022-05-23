import React, { useEffect, useState } from "react";
import { getApiData } from '../api/api-react';
import { OItems } from "./ListItem";
import { UItems } from "./user-list";


const getData = () => {
    const [dataApi, setDataApi] = useState('');
    const [showUserList, setShowUserList] = useState(true)
    const [listRequest, setListRequest] = useState('users')

    useEffect(() => {
        try {
            getApiData(listRequest).then(r => setDataApi(r));
        } catch (error) {
            console.log(error)
        }
    }, [listRequest])

    
    const orderList = () => {
        setListRequest('users')
        setShowUserList(true)
        
    }
    const usersList = () => {
        setListRequest('orders')
        setShowUserList(false)
        
    }

    return (
        <div>
            <button onClick={()=> {orderList()}}>Users</button>
            <button onClick={()=> {usersList()}}>Order</button>

            {showUserList ? <UserList {...dataApi}/> : <OrderList {...dataApi} />}
        </div>
    )
}


export {getData}