import { Controller, Post, Req, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("/login")
  async getUsers(@Req() req, @Body() body): Promise<any> {
    console.log("params", body);
    return await this.authService.toLogin(body);
  }
}
