import {
  ChangeEvent,
  FormEvent,
} from "react";

export interface UserListItem {
  id: string;
  name: string;
}

export interface UserListViewModel {
  handleAddUser: (
    event: FormEvent<HTMLFormElement>
  ) => void;
  handleDeleteUser: (userId: string) => void;
  handleUserNameChange: (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => void;
  userList: UserListItem[];
  userName: string;
}
