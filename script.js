// ============================================================
// Faber-Castell — catálogo
// Para editar: troque o número do WhatsApp e a lista de produtos abaixo.
// ============================================================

const WHATSAPP = "5500000000000"; // DDI + DDD + número, só dígitos

const CATEGORIAS = [
  { id: "cor", nome: "Lápis de Cor", icone: "lapiscor", fundo: "#EAF1EC" },
  { id: "grafite", nome: "Grafite e Desenho", icone: "grafite", fundo: "#EDEBE6" },
  { id: "canetas", nome: "Canetas", icone: "fineliner", fundo: "#E8EEF5" },
  { id: "arte", nome: "Marcadores e Arte", icone: "marcador", fundo: "#F6ECE4" },
  { id: "escolar", nome: "Escolar", icone: "estojo", fundo: "#F3EFDC" },
];

const PRODUTOS = [
  { id: 1, cat: "cor", tipo: "lapiscor", nome: "Lápis de Cor Ecolápis", desc: "Cores vivas, ponta resistente e madeira de reflorestamento. Caixas de 12, 24 ou 48 cores.", preco: 32.9, de: 39.9, opcoes: { nome: "Caixa", lista: ["12 cores", "24 cores", "48 cores"] }, selo: "Mais vendido" },
  { id: 2, cat: "cor", tipo: "aquarela", nome: "Lápis Aquarelável 36 Cores", desc: "Pinte a seco ou passe pincel com água e transforme em aquarela. Acompanha pincel.", preco: 69.9 },
  { id: 3, cat: "cor", tipo: "lapiscor7", nome: "Lápis de Cor Supersoft 50 Cores", desc: "Traço macio e cobertura intensa, ideal para colorir livros e fazer degradês.", preco: 119.9, selo: "Novidade" },
  { id: 4, cat: "cor", tipo: "pastel", nome: "Lápis de Cor Tons Pastel 12 Cores", desc: "Paleta suave para lettering, bullet journal e ilustração delicada.", preco: 29.9 },
  { id: 5, cat: "grafite", tipo: "grafite", nome: "Lápis Grafite Nº 2 HB · Kit com 12", desc: "O clássico da escola e do escritório. Escrita firme e apagamento fácil.", preco: 18.9, opcoes: { nome: "Dureza", lista: ["HB", "2B", "B"] } },
  { id: 6, cat: "grafite", tipo: "kitgrafite", nome: "Kit Desenho Artístico 6 Graduações", desc: "Do 2H ao 8B para esboço, sombra e acabamento. Com borracha e apontador.", preco: 42.9 },
  { id: 7, cat: "grafite", tipo: "lapiseira", nome: "Lapiseira Técnica 0,7 mm", desc: "Corpo emborrachado, clipe de metal e borracha na ponta. Grafite incluso.", preco: 24.9, opcoes: { nome: "Ponta", lista: ["0,5 mm", "0,7 mm", "0,9 mm"] } },
  { id: 8, cat: "canetas", tipo: "esfero", nome: "Caneta Esferográfica Trilux · 10 un.", desc: "Escrita suave e sem borrões. Caixa com 10 canetas.", preco: 21.9, opcoes: { nome: "Cor", lista: ["Azul", "Preta", "Vermelha"] } },
  { id: 9, cat: "canetas", tipo: "fineliner", nome: "Caneta Fineliner 0,4 mm · 10 Cores", desc: "Ponta fina e precisa para anotações, mapas mentais e desenhos.", preco: 54.9, selo: "Favorita" },
  { id: 10, cat: "canetas", tipo: "esfero", nome: "Caneta Gel Retrátil · 6 Cores", desc: "Tinta gel de secagem rápida e grip confortável para escrever por horas.", preco: 36.9 },
  { id: 11, cat: "arte", tipo: "marcador", nome: "Marca-Texto Tons Pastel · 6 Cores", desc: "Destaque sem manchar o papel. Ponta chanfrada para traço fino ou grosso.", preco: 34.9 },
  { id: 12, cat: "arte", tipo: "hidrocor", nome: "Canetinha Hidrográfica 24 Cores", desc: "Tinta lavável à base de água, segura para as crianças.", preco: 27.9, opcoes: { nome: "Caixa", lista: ["12 cores", "24 cores"] } },
  { id: 13, cat: "arte", tipo: "giz", nome: "Giz de Cera Gigante 12 Cores", desc: "Formato grosso, fácil de segurar. Perfeito para os primeiros rabiscos.", preco: 15.9 },
  { id: 14, cat: "escolar", tipo: "estojo", nome: "Estojo Completo Volta às Aulas", desc: "Lápis de cor, grafite, borracha, apontador e régua num estojo com zíper.", preco: 89.9, de: 109.9, selo: "Kit" },
  { id: 15, cat: "escolar", tipo: "borracha", nome: "Borracha Dust-Free · 3 un.", desc: "Apaga sem deixar resíduos nem rasgar o papel.", preco: 9.9 },
  { id: 16, cat: "escolar", tipo: "apontador", nome: "Apontador com Depósito Duplo", desc: "Dois tamanhos de furo, lâmina de aço e depósito que não deixa cair a sujeira.", preco: 12.9, opcoes: { nome: "Cor", lista: ["Verde", "Azul", "Rosa"] } },
];

