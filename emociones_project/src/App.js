import React from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './App.css';
import EmotionList from './EmotionList/EmotionList';
import Form from './Form/Form';

function App() {
	const [open, setIsOpen] = React.useState(false);
	const openForm = () => setIsOpen(true);
	const closeForm = () => setIsOpen(false);

	const [emotion_list, changeEmotionList] = React.useState([]);

	const downloadEmotionList = async () => {
		const fileName = "file";
		const json = JSON.stringify(emotion_list);
		const blob = new Blob([json],{type:'application/json'});
		const href = await URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = href;
		link.download = fileName + ".json";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
    <div className="App">
      <div className="main-container">
				<EmotionList className="emotionlist" emotion_list={emotion_list}/>
				<div className="fab-container">
					<Fab id="download" className="fab" color="secondary" aria-label="download" onClick={downloadEmotionList}>
						<CloudDownloadIcon />
					</Fab>

					<Fab id="add" className="fab" color="secondary" aria-label="edit" onClick={openForm}>
						<EditIcon />
					</Fab>
				</div>
			</div>
			<Form open={open} closeForm={closeForm} changeEmotionList={changeEmotionList} emotion_list={emotion_list}/>
    </div>
  );
}

export default App;
