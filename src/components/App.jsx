import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../App.css";
import Particle from "./Particle";

function App() {
	const [notesArr, setNotesArr] = useState([]);

	function addItem(note) {
		setNotesArr((prevItems) => {
			return [...prevItems, note];
		});
	}

	function deleteItem(id) {
		setNotesArr((prevItems) => {
			return prevItems.filter((note, index) => {
				return index !== id;
			});
		});
	}
	function editDirectlyItem(id, title, content) {
		const tobeUpdated = notesArr.find((singleNote, index) => index === id);
		tobeUpdated.title = title;
		tobeUpdated.content = content;
		setNotesArr([...notesArr]);
	}
	return (
		<>
			<Particle />
			<Header />
			<CreateArea onAdd={addItem} />
			{notesArr.map((item, index) => {
				return (
					item && (
						<Note
							key={index + 1}
							id={index}
							title={item.title}
							content={item.content}
							onDelete={deleteItem}
							onEdit={editDirectlyItem}
						/>
					)
				);
			})}
			<Footer />
		</>
	);
}

export default App;
