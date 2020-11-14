import React, { useState } from 'react'

import Task from '../../components/Task/index'
import ItemsList from '../../components/ItemsList/index'
import Store from '../../store/index'
import './styles.scss'

const MainPage = () => {
    const [todo, setTodo] = useState('')
    const store = new Store('Storage')

    const onSubmitInput = (event) => {
        event.preventDefault()

        const newItem = {
            id: new Date().getTime(),
            value: todo,
            checkbox: false,
        }

        if (todo.trim() !== '') {
            store.sync([newItem])
            setTodo('')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodo(event.target.value)
    }

    let storeIsNull
    if (store.getStore()) {
        storeIsNull = (
            <ItemsList
                className={'todoApp__itemlist'}
                items={store.getStore()}
            />
        )
    } else {
        storeIsNull = null
    }

    return (
        <>
            <h1>Todo list</h1>
            <div className={'todoApp'}>
                <div className="task__wrapper">
                    <Task
                        className={'task__input'}
                        onSubmitInput={onSubmitInput}
                        handleSubmit={handleSubmit}
                        value={todo}
                    />

                    {storeIsNull}

                    <div>
                        <i>filters wil be here</i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
