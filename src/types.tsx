export type Navigation = {
  navigate: (scene: string) => void;
};

export type AuthenticationResponse = {
  accessToken: string;
  refreshToken: string;
};

export type Exercise = {
  id: number;
  name: string;
  forceType: string;
  level: string;
  mechanic: string;
  equipment: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
  images: string[];
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  role: string;
};
