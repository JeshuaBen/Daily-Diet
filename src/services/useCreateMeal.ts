type TUseCreateMeal = {
  name: string;
  description: string;
  date: string;
  time: string;
  isGoodMeal: string;
  setNewMealForm: (
    value: React.SetStateAction<{
      name: string;
      description: string;
      date: string;
      time: string;
      isGoodMeal: string;
    }>
  ) => void;
};

export const useCreateMeal = ({ setNewMealForm }: TUseCreateMeal) => {
  const handleInputChange = (
    name: "name" | "description" | "date" | "time" | "isGoodMeal",
    value: string
  ) => {
    setNewMealForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChange = (text: string) => {
    let newText = text.replace(/[^\d]/g, ""); // Remove tudo que não é dígito

    // Aplica a máscara conforme o usuário digita
    if (newText.length > 2 && newText.length <= 4) {
      newText = newText.replace(/^(\d{2})(\d+)/, "$1/$2");
    } else if (newText.length > 4) {
      newText = newText.replace(/^(\d{2})(\d{2})(\d+)/, "$1/$2/$3");
    }

    handleInputChange("date", newText);
  };

  return {
    handleChange,
    handleInputChange,
  };
};
