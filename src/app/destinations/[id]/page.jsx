import { DeleteModals } from "@/app/components/DeleteModal";
import { Editpage } from "@/app/components/EditPage";
import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card, Link } from "@heroui/react";

const DetelsPage = async ({ params }) => {
  let { id } = await params;
  let res = await fetch(`http://localhost:7000/destinations/${id}`);
  let data = await res.json();
  let {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = data;
  return (
    <div>
      <Card className="">
        <div className=" flex  gap-5 justify-center">
          <Editpage data={data} />
          <DeleteModals data={data} />
        </div>
        <CircleDollar
          aria-label="Dollar sign icon"
          className="text-primary size-6"
          role="img"
        />
        <Card.Header>
          <Card.Title>{destinationName}</Card.Title>
          <Card.Description>
            ome Visit the Acme Creator Hub to sign up today and start earning
            credits from your fans and followers.
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href=""
            rel="noopener noreferrer"
          >
            Buy Now
            <Link.Icon aria-hidden="true" />
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DetelsPage;
