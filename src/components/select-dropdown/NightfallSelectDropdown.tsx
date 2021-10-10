import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export default function NightfallSelectDropdown({
  id,
  data,
  label,
  variant,
  value,
  changeHandler,
}: NightfallSelectDropdownProps): JSX.Element {
  const selectId = `${id}-select`;
  const labelId = `${id}-label`;

  return (
    <FormControl variant={variant} fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        variant={variant}
        label={label}
        labelId={labelId}
        id={selectId}
        value={value}
        onChange={(
          e: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
          }>
        ) => {
          changeHandler(e.target.value as string);
        }}
      >
        {data.map((info, index: number) => {
          return (
            <MenuItem key={index} value={info.id} disabled={info.disabled}>
              {info.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export interface NightfallSelectDropdownProps {
  id: string;
  value: string | undefined;
  label: string;
  changeHandler: (value: string) => void;
  data: {
    id: string;
    name: string;
    disabled?: boolean;
  }[];
  variant: 'standard' | 'outlined' | 'filled';
}
