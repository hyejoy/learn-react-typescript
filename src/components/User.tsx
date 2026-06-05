interface UserProps {
  name: string;
  age: number;
  gender: string;
}
export default function User({ name, age, gender }: UserProps) {
  return (
    <>
      <h1>User Component</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{gender}</h1>
    </>
  );
}
