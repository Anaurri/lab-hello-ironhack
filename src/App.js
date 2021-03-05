import './App.css';


const elements = [
  {
    image: "/images/icon1.png",
    title: "Declarative",
    description: "React makes it painless to create interactive UIS."
  },
  {
    image: "/images/icon2.png",
    title: "Components",
    description: "Build encapsulated components that manage their state"
  },
  {
    image: "/images/icon3.png",
    title: "Single-Way",
    description: "A set of immutable values are passed to the components"
  },
  {
    image: "/images/icon4.png",
    title: "JSX",
    description: "Statically typed, designed to run on modern browsers."
  }
]
function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
        <div className="container">
          <img className="navbar-brand" src="/images/ironhack-logo.svg" alt="logo" />
          <img src="/images/menu-top.svg" alt="logo" />
        </div>
      </nav>
      <header className="App-header container">
        <h1 classNmae="text-lg fw-bold mb-2">Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular fronted library, and become a super Ninja developer.</p>
        <button className="btn btn-outline-success">Awesome!</button>
      </header>
      <section>
      <div className="card-group row">
        {elements.map(element =>
            <div className="card col-4">
              <img className="card-img-top" size="20%" src={element.image} alt="Card image cap" />
              <h6 className="App-h6">{element.title}</h6>
              <p>{element.description}</p>
            </div>
        )}
          </div>
      </section>
    </div>
  );
}

export default App;
