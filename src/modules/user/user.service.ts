import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  async getUserList() {
    return [
      {
        date: "2020-05-02",
        name: "照眼明",
        province: "上海",
        city: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
        zip: 200333,
      },
      {
        date: "2019-05-04",
        name: "留一方",
        province: "四川",
        city: "宜宾",
        address: "火星镇琉球村世界之都小镇",
        zip: 200333,
      },
      {
        date: "2011-05-01",
        name: "王亚兵",
        province: "北京",
        city: "大兴区",
        address: "曹德镇猛犸村1111号",
        zip: 200333,
      },
      {
        date: "2050-05-03",
        name: "刘狗蛋",
        province: "阿布斯特",
        city: "蜗牛",
        address: "蜗居",
        zip: 200333,
      },
    ];
  }
}
