import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
      read: () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export default Categories;
