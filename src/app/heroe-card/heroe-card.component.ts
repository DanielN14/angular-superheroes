import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Heroe } from 'src/models/Heroe.model'
@Component({
    selector: 'app-heroe-card',
    templateUrl: './heroe-card.component.html',
    styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent {
    @Input()
    heroe!: Heroe

    @Output()
    heroeSelected = new EventEmitter<Heroe>()

    emitHeroe() {
        this.heroeSelected.emit(this.heroe)
    }
}
