import { Delete } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import React from "react";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>

			<Fab onClick={handleClick}>
				<Delete />
			</Fab>
		</div>
	);
}

export default Note;
