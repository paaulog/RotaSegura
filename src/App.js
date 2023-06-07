import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Monitoramento from "./pages/Monitoramento/Monitoramento";
import Detalhes from "./pages/Detalhes/Detalhes";
import OtimizacaoDeRotas from "./pages/OtimizacaoDeRotas/OtimizacaoDeRotas";
import DetalhesOtimizacao from "./pages/DetalhesOtimizacao/DetalhesOtimizacao";
import SimulacaoDeConsumo from "./pages/SimulacaoDeConsumo/SimulacaoDeConsumo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/monitoramento",
    element: <Monitoramento />,
  },
  {
    path: "/detalhes",
    element: <Detalhes />,
  },
  {
    path: "/otimizacaoderotas",
    element: <OtimizacaoDeRotas />,
  },
  {
    path: "/detalhesotimizacao",
    element: <DetalhesOtimizacao />,
  },
  {
    path: "/simulacaodeconsumo",
    element: <SimulacaoDeConsumo />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
