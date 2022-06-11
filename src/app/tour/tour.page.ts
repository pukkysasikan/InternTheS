import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {
  pagkage = [
    { thainame: 'ไร่เลย์ เบย์ รีสอร์ท แอนด์ สปา',
     englishname: 'Railay Bay Resort',
     price: "2,590",
     icon1: 'รถรับส่งส่วนตัว',
     icon2: 'พักรีสอร์ทติดหาดติดหาดไร่เลย์ ',
     icon3: 'อาหารเช้าแบบบุฟเฟ่ต์ 2 มื้อ',
     image: 'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/0/0/Home-Recommend-3z-z877547007295.jpg'} ,
     {thainame: 'เคซี แกรนด์ รีสอร์ท แอนด์ สปา',
     englishname: 'KC Grande Resort',
     icon1: 'รถรับส่งส่วนตัว',
     price: "3,390",
     icon2: 'พักผ่อนติดเกาะหย่อนใจ',
     icon3: 'อาหารเช้าแบบบุฟเฟ่ต์ 2 มื้อ',
     image: 'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/1610/0/Home-Recommend-1z-z1094936940018.jpg'} ,
     {thainame: 'ทรายแก้ว บีช รีสอร์ท',
     englishname: 'Sai Keaw Beach Resort',
     icon1: 'รถรับส่งส่วนตัว',
     price: "2,590",
     icon2: 'พักรีสอร์ทติดหาดติดหาดไร่เลย์ ',
     icon3: 'พร้อมอาหารเช้าแบบบุฟเฟ่ต์ 2 มื้อ',
     image: 'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/0/0/Home-Recommend-3z-z877547007295.jpg'} ,
     {thainame: 'โนโวเทล ระยอง ริมแพ รีสอร์ท',
     englishname: 'NovotelRayong Rimpae',
     icon1: 'รถรับส่งส่วนตัว',
     price: "1,149",
     icon2: 'พักรีสอร์ทติดหาดติดหาดไร่เลย์ ',
     icon3: 'พร้อมอาหารเช้าแบบบุฟเฟ่ต์ 2 มื้อ',
     image: 'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/526/0/Novotel-19-5-65z-z257763485456.jpg'} ,
 ];
  constructor() { }

  ngOnInit() {
  }

}
