import {CategoriasRoutes } from './Categoria';
import {AgendaRoutes } from './agendaViajes';
import {HbitacionesRoutes } from './Habitacion';
import { HotelesRoutes} from './Hotel';
import { PersonasRoutes} from './Personas';
import {ReservasRoutes} from './Reserva';

export class Routes {
    public agendaRoutes: AgendaRoutes = new AgendaRoutes();
    public categoriaRoutes: CategoriasRoutes = new CategoriasRoutes();
    public habitacionRoutes: HbitacionesRoutes = new HbitacionesRoutes();
    public hotelesRoutes: HotelesRoutes = new HotelesRoutes();
    public personaRoutes: PersonasRoutes = new PersonasRoutes();
    public reservaRoutes: ReservasRoutes = new ReservasRoutes();
}
