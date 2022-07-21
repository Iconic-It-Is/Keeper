import { Backspace, CheckCircle, Delete, Edit } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import React, { useState } from "react";

function Note(props) {
	const [displayForm, setForm] = useState(false);
	function handleClick() {
		props.onDelete(props.id);
	}
	function handleEdit(e) {
		const title = e.target.children[0].value;
		const content = e.target.children[1].value;
		props.onEdit(props.id, title, content);
		setForm(false);
		e.preventDefault();
	}
	function handleIcon(params) {
		setForm(!displayForm);
	}
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<form
				onSubmit={handleEdit}
				className={`${displayForm ? "show" : "hide"} edit-note`}
			>
				<input
					type="text"
					placeholder="Update the title"
					// defaultValue={props.title}
				/>
				<textarea
					placeholder="Update the note..."
					// defaultValue={props.content}
				/>
				<Fab type="submit">
					<CheckCircle />
				</Fab>
			</form>
			<Fab onClick={handleClick}>
				<Delete />
			</Fab>
			<Fab>
				{!displayForm ? (
					<Edit onClick={handleIcon} />
				) : (
					<Backspace onClick={handleIcon} />
				)}
			</Fab>
		</div>
	);
}

export default Note;