// ---------- ilustrações em SVG (sem imagens externas) ----------
const CORES = ["#C8102E", "#F28C28", "#F6C445", "#3E9B4F", "#1F6FB2", "#6A3D9A", "#8B5A2B", "#E5739C"];

function lapis(x, y, ang, cor, comp = 150, corpo) {
  const c = corpo || cor;
  return `<g transform="translate(${x} ${y}) rotate(${ang})">
    <rect x="-7" y="0" width="14" height="${comp}" rx="1.5" fill="${c}"/>
    <rect x="-7" y="0" width="4" height="${comp}" fill="#fff" opacity=".18"/>
    <rect x="-7" y="${comp - 4}" width="14" height="6" fill="#C9C2B3"/>
    <path d="M-7 0 L0 -26 L7 0 Z" fill="#E8C9A0"/>
    <path d="M-2.6 -16 L0 -26 L2.6 -16 Z" fill="${cor}"/>
  </g>`;
}
const svg = (conteudo) => `<svg viewBox="0 0 200 200" aria-hidden="true">${conteudo}</svg>`;

const ICONES = {
  lapiscor: svg([0, 1, 2, 3, 4].map((i) => lapis(64 + i * 18, 52 + Math.abs(i - 2) * 8, 0, CORES[i + 1], 120)).join("")),
  lapiscor7: svg([0, 1, 2, 3, 4, 5, 6].map((i) => lapis(46 + i * 18, 50 + Math.abs(i - 3) * 7, 0, CORES[i], 120)).join("")),
  pastel: svg(["#F7B7C5", "#FBD5A5", "#FFF0A8", "#B9E4C9", "#AFCFEF"].map((c, i) => lapis(64 + i * 18, 52 + Math.abs(i - 2) * 8, 0, c, 120)).join("")),
  aquarela: svg([0, 1, 2, 3].map((i) => lapis(70 + i * 20, 50, 0, CORES[i + 4] || CORES[i], 110)).join("") +
    '<path d="M150 118c10 13 14 20 14 26a14 14 0 0 1-28 0c0-6 4-13 14-26z" fill="#4AA3DF" opacity=".85"/><circle cx="145" cy="146" r="4" fill="#fff" opacity=".6"/>'),
  grafite: svg([-14, 0, 14].map((a) => `<g transform="rotate(${a} 100 175)">${lapis(100, 48, 0, "#2b2b2b", 120, "#0B3D2E")}<rect x="-3" y="60" width="6" height="40" rx="3" fill="#B8955A" transform="translate(100 48)"/></g>`).join("")),
  kitgrafite: svg([0, 1, 2, 3, 4, 5].map((i) => lapis(55 + i * 18, 50, 0, "#2b2b2b", 118, "#0B3D2E")).join("")),
  lapiseira: svg('<g transform="rotate(35 100 100)"><rect x="92" y="30" width="16" height="130" rx="6" fill="#0B3D2E"/><rect x="92" y="80" width="16" height="44" rx="4" fill="#1d1d1d"/><rect x="96" y="22" width="8" height="12" rx="2" fill="#C9C2B3"/><path d="M92 160h16l-6 16h-4z" fill="#B8B2A6"/><rect x="99" y="176" width="2" height="8" fill="#333"/><rect x="104" y="36" width="3" height="40" rx="1.5" fill="#C9C2B3"/></g>'),
  esfero: svg([0, 1, 2].map((i) => `<g transform="rotate(${-12 + i * 12} 100 170)"><rect x="93" y="40" width="14" height="118" rx="7" fill="${["#1F6FB2", "#222", "#C8102E"][i]}"/><rect x="95" y="60" width="10" height="80" rx="5" fill="#fff" opacity=".25"/><path d="M93 158h14l-5 14h-4z" fill="#C9C2B3"/><rect x="104" y="44" width="4" height="34" rx="2" fill="#DAD3C2"/></g>`).join("")),
  fineliner: svg([0, 1, 2, 3, 4].map((i) => `<g transform="translate(${58 + i * 21} 40)"><rect x="-6" y="0" width="12" height="96" rx="3" fill="#F4F1EA" stroke="#D8D1C2"/><rect x="-6" y="0" width="12" height="26" rx="3" fill="${CORES[[0, 4, 3, 5, 1][i]]}"/><path d="M-6 96h12l-4 14h-4z" fill="#8a8a8a"/><rect x="-1" y="110" width="2" height="8" fill="${CORES[[0, 4, 3, 5, 1][i]]}"/></g>`).join("")),
  marcador: svg([0, 1, 2].map((i) => `<g transform="rotate(${-18 + i * 18} 100 175)"><rect x="86" y="44" width="28" height="104" rx="9" fill="${["#F6C445", "#E5739C", "#7FD1AE"][i]}"/><rect x="86" y="44" width="28" height="30" rx="9" fill="#fff" opacity=".35"/><path d="M90 148h20l-4 18h-12z" fill="${["#E3AE22", "#C9547D", "#4FB98C"][i]}"/></g>`).join("")),
  hidrocor: svg([0, 1, 2, 3, 4, 5].map((i) => `<g transform="translate(${50 + i * 20} 44)"><rect x="-7" y="0" width="14" height="104" rx="7" fill="${CORES[i]}"/><rect x="-5" y="6" width="4" height="90" rx="2" fill="#fff" opacity=".3"/><path d="M-5 104h10l-3 12h-4z" fill="${CORES[i]}" opacity=".8"/></g>`).join("")),
  giz: svg([0, 1, 2, 3].map((i) => `<g transform="translate(${62 + i * 25} ${58 + (i % 2) * 10})"><rect x="-10" y="0" width="20" height="90" rx="4" fill="${CORES[[0, 2, 4, 3][i]]}"/><rect x="-10" y="20" width="20" height="40" fill="#fff" opacity=".85"/><path d="M-10 0 Q0 -18 10 0 Z" fill="${CORES[[0, 2, 4, 3][i]]}"/></g>`).join("")),
  estojo: svg('<rect x="32" y="70" width="136" height="80" rx="18" fill="#0B3D2E"/><path d="M40 86h120" stroke="#B8955A" stroke-width="4" stroke-dasharray="6 5"/><rect x="92" y="78" width="16" height="16" rx="4" fill="#B8955A"/>' + [0, 1, 2, 3].map((i) => lapis(60 + i * 18, 48, 0, CORES[i + 1], 26)).join("")),
  borracha: svg('<g transform="rotate(-14 100 100)"><rect x="46" y="72" width="108" height="56" rx="10" fill="#F4F1EA" stroke="#D8D1C2" stroke-width="2"/><rect x="46" y="72" width="54" height="56" rx="10" fill="#0B3D2E"/><rect x="88" y="72" width="12" height="56" fill="#0B3D2E"/><text x="74" y="106" text-anchor="middle" font-family="Georgia" font-size="13" fill="#E9DFC5">FC</text></g>'),
  apontador: svg('<rect x="52" y="64" width="96" height="78" rx="14" fill="#3E9B4F"/><rect x="52" y="64" width="96" height="24" rx="12" fill="#fff" opacity=".22"/><circle cx="82" cy="104" r="14" fill="#14402F"/><circle cx="120" cy="104" r="10" fill="#14402F"/><rect x="70" y="122" width="62" height="6" rx="3" fill="#C9C2B3"/>'),
};

