import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-doe-tambem',
  imports: [],
  templateUrl: './doe-tambem.component.html',
  styleUrl: './doe-tambem.component.css'
})
export class DoeTambemComponent implements AfterViewInit {

  imagemBase64: string = ''; // Vai armazenar a imagem convertida
  
  // Este método do Angular é executado quando a *view* (a parte HTML do componente) já foi totalmente carregada.
  ngAfterViewInit(): void {
    const botao = document.getElementById('btn-cadastrar');
    const inputFoto = document.getElementById('fotos') as HTMLInputElement;

    // Leitor de imagem quando o usuário seleciona o arquivo
    inputFoto?.addEventListener('change', () => {
      const file = inputFoto.files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.imagemBase64 = reader.result as string; // Salva a imagem base64 na variável
        };

        reader.readAsDataURL(file); // Lê a imagem como Data URL
      }
    });
    // Se o botão foi encontrado (evita erro caso não exista no DOM)
    if (botao) {

      // Adiciona um ouvinte de evento para quando o botão for clicado
      botao.addEventListener('click', () => {

        // Armazenamento dos campos
        const nome = (document.getElementById("nome") as HTMLInputElement)?.value.trim();
        const categoria = (document.getElementById("categoria") as HTMLSelectElement)?.value;
        const descricao = (document.getElementById("descricao") as HTMLTextAreaElement)?.value.trim();
        const quantidade = (document.getElementById("quantidade") as HTMLInputElement)?.value;
        const conservacao = (document.getElementById("conservacao") as HTMLSelectElement)?.value;
        const entrega = (document.getElementById("entrega") as HTMLSelectElement)?.value;
        const disponibilidade = (document.getElementById("disponibilidade") as HTMLInputElement)?.value.trim();
        const validade = (document.getElementById("validade") as HTMLInputElement)?.value;

        // Valida se algum dos campos obrigatórios está vazio ou não selecionado
        if (
          !nome || categoria === "Selecione" || !descricao ||
          !quantidade || conservacao === "Selecione" ||
          entrega === "Selecione" || !disponibilidade || !validade
        ) {
          alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
          return;
        }

        // Cria um objeto com os dados do item preenchido
        const novoItem = {
          nome,
          categoria,
          descricao,
          quantidade,
          conservacao,
          entrega,
          disponibilidade,
          validade,
          imagem: this.imagemBase64 || '/DoeFacil.jpeg' // Se não tiver imagem, usa padrão
        };

        // Busca os itens já salvos no localStorage (se houver)
        const itensExistentes = JSON.parse(localStorage.getItem('itens') || '[]');

        // Adiciona o novo item à lista existente
        itensExistentes.push(novoItem);

        // Salva a lista atualizada no localStorage
        localStorage.setItem('itens', JSON.stringify(itensExistentes));

        // Limpa os campos do formulário após salvar
        (document.getElementById("nome") as HTMLInputElement).value = "";
        (document.getElementById("categoria") as HTMLSelectElement).value = "Selecione";
        (document.getElementById("descricao") as HTMLTextAreaElement).value = "";
        (document.getElementById("quantidade") as HTMLInputElement).value = "";
        (document.getElementById("conservacao") as HTMLSelectElement).value = "Selecione";
        (document.getElementById("entrega") as HTMLSelectElement).value = "Selecione";
        (document.getElementById("disponibilidade") as HTMLInputElement).value = "";
        (document.getElementById("validade") as HTMLInputElement).value = "";
        inputFoto.value = "";
        this.imagemBase64 = "";

        // Se passou por todas as validações, exibe mensagem de sucesso
        alert("Seu item foi enviado, aguarde análise.");
      });
    }
  }
}
