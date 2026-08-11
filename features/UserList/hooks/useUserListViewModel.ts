import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { STRING } from "@/app/constants/strings/String.types";
import {
  UserListItem,
  UserListViewModel,
} from "../models/UserListViewModel.interface";

export const useUserListViewModel = (): UserListViewModel => {
  const [userName, setUserName] =
    useState<string>(STRING.Empty);
  const [userList, setUserList] = useState<
    UserListItem[]
  >([]);

  const handleUserNameChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ): void => {
    setUserName(event.target.value);
  };

  const handleAddUser = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const trimmedUserName = userName.trim();

    if (trimmedUserName === STRING.Empty) {
      return;
    }

    const newUser: UserListItem = {
      id: crypto.randomUUID(),
      name: trimmedUserName,
    };

    setUserList((previousUserList) => [
      ...previousUserList,
      newUser,
    ]);
    setUserName(STRING.Empty);
  };

  const handleDeleteUser = (userId: string): void => {
    setUserList((previousUserList) =>
      previousUserList.filter(
        (userListItem) => userListItem.id !== userId
      )
    );
  };

  return {
    handleAddUser,
    handleDeleteUser,
    handleUserNameChange,
    userList,
    userName,
  };
};
