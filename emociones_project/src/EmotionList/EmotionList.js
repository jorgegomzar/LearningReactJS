import React from 'react'
import Emotion from './Emotion'
import './EmotionList.css'

const EmotionList = (props) => {
	
	const listItems = props.emotion_list.map((emotion) => 
			<Emotion emotion={emotion}/>
	)

	return (
		<div className="emotionlist-container">
			{listItems}
		</div>
	)
}

export default EmotionList
