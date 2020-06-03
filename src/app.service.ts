import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "我来自nest后台数据!";
  }

  getList(): string[] {
    return ["小老鼠", "烧烤", "火鸡面", "袋鼠"];
  }
}
