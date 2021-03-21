
import { RandomUser } from "../interfaces/RandomUser";
import styles from "../styles/components/RankingTable.module.css"

interface RankingProps {
    users: RandomUser
}

export function RankingTable(props: RankingProps) {

    const generateLevel = (id: number) => Math.pow((1 / (id + 1) + 1) * 3, 2)

    const experience = (level: number) => Math.pow((level + 1) * 4, 2)

    const tableRow = () => {

        return (
            props.users.results.map((user, id) => (
                <article key={id}>
                    <span>
                        {id + 1}
                    </span>
                    <span className={styles.profileContainer}>
                        <img src={user.picture.medium} alt="" />
                        <div>
                            <strong>
                                {user.name.first.concat(' ', user.name.last)}
                            </strong>
                            <p>
                                <img src="icons/level.svg" alt="Level" />
                                Level {generateLevel(id).toFixed()}
                            </p>
                        </div>
                    </span>
                    <span> <b>{(generateLevel(id) * 3).toFixed()}</b> completados</span>
                    <span> <b>{experience(generateLevel(id)).toFixed()}</b> xp</span>
                </article>
            ))
        )
    }

    return (
        <div className={styles.rankingContainer}>
            <section>
                <h1>Leaderboard</h1>
                <div>
                    <h2>POSIÇÃO</h2>
                    <h2 style={{ marginRight: '31.5em' }}>USUÁRIO</h2>
                    <h2 style={{ marginRight: '9.85em' }}>DESAFIOS</h2>
                    <h2>EXPERIÊNCIA</h2>
                </div>
                {tableRow()}
            </section>
        </div>
    )
}