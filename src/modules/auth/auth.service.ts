import { Injectable } from "@nestjs/common";

interface LoginInfo {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  async toLogin(body: LoginInfo) {
    if (body.username === "admin") {
      return {
        status: 200,
        message: "登录成功",
      };
    } else {
      return {
        status: 10010,
        message: "登录失败,用户名密码错误",
      };
    }
  }
}
