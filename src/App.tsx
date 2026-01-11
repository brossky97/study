import React, { useState, type ChangeEvent } from 'react'

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  age: '',
  agreed: false,
}
type DefaultValuesProps = typeof DEFAULT_VALUES

export function App() {
  const [inputs, setInputs] = useState<DefaultValuesProps>(DEFAULT_VALUES)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prev) => ({ ...prev, [name]: value }))
  }
  const handleNumericInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    const formatedValue = value.replace(/[^0-9]/g, '').replace(/^0+/, '')
    setInputs((prev) => ({ ...prev, [name]: formatedValue }))
  }
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.checked
    setInputs((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = () => {
    console.log(inputs)
  }
  const handleInputClear = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: keyof DefaultValuesProps,
  ) => {
    e.preventDefault()
    switch (key) {
      case 'firstName':
      case 'lastName':
      case 'age':
        setInputs((prev) => ({ ...prev, [key]: '' }))
        break
      default:
        break
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputs.firstName ?? ''}
          onChange={handleInputChange}
        />
        <button onClick={(e) => handleInputClear(e, 'firstName')}>Clear</button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputs.lastName ?? ''}
          onChange={handleInputChange}
        />
        <button onClick={(e) => handleInputClear(e, 'lastName')}>Clear</button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          placeholder="Age"
          name="age"
          value={inputs.age ?? ''}
          onChange={handleNumericInputChange}
        />
        <button onClick={(e) => handleInputClear(e, 'age')}>Clear</button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="checkbox"
          name="agreed"
          checked={inputs.agreed ?? false}
          onChange={handleCheckboxChange}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}
