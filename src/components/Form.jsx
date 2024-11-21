import { useState } from "react";

function Form() {
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const form = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Assunto:', assunto);
        console.log('Mensagem:', mensagem);
    };

    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <h2>Fale conosco!</h2>
                </div>
                <div className="form-body">
                    <form onSubmit={form}>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="assunto">Assunto</label>
                            <input
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                                id="assunto"
                                name="assunto"
                                type="text"
                                required
                                autoComplete="current-assunto"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                id="mensagem"
                                name="mensagem"
                                required
                            />
                        </div>

                        <div className="form-button">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
