import { Component, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent (shallowTests", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES: Hero[];

  @Component({
    selector: "app-hero",
    template: "<div></div>",
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
    // @Output() delete = new EventEmitter();
  }

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    HEROES = [
      { id: 1, name: "SuperDude", strength: 50 },
      { id: 2, name: "WonderGal", strength: 70 },
    ];
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, FakeHeroComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      // schemas: [NO_ERRORS_SCHEMA] - we can comment this out if we use the FakeHeroComponent
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it("should set heroes correctly from the service", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(2);
  });

  it("should create 1 li for each hero", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css("li")).length).toBe(2);
  });
});
