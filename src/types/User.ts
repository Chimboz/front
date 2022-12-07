type User = {
  name: string;
  id: number;
  signature: string;
  color: string;
  role: number;
  credits: number;
  look: {
    avatar: number;
    emote: string;
    hat: number;
    body: number;
    shoe: number;
    item0: number;
    item1: number;
    item2: number;
  };
  notifications: number;
};

export default User;
