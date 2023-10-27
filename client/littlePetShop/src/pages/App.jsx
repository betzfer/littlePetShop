import Nav from "../components/nav/nav";
import Card from "../components/cards/cards";
import Container from "../components/container/container";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <div>
        <h2> Bem-vindos a loja , aqui temos todos nossos produtos </h2>
        <h2>
          {" "}
          busque os principais abaixo ou específicos na barra de pesquisa
        </h2>
      </div>
      <Container>
        <div className="saleContainer">
          <Card title={"R"} />
          <Card title={"R"} />
          <Card title={"R"} />
        </div>
      </Container>
    </div>
  );
};

export default App;
