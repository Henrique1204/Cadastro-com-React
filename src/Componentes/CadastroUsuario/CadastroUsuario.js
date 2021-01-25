import React from "react";
// Importando componentes da interface.
import Main from "../Main/Main.js";
import Form from "../Form/Form.js";
import Tabela from "../Tabela/Tabela.js";

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

    const limpar = () => setUser(initialState.user);

    const atualizarCampos = ({ target }) => setUser((user) => ({
        ...user,
        [target.name]: target.value
    }));

    const carregar = (user) => setUser(user);

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

        setLista((lista) => lista.filter((item) => item.id !== json.id)
            .reduce((ant, atual) => [...ant, atual], [json])
        );
        limpar();
    };

    const remover = async (user) => {
        await fetch(`${baseURL}/${user.id}`, { method: "DELETE" });
        setLista((lista) => lista.filter((item) => item.id !== user.id));
    };

    React.useEffect(() => {
        const fetchLista = async () => {
            const res = await fetch(baseURL);
            const json = await res.json();

            if (res.ok !== false) setLista(json);
        }

        fetchLista();
    }, []);

    return (
        <Main
            icon="users"
            titulo="Usuários"
            subtitulo="Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
        >
            <Form value={user} setValue={atualizarCampos} limpar={limpar} submit={salvar} />
            {
                lista?.length !== 0 && <Tabela  lista={lista} carregar={carregar} remover={remover} />
            }
        </Main>
    );
};

export default CadastroUsuario;
