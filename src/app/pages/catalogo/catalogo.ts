import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosService } from '../../services/produtos';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent
  ],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  produtos: any[] = [];
  busca = '';

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.listarProdutos().subscribe((dados: any[]) => {
      this.produtos = dados;
    });
  }

  get filtrados() {
    return this.produtos.filter(p =>
      p.title.toLowerCase().includes(this.busca.toLowerCase())
    );
  }
}
