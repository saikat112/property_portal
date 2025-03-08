import prisma from "../../config/db.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await prisma.property.findMany();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching properties" });
  }
};

export const createProperty = async (req, res) => {
  const { title, price, location, imageUrl } = req.body;
  try {
    const newProperty = await prisma.property.create({
      data: { title, price, location, imageUrl },
    });
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: "Error creating property" });
  }
};
