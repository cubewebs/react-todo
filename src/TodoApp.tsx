import { useState } from "react"
import { AccentButton } from "./components/atoms/accent-btn"
import { BorderedButton } from "./components/atoms/bordered-btn"
import { ToggleSwitch } from "./components/atoms/toggle-switch"

export const TodoApp = () => {
    const [checked, setChecked] = useState(false)
    
  return (
    <>
      <h1>Todo App</h1>
      <div>
        <div>
            <AccentButton type={'button'} children={'Add'} />
        </div>
        <div>
            <BorderedButton type={'button'} children={'Add'} />
        </div>
        <div>
            <ToggleSwitch checked={checked} onChange={setChecked} />
        </div>
      </div>
    </>
  )
}

export default TodoApp
