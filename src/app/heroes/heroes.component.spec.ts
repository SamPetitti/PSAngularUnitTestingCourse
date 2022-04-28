import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let HEROES;

  let mockHeroesService;
  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 2, name: "SuperDude", strength: 22 },
      { id: 3, name: "BatDude", strength: 14 },
      { id: 4, name: "Wonderful Woman", strength: 43 },
    ];

    mockHeroesService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    component = new HeroesComponent(mockHeroesService);
  });

  describe("delete", () => {
    it("should remove indicated hero from the heroes list", () => {
      mockHeroesService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(3);
      expect(component.heroes.map(h => h.id)).toContain(1);
      expect(component.heroes.map((h) => h.id)).toContain(2);
      expect(component.heroes.map((h) => h.id)).toContain(4);
    });

    it("should call delete hero from delete hero service", () => {
       mockHeroesService.deleteHero.and.returnValue(of(true));
       component.heroes = HEROES;

       component.delete(HEROES[2]);

       expect(mockHeroesService.deleteHero).toHaveBeenCalled();
    })
  });
});
