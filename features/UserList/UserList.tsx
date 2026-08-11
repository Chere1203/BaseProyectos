"use client";

import {
  BUTTON,
} from "@/app/components/button/constants";
import {
  BUTTON_TYPES,
  INPUT_TYPES,
} from "@/app/components/form-field/constants/InputTypes.constants";
import { TitleVariant } from "@/app/components/title/constants";
import { STRING } from "@/app/constants/strings/String.types";
import { USER_LIST } from "@/app/constants/strings/UserList.constants";
import { ReactElement } from "react";
import Button from "@/app/components/button/Button";
import FormField from "@/app/components/form-field/FormField";
import Section from "@/app/components/section/Section";
import Text from "@/app/components/text/Text";
import Title from "@/app/components/title/Title";
import { useUserListViewModel } from "./hooks/useUserListViewModel";

const UserList = (): ReactElement => {
  const {
    handleAddUser,
    handleDeleteUser,
    handleUserNameChange,
    userList,
    userName,
  } = useUserListViewModel();

  return (
    <Section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <Title
          variant={TitleVariant.SECONDARY}
          text={USER_LIST.TITLE}
          className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
        />

        <form
          onSubmit={handleAddUser}
          className="flex flex-col gap-4 sm:flex-row sm:items-end"
        >
          <FormField
            id={USER_LIST.INPUT_ID}
            name={USER_LIST.INPUT_NAME}
            label={USER_LIST.INPUT_LABEL}
            value={userName}
            type={INPUT_TYPES.TEXT}
            placeholder={USER_LIST.INPUT_PLACEHOLDER}
            onChange={handleUserNameChange}
            labelSuffix={STRING.Empty}
          />
          <Button
            type={BUTTON_TYPES.SUBMIT}
            variant={BUTTON.PRIMARY}
            className="sm:w-auto"
          >
            {USER_LIST.ADD_BUTTON_TEXT}
          </Button>
        </form>

        {userList.length === 0 ? (
          <Text className="text-zinc-600 dark:text-zinc-400">
            {USER_LIST.EMPTY_STATE_TEXT}
          </Text>
        ) : (
          <ul className="space-y-3">
            {userList.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-700"
              >
                <Text className="text-zinc-900 dark:text-zinc-50">
                  {user.name}
                </Text>
                <Button
                  type={BUTTON_TYPES.BUTTON}
                  variant={BUTTON.DANGER}
                  onClick={() =>
                    handleDeleteUser(user.id)
                  }
                  className="w-auto"
                >
                  {USER_LIST.DELETE_BUTTON_TEXT}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default UserList;
