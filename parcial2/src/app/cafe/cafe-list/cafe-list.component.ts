import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { CafeDetail } from '../cafe-detail';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  selectedCafe!: CafeDetail;

  selected: Boolean = false;

  cafes: Array<CafeDetail> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  onSelected(cafe: CafeDetail): void {
    this.selected = true;
    this.selectedCafe = cafe;
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.totalCafeOrigen = this.contCafeOrigen();
      this.totalCafeBlend = this.contCafeBlend();
    });
  }

  ngOnInit() {
    this.getCafes();
  }

  private contCafeOrigen(): number {
    return this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
  }

  private contCafeBlend(): number {
    return this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }

}
