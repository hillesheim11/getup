import Head from "next/head";
import { GetServerSideProps } from "next";
import { RankingTable } from "../components/RankingTable";
import { RandomUser } from "../interfaces/RandomUser";

import styles from "../styles/pages/Ranking.module.css"

interface RankingProps {
    users: RandomUser
}

export default function Ranking(props: RankingProps) {
    return (
        <div>
            <Head>
                <title>Ranking | GetUp</title>
            </Head>
            <section className={styles.container} >
                <RankingTable users={props.users} />
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { username } = ctx.req.cookies


    const res = await fetch("https://randomuser.me/api/?results=6")
    const users = await res.json()

    return {
        props: {
            users,
            username: username || null
        }
    }
}