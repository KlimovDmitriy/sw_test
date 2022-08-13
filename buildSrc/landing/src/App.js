import Button from 'react-bootstrap/Button';

function App() {
  return (
      <>
        <header>

        </header>
        <nav>
          <ul>
            <li><a href="#">Эмуляция установки</a></li>
            <li><a href="#">Эмуляция оплаты</a></li>
          </ul>
        </nav>
        <main>
          <form action="/">
            <input type="text" name="price" />
            <Button type="submit">Оплатить</Button>
          </form>
        </main>
        <footer>
          Климов Дмитрий для Scorewarrior
        </footer>
      </>
  )
}

export default App;
