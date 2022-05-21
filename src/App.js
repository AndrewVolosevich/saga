import {Provider} from "react-redux";
import {store} from "./store";
import Peoples from "./components/Peoples/Peoples";

const App = () => {
  return (
    <Provider store={store}>
      <h2>Saga</h2>
      <Peoples />
    </Provider>
  );
}

export default App;
