import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "'Inter', sans-serif",
		h1: {
			fontFamily: "'Oswald', sans-serif",
		},
		h2: {
			fontFamily: "'Oswald', sans-serif",
		},
		h3: {
			fontFamily: "'Oswald', sans-serif",
		},
		h4: {
			fontFamily: "'Oswald', sans-serif",
		},
		h5: {
			fontFamily: "'Oswald', sans-serif",
		},
		h6: {
			fontFamily: "'Oswald', sans-serif",
		},
	},
	palette: {
		primary: {
			main: "#B3BEC4",
			dark: "#94A2AD",
			light: "#ECEFF1",
		},
		secondary: {
			main: "#00CCFF",
			dark: "#203147",
		},
		background: {
			default: "#F8F8F8",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "50px",
					fontFamily: "'Oswald', sans-serif",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				select: {
					fontFamily: "'Oswald', sans-serif",
				},
				icon: {
					color: "white",
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontFamily: "'Oswald', sans-serif",
					fontWeight: 300,
				},
			},
		},
	},
});

export default theme;
