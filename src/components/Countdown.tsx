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

    let clock

    useEffect(() => {
        clock = $('.timer').FlipClock({
            countdown: true,
            autoStart: false,
            // language: 'portuguese',
            // minimumDigits: 9,
            // running: true,
            // timer: true,
        });

        clock.setTime(25 * 60)
        // clock.start()


        let liBefore = createListItem('flip-clock-before', secondsRight)
        let liAfter = createListItem('flip-clock-active', secondsRight)
        document.getElementById("secondsRight").appendChild(liBefore)
        document.getElementById("secondsRight").appendChild(liAfter)

    }, [])

    useEffect(() => {
        let div = document.getElementById("secondsRight")
        let before = div.getElementsByClassName("flip-clock-before")
        console.log(before);


        // document.getElementById("secondsRight").appendChild(li)
    }, [secondsRight])

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

    function start() {
        clock.start();
        startCountdown();
    }

    function stop() {
        clock.stop();
        resetCountdown();
    }

    return (
        <div>
            <div className="timer"></div>
            {/* <div className={styles.countdownContainer}> */}
            <div className="flip-clock-wrapper">
                <div>
                    <ul id="minutesLeft" className="flip "> {/* minutesLeft */}
                        <li className="flip-clock-before">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">9</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">9</div>
                                </div>
                            </a>
                        </li>
                        <li className="flip-clock-active">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{minutesLeft}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{minutesLeft}</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul id="minutesRight" className="flip "> {/* minutesRight */}
                        <li className="flip-clock-before">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">9</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">9</div>
                                </div>
                            </a>
                        </li>
                        <li className="flip-clock-active">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{minutesRight}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{minutesRight}</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="flip-clock-divider minutes">
                    <span className="flip-clock-dot top" />
                    <span className="flip-clock-dot bottom" />
                </span>
                <div>
                    <ul id="secondsLeft" className="flip play"> {/* secondsLeft */}
                        <li className="flip-clock-before">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{String(Number(secondsLeft) + 1)}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{String(Number(secondsLeft) + 1)}</div>
                                </div>
                            </a>
                        </li>
                        <li className="flip-clock-active">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{secondsLeft}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{secondsLeft}</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul id="secondsRight" className="flip play"> {/* secondsRight */}
                        {/* <li className="flip-clock-before">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{Number(secondsRight) + 1}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{Number(secondsRight) + 1}</div>
                                </div>
                            </a>
                        </li>
                        <li className="flip-clock-active">
                            <a href="#">
                                <div className="up">
                                    <div className="shadow"></div>
                                    <div className="inn">{secondsRight}</div>
                                </div>
                                <div className="down">
                                    <div className="shadow"></div>
                                    <div className="inn">{secondsRight}</div>
                                </div>
                            </a>
                        </li> */}
                    </ul>
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
                            onClick={stop}
                        >
                            Abandonar ciclo
                            <img src="icons/close.svg"></img>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={start}
                        >
                            Iniciar um ciclo
                        </button>
                    )
                }
            </>)}
        </div>
    );
}