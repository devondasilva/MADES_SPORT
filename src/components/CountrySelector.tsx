import { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

type CountrySelectorProps = {
  onChange: (country: { label: string; value: string } | null) => void;
};

function CountrySelector({ onChange }: CountrySelectorProps) {
  const [value, setValue] = useState<{ label: string; value: string } | null>(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selected: { label: string; value: string } | null) => {
    setValue(selected);
    onChange(selected); // Notifie le parent du changement
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      placeholder="Sélectionnez un pays"
    />
  );
}

export default CountrySelector;