// ---------- utilidades ----------
const $ = (s, el = document) => el.querySelector(s);
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const cat = (id) => CATEGORIAS.find((c) => c.id === id);
const arte = (p) => ICONES[p.tipo] || ICONES[cat(p.cat).icone];
const linkWhats = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const normaliza = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

document.documentElement.classList.add("js");
$("#ano").textContent = new Date().getFullYear();
document.querySelectorAll("[data-whats]").forEach((a) => (a.href = linkWhats(a.dataset.whats)));

// leque de lápis do topo
$("#leque").innerHTML = CORES.map((cor, i) => `<g transform="rotate(${-56 + i * 16} 210 330)">${lapis(210, 120, 0, cor, 210)}</g>`).join("") +
  '<circle cx="210" cy="330" r="38" fill="#0B3D2E"/><circle cx="210" cy="330" r="38" fill="none" stroke="#B8955A" stroke-width="2"/>' +
  '<text x="210" y="338" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="22" font-weight="600" fill="#E9DFC5">FC</text>';

// ---------- categorias e filtros ----------
let filtroAtual = "todos";
let termo = "";

$("#catGrade").innerHTML = CATEGORIAS.map(
  (c) => `<button class="cat-card" data-cat="${c.id}"><span class="cat-icone" style="background:${c.fundo}">${ICONES[c.icone]}</span>${c.nome}</button>`
).join("");

