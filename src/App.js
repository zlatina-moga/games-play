import { useState, createElement } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGames from './components/GameCatalog/CatalogGames';
import CreateGame from './components/CreateGame';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage'
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';

function App() {
    const [page, setPage] = useState('/home')

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <CatalogGames />,
        '/create-game': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />
    }

    const navigationChangeHandler = (path) => {
        setPage(path)
    }

  return (
    <div id="box">
        <Header 
            navigationChangeHandler={navigationChangeHandler}
        />

        <main id="main-content">
            {routes[page] || <ErrorPage />}
        </main>

    </div>
  );
}

export default App;
