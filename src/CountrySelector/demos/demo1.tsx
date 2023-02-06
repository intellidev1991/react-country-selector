/**
 * @title CountrySelector
 * @description Demo 1
 * @order 1
 */

import React, { useState } from 'react'
import { COUNTRIES, CountrySelector, ISelectMenuOption } from '@intellidev/react-country-selector'

const Demo1 = () => {
  const myRef = React.createRef<HTMLDivElement>()
  const [isOpen, setIsOpen] = useState(false)
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState<ISelectMenuOption>()

  return (
    <CountrySelector
      ref={myRef}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={(val) => setCountry(val)}
      selectedValue={country}
    />
  )
}

export default Demo1
