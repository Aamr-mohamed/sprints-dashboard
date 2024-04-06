import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export default function CountriesSelect({ field, form, ...props }) {
	const { countries } = useCountries();

	return (
		<div>
			<Select
				{...field}
				{...props}
				size="lg"
				variant="standard"
				onChange={(value) => form.setFieldValue(field.name, value)}
				value={field.value}
				label="Select Country"
				selected={(element) =>
					element &&
					React.cloneElement(element, {
						disabled: true,
						className:
							"flex items-center opacity-100 px-0 gap-2 pointer-events-none",
					})
				}
			>
				{countries.map(({ name, flags }) => (
					<Option key={name} value={name} className="flex items-center gap-2">
						<img
							src={flags.svg}
							alt={name}
							className="h-5 w-5 rounded-full object-cover"
						/>
						{name}
					</Option>
				))}
			</Select>
		</div>
	);
}

