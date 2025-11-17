window.Cadastro = () => `
  <section class="hero hero-cadastro">
    <div class="container">
      <h1>Cadastre-se</h1>
      <p>Participe como voluntário ou doador.</p>
    </div>
  </section>

  <main class="container mt-24">
    <section id="cadastro" role="region" aria-label="Formulário de cadastro">
      <h2>Formulário de Cadastro</h2>

      <form id="form-cadastro" novalidate>
        <div class="grid mt-16">

          <div class="col-6">
            <label for="nome">Nome completo</label>
            <input id="nome" name="nome" required placeholder="Seu nome completo">
          </div>

          <div class="col-6">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" required placeholder="seu@exemplo.com">
          </div>

          <div class="col-4">
            <label for="cpf">CPF</label>
            <input id="cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
          </div>

          <div class="col-4">
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" required placeholder="(00) 00000-0000" maxlength="15">
          </div>

          <div class="col-4">
            <label for="data_nasc">Data de nascimento</label>
            <input id="data_nasc" name="data_nasc" type="date" required>
          </div>

          <div class="col-8">
            <label for="endereco">Endereço</label>
            <input id="endereco" name="endereco" required placeholder="Rua, número, complemento">
          </div>

          <div class="col-4">
            <label for="cep">CEP</label>
            <input id="cep" name="cep" required placeholder="00000-000">
          </div>

          <div class="col-6">
            <label for="cidade">Cidade</label>
            <input id="cidade" name="cidade" required>
          </div>

          <div class="col-6">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" required>
              <option value="">Selecione</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>

        </div>

        <div class="mt-16">
          <label for="area">Área de interesse</label>
          <select id="area" name="area" required>
            <option value="">Selecione</option>
            <option value="educacao">Educação</option>
            <option value="saude">Saúde</option>
            <option value="sustentabilidade">Sustentabilidade</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div class="mt-16">
          <label for="mensagem">Mensagem (opcional)</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte-nos sobre sua motivação"></textarea>
        </div>

        <div class="mt-24 text-center">
          <button class="btn" type="submit">Enviar Cadastro</button>
        </div>

      </form>
    </section>
  </main>

  <div class="modal-backdrop" role="dialog" aria-hidden="true">
    <div class="modal">
      <h3>Recebemos!</h3>
      <p>Seu cadastro foi recebido com sucesso.</p>
      <div style="text-align:right;margin-top:12px"><button data-modal-close class="btn">Fechar</button></div>
    </div>
  </div>
`;
