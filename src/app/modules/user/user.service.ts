import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  console.log(user.fullName());

  await user.save();
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromD = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};

export const getAdminsFromDB = async (): Promise<IUser> => {
  const admins = await User.getAdminUsers();

  return admins;
};

export const deleteUserToDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findByIdAndDelete(id);

  return user;
};
