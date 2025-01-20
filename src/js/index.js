


const listaSelecaoPokedevs = document.querySelectorAll (".pokedev");
console.log(listaSelecaoPokedevs);


listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto")

       const pokedevAtivoNaListagem = document.querySelector(".ativo");
       pokedevAtivoNaListagem.classList.remove("ativo");

       const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
       pokedevSelecionadoNaListagem.classList.add("ativo");
       

    })
})

