import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type AddNewPostProps = {
  isAddPostModalOpen: boolean;
};

export const AddNewPost = ({ isAddPostModalOpen }: AddNewPostProps) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Modal isOpen={isAddPostModalOpen}></Modal>
  );
};
