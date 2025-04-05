import { NewTaskButton } from "../NewTaskButton";
import { Title } from "../Title";

import "./styles.css";

const TitleButtonContainer = () => {
	return (
		<div className="title-button-container">
			<div>
				<Title>
					BIENVENIDO A TTDO
				</Title>

				<p>Donde usted lleva el control de sus cosas.</p>
			</div>

			<NewTaskButton />
		</div>
	);
}

export { TitleButtonContainer };