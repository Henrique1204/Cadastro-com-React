import React from "react";

const Tabela = ({ lista, carregar, remover }) => {
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {lista.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button
                                className="btn btn-warning text-white"
                                onClick={() => carregar(user)}
                            >
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger mx-2" onClick={() => remover(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabela;
