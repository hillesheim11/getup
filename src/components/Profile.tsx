import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengeContext"

import styles from "../styles/components/Profile.module.css"

export function Profile(props) {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${props.username}.png`} alt="" />
            <div>
                <strong>{props.username || "You"}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}