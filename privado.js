(function () {
  const paginasLivres = ["acesso.html"];
  const paginaAtual = location.pathname.split("/").pop() || "index.html";

  if (paginasLivres.includes(paginaAtual)) return;

  const acessoLiberado = sessionStorage.getItem("adeilda_cliente_ok") === "sim";

  if (!acessoLiberado) {
    const destino = encodeURIComponent(location.pathname + location.search);
    location.replace("acesso.html?next=" + destino);
  }
})();