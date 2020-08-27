import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items:Object[] = [
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/231/original/zach-betten-K9olx8OF36A-unsplash.png?1598453010',
      "price" : 'R$150/Noite',
      "title" : 'Trickle Creek Ranch',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/412/full/zach-betten-K9olx8OF36A-unsplash-1.png?1598459339',
      "price" : 'R$150/Noite',
      "title" : 'Dragonfly Tiny Cabin',
      "heart" : true
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/417/full/zach-betten-K9olx8OF36A-unsplash-8.png?1598459423',
      "price" : 'R$150/Noite',
      "title" : 'Tiny Cabin in the mountains',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/418/full/zach-betten-K9olx8OF36A-unsplash-4.png?1598459459',
      "price" : 'R$150/Noite',
      "title" : 'The Stuga',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/419/full/zach-betten-K9olx8OF36A-unsplash.png?1598459504',
      "price" : 'R$150/Noite',
      "title" : 'Luxury Tiny Beach Cabin',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/464/full/zach-betten-K9olx8OF36A-unsplash-9.png?1598460987',
      "price" : 'R$150/Noite',
      "title" : 'The Summit Cabin',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/467/thumb/zach-betten-K9olx8OF36A-unsplash-3.png?1598461092',
      "price" : 'R$150/Noite',
      "title" : 'Kindred Spirits Cabin',
      "heart" : true
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/469/thumb/zach-betten-K9olx8OF36A-unsplash-6.png?1598461121',
      "price" : 'R$150/Noite',
      "title" : 'The Hermitage Cabin',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/471/thumb/zach-betten-K9olx8OF36A-unsplash-10.png?1598461148',
      "price" : 'R$150/Noite',
      "title" : 'Red Lifeguard Stand',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/472/thumb/zach-betten-K9olx8OF36A-unsplash-2.png?1598461205',
      "price" : 'R$150/Noite',
      "title" : 'The Tree House',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/473/thumb/zach-betten-K9olx8OF36A-unsplash-7.png?1598461243',
      "price" : 'R$150/Noite',
      "title" : 'Barrier island elevated tent',
      "heart" : false
    },
    {
      "image": 'https://uploaddeimagens.com.br/images/002/850/474/full/zach-betten-K9olx8OF36A-unsplash-5.png?1598461277',
      "price" : 'R$150/Noite',
      "title" : 'Ninovan on the Shore',
      "heart": false
    },
  ]
  constructor() { }
  handleClickHeartIcon(index, array) {
    if(array[index].heart === false) {
      return array[index].heart = true
    } return array[index].heart = false
  }
  ngOnInit(): void {

  }

}