$("#filtros").innerHTML = [{ id: "todos", nome: "Todos" }, ...CATEGORIAS]
  .map((c) => `<button class="filtro" role="tab" data-filtro="${c.id}" aria-selected="${c.id === "todos"}">${c.nome}</button>`)
  .join("");

function escolheFiltro(id) {
  filtroAtual = id;
  document.querySelectorAll(".filtro").forEach((b) => b.setAttribute("aria-selected", b.dataset.filtro === id));
  renderProdutos();
}
$("#filtros").addEventListener("click", (e) => { const b = e.target.closest(".filtro"); if (b) escolheFiltro(b.dataset.filtro); });
$("#catGrade").addEventListener("click", (e) => {
  const b = e.target.closest(".cat-card"); if (!b) return;
  escolheFiltro(b.dataset.cat);
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});
$("#busca").addEventListener("input", (e) => { termo = normaliza(e.target.value.trim()); renderProdutos(); });

// ---------- lista de produtos ----------
function renderProdutos() {
  const lista = PRODUTOS.filter((p) =>
    (filtroAtual === "todos" || p.cat === filtroAtual) &&
    (!termo || normaliza(p.nome + " " + p.desc).includes(termo))
  );
  $("#produtos").innerHTML = lista.map((p) => {
    const c = cat(p.cat);
    return `<article class="produto">
      <button class="produto-arte" style="background:${c.fundo}" data-ver="${p.id}" aria-label="Ver detalhes de ${p.nome}">
        ${p.selo ? `<span class="etiqueta">${p.selo}</span>` : ""}${arte(p)}
      </button>
      <div class="produto-info">
        <span class="produto-cat">${c.nome}</span>
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="produto-rodape">
          <span class="preco">${p.de ? `<s>${brl(p.de)}</s>` : ""}${brl(p.preco)}</span>
          <button class="btn-add" data-add="${p.id}" aria-label="Adicionar ${p.nome}">Adicionar</button>
        </div>
      </div>
    </article>`;
  }).join("");
  $("#semResultado").hidden = lista.length > 0;
}
$("#produtos").addEventListener("click", (e) => {
  const ver = e.target.closest("[data-ver]");
  const add = e.target.closest("[data-add]");
  if (ver) abreModal(+ver.dataset.ver);
  if (add) {
    const p = PRODUTOS.find((x) => x.id === +add.dataset.add);
    if (p.opcoes) abreModal(p.id); else adiciona(p, null, 1);
  }
});
renderProdutos();

