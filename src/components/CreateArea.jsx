import { Fab, Zoom } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import React, { useState } from "react";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { value, name } = event.target;
		setNote((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleClick(e) {
		props.onAdd(note);
		setNote({ title: "", content: "" });
		e.preventDefault();
	}
	const [isExpanded, setExpanded] = useState(false);
	function expand(e) {
		setExpanded(true);
	}
	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						onChange={handleChange}
						value={note.title}
						name="title"
						placeholder="Title"
					/>
				)}

				<textarea
					onChange={handleChange}
					onClick={expand}
					value={note.content}
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? "3" : "1"}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={handleClick}>
						<PostAdd />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
