import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "nest 初始化 get Hello!";
  }

  getList(): string[] {
    return ["小老鼠", "烧烤", "火鸡面", "袋鼠"];
  }
}
