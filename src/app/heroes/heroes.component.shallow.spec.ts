import { Component, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent (shallowTests', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES: Hero[];
  beforeEach(() => {
     mockHeroService = jasmine.createSpyObj(['getHeroes','addHero', 'deleteHero']);
     HEROES = [ { id: 1, name: 'SuperDude', strength: 50}, {id: 2, name: 'WonderGal', strength: 70}]
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroesComponent);

  });

  it('should set heroes correctly from the service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(2);
  })

})
