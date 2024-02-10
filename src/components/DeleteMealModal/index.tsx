import Button from "@components/Button";
import * as S from "./styles";
import { Modal } from "react-native";
import { TDeleteMealModal } from "./types";

const DeleteMealModal: React.FC<TDeleteMealModal> = ({
  onCancel,
  onConfirm,
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <S.ModalContainer>
        <S.Info>Deseja realmente excluir o registro da refeição?</S.Info>
        <S.ButtonWrapper>
          <Button variant="secondary" title="Cancelar" onPress={onCancel} />
          <Button variant="primary" title="Sim, excluir" onPress={onConfirm} />
        </S.ButtonWrapper>
      </S.ModalContainer>
    </Modal>
  );
};

export default DeleteMealModal;
