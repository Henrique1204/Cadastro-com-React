import React from "react";
// Importando componentes da interface.
import Main from "../Main/Main.js";
import Form from "../Form/Form.js";

const baseURL = "http://localhost:3001/users";

const initialState = {
    lista: [],
    user: {
        name: "",
        email: ""
    }
};

const CadastroUsuario = () => {
    const [lista, setLista] = React.useState(initialState.lista);
    const [user, setUser] = React.useState(initialState.user);
    const [submit, setSubmit] = React.useState(null);

    const limpar = () => setUser(initialState.user);

    const atualizarCampos = ({ target }) => setUser((user) => ({
        ...user,
        [target.name]: target.value
    }));

    const salvar = async () => {
        const method = (user?.id) ? "PUT" : "POST";
        const url = (user?.id) ? `${baseURL}/${user.id}` : baseURL;

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const json = await res.json();

        setLista((lista) => {
            const listaNova = lista.filter((item) => item.id !== json.id );
            listaNova.unshift(json);

            limpar();
            return listaNova;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submit === "salvar") {
            salvar();
            setSubmit(null);
        }
    }

    return (
        <Main
            icon="users"
            titulo="Usuários"
            subtitulo="Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
        >
            <Form
                handleSubmit={handleSubmit}
                value={user}
                setValue={atualizarCampos}
                setSubmit={setSubmit}
            />
        </Main>
    );
};

export default CadastroUsuario;
