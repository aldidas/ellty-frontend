import { useState, useCallback } from "react";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import type { ChangeEvent, FormEvent } from "react";

function App() {
  const [all, setAll] = useState<boolean>(false);
  const [form, setForm] = useState<Record<string, boolean>>({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const element = event.target as HTMLInputElement;
      const name = element.name;
      if (!name) return;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: !prevForm[name],
      }));
    },
    [],
  );

  const handleAllChange = useCallback((): void => {
    setAll((prevAll) => !prevAll);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log({
      ...form,
      all,
    });
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <Checkbox
          id="all-pages"
          checked={all}
          name="all"
          label="All pages"
          onChange={handleAllChange}
        />
        <hr />
        <ul>
          <li>
            <Checkbox
              id="page1"
              checked={form.page1}
              name="page1"
              label="Page 1"
              onChange={handleChange}
            />
          </li>
          <li>
            <Checkbox
              id="page2"
              checked={form.page2}
              name="page2"
              label="Page 2"
              onChange={handleChange}
            />
          </li>
          <li>
            <Checkbox
              id="page3"
              checked={form.page3}
              name="page3"
              label="Page 3"
              onChange={handleChange}
            />
          </li>
          <li>
            <Checkbox
              id="page4"
              checked={form.page4}
              name="page4"
              label="Page 4"
              onChange={handleChange}
            />
          </li>
        </ul>
        <hr />
        <Button id="done" type="submit" label="Done" />
      </form>
    </div>
  );
}

export default App;
