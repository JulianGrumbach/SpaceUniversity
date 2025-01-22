import { Database } from './database';

interface Hero {
  alias: string;
  img: string;
  name: string;
}

class HeroStore extends Database {
  constructor(options: any = {}) {
    super('HERO_STORE', options);
  }

  init(): void {
    this.add({ name: 'Batman', alias: 'Bruce Wayne', img: 'batman.jpg' });
    this.add({ name: 'Hulk', alias: 'Bruce Banner', img: 'hulk.jpg' });
    this.add({ name: 'Iron man', alias: 'Tony Stark', img: 'ironman.jpg' });
    this.add({
      name: 'Spiderman',
      alias: 'Peter Parker',
      img: 'spiderman.jpg',
    });
    this.add({ name: 'Superman', alias: 'Clark Kent', img: 'superman.jpg' });
  }

  add(hero: Hero): void {
    this.createIfNotExisted(hero, 'name');
  }
}

export const heroStore = new HeroStore();
