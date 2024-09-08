const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats/>
    </div>
  );
};

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackagingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em>
        You have {} items on your list, and you already packed {}
      </em>
    </footer>
  );
}

export default App;
