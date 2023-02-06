import { ISelectMenuOption } from './ISelectMenuOption'

export interface ICountrySelectorProps {
  /**
   * open state of show/hide the country selector menu
    @defaultValue false
   */
  open: boolean
  /**
    * Toggle the open state of the country selector menu
    @defaultValue () => {}
    */
  onToggle: () => void
  /**
    * Callback function to be called when a country is selected
    @defaultValue (value: ISelectMenuOption) => {}
    */
  onChange: (value: ISelectMenuOption) => void
  /**
    * The selected country object
    @defaultValue null
    */
  selectedValue: ISelectMenuOption | null | undefined
}
