import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Hero } from "../hero";
import { HeroComponent } from "./hero.component";

describe("HeroComponent (shallow tests)", () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it("should have the correct hero", () => {
    fixture.componentInstance.hero = { id: 1, name: "SuperDude", strength: 3 };
    expect(fixture.componentInstance.hero.name).toEqual("SuperDude");
  });

  it("should render the hero name in the anchor tag", () => {
    fixture.componentInstance.hero = { id: 1, name: "SuperDude", strength: 3 };
    //this helps implement the binding of values
    fixture.detectChanges();

    //native element exposes the DOM api
    expect(fixture.nativeElement.querySelector('a').textContent).toContain(
      "SuperDude"
    );

    //alternative to native element is the debugElement that has a different set of functionality
      expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');



  });
});
