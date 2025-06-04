import avatar from "./avatar.png";

type InfoType = {
  avatar?: string;
  firstName: string;
  lastName: string;
  extraName?: string;
};

const info: InfoType = {
  avatar: avatar,
  firstName: "duck",
  lastName: "bald",
  extraName: "qi",
};

export default info;
