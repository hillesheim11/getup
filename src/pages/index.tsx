import stylesHome from "../styles/pages/Home.module.css"
import stylesLogin from "../styles/pages/Login.module.css"
import Head from "next/head"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { useState } from "react";
import Cookies from 'js-cookie';
import Router from 'next/router'
interface ChallengeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    username: string;
}

export default function Challenge(props: ChallengeProps) {

    if (props.username) {
        return (
            <ChallengesProvider
                level={props.level}
                currentExperience={props.currentExperience}
                challengesCompleted={props.challengesCompleted}
            >
                <div className={stylesHome.container}>
                    <Head>
                        <title>Inicio | GetUp</title>
                    </Head>
                    <ExperienceBar />

                    <CountdownProvider>
                        <section>
                            <div>
                                <Profile username={props.username} />
                                <CompletedChallenges />
                                <Countdown />
                            </div>
                            <div>
                                <ChallengeBox />
                            </div>
                        </section>
                    </CountdownProvider>
                </div>
            </ChallengesProvider>
        )

    }

    const [username, setUsername] = useState('')

    const setUsernameToCookies = () => {
        Cookies.set('username', String(username))
        Router.reload();
    }

    return (
        <div className={stylesLogin.container}>
            <section>
                <img src="logo-login.svg" alt="Logo" />
            </section>
            <section>
                <h1>
                    get<b>.</b>up
                </h1>
                <h2>
                    Bem-vindo
                </h2>
                <div className={stylesLogin.github}>
                    <img src="icons/github.svg" alt="GitHub-logo" />
                    <span>Faça login com seu Github <br /> para começar</span>
                </div>
                <div>
                    <form onSubmit={setUsernameToCookies}>
                        <input type="text" placeholder="Digite seu username" value={username}
                            onChange={(e) => setUsername(e.target.value.substr(0, 39))} />
                        <button type="button" disabled={username ? false : true}
                            onClick={setUsernameToCookies}>
                            <img src="icons/arrow.svg" alt="" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience, challengesCompleted, username } = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
            username: username || null
        }
    }
}