import React from "react";

const Form = ({ value, setValue, limpar, submit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            value={value["name"]}
                            onChange={setValue}
                            placeholder="Digite o nome..."
                        />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            id="email"
                            value={value["email"]}
                            onChange={setValue}
                            placeholder="Digite o e-mail..."
                        />
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary">Salvar</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={limpar}>Cancelar</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
