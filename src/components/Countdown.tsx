import { useEffect, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css"

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown } = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {

        let liBefore1 = createListItem('flip-clock-before', secondsRight)
        let liAfter1 = createListItem('flip-clock-active', secondsRight)
        document.getElementById("minutesLeft").appendChild(liBefore1)
        document.getElementById("minutesLeft").appendChild(liAfter1)

        let liBefore2 = createListItem('flip-clock-before', secondsRight)
        let liAfter2 = createListItem('flip-clock-active', secondsRight)
        document.getElementById("minutesRight").appendChild(liBefore2)
        document.getElementById("minutesRight").appendChild(liAfter2)

        let liBefore3 = createListItem('flip-clock-before', secondsRight)
        let liAfter3 = createListItem('flip-clock-active', secondsRight)
        document.getElementById("secondsLeft").appendChild(liBefore3)
        document.getElementById("secondsLeft").appendChild(liAfter3)

        let liBefore4 = createListItem('flip-clock-before', secondsRight)
        let liAfter4 = createListItem('flip-clock-active', secondsRight)
        document.getElementById("secondsRight").appendChild(liBefore4)
        document.getElementById("secondsRight").appendChild(liAfter4)
    }, [])

    useEffect(() => {
        refreshDigit(document.getElementById("secondsRight"), secondsRight)
    }, [secondsRight])

    useEffect(() => {
        refreshDigit(document.getElementById("secondsLeft"), secondsLeft)
    }, [secondsLeft])

    useEffect(() => {
        refreshDigit(document.getElementById("minutesRight"), minutesRight)
    }, [minutesRight])

    useEffect(() => {
        refreshDigit(document.getElementById("minutesLeft"), minutesLeft)
    }, [minutesLeft])

    function refreshDigit(element: HTMLElement, digit: string) {
        let before = element.getElementsByClassName('flip-clock-before')[0]
        let after = element.getElementsByClassName('flip-clock-active')[0]
        element.removeChild(before)

        if (after) {
            after.setAttribute('class', 'flip-clock-before')
        }

        let liAfter = createListItem('flip-clock-active', digit)
        element.appendChild(liAfter)
    }

    function createListItem(css: string, value: string) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        let divUp = document.createElement('div')
        let divUpShadow = document.createElement('div')
        let divUpInn = document.createElement('div')
        let divDown = document.createElement('div')
        let divDownShadow = document.createElement('div')
        let divDownInn = document.createElement('div')

        li.setAttribute('class', css)

        a.setAttribute('href', '#')

        divUp.setAttribute('class', 'up')
        divUpShadow.setAttribute('class', 'shadow')
        divUpInn.setAttribute('class', 'inn')
        divDownShadow.setAttribute('class', 'shadow')
        divDownInn.setAttribute('class', 'inn')
        divDown.setAttribute('class', 'down')

        divUpInn.innerText = value
        divDownInn.innerText = value

        divUp.appendChild(divUpShadow)
        divUp.appendChild(divUpInn)
        divDown.appendChild(divDownShadow)
        divDown.appendChild(divDownInn)

        a.appendChild(divUp)
        a.appendChild(divDown)

        li.appendChild(a)

        return li;
    }

    return (
        <div>
            <div className="timer"></div>
            {/* <div className={styles.countdownContainer}> */}
            <div className="flip-clock-wrapper">
                <div>
                    <ul id="minutesLeft" className="flip play"> {/* minutesLeft */} </ul>
                    <ul id="minutesRight" className="flip play"> {/* minutesRight */} </ul>
                </div>
                <span className="flip-clock-divider minutes">
                    <span className="flip-clock-dot top" />
                    <span className="flip-clock-dot bottom" />
                </span>
                <div>
                    <ul id="secondsLeft" className="flip play"> </ul>
                    <ul id="secondsRight" className="flip play"> </ul>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (<>
                { isActive
                    ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <img src="icons/close.svg"></img>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )
                }
            </>)}
        </div>
    );
}