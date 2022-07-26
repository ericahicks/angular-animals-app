# Animals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Backend spring-mvc project changes

In the spring-mvc repository, edit the DogController.java to contain a search by breed api and a CORS filter to allow cross origin requests.

``@Controller
public class DogController {

	// To get all dogs
	// GetMapping is @RequestMapping with method as RequestMethod.GET by default
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/dogs")
	@ResponseBody
	public List<Dog> findAllDogs() {
		System.out.println("Finding all dogs!");
		ArrayList<Dog> dogs = new ArrayList<>();
		dogs.add(new Dog("Levi", "Golden Retriever", 1));
		dogs.add(new Dog("Shelty", "Shetsland Sheep Dog", 5));
		dogs.add(new Dog("Gomez", "Irish Setter", 6));
		dogs.add(new Dog("Jaeger", "German Sheperd", 7));
		
		// Nice thing about Spring MVC.
		
		// Jackson is auto done for us if we annotate the method @ResponseBody
		return dogs;
	}
	
	// Find dog by id
	
	// Find dog by breed 
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/dogs/breed/{breed}")
	@ResponseBody
	public List<Dog> findDogsByBreed(@PathVariable String breed) {
		System.out.println("Finding dogs of breed: " + breed);
		ArrayList<Dog> dogs = new ArrayList<>();
		dogs.add(new Dog("Levi", "Golden Retriever", 1));
		dogs.add(new Dog("Shelty", "Shetsland Sheep Dog", 5));
		dogs.add(new Dog("Gomez", "Irish Setter", 6));
		dogs.add(new Dog("Jaeger", "German Sheperd", 7));
		
		dogs.removeIf(dog -> !dog.getBreed().equals(breed));
		
		// Nice thing about Spring MVC.
		
		// Jackson is auto done for us if we annotate the method @ResponseBody
		return dogs;
	}
	
	// Create dog
	
	// Update dog
	
	// Delete dog
}``

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
