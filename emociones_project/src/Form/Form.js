import React from 'react'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import './Form.css'

function Form(props) {
	
	const saveEmotion = () => {
		var d = new Date();
		const pensamiento = document.getElementById('text-pensamiento').value;
		const new_emotion = {
			dia: d.getDate() + '/' + (d.getMonth() + 1), hora: d.getHours() + ':' + d.getMinutes(), pensamiento: pensamiento
		};
		props.changeEmotionList([...props.emotion_list, new_emotion]);
		console.log(props.emotion_list);
		props.closeForm();
	}

	return ( <>
		{ props.open &&
		<div className="form-container">
			<h1>¿En qué estabas pensando?</h1>
			<textarea name="text-pensamiento" id="text-pensamiento" />
			<div className="fab-container-form">

				<Button
					variant="contained"
					color="secondary"
					startIcon={<DeleteIcon />}
					id="delete"
					onClick={props.closeForm}
				> Cancelar </Button>

				<Button
					variant="contained"
					color="primary"
					size="large"
					startIcon={<SaveIcon />}
					id="confirm"
					onClick={saveEmotion}
				> Save </Button>

			</div>
		</div>
	} </>
	 )
}

export default Form
