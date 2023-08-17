"use client";

import { Category, Companion } from "@prisma/client";
import { Categories } from "../../../../../../components/categories";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const CompanionForm = ({ categories, initialData }: CompanionFormProps) => {
  return <div>Companion Form</div>;
};

export default CompanionForm;
