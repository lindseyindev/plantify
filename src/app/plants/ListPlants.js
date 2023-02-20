import Card from "./Card";

export default function ListPlants({ plants }) {

  console.log({plants})
  return (
    <div className="flex row">
      {plants.map((plant) => {
        return (
          <div key={plant.id}>
            <Card plant={plant} />
          </div>
        );
      })}
    </div>
  );
}
