
Escape.destroy_all
Animal.destroy_all
# Zoo.destroy_all


dumbo = Animal.create(name: "Dumbo")
banana_dog = Animal.create(name: "Clifford")
Animal.create(name: "Harambe")

bronx = Zoo.create(name: "Bronx Zoo")
prosp = Zoo.create(name: "Prospect Park Zoo")
Zoo.create(name: "Brookfield Zoo")
Zoo.create(name: "Lincoln Park Zoo")
Zoo.create(name: "San Diego Zoo")


Escape.create(animal_id: banana_dog.id, zoo_id: Zoo.find_by(name: "Brookfield Zoo").id)
Escape.create(zoo_id: Zoo.find_by(name: "Brookfield Zoo").id, animal_id: banana_dog.id)
# Escape.create(animal: dumbo, zoo: bronx)
# Escape.create(animal: dumbo, zoo: prosp)

