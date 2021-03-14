import { BaseSyntheticEvent, useState } from 'react'
import Link from 'next/link'

export function Menu() {
    const [page, setPage] = useState('/')

    function changePage(e: BaseSyntheticEvent) {
        setPage(e.target.id)
    }

    return (
        <div className="menuContainer">
            <div className="logo">
                <Link href="/">
                    <a id="/" onClick={changePage}>
                        <img id="/" src="icons/logo-menu.svg" alt="Home" />
                    </a>
                </Link>
            </div>
            <div className="mainButton">
                <Link href="/">
                    <a id="/" onClick={changePage}>
                        <img id="/" src={`icons/home${page === "/" ? "-active" : ""}.svg`} alt="Challenges" />
                    </a>
                </Link>
                <Link href="/ranking">
                    <a id="/ranking" onClick={changePage}>
                        <img id="/ranking" src={`icons/ranking${page === "/ranking" ? "-active" : ""}.svg`} alt="Ranking" />
                    </a>
                </Link>
            </div>
        </div>
    )
}