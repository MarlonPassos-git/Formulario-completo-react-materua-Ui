import { Button, Container, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./styles.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function App() {
  const [userDados, setUserDados] = useState({});

  const cssContainer = `
    border: 1px solid black;
    padding:  0;
  `;

  function handleUserDados({ target }) {
    const name = target.name;
    const valor = target.value;

    setUserDados({ ...userDados, [name]: valor });
  }

  return (
    <Container
      maxWidth="md"
      sx={cssContainer}
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(userDados);
      }}
    >
      <Box component="fieldset" sx={{ borderRadius: 1, border: 1 }}>
        <Typography variant="subtitle1" fontWeight="700" component="legend">
          Dados de login
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="userName"
          name="userName"
          autoComplete="nickname"
          value={userDados.userName}
          onChange={handleUserDados}
        />
        <TextField
          fullWidth
          margin="normal"
          label="email"
          value={userDados.email}
          onChange={handleUserDados}
          name="email"
          autoComplete="email"
          type="email"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirmar email"
          onChange={handleUserDados}
          autoComplete="email"
          type="email"
        />
      </Box>
      <Box component="fieldset" sx={{ borderRadius: 1, border: 1 }}>
        <Typography variant="subtitle1" fontWeight="700" component="legend">
          Dados do usuario
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Nome"
          name="nome"
          autoComplete="given-name"
          value={userDados.nome}
          onChange={handleUserDados}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Sobrenome"
          value={userDados.sobrenome}
          onChange={handleUserDados}
          name="sobrenome"
          autoComplete="family-name"
        />
        <TextField
          fullWidth
          margin="normal"
          label="email"
          value={userDados.email}
          onChange={handleUserDados}
          name="email"
          autoComplete="email"
          type="email"
        />
      </Box>
      <Button
        sx={{ margin: "10px auto" }}
        variant="outlined"
        endIcon={<SendOutlinedIcon />}
        type="submit"
        size="large"
      >
        Enviar dados{" "}
      </Button>
    </Container>
  );
}
