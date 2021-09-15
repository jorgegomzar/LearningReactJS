import React from 'react'
import './Emotion.css'

const Emotion = (props) => {
	return (
		<>
			<table className="item-container">
				<tr>
					<td className="fecha">
						<tr className="dia">{props.emotion.dia}</tr>
						<tr className="hora">{props.emotion.hora}</tr>
					</td>
					<td className="pensamiento">
						{props.emotion.pensamiento}
					</td>
				</tr>
			</table>
			<hr />
		</>
	)
}

export default Emotion
