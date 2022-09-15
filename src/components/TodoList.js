import React, { useEffect, useState } from 'react';
import { Button, filter, Input, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedUser, setTodos } from "../redux/actions/todoActions"

const TodoList = () => {
    const [search, setSearch] = useState("")

    const todos = useSelector((state) => state.allTodos.todos)
    const dispatch = useDispatch();
    // console.log(todos);

    const fetchTodos = async () => {
        let response = await axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .catch((err) => {
                console.log("Err", err);
            })
        dispatch(setTodos(response.data));
    }

    const viewUserData = async (data) => {
        let response = await axios
            .get(`https://jsonplaceholder.typicode.com/users/${data.id}`)
            .catch((err) => {
                console.log("Err", err);
            })
            dispatch(selectedUser({
                userData: response.data,
                data,
            }));
    }

    useEffect((data) => {
        fetchTodos(data)

    }, [])


    return (
        <div style={{ width: "60rem" }}>
            <div style={{ display: "flex", alignItems: "center", }}>
                <h4 style={{ marginLeft: "2rem", marginRight: '1rem' }}>TODOS</h4>
                <Input type="text" placeholder='Search the todo' size='md' value={search}
                    onChange={(e) => setSearch(e.target.value)} borderRadius="30px" />
                {/* <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                /> */}
            </div>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>TITLE</Th>
                            <Th>STATUS</Th>
                            <Th>ACTION</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            todos.filter((val) => 
                            search === "" ? val 
                            : val.title.toLowerCase().includes(search.toLowerCase())
                            // || val.title.toLowerCase().includes(search.toLowerCase())
                            // || val.status.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((todo) => {
                                return (
                                    <Tr key={todo.id}>
                                        <Td>{todo.id}</Td>
                                        <Td w="10%">{todo.title} (mm)</Td>
                                        <Td>{todo.completed ? "Completed" : "Incomplete"}</Td>
                                        <Td ><Button colorScheme='messenger' variant="outline" onClick={() => viewUserData(todo)}>View User</Button></Td>
                                    </Tr>
                                )
                            })
                        }



                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TodoList