// ---------- carrinho ----------
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem("faber-carrinho")) || []; } catch { carrinho = []; }
carrinho = carrinho.filter((i) => PRODUTOS.some((p) => p.id === i.id));
const salva = () => { try { localStorage.setItem("faber-carrinho", JSON.stringify(carrinho)); } catch {} };

function adiciona(p, opcao, qtd) {
  const chave = p.id + "|" + (opcao || "");
  const existe = carrinho.find((i) => i.chave === chave);
  if (existe) existe.qtd += qtd;
  else carrinho.push({ chave, id: p.id, opcao, qtd });
  salva(); renderCarrinho(true);
  avisa(`${p.nome} no carrinho ✏️`);
}

function renderCarrinho(pulo) {
  const total = carrinho.reduce((s, i) => s + PRODUTOS.find((p) => p.id === i.id).preco * i.qtd, 0);
  const qtdTotal = carrinho.reduce((s, i) => s + i.qtd, 0);
  const cont = $("#contador");
  cont.textContent = qtdTotal;
  if (pulo) { cont.classList.remove("pulo"); void cont.offsetWidth; cont.classList.add("pulo"); }
  $("#itens").innerHTML = carrinho.map((i) => {
    const p = PRODUTOS.find((x) => x.id === i.id); const c = cat(p.cat);
    return `<li class="item">
      <span class="item-arte" style="background:${c.fundo}">${arte(p)}</span>
      <div><div class="item-nome">${p.nome}</div>${i.opcao ? `<div class="item-op">${p.opcoes.nome}: ${i.opcao}</div>` : ""}
        <div class="qtd"><button data-menos="${i.chave}" aria-label="Diminuir">−</button><output>${i.qtd}</output><button data-mais="${i.chave}" aria-label="Aumentar">+</button></div>
      </div>
      <span class="item-preco">${brl(p.preco * i.qtd)}</span>
    </li>`;
  }).join("");
  $("#total").textContent = brl(total);
  $("#carrinhoVazio").hidden = carrinho.length > 0;
  $("#finalizar").disabled = carrinho.length === 0;
}
$("#itens").addEventListener("click", (e) => {
  const m = e.target.closest("[data-mais]"), n = e.target.closest("[data-menos]");
  const chave = (m || n)?.dataset.mais || (m || n)?.dataset.menos;
  if (!chave) return;
  const it = carrinho.find((i) => i.chave === chave);
  it.qtd += m ? 1 : -1;
  if (it.qtd <= 0) carrinho = carrinho.filter((i) => i !== it);
  salva(); renderCarrinho();
});
$("#finalizar").addEventListener("click", () => {
  let total = 0;
  const linhas = carrinho.map((i) => {
    const p = PRODUTOS.find((x) => x.id === i.id); total += p.preco * i.qtd;
    return `• ${i.qtd}x ${p.nome}${i.opcao ? ` (${i.opcao})` : ""}: ${brl(p.preco * i.qtd)}`;
  });
  const msg = `Olá, Faber-Castell! Quero fazer este pedido:\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}\n\nNome:\nEntrega ou retirada:`;
  window.open(linkWhats(msg), "_blank", "noopener");
});
renderCarrinho();

