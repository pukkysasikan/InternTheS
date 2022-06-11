import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.page.html',
  styleUrls: ['./detail-tour.page.scss'],
})
export class DetailTourPage implements OnInit {
  pagkage = [
    {
      thainame: 'ไร่เลย์ เบย์ รีสอร์ท แอนด์ สปา',
      englishname: 'Railay Bay Resort',
      price: "2,590",
      icon1: 'รถรับส่งส่วนตัว',
      icon2: 'พักรีสอร์ทติดหาดติดหาดไร่เลย์ ',
      icon3: 'อาหารเช้าแบบบุฟเฟ่ต์ 2 มื้อ',
      image:
        'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/0/0/Home-Recommend-3z-z877547007295.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
