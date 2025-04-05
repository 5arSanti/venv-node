import { AppProvider } from "../../Context";

import "./App.css"
import { Wrapper } from "../Components/Wrapper";

const App = () => {

    return (
        <AppProvider>
			<Wrapper/>
		</AppProvider>
    );
}

export default App