// gaveta
const gaveta = $("#gaveta"), sob = $("#sobreposicao");
function abreGaveta() { gaveta.classList.add("aberta"); gaveta.setAttribute("aria-hidden", "false"); sob.hidden = false; $("#fecharCarrinho").focus(); }
function fechaGaveta() { gaveta.classList.remove("aberta"); gaveta.setAttribute("aria-hidden", "true"); sob.hidden = true; }
$("#abrirCarrinho").addEventListener("click", abreGaveta);
$("#fecharCarrinho").addEventListener("click", fechaGaveta);
sob.addEventListener("click", fechaGaveta);

// ---------- modal do produto ----------
const modal = $("#modal");
let produtoModal = null, qtdModal = 1;
function abreModal(id) {
  const p = PRODUTOS.find((x) => x.id === id), c = cat(p.cat);
  produtoModal = p; qtdModal = 1;
  $("#modalArte").style.background = c.fundo;
  $("#modalArte").innerHTML = arte(p);
  $("#modalCat").textContent = c.nome;
  $("#modalNome").textContent = p.nome;
  $("#modalDesc").textContent = p.desc;
  $("#modalOpcoes").innerHTML = p.opcoes
    ? `<fieldset class="opcoes"><legend>${p.opcoes.nome}</legend>${p.opcoes.lista.map((o, k) => `<label><input type="radio" name="opcao" value="${o}" ${k === 0 ? "checked" : ""}><span>${o}</span></label>`).join("")}</fieldset>`
    : "";
  atualizaModal();
  modal.hidden = false;
  $("#fecharModal").focus();
}
function atualizaModal() { $("#qtd").textContent = qtdModal; $("#modalPreco").textContent = brl(produtoModal.preco * qtdModal); }
const fechaModal = () => { modal.hidden = true; };
$("#mais").addEventListener("click", () => { qtdModal++; atualizaModal(); });
$("#menos").addEventListener("click", () => { if (qtdModal > 1) qtdModal--; atualizaModal(); });
$("#fecharModal").addEventListener("click", fechaModal);
modal.addEventListener("click", (e) => { if (e.target === modal) fechaModal(); });
$("#adicionarModal").addEventListener("click", () => {
  const op = modal.querySelector('input[name="opcao"]:checked');
  adiciona(produtoModal, op ? op.value : null, qtdModal);
  fechaModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { fechaModal(); fechaGaveta(); fechaMenu(); } });

// ---------- menu do celular ----------
const ham = $("#hamburguer"), menu = $("#menu");
function fechaMenu() { menu.classList.remove("aberto"); ham.setAttribute("aria-expanded", "false"); }
ham.addEventListener("click", () => { const ab = menu.classList.toggle("aberto"); ham.setAttribute("aria-expanded", ab); });
menu.addEventListener("click", (e) => { if (e.target.closest("a")) fechaMenu(); });

// ---------- topo com sombra ao rolar ----------
const topo = $("#topo");
addEventListener("scroll", () => topo.classList.toggle("rolado", scrollY > 10), { passive: true });

// ---------- aviso ----------
let tempoAviso;
function avisa(t) { const a = $("#aviso"); a.textContent = t; a.classList.add("mostra"); clearTimeout(tempoAviso); tempoAviso = setTimeout(() => a.classList.remove("mostra"), 2200); }

// ---------- entrada ao rolar ----------
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); } }), { threshold: 0.15 });
  document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));
} else {
  document.querySelectorAll(".revelar").forEach((el) => el.classList.add("visivel"));
}
