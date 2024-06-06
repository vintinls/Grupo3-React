
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BuscarPessoa = () => {
  const [id, setId] = useState('');
  const [pessoa, setPessoa] = useState(null);
  const [erro, setErro] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://6660f5bd63e6a0189fe807f3.mockapi.io/usuarios/${id}`);
      setPessoa(response.data);
      setErro(null);
    } catch (error) {
      setErro('Pessoa não encontrada');
      setPessoa(null);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="id">ID da Pessoa</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
      {erro && <p className="text-danger">{erro}</p>}
      {pessoa && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Detalhes da Pessoa</h5>
            <p className="card-text"><strong>Nome:</strong> {pessoa.nome}</p>
            <p className="card-text"><strong>CPF:</strong> {pessoa.cpf}</p>
            <p className="card-text"><strong>Email:</strong> {pessoa.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscarPessoa;
