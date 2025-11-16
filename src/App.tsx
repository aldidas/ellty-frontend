import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

function App() {
  return (
    <div className="form-wrapper">
      <form>
        <Checkbox checked={false} id="all-pages" value="all" name="all" label="All pages" />
        <hr />
        <ul>
          <li>
            <Checkbox checked={false} id="page-1" value="1" name="page-1" label="Page 1" />
          </li>
          <li>
            <Checkbox checked={false} id="page-2" value="1" name="page-2" label="Page 2" />
          </li>
          <li>
            <Checkbox checked={true} id="page-3" value="1" name="page-3" label="Page 3" />
          </li>
          <li>
            <Checkbox checked={true} id="page-4" value="4" name="page-4" label="Page 4" />
          </li>
        </ul>
        <hr />
        <Button id="done" type="submit" label="Done" />
      </form>
    </div>
  );
}

export default App;
