
import { RandomUser } from "../interfaces/RandomUser";
import styles from "../styles/components/RankingTable.module.css"

interface RankingProps {
    users: RandomUser
}

export function RankingTable(props: RankingProps) {

    const generateLevel = (id: number) => Math.pow((1 / (id + 1) + 1) * 3, 2)

    const experience = (level: number) => Math.pow((level + 1) * 4, 2)

    const colorRanking = (position: number) => {
        switch (position) {
            case 1:
                return '#FABC06'
            case 2:
                return '#999D99'
            case 3:
                return '#AD4F01'
            default:
                return '#000'
        }
    }

    const tableRow = () => {

        return (
            props.users.results.map((user, id) => (
                <div key={id} className={styles.userContainer}>
                    <span>
                        <strong style={{ color: colorRanking(id + 1) }}>
                            #{id + 1}
                        </strong>
                    </span>
                    <span className={styles.image}>
                        <img src={user.picture.medium} alt="" />
                    </span>
                    <span className={styles.name}>
                        {/* <strong> */}
                        {user.name.first.concat(' ', user.name.last)}
                        {/* </strong> */}
                    </span>
                    <span className={styles.level}>{generateLevel(id).toFixed()}</span>
                    <span className={styles.experiencia}>{experience(generateLevel(id)).toFixed()}</span>
                </div>
            ))
        )
    }

    return (
        <div className={styles.rankingContainer}>
            <div>
                <div className={styles.userContainer}>
                    <span style={{ width: '1.5em' }}></span>
                    <span className={styles.image}></span>
                    <span className={styles.name}>
                        <strong>Usuário</strong>
                    </span>
                    <span className={styles.level}>
                        <strong>Level</strong>
                    </span>
                    <span className={styles.experiencia}>
                        <strong>Experiência</strong>
                    </span>
                </div>
                {tableRow()}
            </div>
        </div>
    )
}