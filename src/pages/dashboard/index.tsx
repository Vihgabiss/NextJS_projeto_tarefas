import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.css';

import { getSession } from 'next-auth/react';

export default function Dashboard(){
    return(
        <div className={styles.container}>
           <Head>
                <title>Meu painel de tarefas</title>
            </Head> 

            <h1>Pagina Painel</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({req});

    if(!session?.user){
        //se não têm usuário vamos redirecionar para /
        return{
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    
    return{
        props: {},
    };
};