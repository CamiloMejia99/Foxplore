import {createTheme} from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            light: '#e8e8e8'
        },
        secondary: {
            main: "#FFFFFF",
        },
        info: {
            main: "#fff",
        },
        success: {
            main: "rgba(159,159,159,0.5)"
        }

    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                    paddingBottom: 10
                }
            },
            defaultProps: {
                variant: "contained",
                color: "primary"
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: 'filled'
            },

        }, MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 2,
                    backgroundColor: '#fff'
                }
            }
        }, MuiButtonBase: {
            styleOverrides: {
                root: {
                    transition: 'all .4s ease-in-out',
                    borderRadius: 10,
                }
            }
        }, MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 12
                }
            }
        }
        , MuiIconButton: {
            styleOverrides: {
                root: {
                    transition: 'all .2s ease-in-out',
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#000000"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 20,
                    fontWeight: 600
                }
            }
        }

    }


})
