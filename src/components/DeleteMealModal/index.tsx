import Button from "@components/Button";
import * as S from "./styles";

const DeleteMealModal: React.FC<TDeleteMealModal> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <S.ModalContainer>
      <S.Info>Deseja realmente excluir o registro da refeição?</S.Info>
      <S.ButtonWrapper>
        <Button variant="secondary" title="Cancelar" onPress={onCancel} />
        <Button variant="primary" title="Sim, excluir" onPress={onConfirm} />
      </S.ButtonWrapper>
    </S.ModalContainer>
  );
};

export default DeleteMealModal;
