import {useState} from "react";
import styles from "./Form.module.css";
import Card from "../card/Card";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		lastname: "",
		movie: "",
		film: "",
		actor: "",
	});
	const [showSummary, setShowSummary] = useState(false);
	const [errors, setErrors] = useState({
		name: false,
		lastname: false,
		movie: false,
		film: false,
		actor: false,
	});
	const [incompleteInfo, setIncompleteInfo] = useState(false);

	const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let errorsCustom = {
			name: formData.name.trim().length < 3 || formData.name.startsWith(" "),
			lastname: formData.lastname.trim().length < 3 || formData.lastname.startsWith(" "),
			movie:formData.movie.trim().length < 6,
			film:formData.film.trim().length < 3 || formData.film.startsWith(" "),
			actor: formData.actor.trim().length < 6,		
    };
    
    setErrors(errorsCustom);

    if (Object.values(errorsCustom).some(error => error)) {
		setIncompleteInfo(true);
		return;
    }

	setIncompleteInfo(false);
    setShowSummary(true);

	};

	return (
		<div className={styles.formWrapper}>
			
				<div  className={styles.card}>
				{incompleteInfo && (<p > ¡¡ Por favor chequea que la información sea correcta !!</p>)}
				<>
					<h2>Personaje favorito</h2>
					<form className={styles.formContainer} onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label htmlFor="name">Nombre:</label>
							<input
								type="text"
								name="name"
								id="name"
								value={formData.name}
								onChange={handleChange}
				/>
				{errors.name && <p className={styles.error}>El nombre es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="lastname">Apellido:</label>
							<input
								type="text"
								name="lastname"
								id="lastname"
								value={formData.lastname}
								onChange={handleChange}	
							/>
				{errors.lastname && <p className={styles.error}>El apellido es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="movie">Pelicula:</label>
							<input
								type="text"
								name="movie"
								id="movie"
								value={formData.movie}
								onChange={handleChange}
				/>
				{errors.movie && <p className={styles.error}>La Pelicula es obligatoria</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="film">Genero cinematográfico:</label>
							<input
								type="text"
								name="film"
								id="film"
								value={formData.film}
								onChange={handleChange}
				/>
				{errors.film && <p className={styles.error}>El Genero cinematográfico es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="actor">Nombre Actor favorito:</label>
							<input
								type="text"
								name="actor"
								id="actor"
								value={formData.actor}
								onChange={handleChange}
				/>
				{errors.actor && <p className={styles.error}>El Nombre Actor es obligatorio</p>}
						</div>
				
						<button className={styles.submitButton} type="submit">
							Enviar
						</button>
					</form>
				
				</>
				</div>
				{showSummary && <Card data={formData} />}

		</div>
	);
};

export default Form;
