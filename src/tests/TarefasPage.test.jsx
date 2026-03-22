import { render, screen, fireEvent, within } from "@testing-library/react";
import TarefasPage from "../pages/TarefasPage";

test("deve atualizar o status corretamente dentro do item", () => {
  render(<TarefasPage />);
  
  // Pega o primeiro item da lista (li)
  const itens = screen.getAllByRole("listitem");
  const primeiroItem = itens[0];

  // Busca o botão dentro desse item específico
  const botao = within(primeiroItem).getByText("Atualizar");
  fireEvent.click(botao);

  // Verifica se o status mudou para "Em andamento" apenas dentro desse item
  expect(within(primeiroItem).getByText("Em andamento")).toBeInTheDocument();
});