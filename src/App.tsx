import User from "./components/User";

export default function App() {
  const userObj = {
    name: "jack",
    age: 20,
    gender: "male",
  };
  return (
    <>
      <User {...userObj} />
      <User name={"jack"} age={20} gender={"male"} />
    </>
  );
}
