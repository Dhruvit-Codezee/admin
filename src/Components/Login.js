'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from 'next/navigation';

const validationSchema = Yup.object({
    email: Yup.string()
        .required('Email Address is required')
        .min(3, 'Email Address must be at least 3 characters'),
    password: Yup.string()
        .required('Password is required'),
});


export default function Login() {

    const searchParams = useSearchParams();

    const callBackUrl = searchParams.get("callbackUrl");

    const router = useRouter();


    const [error, setError] = useState("");

    const onSubmit = async (values) => {

        const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
            callbackUrl: "/",
        });


        if (result?.error) {
            setError("Incorrect credentials");
        } else if (result?.ok) {
            if (callBackUrl) {
                router.push(callBackUrl);
            } else {
                router.push("/");
            }
        }
    }



    const { touched, errors, values, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });

    return (
        <Box className="flex items-center justify-center h-screen bg-gray-100">
            <Paper elevation={3} className="p-8 w-96">
                <Typography variant="h5" component="h1" className="font-bold mb-4">
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    {error && <Alert severity="error">Incorrect credentials</Alert>}

                    <Box className="mb-4">
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            name='email'
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                    </Box>

                    <Box className="mb-4">
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            name='password'
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
