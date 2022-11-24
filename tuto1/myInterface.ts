/** @format */

interface User1 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

interface User1 {
  githubToekn: string;
}

interface Admin extends User1 {
  role: "admin" | "ta" | "learner";
}

const hitesh2: User1 = {
  dbId: 22,
  githubToekn: "github",
  email: "h@h.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "abhi") => {
    return 10;
  },
};

const abhi: Admin = {
  dbId: 23,
  githubToekn: "git",
  email: "abhi@gmail.com",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "abhi") => {
    return 10;
  },
  role: "learner",
  userId: 0,
};
