import styles from "./Card.module.css";

const Card = ({ data }) => {
	return (
		<div className={styles.card}>
			{data ? (
				<>
					<h2>Datos</h2>
					<section className={styles.summary}>
						<p>Nombre: {data.name}</p>
						<p>Apellido: {data.lastname}</p>
						<p>Pelicula: {data.movie}</p>
						<p>Genero: {data.film}</p>
						<p>Nombre actor: {data.actor}</p>
					</section>
				</>
			) : (
				<h2>Esto es un componente</h2>
			)}
		</div>
	);
};

export default Card;
