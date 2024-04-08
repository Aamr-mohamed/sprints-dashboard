import React from "react";
import Select from "react-select";
import { useCountries } from "use-react-countries";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "#D1D5DB",
    minHeight: "48px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#9CA3AF",
    },
  }),
  
};

export default function CountriesSelect({ field, form, ...props }) {
  const { countries } = useCountries();

  const options = countries.map(({ name, flags }) => ({
    value: name,
    label: name,
    icon: flags.svg,
  }));

  const CustomOption = ({ innerProps, data }) => (
    <div
      {...innerProps}
      className="flex items-center gap-[10px] hover:bg-[#EBF4FF] pl-4 pb-1"
    >
      <img
        src={data.icon}
        alt=""
        className="h-5 w-5 rounded-full object-cover"
      />
      {data.label}
    </div>
  );

  const handleChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
  };

  return (
    <Select
      {...field}
      {...props}
      options={options}
      styles={customStyles}
      components={{ Option: CustomOption }}
      onChange={handleChange}
      value={options.find((option) => option.value === field.value)}
    />
  );
}
