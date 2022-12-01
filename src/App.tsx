import React, { useState } from 'react'
import { Select } from './Select'
import { SelectOption } from './Select';

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "Sixth", value: 5 },
  { label: "Seventh", value: 5 },
  { label: "Eighth", value: 5 },
  { label: "Ninth", value: 5 },
  { label: "Tenth", value: 5 },
  { label: "Eleventh", value: 5 },
  { label: "Twelfth", value: 5 },
  { label: "Thirteenth", value: 5 },
  { label: "Fourteenth", value: 5 },
  { label: "Fifteenth", value: 5 },
  { label: "Sixteenth", value: 5 },
]

export default function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
    <div>
      <Select
        multiple
        value={value1}
        onChange={val => setValue1(val)}
        options={options}
      />
      <br />
      <Select
        value={value2}
        onChange={val => setValue2(val)}
        options={options}
      />
    </div>
  )
}
