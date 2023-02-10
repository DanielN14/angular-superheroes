import { Component } from '@angular/core'
import { Heroe } from 'src/models/Heroe.model'
import { heroesData } from 'src/data/heroes.data'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-superHeroes'

    heroes = heroesData

    showHeroeSelected(heroe: Heroe) {
        alert(`Nombre: ${heroe.name} \nSuperPoder: ${heroe.superPower}`)
    }
}
