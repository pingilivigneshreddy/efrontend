import { Box, Button, Grid, Typography } from "@mui/material";
import { linkedin_signin } from "assets";
import OrComponent, { handleError } from "components/BasicComponents";
import FormInput from "components/FormFields/FormInput";
import SigninHeader from "layouts/SigninHeader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SigninDefaultValues, SigninSchema } from "validations/signin";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "components/LoadingButton";
import { getusers, signin } from "api/services/signup";
import { useMutation, useQuery } from "react-query";
import { http } from "api/http";
import { useEffect } from "react";

const Signin = () => {

  // const {data} = useQuery(()=> http.get('users'))
const {data} = useQuery(["getusers"],getusers)

useEffect(()=>{
  console.log(data,"get users");
  
},[data])

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: SigninDefaultValues,
    mode: "onChange",
    resolver: yupResolver(SigninSchema),
  });

  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (res: any) => {

      console.log(res?.data,"res.data");
      
      localStorage.setItem("token", res.data.access_token);
      window.location.href = "/dashboard";
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <Box p={3} maxWidth={1500} margin="auto">
      {/* <SigninHeader /> */}
      <Grid mt={8} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box mt={3}>
            <Typography variant="h3" sx={{ color: "#8F5849" }}>
              Welcome to a-zBazar community
            </Typography>
            <Box sx={{ maxWidth: "500px", mt: 3 }}>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <Box>
                  <FormInput
                    control={control}
                    name="username"
                    label="User Name or Email"
                  />
                </Box>
                <Box mt={3}>
                  <FormInput
                    control={control}
                    name="password"
                    label="Password"
                  />
                </Box>
                {/* <Box mt={3}>
                  <Button>Forgot Password</Button>
                </Box> */}
                <Box mt={3}>
                  <LoadingButton
                    loading={isLoading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    title="Sign in"
                  />
                </Box>
              </form>
              <OrComponent />
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate("/signup")}
                >
                  New to a-zBazar? Join now
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <Box>
            <img
              src={linkedin_signin}
              alt="linkedin"
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
