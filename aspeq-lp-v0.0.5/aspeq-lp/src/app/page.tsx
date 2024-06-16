import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type venue = {
  title: string;
  image: string;
  manager: string;
  description: string;
  member: boolean;
  id: string;
};

async function getvenues(): Promise<venue[]> {
  const result = await fetch("http://localhost:4000/venues", {
    cache: "no-store",
  });

  return result.json();
}

export default async function Home() {
  const venues = await getvenues();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {venues.map((venue) => (
          <Card key={venue.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{venue.title}</CardTitle>
                <CardDescription>{venue.manager}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{venue.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View venue</button>
              {venue.member && <p>✓ Membre ASPEQ</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
