import { environment } from 'src/environments/environment';
import { KeyGenerator } from 'src/app/shared/helpers/keygenerator';
import { CoreService } from '../services/core.service';

/**
 * The database model
 */
export class Database {

  /**
   * The database's name
   */
  public readonly dbname: string;

  constructor() {
    this.dbname = environment.database.name;
  }

  /**
   * Creates a new database
   */
  public createDatabase(): Promise<any> {
    return new Promise<any>(resolve => {
      const db = {
        account: {
          username: '',
          key: KeyGenerator.generate()
        }
      };

      localStorage.setItem("db_mas", JSON.stringify(db));
      console.info('[MAS] Database was successfully created!');

      resolve();
    });
  }

  /**
   * Loads the database
   */
  public getData(): Promise<any> {
    return new Promise<any>(resolve => {
      if (localStorage.getItem(this.dbname) === null) {
        this.createDatabase()
          .then(() => {
            this.getData()
              .then(db => {
                resolve(db);
              });
          });
      } else {
        const db = JSON.parse(localStorage.getItem(this.dbname));

        console.info('[MAS] Database was successfully loaded!');
        resolve(db);
      }
    });
  }
}
