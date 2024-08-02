import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.css';

import { getSession } from 'next-auth/react';
import { Textarea } from '@/components/textarea';

export default function Dashboard(){
    return(
        <div className={styles.container}>
           <Head>
                <title>Meu painel de tarefas</title>
            </Head> 

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual a sua tarefa?</h1>

                        <form>
                            <Textarea placeholder="Digite qual sua tarefa..."/>
                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox}/>
                                <label>Deixar tarefa publica?</label>
                            </div>

                            <button className={styles.button} type="submit">Registrar</button>
                        </form>
                    </div>
                </section>
            </main>
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