import { Container } from "react-bootstrap";
import AddTodo from "./todos/AddTodo";
import DisplayTodos from "./todos/DisplayTodos";
import { Provider } from "react-redux";
import store from "./redux/store";


// import AddTodo from "./TodoList/AddTodo";
// import DisplayTodos from "./TodoList/DisplayTodos";

function Apps() {
  return (
    <>
    <div>
    <Provider store={store}>
    <Container className="py-3">
    <AddTodo/>
    <DisplayTodos/>
    </Container>
    </Provider>
    </div>
    </>
  );
}

export default Apps;
