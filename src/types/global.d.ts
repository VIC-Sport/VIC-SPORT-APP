export {};

declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string | string[];
    statusCode: number | string;
    data?: T; // data chỉ có khi thành công
  }

  interface IRegister {
    _id: string;
  }

  interface IUserLogin {
    user: {
      email: string;
      _id: string;
      name: string;
      role: string;
      address: any;
      avatar: string;
      phone: string;
    };
    access_token: string;
  }

  interface ITopRestaurant {
    _id: string;
    name: string;
    phone: string;
    address: string;
    email: string;
    rating: number;
    image: string;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;
  }
}
