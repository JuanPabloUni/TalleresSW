import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  selectedCafe!: Cafe;

  selected: Boolean = false;

  cafes: Array<Cafe> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  onSelected(cafe: Cafe): void {
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
