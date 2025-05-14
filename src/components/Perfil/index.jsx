import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
    const avatar = `https://github.com/${nomeUsuario}.png`
    const nomeUpper = nomeUsuario.toUpperCase();

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={avatar}/>
            <h1 className={styles.name}>
                {nomeUpper}
            </h1>
        </header>
    )
}

export default Perfil;