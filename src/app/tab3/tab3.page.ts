import { Component } from '@angular/core';
import { HuespedService } from '../services/huesped.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public leng : string;
  public act : string;
  public historia: string;
  public historiaT: string;
  public actividadesT: string;
  public actividades: string;
  public recomendacionesT: string;
  public recomendaciones: string;
  public laguna: string;
  public lagunaT: string;
  public numerosEmerT : string;
  public numerosEmer : string;

  constructor(private huespedService : HuespedService) {
    this.leng = this.huespedService.getLang();
    this.checkLanguage();
  }

  public changeLang(l:string){
    this.leng=l
    this.checkLanguage()
  }


  public checkLanguage() {
    switch (this.leng) {
      case 'es':
        this.act = "Actividades";
       this.historiaT = "SANTA MARÍA DEL ORO NAYARIT";
       this.historia = " Este bello lugar cuenta con atractivos turísticos llenos de una gran historia, cultura y tradición; en su centro histórico se pueden admirar detalles que a simple vista logran encantar a todos, así como elementos que son típicos y característicos de la región nayarita \n"+
        "La Laguna de Santa María del Oro es mundialmente conocida, ocupa el fondo de un cráter volcánico en plena Sierra Madre Occidental a orillas del territorio Huichol. \n"+
        "Luce aguas verdes, azul turquesa o gris, según la hora del día y la temporada del año. Además de sus hoteles, bungalows y cabañas, donde podrás disfrutar una agradable estancia a la orilla de la laguna. "
       this.actividadesT = "Actividades";
       this.actividades = "Se pueden realizar diversas actividades de naturaleza como avistamiento de aves, paseo en lancha, pesca deportiva, deportes acuáticos como windsurf, kayak y wakeboarding; es ideal para la natación, snorkel y el buceo en altitud; sus riveras invitan a acampar, hacer rappel, tirolesa, pasear a caballo o sólo caminar por las tardes y relajarse en algún restaurante para disfrutar de los mágicos atardeceres";
       this.recomendacionesT = "Recomendaciones";
       this.recomendaciones = "La Laguna de Santa María del Oro  \n Cascada de la Silla \n Templo del Señor de la Asención \n Ruinas de la Hacienda San José Mojarras"
       this.lagunaT = "Leyenda de la laguna";
       this.laguna = "Una leyenda de desamor rodea este bello lugar. Se dice que el rey de Michiztlán, un poblado antiguo, tenía una hija hermosa. Ésta se enamoró de un hombre que formaba parte de un pueblo enemigo. El rey, al enterarse de esto, enfureció y mandó amarrar a ambos jóvenes a distintos postes cerca del cráter donde se encuentra la laguna. Al verse el uno al otro, pero sin poderse tocar, lloraron toda la noche hasta que sus lágrimas formaron la laguna";
       this.numerosEmerT = "Numeros de emergencia";
       this.numerosEmer = "Cruz Roja: 213-11-60 \n Bomberos: 213-16-07, 213-18-09 \n ISSTE: 213-12-95 \n IMSS: 212-38-38 \n Emergencias: 066 \n Seguridad para el turista: 01-800-90392 \n Denuncia Anónima: 089"
       break;
      case 'en':
        this.act = "Activities";
       this.historiaT = "SANTA MARÍA DEL ORO NAYARIT";
       this.historia = " This beautiful place has tourist attractions full of great history, culture and tradition; In its historic center you can admire details that at first glance manage to enchant everyone, as well as elements that are typical and characteristic of the Nayarit region \n"+
       "The Laguna de Santa María del Oro is known worldwide, it occupies the bottom of a volcanic crater in the middle of the Sierra Madre Occidental on the shores of the Huichol territory. \n"+
       "It shows off green, turquoise blue or gray waters, depending on the time of day and the season of the year. In addition to its hotels, bungalows and cabins, where you can enjoy a pleasant stay on the shore of the lagoon. "
       this.actividadesT = "Activities";
       this.actividades = "You can do various nature activities such as bird watching, boat ride, sport fishing, water sports such as windsurfing, kayaking and wakeboarding; it is ideal for swimming, snorkeling and diving at altitude; Its banks invite you to camp, rappel, zip line, horseback ride or just walk in the afternoon and relax in a restaurant to enjoy the magical sunsets";
       this.recomendacionesT = "Recomendations";
       this.recomendaciones = "La Laguna de Santa María del Oro  \n Cascada de la Silla \n Templo del Señor de la Asención \n Ruinas de la Hacienda San José Mojarras"
       this.lagunaT = "Lagoon leyend";
       this.laguna = "A legend of heartbreak surrounds this beautiful place. It is said that the king of Michiztlán, an ancient town, had a beautiful daughter. She fell in love with a man who was part of an enemy town. The king, upon learning of this, became enraged and ordered both young men to be tied to different posts near the crater where the lagoon is located. Seeing each other, but unable to touch each other, they cried all night until their tears formed the lagoon.";
       this.numerosEmerT = "Emergency numbers";
       this.numerosEmer = "Red Cross: 213-11-60 \n Firefighters: 213-16-07, 213-18-09 \n ISSTE: 213-12-95 \n IMSS: 212-38-38 \n Emergencies: 066 \n Security for the tourist: 01-800-90392 \n Anonymous Complaint: 089"
       break; 
      case 'fr':
        this.act = "Activités";
       this.historiaT = "SANTA MARÍA DEL ORO NAYARIT";
       this.historia = " Ce bel endroit a des attractions touristiques pleines d'histoire, de culture et de tradition; Dans son centre historique, vous pourrez admirer des détails qui, à première vue, parviennent à enchanter tout le monde, ainsi que des éléments typiques et caractéristiques de la région de Nayarit \n"+
       "La Laguna de Santa María del Oro est connue dans le monde entier, elle occupe le fond d'un cratère volcanique au milieu de la Sierra Madre Occidental sur les rives du territoire Huichol. \n"+
       "Elle dévoile des eaux vertes, bleu turquoise ou grises, selon l'heure de la journée et la saison de l'année. En plus de ses hôtels, bungalows et cabanes, où vous pourrez profiter d'un agréable séjour au bord du lagon. "
       this.actividadesT = "Activités";
       this.actividades = "Vous pouvez pratiquer diverses activités nature telles que l'observation des oiseaux, la promenade en bateau, la pêche sportive, les sports nautiques tels que la planche à voile, le kayak et le wakeboard ; il est idéal pour la baignade, le snorkeling et la plongée en altitude ; Ses rives vous invitent au camping, au rappel, à la tyrolienne, à l'équitation ou tout simplement à vous promener l'après-midi et à vous détendre dans un restaurant pour profiter des couchers de soleil magiques.";
       this.recomendacionesT = "recommandations";
       this.recomendaciones = "La Laguna de Santa María del Oro  \n Cascada de la Silla \n Templo del Señor de la Asención \n Ruinas de la Hacienda San José Mojarras"
       this.lagunaT = "légende du lagon";
       this.laguna = "Une légende de chagrin entoure ce bel endroit. On dit que le roi de Michiztlán, une ville ancienne, avait une belle fille. Elle est tombée amoureuse d'un homme qui faisait partie d'une ville ennemie. Le roi, en apprenant cela, devint furieux et ordonna aux deux jeunes hommes d'être attachés à différents postes près du cratère où se trouve la lagune. Se voyant, mais incapables de se toucher, ils pleurèrent toute la nuit jusqu'à ce que leurs larmes forment le lagon.";
       this.numerosEmerT = "Numéros d'urgence";
       this.numerosEmer = "Croix Rouge : 213-11-60 \n Pompiers : 213-16-07, 213-18-09 \n ISSTE : 213-12-95 \n IMSS : 212-38-38 \n Urgences : 066 \n Sécurité pour le touriste : 01-800-90392 \n Plainte anonyme : 089"
       break; 
    }
  }
}
