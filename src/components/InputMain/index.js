import React, { useState } from 'react'
import InputText from '../InputText/Index'

const InputMain = ({
    className,
    onSubmitInput,
    inputClassName,
    holder,
    onBlur,
}) => {
    const [value, setValue] = useState('')

    const onChangeInput = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const mainSubmit = (event) => {
        event.preventDefault()
        onSubmitInput(value)
        setValue('')
    }

    return (
        <div className={className}>
            <form onSubmit={mainSubmit}>
                <InputText
                    onBlur={onBlur}
                    inputClassName={inputClassName}
                    value={value}
                    holder={holder}
                    onChangeInput={onChangeInput}
                />
            </form>
        </div>
    )
}

export default InputMain
