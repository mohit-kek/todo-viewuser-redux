import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const UserDetail = () => {

    const viewUser = useSelector((state) => state.user.user);

    return (
        <div>
            <h3>USER DETAIL</h3>
            <div style={{ display: "grid", gridTemplateRows: "repeat(5,18%)", border: "2px solid #1CACF4", height: "40vh", width: "25rem", padding: "15px", rowGap: "5px" }}>
                <h3>{`Todo ID : ${viewUser?.data.id}`}</h3>
                <h3>{`Todo Title : ${viewUser?.data.title}`}</h3>
                <h3>{`User Id : ${viewUser?.data.userId}`}</h3>
                <h3>{`User Name : ${viewUser?.userData.name}`}</h3>
                <h3>{`Email : ${viewUser?.userData.email} `}</h3>
            </div>
        </div>
    )
}

export default UserDetail