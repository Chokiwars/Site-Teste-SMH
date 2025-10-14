import React, { useState, useEffect } from "react";

const produtosDisponiveis = [
  { id: "P0001", descricao: "Produto 33218938", preco: 48.708, estoque: true },
  { id: "P0002", descricao: "Produto 28371922", preco: 39.99, estoque: false },
  { id: "P0003", descricao: "Produto 29319320", preco: 90.315, estoque: true },
];

function FormularioPedidos() {
  const [pedidos, setPedidos] = useState(() => {
    // Carrega do localStorage, se existir
    const pedidosSalvos = localStorage.getItem("pedidos");
    return pedidosSalvos
      ? JSON.parse(pedidosSalvos)
      : [{ produto: produtosDisponiveis[0], quantidade: 1 }];
  });

  // Salva automaticamente no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  const adicionarPedido = () => {
    setPedidos([...pedidos, { produto: produtosDisponiveis[0], quantidade: 1 }]);
  };

  const removerPedido = (index) => {
    const novosPedidos = [...pedidos];
    novosPedidos.splice(index, 1);
    setPedidos(novosPedidos);
  };

  const atualizarProduto = (index, idProduto) => {
    const produtoSelecionado = produtosDisponiveis.find((p) => p.id === idProduto);
    if (!produtoSelecionado) return;
    const novosPedidos = [...pedidos];
    novosPedidos[index].produto = produtoSelecionado;
    setPedidos(novosPedidos);
  };

  const atualizarQuantidade = (index, quantidade) => {
    const novosPedidos = [...pedidos];
    novosPedidos[index].quantidade = quantidade;
    setPedidos(novosPedidos);
  };

  // Só contabiliza produtos que estão em estoque
  const valorTotal = pedidos.reduce(
    (total, p) =>
      p.produto.estoque ? total + p.quantidade * p.produto.preco : total,
    0
  );

  // Verifica se há algum produto sem estoque selecionado
  const temProdutoSemEstoque = pedidos.some((p) => !p.produto.estoque);

  const handleEnviar = () => {
    if (temProdutoSemEstoque) {
      alert("Remova os produtos sem estoque antes de enviar o pedido!");
      return;
    }

    // Salva no localStorage (reforço)
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    alert("Pedido enviado com sucesso!");
    console.log("Pedidos salvos:", pedidos);
  };

  return (
    <div className="p-6 bg-gray-200 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-3 text-center">Formulário de Pedidos</h2>

      {pedidos.map((pedido, index) => (
        <div
          key={index}
          className="relative grid grid-cols-3 gap-3 items-center mb-3 bg-gray-100 p-3 rounded-lg"
        >
          <div>
            <select
              value={pedido.produto.id}
              onChange={(e) => atualizarProduto(index, e.target.value)}
              className="p-2 rounded border w-full"
            >
              {produtosDisponiveis.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.id}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="number"
              value={pedido.quantidade}
              min={1}
              onChange={(e) => atualizarQuantidade(index, Number(e.target.value))}
              className="p-2 rounded border w-full"
            />
          </div>

          <div className="text-sm">
            <p>{pedido.produto.descricao}</p>
            <p className="text-gray-600 text-xs">
              LPU: R${pedido.produto.preco.toFixed(2)}{" "}
              {pedido.produto.estoque ? (
                <span className="text-green-600 font-semibold">(Em estoque)</span>
              ) : (
                <span className="text-red-600 font-semibold">(Sem estoque)</span>
              )}
            </p>
          </div>

          {/* Botão de remover fixado no canto */}
          <button
            onClick={() => removerPedido(index)}
            className="absolute right-2 top-2 bg-red-500 text-white rounded-full w-8 h-8 font-bold"
          >
            X
          </button>
        </div>
      ))}

      {/* Botão de adicionar um pedido */}
      <button
        onClick={adicionarPedido}
        className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded-lg mt-2"
      >
        + Adicionar Produto
      </button>

      <div className="bg-white p-3 mt-4 rounded-lg shadow-inner">
        <h3 className="font-semibold text-center">Total</h3>
        <table className="w-full text-sm mt-2">
          <tbody>
            {pedidos.map((p, i) => (
              <tr
                key={i}
                className={p.produto.estoque ? "" : "opacity-50 text-gray-500"}
              >
                <td>{p.produto.id}</td>
                <td className="text-center">{p.quantidade}</td>
                <td>{p.produto.descricao}</td>
                <td className="text-right">
                  {p.produto.estoque
                    ? `R$${(p.quantidade * p.produto.preco).toFixed(2)}`
                    : "Indisponível"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 font-bold text-right">
          Valor Total: R${valorTotal.toFixed(2)}
        </p>
      </div>

      <button
        onClick={handleEnviar}
        disabled={temProdutoSemEstoque}
        className={`mt-4 w-full py-2 rounded-lg font-bold ${
          temProdutoSemEstoque
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        Enviar
      </button>
    </div>
  );
}

export default FormularioPedidos;
