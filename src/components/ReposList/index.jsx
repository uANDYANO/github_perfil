import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (res.status !== 200) {
                setDeuErro(true)
            } else {
                return res.json();
            }
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
    }, [nomeUsuario])

    if (deuErro) {
        return (
            <div className="container">
                <h1>Verifique o nome digitado, usuário não encontrado.</h1>
            </div>
        )
    } else {
        return (
            <div className="container">
                {estaCarregando ? (
                    <h1>Carregando...</h1>
                ): (
                    <ul className={styles.list}>
                        {/* {repos.map(repositorio => ( */}
                        {repos.map(({ id, name, language, html_url }) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b> 
                                    {name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b> 
                                    {language}
                                </div>
                                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }

}

export default ReposList;