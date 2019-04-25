Car.destroy_all
Brand.destroy_all
Manufacturer.destroy_all

toyota = Manufacturer.create!(name: "Toyota")
hyundai = Manufacturer.create!(name: "Hyundai")
honda = Manufacturer.create!(name: "Honda")
tesla = Manufacturer.create!(name: "Tesla")

yaris = Brand.create!(name: "Yaris", manufacturer_id: toyota.id)
elantra = Brand.create!(name: "Elantra", manufacturer: hyundai)
model_3 = Brand.create!(name: "Model 3", manufacturer: tesla)
camry = Brand.create!(name: "Camry", manufacturer: toyota)
accord = Brand.create!(name: "Accord", manufacturer: honda)
civic = Brand.create!(name: "Civic", manufacturer: honda)

Car.create!(year: 2001, brand: civic)
Car.create!(year: 1999, brand: accord)
Car.create!(year: 1999, brand: camry)
Car.create!(year: 2020, brand: camry)
Car.create!(year: 2018, brand: model_3)
Car.create!(year: 2019, brand: yaris)

