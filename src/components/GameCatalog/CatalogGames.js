import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameService from '../services/gameService'

export default function CatalogGames({navigationChangeHandler}) {
    const [games, setGames] = useState([])
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
                {games.length > 0
                    ? games.map(game => <GameCard  navigationChangeHandler={navigationChangeHandler} key={game._id} game={game} />)
                    : <h3 className="no-articles">No articles yet</h3>
                }
        </section>
    )
}