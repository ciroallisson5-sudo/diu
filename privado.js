(function () {
  var paginaAtual = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var paginasLivres = ['acesso.html'];

  if (paginasLivres.indexOf(paginaAtual) !== -1) return;

  var acessoLiberado = sessionStorage.getItem('adeilda_cliente_ok') === 'sim';
  if (acessoLiberado) return;

  var destino = window.location.pathname + window.location.search + window.location.hash;
  if (!destino || destino === '/') destino = '/index.html';

  window.location.replace('/acesso.html?next=' + encodeURIComponent(destino));
})();
