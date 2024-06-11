import { createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("pritesh senjaliya");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}
