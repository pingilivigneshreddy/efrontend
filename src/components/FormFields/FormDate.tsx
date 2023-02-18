import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
interface Props {
  label?: string;
  name: string;
  size?: "small" | "medium";
  control: any;
  minDate?: Date;
}

function FormDate(props: Props) {
  const { name, size = "small", control, label = "", minDate } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <DesktopDatePicker
              label={label}
              minDate={minDate}
              mask="____/__/__"
              inputFormat="yyyy/MM/dd"
              value={field.value}
              onChange={field.onChange}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  size={size}
                  {...params}
                  error={Boolean(error)}
                  onBlur={field.onBlur}
                />
              )}
            />
            {error && (
              <Typography
                variant="caption"
                sx={{ pl: "2px" }}
                color="rgb(211, 47, 47)"
              >
                {error.message}
              </Typography>
            )}
          </>
        )}
      />
    </>
  );
}

export default FormDate;
