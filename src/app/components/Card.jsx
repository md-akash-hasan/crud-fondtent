import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
import Image from "next/image";

export function CardS({ data }) {
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
    <Card className="" variant="secondary">
      <div className="relative h-60">
        <Image
          alt={destinationName}
          src={imageUrl}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      <Card.Header>
        <Card.Title className="text-xl capitalize">
          {destinationName}
        </Card.Title>
        <Card.Description className="mt-2">{description}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href={`/destinations/${_id}`}
          rel="noopener noreferrer"
        >
          Information
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
}
