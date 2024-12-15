 import Link from "next/link";
 import { MenuItem } from "@/Components/MenuItem";

type MenuItemProps = {
  menuItems: Array<{
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }>;
};

export default function Menu({ menuItems }: MenuItemProps) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

//Simulate fetching dynamic menu data
 export async function getServerSideProps() {
  // Example static menu data; this can later be fetched from an external API or data/base
  const MenuItem = [
    {
      id: "1",
      name: "Espresso",
      description: "Rich and aromatic espresso.",
      price: "$3.50",
      imageUrl: "/espresso.jpg",
    },
    {
      id: "2",
      name: "Cappuccino",
      description: "Classic Italian cappuccino with foam.",
      price: "$4.00",
      imageUrl: "/cappuccino.jpg",
    },
    {
      id: "3",
      name: "Pasta Primavera",
      description: "Fresh seasonal vegetables with pasta.",
      price: "$12.99",
      imageUrl: "/pasta.jpg",
    },
    {
      id: "4",
      name: "Caesar Salad",
      description: "Crisp lettuce with parmesan & croutons.",
      price: "$9.99",
      imageUrl: "/salad.jpg",
    },
    {
      id: "5",
      name: "Cheesecake",
      description: "Delicious creamy classic cheesecake.",
      price: "$6.99",
      imageUrl: "/cheesecake.jpg",
    },
  ];

  return {
    props: {
      MenuItem,
    },
  };
}
